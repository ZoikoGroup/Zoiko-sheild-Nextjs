"use client";

import { useState } from "react";
import type { Option, RouteLink } from "@/lib/public-assistant/contract";
import { get, post } from "../../api/client";
import { useAssistant } from "../../state/AssistantContext";
import { useLoad } from "../../shared/useLoad";
import { Button, ErrorNote, FlowHeading, Loading, MarketSelect, RouteButton, SelectField } from "../../shared/ui";
import { Feedback } from "../../shared/Feedback";

interface Catalog {
  ruleset_version: string;
  disclaimer: string;
  priorities: Option[];
  roles: Option[];
  environments: Option[];
  markets: Option[];
}
interface Matches {
  ruleset_version: string;
  disclaimer: string;
  cards: { capability_id: string; source_id: string; name: string; summary: string; url: string }[];
  no_match: boolean;
  next_steps: RouteLink[];
}

export function DiscoveryFlow() {
  const { state, dispatch, navigate } = useAssistant();
  const catalog = useLoad((signal) => get<Catalog>("discovery/catalog", signal), []);
  const [choice, setChoice] = useState({ priority: "", role: "", environment: "" });
  const [result, setResult] = useState<{ data?: Matches; error?: unknown; loading: boolean }>({ loading: false });
  const [missing, setMissing] = useState(false);

  if (catalog.loading && !catalog.data) return <div className="p-4"><Loading /></div>;
  if (catalog.error) return <div className="p-4"><ErrorNote error={catalog.error} onRetry={catalog.retry} /></div>;
  const c = catalog.data!;

  const find = () => {
    if (!choice.priority) {
      setMissing(true);
      return;
    }
    setMissing(false);
    setResult({ loading: true });
    post<Matches>("discovery/matches", { ...choice, role: choice.role || undefined, environment: choice.environment || undefined, market: state.market }).then(
      (data) => setResult({ data, loading: false }),
      (error) => setResult({ error, loading: false }),
    );
  };

  return (
    <div className="space-y-4 p-4">
      <FlowHeading title="Find the right fit" intro="Answer a few questions and we'll point you to the most relevant capabilities." />
      <form
        className="space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          find();
        }}
      >
        <SelectField id="zs-d-priority" label="Top priority" required value={choice.priority} options={c.priorities} onChange={(v) => setChoice({ ...choice, priority: v })} error={missing ? "Choose a priority." : undefined} />
        <SelectField id="zs-d-role" label="Your role" value={choice.role} options={c.roles} onChange={(v) => setChoice({ ...choice, role: v })} placeholder="Prefer not to say" />
        <SelectField id="zs-d-env" label="Main environment" value={choice.environment} options={c.environments} onChange={(v) => setChoice({ ...choice, environment: v })} placeholder="Not sure" />
        <MarketSelect value={state.market} options={c.markets} onChange={(m) => dispatch({ type: "set_market", market: m })} />
        <Button type="submit" className="w-full" disabled={result.loading}>
          {result.loading ? "Finding matches…" : "Show suggestions"}
        </Button>
      </form>

      {result.error ? <ErrorNote error={result.error} onRetry={find} /> : null}
      {result.data && (
        <section aria-live="polite" className="space-y-3">
          {result.data.no_match ? (
            <p className="rounded-xl bg-zoiko-beige/70 dark:bg-white/5 p-3 text-sm">We don't have a confident suggestion for that combination. A specialist can help you map it out.</p>
          ) : (
            <ol className="space-y-2">
              {result.data.cards.map((card, i) => (
                <li key={card.capability_id} className="rounded-xl border border-zoiko-border dark:border-white/10 p-3">
                  <p className="text-xs font-semibold text-zoiko-primary dark:text-[#ff8a8d]">Suggestion {i + 1}</p>
                  <p className="text-sm font-semibold">{card.name}</p>
                  <p className="mt-0.5 text-sm text-zoiko-dark/70 dark:text-gray-300">{card.summary}</p>
                  <a href={card.url} className="mt-1 inline-block text-xs font-medium text-zoiko-primary dark:text-[#ff8a8d] underline">
                    Learn more
                  </a>
                </li>
              ))}
            </ol>
          )}
          <p className="text-xs text-zoiko-dark/60 dark:text-gray-400">{result.data.disclaimer}</p>
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => navigate({ name: "intake", kind: "DEMO" })}>Request a demo</Button>
            {result.data.next_steps.filter((r) => r.route_key !== "demo").map((r) => (
              <RouteButton key={r.route_key} link={r} />
            ))}
          </div>
          <Feedback targetType="discovery" targetId={`${result.data.ruleset_version}:${choice.priority}:${choice.role}:${choice.environment}`} />
        </section>
      )}
    </div>
  );
}
