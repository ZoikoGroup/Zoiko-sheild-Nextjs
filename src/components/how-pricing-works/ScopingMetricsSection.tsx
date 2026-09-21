import React from "react";

export const ScopingMetricsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F7F5F0] border-b border-stone-300/80 py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] tracking-wider uppercase">
              — SCOPING METRICS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 font-['Hanken_Grotesk'] tracking-tight leading-tight">
            Strict Scoping Unit Definitions
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 font-['Manrope'] leading-relaxed">
            Protected asset volumes are computed through simple deterministic counts. No nested virtual host multipliers.
          </p>
        </div>

        {/* 3 Connected Cards */}
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
          {/* Card 1 */}
          <div className="w-full lg:flex-1 bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-sm min-h-[190px] flex flex-col justify-start">
            <div className="text-[11px] font-bold font-['JetBrains_Mono'] text-red-500 tracking-wider uppercase mb-2">
              ENDPOINT HOST COUNT
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-['Hanken_Grotesk'] mb-3">
              Active EDR Sensors
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 font-['Manrope'] leading-relaxed">
              Aggregated live sensor profiles detected in CrowdStrike Falcon or Microsoft Defender.
            </p>
          </div>

          {/* Arrow 1 */}
          <div className="hidden lg:flex items-center justify-center shrink-0">
            <span className="text-red-500 font-bold text-xl">→</span>
          </div>

          {/* Card 2 */}
          <div className="w-full lg:flex-1 bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-sm min-h-[190px] flex flex-col justify-start">
            <div className="text-[11px] font-bold font-['JetBrains_Mono'] text-red-500 tracking-wider uppercase mb-2">
              DIRECTORY USER COUNT
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-['Hanken_Grotesk'] mb-3">
              Active Okta/Entra Profiles
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 font-['Manrope'] leading-relaxed">
              Identities matched within active directory tenants. Excludes service accounts and locked external guests.
            </p>
          </div>

          {/* Arrow 2 */}
          <div className="hidden lg:flex items-center justify-center shrink-0">
            <span className="text-red-500 font-bold text-xl">→</span>
          </div>

          {/* Card 3 */}
          <div className="w-full lg:flex-1 bg-[#0c1f33] text-white rounded-2xl p-6 sm:p-7 border border-cyan-900/40 shadow-xl min-h-[190px] flex flex-col justify-start">
            <div className="text-[11px] font-bold font-['JetBrains_Mono'] text-amber-400 tracking-wider uppercase mb-2">
              AGGREGATED CAP CEILING
            </div>
            <h3 className="text-lg font-bold text-white font-['Hanken_Grotesk'] mb-3">
              Non-Overlapping Base
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-300 font-['Manrope'] leading-relaxed">
              Prevents double-billing the same physical asset matched to an identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
