"use client";

import React from "react";

export default function CompareStartingPathsSection() {
  return (
    <section className="relative w-full bg-[#0B2732C7] py-16 md:py-24 text-white font-sans overflow-hidden">
      {/* Background Graphic / Overlay Image */}
      <div className="absolute inset-0 z-0 bg-[#0B2732C7] pointer-events-none">
        <img
          src="/images/assurance/4.png"
          alt="Background network mesh"
          className="w-full h-full opacity-20 object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E0967D]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E0967D] uppercase">
              COMPARE STARTING PATHS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white tracking-tight leading-[1.15] mb-4">
            Two independent ways to begin.
          </h2>

          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            Equal peer paths with distinct service identities. Neither is
            selected by default, and neither is a prerequisite for the other.
          </p>
        </div>

        {/* Two-Column Grid: Continuous Assurance & Managed Defense */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Left Card: Continuous Assurance */}
          <div className="bg-[#123B4C] backdrop-blur-sm rounded-3xl p-8 border border-[#FFFFFF1F] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#E0967D] uppercase block mb-3">
                ASSURANCE-LED ENTRY OFFER
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                Continuous Assurance
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                Governed evidence, control context, attributable review and
                accountable follow-through.
              </p>
            </div>
            <div className="text-xs font-mono text-[#94A3B8]">
              Independent path &mdash; Scope-led &mdash; Human authority
            </div>
          </div>

          {/* Right Card: Managed Defense */}
          <div className="bg-[#123B4C] backdrop-blur-sm rounded-3xl p-8 border border-[#FFFFFF1F] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#E0967D] uppercase block mb-3">
                SECURITY-LED ENTRY OFFER
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                Managed Defense
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                Security operations support focused on defense, detection and
                response.
              </p>
            </div>
            <div className="text-xs font-mono text-[#94A3B8]">
              Independent path &mdash; Security-led &mdash; Separate scope
            </div>
          </div>
        </div>

        {/* Bottom Button / Action Link */}
        <div>
          <button className="px-6 py-3 rounded-full bg-[#123B4C] backdrop-blur-sm border border-[#FFFFFF1F] text-xs font-mono text-white hover:bg-[#FFFFFF1A] transition-colors shadow-sm">
            Compare starting paths
          </button>
        </div>
      </div>
    </section>
  );
}
