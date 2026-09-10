"use client";

import React from "react";

export default function ActionContractSection() {
  const identityTags = [
    "Action ID",
    "Display name",
    "Purpose",
    "Target types",
    "Parameters",
    "Required permissions",
  ];

  const governanceTags = [
    "Authority requirements",
    "Prerequisites",
    "Side effects",
    "Reversibility",
    "Failure modes",
    "Availability",
  ];

  const contractBadges = ["ACT-0248", "v3.8", "SOURCE VERIFIED", "AVAILABLE"];

  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C44242]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
              ACTION CONTRACT
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight mb-4 leading-[1.15]">
            Know the blast radius before approval.
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Every response action exposes its target, scope, prerequisites,
            permissions, side effects and operational boundaries.
          </p>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Identity & scope */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E2E8F0] shadow-sm flex flex-col">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-6">
                Identity &amp; scope
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {identityTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-[#E6F4F1] text-[10px] font-mono font-medium text-[#10B981] tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Governance & behavior */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E2E8F0] shadow-sm flex flex-col">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-6">
                Governance &amp; behavior
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {governanceTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-[#E6F4F1] text-[10px] font-mono font-medium text-[#10B981] tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Contract preview (Dark Card) */}
          <div className="bg-[#123B4C] rounded-3xl p-6 md:p-8 text-white flex flex-col min-h-[260px] shadow-xl">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">
                Contract preview
              </h3>

              <p className="text-xs text-[#94A3B8] leading-relaxed mb-6 font-normal">
                A versioned, inspectable definition travels with the request
                from recommendation through result history.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {contractBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 rounded-full bg-white/10 text-[10px] font-mono font-bold tracking-wider text-white uppercase"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
