import { FEEDBACK_REASONS, type ConfigBody, type StatusBody } from "@/lib/public-assistant/contract";
import { ApiError, assertCsrf, createCtx, errorResponse, json, readJson, sse, str, type Ctx } from "./http";
import { getFlags, isOn } from "./flags";
import { take } from "./rate-limit";
import { clearSession, createSession, findSession, requireSession, SESSION_TTL_MS } from "./session";
import { findSource, getCorpus, route, routes, toCitation, type Audience } from "./publication";
import { guideStep, helpArticle, helpHome, helpSearch } from "./journeys/help";
import {
  deploymentGuide,
  discoveryCatalog,
  discoveryMatches,
  fit,
  integrationsCatalog,
  onboardingChecklist,
  onboardingQuestions,
  plans,
  trustTopics,
} from "./journeys/catalogs";
import { breakerOpen, cancelMessage, postMessage, streamEvents } from "./conversation";
import { intakeAvailability, issueKey, kindForPath, submit, summaryPreview } from "./intake/service";
import { ANSWER_POLICY_VERSION } from "./ai/pipeline";
import { logEvent } from "./metrics";

export type Handler = (ctx: Ctx, id: string) => Promise<Response> | Response;
export interface RouteDef {
  method: "GET" | "POST";
  pattern: string[];
  handler: Handler;
}

const audience = (ctx: Ctx, body?: Record<string, unknown>): Audience => ({
  market: (body?.market as string) || ctx.query.get("market") || undefined,
  locale: (body?.locale as string) || ctx.query.get("locale") || undefined,
});

const feedbackSeen = ((globalThis as { __zsPaFeedback?: Set<string> }).__zsPaFeedback ??= new Set());

