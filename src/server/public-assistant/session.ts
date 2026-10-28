import { createHash, randomBytes } from "crypto";
import { SESSION_COOKIE } from "@/lib/public-assistant/contract";
import { ApiError, type Ctx } from "./http";

// Guest sessions (plan D7). Only the SHA-256 of the token is kept. Storage is
// in-process, which matches the single PM2 instance this site runs as; a second
// instance needs a shared store (Redis) behind the same functions.

export interface GuestSession {
  tokenHash: string;
  epoch: number;
  createdAt: number;
  expiresAt: number;
  ipHash: string;
}

const TTL_MS = 60 * 60 * 1000;
const MAX_SESSIONS = 20_000;

const sessions = ((globalThis as { __zsPaSessions?: Map<string, GuestSession> }).__zsPaSessions ??= new Map());

function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

function readCookie(req: Request): string | undefined {
  const header = req.headers.get("cookie");
  if (!header) return undefined;
  for (const part of header.split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k === SESSION_COOKIE) return v.join("=");
  }
  return undefined;
}

function sweep(now: number) {
  if (sessions.size < MAX_SESSIONS) return;
  for (const [key, s] of sessions) if (s.expiresAt <= now) sessions.delete(key);
  // Still full: drop the oldest rather than grow without bound.
  while (sessions.size >= MAX_SESSIONS) sessions.delete(sessions.keys().next().value!);
}

export function createSession(ctx: Ctx): GuestSession {
  const now = Date.now();
  sweep(now);
  const token = randomBytes(32).toString("base64url");
  const session: GuestSession = { tokenHash: hashToken(token), epoch: 0, createdAt: now, expiresAt: now + TTL_MS, ipHash: ctx.ipHash };
  sessions.set(session.tokenHash, session);
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  ctx.setCookies.push(`${SESSION_COOKIE}=${token}; Path=/api/public/chat; HttpOnly; SameSite=Strict; Max-Age=${TTL_MS / 1000}${secure}`);
  return session;
}

export function findSession(ctx: Ctx): GuestSession | undefined {
  const token = readCookie(ctx.req);
  if (!token) return undefined;
  const session = sessions.get(hashToken(token));
  if (!session) return undefined;
  if (session.expiresAt <= Date.now()) {
    sessions.delete(session.tokenHash);
    return undefined;
  }
  // Sliding expiry.
  session.expiresAt = Date.now() + TTL_MS;
  return session;
}

export function requireSession(ctx: Ctx): GuestSession {
  const session = findSession(ctx);
  if (!session) throw new ApiError(401, "SESSION_REQUIRED", "Your chat session expired. Start a new chat to continue.");
  return session;
}

/** New chat / clear: bump the epoch so stale stream events are rejected. */
export function clearSession(session: GuestSession) {
  session.epoch += 1;
}

export const SESSION_TTL_MS = TTL_MS;
