import { afterEach, describe, expect, it } from "vitest";
import { call, session } from "./helpers";
import { corpus } from "../content/corpus";
import { reinstate, withdraw } from "../publication";
import { setFlagOverride } from "../flags";

afterEach(() => {
  setFlagOverride("assistant_public_pricing", undefined);
  setFlagOverride("assistant_connector_claims", undefined);
  setFlagOverride("assistant_kill", undefined);
  setFlagOverride("assistant_launcher", undefined);
});

describe("Phase A shell", () => {
  it("AT001 config and status are readable without creating a session", async () => {
    const config = await call("GET", "config");
    const status = await call("GET", "status");
    expect(config.status).toBe(200);
    expect(config.cookie).toBeUndefined();
    expect(status.cookie).toBeUndefined();
    expect(config.body.flags.assistant_ai_answers).toBe(false);
    expect(config.body.api_version).toBeDefined();
    expect(config.body.correlation_id).toBeDefined();
    expect(status.body).toMatchObject({ state: "enabled", mode: "static" });
  });

  it("AT002 POST /sessions sets an HttpOnly, SameSite=Strict cookie scoped to the chat API", async () => {
    const res = await call("POST", "sessions");
    expect(res.status).toBe(201);
    expect(res.cookie).toMatch(/^zs_pa_sid=/);
  });

  it("rejects mutations without the CSRF header or from a foreign origin", async () => {
    expect((await call("POST", "sessions", { headers: { "x-zs-assistant": "0" } })).status).toBe(403);
    expect((await call("POST", "sessions", { headers: { origin: "https://evil.example" } })).status).toBe(403);
  });

  it("returns the error envelope for unknown routes", async () => {
    const res = await call("GET", "alerts");
    expect(res.status).toBe(404);
    expect(res.body).toMatchObject({ error_code: "NOT_FOUND", user_safe_message: expect.any(String), correlation_id: expect.any(String) });
  });

  it("has no route into tenant, SOC or SOAR surfaces", async () => {
    for (const path of ["alerts", "cases", "actions", "ai", "anchor", "tenants"]) {
      expect((await call("GET", path)).status).toBe(404);
    }
  });

  it("kill switch keeps static help working but reports degraded", async () => {
    setFlagOverride("assistant_kill", true);
    const status = await call("GET", "status");
    expect(status.body.state).toBe("degraded");
    expect((await call("GET", "help/home")).status).toBe(200);
  });

  it("rate limits per IP with 429 and Retry-After, without exposing the threshold", async () => {
    const prev = process.env.PUBLIC_ASSISTANT_RATE_WRITE_PER_MIN;
    process.env.PUBLIC_ASSISTANT_RATE_WRITE_PER_MIN = "2";
    try {
      const headers = { "x-forwarded-for": "203.0.113.77" };
      const statuses = [];
      for (let i = 0; i < 4; i++) statuses.push((await call("POST", "sessions", { headers })).status);
      expect(statuses.slice(0, 2)).toEqual([201, 201]);
      const limited = await call("POST", "sessions", { headers });
      expect(limited.status).toBe(429);
      expect(limited.body.retry_after).toBeGreaterThan(0);
      expect(limited.text).not.toContain('"limit"');
    } finally {
      process.env.PUBLIC_ASSISTANT_RATE_WRITE_PER_MIN = prev;
    }
  });

  it("launcher flag off reports disabled", async () => {
    setFlagOverride("assistant_launcher", false);
    expect((await call("GET", "status")).body.state).toBe("disabled");
  });

  it("clearing needs a session and bumps the epoch", async () => {
    expect((await call("POST", "sessions/clear")).status).toBe(401);
    const cookie = await session();
    const res = await call("POST", "sessions/clear", { cookie });
    expect(res.body.epoch).toBe(1);
  });
});

describe("WF10 help", () => {
  const article = corpus.help_articles[0]!;

  it("lists topic tiles", async () => {
    const res = await call("GET", "help/home");
    expect(res.body.topics.length).toBeGreaterThan(0);
  });

  it("finds an article by its title words and returns fallback routes when nothing matches", async () => {
    const hit = await call("POST", "help/search", { body: { query: article.title } });
    expect(hit.body.results.some((r: { id: string }) => r.id === article.id)).toBe(true);
    const miss = await call("POST", "help/search", { body: { query: "zzqqxx flibbertigibbet" } });
    expect(miss.body.no_results).toBe(true);
    expect(miss.body.fallback.length).toBeGreaterThan(0);
  });

  it("rejects queries over 200 characters", async () => {
    expect((await call("POST", "help/search", { body: { query: "a".repeat(201) } })).status).toBe(400);
  });

  it("revocation: a withdrawn source disappears on the next request", async () => {
    expect((await call("GET", `help/articles/${article.id}`)).status).toBe(200);
    withdraw(article.id);
    try {
      expect((await call("GET", `help/articles/${article.id}`)).status).toBe(404);
      const search = await call("POST", "help/search", { body: { query: article.title } });
      expect(search.body.results.some((r: { id: string }) => r.id === article.id)).toBe(false);
      expect((await call("GET", `sources/${article.id}`)).status).toBe(404);
    } finally {
      reinstate(article.id);
    }
  });

  it("guide interpreter walks allowlisted choices only", async () => {
    const guide = corpus.guides[0]!;
    const start = await call("POST", `help/guides/${guide.id}/steps`, { body: {} });
    expect(start.body.step.step_id).toBe(guide.start_step);
    const bad = await call("POST", `help/guides/${guide.id}/steps`, { body: { step_id: guide.start_step, choice: "not-a-choice" } });
    expect(bad.status).toBe(400);
    const first = guide.steps.find((s) => s.step_id === guide.start_step)!.choices[0]!;
    const next = await call("POST", `help/guides/${guide.id}/steps`, { body: { step_id: guide.start_step, choice: first.choice_id } });
    expect(next.status).toBe(200);
    expect(next.body.step ?? next.body.outcome).toBeTruthy();
  });
});

