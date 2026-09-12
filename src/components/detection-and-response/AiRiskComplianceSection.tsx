"use client";

import React from "react";
import Image from "next/image";

export default function AiRiskComplianceSection() {
  return (
    <section className="relative w-full bg-[#071829] py-16 md:py-24 text-white font-sans overflow-hidden">
      {/* Background Graphic / Overlay Image */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <Image
          src="/images/detection/bg3.png"
          alt="Dashboard background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-left">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Featured Image Box */}
          <div className="lg:col-span-5 relative w-full h-[450px] sm:h-[500px] rounded-3xl overflow-hidden border border-[#FFFFFF1A] shadow-2xl">
            <Image
              src="/images/detection/3.png"
              alt="Assistive intelligence workspace"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column: Heading, description, and 4 cards grid */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#E04F2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#E0967D] uppercase">
                09 &bull; AI / RISK / COMPLIANCE RELATIONSHIPS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white tracking-tight leading-[1.15] mb-4">
              Assistive intelligence, separate authorities.
            </h2>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-8">
              Each relationship has a defined boundary; none silently changes
              the state of another system.
            </p>

            {/* 2x2 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {/* AI-Assisted Investigation */}
              <div className="bg-[#123B4C] backdrop-blur-md rounded-2xl p-6 border border-[#FFFFFF1A] shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                    AI-Assisted Investigation
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Bounded, cited and overridable—no autonomous incident
                    determination.
                  </p>
                </div>
              </div>

              {/* Risk Intelligence */}
              <div className="bg-[#123B4C] backdrop-blur-md rounded-2xl p-6 border border-[#FFFFFF1A] shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                    Risk Intelligence
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Findings may inform risk review—no automatic risk score.
                  </p>
                </div>
              </div>

              {/* Compliance */}
              <div className="bg-[#123B4C] backdrop-blur-md rounded-2xl p-6 border border-[#FFFFFF1A] shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                    Compliance
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Detection does not establish compliance status.
                  </p>
                </div>
              </div>

              {/* Trust Center */}
              <div className="bg-[#123B4C] backdrop-blur-md rounded-2xl p-6 border border-[#FFFFFF1A] shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                    Trust Center
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Authoritative public assurance disclosures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
