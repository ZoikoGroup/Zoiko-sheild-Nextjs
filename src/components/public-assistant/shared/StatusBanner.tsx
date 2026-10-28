"use client";

import { Info } from "lucide-react";
import { useAssistant } from "../state/AssistantContext";
import { copy } from "../copy/en-US";

export function StatusBanner() {
  const { status, config } = useAssistant();
  if (!status) return null;
  const degraded = status.state === "degraded";
  // Static mode is the normal state while AI answers are flagged off; only say so if AI was meant to be on.
  const aiExpected = config?.flags.assistant_ai_answers;
  if (!degraded && !(aiExpected && status.mode === "static")) return null;
  return (
    <div role="status" className="flex gap-2 border-b border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/40 px-4 py-2 text-xs text-amber-900 dark:text-amber-200">
      <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
      <p>
        {degraded ? copy.status.degraded : copy.status.staticMode}{" "}
        {status.fallback_links.map((l, i) => (
          <span key={l.route_key}>
            {i > 0 && " · "}
            <a href={l.url} className="font-medium underline">
              {l.label}
            </a>
          </span>
        ))}
      </p>
    </div>
  );
}
