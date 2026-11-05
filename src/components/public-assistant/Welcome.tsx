"use client";

import {
  Calendar,
  ChevronRight,
  FileCheck,
  Layers,
  Network,
  ShieldAlert,
  Sparkles,
  Target,
} from "lucide-react";
import { ShieldMark } from "./shared/ShieldMark";
import { useAssistant } from "./state/AssistantContext";
import type { View } from "./state/machine";

export function useOpenJourney() {
  const { navigate } = useAssistant();
  return (key: string) => {
    if (key === "demo") navigate({ name: "intake", kind: "DEMO" });
    else navigate({ name: key } as View);
  };
}

/* ── 6 Quick-Action Cards matching the design mockup ────────────── */
const CARDS = [
  {
    key: "threat",
    view: "help",
    icon: ShieldAlert,
    label: "Threat Detection",
    desc: "Stop threats before they impact your business.",
  },
  {
    key: "incident",
    view: "support",
    icon: Target,
    label: "Incident Response",
    desc: "Detect, analyze, and respond faster.",
  },
  {
    key: "compliance",
    view: "trust",
    icon: FileCheck,
    label: "Compliance",
    desc: "Support for global regulatory frameworks.",
  },
  {
    key: "platform",
    view: "discovery",
    icon: Layers,
    label: "Platform Overview",
    desc: "Explore key capabilities and benefits.",
  },
  {
    key: "integrations",
    view: "integrations",
    icon: Network,
    label: "Integrations",
    desc: "Works with your existing security stack.",
  },
  {
    key: "demo",
    view: "demo",
    icon: Calendar,
    label: "Book a Demo",
    desc: "See Zoiko Shield in action.",
  },
];

/* ── Suggested Questions matching the design mockup ─────────────── */
const SUGGESTIONS = [
  "What is Zoiko Shield?",
  "How does pricing work?",
  "Which compliance frameworks do you support?",
  "How does Zoiko Shield detect threats?",
];

/* Shield + network artwork behind the home view, as in the design mockup.
   Light mode inverts the dark artwork into a pale, airy version; dark mode uses it as-is. */
function ShieldBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/assistant/shield-bg.webp"
        alt=""
        className="absolute right-0 top-0 h-full w-full object-cover object-right opacity-[0.28] [filter:invert(1)_hue-rotate(180deg)] dark:opacity-[0.55] dark:[filter:none] [mask-image:linear-gradient(to_right,transparent_0%,black_55%),linear-gradient(to_bottom,black_70%,transparent_100%)] [mask-composite:intersect] [-webkit-mask-composite:source-in]"
      />
    </div>
  );
}

export function Welcome() {
  const { submit } = useAssistant();
  const open = useOpenJourney();

  return (
    <div className="relative isolate min-h-full">
      <ShieldBackdrop />
      <div className="relative flex flex-col gap-4 p-4 sm:p-5">
      {/* ── Greeting message bubble with red squircle avatar ──────── */}
      <div className="motion-safe:animate-zs-fade-up flex items-start gap-3">
        <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#c5221f] to-[#7f1311] shadow-sm p-2 text-white">
          <ShieldMark className="h-6 w-6 text-white" />
        </div>
        <div className="flex-1 rounded-2xl bg-white dark:bg-[#162231] border border-gray-100 dark:border-white/5 p-4 sm:p-5 shadow-sm">
          <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-snug">
            Hello! I&apos;m the Zoiko Shield AI Assistant.
          </p>
          <p className="mt-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            I can help you learn about Zoiko Shield&apos;s cybersecurity
            platform, use cases, integrations, compliance, and more.
            Ask me anything or choose a topic below.
          </p>
        </div>
      </div>

      {/* ── 6 Feature Cards (1 column on mobile, 3 columns on desktop) ── */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {CARDS.map((c, i) => {
          const Icon = c.icon;
          return (
            <li key={c.key} className="motion-safe:animate-zs-fade-up" style={{ animationDelay: `${120 + i * 60}ms` }}>
              <button
                type="button"
                onClick={() => open(c.view)}
                className="group flex h-full w-full flex-col justify-between rounded-2xl border border-gray-100/90 dark:border-white/5 bg-white dark:bg-[#162231] p-4 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] hover:border-red-200 dark:hover:border-red-900/40 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-zoiko-primary"
              >
                <div className="flex w-full items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 dark:bg-red-950/40 text-[#c5221f] dark:text-[#ff6b6f] transition-colors group-hover:bg-[#c5221f] group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <ChevronRight
                    className="h-4 w-4 text-gray-300 dark:text-gray-600 transition-all group-hover:text-[#c5221f] group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </div>
                <div>
                  <span className="block text-xs sm:text-sm font-bold text-gray-900 dark:text-white mt-3 group-hover:text-[#c5221f] transition-colors">
                    {c.label}
                  </span>
                  <span className="block text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 mt-1 leading-snug">
                    {c.desc}
                  </span>
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      {/* ── Suggested Questions section ────────────────────────────── */}
      <div className="mt-1">
        <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300">
          <Sparkles className="h-3.5 w-3.5 text-gray-500" aria-hidden />
          <span>Suggested questions</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {SUGGESTIONS.map((q, i) => (
            <button
              key={q}
              style={{ animationDelay: `${520 + i * 70}ms` }}
              type="button"
              onClick={() => submit(q)}
              className="motion-safe:animate-zs-fade-up group inline-flex items-center gap-1.5 active:scale-95 rounded-full border border-gray-200/90 dark:border-white/10 bg-white dark:bg-[#162231] px-4 py-2 text-xs font-medium text-gray-700 dark:text-gray-200 shadow-sm transition hover:border-red-400 hover:text-[#c5221f] dark:hover:border-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-zoiko-primary"
            >
              <span>{q}</span>
              <ChevronRight
                className="h-3 w-3 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[#c5221f]"
                aria-hidden
              />
            </button>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
