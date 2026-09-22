"use client";

import React from "react";

export const RegistryDataSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F0EDE6] border-b border-cyan-950/10 py-14 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Left Column */}
        <div className="w-full lg:max-w-md space-y-3">
          <div className="inline-flex items-center gap-3">
            <div className="w-6 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-wider">
              REGISTRY DATA
            </span>
          </div>

          <h2 className="text-slate-900 text-3xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Verified Corporate Profile
          </h2>

          <p className="text-gray-500 text-sm font-normal font-['Manrope'] leading-relaxed">
            This registry-driven ledger verifies Zoiko Tech&apos;s active corporate structure. Inactive, unverified, or non-vetted fields are programmatically hidden to meet strict compliance transparency rules.
          </p>
        </div>

        {/* Right Column: 6 Cards in 2x3 Grid */}
        <div className="flex-1 w-full space-y-3">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-cyan-950/10 flex flex-col justify-start items-start gap-1 shadow-xs">
              <div className="text-gray-500 text-xs font-normal font-['JetBrains_Mono'] uppercase">
                Legal Entity Name
              </div>
              <div className="text-slate-900 text-base font-bold font-['Manrope']">
                Zoiko Tech Inc.
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-cyan-950/10 flex flex-col justify-start items-start gap-1 shadow-xs">
              <div className="text-gray-500 text-xs font-normal font-['JetBrains_Mono'] uppercase">
                Core Product
              </div>
              <div className="text-slate-900 text-base font-bold font-['Manrope']">
                Zoiko Shield
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-cyan-950/10 flex flex-col justify-start items-start gap-1 shadow-xs">
              <div className="text-gray-500 text-xs font-normal font-['JetBrains_Mono'] uppercase">
                Founded
              </div>
              <div className="text-slate-900 text-base font-bold font-['Manrope']">
                2026
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-cyan-950/10 flex flex-col justify-start items-start gap-1 shadow-xs">
              <div className="text-gray-500 text-xs font-normal font-['JetBrains_Mono'] uppercase">
                Global Headquarters
              </div>
              <div className="text-slate-900 text-sm font-bold font-['Manrope']">
                Sacramento, California, US
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-cyan-950/10 flex flex-col justify-start items-start gap-1 shadow-xs">
              <div className="text-gray-500 text-xs font-normal font-['JetBrains_Mono'] uppercase">
                European Headquarters
              </div>
              <div className="text-slate-900 text-sm font-bold font-['Manrope']">
                London, United Kingdom
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-cyan-950/10 flex flex-col justify-start items-start gap-1 shadow-xs">
              <div className="text-gray-500 text-xs font-normal font-['JetBrains_Mono'] uppercase">
                Employee Count &amp; Funding
              </div>
              <div className="text-amber-700 text-xs font-bold font-['JetBrains_Mono']">
                [🔒 Hidden: Registry Vetting Pending]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
