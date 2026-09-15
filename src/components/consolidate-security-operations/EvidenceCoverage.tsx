"use client";

import { Shield } from "lucide-react";

export default function EvidenceCoverage() {
  return (
    <section className="w-full overflow-hidden px-28 py-20">
      <div className="flex w-full flex-col items-start justify-start gap-7">
        {/* Header */}
        <div className="flex w-full flex-col items-start justify-start gap-3.5 overflow-hidden">
          {/* Eyebrow */}
          <div className="flex items-center justify-start gap-2.5 overflow-hidden">
            <div className="h-0.5 w-5 bg-red-500" />

            <div className="font-['JetBrains_Mono'] text-xs font-medium uppercase text-red-500">
              Evidence + coverage gaps
            </div>
          </div>

          {/* Heading */}
          <h2 className="w-full font-['Hanken_Grotesk'] text-4xl font-extrabold leading-10 text-slate-900">
            Proof with provenance. Limits in plain sight.
          </h2>

          {/* Description */}
          <p className="w-full font-['Manrope'] text-base font-normal leading-6 text-gray-500">
            Preserve what happened, who decided, what executed and where
            coverage is incomplete.
          </p>
        </div>

        {/* Cards */}
        <div className="flex w-full items-start justify-start gap-4">
          {/* Evidence Elements */}
          <div className="flex-1 overflow-hidden rounded-2xl bg-white p-5 shadow-[0px_12px_36px_0px_rgba(11,37,48,0.09)] outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
            <div className="flex flex-col items-start justify-start gap-2.5">
              <div className="w-full font-['Hanken_Grotesk'] text-base font-extrabold text-slate-900">
                Evidence elements
              </div>

              <div className="w-full font-['Manrope'] text-xs font-normal leading-5 text-gray-500">
                Source record · normalized view · analyst artifact · decision
                record · action receipt · communication record · case package ·
                completeness · integrity · export · correction
              </div>
            </div>
          </div>

          {/* Source Health */}
          <div className="flex-1 overflow-hidden rounded-2xl bg-white p-5 shadow-[0px_12px_36px_0px_rgba(11,37,48,0.09)] outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
            <div className="flex flex-col items-start justify-start gap-2.5">
              <div className="w-full font-['Hanken_Grotesk'] text-base font-extrabold text-slate-900">
                Source health
              </div>

              <div className="w-full font-['Manrope'] text-xs font-normal leading-5 text-gray-500">
                Connection health · freshness · parser health · schema drift ·
                data completeness · duplicate / conflict · clock issues ·
                coverage effect · fallback · recovery · unknown
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="flex w-full items-center justify-start gap-3 overflow-hidden rounded-2xl bg-gray-200 p-4 outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
          {/* Shield Icon */}
          <Shield
            size={20}
            strokeWidth={1.5}
            className="shrink-0 text-teal-700"
          />

          <div className="flex-1 font-['Manrope'] text-sm font-bold leading-5 text-slate-900">
            A correlated view is not automatically forensic evidence, legal
            proof or compliance evidence.
          </div>
        </div>
      </div>
    </section>
  );
}