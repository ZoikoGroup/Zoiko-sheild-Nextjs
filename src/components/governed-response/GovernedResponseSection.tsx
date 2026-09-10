"use client";

import React from "react";

export default function GovernedResponseSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#C44242]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
                AUTHORITY FIRST · GOVERNED BY DESIGN
              </span>
            </div>

            {/* Title (Size 40) */}
            <h2 className="text-3xl sm:text-4xl md:text-[60px] font-bold text-[#0F172A] tracking-tight mb-4 leading-[1.15]">
              Governed Response
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-8 max-w-xl">
              ZoikoShield governs consequential response actions through
              explicit authority, scope, approval, evidence, signing and
              attestation, result history, and rollback or recovery boundaries.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="px-6 py-3 rounded-xl bg-[#C44242] hover:bg-[#a83636] text-white text-xs sm:text-sm font-bold transition-all shadow-md cursor-pointer"
              >
                Book a Demo
              </button>

              <button
                type="button"
                className="px-6 py-3 rounded-xl border border-[#0F172A]/30 bg-transparent hover:bg-[#0F172A]/5 text-[#0F172A] text-xs sm:text-sm font-bold transition-all cursor-pointer"
              >
                Detection &amp; Response
              </button>
            </div>
          </div>

          {/* Right Column: Rounded Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
              <img
                src="/images/response/hero.png"
                alt="Governed Response Interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
