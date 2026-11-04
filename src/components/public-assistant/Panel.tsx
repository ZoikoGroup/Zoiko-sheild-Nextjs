"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Calendar,
  ChevronRight,
  CreditCard,
  GitFork,
  HelpCircle,
  LayoutGrid,
  MessageSquare,
  Network,
  ShieldCheck,
  X,
} from "lucide-react";
import { ZoikoLogo } from "@/components/common/ZoikoLogo";
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
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return mobile;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Panel() {
  const { state, dispatch, navigate, theme, submit } = useAssistant();
  const mobile = useIsMobile();
  const panel = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const { view } = state;
  const showComposer = view.name === "welcome" || view.name === "chat";

  useEffect(() => {
    panel.current?.querySelector<HTMLElement>("#zs-assistant-title")?.focus();
    return stopSpeaking;
  }, []);

  useEffect(() => {
    stopSpeaking();
  }, [state.chatId]);

  useEffect(() => {
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

  const isChatActive = view.name === "welcome" || view.name === "chat";

  return (
    <div className={theme === "dark" ? "dark" : undefined}>
      {/* Backdrop on mobile */}
      {mobile && (
        <div
          className="fixed inset-0 z-[59] bg-black/50 backdrop-blur-sm"
          onClick={() => dispatch({ type: "close" })}
          aria-hidden
        />
      )}

      {/* Main Panel Window matching the Desktop & Mobile mockup */}
      <div
        ref={panel}
        id="zs-assistant-panel"
        role="dialog"
        aria-modal={mobile}
        aria-labelledby="zs-assistant-title"
        onKeyDown={onKeyDown}
        className="motion-safe:animate-zs-panel fixed z-[60] flex flex-col overflow-hidden bg-[#f0f4f8] dark:bg-[#0c1522] text-zoiko-dark dark:text-gray-100 shadow-2xl ring-1 ring-black/10 dark:ring-white/10 inset-0 md:inset-auto md:bottom-5 md:right-5 md:w-[min(1060px,calc(100vw-2.5rem))] md:h-[min(740px,calc(100dvh-3.5rem))] md:rounded-3xl border border-white/60 dark:border-white/10"
      >
        {/* ── Desktop Window Top Navigation Bar ──────────────────────── */}
        <div className="hidden md:flex items-center justify-between px-4 py-2.5 bg-white dark:bg-[#101b27] border-b border-gray-200/80 dark:border-white/10 shrink-0 select-none">
          <div className="flex items-center gap-3">
            <ZoikoLogo height={26} />
          </div>

          {/* Desktop Nav Links */}
          <nav className="flex items-center gap-5 text-xs font-medium text-gray-600 dark:text-gray-300">
            <Link href="/platform-overview" className="hover:text-zoiko-primary transition">Platform</Link>
            <Link href="/compare-starting-paths" className="hover:text-zoiko-primary transition">Use Cases</Link>
            <Link href="/integrations" className="hover:text-zoiko-primary transition">Integrations</Link>
            <Link href="/developers-documentation" className="hover:text-zoiko-primary transition">Resources</Link>
            <Link href="/how-pricing-works" className="hover:text-zoiko-primary transition">Pricing</Link>
          </nav>

          {/* Desktop Book a Demo Button */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => navigate({ name: "intake", kind: "DEMO" })}
              className="inline-flex items-center gap-1 rounded-full bg-[#c5221f] hover:bg-[#a51b18] px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition"
            >
              <span>Book a Demo</span>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => dispatch({ type: "close" })}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-white"
              title="Close window"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ── Mobile Top Header (with Logo & Menu) ────────────────────── */}
        <div className="md:hidden flex items-center justify-between px-3 py-2.5 bg-white dark:bg-[#101b27] border-b border-gray-200/80 dark:border-white/10 shrink-0">
          <ZoikoLogo height={24} />
          <button
            type="button"
            onClick={() => dispatch({ type: "close" })}
            className="p-1.5 text-gray-600 dark:text-gray-300"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* ── Window Body: Sidebar (desktop) + Assistant Main Area ──── */}
        <div className="flex flex-1 min-h-0 overflow-hidden">
          {/* Left Sidebar on desktop matching the mockup */}
          <aside className="hidden md:flex flex-col w-56 lg:w-60 shrink-0 bg-[#f8fafc] dark:bg-[#0c1522] border-r border-gray-200/80 dark:border-white/10 p-3 select-none">
            <nav className="flex flex-col gap-1">
              {/* Chat - Active Item */}
              <button
                type="button"
                onClick={() => dispatch({ type: "home" })}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition ${
                  isChatActive
                    ? "bg-[#0f172a] text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <MessageSquare className="h-4 w-4" aria-hidden />
                  <span>Chat</span>
                </span>
                <ChevronRight className="h-3.5 w-3.5 opacity-70" aria-hidden />
              </button>

              <button
                type="button"
                onClick={() => submit("What is ZoikoShield?")}
                className="group flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:translate-x-0.5 active:scale-[0.97] transition-all duration-200"
              >
                <LayoutGrid className="h-4 w-4 text-gray-400" aria-hidden />
                <span>Product Overview</span>
              </button>

              <button
                type="button"
                onClick={() => navigate({ name: "discovery" })}
                className="group flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:translate-x-0.5 active:scale-[0.97] transition-all duration-200"
              >
                <GitFork className="h-4 w-4 text-gray-400" aria-hidden />
                <span>Use Cases</span>
              </button>

              <button
                type="button"
                onClick={() => navigate({ name: "integrations" })}
                className="group flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:translate-x-0.5 active:scale-[0.97] transition-all duration-200"
              >
                <Network className="h-4 w-4 text-gray-400" aria-hidden />
                <span>Integrations</span>
              </button>

              <button
                type="button"
                onClick={() => navigate({ name: "trust" })}
                className="group flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:translate-x-0.5 active:scale-[0.97] transition-all duration-200"
              >
                <ShieldCheck className="h-4 w-4 text-gray-400" aria-hidden />
                <span>Security &amp; Compliance</span>
              </button>

              <button
                type="button"
                onClick={() => navigate({ name: "commercial" })}
                className="group flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:translate-x-0.5 active:scale-[0.97] transition-all duration-200"
              >
                <CreditCard className="h-4 w-4 text-gray-400" aria-hidden />
                <span>Pricing &amp; Plans</span>
              </button>

              <button
                type="button"
                onClick={() => navigate({ name: "intake", kind: "DEMO" })}
                className="group flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:translate-x-0.5 active:scale-[0.97] transition-all duration-200"
              >
                <Calendar className="h-4 w-4 text-gray-400" aria-hidden />
                <span>Book a Demo</span>
              </button>

              <button
                type="button"
                onClick={() => navigate({ name: "support" })}
                className="group flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:translate-x-0.5 active:scale-[0.97] transition-all duration-200"
              >
                <HelpCircle className="h-4 w-4 text-gray-400" aria-hidden />
                <span>Contact Support</span>
              </button>
            </nav>

            {/* Bottom Promo Card matching the mockup design */}
            <div className="mt-auto rounded-2xl bg-gradient-to-b from-[#0a192f] via-[#071322] to-[#020b18] p-3.5 text-white shadow-md relative overflow-hidden border border-cyan-900/40">
              <div
                className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:12px_12px]"
                aria-hidden
              />
              <div className="relative z-10">
                <p className="text-xs font-bold leading-tight tracking-wide text-white">
                  Stronger Security
                </p>
                <p className="text-xs font-bold leading-tight tracking-wide text-[#ff4d4f] mt-0.5">
                  Brighter Possibilities
                </p>
                <div className="mt-3 h-12 w-full rounded-lg bg-gradient-to-r from-cyan-500/10 to-red-500/10 border border-white/10 flex items-center justify-center">
                  <span className="text-[10px] text-cyan-200/80 font-mono tracking-wider">ZOIKO • SHIELD</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Assistant Content Area */}
          <main className="flex-1 flex flex-col min-w-0 bg-[#f8fafc] dark:bg-[#0d1624] overflow-hidden">
            <Header />
            <StatusBanner />
            <div ref={body} className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            <div key={view.name === "chat" ? "chat" : JSON.stringify(view)} className="motion-safe:animate-zs-fade-up min-h-full">
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
            </div>
            {showComposer && <Composer />}
          </main>
        </div>
      </div>
    </div>
  );
}
