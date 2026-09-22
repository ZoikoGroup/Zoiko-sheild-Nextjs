"use client";

import React from "react";

interface AiDirectiveCard {
  badge: string;
  title: string;
  description: string;
}

const DIRECTIVES: AiDirectiveCard[] = [
  {
    badge: "BOUNDED",
    title: "Zero decision delegation",
    description:
      "Algorithms isolate anomalies, but are structurally locked from executing response steps without keys.",
  },
  {
    badge: "ISOLATED",
    title: "Data Isolation",
    description:
      "All parsed evidence stays completely isolated in regional, customer-designated cryptographic ledgers.",
  },
  {
    badge: "AUDITABLE",
    title: "Full Traceability",
    description:
      "Every algorithmic suggestion prints clear connection paths with original microsecond-bound sensor timestamps.",
  },
  {
    badge: "LIMITATIONS",
    title: "Vulnerability Disclosure",
    description:
      "Transparent posture matrices explicitly flag what is unvetted, partial, or missing, ensuring clear operation limits.",
  },
];

export const AiGovernanceDirectivesSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F0EDE6]  border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <div className="w-6 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-wider">
              AI GOVERNANCE
            </span>
          </div>

          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Responsible Security &amp; AI Directives
          </h2>

          <p className="text-gray-500 text-base font-normal font-['Manrope'] leading-6">
            We reject &quot;black-box&quot; decision making. Inside Zoiko Tech, automated intelligence acts strictly to parse data scale, bound by strict human boundaries and isolation gates.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DIRECTIVES.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 hover:outline-cyan-950/25 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-3 h-full"
            >
              <div className="space-y-2.5">
                <div className="text-teal-700 text-xs font-bold font-['JetBrains_Mono'] tracking-wider">
                  {item.badge}
                </div>
                <h3 className="text-slate-900 text-base font-extrabold font-['Hanken_Grotesk'] leading-snug">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-500 text-xs font-normal font-['Manrope'] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
