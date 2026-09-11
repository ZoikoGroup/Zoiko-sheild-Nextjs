"use client";

import React from "react";

export default function ManagedDefenseHeroSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Text & CTAs */}
          <div className="text-left">
            {/* Top Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[2px] bg-[#E04F2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
                MANAGED DEFENSE
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-[#0F172A] tracking-tight lg:leading-[1.15] mb-6">
              Add governed security operations{" "}
              <span className="text-[#E04F2E]">
                without giving up decision authority.
              </span>
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-xl mb-8">
              Extend monitoring, detection, investigation and governed response
              through a defined service scope that preserves customer authority,
              evidence and clear exclusions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="px-6 py-3 rounded-xl bg-[#E04F2E] hover:bg-[#c94324] text-white text-xs sm:text-sm font-bold transition-colors shadow-sm"
              >
                Book a Demo
              </button>

              <button
                type="button"
                className="px-6 py-3 rounded-xl hover:bg-[#F1F0EB] border border-[#CBD5E1] text-[#0F172A] text-xs sm:text-sm font-bold transition-colors shadow-sm"
              >
                Visit Trust Center
              </button>
            </div>
          </div>

          {/* Right Column: Hero Graphic Showcase */}
          <div className="">
            <div className="w-full overflow-hidden">
              <img
                src="/images/defence/hero.png"
                alt="Managed defense governed security operations graphic"
                className="w-full object-cover max-h-[560px] rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
