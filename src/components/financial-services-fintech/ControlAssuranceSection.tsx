"use client";

import React from "react";

interface ControlRow {
  code: string;
  name: string;
  owner: string;
  status: "Effective" | "Partial" | "Unknown";
  test: string;
  freshness: "Fresh" | "Nearing due" | "Stale";
  exceptions: number;
}

const ROWS: ControlRow[] = [
  {
    code: "AC-2",
    name: "Identity Access Mgmt",
    owner: "SecOps",
    status: "Effective",
    test: "Automated · 4h",
    freshness: "Fresh",
    exceptions: 0,
  },
  {
    code: "CC7.2",
    name: "Continuous Monitoring",
    owner: "Platform",
    status: "Effective",
    test: "Automated · 1h",
    freshness: "Fresh",
    exceptions: 0,
  },
  {
    code: "PCI 8.3",
    name: "MFA for Access",
    owner: "IAM",
    status: "Partial",
    test: "Hybrid · 3d",
    freshness: "Nearing due",
    exceptions: 1,
  },
  {
    code: "DORA ICT-9",
    name: "Third-Party Register",
    owner: "TPRM",
    status: "Unknown",
    test: "Manual · 30d",
    freshness: "Stale",
    exceptions: 2,
  },
];

export const ControlAssuranceSection: React.FC = () => {
  return (
    <section className="w-full bg-stone-100 border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        {/* Header */}
        <div className="max-w-3xl flex flex-col items-center text-center gap-3">
          <div className="inline-flex items-center gap-2">
            <div className="w-5 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest">
              CONTINUOUS CONTROL ASSURANCE
            </span>
          </div>

          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Live assurance, not audit-time reconstruction.
          </h2>

          <p className="text-gray-500 text-sm sm:text-base font-normal font-['Manrope'] leading-relaxed">
            Missing, stale, delayed, or conflicting evidence cannot silently become Effective.
          </p>
        </div>

        {/* Table Container */}
        <div className="w-full bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[760px]">
              {/* Table Header */}
              <thead>
                <tr className="bg-slate-900 text-slate-300 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-wider">
                  <th className="py-4 px-6">Control</th>
                  <th className="py-4 px-6">Owner</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6">Test</th>
                  <th className="py-4 px-6">Evidence Freshness</th>
                  <th className="py-4 px-6 text-right">Exceptions</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-cyan-950/10 text-sm font-['Manrope']">
                {ROWS.map((row, idx) => {
                  let statusBadge = (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-teal-700 text-xs font-bold font-['JetBrains_Mono'] tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                      Effective
                    </span>
                  );

                  if (row.status === "Partial") {
                    statusBadge = (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold font-['JetBrains_Mono'] tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        Partial
                      </span>
                    );
                  } else if (row.status === "Unknown") {
                    statusBadge = (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-200 text-slate-700 text-xs font-bold font-['JetBrains_Mono'] tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                        Unknown
                      </span>
                    );
                  }

                  let freshnessClass = "text-teal-700 font-semibold";
                  if (row.freshness === "Nearing due") freshnessClass = "text-red-500 font-semibold";
                  if (row.freshness === "Stale") freshnessClass = "text-slate-500 font-medium";

                  return (
                    <tr key={idx} className="hover:bg-stone-50 transition-colors">
                      <td className="py-4 px-6">
                        <span className="font-bold text-slate-900">{row.code}</span>
                        <span className="text-gray-500 font-normal"> · {row.name}</span>
                      </td>
                      <td className="py-4 px-6 text-gray-600 text-xs font-['JetBrains_Mono'] font-medium">
                        {row.owner}
                      </td>
                      <td className="py-4 px-6">{statusBadge}</td>
                      <td className="py-4 px-6 text-gray-500 text-xs font-['JetBrains_Mono']">
                        {row.test}
                      </td>
                      <td className={`py-4 px-6 text-xs font-['JetBrains_Mono'] ${freshnessClass}`}>
                        {row.freshness}
                      </td>
                      <td className="py-4 px-6 text-right font-bold text-slate-900 text-xs font-['JetBrains_Mono']">
                        {row.exceptions}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
