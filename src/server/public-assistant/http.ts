import { createHmac, randomBytes, randomUUID } from "crypto";
import { API_VERSION, CSRF_HEADER, type ErrorBody } from "@/lib/public-assistant/contract";

export class ApiError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
    readonly userMessage: string,
    readonly extra: { field_errors?: Record<string, string>; retry_after?: number } = {},
  ) {
    super(code);
  }
}

export interface Ctx {
  req: Request;
  method: string;
  /** Path segments after /api/public/chat/v1. */
  segments: string[];
  query: URLSearchParams;
  correlationId: string;
  ipHash: string;
  /** Cookies to set on the response. */
  setCookies: string[];
}

const MAX_BODY_BYTES = 32 * 1024;

// Per-process salt unless configured: IP hashes are for rate limiting only, never stored with PII.
const ipSalt = process.env.PUBLIC_ASSISTANT_IP_SALT || randomBytes(16).toString("hex");

export function hashIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || req.headers.get("x-real-ip") || "unknown";
  return createHmac("sha256", ipSalt).update(ip).digest("hex").slice(0, 32);
}

export function createCtx(req: Request, segments: string[]): Ctx {
  const supplied = req.headers.get("x-correlation-id");
  return {
    req,
    method: req.method.toUpperCase(),
    segments,
    query: new URL(req.url).searchParams,
    correlationId: supplied && /^[\w-]{8,64}$/.test(supplied) ? supplied : randomUUID(),
    ipHash: hashIp(req),
    setCookies: [],
  };
}

export async function readJson(ctx: Ctx): Promise<Record<string, unknown>> {
  const type = ctx.req.headers.get("content-type") || "";
  if (!type.includes("application/json")) {
    throw new ApiError(415, "UNSUPPORTED_MEDIA_TYPE", "Send the request as JSON.");
  }
  const text = await ctx.req.text();
  if (Buffer.byteLength(text) > MAX_BODY_BYTES) throw new ApiError(413, "PAYLOAD_TOO_LARGE", "That request is too large.");
  try {
    const parsed = JSON.parse(text || "{}");
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("not an object");
    return parsed as Record<string, unknown>;
  } catch {
    throw new ApiError(400, "INVALID_JSON", "The request could not be read.");
  }
}

export function str(body: Record<string, unknown>, key: string, max: number): string | undefined {
  const value = body[key];
  if (value === undefined || value === null || value === "") return undefined;
  if (typeof value !== "string" || Array.from(value).length > max) {
    throw new ApiError(400, "VALIDATION_FAILED", "Some fields are invalid.", { field_errors: { [key]: "Invalid value." } });
  }
  return value;
}

function allowedOrigins(): string[] {
  return (process.env.PUBLIC_ASSISTANT_ALLOWED_ORIGINS || "")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean);
}

/**
 * CSRF for every mutation (plan D7): the custom header must be present, and a
 * browser-sent Origin must match this host or the configured allowlist.
 */
export function assertCsrf(ctx: Ctx) {
  if (ctx.method === "GET" || ctx.method === "HEAD") return;
  if (ctx.req.headers.get(CSRF_HEADER) !== "1") {
    throw new ApiError(403, "CSRF_REJECTED", "This request was blocked. Reload the page and try again.");
  }
  const origin = ctx.req.headers.get("origin");
  if (!origin) return;
  const host = ctx.req.headers.get("x-forwarded-host") || ctx.req.headers.get("host");
  let originHost: string;
  try {
    originHost = new URL(origin).host;
  } catch {
    throw new ApiError(403, "CSRF_REJECTED", "This request was blocked. Reload the page and try again.");
  }
  if (originHost !== host && !allowedOrigins().includes(origin)) {
    throw new ApiError(403, "CSRF_REJECTED", "This request was blocked. Reload the page and try again.");
  }
}

function baseHeaders(ctx: Ctx): Headers {
  const headers = new Headers({
    "cache-control": "no-store",
    "x-correlation-id": ctx.correlationId,
    "x-content-type-options": "nosniff",
  });
  for (const cookie of ctx.setCookies) headers.append("set-cookie", cookie);
  return headers;
}

export function json(ctx: Ctx, body: object, status = 200): Response {
  const headers = baseHeaders(ctx);
  headers.set("content-type", "application/json; charset=utf-8");
  return new Response(JSON.stringify({ api_version: API_VERSION, correlation_id: ctx.correlationId, ...body }), { status, headers });
}

export function sse(ctx: Ctx, stream: ReadableStream<Uint8Array>): Response {
  const headers = baseHeaders(ctx);
  headers.set("content-type", "text/event-stream; charset=utf-8");
  headers.set("x-accel-buffering", "no");
  return new Response(stream, { status: 200, headers });
}

export function errorResponse(ctx: Ctx, error: unknown): Response {
  if (error instanceof ApiError) {
    const body: ErrorBody = { error_code: error.code, user_safe_message: error.userMessage, correlation_id: ctx.correlationId, ...error.extra };
    const response = json(ctx, body, error.status);
    if (error.extra.retry_after) response.headers.set("retry-after", String(error.extra.retry_after));
    return response;
  }
  // Log the correlation id and error class only: request content may hold PII.
  console.error(JSON.stringify({ event: "public_assistant.unhandled", correlation_id: ctx.correlationId, error: (error as Error)?.name }));
  return json(ctx, { error_code: "INTERNAL_ERROR", user_safe_message: "Something went wrong. Please try again." }, 500);
}
