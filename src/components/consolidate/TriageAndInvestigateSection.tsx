"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function TriageAndInvestigateSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
              TRIAGE + INVESTIGATE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
            One queue for facts, hypotheses and ownership.
          </h2>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Keep every item attributable, time-bound and explicit about the next
            decision.
          </p>
        </div>

        {/* Two Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Left Card: Triage queue fields */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-3">
                Triage queue fields
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Item identity &mdash; routing basis &mdash; owner &mdash; state
                &mdash; priority &mdash; SLA / target &mdash; dependencies
                &mdash; staleness &mdash; escalation &mdash; handoff &mdash;
                closure.
              </p>
            </div>
          </div>

          {/* Right Card: Investigation workspace */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-3">
                Investigation workspace
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Question / hypothesis &mdash; trigger &mdash; scope &mdash;
                evidence &mdash; observed facts &mdash; interpretation &mdash;
                unknowns &mdash; impact &mdash; next action &mdash; owner
                &mdash; customer decision.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Alert/Note Banner */}
        <div className="bg-[#EBF3F1] rounded-2xl p-4 border border-[#CBD5E1]/60 flex items-center gap-3">
          <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#0F172A] shrink-0">
            <CheckCircle2 className="w-4 h-4 text-[#1F7A6C]" />
          </div>
          <p className="text-xs sm:text-sm text-[#0F172A] font-medium leading-relaxed">
            Automation and AI may assist but consequential conclusions retain
            human authority.
          </p>
        </div>
      </div>
    </section>
  );
}
