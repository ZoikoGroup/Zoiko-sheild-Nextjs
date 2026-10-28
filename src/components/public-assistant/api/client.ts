import { API_BASE, type ErrorBody, type StreamEvent } from "@/lib/public-assistant/contract";

export class AssistantApiError extends Error {
  constructor(
    readonly status: number,
    readonly body: ErrorBody,
  ) {
    super(body.error_code);
  }

  /** True when we can't know whether the server acted (network drop, timeout, 5xx). */
  get uncertain() {
    return this.status === 0 || this.status >= 500;
  }
}

const networkError = (): ErrorBody => ({
  error_code: "NETWORK",
  user_safe_message: "We couldn't reach the assistant. Check your connection and try again.",
  correlation_id: "",
});

let sessionPromise: Promise<void> | null = null;

async function raw<T>(method: "GET" | "POST", path: string, body?: unknown, signal?: AbortSignal): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API_BASE}/${path}`, {
      method,
      credentials: "same-origin",
      signal,
      headers: method === "POST" ? { "content-type": "application/json", "x-zs-assistant": "1" } : undefined,
      body: method === "POST" ? JSON.stringify(body ?? {}) : undefined,
    });
  } catch (error) {
    if ((error as Error).name === "AbortError") throw error;
    throw new AssistantApiError(0, networkError());
  }
  const data = await res.json().catch(() => null);
  if (!res.ok) throw new AssistantApiError(res.status, data?.error_code ? data : { ...networkError(), error_code: `HTTP_${res.status}` });
  return data as T;
}

/** Created lazily on the first action that needs it, never on page load (AT001/AT007). */
export function ensureSession(): Promise<void> {
  sessionPromise ??= raw("POST", "sessions").then(
    () => undefined,
    (error) => {
      sessionPromise = null;
      throw error;
    },
  );
  return sessionPromise;
}

export function get<T>(path: string, signal?: AbortSignal) {
  return raw<T>("GET", path, undefined, signal);
}

export function post<T>(path: string, body?: unknown, signal?: AbortSignal) {
  return raw<T>("POST", path, body, signal);
}

/** POST that needs a guest session; recreates it once if it expired. */
export async function postWithSession<T>(path: string, body?: unknown, signal?: AbortSignal): Promise<T> {
  await ensureSession();
  try {
    return await raw<T>("POST", path, body, signal);
  } catch (error) {
    if (error instanceof AssistantApiError && error.body.error_code === "SESSION_REQUIRED") {
      sessionPromise = null;
      await ensureSession();
      return raw<T>("POST", path, body, signal);
    }
    throw error;
  }
}

/** Reads the SSE stream with fetch so Stop can abort it. */
export async function streamEvents(messageId: string, onEvent: (event: StreamEvent) => void, signal: AbortSignal) {
  const res = await fetch(`${API_BASE}/messages/${encodeURIComponent(messageId)}/events`, { credentials: "same-origin", signal });
  if (!res.ok || !res.body) {
    const data = await res.json().catch(() => null);
    throw new AssistantApiError(res.status, data?.error_code ? data : networkError());
  }
  const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
  let buffer = "";
  let lastSeq = 0;
  let epoch: number | undefined;
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += value;
    let boundary: number;
    while ((boundary = buffer.indexOf("\n\n")) >= 0) {
      const frame = buffer.slice(0, boundary);
      buffer = buffer.slice(boundary + 2);
      const data = frame
        .split("\n")
        .filter((l) => l.startsWith("data: "))
        .map((l) => l.slice(6))
        .join("\n");
      if (!data) continue;
      const event = JSON.parse(data) as StreamEvent;
      // Monotonic seq: drop duplicates or out-of-order frames.
      if (event.seq <= lastSeq) continue;
      // One stream belongs to one session epoch; anything from another epoch is stale.
      epoch ??= event.epoch;
      if (event.epoch !== epoch) continue;
      lastSeq = event.seq;
      onEvent(event);
    }
  }
}
