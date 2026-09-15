"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function EvidenceAndInvestigationSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
              EVIDENCE + COVERAGE GAPS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
            Proof with provenance. Limits in plain sight.
          </h2>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Preserve what happened, who decided, what executed and where
            coverage is incomplete.
          </p>
        </div>

        {/* Two Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Left Card: Evidence elements */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-3">
                Evidence elements
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Source record &mdash; normalized view &mdash; analyst artifact
                &mdash; decision record &mdash; action receipt &mdash;
                communication record &mdash; case package &mdash; completeness
                &mdash; integrity &mdash; export &mdash; correction.
              </p>
            </div>
          </div>

          {/* Right Card: Source health */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-3">
                Source health
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Connection health &mdash; freshness &mdash; parser health
                &mdash; schema drift &mdash; data completeness &mdash; duplicate
                / conflict &mdash; clock issues &mdash; coverage effect &mdash;
                fallback &mdash; recovery &mdash; unknown.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Alert/Note Banner */}
        <div className="bg-[#EBF3F1] rounded-2xl p-4 border border-[#CBD5E1]/60 flex items-center gap-3">
          <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#0F172A] shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#1F7A6C]" />
          </div>
          <p className="text-xs sm:text-sm text-[#0F172A] font-medium leading-relaxed">
            A correlated view is not automatically forensic evidence, legal
            proof or compliance evidence.
          </p>
        </div>
      </div>
    </section>
  );
}
