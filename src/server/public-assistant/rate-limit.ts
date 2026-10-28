import { ApiError } from "./http";

// Token buckets keyed by IP hash or session. Thresholds come from env and are
// never sent to the client (WF12).

interface Bucket {
  tokens: number;
  updated: number;
}

const buckets = ((globalThis as { __zsPaBuckets?: Map<string, Bucket> }).__zsPaBuckets ??= new Map());

function limit(name: string, fallback: number): number {
  const value = Number(process.env[`PUBLIC_ASSISTANT_RATE_${name}`]);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

/** Per minute. */
const LIMITS = {
  read: () => limit("READ_PER_MIN", 120),
  write: () => limit("WRITE_PER_MIN", 30),
  message: () => limit("MESSAGE_PER_MIN", 8),
  submit: () => limit("SUBMIT_PER_MIN", 5),
};
export type LimitClass = keyof typeof LIMITS;

export function take(cls: LimitClass, key: string) {
  const perMin = LIMITS[cls]();
  const id = `${cls}:${key}`;
  const now = Date.now();
  const bucket = buckets.get(id) ?? { tokens: perMin, updated: now };
  bucket.tokens = Math.min(perMin, bucket.tokens + ((now - bucket.updated) / 60_000) * perMin);
  bucket.updated = now;
  if (bucket.tokens < 1) {
    buckets.set(id, bucket);
    const retryAfter = Math.ceil(((1 - bucket.tokens) / perMin) * 60);
    throw new ApiError(429, "RATE_LIMITED", "You're sending requests too quickly. Please wait a moment.", { retry_after: retryAfter });
  }
  bucket.tokens -= 1;
  buckets.set(id, bucket);
  if (buckets.size > 50_000) {
    for (const [k, b] of buckets) if (now - b.updated > 120_000) buckets.delete(k);
  }
}
