"use client";

import React from "react";

interface TechCard {
  tag: string;
  title: string;
  description: string;
}

const TECH_CATALOG: TechCard[] = [
  {
    tag: "01 / PLATFORM",
    title: "Cybersecurity Ingestion",
    description:
      "Direct stream mapping from CrowdStrike and Defender directly into unified operational security timelines.",
  },
  {
    tag: "02 / GOVERNANCE",
    title: "Compliance Control",
    description:
      "Continuous assurance layers mapped strictly to active directories, tracking permissions and privilege elevation.",
  },
  {
    tag: "03 / INTEGRATIONS",
    title: "Registry Connectors",
    description:
      "Pre-built integration ecosystems bridging directory postures with MDM and EDR registries natively.",
  },
  {
    tag: "04 / DEVELOPER DOCS",
    title: "API & Evidence Ledger",
    description:
      "Complete Webhook configurations and ledger parameters to export verifiable cryptographic records.",
  },
];

export const TechnologyCatalogSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F0EDE6] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <div className="w-6 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-wider">
              TECHNOLOGY CATALOG
            </span>
          </div>

          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            The Zoiko Shield Security Architecture
          </h2>

          <p className="text-gray-500 text-base font-medium font-['Manrope'] leading-6">
            A strictly engineered architecture that spans continuous endpoint security ingestion, identity validation, direct-from-source posture mapping, and cryptographic assurance storage.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TECH_CATALOG.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 hover:outline-cyan-950/25 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-4 h-full"
            >
              <div className="space-y-3">
                <div className="text-red-500 text-xs font-bold font-['JetBrains_Mono']">
                  {item.tag}
                </div>
                <h3 className="text-slate-900 text-lg font-extrabold font-['Hanken_Grotesk'] leading-snug">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-500 text-xs sm:text-sm font-normal font-['Manrope'] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
