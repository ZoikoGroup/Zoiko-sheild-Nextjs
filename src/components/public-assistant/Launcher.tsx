"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { ShieldMark } from "./shared/ShieldMark";
import type { ConfigBody, StatusBody } from "@/lib/public-assistant/contract";
import { get } from "./api/client";
import { AssistantProvider, useAssistant } from "./state/AssistantContext";
import { copy } from "./copy/en-US";

const Panel = dynamic(() => import("./Panel").then((m) => m.Panel), { ssr: false });

export function Launcher() {
  const [boot, setBoot] = useState<{ config: ConfigBody | null; status: StatusBody | null } | null>(null);

  useEffect(() => {
    // After the page settles: config and status are reads, they don't create a session.
    const load = () =>
      Promise.all([get<ConfigBody>("config").catch(() => null), get<StatusBody>("status").catch(() => null)]).then(([config, status]) => setBoot({ config, status }));
    const idle = (window as { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
    if (idle) idle(load);
    else setTimeout(load, 1500);
  }, []);

  // Launcher off, or the service didn't answer: render nothing rather than a dead button.
  if (!boot || !boot.config || boot.status?.state === "disabled") return null;

  return (
    <AssistantProvider config={boot.config} status={boot.status}>
      <LauncherButton />
    </AssistantProvider>
  );
}

function LauncherButton() {
  const { state, dispatch } = useAssistant();
  const button = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    // Return focus to the launcher when the panel closes.
    if (wasOpen.current && !state.open) button.current?.focus();
    wasOpen.current = state.open;
  }, [state.open]);

  return (
    <>
      <button
        ref={button}
        type="button"
        onClick={() => dispatch({ type: state.open ? "close" : "open" })}
        aria-expanded={state.open}
        aria-controls="zs-assistant-panel"
        aria-label={state.open ? copy.launcher.close : copy.launcher.open}
        title={state.open ? copy.launcher.close : copy.launcher.label}
        className={`group fixed bottom-5 right-5 z-[60] flex items-center gap-2.5 rounded-full bg-[#0c1524] border border-[#ff3b3f]/70 px-4 py-2 text-white shadow-xl shadow-red-950/40 transition duration-300 hover:border-[#ff3b3f] hover:shadow-[0_0_22px_rgba(255,59,63,0.45)] motion-safe:hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ff3b3f]/40 ${
          state.open ? "ring-2 ring-[#ff3b3f]" : ""
        }`}
      >
        {/* Pulsing notification dot in top right corner */}
        <span className="absolute -top-1 -right-0.5 flex h-3.5 w-3.5" aria-hidden>
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#ff3b3f] ring-2 ring-[#0c1524]" />
        </span>

        {/* Red squircle avatar with circuit shield mark */}
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#c5221f] to-[#7f1311] shadow-inner p-1 shrink-0" aria-hidden>
          <ShieldMark className="h-5 w-5 text-white" />
        </span>

        <span className="text-sm font-semibold tracking-wide text-white whitespace-nowrap">
          {state.open ? "Close Assistant" : "Ask Zoiko Shield"}
        </span>

        {state.open ? (
          <X className="h-4 w-4 text-white/80 transition-transform duration-300 group-hover:rotate-90 shrink-0" aria-hidden />
        ) : (
          <span className="text-white/70 text-sm font-bold transition-transform group-hover:translate-x-0.5" aria-hidden>&gt;</span>
        )}
      </button>
      {state.open && <Panel />}
    </>
  );
}
