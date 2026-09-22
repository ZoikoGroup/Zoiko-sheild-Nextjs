"use client";

import React from "react";

interface FrameworkCard {
  title: string;
  badge: string;
  badgeClass: string;
  description: string;
}

const FRAMEWORKS: FrameworkCard[] = [
  {
    title: "PCI DSS v4.0.1",
    badge: "Reference only",
    badgeClass: "bg-gray-200 text-teal-700",
    description:
      "Baseline payment-account-data requirements. Maps relevant controls/evidence for in-scope environments; scope is assessor-owned.",
  },
  {
    title: "EU DORA",
    badge: "Potentially applicable",
    badgeClass: "bg-red-50 text-rose-800",
    description:
      "ICT risk, resilience, incident and third-party evidence concepts. Entity applicability requires Legal confirmation.",
  },
  {
    title: "NYDFS Part 500",
    badge: "Not assessed",
    badgeClass: "bg-blue-50 text-slate-700",
    description:
      "Governance, MFA/access, risk assessment, incident and third-party evidence — for applicable covered entities only.",
  },
  {
    title: "SEC Cyber Disclosure",
    badge: "Reference only",
    badgeClass: "bg-blue-50 text-slate-700",
    description:
      "Supports incident facts, decision chronology and governance reporting. Materiality remains issuer/legal judgment.",
  },
  {
    title: "FFIEC Guidance",
    badge: "Reference only",
    badgeClass: "bg-gray-200 text-teal-700",
    description:
      "Current IT Examination Handbook concepts — governance, access, information security. Retired CAT is not used.",
  },
  {
    title: "NIST CSF 2.0",
    badge: "Reference only",
    badgeClass: "bg-gray-200 text-teal-700",
    description:
      "Govern, Identify, Protect, Detect, Respond, Recover — a cross-framework organizing layer, non-prescriptive.",
  },
];

export const RegulatoryMappingSection: React.FC = () => {
  return (
    <section className="w-full bg-white border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <div className="w-6 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-wider">
              REGULATORY MAPPING CENTER
            </span>
          </div>

          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Framework mappings, with applicability made explicit — never implied.
          </h2>

          <p className="text-gray-500 text-base font-medium font-['Manrope'] leading-relaxed">
            Applicability status comes from Legal/Compliance authority, not from this page. Every card shows its status plainly.
          </p>
        </div>

        {/* 6 Cards Grid (3x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FRAMEWORKS.map((card, idx) => (
            <div
              key={idx}
              className="p-6 bg-stone-100 rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 hover:outline-cyan-950/25 shadow-xs flex flex-col justify-start items-start gap-3 transition-all hover:bg-white"
            >
              <div className="flex items-center justify-between w-full gap-2">
                <h3 className="text-slate-900 text-base font-extrabold font-['Hanken_Grotesk']">
                  {card.title}
                </h3>
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-bold font-['JetBrains_Mono'] tracking-wide shrink-0 ${card.badgeClass}`}
                >
                  {card.badge}
                </span>
              </div>

              <p className="text-gray-500 text-xs sm:text-sm font-normal font-['Manrope'] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
