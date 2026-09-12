"use client";

import React from "react";

export default function GetStartedSection() {
  return (
    <section className="relative w-full bg-[#071829] py-20 md:py-28 text-white font-sans text-center overflow-hidden">
      {/* Radial Gradient Background Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top, #E0402F33 0%, #E0402F00 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#93A6B8] uppercase">
              GET STARTED
            </span>
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[34px] font-bold text-white tracking-tight leading-[1.15] mb-6">
            Start from your operating chain, not a product list.
          </h2>

          <p className="text-sm sm:text-base text-[#93A6B8] leading-relaxed max-w-xl mx-auto">
            Tell us your entity type and where your pressure actually sits
            &mdash; dependencies, access, evidence, incidents or assurance
            &mdash; and we&apos;ll map it to the right routes and be direct
            about where our authority ends.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#demo"
            className="px-6 py-3.5 rounded-xl bg-[#E04F2E] hover:bg-[#D04323] transition-colors text-xs font-bold text-white shadow-sm"
          >
            Book a Demo
          </a>
          <a
            href="#trust-center"
            className="px-6 py-3.5 rounded-xl hover:bg-[#143454] border border-[#1E3A5F] transition-colors text-xs font-bold text-white shadow-sm"
          >
            Visit Trust Center
          </a>
        </div>
      </div>
    </section>
  );
}
