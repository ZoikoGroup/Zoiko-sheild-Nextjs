"use client";

import React from "react";
import Link from "next/link";

interface ProviderRow {
  provider: string;
  criticality: "Critical" | "High";
  assurance: "Current" | "Evidence due";
  nextReview: string;
  isOverdue?: boolean;
}

const PROVIDERS: ProviderRow[] = [
  {
    provider: "Cloud IaaS provider",
    criticality: "Critical",
    assurance: "Current",
    nextReview: "Q1 2027",
  },
  {
    provider: "Card processing gateway",
    criticality: "Critical",
    assurance: "Evidence due",
    nextReview: "Overdue",
    isOverdue: true,
  },
  {
    provider: "Identity provider (SSO)",
    criticality: "High",
    assurance: "Current",
    nextReview: "Q4 2026",
  },
  {
    provider: "Core banking platform",
    criticality: "Critical",
    assurance: "Current",
    nextReview: "Q2 2027",
  },
];

export const ThirdPartyResilienceSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-28 border-b border-cyan-950/20">
      {/* Radial atmospheric glow */}
      <div
        className="pointer-events-none absolute -top-10 right-0 w-[550px] h-[550px] bg-teal-500/15 blur-3xl rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column */}
        <div className="flex-1 max-w-[560px] flex flex-col justify-start items-start gap-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3">
            <div className="w-6 h-0.5 bg-red-500" />
            <span className="text-red-400 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest">
              THIRD-PARTY ICT &amp; SUPPLY-CHAIN RESILIENCE
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Make external dependency risk governable and reviewable.
          </h2>

          {/* Subtitle */}
          <p className="text-slate-300 text-sm sm:text-base font-normal font-['Manrope'] leading-relaxed">
            Provider, service, criticality, data/access, contract and evidence artifacts, incidents, and review status — in one register linked to the business services that depend on them.
          </p>

          {/* Link */}
          <div className="pt-2">
            <Link
              href="/integration-catalog"
              className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 text-sm font-bold font-['Manrope'] border-b-2 border-red-500 pb-1 transition-colors"
            >
              <span>View Third-Party Register →</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Register Table Container */}
        <div className="w-full lg:w-[600px] shrink-0 bg-white/[0.04] rounded-xl outline outline-1 outline-offset-[-1px] outline-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[520px]">
              {/* Table Header */}
              <thead>
                <tr className="bg-white/[0.06] text-slate-400 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-wider">
                  <th className="py-3.5 px-5">Provider</th>
                  <th className="py-3.5 px-4">Criticality</th>
                  <th className="py-3.5 px-4">Assurance</th>
                  <th className="py-3.5 px-5 text-right">Next Review</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-white/10 text-xs font-['JetBrains_Mono']">
                {PROVIDERS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.06] transition-colors">
                    <td className="py-4 px-5 text-slate-200 font-normal">
                      {row.provider}
                    </td>
                    <td className="py-4 px-4">
                      {row.criticality === "Critical" ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                          Critical
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          High
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      {row.assurance === "Current" ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Current
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                          Evidence due
                        </span>
                      )}
                    </td>
                    <td
                      className={`py-4 px-5 text-right font-medium ${
                        row.isOverdue ? "text-red-400 font-bold" : "text-slate-400"
                      }`}
                    >
                      {row.nextReview}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
