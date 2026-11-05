import type { SourceMeta } from "../content/types";
import { tokenize } from "../publication";

// Related questions offered after an answer. Each one is worded to hit a published
// page, so tapping it gets a grounded answer instead of an abstention.
const BY_TOPIC: Record<string, string[]> = {
  product: ["What is ZoikoShield?", "How does ZoikoShield work?", "How does detection and response work?", "What is the compliance control plane?"],
  "getting-started": ["What are the starting paths?", "How do I book a demo?", "Where is the developer documentation?"],
  pricing: ["How does ZoikoShield pricing work?", "What affects my quote?", "Which starting path is right for me?"],
  integrations: ["What integrations are available?", "How do I request an integration?", "Does ZoikoShield work with Microsoft 365 and Azure?"],
  support: ["How do I get support?", "How do I check system status?", "How do I report a security vulnerability?"],
  "trust-security": ["How does ZoikoShield approach AI and human oversight?", "How do I report a security vulnerability?", "Does ZoikoShield guarantee compliance?"],
  glossary: ["What is Zero Trust Architecture?", "What is the principle of least privilege?", "What is an audit trail?"],
};

const BY_KIND: Partial<Record<SourceMeta["kind"], string[]>> = {
  CAPABILITY: ["What is the compliance control plane?", "How does governed response work?", "What is Managed Defense?"],
  PLAN: ["What affects my quote?", "How does ZoikoShield pricing work?", "Which starting path is right for me?"],
  TRUST_CLAIM: BY_TOPIC["trust-security"]!,
  CONNECTOR: BY_TOPIC.integrations!,
  ONBOARDING: BY_TOPIC["getting-started"]!,
  GUIDE: BY_TOPIC["getting-started"]!,
};

const FALLBACK = BY_TOPIC.product!;

function similar(a: string, b: string): boolean {
  const x = new Set(tokenize(a));
  const y = new Set(tokenize(b));
  if (x.size === 0 || y.size === 0) return false;
  const shared = [...x].filter((t) => y.has(t)).length;
  return shared / Math.max(x.size, y.size) >= 0.75;
}

/** Up to `max` questions related to the cited sources, excluding the one just asked. */
export function relatedQuestions(asked: string, cited: SourceMeta[], max = 3): string[] {
  const pool: string[] = [];
  for (const source of cited) {
    const topic = (source as { topic_id?: string }).topic_id;
    pool.push(...((topic && BY_TOPIC[topic]) || BY_KIND[source.kind] || []));
  }
  pool.push(...FALLBACK);
  const out: string[] = [];
  for (const q of pool) {
    if (similar(q, asked) || out.some((o) => similar(o, q))) continue;
    out.push(q);
    if (out.length === max) break;
  }
  return out;
}
