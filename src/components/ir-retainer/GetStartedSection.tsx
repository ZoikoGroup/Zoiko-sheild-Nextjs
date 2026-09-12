"use client";

import React from "react";

export default function GetStartedSection() {
  return (
    <section className="relative w-full bg-[#071829] py-20 md:py-32 text-white font-sans text-center overflow-hidden">
      {/* Radial Gradient overlay from top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[450px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top center, #E0402F33 0%, #E0402F00 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 flex flex-col items-center">
        {/* Top Tag */}
        <div className="flex items-center gap-2 mb-4 justify-center">
          <span className="w-4 h-[2px] bg-[#E04F2E]" />
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#93A6B8] uppercase">
            GET STARTED
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-[24px] md:text-[24px] font-bold text-white tracking-tight leading-[1.15] mb-6 max-w-2xl">
          Find out what you&apos;d actually have, before you need it.
        </h2>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-xl mb-10">
          We&apos;ll go through the readiness baseline, the activation path,
          which specialist capabilities would need separate entitlement, and
          which decisions stay with your counsel and your executives &mdash;
          plainly, including where the answer is &ldquo;not yet.&rdquo;
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            className="px-6 py-3 rounded-xl bg-[#E04F2E] hover:bg-[#c94324] text-white text-xs sm:text-sm font-bold transition-colors shadow-sm"
          >
            Book a Demo
          </button>

          <button
            type="button"
            className="px-6 py-3 rounded-xl hover:bg-[#143454] border border-[#1E3A5F] text-white text-xs sm:text-sm font-bold transition-colors shadow-sm"
          >
            Review Incident Readiness
          </button>

          <button
            type="button"
            className="px-6 py-3 rounded-xl hover:bg-[#143454] border border-[#1E3A5F] text-white text-xs sm:text-sm font-bold transition-colors shadow-sm"
          >
            Visit Trust Center
          </button>
        </div>
      </div>
    </section>
  );
}
