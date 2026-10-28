import { randomUUID } from "crypto";
import { COMPOSER_MAX, codePointLength, type Answer, type StreamEvent } from "@/lib/public-assistant/contract";
import { ApiError, str } from "./http";
import { isOn } from "./flags";
import type { GuestSession } from "./session";
import { take } from "./rate-limit";
import { classify } from "./safety/classifier";
import { abstain, ProviderFailure, runPipeline, shortCircuit, staticAnswer } from "./ai/pipeline";
import { logEvent } from "./metrics";

// Messages, validate-then-stream SSE, cancel, budgets and the circuit breaker.
// Message text is never stored: only metadata and the validated answer.

interface MessageRecord {
  id: string;
  sessionHash: string;
  epoch: number;
  createdAt: number;
  controller: AbortController;
  result: Promise<Answer>;
  cancelled: boolean;
}

interface State {
  messages: Map<string, MessageRecord>;
  byClientId: Map<string, string>;
  sessionCounts: Map<string, { hour: number; count: number }>;
  tokens: { hour: number; used: number };
  breaker: { failures: number; openUntil: number };
}

const state: State = ((globalThis as { __zsPaConversation?: State }).__zsPaConversation ??= {
  messages: new Map(),
  byClientId: new Map(),
  sessionCounts: new Map(),
  tokens: { hour: 0, used: 0 },
  breaker: { failures: 0, openUntil: 0 },
});

const num = (name: string, fallback: number) => {
  const v = Number(process.env[name]);
  return Number.isFinite(v) && v > 0 ? v : fallback;
};
const DEADLINE_MS = () => num("PUBLIC_ASSISTANT_MODEL_DEADLINE_MS", 20_000);
const SESSION_MESSAGES_PER_HOUR = () => num("PUBLIC_ASSISTANT_SESSION_MESSAGES_PER_HOUR", 40);
const TOKEN_BUDGET_PER_HOUR = () => num("PUBLIC_ASSISTANT_TOKEN_BUDGET_PER_HOUR", 400_000);
const BREAKER_THRESHOLD = 3;
const BREAKER_OPEN_MS = 60_000;
const RECORD_TTL_MS = 10 * 60_000;

const hourNow = () => Math.floor(Date.now() / 3_600_000);

export function breakerOpen(): boolean {
  return state.breaker.openUntil > Date.now();
}

function recordFailure() {
  state.breaker.failures += 1;
  if (state.breaker.failures >= BREAKER_THRESHOLD) {
    state.breaker.openUntil = Date.now() + BREAKER_OPEN_MS;
    state.breaker.failures = 0;
    logEvent("breaker_open", {});
  }
}

function sweep() {
  const cutoff = Date.now() - RECORD_TTL_MS;
  for (const [id, m] of state.messages) {
    if (m.createdAt < cutoff) state.messages.delete(id);
  }
  for (const [key, id] of state.byClientId) if (!state.messages.has(id)) state.byClientId.delete(key);
}

function checkBudgets(session: GuestSession) {
  const hour = hourNow();
  const count = state.sessionCounts.get(session.tokenHash);
  const current = count && count.hour === hour ? count.count : 0;
  if (current >= SESSION_MESSAGES_PER_HOUR()) {
    throw new ApiError(429, "SESSION_BUDGET_EXCEEDED", "You've reached the message limit for now. Browse help topics or contact our team.", { retry_after: 600 });
  }
  if (state.tokens.hour !== hour) state.tokens = { hour, used: 0 };
  if (state.tokens.used >= TOKEN_BUDGET_PER_HOUR()) {
    throw new ApiError(503, "AI_BUDGET_EXHAUSTED", "AI answers are paused right now. Help topics and contact options still work.", { retry_after: 300 });
  }
  state.sessionCounts.set(session.tokenHash, { hour, count: current + 1 });
}

function withDeadline<T>(promise: Promise<T>, controller: AbortController): Promise<T> {
  const timer = setTimeout(() => controller.abort(new DOMException("Deadline", "TimeoutError")), DEADLINE_MS());
  return promise.finally(() => clearTimeout(timer));
}

