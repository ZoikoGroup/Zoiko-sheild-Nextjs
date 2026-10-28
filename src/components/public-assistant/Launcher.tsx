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
        className={`group fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-zoiko-primary text-white shadow-lg shadow-zoiko-primary/30 transition duration-300 hover:bg-[#8f181c] hover:shadow-xl hover:shadow-zoiko-primary/40 motion-safe:hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-zoiko-primary/40 ${state.open ? "max-sm:hidden" : ""}`}
      >
        {!state.open && (
          <span className="pointer-events-none absolute inset-0 rounded-full border-2 border-zoiko-primary opacity-0 motion-safe:group-hover:animate-zs-ring" aria-hidden />
        )}
        {state.open ? (
          <X className="h-6 w-6 transition-transform duration-300 motion-safe:group-hover:rotate-90" aria-hidden />
        ) : (
          <ShieldMark className="h-7 w-7 motion-safe:group-hover:animate-zs-tilt motion-safe:group-focus-visible:animate-zs-tilt" />
        )}
      </button>
      {state.open && <Panel />}
    </>
  );
}
