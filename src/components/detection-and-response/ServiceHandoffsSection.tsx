"use client";

import React from "react";

export default function ServiceHandoffsSection() {
  return (
    <section className="relative w-full bg-[#F0EDE6] py-16 md:py-24 text-[#071829] font-sans overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-left">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, description, and notice badge */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#E04F2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
                08 &bull; SERVICE HANDOFFS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#071829] tracking-tight leading-[1.15] mb-4">
              Clear lines between platform and service.
            </h2>

            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
              The platform destination does not claim staffed 24x7 response,
              retainer coverage or emergency activation unless a separate
              service contract exists.
            </p>

            {/* Notice / Authority Badge */}
            <div className="bg-[#F7E8E5] rounded-2xl p-4 border border-[#E2E8F0]">
              <p className="text-xs text-[#071829] font-medium leading-relaxed">
                Service scope and activation authority remain explicit.
              </p>
            </div>
          </div>

          {/* Right Column: Two Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {/* Conditional Card */}
            <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase block mb-3">
                  CONDITIONAL
                </span>
                <h3 className="text-lg font-bold text-[#071829] mb-2">
                  Incident Readiness
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Preparation and response-governance relationship, available
                  when readiness gates are met.
                </p>
              </div>
            </div>

            {/* Independent Service Card */}
            <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase block mb-3">
                  INDEPENDENT SERVICE
                </span>
                <h3 className="text-lg font-bold text-[#071829] mb-2">
                  Managed Defense
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  A separate security-operations service with its own service
                  contract, coverage and operating model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
