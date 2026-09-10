"use client";

import React from "react";

interface IncidentCard {
  number: string;
  title: string;
  flowText: string;
}

interface GovernanceDetail {
  label: string;
  value: string;
}

const INCIDENT_CARDS: IncidentCard[] = [
  {
    number: "01",
    title: "Harmful output routing",
    flowText: "Triage → accountable owner → evidence hold → correction",
  },
  {
    number: "02",
    title: "Security vulnerability routing",
    flowText: "Triage → accountable owner → evidence hold → correction",
  },
  {
    number: "03",
    title: "Privacy / data exposure",
    flowText: "Triage → accountable owner → evidence hold → correction",
  },
  {
    number: "04",
    title: "Bias / accessibility impact",
    flowText: "Triage → accountable owner → evidence hold → correction",
  },
  {
    number: "05",
    title: "Unauthorized action / decision-right breach",
    flowText: "Triage → accountable owner → evidence hold → correction",
  },
];

const GOVERNANCE_DETAILS: GovernanceDetail[] = [
  { label: "SUBJECT", value: "Claims Copilot v2.3" },
  { label: "REASON", value: "Partial multilingual coverage" },
  { label: "SCOPE", value: "French-language triage" },
  { label: "OWNER", value: "AI Risk Council" },
  { label: "COMPENSATING CONTROLS", value: "Mandatory human review" },
  { label: "REVIEW / EXPIRY", value: "18 / 30 Sep 2026" },
];

export default function IncidentResponseSection() {
  return (
    <section className="relative w-full py-16 md:py-24 text-white bg-[#0A2029CC] font-sans overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/govern/incident.png"
          alt="Control Room Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#07161B]/80" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#10B981]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#10B981] uppercase">
              INCIDENT RESPONSE
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-white tracking-tight mb-4 leading-[1.2]">
            Route concerns. Preserve evidence. Correct with authority.
          </h2>

          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            Governed routing connects every concern to accountable owners,
            preserved evidence and corrective action — without relying on a
            public incident form.
          </p>
        </div>

        {/* 5 Incident Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {INCIDENT_CARDS.map((card) => (
            <div
              key={card.number}
              className="bg-[#123B4C] backdrop-blur-md rounded-2xl p-5 border border-white/10 flex flex-col justify-between min-h-[190px]"
            >
              <div>
                <span className="block text-[11px] font-mono font-semibold text-[#3FDDB4] mb-3">
                  {card.number}
                </span>

                <h3 className="text-sm font-bold text-white mb-4 leading-snug">
                  {card.title}
                </h3>
              </div>

              <p className="text-[11px] text-[#94A3B8] leading-relaxed font-normal">
                {card.flowText}
              </p>
            </div>
          ))}
        </div>

        {/* Active Governance Exception Banner */}
        <div className="bg-[#FFFFFF14] rounded-3xl p-6 border border-white/10 shadow-2xl">
          {/* Top Banner Row */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                Active governance exception
              </h3>
              <p className="text-[10px] font-mono text-[#C44242] uppercase tracking-wider">
                EXC-2026-014
              </p>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F5F0] text-[10px] font-mono font-bold tracking-wider text-[#0F172A] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#D97706]" />
              EXPIRES 30 SEP
            </span>
          </div>

          {/* Details Row Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {GOVERNANCE_DETAILS.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F0EDE6] rounded-xl p-3.5 text-left"
              >
                <span className="block text-[8px] font-mono font-bold tracking-widest text-[#5B6670] uppercase mb-1.5">
                  {item.label}
                </span>
                <span className="text-xs font-bold text-[#0F172A] leading-tight block">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
