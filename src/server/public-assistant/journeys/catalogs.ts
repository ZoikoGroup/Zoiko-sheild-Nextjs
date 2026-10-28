import { ApiError } from "../http";
import { isOn } from "../flags";
import { eligible, getCorpus, isEligible, route, type Audience } from "../publication";
import type { Connector, DiscoveryRule } from "../content/types";

// Read-side journeys from WF05–WF09. Everything here is deterministic and
// computed from published content; no free text is accepted.

function requireMarket(market: string | undefined | null): string {
  const markets = getCorpus().markets.map((m) => m.id);
  if (!market) throw new ApiError(400, "MARKET_REQUIRED", "Choose a market first.", { field_errors: { market: "Required." } });
  if (market !== "undecided" && !markets.includes(market)) {
    throw new ApiError(400, "VALIDATION_FAILED", "Choose a market from the list.", { field_errors: { market: "Unknown market." } });
  }
  return market;
}

function pick(value: unknown, allowed: { id: string }[], field: string): string | undefined {
  if (value === undefined || value === null || value === "") return undefined;
  if (typeof value !== "string" || !allowed.some((o) => o.id === value)) {
    throw new ApiError(400, "VALIDATION_FAILED", "Choose an option from the list.", { field_errors: { [field]: "Unknown option." } });
  }
  return value;
}

// ---- WF05 discovery --------------------------------------------------------

export function discoveryCatalog() {
  const d = getCorpus().discovery;
  return {
    ruleset_version: d.ruleset_version,
    disclaimer: d.disclaimer,
    priorities: d.priorities,
    roles: d.roles,
    environments: d.environments,
    markets: getCorpus().markets,
  };
}

function specificity(rule: DiscoveryRule) {
  return (rule.role ? 2 : 0) + (rule.environment ? 1 : 0);
}

export function discoveryMatches(body: Record<string, unknown>) {
  const d = getCorpus().discovery;
  const market = requireMarket(body.market as string);
  const priority = pick(body.priority, d.priorities, "priority");
  const role = pick(body.role, d.roles, "role");
  const environment = pick(body.environment, d.environments, "environment");
  const aud: Audience = { market };

  const rule = d.rules
    .filter((r) => r.priority === priority && (!r.role || r.role === role) && (!r.environment || r.environment === environment))
    .sort((a, b) => specificity(b) - specificity(a))[0];
  const caps = getCorpus().capabilities;
  const cards = (rule?.capability_ids ?? [])
    .map((id) => caps.find((c) => c.capability_id === id))
    .filter((c): c is NonNullable<typeof c> => !!c && isEligible(c, aud))
    .slice(0, 3)
    .map((c) => ({ capability_id: c.capability_id, source_id: c.id, name: c.name, summary: c.summary, url: c.canonical_url }));

  return {
    ruleset_version: d.ruleset_version,
    disclaimer: d.disclaimer,
    cards,
    no_match: cards.length === 0,
    next_steps: [route("demo", market), route("contact", market)].filter(Boolean),
  };
}

// ---- WF06 plans --------------------------------------------------------------

export function plans(marketParam: string | null) {
  const market = requireMarket(marketParam);
  const c = getCorpus();
  const publicPricing = isOn("assistant_public_pricing");
  const labels = new Map(c.feature_defs.map((f) => [f.feature_key, f.label]));
  return {
    market,
    feature_defs: c.feature_defs,
    plans: eligible(c.plans, { market }).map((p) => ({
      plan_id: p.plan_id,
      source_id: p.id,
      name: p.name,
      tagline: p.tagline,
      audience: p.audience,
      url: p.canonical_url,
      // Prices appear only when content publishes one AND the pricing flag is on.
      price:
        publicPricing && p.price.decision === "published" && p.price.display
          ? { decision: "published" as const, display: p.price.display }
          : { decision: "quote_required" as const },
      features: c.feature_defs.map((f) => {
        const claim = p.features.find((x) => x.feature_key === f.feature_key);
        return { feature_key: f.feature_key, label: labels.get(f.feature_key)!, value: claim?.value ?? "not_verified", note: claim?.note };
      }),
    })),
    asset_bands: c.asset_bands,
    ingestion_bands: c.ingestion_bands,
    quote_route: route("pricing", market) ?? null,
  };
}

export function fit(body: Record<string, unknown>) {
  const c = getCorpus();
  const market = requireMarket(body.market as string);
  const asset = pick(body.asset_band, c.asset_bands.map((b) => ({ id: b.band_id })), "asset_band");
  const ingestion = pick(body.ingestion_band, c.ingestion_bands.map((b) => ({ id: b.band_id })), "ingestion_band");
  const rule =
    c.fit_rules.find((r) => r.asset_band === asset && r.ingestion_band === ingestion) ??
    c.fit_rules.find((r) => r.asset_band === asset && !r.ingestion_band) ??
    c.fit_rules.find((r) => !r.asset_band && r.ingestion_band === ingestion) ??
    c.fit_rules.find((r) => !r.asset_band && !r.ingestion_band);
  const planNames = new Map(eligible(c.plans, { market }).map((p) => [p.plan_id, p.name]));
  return {
    market,
    // Guidance only: no score, no price (WF06).
    guidance: rule?.guidance ?? "Our team can help you choose the right starting point.",
    plans: (rule?.plan_ids ?? []).filter((id) => planNames.has(id)).map((id) => ({ plan_id: id, name: planNames.get(id)! })),
    quote_route: route("pricing", market) ?? null,
  };
}

// ---- WF07 trust --------------------------------------------------------------

