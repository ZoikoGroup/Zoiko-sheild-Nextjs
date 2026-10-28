import { handle } from "../router";

export interface Res {
  status: number;
  body: any;
  cookie?: string;
  text: string;
}

export const ORIGIN = "http://localhost:3000";

/** Calls the route handler the way Next does, without a server. */
export async function call(method: "GET" | "POST", path: string, opts: { body?: unknown; cookie?: string; headers?: Record<string, string> } = {}): Promise<Res> {
  const headers: Record<string, string> = { host: "localhost:3000", ...opts.headers };
  if (method === "POST") {
    headers["content-type"] = "application/json";
    headers["x-zs-assistant"] ??= "1";
    headers.origin ??= ORIGIN;
  }
  if (opts.cookie) headers.cookie = opts.cookie;
  const req = new Request(`${ORIGIN}/api/public/chat/v1/${path}`, { method, headers, body: method === "POST" ? JSON.stringify(opts.body ?? {}) : undefined });
  const res = await handle(req, new URL(req.url).pathname.split("/").slice(5).filter(Boolean));
  const text = await res.text();
  const setCookie = res.headers.get("set-cookie");
  let body: any = null;
  try {
    body = JSON.parse(text);
  } catch {
    body = null;
  }
  return { status: res.status, body, text, cookie: setCookie ? setCookie.split(";")[0] : undefined };
}

export async function session(): Promise<string> {
  const res = await call("POST", "sessions");
  if (!res.cookie) throw new Error("no session cookie");
  return res.cookie;
}

export function parseSse(text: string) {
  return text
    .split("\n\n")
    .map((frame) => frame.split("\n").find((l) => l.startsWith("data: ")))
    .filter((l): l is string => !!l)
    .map((l) => JSON.parse(l.slice(6)));
}
