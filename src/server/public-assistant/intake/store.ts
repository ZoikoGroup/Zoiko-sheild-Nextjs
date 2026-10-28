import { createCipheriv, createDecipheriv, createHash, randomBytes } from "crypto";
import { promises as fs } from "fs";
import path from "path";
import type { IntakeKind, Receipt } from "@/lib/public-assistant/contract";

// Durable intake store. Append-only JSONL with fsync: one line holds the
// submission AND its outbox event, so "accepted" and "queued for delivery" can't
// diverge (plan §6 Phase D). Contact PII lives only in the encrypted payload.

export interface EncryptedPayload {
  key_id: string;
  iv: string;
  tag: string;
  ct: string;
}

export type DeliveryTarget = "CRM" | "HELPDESK" | "PRIVACY";
export type DeliveryState = "PENDING" | "RETRY" | "DELIVERED" | "DEAD_LETTER";

export interface SubmissionRecord {
  type: "submission";
  id: string;
  kind: IntakeKind;
  public_reference: string;
  status: Receipt["status"];
  payload: EncryptedPayload;
  payload_hash: string;
  market: string | null;
  locale: string | null;
  notice_version: string;
  idempotency_key: string;
  fingerprint: string;
  created_at: string;
  retention_until: string;
  outbox: { topic: string; targets: DeliveryTarget[] };
}

export interface DeliveryRecord {
  type: "delivery";
  submission_id: string;
  target: DeliveryTarget;
  state: DeliveryState;
  attempts: number;
  next_at: number;
  external_ref?: string;
  last_error_code?: string;
  at: string;
}

// ---- encryption ------------------------------------------------------------

function intakeKey(): Buffer | null {
  const raw = process.env.PUBLIC_ASSISTANT_INTAKE_KEY;
  if (!raw) return null;
  const key = Buffer.from(raw, "base64");
  return key.length === 32 ? key : null;
}

export function intakeConfigured(): boolean {
  return !!intakeKey() && !!process.env.PUBLIC_ASSISTANT_NOTICE_VERSION;
}

export function encrypt(value: object): EncryptedPayload {
  const key = intakeKey();
  if (!key) throw new Error("Intake key not configured");
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", key, iv);
  const ct = Buffer.concat([cipher.update(JSON.stringify(value), "utf8"), cipher.final()]);
  return {
    key_id: createHash("sha256").update(key).digest("hex").slice(0, 8),
    iv: iv.toString("base64"),
    tag: cipher.getAuthTag().toString("base64"),
    ct: ct.toString("base64"),
  };
}

export function decrypt(payload: EncryptedPayload): Record<string, unknown> {
  const key = intakeKey();
  if (!key) throw new Error("Intake key not configured");
  const decipher = createDecipheriv("aes-256-gcm", key, Buffer.from(payload.iv, "base64"));
  decipher.setAuthTag(Buffer.from(payload.tag, "base64"));
  const pt = Buffer.concat([decipher.update(Buffer.from(payload.ct, "base64")), decipher.final()]);
  return JSON.parse(pt.toString("utf8"));
}

// ---- files -----------------------------------------------------------------

function dataDir(): string {
  return process.env.PUBLIC_ASSISTANT_DATA_DIR || path.join(process.cwd(), ".data", "public-assistant");
}

interface Loaded {
  dir: string;
  byKey: Map<string, SubmissionRecord>;
  byId: Map<string, SubmissionRecord>;
  deliveries: Map<string, DeliveryRecord>;
}

const g = globalThis as { __zsPaStore?: Promise<Loaded>; __zsPaLock?: Promise<unknown> };

async function readLines<T>(file: string): Promise<T[]> {
  try {
    const text = await fs.readFile(file, "utf8");
    return text
      .split("\n")
      .filter(Boolean)
      .flatMap((line) => {
        try {
          return [JSON.parse(line) as T];
        } catch {
          return []; // a torn final line from a crash
        }
      });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}

async function load(): Promise<Loaded> {
  const dir = dataDir();
  await fs.mkdir(dir, { recursive: true, mode: 0o700 });
  const byKey = new Map<string, SubmissionRecord>();
  const byId = new Map<string, SubmissionRecord>();
  for (const s of await readLines<SubmissionRecord>(path.join(dir, "submissions.jsonl"))) {
    byKey.set(s.idempotency_key, s);
    byId.set(s.id, s);
  }
  const deliveries = new Map<string, DeliveryRecord>();
  for (const d of await readLines<DeliveryRecord>(path.join(dir, "deliveries.jsonl"))) deliveries.set(`${d.submission_id}:${d.target}`, d);
  // Outbox events with no delivery record yet are pending.
  for (const s of byId.values()) {
    for (const target of s.outbox.targets) {
      const k = `${s.id}:${target}`;
      if (!deliveries.has(k)) deliveries.set(k, { type: "delivery", submission_id: s.id, target, state: "PENDING", attempts: 0, next_at: 0, at: s.created_at });
    }
  }
  return { dir, byKey, byId, deliveries };
}

export function store(): Promise<Loaded> {
  return (g.__zsPaStore ??= load());
}

/** Reset the in-memory view (tests switch data dirs). */
export function resetStore() {
  g.__zsPaStore = undefined;
}

/** Serialize writers so the idempotency check and the append are atomic. */
export function withLock<T>(fn: () => Promise<T>): Promise<T> {
  const run = (g.__zsPaLock ?? Promise.resolve()).then(fn, fn);
  g.__zsPaLock = run.catch(() => undefined);
  return run;
}

async function append(file: string, record: object) {
  const s = await store();
  const handle = await fs.open(path.join(s.dir, file), "a", 0o600);
  try {
    await handle.appendFile(JSON.stringify(record) + "\n", "utf8");
    await handle.sync();
  } finally {
    await handle.close();
  }
}

export async function appendSubmission(record: SubmissionRecord) {
  await append("submissions.jsonl", record);
  const s = await store();
  s.byKey.set(record.idempotency_key, record);
  s.byId.set(record.id, record);
  for (const target of record.outbox.targets) {
    s.deliveries.set(`${record.id}:${target}`, { type: "delivery", submission_id: record.id, target, state: "PENDING", attempts: 0, next_at: 0, at: record.created_at });
  }
}

export async function appendDelivery(record: DeliveryRecord) {
  await append("deliveries.jsonl", record);
  (await store()).deliveries.set(`${record.submission_id}:${record.target}`, record);
}

/** Segregated from submissions: marketing consent never rides along with an intake record. */
export async function appendMarketingPreference(record: object) {
  await append("marketing-preferences.jsonl", record);
}
