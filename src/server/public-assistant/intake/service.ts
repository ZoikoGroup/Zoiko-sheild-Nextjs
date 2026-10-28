import { createHash, createHmac, randomBytes, randomUUID } from "crypto";
import {
  INTAKE,
  INTAKE_KINDS,
  validateFields,
  type IntakeKind,
  type Option,
  type OptionSource,
  type Receipt,
  type ResolvedForm,
  type SubmissionKeyBody,
} from "@/lib/public-assistant/contract";
import { ApiError, type Ctx } from "../http";
import { isOn } from "../flags";
import { eligible, getCorpus, route } from "../publication";
import { detectSecrets, redact } from "../safety/detectors";
import type { GuestSession } from "../session";
import { take } from "../rate-limit";
import { logEvent } from "../metrics";
import { appendMarketingPreference, appendSubmission, encrypt, intakeConfigured, store, withLock, type SubmissionRecord } from "./store";
import { drain, startWorker, targetsFor } from "./delivery";

const KEY_TTL_MS = 30 * 60_000;
const RETENTION_DAYS = () => Number(process.env.PUBLIC_ASSISTANT_RETENTION_DAYS) || 90;

interface IssuedKey {
  kind: IntakeKind;
  sessionHash: string;
  expiresAt: number;
}

const keys = ((globalThis as { __zsPaKeys?: Map<string, IssuedKey> }).__zsPaKeys ??= new Map());

export function noticeVersion(): string | null {
  return process.env.PUBLIC_ASSISTANT_NOTICE_VERSION || null;
}

/** A journey's form is live only with its flag on, a notice version, and an encryption key. */
export function intakeEnabled(kind: IntakeKind): boolean {
  return isOn(INTAKE[kind].flag) && intakeConfigured();
}

export function intakeAvailability(): Record<IntakeKind, boolean> {
  return Object.fromEntries(INTAKE_KINDS.map((k) => [k, intakeEnabled(k)])) as Record<IntakeKind, boolean>;
}

const SUPPORT_CATEGORIES: Option[] = [
  { id: "account", label: "Account or billing" },
  { id: "product", label: "Product question" },
  { id: "technical", label: "Technical issue" },
  { id: "security_question", label: "Security question (not an active incident)" },
  { id: "other", label: "Something else" },
];

const PRIVACY_REQUEST_TYPES: Option[] = [
  { id: "access", label: "Access my data" },
  { id: "deletion", label: "Delete my data" },
  { id: "correction", label: "Correct my data" },
  { id: "objection", label: "Object to or restrict processing" },
  { id: "other", label: "Something else" },
];

function options(source: OptionSource, market?: string): Option[] {
  const c = getCorpus();
  const aud = { market };
  switch (source) {
    case "markets":
      return c.markets;
    case "plans":
      return eligible(c.plans, aud).map((p) => ({ id: p.plan_id, label: p.name }));
    case "asset_bands":
      return c.asset_bands.map((b) => ({ id: b.band_id, label: b.label }));
    case "ingestion_bands":
      return c.ingestion_bands.map((b) => ({ id: b.band_id, label: b.label }));
    case "trust_topics":
      return c.trust_topics.map((t) => ({ id: t.topic_id, label: t.title }));
    case "connector_categories":
      return c.connector_categories;
    case "environments":
      return c.discovery.environments;
    case "personas":
      return c.personas;
    case "capabilities":
      return eligible(c.capabilities, aud).map((x) => ({ id: x.capability_id, label: x.name }));
    case "support_categories":
      return SUPPORT_CATEGORIES;
    case "privacy_request_types":
      return PRIVACY_REQUEST_TYPES;
  }
}

export function resolveForm(kind: IntakeKind, market?: string): ResolvedForm {
  return {
    kind,
    fields: INTAKE[kind].fields.map((f) => (f.options_from ? { ...f, options: options(f.options_from, market) } : { ...f })),
  };
}

