// Structured event log for dashboards (plan §6 Phase E). Labels only: never
// message text, contact details, or anything a visitor typed.

const counters = ((globalThis as { __zsPaCounters?: Map<string, number> }).__zsPaCounters ??= new Map());

export function logEvent(name: string, labels: Record<string, string | number | boolean | undefined>) {
  const key = `${name}:${labels.outcome ?? labels.kind ?? ""}`;
  counters.set(key, (counters.get(key) || 0) + 1);
  if (process.env.NODE_ENV === "test") return;
  console.info(JSON.stringify({ event: `public_assistant.${name}`, ...labels, at: new Date().toISOString() }));
}

export function counterSnapshot(): Record<string, number> {
  return Object.fromEntries(counters);
}
