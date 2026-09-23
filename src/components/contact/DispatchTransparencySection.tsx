"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "./shared";

const WORKFLOW = [
  { step: "1. CHOOSE INTENT", title: "Select Destination" },
  { step: "2. IDENTITY CHECK", title: "Minimum Verification" },
  { step: "3. INTAKE CONTEXT", title: "Fill Portal Fields" },
  { step: "4. SUBMIT & RECORD", title: "Confirm Secure Code" },
];

const PIPELINE = ["Validate", "Persist", "Classify", "Route", "Acknowledge", "Monitor", "Retry", "Escalate"];

const STATES = [
  { label: "State: Success / Reference code generated", dot: "bg-emerald-500", border: "border-emerald-500/40" },
  { label: "State: Routing Delayed · Queue alert monitored", dot: "bg-orange-500", border: "border-orange-500/40" },
  { label: "State: Validation Error · Field constraint conflict", dot: "bg-red-500", border: "border-red-500/40" },
  { label: "State: Security Input Warning · Sensitive data flagged", dot: "bg-slate-400", border: "border-white/20" },
  { label: "State: Processing · Executing persistent storage", dot: "bg-slate-400", border: "border-sky-400/30" },
  { label: "State: Spam / Rate Limit exceeded · Retry in 5m", dot: "bg-red-400", border: "border-red-400/60" },
];

export const DispatchTransparencySection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A1A24] py-16 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-28">
      <Image
        src="/images/contact/Pipeline-Section.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#0A1A24]/40" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto space-y-10">
        <div className="space-y-4">
          <Eyebrow>12 · ROUTING WORKFLOW &amp; REAL-TIME MONITORING</Eyebrow>
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold font-hanken leading-tight">
            Telemetry evidence &amp; dispatch transparency
          </h2>
          <p className="text-slate-300 text-base font-medium font-manrope">
            Trace how Zoiko Shield ensures robust, persistent, and compliance-governed dispatch across all telemetry.
          </p>
        </div>

        {/* User interaction workflow */}
        <div className="space-y-4">
          <h3 className="text-orange-300 text-lg font-semibold font-jetbrains uppercase tracking-wide">
            User Interaction Workflow
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row lg:items-center gap-3">
            {WORKFLOW.map((item, idx) => (
              <React.Fragment key={item.step}>
                <div className="flex-1 p-4 bg-slate-800/60 backdrop-blur-sm rounded-lg border border-white/15 flex flex-col gap-1.5">
                  <span className="text-orange-300 text-xs font-jetbrains uppercase">{item.step}</span>
                  <span className="text-white text-sm font-bold font-manrope">{item.title}</span>
                </div>
                {idx < WORKFLOW.length - 1 && (
                  <ArrowRight className="hidden lg:block w-4 h-4 text-orange-300 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Backend pipeline */}
        <div className="space-y-4">
          <h3 className="text-orange-300 text-lg font-semibold font-jetbrains uppercase tracking-wide">
            Backend Dispatch Architecture (Durable Routing)
          </h3>
          <ol className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 gap-3">
            {PIPELINE.map((stage, idx) => (
              <li
                key={stage}
                className="py-3 px-2 bg-[#12404F]/90 rounded-md flex flex-col items-center gap-1 text-center"
              >
                <span className="text-slate-400 text-[10px] font-jetbrains">{String(idx + 1).padStart(2, "0")}</span>
                <span className="text-white text-sm font-medium font-manrope">{stage}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Pipeline states */}
        <div className="space-y-4">
          <h3 className="text-orange-300 text-lg font-semibold font-jetbrains uppercase tracking-wide">
            Real-Time Pipeline Status States
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {STATES.map((state) => (
              <div
                key={state.label}
                className={`px-4 py-2.5 bg-slate-900/40 rounded-md border ${state.border} flex items-center gap-2.5`}
              >
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${state.dot}`} />
                <span className="text-white text-xs sm:text-sm font-medium font-manrope">{state.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
