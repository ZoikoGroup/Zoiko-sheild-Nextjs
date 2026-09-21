"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface GovernanceCtaProps {
  onOpenDemo?: () => void;
}

export const GovernanceCtaSection: React.FC<GovernanceCtaProps> = ({
  onOpenDemo,
}) => {
  return (
    <section className="py-14 md:py-20 bg-[#F5F2EB] border-b border-cyan-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left Panel: Freshness & Version Governance */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-[#0B1B26] font-sans">
                  Freshness &amp; Version Governance
                </h3>
                <p className="text-xs text-slate-500 font-normal">
                  We verify source guidelines automatically every 24 hours.
                </p>
              </div>

              {/* Version Rows */}
              <div className="space-y-2 pt-2">
                <div className="py-2.5 border-b border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-900 font-sans">
                    NIST SP 800-207
                  </span>
                  <span className="px-2 py-0.5 bg-teal-50 text-teal-800 border border-teal-200 rounded font-mono text-[11px] font-bold">
                    Current
                  </span>
                </div>

                <div className="py-2.5 border-b border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-900 font-sans">
                    CIS Controls v8.0
                  </span>
                  <span className="px-2 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 rounded font-mono text-[11px] font-bold">
                    Superseded by v8.1
                  </span>
                </div>

                <div className="py-2.5 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-900 font-sans">
                    OWASP Web Core 2023
                  </span>
                  <span className="px-2 py-0.5 bg-red-50 text-rose-800 border border-red-200 rounded font-mono text-[11px] font-bold">
                    Review Due
                  </span>
                </div>
              </div>
            </div>

            
          </div>

          {/* Right Panel: How Zoiko Shield Supports Implementation (Dark Sky-950) */}
          <div className="bg-[#0A2440] text-white rounded-2xl p-7 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-[white] font-sans">
                How Zoiko Shield Supports Implementation
              </h3>

              <p className="text-xs text-[#9FB8D6] leading-relaxed font-normal">
                Continuous automation maps your real environments to active standard
                compliance evidence.
              </p>

              <p className="text-xs text-[#9FB8D6] leading-relaxed font-normal">
                Ready to transition from static checklists to live
                cryptographically-validated compliance proof? Talk to a Security
                Architect about our continuous validation pipelines.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenDemo}
                className="px-5 py-3 bg-[#A91D22] hover:bg-[#8e171b] text-white text-xs font-bold rounded-lg transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Request live demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenDemo}
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold rounded-lg transition-all cursor-pointer"
              >
                <span>Talk to Architect</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
