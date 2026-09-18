"use client";

import React from "react";

export const AssuranceFlowExamplesSection: React.FC = () => {
  const flows = [
    {
      title: "Identity risk signal to automated audit evidence",
      path: "Identity Risk Signal Detected > AI Threat Correlation > Policy Validation > Analyst Authorization > Action log written to SHA-256 Ledger",
    },
    {
      title: "Cloud configuration drift remediation tracking",
      path: "Drift Alert (AWS Config) > Resource Normalized > Framework mapping > Automated Policy Exception > Verifiable audit trail exported",
    },
    {
      title: "Endpoint threat alert to case triage context",
      path: "Falcon alert received > Enriched with directory context > Governed AI auto-remediation > Verified state recorded",
    },
  ];

  return (
    <section className="w-full bg-[#F0EDE6] py-12 border-b border-zoiko-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight font-sans">
          Continuous Assurance Flow Examples
        </h2>

        <div className="space-y-4">
          {flows.map((flow, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl border border-cyan-950/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-cyan-950/20 transition-all"
            >
              <div className="md:w-72 space-y-1 shrink-0">
                <h3 className="text-base font-extrabold text-slate-900 font-sans">
                  {flow.title}
                </h3>
                <span className="text-xs font-bold font-mono text-red-500 block">
                  HUMAN-IN-THE-LOOP CHECKPOINT
                </span>
              </div>

              <div className="flex-1 font-mono text-xs text-gray-500 leading-relaxed ">
                {flow.path}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssuranceFlowExamplesSection;
