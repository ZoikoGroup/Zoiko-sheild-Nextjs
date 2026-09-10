"use client";

import React from "react";

interface StatusStat {
  id: string;
  label: string;
  count: number;
  dotColor: string;
}

interface RegisterCard {
  id: string;
  title: string;
  description: string;
  badgeLabel: string;
  badgeDotColor: string;
  owner: string;
  scope: string;
  providerModel: string;
  decisionRight: string;
  review: string;
}

const STATS: StatusStat[] = [
  { id: "1", label: "DECLARED", count: 38, dotColor: "bg-[#10B981]" },
  { id: "2", label: "CONNECTED", count: 24, dotColor: "bg-[#3B82F6]" },
  { id: "3", label: "DISCOVERED", count: 7, dotColor: "bg-[#F59E0B]" },
  { id: "4", label: "UNKNOWN", count: 3, dotColor: "bg-[#C44242]" },
];

const CARDS: RegisterCard[] = [
  {
    id: "c1",
    title: "Customer credit assistant",
    description: "Decision support for commercial credit review",
    badgeLabel: "DECLARED",
    badgeDotColor: "bg-[#10B981]",
    owner: "Lending Operations",
    scope: "EU · Internal",
    providerModel: "Azure OpenAI · gpt-4.1",
    decisionRight: "Review required",
    review: "18 Sep 2026",
  },
  {
    id: "c2",
    title: "Claims document classifier",
    description: "Routes incoming claims and flags missing records",
    badgeLabel: "CONNECTED",
    badgeDotColor: "bg-[#3B82F6]",
    owner: "Claims Automation",
    scope: "UK · Production",
    providerModel: "Vertex AI · Gemini 2.5",
    decisionRight: "Advisory",
    review: "02 Oct 2026",
  },
  {
    id: "c3",
    title: "Shadow meeting summarizer",
    description: "Unapproved browser extension detected in finance",
    badgeLabel: "UNKNOWN",
    badgeDotColor: "bg-[#C44242]",
    owner: "Owner unknown",
    scope: "US · Discovered",
    providerModel: "Provider unresolved",
    decisionRight: "Unknown",
    review: "Immediate review",
  },
];

export default function InventoryCoverageSection() {
  return (
    <section className="w-full bg-[#F0EDE6] py-16 md:py-24 text-[#0F172A] font-sans">
      {/* Outer wrapper aligned left with padding gap */}
      <div className="w-full max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C44242]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
              INVENTORY COVERAGE
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3 leading-tight">
            Know where AI is used — and where visibility stops.
          </h2>

          <p className="text-sm sm:text-base max-w-xl text-[#5B6670] leading-relaxed">
            Combine declared registers, connected telemetry and discovery
            signals without pretending unknown systems are fully understood.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xl max-w-6xl">
          {/* Top Status Bar Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
            {STATS.map((stat) => (
              <div
                key={stat.id}
                className="bg-[#F7F5F0] rounded-2xl p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${stat.dotColor}`} />
                  <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#64748B] uppercase">
                    {stat.label}
                  </span>
                </div>
                <span className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
                  {stat.count}
                </span>
              </div>
            ))}
          </div>

          {/* 3-Card Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CARDS.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl p-5 border border-[#E2E8F0] flex flex-col justify-between text-left"
              >
                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-sm font-bold text-[#0F172A] leading-snug">
                      {card.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F0EDE6] text-[9px] font-mono font-bold tracking-wider text-[#0F172A] uppercase shrink-0">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${card.badgeDotColor}`}
                      />
                      {card.badgeLabel}
                    </span>
                  </div>

                  <p className="text-xs text-[#64748B] mb-5 leading-normal min-h-[36px]">
                    {card.description}
                  </p>

                  {/* Metadata Table Rows */}
                  <div className="space-y-2 text-[11px] border-t border-[#E2E8F0] pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[#94A3B8] font-bold tracking-wider uppercase text-[9px]">
                        OWNER
                      </span>
                      <span className="font-semibold text-[#0F172A]">
                        {card.owner}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[#94A3B8] font-bold tracking-wider uppercase text-[9px]">
                        SCOPE
                      </span>
                      <span className="font-semibold text-[#0F172A]">
                        {card.scope}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[#94A3B8] font-bold tracking-wider uppercase text-[9px]">
                        PROVIDER / MODEL
                      </span>
                      <span className="font-semibold text-[#0F172A]">
                        {card.providerModel}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[#94A3B8] font-bold tracking-wider uppercase text-[9px]">
                        DECISION RIGHT
                      </span>
                      <span className="font-semibold text-[#0F172A]">
                        {card.decisionRight}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[#94A3B8] font-bold tracking-wider uppercase text-[9px]">
                        REVIEW
                      </span>
                      <span className="font-semibold text-[#0F172A]">
                        {card.review}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Small Disclaimer */}
        <p className="text-[10px] text-[#94A3B8] text-left mt-6 max-w-5xl leading-relaxed">
          Inventory coverage, provider/model details, evaluations, frameworks,
          regions, legal classification and governance workflows vary by
          approved product, deployment and authority.
        </p>
      </div>
    </section>
  );
}