describe("WF05 discovery", () => {
  it("returns at most three cards with the ruleset version", async () => {
    for (const p of corpus.discovery.priorities) {
      const res = await call("POST", "discovery/matches", { body: { priority: p.id, market: "global" } });
      expect(res.status).toBe(200);
      expect(res.body.cards.length).toBeLessThanOrEqual(3);
      expect(res.body.ruleset_version).toBe(corpus.discovery.ruleset_version);
    }
  });

  it("is deterministic", async () => {
    const body = { priority: corpus.discovery.priorities[0]!.id, market: "US" };
    const a = await call("POST", "discovery/matches", { body });
    const b = await call("POST", "discovery/matches", { body });
    expect(a.body.cards).toEqual(b.body.cards);
  });

  it("requires an explicit market and rejects unknown options", async () => {
    expect((await call("POST", "discovery/matches", { body: { priority: corpus.discovery.priorities[0]!.id } })).status).toBe(400);
    expect((await call("POST", "discovery/matches", { body: { priority: "nope", market: "global" } })).status).toBe(400);
  });
});

describe("WF06 plans", () => {
  it("never shows a price while assistant_public_pricing is off", async () => {
    const res = await call("GET", "commercial/plans?market=global");
    expect(res.body.plans.length).toBeGreaterThan(0);
    for (const p of res.body.plans) expect(p.price).toEqual({ decision: "quote_required" });
  });

  it("fit guidance has no score or price", async () => {
    const res = await call("POST", "commercial/fit", { body: { market: "global", asset_band: corpus.asset_bands[0]!.band_id } });
    expect(res.status).toBe(200);
    expect(res.body).not.toHaveProperty("score");
    expect(res.body.guidance).not.toMatch(/[$€£]\s?\d/);
  });

  it("requires a market", async () => {
    expect((await call("GET", "commercial/plans")).status).toBe(400);
  });
});

describe("WF07 trust", () => {
  it("QUALIFY claims carry their qualifier and ABSTAIN claims hide the statement", async () => {
    const res = await call("GET", "trust/topics");
    const claims = res.body.topics.flatMap((t: { claims: unknown[] }) => t.claims);
    for (const c of claims) {
      if (c.policy === "QUALIFY") expect(c.qualifier).toBeTruthy();
      if (c.policy === "ABSTAIN") expect(c.statement).toBeNull();
    }
  });
});

describe("WF08 integrations", () => {
  it("projects NOT_VERIFIED for every connector while connector claims are off", async () => {
    const res = await call("GET", "integrations/catalog?market=global");
    expect(res.body.connectors.length).toBeGreaterThan(0);
    for (const c of res.body.connectors) expect(c.availability).toBe("NOT_VERIFIED");
  });

  it("projects content availability once the flag is on", async () => {
    setFlagOverride("assistant_connector_claims", true);
    const res = await call("GET", "integrations/catalog?market=global");
    expect(res.body.connectors.some((c: { availability: string }) => c.availability !== "NOT_VERIFIED")).toBe(true);
  });

  it("AT160 makes no availability claim for an undecided market, even with the flag on", async () => {
    setFlagOverride("assistant_connector_claims", true);
    const res = await call("GET", "integrations/catalog?market=undecided");
    for (const c of res.body.connectors) expect(c.availability).toBe("NOT_VERIFIED");
  });

  it("deployment guide lists topics to confirm and rejects unknown connectors", async () => {
    const id = corpus.connectors[0]!.connector_id;
    const ok = await call("POST", "integrations/deployment-guide", { body: { market: "global", connector_ids: [id] } });
    expect(ok.body.topics[0].items.length).toBeGreaterThan(0);
    expect((await call("POST", "integrations/deployment-guide", { body: { market: "global", connector_ids: ["nope"] } })).status).toBe(400);
  });
});

describe("WF09 onboarding", () => {
  it("builds a source-linked checklist from answers", async () => {
    const q = corpus.onboarding_questions[0]!;
    const res = await call("POST", "onboarding/checklists", { body: { answers: { [q.question_id]: q.options[0]!.option_id } } });
    expect(res.status).toBe(200);
    expect(res.body.checklist.length).toBeGreaterThan(0);
    for (const item of res.body.checklist) expect(item.url).toMatch(/^\//);
  });

  it("rejects answers that aren't in the question pack", async () => {
    expect((await call("POST", "onboarding/checklists", { body: { answers: { q: "x" } } })).status).toBe(400);
  });
});

describe("feedback", () => {
  it("needs a session and accepts only the enum shape", async () => {
    expect((await call("POST", "feedback", { body: { target_type: "flow", target_id: "x", rating: "helpful" } })).status).toBe(401);
    const cookie = await session();
    expect((await call("POST", "feedback", { cookie, body: { target_type: "flow", target_id: "x", rating: "helpful" } })).status).toBe(201);
    expect((await call("POST", "feedback", { cookie, body: { target_type: "flow", target_id: "x", rating: "meh" } })).status).toBe(400);
  });
});