function parseKind(value: unknown): IntakeKind {
  if (typeof value !== "string" || !INTAKE_KINDS.includes(value as IntakeKind)) {
    throw new ApiError(400, "VALIDATION_FAILED", "Unknown request type.", { field_errors: { journey: "Unknown." } });
  }
  return value as IntakeKind;
}

function assertEnabled(kind: IntakeKind) {
  if (!intakeEnabled(kind)) {
    throw new ApiError(403, "FEATURE_DISABLED", "This request can't be sent from chat right now. Please use the link instead.");
  }
}

export function issueKey(session: GuestSession, body: Record<string, unknown>): SubmissionKeyBody {
  const kind = parseKind(body.journey);
  assertEnabled(kind);
  const market = typeof body.market === "string" ? body.market : undefined;
  const now = Date.now();
  for (const [k, v] of keys) if (v.expiresAt <= now) keys.delete(k);
  const key = randomBytes(18).toString("base64url");
  keys.set(key, { kind, sessionHash: session.tokenHash, expiresAt: now + KEY_TTL_MS });
  startWorker();
  return {
    idempotency_key: key,
    expires_at: new Date(now + KEY_TTL_MS).toISOString(),
    notice_version: noticeVersion()!,
    notice_url: route("privacy_notice")?.url ?? "/privacy-notice",
    form: resolveForm(kind, market),
  };
}

