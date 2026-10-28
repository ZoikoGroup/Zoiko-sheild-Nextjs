import type { AnswerBlock } from "@/lib/public-assistant/contract";
import { HELP_QUERY_MAX } from "@/lib/public-assistant/contract";
import { ApiError } from "../http";
import { eligible, getCorpus, isEligible, route, routes, searchSources, type Audience } from "../publication";
import type { Guide } from "../content/types";
import { classify } from "../safety/classifier";

const PAGE_SIZE = 8;

/** Body text → render-safe blocks. Lines starting with "- " become bullets. */
export function toBlocks(body: string): AnswerBlock[] {
  return body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p): AnswerBlock => {
      const lines = p.split("\n").map((l) => l.trim());
      return lines.every((l) => l.startsWith("- "))
        ? { type: "bullets", items: lines.map((l) => l.slice(2)) }
        : { type: "paragraph", text: lines.join(" ") };
    });
}

export function helpHome(aud: Audience) {
  const c = getCorpus();
  const articles = eligible(c.help_articles, aud);
  const guides = eligible(c.guides, aud);
  const topics = c.help_topics
    .map((t) => ({
      topic_id: t.topic_id,
      label: t.label,
      description: t.description,
      items: [
        ...articles.filter((a) => a.topic_id === t.topic_id).map((a) => ({ id: a.id, kind: "article" as const, title: a.title })),
        ...guides.filter((g) => g.topic_id === t.topic_id).map((g) => ({ id: g.id, kind: "guide" as const, title: g.title })),
      ],
    }))
    .filter((t) => t.items.length > 0);
  return { topics };
}

export function helpSearch(query: string | undefined, aud: Audience, cursor?: string) {
  const q = (query || "").trim();
  if (!q) throw new ApiError(400, "VALIDATION_FAILED", "Enter something to search for.", { field_errors: { query: "Required." } });
  if (Array.from(q).length > HELP_QUERY_MAX) {
    throw new ApiError(400, "VALIDATION_FAILED", `Searches can be up to ${HELP_QUERY_MAX} characters.`, { field_errors: { query: "Too long." } });
  }
  const offset = cursor && /^\d{1,3}$/.test(cursor) ? Number(cursor) : 0;
  const hits = searchSources(q, aud, 40, ["HELP_ARTICLE", "GUIDE", "TRUST_CLAIM", "CAPABILITY", "PLAN", "ONBOARDING"]);
  const page = hits.slice(offset, offset + PAGE_SIZE);
  return {
    results: page.map((h) => ({
      id: h.source.id,
      kind: h.source.kind === "GUIDE" ? "guide" : h.source.kind === "HELP_ARTICLE" ? "article" : "source",
      title: h.source.title,
      summary: h.source.summary,
      url: h.source.canonical_url,
    })),
    next_cursor: offset + PAGE_SIZE < hits.length ? String(offset + PAGE_SIZE) : null,
    no_results: hits.length === 0,
    // Always offer a human route, and say so when search found nothing (WF10).
    fallback: [route("support", aud.market), route("contact", aud.market)].filter(Boolean),
    // An active incident typed into search goes straight to the incident route (WF10 AT243).
    incident: classify(q).kind === "incident" ? (route("incident", aud.market) ?? route("support", aud.market) ?? null) : null,
  };
}

export function helpArticle(id: string, aud: Audience) {
  const c = getCorpus();
  const article = c.help_articles.find((a) => a.id === id);
  if (!article || !isEligible(article, aud)) throw new ApiError(404, "NOT_FOUND", "That article isn't available.");
  const related = eligible(c.help_articles, aud)
    .filter((a) => a.topic_id === article.topic_id && a.id !== id)
    .slice(0, 3)
    .map((a) => ({ id: a.id, title: a.title }));
  return {
    article: {
      id: article.id,
      title: article.title,
      url: article.canonical_url,
      revision: article.revision,
      blocks: toBlocks(article.body),
      related,
    },
  };
}

function view(guide: Guide, stepId: string) {
  const step = guide.steps.find((s) => s.step_id === stepId);
  if (!step) throw new ApiError(404, "NOT_FOUND", "That guide step isn't available.");
  return {
    step_id: step.step_id,
    prompt: step.prompt,
    blocks: step.body ? toBlocks(step.body) : [],
    choices: step.choices.map((c) => ({ choice_id: c.choice_id, label: c.label })),
  };
}

/** Deterministic guide interpreter: only allowlisted choices advance it (WF10). */
export function guideStep(id: string, body: { step_id?: string; choice?: string }, aud: Audience) {
  const guide = getCorpus().guides.find((g) => g.id === id);
  if (!guide || !isEligible(guide, aud)) throw new ApiError(404, "NOT_FOUND", "That guide isn't available.");
  const base = { guide_id: guide.id, title: guide.title, revision: guide.revision, url: guide.canonical_url };
  if (!body.step_id) return { ...base, step: view(guide, guide.start_step), outcome: null };

  const step = guide.steps.find((s) => s.step_id === body.step_id);
  const choice = step?.choices.find((c) => c.choice_id === body.choice);
  if (!step || !choice) throw new ApiError(400, "INVALID_CHOICE", "That option isn't available. Start the guide again.");
  if (choice.next) return { ...base, step: view(guide, choice.next), outcome: null };
  const link = choice.route_key ? route(choice.route_key, aud.market) : undefined;
  return { ...base, step: null, outcome: { route: link ?? null, fallback: link ? [] : routes(aud.market).filter((r) => r.route_key === "support") } };
}
