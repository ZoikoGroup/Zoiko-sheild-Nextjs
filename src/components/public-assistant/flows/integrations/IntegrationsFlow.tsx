"use client";

import { useState } from "react";
import type { Option, RouteLink } from "@/lib/public-assistant/contract";
import { get, post } from "../../api/client";
import { useAssistant } from "../../state/AssistantContext";
import { useLoad } from "../../shared/useLoad";
import { Button, ErrorNote, FlowHeading, Loading, MarketSelect, RouteButton, SelectField, Tag } from "../../shared/ui";

type Availability = "AVAILABLE" | "BETA" | "PLANNED" | "NOT_VERIFIED";
interface CatalogBody {
  categories: Option[];
  connectors: { connector_id: string; name: string; category: string; summary: string; url: string; availability: Availability }[];
  request_route: RouteLink | null;
}
interface GuideBody {
  topics: { connector_id: string; name: string; availability: Availability; items: string[]; url: string }[];
  general: string[];
  note: string;
}

const BADGE: Record<Availability, { label: string; tone: "green" | "blue" | "gray" | "amber" }> = {
  AVAILABLE: { label: "Available", tone: "green" },
  BETA: { label: "Beta", tone: "blue" },
  PLANNED: { label: "Planned", tone: "gray" },
  NOT_VERIFIED: { label: "Confirm with our team", tone: "amber" },
};

export function IntegrationsFlow() {
  const { state, dispatch, config, navigate } = useAssistant();
  const [category, setCategory] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [guide, setGuide] = useState<{ data?: GuideBody; error?: unknown; loading: boolean }>({ loading: false });
  const qs = `market=${encodeURIComponent(state.market)}${category ? `&category=${encodeURIComponent(category)}` : ""}`;
  const catalog = useLoad((signal) => get<CatalogBody>(`integrations/catalog?${qs}`, signal), [qs]);

  const toggle = (id: string) => setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : s.length < 10 ? [...s, id] : s));
  const buildGuide = () => {
    setGuide({ loading: true });
    post<GuideBody>("integrations/deployment-guide", { market: state.market, connector_ids: selected }).then(
      (data) => setGuide({ data, loading: false }),
      (error) => setGuide({ error, loading: false }),
    );
  };

  return (
    <div className="space-y-4 p-4">
      <FlowHeading title="Integrations" intro="See what connects to ZoikoShield. Availability can differ by market and contract, so confirm before you plan around it." />
      <MarketSelect value={state.market} options={config?.markets ?? []} onChange={(m) => dispatch({ type: "set_market", market: m })} />
      {catalog.data && <SelectField id="zs-int-category" label="Category" value={category} options={catalog.data.categories} onChange={setCategory} placeholder="All categories" />}

      {catalog.loading && !catalog.data && <Loading />}
      {catalog.error ? <ErrorNote error={catalog.error} onRetry={catalog.retry} /> : null}
      {catalog.data && (
        <fieldset>
          <legend className="mb-1 text-xs text-zoiko-dark/70 dark:text-gray-300">Select integrations to build a list of topics to confirm (up to 10).</legend>
          <ul className="divide-y divide-zoiko-border dark:divide-white/10 rounded-xl border border-zoiko-border dark:border-white/10">
            {catalog.data.connectors.map((c) => (
              <li key={c.connector_id} className="flex items-start gap-2 px-3 py-2.5">
                <input id={`zs-conn-${c.connector_id}`} type="checkbox" checked={selected.includes(c.connector_id)} onChange={() => toggle(c.connector_id)} className="mt-1 h-4 w-4 accent-zoiko-primary" />
                <label htmlFor={`zs-conn-${c.connector_id}`} className="flex-1 text-sm">
                  <span className="flex flex-wrap items-center gap-2 font-medium">
                    {c.name}
                    <Tag tone={BADGE[c.availability].tone}>{BADGE[c.availability].label}</Tag>
                  </span>
                  <span className="mt-0.5 block text-xs text-zoiko-dark/60 dark:text-gray-400">{c.summary}</span>
                </label>
              </li>
            ))}
            {catalog.data.connectors.length === 0 && <li className="px-3 py-2.5 text-sm text-zoiko-dark/60 dark:text-gray-400">No integrations listed for this filter.</li>}
          </ul>
        </fieldset>
      )}

      <div className="flex flex-wrap gap-2">
        <Button variant="secondary" disabled={selected.length === 0 || guide.loading} onClick={buildGuide}>
          {guide.loading ? "Building…" : "Topics to confirm"}
        </Button>
        {config?.intake.TECH_EVAL ? <Button onClick={() => navigate({ name: "intake", kind: "TECH_EVAL" })}>Request an evaluation</Button> : null}
        {catalog.data?.request_route && <RouteButton link={catalog.data.request_route} />}
      </div>

      {guide.error ? <ErrorNote error={guide.error} onRetry={buildGuide} /> : null}
      {guide.data && (
        <section aria-live="polite" className="space-y-3 rounded-xl bg-zoiko-beige/60 dark:bg-white/5 p-3 text-sm">
          {guide.data.topics.map((t) => (
            <div key={t.connector_id}>
              <p className="font-semibold">{t.name}</p>
              <ul className="list-disc pl-5 text-zoiko-dark/80 dark:text-gray-200">
                {t.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="font-semibold">For every deployment</p>
            <ul className="list-disc pl-5 text-zoiko-dark/80 dark:text-gray-200">
              {guide.data.general.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-zoiko-dark/60 dark:text-gray-400">{guide.data.note}</p>
        </section>
      )}
    </div>
  );
}