function canonical(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.keys(value).sort().map((k) => `${JSON.stringify(k)}:${canonical((value as Record<string, unknown>)[k])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

const BASE32 = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
function publicReference(kind: IntakeKind): string {
  const bytes = randomBytes(10);
  return `ZS-${INTAKE[kind].reference_prefix}-${Array.from(bytes, (b) => BASE32[b % 32]).join("")}`;
}

/** Server-built, redacted summary of what the visitor chose to share (WF04/WF11). */
export function buildTranscriptSummary(raw: unknown): string | null {
  if (!Array.isArray(raw)) return null;
  const lines = raw
    .slice(-12)
    .filter((m): m is { role: string; text: string } => !!m && typeof m === "object" && typeof (m as { text?: unknown }).text === "string")
    .map((m) => `${m.role === "user" ? "Visitor" : "Assistant"}: ${redact(m.text).slice(0, 300)}`);
  if (lines.length === 0) return null;
  const summary = lines.join("\n");
  return summary.length > 2000 ? summary.slice(summary.length - 2000) : summary;
}

const ALLOWED_TOP_LEVEL = new Set(["idempotency_key", "notice_version", "notice_ack", "marketing_opt_in", "market", "locale", "fields", "transcript_share", "transcript"]);

export async function submit(ctx: Ctx, session: GuestSession, kind: IntakeKind, body: Record<string, unknown>) {
  assertEnabled(kind);
  take("submit", ctx.ipHash);

  const unknownKeys = Object.keys(body).filter((k) => !ALLOWED_TOP_LEVEL.has(k));
  if (unknownKeys.length) throw new ApiError(400, "VALIDATION_FAILED", "The request had unexpected fields.");
  const key = typeof body.idempotency_key === "string" ? body.idempotency_key : "";
  if (!/^[\w-]{20,40}$/.test(key)) throw new ApiError(400, "IDEMPOTENCY_KEY_REQUIRED", "Refresh the form and try again.");

  const values = body.fields && typeof body.fields === "object" && !Array.isArray(body.fields) ? (body.fields as Record<string, unknown>) : {};
  const market = typeof values.market === "string" ? values.market : typeof body.market === "string" ? body.market : undefined;
  const form = resolveForm(kind, market);
  const allowedFields = new Set(form.fields.map((f) => f.name));
  if (Object.keys(values).some((k) => !allowedFields.has(k))) throw new ApiError(400, "VALIDATION_FAILED", "The request had unexpected fields.");

  const fieldErrors = validateFields(form.fields, values);
  for (const f of form.fields) {
    if (f.free_text && typeof values[f.name] === "string" && detectSecrets(values[f.name] as string).length && !fieldErrors[f.name]) {
      fieldErrors[f.name] = "Remove passwords, keys, tokens or card numbers before sending.";
    }
  }
  if (body.notice_version !== noticeVersion()) {
    throw new ApiError(409, "NOTICE_CHANGED", "Our privacy notice changed. Please review it and submit again.");
  }
  if (body.notice_ack !== true) fieldErrors.notice_ack = "Please confirm you've read the privacy notice.";
  if (Object.keys(fieldErrors).length) throw new ApiError(422, "VALIDATION_FAILED", "Please fix the highlighted fields.", { field_errors: fieldErrors });

  const clean: Record<string, string> = {};
  for (const f of form.fields) {
    const v = values[f.name];
    if (typeof v === "string" && v.trim()) clean[f.name] = v.trim();
  }
  const transcriptSummary = kind === "SUPPORT" && body.transcript_share === true ? buildTranscriptSummary(body.transcript) : null;
  const marketingOptIn = body.marketing_opt_in === true;
  const fingerprint = createHash("sha256").update(canonical({ kind, clean, transcriptSummary, marketingOptIn })).digest("hex");

  const result = await withLock(async () => {
    const s = await store();
    const prior = s.byKey.get(key);
    if (prior) {
      if (prior.fingerprint !== fingerprint || prior.kind !== kind) {
        throw new ApiError(409, "IDEMPOTENCY_CONFLICT", "This form was already sent with different details. Start a new request to change them.");
      }
      return { receipt: { status: prior.status, public_reference: prior.public_reference, submission_id: prior.id }, replay: true };
    }
    const issued = keys.get(key);
    if (!issued || issued.expiresAt <= Date.now() || issued.kind !== kind || issued.sessionHash !== session.tokenHash) {
      throw new ApiError(410, "IDEMPOTENCY_KEY_EXPIRED", "This form expired. Refresh it and submit again.");
    }

    const now = new Date();
    const payload = { fields: clean, transcript_summary: transcriptSummary };
    const record: SubmissionRecord = {
      type: "submission",
      id: randomUUID(),
      kind,
      public_reference: publicReference(kind),
      status: kind === "PRIVACY" ? "PENDING_CONFIRMATION" : "ACCEPTED",
      payload: encrypt(payload),
      payload_hash: createHash("sha256").update(canonical(payload)).digest("hex"),
      market: market ?? null,
      locale: typeof body.locale === "string" ? body.locale.slice(0, 16) : null,
      notice_version: noticeVersion()!,
      idempotency_key: key,
      fingerprint,
      created_at: now.toISOString(),
      retention_until: new Date(now.getTime() + RETENTION_DAYS() * 86_400_000).toISOString(),
      outbox: { topic: "public_assistant.submission.accepted", targets: targetsFor(kind) },
    };
    await appendSubmission(record);
    keys.delete(key);
    if (marketingOptIn && clean.work_email) {
      const salt = process.env.PUBLIC_ASSISTANT_INTAKE_KEY!;
      await appendMarketingPreference({
        id: randomUUID(),
        work_email_hash: createHmac("sha256", salt).update(clean.work_email.toLowerCase()).digest("hex"),
        opted_in: true,
        notice_version: record.notice_version,
        purpose: "marketing",
        source: `assistant:${kind}`,
        recorded_at: record.created_at,
      });
    }
    const receipt: Receipt = { status: record.status, public_reference: record.public_reference, submission_id: record.id };
    return { receipt, replay: false };
  });

  logEvent("intake", { kind, replay: result.replay });
  if (!result.replay) void drain().catch(() => undefined);
  return { status: result.replay ? 200 : 201, body: { ...result.receipt, receipt_note: INTAKE[kind].receipt_note } };
}

export function summaryPreview(body: Record<string, unknown>) {
  return { summary: buildTranscriptSummary(body.transcript) };
}

export function kindForPath(path: string): IntakeKind | undefined {
  return INTAKE_KINDS.find((k) => INTAKE[k].path === path);
}
