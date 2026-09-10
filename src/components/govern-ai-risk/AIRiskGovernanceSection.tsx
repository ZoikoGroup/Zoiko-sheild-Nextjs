"use client";

import React from "react";

export default function AIRiskGovernanceSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#111827] font-sans overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Eyebrow Header */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[2px] bg-[#C44242]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#C44242] uppercase">
                AI RISK GOVERNANCE
              </span>
            </div>

            {/* Main Title - leading updated to leading-[1.35] */}
            <h1 className="text-3xl sm:text-4xl md:text-[54px] font-extrabold text-[#0F172A] lg:leading-[1] tracking-tight mb-6">
              Govern AI risk with evidence, controls and human authority.
            </h1>

            {/* Paragraph Description */}
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-8 max-w-xl font-normal">
              Build an inspectable operating model for AI inventory, controls,
              evaluations, transparency, change and oversight — while keeping
              limitations, decision rights and accountable people visible.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="px-6 py-3 rounded-xl bg-[#C44242] hover:bg-[#a83535] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
              >
                Book a Demo
              </button>

              <button
                type="button"
                className="px-6 py-3 rounded-xl bg-white border border-[#0F172A]/20 bg-transparent hover:bg-[#0F172A]/5 text-[#0F172A] text-xs sm:text-sm font-bold transition-all cursor-pointer"
              >
                Explore AI Security &amp; Governance
              </button>
            </div>
          </div>

          {/* Right Card Column */}
          <div className="lg:col-span-6 flex justify-start lg:justify-center">
            <div className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-[#E2E8F0]">
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] tracking-tight">
                    AI system register
                  </h3>
                  <p className="text-[11px] font-mono tracking-wider text-[#64748B] uppercase mt-0.5">
                    SYS-041 · CLAIMS TRIAGE
                  </p>
                </div>

                {/* Status Badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F5F0] text-[10px] font-mono font-bold tracking-wider text-[#0F172A] uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                  REVIEW REQUIRED
                </span>
              </div>

              {/* Card Media Preview */}
              <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden mb-4">
                <img
                  src="/images/govern/hero.png"
                  alt="AI System Visualization Network"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Grid Metadata Footer Cards */}
              <div className="grid grid-cols-3 gap-3">
                {/* Item 1 */}
                <div className="bg-[#F0EDE6] rounded-xl p-3 text-left">
                  <span className="block text-[9px] font-mono font-bold tracking-widest text-[#64748B] uppercase mb-1">
                    OWNER
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#0F172A]">
                    Risk Council
                  </span>
                </div>

                {/* Item 2 */}
                <div className="bg-[#F0EDE6] rounded-xl p-3 text-left">
                  <span className="block text-[9px] font-mono font-bold tracking-widest text-[#64748B] uppercase mb-1">
                    EVIDENCE
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#0F172A]">
                    12 records
                  </span>
                </div>

                {/* Item 3 */}
                <div className="bg-[#F0EDE6] rounded-xl p-3 text-left">
                  <span className="block text-[9px] font-mono font-bold tracking-widest text-[#64748B] uppercase mb-1">
                    NEXT REVIEW
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#0F172A]">
                    18 Sep 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
