"use client";

import { useEffect, useRef, useState } from "react";
import { useAssistant } from "./state/AssistantContext";
import { Header } from "./Header";
import { StatusBanner } from "./shared/StatusBanner";
import { Welcome } from "./Welcome";
import { Thread } from "./thread/Thread";
import { Composer } from "./thread/Composer";
import { HelpFlow } from "./flows/help/HelpFlow";
import { DiscoveryFlow } from "./flows/discovery/DiscoveryFlow";
import { CommercialFlow } from "./flows/commercial/CommercialFlow";
import { TrustFlow } from "./flows/trust/TrustFlow";
import { IntegrationsFlow } from "./flows/integrations/IntegrationsFlow";
import { OnboardingFlow } from "./flows/onboarding/OnboardingFlow";
import { SupportFlow } from "./flows/support/SupportFlow";
import { IntakeFlow } from "./flows/intake/IntakeFlow";
import { HistoryPanel } from "./history/HistoryPanel";
import { stopSpeaking } from "./shared/speech";

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return mobile;
}

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Panel() {
  const { state, dispatch, theme } = useAssistant();
  const mobile = useIsMobile();
  const panel = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const { view } = state;
  const showComposer = view.name === "welcome" || view.name === "chat";

  useEffect(() => {
    panel.current?.querySelector<HTMLElement>("#zs-assistant-title")?.focus();
    // Closing the panel silences any answer being read aloud.
    return stopSpeaking;
  }, []);

  useEffect(() => {
    stopSpeaking();
  }, [state.chatId]);

  useEffect(() => {
    // New view: start at the top and announce it via the heading focus.
    if (view.name !== "chat") body.current?.scrollTo({ top: 0 });
  }, [view]);

  useEffect(() => {
    if (!mobile) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobile]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      dispatch({ type: "close" });
      return;
    }
    // Mobile is modal: keep Tab inside the panel.
    if (mobile && e.key === "Tab" && panel.current) {
      const items = [...panel.current.querySelectorAll<HTMLElement>(FOCUSABLE)];
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  return (
    // Tailwind's dark: variant matches descendants of .dark, so the class sits on a wrapper.
    <div className={theme === "dark" ? "dark" : undefined}>
      <div
        ref={panel}
        id="zs-assistant-panel"
        role="dialog"
        aria-modal={mobile}
        aria-labelledby="zs-assistant-title"
        onKeyDown={onKeyDown}
        className="fixed z-[60] flex flex-col overflow-hidden bg-white dark:bg-[#111d28] text-zoiko-dark dark:text-gray-100 dark:[color-scheme:dark] shadow-2xl ring-1 ring-black/10 dark:ring-white/10 inset-0 sm:inset-auto sm:bottom-20 sm:right-5 sm:h-[min(680px,calc(100dvh-7rem))] sm:w-[400px] sm:rounded-2xl"
      >
        <Header />
        <StatusBanner />
        <div ref={body} className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          {view.name === "welcome" && <Welcome />}
          {view.name === "chat" && <Thread scrollRoot={body} />}
          {view.name === "help" && <HelpFlow key={view.query ?? ""} initialQuery={view.query} />}
          {view.name === "discovery" && <DiscoveryFlow />}
          {view.name === "commercial" && <CommercialFlow />}
          {view.name === "trust" && <TrustFlow />}
          {view.name === "integrations" && <IntegrationsFlow />}
          {view.name === "onboarding" && <OnboardingFlow />}
          {view.name === "support" && <SupportFlow />}
          {view.name === "intake" && <IntakeFlow key={view.kind} kind={view.kind} />}
          {view.name === "history" && <HistoryPanel />}
        </div>
        {showComposer && <Composer />}
      </div>
    </div>
  );
}
