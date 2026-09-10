"use client";

import React from "react";

export default function GovernWithProofHeroSection() {
  return (
    <section className="relative w-full min-h-[440px] py-20 md:py-28 flex items-center bg-[#123B4C] justify-center text-white font-sans overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/govern/cta.png"
          alt="AI Governance Control Room Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center px-4">
        {/* Eyebrow Label */}
        <div className="inline-flex items-center justify-center gap-2 mb-6">
          <span className="w-4 h-[2px] bg-[#10B981]" />
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#10B981] uppercase">
            GOVERN WITH PROOF
          </span>
        </div>

        {/* Main Hero Headline (Title Size 40) */}
        <h1 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-white tracking-tight leading-[1.2] max-w-4xl mx-auto mb-10">
          Govern AI risk with evidence, controls and human authority.
        </h1>

        {/* CTA Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          {/* Book a Demo Button */}
          <button
            type="button"
            className="px-6 py-3 rounded-xl bg-[#C44242] hover:bg-[#a83636] text-white text-xs sm:text-sm font-bold transition-all shadow-lg cursor-pointer"
          >
            Book a Demo
          </button>

          {/* Explore AI Security Button */}
          <button
            type="button"
            className="px-6 py-3 rounded-xl bg-[#0F2830]/80 border border-white hover:border-white/40 text-white text-xs sm:text-sm font-bold transition-all backdrop-blur-md cursor-pointer"
          >
            Explore AI Security &amp; Governance
          </button>

          {/* Review Responsible AI Button */}
          <button
            type="button"
            className="px-6 py-3 rounded-xl bg-transparent border border-white hover:border-white/40 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer"
          >
            Review Responsible AI
          </button>
        </div>

        {/* Footer Fine Print Disclaimer */}
        <p className="text-[10px] sm:text-[11px] text-[#94A3B8] font-normal max-w-2xl mx-auto leading-relaxed">
          Governance records do not guarantee AI safety, fairness, accuracy,
          legal compliance, certification or regulator acceptance.
        </p>
      </div>
    </section>
  );
}