export function trustTopics(aud: Audience) {
  const c = getCorpus();
  const claims = eligible(c.trust_claims, aud);
  return {
    topics: c.trust_topics
      .map((t) => ({
        topic_id: t.topic_id,
        title: t.title,
        summary: t.summary,
        claims: claims
          .filter((cl) => cl.topic_id === t.topic_id)
          .map((cl) =>
            cl.policy === "ABSTAIN"
              ? { source_id: cl.id, title: cl.title, policy: cl.policy, statement: null, qualifier: null, url: cl.canonical_url, restricted_material_available: !!cl.restricted_material_available }
              : { source_id: cl.id, title: cl.title, policy: cl.policy, statement: cl.statement, qualifier: cl.policy === "QUALIFY" ? cl.qualifier ?? null : null, url: cl.canonical_url, restricted_material_available: !!cl.restricted_material_available },
          ),
      }))
      .filter((t) => t.claims.length > 0),
    trust_center: route("trust_center", aud.market) ?? null,
    access_request_enabled: isOn("assistant_trust_gated"),
  };
}

// ---- WF08 integrations -------------------------------------------------------

const VERIFY_WINDOW_MS = 180 * 24 * 60 * 60 * 1000;

/** Any gap (flag off, unknown market, no entry for the market, stale verification) projects to NOT_VERIFIED. */
export function projectAvailability(connector: Connector, market: string): "AVAILABLE" | "BETA" | "PLANNED" | "NOT_VERIFIED" {
  if (!isOn("assistant_connector_claims")) return "NOT_VERIFIED";
  // An undecided market never gets an availability claim, not even a global one (WF08 AT160).
  if (!market || market === "undecided") return "NOT_VERIFIED";
  const entry =
    connector.availability.find((a) => a.market === market) ?? connector.availability.find((a) => a.market === "global");
  if (!entry || Date.now() - Date.parse(entry.verified_at) > VERIFY_WINDOW_MS) return "NOT_VERIFIED";
  return entry.status;
}

export function integrationsCatalog(marketParam: string | null, categoryParam: string | null) {
  const c = getCorpus();
  const market = requireMarket(marketParam);
  const category = pick(categoryParam || undefined, c.connector_categories, "category");
  return {
    market,
    categories: c.connector_categories,
    connectors: eligible(c.connectors, { market })
      .filter((x) => !category || x.category === category)
      .map((x) => ({ connector_id: x.connector_id, source_id: x.id, name: x.name, category: x.category, summary: x.summary, url: x.canonical_url, availability: projectAvailability(x, market) })),
    request_route: route("integration_request", market) ?? null,
  };
}

export function deploymentGuide(body: Record<string, unknown>) {
  const c = getCorpus();
  const market = requireMarket(body.market as string);
  const ids = body.connector_ids;
  if (!Array.isArray(ids) || ids.length === 0 || ids.length > 10 || ids.some((i) => typeof i !== "string")) {
    throw new ApiError(400, "VALIDATION_FAILED", "Choose between 1 and 10 integrations.", { field_errors: { connector_ids: "Invalid selection." } });
  }
  const connectors = eligible(c.connectors, { market });
  const unknown = (ids as string[]).filter((id) => !connectors.some((x) => x.connector_id === id));
  if (unknown.length) throw new ApiError(400, "VALIDATION_FAILED", "Some integrations aren't available.", { field_errors: { connector_ids: "Unknown integration." } });
  return {
    market,
    topics: (ids as string[]).map((id) => {
      const x = connectors.find((k) => k.connector_id === id)!;
      return { connector_id: id, name: x.name, availability: projectAvailability(x, market), items: x.deployment_topics, url: x.canonical_url };
    }),
    general: [
      "Confirm which data sources and accounts are in scope.",
      "Confirm network access and any allowlisting your environment requires.",
      "Confirm data residency requirements for your market.",
    ],
    note: "This is a list of topics to confirm with a solutions engineer, not a statement of support.",
  };
}

// ---- WF09 onboarding ---------------------------------------------------------

export function onboardingQuestions(persona: string | null) {
  const c = getCorpus();
  const p = pick(persona || undefined, c.personas, "persona");
  return {
    personas: c.personas,
    questions: c.onboarding_questions
      .filter((q) => !p || q.personas.includes(p))
      .map((q) => ({ question_id: q.question_id, prompt: q.prompt, options: q.options.map((o) => ({ id: o.option_id, label: o.label })) })),
  };
}

export function onboardingChecklist(body: Record<string, unknown>, aud: Audience) {
  const c = getCorpus();
  const answers = body.answers;
  if (!answers || typeof answers !== "object" || Array.isArray(answers)) {
    throw new ApiError(400, "VALIDATION_FAILED", "Answer at least one question.", { field_errors: { answers: "Required." } });
  }
  const topicIds: string[] = [];
  for (const [questionId, optionId] of Object.entries(answers as Record<string, unknown>)) {
    const option = c.onboarding_questions.find((q) => q.question_id === questionId)?.options.find((o) => o.option_id === optionId);
    if (!option) throw new ApiError(400, "VALIDATION_FAILED", "Some answers aren't valid.", { field_errors: { [questionId]: "Unknown option." } });
    for (const t of option.topic_ids) if (!topicIds.includes(t)) topicIds.push(t);
  }
  const topics = eligible(c.onboarding_topics, aud);
  // Deterministic: order follows the content file, not the answer order.
  const checklist = topics
    .filter((t) => topicIds.includes(t.topic_id))
    .map((t) => ({ topic_id: t.topic_id, source_id: t.id, title: t.title, url: t.canonical_url, steps: t.steps }));
  return { checklist, contact_enabled: isOn("assistant_lead_submit") };
}
