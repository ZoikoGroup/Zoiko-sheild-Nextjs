import type { AnswerBlock, Citation } from "@/lib/public-assistant/contract";
import type { ClaimType, SourceMeta } from "../content/types";
import { detectSecrets } from "../safety/detectors";
import { toCitation, urlAllowlist } from "../publication";

// Answer validation (plan D6 step 4). The model's output is untrusted: it is
// parsed, every citation must be one we retrieved, links must be allowlisted,
// and restricted claims need a matching approved source.

interface Restricted {
  name: string;
  re: RegExp;
  needs: ClaimType[];
}

const RESTRICTED: Restricted[] = [
  {
    name: "certification",
    re: /\b(?:certified|certifications?|accredited|attest(?:ed|ation)|soc ?[12]|iso(?:\/iec)? ?27001|iso ?27701|iso ?42001|hipaa|pci[ -]?dss|fedramp|cyber ?essentials|gdpr[- ]compliant|compliant with)\b/gi,
    needs: ["certification", "security", "privacy"],
  },
  {
    name: "price",
    re: /(?:[$€£₹]\s?\d|\b\d[\d,.]*\s?(?:usd|eur|gbp|inr)\b|\bper (?:user|seat|month|year|endpoint|asset)\b|\bfree trial\b|\bdiscount\w*\b|\bcosts? (?:only |just )?\d)/gi,
    needs: ["commercial"],
  },
  {
    name: "service_level",
    re: /\b(?:sla|24 ?[x×/] ?7|uptime|99\.\d+ ?%|guarantee[ds]?|response time of)\b/gi,
    needs: ["commercial", "security", "general", "certification"],
  },
];

// Safe guidance never tells anyone to switch off a security control (WF10 AT242),
// whatever a source says. A sentence that warns against it ("never disable MFA") is fine.
const DISABLE_CONTROL =
  /\b(?:disable|turn off|switch off|uninstall|deactivate|bypass|stop|remove)\b.{0,30}\b(?:edr|antivirus|anti-virus|defender|endpoint protection|mfa|2fa|multi-factor|two-factor|logging|audit logs?|firewalls?|encryption|bitlocker)\b/i;
const NEGATION = /\b(?:never|not|don't|do not|shouldn't|should not|must not|avoid|without)\b/i;

function unsafeAdvice(text: string): boolean {
  return text.split(/(?<=[.!?])\s+/).some((sentence) => DISABLE_CONTROL.test(sentence) && !NEGATION.test(sentence));
}

export interface Validated {
  blocks: AnswerBlock[];
  citations: Citation[];
  /** Something was removed by policy. */
  limited: boolean;
}

function clean(text: string, allow: Set<string>): string {
  return text
    .replace(/<[^>]*>/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\(([^)]*)\)/g, (_, label: string, url: string) => (allow.has(url) ? `${label} (${url})` : label))
    .replace(/\bhttps?:\/\/\S+/gi, "")
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function blockText(block: AnswerBlock): string {
  return block.type === "paragraph" ? block.text : block.items.join(" ");
}

function supported(block: AnswerBlock, cited: SourceMeta[]): boolean {
  const text = blockText(block);
  for (const rule of RESTRICTED) {
    for (const match of text.matchAll(rule.re)) {
      const term = match[0].toLowerCase();
      const ok = cited.some((s) => {
        if (!rule.needs.includes(s.claim_type)) return false;
        const sourceText = `${s.title} ${s.summary} ${s.body} ${"statement" in s ? (s as { statement: string }).statement : ""}`.toLowerCase();
        return sourceText.includes(term);
      });
      if (!ok) return false;
    }
  }
  return true;
}

function parseBlocks(raw: unknown, allow: Set<string>): AnswerBlock[] | null {
  if (!Array.isArray(raw) || raw.length > 6) return null;
  const blocks: AnswerBlock[] = [];
  for (const b of raw) {
    if (b?.type === "paragraph" && typeof b.text === "string" && b.text.length <= 1500) {
      const text = clean(b.text, allow);
      if (text) blocks.push({ type: "paragraph", text });
    } else if (b?.type === "bullets" && Array.isArray(b.items) && b.items.length <= 8 && b.items.every((i: unknown) => typeof i === "string" && i.length <= 400)) {
      const items = (b.items as string[]).map((i) => clean(i, allow)).filter(Boolean);
      if (items.length) blocks.push({ type: "bullets", items });
    } else {
      return null;
    }
  }
  return blocks;
}

/** Returns null when the output is unusable (malformed, or nothing survives). */
export function validateAnswer(rawOutput: string, retrieved: SourceMeta[]): Validated | null {
  let parsed: { blocks?: unknown; citations?: unknown };
  try {
    parsed = JSON.parse(rawOutput);
  } catch {
    return null;
  }
  const allow = urlAllowlist();
  const blocks = parseBlocks(parsed.blocks, allow);
  if (!blocks || !Array.isArray(parsed.citations)) return null;

  const byId = new Map(retrieved.map((s) => [s.id, s]));
  const citedIds = [...new Set(parsed.citations.filter((c): c is string => typeof c === "string"))];
  const cited = citedIds.map((id) => byId.get(id)).filter((s): s is SourceMeta => !!s);
  let limited = cited.length !== citedIds.length;
  // An answer without a valid citation is not grounded: refuse it outright.
  if (cited.length === 0) return null;

  const kept = blocks.filter((block) => {
    const ok = detectSecrets(blockText(block)).length === 0 && !unsafeAdvice(blockText(block)) && supported(block, cited);
    if (!ok) limited = true;
    return ok;
  });
  if (kept.length === 0) return null;
  return { blocks: kept, citations: cited.map(toCitation), limited };
}
