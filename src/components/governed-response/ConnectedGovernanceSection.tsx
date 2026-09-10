"use client";

import React from "react";

export default function ConnectedGovernanceSection() {
  const aiDecisionRightsTags = [
    "Advisory",
    "Review required",
    "Approval required",
    "Execution permitted",
    "Prohibited",
  ];

  const operationalHandoffsTags = [
    "Case management",
    "Detection & response",
    "Security analytics",
    "Authority boundary",
  ];

  const integrationConcernsTags = [
    "Read / write permission",
    "Action mapping",
    "Credentials",
    "Provider acceptance",
  ];

  return (
    <section className="w-full bg-[#F0EDE6] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C44242]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
              CONNECTED GOVERNANCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight mb-4 leading-[1.15]">
            Handoffs without authority leakage.
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            AI, cases, analytics and integrations contribute context and
            capability without silently inheriting decision rights.
          </p>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: AI decision rights */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E2E8F0] shadow-sm flex flex-col">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-6">
                AI decision rights
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {aiDecisionRightsTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-[#E4F0EC] text-[10px] font-mono font-medium text-[#123B4C] tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Operational handoffs */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E2E8F0] shadow-sm flex flex-col">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-6">
                Operational handoffs
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {operationalHandoffsTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-[#E4F0EC] text-[10px] font-mono font-medium text-[#123B4C] tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Integration concerns */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E2E8F0] shadow-sm flex flex-col">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-6">
                Integration concerns
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {integrationConcernsTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-[#E4F0EC] text-[10px] font-mono font-medium text-[#123B4C] tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
