"use client";

import React from "react";

export const SourceIntegrityPanelSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F7F5F0] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <div className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase">
            METADATA LEDGER
          </div>
          <h2 className="text-slate-900 text-3xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Source Integrity &amp; Version Panel
          </h2>
        </div>

        {/* Dark Metadata Ledger Card */}
        <div className="p-6 sm:p-8 bg-sky-950 rounded-2xl flex flex-col gap-6 shadow-xl">
          {/* Top Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <h3 className="text-white text-xl font-extrabold font-['Hanken_Grotesk']">
              NIST Special Publication 800-53 Revision 5
            </h3>
            <div className="px-2.5 py-1 bg-red-400 rounded-sm text-sky-950 text-xs font-bold font-['JetBrains_Mono'] shrink-0">
              Official Government Standard
            </div>
          </div>

          {/* Grid of 6 Metadata Properties */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-1">
              <div className="text-slate-400 text-xs font-normal font-['JetBrains_Mono']">
                AUTHORITY
              </div>
              <div className="text-white text-sm font-normal font-['Manrope']">
                NIST (National Institute of Standards and Technology)
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-slate-400 text-xs font-normal font-['JetBrains_Mono']">
                PUBLICATION DATE
              </div>
              <div className="text-white text-sm font-normal font-['Manrope']">
                September 2020 (Updated December 2020)
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-slate-400 text-xs font-normal font-['JetBrains_Mono']">
                STATUS
              </div>
              <div className="text-white text-sm font-normal font-['Manrope']">
                Active / Current standard
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-slate-400 text-xs font-normal font-['JetBrains_Mono']">
                JURISDICTION
              </div>
              <div className="text-white text-sm font-normal font-['Manrope']">
                United States Federal &amp; Enterprise Global
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-slate-400 text-xs font-normal font-['JetBrains_Mono']">
                LAST VERIFIED
              </div>
              <div className="text-white text-sm font-normal font-['Manrope']">
                Today (Automated 24h checks active)
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-slate-400 text-xs font-normal font-['JetBrains_Mono']">
                RIGHTS &amp; PARAPHRASE NOTE
              </div>
              <div className="text-slate-400 text-xs font-normal font-['Manrope'] leading-relaxed">
                Public domain. Excerpts are reproduced verbatim for educational reference.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
