"use client";

import React from "react";

export default function ApprovalSection() {
  const decisionStructureTags = [
    "Approver eligibility",
    "Separation of duties",
    "Single approval",
    "Multiple approval",
    "Decision choices",
  ];

  const decisionIntegrityTags = [
    "Conditions",
    "Rationale",
    "Identity assurance",
    "Delegation",
    "Expiry",
    "Revalidation",
    "History",
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#0B2732C7] text-white font-sans overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/response/bg.png"
          alt="Control Room Background"
          className="w-full h-full opacity-30 object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto text-left px-4">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C44242]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E0967D] uppercase">
              APPROVAL
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white tracking-tight mb-4 leading-[1.15]">
            Eligible authority, under current conditions.
          </h2>

          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-3xl">
            Approval is a governed decision with expiry, revalidation and an
            enduring rationale - not a button click.
          </p>
        </div>

        {/* Outer Cards Container */}
        <div className="space-y-6">
          {/* Card 1: Decision structure */}
          <div className="bg-[#123B4C] backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-6">
              Decision structure
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {decisionStructureTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-[#FFFFFF0D] border border-[#FFFFFF24] text-[11px] font-mono font-normal text-white tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Decision integrity */}
          <div className="bg-[#123B4C] backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-6">
              Decision integrity
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {decisionIntegrityTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-[#FFFFFF0D] border border-[#FFFFFF24] text-[11px] font-mono font-normal text-white tracking-wide"
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
