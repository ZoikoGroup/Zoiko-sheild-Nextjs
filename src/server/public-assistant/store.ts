// Shared-store seam for sessions, rate-limit buckets and message records.
// In-memory implementation is default; behaviour identical.

export interface SessionRecord {
  tokenHash: string;
  expiresAt: number;
  createdAt: number;
  epoch: number;
  ipHash: string;
  uaClass: string;
}

export interface RateBucket {
  count: number;
  resetAt: number;
}

export interface MessageRecord {
  id: string;
  sessionTokenHash: string;
  epoch: number;
  status: "pending" | "done" | "cancelled" | "error";
  answer?: any;
  citations?: any[];
}

export interface PublicAssistantStore {
  // Sessions
  getSession(tokenHash: string): SessionRecord | undefined;
  setSession(tokenHash: string, rec: SessionRecord): void;
  deleteSession(tokenHash: string): void;
  clearSessions(): void;

  // Rate limits
  getRate(bucket: string): RateBucket | undefined;
  setRate(bucket: string, rec: RateBucket): void;
  clearRates(): void;

  // Messages
  getMessage(id: string): MessageRecord | undefined;
  setMessage(id: string, rec: MessageRecord): void;
  deleteMessage(id: string): void;
  clearMessages(): void;
}

class InMemoryStore implements PublicAssistantStore {
  private sessions = new Map<string, SessionRecord>();
  private rates = new Map<string, RateBucket>();
  private messages = new Map<string, MessageRecord>();

  getSession(tokenHash: string) { return this.sessions.get(tokenHash); }
  setSession(tokenHash: string, rec: SessionRecord) { this.sessions.set(tokenHash, rec); }
  deleteSession(tokenHash: string) { this.sessions.delete(tokenHash); }
  clearSessions() { this.sessions.clear(); }

  getRate(bucket: string) { return this.rates.get(bucket); }
  setRate(bucket: string, rec: RateBucket) { this.rates.set(bucket, rec); }
  clearRates() { this.rates.clear(); }

  getMessage(id: string) { return this.messages.get(id); }
  setMessage(id: string, rec: MessageRecord) { this.messages.set(id, rec); }
  deleteMessage(id: string) { this.messages.delete(id); }
  clearMessages() { this.messages.clear(); }
}

let store: PublicAssistantStore = new InMemoryStore();

export function getStore(): PublicAssistantStore {
  return store;
}

export function setStore(s: PublicAssistantStore) {
  store = s;
}

// Lazy Redis implementation when PUBLIC_ASSISTANT_REDIS_URL is set
export async function initStoreFromEnv(): Promise<void> {
  const url = process.env.PUBLIC_ASSISTANT_REDIS_URL;
  if (!url) return;
  try {
    const mod = await import("ioredis");
    const Redis = (mod as any).default || (mod as any).Redis;
    void new Redis(url);
    // Keep in-mem as primary for sync access; Redis path is provided for future use when wired.
  } catch {
    // ignore
  }
}

export { InMemoryStore };
