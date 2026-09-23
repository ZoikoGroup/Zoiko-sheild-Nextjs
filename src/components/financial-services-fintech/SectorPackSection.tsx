"use client";

import React from "react";

interface SectorPackCard {
  number: string;
  title: string;
  description: string;
}

const PACKS: SectorPackCard[] = [
  {
    number: "01",
    title: "Identity & Privileged Access",
    description:
      "Zero Trust patterns, MFA, PAM, JIT access, service-account governance, access evidence.",
  },
  {
    number: "02",
    title: "API / Application / Channel Security",
    description:
      "API inventory, auth/secret exposure, application findings, auditable remediation evidence.",
  },
  {
    number: "03",
    title: "Cloud, Endpoint & Infrastructure Defense",
    description:
      "Posture, detection, exposure, vulnerabilities, endpoint events, infrastructure health.",
  },
  {
    number: "04",
    title: "Continuous Control Assurance",
    description:
      "Control library, tests, evidence, freshness, exceptions, framework mappings.",
  },
  {
    number: "05",
    title: "Third-Party ICT Resilience",
    description:
      "Providers, services, criticality, dependencies, evidence, issues, incident linkage.",
  },
  {
    number: "06",
    title: "Incident / Board / Regulator Governance",
    description:
      "Incident evidence, decision log, ownership, board brief, disclosure-support artifacts.",
  },
];

export const SectorPackSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-28 border-b border-cyan-950/20">
      {/* Radial atmospheric cyan glow */}
      <div
        className="pointer-events-none absolute -top-10 left-0 w-[550px] h-[550px] bg-teal-500/15 blur-3xl rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[450px] h-[450px] bg-red-500/10 blur-3xl rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <div className="w-6 h-0.5 bg-red-500" />
            <span className="text-red-400 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest">
              FINANCIAL SERVICES SECTOR PACK
            </span>
          </div>

          <h2 className="text-white text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            From risk signal to regulator-ready proof, in one operating architecture.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-normal font-['Manrope'] leading-relaxed">
            A configuration and experience layer over verified platform capabilities — not a separate product, SKU, or compliance guarantee.
          </p>
        </div>

        {/* 6 Cards Grid (3x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PACKS.map((item) => (
            <div
              key={item.number}
              className="p-6 sm:p-7 bg-white/[0.04] hover:bg-white/[0.07] rounded-xl outline outline-1 outline-offset-[-1px] outline-white/10 hover:outline-white/20 transition-all duration-300 flex flex-col justify-start items-start gap-3.5 shadow-lg group"
            >
              <div className="text-emerald-400 text-xs font-bold font-['JetBrains_Mono'] tracking-wider">
                {item.number}
              </div>

              <h3 className="text-white text-base sm:text-lg font-bold font-['Hanken_Grotesk'] leading-snug group-hover:text-red-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm font-normal font-['Manrope'] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
