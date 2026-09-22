"use client";

import React from "react";

interface MapRow {
  principle: string;
  expression: string;
  proofRoute: string;
  proofClass: string;
}

const ROWS: MapRow[] = [
  {
    principle: "Evidence Before Assertion",
    expression: "Checks live telemetry webhooks vs passive static directories.",
    proofRoute: "Available via Evidentiary Ledger",
    proofClass: "text-teal-700",
  },
  {
    principle: "Human-Governed Intelligence",
    expression: "Dual-approver workflow gate on administrative write actions.",
    proofRoute: "Requires Active Multi-Party Consent Keys",
    proofClass: "text-red-500",
  },
  {
    principle: "Least Privilege by Design",
    expression: "Strictly isolated read-only options for third-party auditing.",
    proofRoute: "Verified Read-Only Policy",
    proofClass: "text-teal-700",
  },
];

export const PlatformResolutionMapSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F0EDE6] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <div className="w-6 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-wider">
              PLATFORM RESOLUTION MAP
            </span>
          </div>

          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Tracing Principle to Operational Proof
          </h2>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <div className="min-w-[760px]">
              {/* Table Header */}
              <div className="p-4 bg-stone-200/90 flex items-center border-b border-cyan-950/10">
                <div className="w-60 shrink-0 text-slate-900 text-xs font-bold font-['JetBrains_Mono']">
                  PRINCIPLE
                </div>
                <div className="w-80 shrink-0 text-slate-900 text-xs font-bold font-['JetBrains_Mono']">
                  PLATFORM EXPRESSION
                </div>
                <div className="flex-1 text-slate-900 text-xs font-bold font-['JetBrains_Mono']">
                  EVIDENCE / PROOF ROUTE
                </div>
              </div>

              {/* Table Rows */}
              {ROWS.map((row, idx) => (
                <div
                  key={idx}
                  className={`p-5 flex items-center transition-colors hover:bg-stone-50 ${
                    idx !== ROWS.length - 1 ? "border-b border-cyan-950/10" : ""
                  }`}
                >
                  <div className="w-60 shrink-0 text-slate-900 text-base font-extrabold font-['Hanken_Grotesk']">
                    {row.principle}
                  </div>
                  <div className="w-80 shrink-0 text-gray-500 text-sm font-normal font-['Manrope'] pr-4">
                    {row.expression}
                  </div>
                  <div
                    className={`flex-1 text-xs font-semibold font-['JetBrains_Mono'] ${row.proofClass}`}
                  >
                    {row.proofRoute}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
