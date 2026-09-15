"use client";

import React from "react";
import Image from "next/image";

export default function GovernedResponseSection() {
  return (
    <section className="relative w-full bg-[#071829] py-16 md:py-24 text-white font-sans overflow-hidden">
      {/* Background Graphic / Overlay Image */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <Image
          src="/images/detection/bg2.png"
          alt="Governed response dashboard background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-left">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Heading, description, and notice box */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#E04F2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
                06 &bull; GOVERNED RESPONSE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white tracking-tight leading-[1.15] mb-4">
              Automation is not authority.
            </h2>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-8">
              Every consequential action inherits the decision-right model,
              including approval, execution scope, rollback and attestation.
            </p>

            {/* Notice / Warning Box */}
            <div className="w-full bg-[#C4424245] backdrop-blur-md rounded-2xl p-5 border border-[#C4424266] flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed">
                Rollback and failure handling are defined before execution.
                Governed Response detail is available conditionally.
              </p>
            </div>
          </div>

          {/* Right Column: Response Levels Stack */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {/* R0 - Advisory */}
            <div className="bg-[#123B4C] backdrop-blur-md rounded-2xl px-6 py-4 border border-[#FFFFFF1A] shadow-sm flex items-center justify-between">
              <span className="font-mono text-xs sm:text-sm text-white font-bold">
                R0 &bull; Advisory
              </span>
              <span className="font-mono text-xs text-[#94A3B8]">
                Recommend only
              </span>
            </div>

            {/* R1 - Review-required */}
            <div className="bg-[#123B4C] backdrop-blur-md rounded-2xl px-6 py-4 border border-[#FFFFFF1A] shadow-sm flex items-center justify-between">
              <span className="font-mono text-xs sm:text-sm text-white font-bold">
                R1 &bull; Review-required
              </span>
              <span className="font-mono text-xs text-[#94A3B8]">
                Prepare bounded action
              </span>
            </div>

            {/* R2 - Approval-required (Highlighted / Active) */}
            <div className="bg-[#C4424280] backdrop-blur-md rounded-2xl px-6 py-4 border border-[#E04F2E]/60 shadow-sm flex items-center justify-between">
              <span className="font-mono text-xs sm:text-sm text-white font-bold">
                R2 &bull; Approval-required
              </span>
              <span className="font-mono text-xs text-[#E2E8F0]">
                Named authority must approve
              </span>
            </div>

            {/* R3 - Pre-authorized delegated */}
            <div className="bg-[#123B4C] backdrop-blur-md rounded-2xl px-6 py-4 border border-[#FFFFFF1A] shadow-sm flex items-center justify-between">
              <span className="font-mono text-xs sm:text-sm text-white font-bold">
                R3 &bull; Pre-authorized delegated
              </span>
              <span className="font-mono text-xs text-[#94A3B8]">
                Narrow reversible class
              </span>
            </div>

            {/* R4 - Emergency overlay */}
            <div className="bg-[#123B4C] backdrop-blur-md rounded-2xl px-6 py-4 border border-[#FFFFFF1A] shadow-sm flex items-center justify-between">
              <span className="font-mono text-xs sm:text-sm text-white font-bold">
                R4 &bull; Emergency overlay
              </span>
              <span className="font-mono text-xs text-[#94A3B8]">
                Only if explicit governance exists
              </span>
            </div>

            {/* Prohibited */}
            <div className="bg-[#123B4C] backdrop-blur-md rounded-2xl px-6 py-4 border border-[#FFFFFF1A] shadow-sm flex items-center justify-between">
              <span className="font-mono text-xs sm:text-sm text-white font-bold">
                Prohibited
              </span>
              <span className="font-mono text-xs text-[#94A3B8]">
                Not allowed
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Step Flow Indicators (01 to 09) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3 pt-6 border-t border-[#FFFFFF14]">
          <div className="bg-[#FFFFFF0A] rounded-xl p-4 border border-[#FFFFFF0D]">
            <span className="font-mono text-[10px] text-[#E0967D] font-bold block mb-1">
              01
            </span>
            <span className="text-xs font-bold text-white">Definition</span>
          </div>
          <div className="bg-[#FFFFFF0A] rounded-xl p-4 border border-[#FFFFFF0D]">
            <span className="font-mono text-[10px] text-[#E0967D] font-bold block mb-1">
              02
            </span>
            <span className="text-xs font-bold text-white">Preconditions</span>
          </div>
          <div className="bg-[#FFFFFF0A] rounded-xl p-4 border border-[#FFFFFF0D]">
            <span className="font-mono text-[10px] text-[#E0967D] font-bold block mb-1">
              03
            </span>
            <span className="text-xs font-bold text-white">Preview</span>
          </div>
          <div className="bg-[#FFFFFF0A] rounded-xl p-4 border border-[#FFFFFF0D]">
            <span className="font-mono text-[10px] text-[#E0967D] font-bold block mb-1">
              04
            </span>
            <span className="text-xs font-bold text-white">Authorization</span>
          </div>
          <div className="bg-[#FFFFFF0A] rounded-xl p-4 border border-[#FFFFFF0D]">
            <span className="font-mono text-[10px] text-[#E0967D] font-bold block mb-1">
              05
            </span>
            <span className="text-xs font-bold text-white">Execution</span>
          </div>
          <div className="bg-[#FFFFFF0A] rounded-xl p-4 border border-[#FFFFFF0D]">
            <span className="font-mono text-[10px] text-[#E0967D] font-bold block mb-1">
              06
            </span>
            <span className="text-xs font-bold text-white">Result</span>
          </div>
          <div className="bg-[#FFFFFF0A] rounded-xl p-4 border border-[#FFFFFF0D]">
            <span className="font-mono text-[10px] text-[#E0967D] font-bold block mb-1">
              07
            </span>
            <span className="text-xs font-bold text-white">Receipt</span>
          </div>
          <div className="bg-[#FFFFFF0A] rounded-xl p-4 border border-[#FFFFFF0D]">
            <span className="font-mono text-[10px] text-[#E0967D] font-bold block mb-1">
              08
            </span>
            <span className="text-xs font-bold text-white">Validation</span>
          </div>
          <div className="bg-[#FFFFFF0A] rounded-xl p-4 border border-[#FFFFFF0D]">
            <span className="font-mono text-[10px] text-[#E0967D] font-bold block mb-1">
              09
            </span>
            <span className="text-xs font-bold text-white">Follow-up</span>
          </div>
        </div>
      </div>
    </section>
  );
}
