import { corpus } from "./content/corpus";
import type { Corpus, RouteEntry, SourceMeta } from "./content/types";
import type { Citation, RouteLink } from "@/lib/public-assistant/contract";

// Publication registry (plan D4/D5): eligibility on every read, withdrawal that
// takes effect on the next request, and keyword retrieval over published chunks.

export interface Audience {
  market?: string;
  locale?: string;
  now?: number;
}

const withdrawn = ((globalThis as { __zsPaWithdrawn?: Set<string> }).__zsPaWithdrawn ??= new Set(
  (process.env.PUBLIC_ASSISTANT_WITHDRAWN_IDS || "").split(",").map((s) => s.trim()).filter(Boolean),
));
let epoch = 1;

export function getCorpus(): Corpus {
  return corpus;
}

/** Cache epoch: anything derived from content must be keyed by it (GAP-13). */
export function getEpoch(): number {
  return epoch;
}

/** Ops/test hook: withdraw a source without a deploy. */
export function withdraw(id: string) {
  withdrawn.add(id);
  epoch += 1;
}

export function reinstate(id: string) {
  withdrawn.delete(id);
  epoch += 1;
}

function marketMatches(source: SourceMeta, market?: string): boolean {
  if (!market || market === "global" || market === "undecided") return true;
  return source.market.includes("global") || source.market.includes(market);
}

function localeMatches(source: SourceMeta, locale?: string): boolean {
  if (!locale) return true;
  const lang = locale.split("-")[0];
  return source.locale.some((l) => l === locale || l.split("-")[0] === lang);
}

export function isEligible(source: SourceMeta, audience: Audience = {}): boolean {
  const now = audience.now ?? Date.now();
  if (source.status !== "PUBLISHED" || source.classification !== "PUBLIC") return false;
  if (source.withdrawn_at || withdrawn.has(source.id)) return false;
  if (Date.parse(source.effective_from) > now) return false;
  if (source.expires_at && Date.parse(source.expires_at) <= now) return false;
  return marketMatches(source, audience.market) && localeMatches(source, audience.locale);
}

export function eligible<T extends SourceMeta>(items: T[], audience: Audience = {}): T[] {
  return items.filter((item) => isEligible(item, audience));
}

export function allSources(): SourceMeta[] {
  const c = getCorpus();
  return [...c.help_articles, ...c.guides, ...c.trust_claims, ...c.plans, ...c.capabilities, ...c.connectors, ...c.onboarding_topics];
}

export function findSource(id: string, audience: Audience = {}): SourceMeta | undefined {
  const source = allSources().find((s) => s.id === id);
  return source && isEligible(source, audience) ? source : undefined;
}

export function toCitation(source: SourceMeta): Citation {
  return { source_id: source.id, title: source.title, url: source.canonical_url, summary: source.summary };
}

function routeEligible(route: RouteEntry, market?: string): boolean {
  if (route.status !== "PUBLISHED") return false;
  return route.market === "global" || !market || route.market === market;
}

export function routes(market?: string): RouteLink[] {
  const seen = new Set<string>();
  const result: RouteLink[] = [];
  // Market-specific entries win over global ones for the same key.
  const sorted = [...getCorpus().routes].sort((a, b) => Number(a.market === "global") - Number(b.market === "global"));
  for (const r of sorted) {
    if (!routeEligible(r, market) || seen.has(r.route_key)) continue;
    seen.add(r.route_key);
    result.push({ route_key: r.route_key, label: r.label, url: r.url });
  }
  return result;
}

export function route(key: string, market?: string): RouteLink | undefined {
  return routes(market).find((r) => r.route_key === key);
}

/** URLs an answer may link to: approved routes and canonical URLs of eligible sources. */
export function urlAllowlist(): Set<string> {
  const urls = new Set(routes().map((r) => r.url));
  for (const s of allSources()) if (isEligible(s)) urls.add(s.canonical_url);
  return urls;
}

// ---------------------------------------------------------------------------
// Retrieval: BM25 over paragraph chunks. The index covers every source; the
// eligibility filter runs per query, so withdrawal needs no reindex.

const STOPWORDS = new Set(
  "a about an and are as at be by can could do does for from has have hello hey hi how i in is it its know like me my of on or our please so tell thank thanks that the their this to us want was we what when where which who why will with would you your".split(" "),
);

export function tokenize(text: string): string[] {
  return (text.toLowerCase().normalize("NFKC").match(/[a-z0-9]+/g) || [])
    .filter((t) => !STOPWORDS.has(t) && t.length > 1)
    .map((t) => t.replace(/(ing|ed|es|s)$/, (m) => (t.length - m.length >= 4 ? "" : m)));
}

interface Chunk {
  sourceId: string;
  ordinal: number;
  text: string;
  terms: Map<string, number>;
  length: number;
}

let index: { chunks: Chunk[]; df: Map<string, number>; avgLength: number } | undefined;

function chunksOf(source: SourceMeta): string[] {
  const parts = source.body.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  const extra = "statement" in source ? [String((source as { statement: string }).statement)] : [];
  return [...extra, ...parts];
}

function buildIndex() {
  const chunks: Chunk[] = [];
  const df = new Map<string, number>();
  for (const source of allSources()) {
    const header = `${source.title} ${source.title} ${(source.keywords || []).join(" ")}`;
    chunksOf(source).forEach((text, ordinal) => {
      const tokens = tokenize(`${header} ${text}`);
      const terms = new Map<string, number>();
      for (const t of tokens) terms.set(t, (terms.get(t) || 0) + 1);
      for (const t of terms.keys()) df.set(t, (df.get(t) || 0) + 1);
      chunks.push({ sourceId: source.id, ordinal, text, terms, length: tokens.length });
    });
  }
  const avgLength = chunks.reduce((n, c) => n + c.length, 0) / Math.max(chunks.length, 1);
  return { chunks, df, avgLength };
}

export interface Hit {
  source: SourceMeta;
  text: string;
  score: number;
}

export function search(query: string, audience: Audience = {}, k = 5, kinds?: SourceMeta["kind"][]): Hit[] {
  index ??= buildIndex();
  const terms = [...new Set(tokenize(query))];
  if (terms.length === 0) return [];
  const byId = new Map(allSources().map((s) => [s.id, s]));
  const n = index.chunks.length;
  const scored: Hit[] = [];
  for (const chunk of index.chunks) {
    const source = byId.get(chunk.sourceId)!;
    if (kinds && !kinds.includes(source.kind)) continue;
    let score = 0;
    for (const term of terms) {
      const tf = chunk.terms.get(term);
      if (!tf) continue;
      const df = index.df.get(term) || 0;
      const idf = Math.log(1 + (n - df + 0.5) / (df + 0.5));
      score += (idf * tf * 2.2) / (tf + 1.2 * (0.25 + 0.75 * (chunk.length / index.avgLength)));
    }
    if (score > 0 && isEligible(source, audience)) scored.push({ source, text: chunk.text, score });
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, k);
}

/** Best hit per source, for result lists. */
export function searchSources(query: string, audience: Audience = {}, k = 8, kinds?: SourceMeta["kind"][]): Hit[] {
  const seen = new Set<string>();
  return search(query, audience, k * 4, kinds).filter((h) => !seen.has(h.source.id) && seen.add(h.source.id)).slice(0, k);
}
