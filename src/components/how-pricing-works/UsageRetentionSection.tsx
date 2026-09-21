import React from "react";

export const UsageRetentionSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f6f4ee] border-b border-stone-200/80 py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Descriptive Context */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] tracking-wider uppercase">
                  — USAGE AND RETENTION
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 font-['Hanken_Grotesk'] tracking-tight leading-tight">
                Evidence Retention &amp; Ingestion
              </h2>
              <p className="mt-3.5 text-sm sm:text-base text-slate-600 font-['Manrope'] leading-relaxed">
                The continuous cryptographic evidence ledger scales relative to retention parameters. Higher retention thresholds (such as HIPAA&apos;s 7-year guideline) require dedicated archive segment isolation.
              </p>
            </div>

            <div className="pt-2">
              <h4 className="text-xs font-bold font-['JetBrains_Mono'] text-slate-900 uppercase tracking-wider mb-2">
                Primary Retention Windows
              </h4>
              <p className="text-xs sm:text-[13px] text-slate-600 font-['Manrope'] leading-relaxed">
                Standard plans include 90 days of live searchable query index. Extended retention (1 year to 7 years) maps to secure storage-optimized nodes to reduce standard platform cost impacts.
              </p>
            </div>
          </div>

          {/* Right Column: Ledger Capacity Optimization Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-sm space-y-5">
              <div className="text-[10px] font-bold font-['JetBrains_Mono'] text-red-500 uppercase tracking-wider">
                LEDGER CAPACITY OPTIMIZATION
              </div>

              {/* Bar 1 */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-['Manrope']">
                  <span className="font-semibold text-slate-800">
                    Standard Ingestion (Real-time Stream)
                  </span>
                  <span className="text-teal-600 font-mono text-[11px] font-bold">
                    Included
                  </span>
                </div>
                <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden border border-stone-200">
                  <div className="bg-[#2c6e49] h-2 rounded-full w-full" />
                </div>
              </div>

              {/* Bar 2 */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-['Manrope']">
                  <span className="font-semibold text-slate-800">
                    90-Day Active Telemetry Index
                  </span>
                  <span className="text-teal-600 font-mono text-[11px] font-bold">
                    Included
                  </span>
                </div>
                <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden border border-stone-200">
                  <div className="bg-[#2c6e49] h-2 rounded-full w-full" />
                </div>
              </div>

              {/* Bar 3 */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-['Manrope']">
                  <span className="font-semibold text-slate-800">
                    Immutable Archive Node (7-Year Hold)
                  </span>
                  <span className="text-slate-400 font-mono text-[11px] font-bold">
                    Quote Required
                  </span>
                </div>
                <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden border border-stone-200">
                  <div className="bg-stone-300 h-2 rounded-full w-[35%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