export async function postMessage(session: GuestSession, body: Record<string, unknown>) {
  const clientMessageId = str(body, "client_message_id", 64);
  if (!clientMessageId || !/^[\w-]{8,64}$/.test(clientMessageId)) {
    throw new ApiError(400, "VALIDATION_FAILED", "The message could not be sent.", { field_errors: { client_message_id: "Invalid." } });
  }
  const content = typeof body.content === "string" ? body.content.trim() : "";
  if (!content) throw new ApiError(400, "VALIDATION_FAILED", "Type a message first.", { field_errors: { content: "Required." } });
  if (codePointLength(content) > COMPOSER_MAX) {
    throw new ApiError(400, "VALIDATION_FAILED", `Messages can be up to ${COMPOSER_MAX} characters.`, { field_errors: { content: "Too long." } });
  }
  const locale = str(body, "locale", 16);
  const market = str(body, "market", 40);

  // Idempotent on client_message_id within the session and epoch.
  const clientKey = `${session.tokenHash}:${session.epoch}:${clientMessageId}`;
  const existing = state.byClientId.get(clientKey);
  if (existing && state.messages.has(existing)) return { status: 202, body: { message_id: existing } };

  take("message", session.tokenHash);
  sweep();

  // AI off, killed, or breaker open: same chat, answered without a model (synchronous).
  if (!isOn("assistant_ai_answers") || breakerOpen()) {
    const answer = staticAnswer(content, { market, locale });
    logEvent("answer", { outcome: answer.outcome, mode: "static", sync: true });
    return { status: 200, body: { message_id: null, answer } };
  }

  // Fixed responses (incident, secrets, conversation, …) are synchronous and never reach the model.
  const intent = classify(content);
  const early = shortCircuit(intent, { market, locale });
  if (early) {
    logEvent("answer", { outcome: early.outcome, intent: intent.kind, sync: true });
    return { status: 200, body: { message_id: null, answer: early } };
  }

  checkBudgets(session);
  const controller = new AbortController();
  const id = randomUUID();
  const started = Date.now();
  const result = withDeadline(runPipeline(content, { market, locale }, controller.signal), controller)
    .then((r) => {
      state.breaker.failures = 0;
      state.tokens.used += r.estimatedTokens;
      logEvent("answer", { outcome: r.answer.outcome, intent: r.intent, latency_ms: Date.now() - started, sources: r.answer.citations.length });
      return r.answer;
    })
    .catch((error): Answer => {
      if (error instanceof ProviderFailure || (error as Error)?.name === "TimeoutError" || controller.signal.reason?.name === "TimeoutError") {
        recordFailure();
        logEvent("answer", { outcome: "ERROR", latency_ms: Date.now() - started });
        return { outcome: "ERROR", blocks: [], citations: [], follow_ups: abstain({ market }).follow_ups };
      }
      if (controller.signal.aborted) return { outcome: "ERROR", blocks: [], citations: [], follow_ups: [] };
      throw error;
    });
  // Never leave an unhandled rejection behind if no one listens.
  result.catch(() => undefined);

  state.messages.set(id, { id, sessionHash: session.tokenHash, epoch: session.epoch, createdAt: started, controller, result, cancelled: false });
  state.byClientId.set(clientKey, id);
  return { status: 202, body: { message_id: id } };
}

function ownMessage(session: GuestSession, id: string): MessageRecord {
  const message = state.messages.get(id);
  if (!message || message.sessionHash !== session.tokenHash) throw new ApiError(404, "NOT_FOUND", "That message isn't available.");
  return message;
}

export function cancelMessage(session: GuestSession, id: string) {
  const message = ownMessage(session, id);
  message.cancelled = true;
  message.controller.abort();
  return { cancelled: true };
}

/** Split text into word groups so the client renders progressively. */
function pieces(text: string): string[] {
  const words = text.split(" ");
  const out: string[] = [];
  for (let i = 0; i < words.length; i += 8) out.push(words.slice(i, i + 8).join(" ") + (i + 8 < words.length ? " " : ""));
  return out;
}

export function streamEvents(session: GuestSession, id: string): ReadableStream<Uint8Array> {
  const message = ownMessage(session, id);
  if (message.epoch !== session.epoch) throw new ApiError(409, "STALE_EPOCH", "This conversation was cleared.");
  const encoder = new TextEncoder();
  let seq = 0;
  let closed = false;

  return new ReadableStream<Uint8Array>({
    async start(controller) {
      const send = (type: StreamEvent["type"], data: StreamEvent["data"] = {}) => {
        if (closed) return;
        const event: StreamEvent = { seq: ++seq, type, epoch: message.epoch, data };
        controller.enqueue(encoder.encode(`id: ${event.seq}\nevent: ${type}\ndata: ${JSON.stringify(event)}\n\n`));
      };
      const finish = () => {
        if (!closed) controller.close();
        closed = true;
      };

      send("acknowledged");
      send("progress", { message: "Checking our published information…" });
      const heartbeat = setInterval(() => !closed && controller.enqueue(encoder.encode(": keep-alive\n\n")), 10_000);
      try {
        const answer = await message.result;
        // The session was cleared or the visitor pressed Stop while we waited.
        if (message.cancelled) return send("error", { error_code: "CANCELLED", message: "Stopped." });
        if (session.epoch !== message.epoch) return send("error", { error_code: "STALE_EPOCH", message: "This conversation was cleared." });
        if (answer.outcome === "ERROR") {
          return send("error", { error_code: "AI_ERROR", message: "I couldn't finish that answer. Try again, or browse help topics.", answer });
        }
        if (answer.outcome === "LIMITED") send("safety_limited", { message: "Part of this answer was withheld because it couldn't be verified." });
        answer.blocks.forEach((block, index) => {
          const text = block.type === "paragraph" ? block.text : block.items.map((i) => `• ${i}`).join("\n");
          for (const piece of pieces(text)) send("delta", { block_index: index, text: piece });
        });
        send("final", { answer });
      } catch {
        send("error", { error_code: "AI_ERROR", message: "I couldn't finish that answer. Try again, or browse help topics." });
      } finally {
        clearInterval(heartbeat);
        finish();
      }
    },
    cancel() {
      closed = true;
    },
  });
}
