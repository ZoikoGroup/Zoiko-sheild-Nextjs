"use client";

import { useState } from "react";
import type { Option, RouteLink } from "@/lib/public-assistant/contract";
import { get, post } from "../../api/client";
import { useAssistant } from "../../state/AssistantContext";
import { useLoad } from "../../shared/useLoad";
import { Button, ErrorNote, FlowHeading, Loading, MarketSelect, RouteButton, SelectField, Tag } from "../../shared/ui";

type FeatureValue = "included" | "not_included" | "add_on" | "not_verified";
interface PlansBody {
  market: string;
  plans: {
    plan_id: string;
    name: string;
    tagline: string;
    audience: string;
    url: string;
    price: { decision: "quote_required" | "published"; display?: string };
    features: { feature_key: string; label: string; value: FeatureValue; note?: string }[];
  }[];
  asset_bands: { band_id: string; label: string }[];
  ingestion_bands: { band_id: string; label: string }[];
  quote_route: RouteLink | null;
}
interface FitBody {
  guidance: string;
  plans: { plan_id: string; name: string }[];
}

const VALUE: Record<FeatureValue, { label: string; tone: "green" | "gray" | "blue" | "amber" }> = {
  included: { label: "Included", tone: "green" },
  not_included: { label: "Not included", tone: "gray" },
  add_on: { label: "Add-on", tone: "blue" },
  not_verified: { label: "Confirm with sales", tone: "amber" },
};

export function CommercialFlow() {
  const { state, dispatch, config, navigate } = useAssistant();
  const markets: Option[] = config?.markets ?? [];
  const plans = useLoad((signal) => get<PlansBody>(`commercial/plans?market=${encodeURIComponent(state.market)}`, signal), [state.market]);
  const [bands, setBands] = useState({ asset_band: "", ingestion_band: "" });
  const [fit, setFit] = useState<{ data?: FitBody; error?: unknown; loading: boolean }>({ loading: false });

  const checkFit = () => {
    setFit({ loading: true });
    post<FitBody>("commercial/fit", { market: state.market, asset_band: bands.asset_band || undefined, ingestion_band: bands.ingestion_band || undefined }).then(
      (data) => setFit({ data, loading: false }),
      (error) => setFit({ error, loading: false }),
    );
  };

  return (
    <div className="space-y-4 p-4">
      <FlowHeading title="Plans & pricing" intro="Compare starting paths. Pricing is prepared for your organization, so we don't quote prices in chat." />
      <MarketSelect value={state.market} options={markets} onChange={(m) => dispatch({ type: "set_market", market: m })} />

      {plans.loading && !plans.data && <Loading />}
      {plans.error ? <ErrorNote error={plans.error} onRetry={plans.retry} /> : null}
      {plans.data && (
        <>
          <ul className="space-y-3">
            {plans.data.plans.map((p) => (
              <li key={p.plan_id} className="rounded-xl border border-zoiko-border dark:border-white/10 p-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold">{p.name}</p>
                    <p className="text-xs text-zoiko-dark/60 dark:text-gray-400">{p.tagline}</p>
                  </div>
                  <Tag tone={p.price.decision === "published" ? "green" : "gray"}>{p.price.decision === "published" ? p.price.display : "Quote required"}</Tag>
                </div>
                <p className="mt-1 text-xs text-zoiko-dark/70 dark:text-gray-300">
                  <span className="font-medium">Best for:</span> {p.audience}
                </p>
                <details className="mt-2 text-xs">
                  <summary className="cursor-pointer font-medium text-zoiko-primary dark:text-[#ff8a8d]">Compare features</summary>
                  <dl className="mt-2 space-y-1.5">
                    {p.features.map((f) => (
                      <div key={f.feature_key} className="flex items-start justify-between gap-2">
                        <dt className="text-zoiko-dark/80 dark:text-gray-200">
                          {f.label}
                          {f.note && <span className="block text-zoiko-dark/50 dark:text-gray-400">{f.note}</span>}
                        </dt>
                        <dd className="shrink-0">
                          <Tag tone={VALUE[f.value].tone}>{VALUE[f.value].label}</Tag>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </details>
                <a href={p.url} className="mt-2 inline-block text-xs font-medium text-zoiko-primary dark:text-[#ff8a8d] underline">
                  Details
                </a>
              </li>
            ))}
          </ul>

          <section className="space-y-3 rounded-xl bg-zoiko-beige/60 dark:bg-white/5 p-3" aria-labelledby="zs-fit-title">
            <h4 id="zs-fit-title" className="text-sm font-semibold">
              Not sure where to start?
            </h4>
            <SelectField id="zs-asset-band" label="Approximate assets" value={bands.asset_band} options={plans.data.asset_bands.map((b) => ({ id: b.band_id, label: b.label }))} onChange={(v) => setBands({ ...bands, asset_band: v })} placeholder="Not sure" />
            <SelectField id="zs-ingestion-band" label="Approximate data volume" value={bands.ingestion_band} options={plans.data.ingestion_bands.map((b) => ({ id: b.band_id, label: b.label }))} onChange={(v) => setBands({ ...bands, ingestion_band: v })} placeholder="Not sure" />
            <Button variant="secondary" onClick={checkFit} disabled={fit.loading}>
              {fit.loading ? "Checking…" : "Get guidance"}
            </Button>
            {fit.error ? <ErrorNote error={fit.error} onRetry={checkFit} /> : null}
            {fit.data && (
              <div aria-live="polite" className="text-sm">
                <p>{fit.data.guidance}</p>
                {fit.data.plans.length > 0 && <p className="mt-1 text-xs text-zoiko-dark/70 dark:text-gray-300">Worth discussing: {fit.data.plans.map((p) => p.name).join(", ")}</p>}
              </div>
            )}
          </section>

          <div className="flex flex-wrap gap-2">
            {config?.intake.QUOTE ? <Button onClick={() => navigate({ name: "intake", kind: "QUOTE" })}>Request a quote</Button> : plans.data.quote_route && <RouteButton link={plans.data.quote_route}>Request a quote</RouteButton>}
          </div>
        </>
      )}
    </div>
  );
}
