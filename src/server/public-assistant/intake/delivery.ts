import type { IntakeKind } from "@/lib/public-assistant/contract";
import { appendDelivery, decrypt, store, withLock, type DeliveryRecord, type DeliveryTarget } from "./store";

// Outbox worker. Real CRM/helpdesk adapters plug in behind DeliveryAdapter once
// RevOps/Support choose systems (plan §7 #7). Until then delivery is log-only and
// the UI only ever says "received", never "booked" or "ticket created".

export interface DeliveryAdapter {
  deliver(input: { submission_id: string; kind: IntakeKind; public_reference: string; payload: Record<string, unknown> }): Promise<{ external_ref: string }>;
}

class LogOnlyAdapter implements DeliveryAdapter {
  constructor(private readonly target: DeliveryTarget) {}

  async deliver(input: { submission_id: string; kind: IntakeKind; public_reference: string }) {
    // IDs only: the payload is decrypted for real adapters and must never be logged.
    console.info(JSON.stringify({ event: "public_assistant.delivery.log_only", target: this.target, submission_id: input.submission_id, kind: input.kind, public_reference: input.public_reference }));
    return { external_ref: `log-only:${input.submission_id}` };
  }
}

const adapters: Record<DeliveryTarget, DeliveryAdapter> = {
  CRM: new LogOnlyAdapter("CRM"),
  HELPDESK: new LogOnlyAdapter("HELPDESK"),
  PRIVACY: new LogOnlyAdapter("PRIVACY"),
};

/** Test hook. */
export function setAdapter(target: DeliveryTarget, adapter: DeliveryAdapter) {
  adapters[target] = adapter;
}

export function targetsFor(kind: IntakeKind): DeliveryTarget[] {
  if (kind === "SUPPORT") return ["HELPDESK"];
  if (kind === "PRIVACY") return ["PRIVACY"];
  return ["CRM"];
}

const MAX_ATTEMPTS = 6;
const g = globalThis as { __zsPaDraining?: Promise<void>; __zsPaWorker?: NodeJS.Timeout };

async function attempt(record: DeliveryRecord) {
  const s = await store();
  const submission = s.byId.get(record.submission_id);
  if (!submission) return;
  const attempts = record.attempts + 1;
  try {
    const { external_ref } = await adapters[record.target].deliver({
      submission_id: submission.id,
      kind: submission.kind,
      public_reference: submission.public_reference,
      payload: decrypt(submission.payload),
    });
    await withLock(() => appendDelivery({ ...record, state: "DELIVERED", attempts, external_ref, at: new Date().toISOString() }));
  } catch (error) {
    const dead = attempts >= MAX_ATTEMPTS;
    await withLock(() =>
      appendDelivery({
        ...record,
        state: dead ? "DEAD_LETTER" : "RETRY",
        attempts,
        next_at: Date.now() + 2 ** attempts * 15_000,
        last_error_code: (error as Error)?.name || "DELIVERY_FAILED",
        at: new Date().toISOString(),
      }),
    );
  }
}

export function drain(): Promise<void> {
  g.__zsPaDraining ??= (async () => {
    try {
      const s = await store();
      const due = [...s.deliveries.values()].filter((d) => (d.state === "PENDING" || d.state === "RETRY") && d.next_at <= Date.now());
      for (const d of due) await attempt(d);
    } finally {
      g.__zsPaDraining = undefined;
    }
  })();
  return g.__zsPaDraining;
}

/** Supervised replay of dead letters (operator action; not exposed over HTTP). */
export async function replayDeadLetters() {
  const s = await store();
  for (const d of s.deliveries.values()) {
    if (d.state === "DEAD_LETTER") await withLock(() => appendDelivery({ ...d, state: "RETRY", attempts: 0, next_at: 0, at: new Date().toISOString() }));
  }
  await drain();
}

export function startWorker() {
  if (g.__zsPaWorker) return;
  g.__zsPaWorker = setInterval(() => void drain().catch(() => undefined), 30_000);
  g.__zsPaWorker.unref?.();
}
