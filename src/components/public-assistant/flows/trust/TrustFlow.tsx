"use client";

import { ShieldCheck } from "lucide-react";
import type { RouteLink } from "@/lib/public-assistant/contract";
import { get } from "../../api/client";
import { useAssistant } from "../../state/AssistantContext";
import { useLoad } from "../../shared/useLoad";
import { Button, ErrorNote, FlowHeading, Loading, RouteButton, Tag } from "../../shared/ui";

interface TrustBody {
  topics: {
    topic_id: string;
    title: string;
    summary: string;
    claims: { source_id: string; title: string; policy: "ALLOW" | "QUALIFY" | "ABSTAIN"; statement: string | null; qualifier: string | null; url: string; restricted_material_available: boolean }[];
  }[];
  trust_center: RouteLink | null;
  access_request_enabled: boolean;
}

export function TrustFlow() {
  const { config, navigate, state } = useAssistant();
  // Region-scoped trust claims are filtered by the visitor's market (WF07 AT132).
  const { data, error, loading, retry } = useLoad((signal) => get<TrustBody>(`trust/topics?market=${encodeURIComponent(state.market)}`, signal), [state.market]);
  if (loading && !data) return <div className="p-4"><Loading /></div>;
  if (error) return <div className="p-4"><ErrorNote error={error} onRetry={retry} /></div>;
  const canRequest = !!config?.intake.TRUST_ACCESS;
  const anyRestricted = data!.topics.some((t) => t.claims.some((c) => c.restricted_material_available));

  return (
    <div className="space-y-4 p-4">
      <FlowHeading title="Trust & security" intro="What we can say publicly, with links to the source. Some material is shared only after review." />
      {data!.topics.map((t) => (
        <details key={t.topic_id} className="group rounded-xl border border-zoiko-border dark:border-white/10">
          <summary className="cursor-pointer list-none px-3 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-zoiko-primary">
            <span className="flex items-center gap-2 text-sm font-semibold">
              <ShieldCheck className="h-4 w-4 text-zoiko-primary dark:text-[#ff8a8d]" aria-hidden />
              {t.title}
            </span>
            <span className="mt-0.5 block text-xs text-zoiko-dark/60 dark:text-gray-400">{t.summary}</span>
          </summary>
          <ul className="space-y-2 border-t border-zoiko-border dark:border-white/10 px-3 py-2.5">
            {t.claims.map((c) => (
              <li key={c.source_id} className="text-sm">
                {c.policy === "ABSTAIN" ? (
                  <p className="text-zoiko-dark/70 dark:text-gray-300">
                    <span className="font-medium">{c.title}:</span> we can't confirm this here. Please ask our team.
                  </p>
                ) : (
                  <p>{c.statement}</p>
                )}
                {c.policy === "QUALIFY" && c.qualifier && <p className="mt-0.5 text-xs text-amber-800 dark:text-amber-300">{c.qualifier}</p>}
                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                  <a href={c.url} className="text-zoiko-primary dark:text-[#ff8a8d] underline">
                    Source
                  </a>
                  {c.restricted_material_available && <Tag tone="blue">More detail on request</Tag>}
                </div>
              </li>
            ))}
          </ul>
        </details>
      ))}
      <div className="flex flex-wrap gap-2">
        {anyRestricted && canRequest && <Button onClick={() => navigate({ name: "intake", kind: "TRUST_ACCESS" })}>Request documentation</Button>}
        {data!.trust_center && <RouteButton link={data!.trust_center} />}
      </div>
    </div>
  );
}