export const ROUTES: RouteDef[] = [
  {
    method: "GET",
    pattern: ["config"],
    handler: (ctx) => {
      const body: ConfigBody = {
        display_name: process.env.PUBLIC_ASSISTANT_DISPLAY_NAME || "ZoikoShield Assistant",
        clearance: "public",
        flags: getFlags(),
        routes: routes(),
        markets: getCorpus().markets,
        intake: intakeAvailability(),
        policy_versions: { notice: process.env.PUBLIC_ASSISTANT_NOTICE_VERSION || null, answer_policy: ANSWER_POLICY_VERSION },
      };
      return json(ctx, body);
    },
  },
  {
    method: "GET",
    pattern: ["status"],
    handler: (ctx) => {
      const flags = getFlags();
      const aiUsable = flags.assistant_ai_answers && !breakerOpen();
      const body: StatusBody = {
        state: !flags.assistant_launcher ? "disabled" : flags.assistant_kill || (flags.assistant_ai_answers && breakerOpen()) ? "degraded" : "enabled",
        mode: aiUsable ? "ai" : "static",
        fallback_links: ["support", "contact", "system_status"].map((k) => route(k)).filter((r) => !!r),
      };
      return json(ctx, body);
    },
  },
  {
    method: "POST",
    pattern: ["sessions"],
    handler: (ctx) => {
      // Reuse a live session rather than minting one per click.
      const session = findSession(ctx) ?? createSession(ctx);
      return json(ctx, { expires_at: new Date(session.expiresAt).toISOString(), ttl_seconds: SESSION_TTL_MS / 1000, epoch: session.epoch }, 201);
    },
  },
  {
    method: "POST",
    pattern: ["sessions", "clear"],
    handler: (ctx) => {
      const session = requireSession(ctx);
      clearSession(session);
      return json(ctx, { epoch: session.epoch });
    },
  },
  {
    method: "POST",
    pattern: ["messages"],
    handler: async (ctx) => {
      const session = requireSession(ctx);
      const result = await postMessage(session, await readJson(ctx));
      return json(ctx, result.body, result.status);
    },
  },
  {
    method: "GET",
    pattern: ["messages", ":id", "events"],
    handler: (ctx, id) => sse(ctx, streamEvents(requireSession(ctx), id)),
  },
  {
    method: "POST",
    pattern: ["messages", ":id", "cancel"],
    handler: (ctx, id) => json(ctx, cancelMessage(requireSession(ctx), id)),
  },
  {
    method: "GET",
    pattern: ["sources", ":id"],
    handler: (ctx, id) => {
      const source = findSource(id, audience(ctx));
      if (!source) throw new ApiError(404, "NOT_FOUND", "That source isn't available.");
      return json(ctx, { source: { ...toCitation(source), kind: source.kind, revision: source.revision } });
    },
  },
  { method: "GET", pattern: ["help", "home"], handler: (ctx) => json(ctx, helpHome(audience(ctx))) },
  {
    method: "POST",
    pattern: ["help", "search"],
    handler: async (ctx) => {
      const body = await readJson(ctx);
      return json(ctx, helpSearch(str(body, "query", 400), audience(ctx, body), str(body, "cursor", 8)));
    },
  },
  { method: "GET", pattern: ["help", "articles", ":id"], handler: (ctx, id) => json(ctx, helpArticle(id, audience(ctx))) },
  {
    method: "POST",
    pattern: ["help", "guides", ":id", "steps"],
    handler: async (ctx, id) => {
      const body = await readJson(ctx);
      return json(ctx, guideStep(id, { step_id: str(body, "step_id", 80), choice: str(body, "choice", 80) }, audience(ctx, body)));
    },
  },
  { method: "GET", pattern: ["discovery", "catalog"], handler: (ctx) => json(ctx, discoveryCatalog()) },
  { method: "POST", pattern: ["discovery", "matches"], handler: async (ctx) => json(ctx, discoveryMatches(await readJson(ctx))) },
  { method: "GET", pattern: ["commercial", "plans"], handler: (ctx) => json(ctx, plans(ctx.query.get("market"))) },
  { method: "POST", pattern: ["commercial", "fit"], handler: async (ctx) => json(ctx, fit(await readJson(ctx))) },
  { method: "GET", pattern: ["trust", "topics"], handler: (ctx) => json(ctx, trustTopics(audience(ctx))) },
  {
    method: "GET",
    pattern: ["trust", "sources", ":id"],
    handler: (ctx, id) => {
      const source = findSource(id, audience(ctx));
      if (!source || source.kind !== "TRUST_CLAIM") throw new ApiError(404, "NOT_FOUND", "That source isn't available.");
      return json(ctx, { source: toCitation(source) });
    },
  },
  { method: "GET", pattern: ["integrations", "catalog"], handler: (ctx) => json(ctx, integrationsCatalog(ctx.query.get("market"), ctx.query.get("category"))) },
  { method: "POST", pattern: ["integrations", "deployment-guide"], handler: async (ctx) => json(ctx, deploymentGuide(await readJson(ctx))) },
  { method: "GET", pattern: ["onboarding", "questions"], handler: (ctx) => json(ctx, onboardingQuestions(ctx.query.get("persona"))) },
  {
    method: "POST",
    pattern: ["onboarding", "checklists"],
    handler: async (ctx) => {
      const body = await readJson(ctx);
      return json(ctx, onboardingChecklist(body, audience(ctx, body)));
    },
  },
  {
    method: "POST",
    pattern: ["feedback"],
    handler: async (ctx) => {
      const session = requireSession(ctx);
      const body = await readJson(ctx);
      const target = str(body, "target_type", 16);
      const targetId = str(body, "target_id", 80);
      const rating = str(body, "rating", 16);
      const reason = str(body, "reason_code", 32);
      if (!target || !["message", "flow", "discovery"].includes(target) || !targetId || !rating || !["helpful", "not_helpful"].includes(rating)) {
        throw new ApiError(400, "VALIDATION_FAILED", "Feedback could not be recorded.");
      }
      if (reason && !FEEDBACK_REASONS.some((r) => r.id === reason)) throw new ApiError(400, "VALIDATION_FAILED", "Feedback could not be recorded.");
      const key = `${session.tokenHash}:${target}:${targetId}`;
      // One vote per target per session; a repeat is acknowledged, not counted.
      if (!feedbackSeen.has(key)) {
        feedbackSeen.add(key);
        logEvent("feedback", { kind: target, outcome: rating, reason });
      }
      return json(ctx, { recorded: true }, 201);
    },
  },
  {
    method: "POST",
    pattern: ["submissions", "keys"],
    handler: async (ctx) => json(ctx, issueKey(requireSession(ctx), await readJson(ctx)), 201),
  },
  {
    method: "POST",
    pattern: ["support", "summary-preview"],
    handler: async (ctx) => {
      requireSession(ctx);
      if (!isOn("assistant_support_submit")) throw new ApiError(403, "FEATURE_DISABLED", "This isn't available right now.");
      return json(ctx, summaryPreview(await readJson(ctx)));
    },
  },
];

/** Returns the :id value ("" when the pattern has none), or null for no match. */
function match(def: RouteDef, segments: string[]): string | null {
  if (def.pattern.length !== segments.length) return null;
  let id = "";
  for (const [i, part] of def.pattern.entries()) {
    const segment = segments[i] ?? "";
    if (part === ":id") {
      if (!/^[\w.-]{1,100}$/.test(segment)) return null;
      id = segment;
    } else if (part !== segment) return null;
  }
  return id;
}

export async function handle(req: Request, segments: string[]): Promise<Response> {
  const ctx = createCtx(req, segments);
  try {
    assertCsrf(ctx);
    take(ctx.method === "GET" ? "read" : "write", ctx.ipHash);

    // Intake submissions share one handler, keyed by their contract path.
    const intakeKind = ctx.method === "POST" ? kindForPath(segments.join("/")) : undefined;
    if (intakeKind) {
      const session = requireSession(ctx);
      const result = await submit(ctx, session, intakeKind, await readJson(ctx));
      return json(ctx, result.body, result.status);
    }

    const candidates = ROUTES.filter((r) => match(r, segments) !== null);
    const def = candidates.find((r) => r.method === ctx.method);
    if (!def) {
      if (candidates.length) throw new ApiError(405, "METHOD_NOT_ALLOWED", "That action isn't supported.");
      throw new ApiError(404, "NOT_FOUND", "Not found.");
    }
    return await def.handler(ctx, match(def, segments)!);
  } catch (error) {
    return errorResponse(ctx, error);
  }
}
