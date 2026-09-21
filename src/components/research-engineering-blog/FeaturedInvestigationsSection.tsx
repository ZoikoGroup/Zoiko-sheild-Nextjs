"use client";

import React from "react";
import { ArrowRight, Clock, FileCode2, ShieldAlert } from "lucide-react";

interface FeaturedInvestigationsProps {
  onSelectInvestigation?: (id: string) => void;
}

export const FeaturedInvestigationsSection: React.FC<FeaturedInvestigationsProps> = ({
  onSelectInvestigation,
}) => {
  return (
    <section className="w-full bg-[#F0EDE6] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-3">
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-wider">
              FEATURED INVESTIGATIONS
            </span>
          </div>
          <h2 className="text-slate-900 text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Peer-Reviewed Analysis &amp; Core Systems Work
          </h2>
        </div>

        {/* 2 Big Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div
            onClick={() => onSelectInvestigation && onSelectInvestigation("leakage-profiles")}
            className="p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 hover:outline-cyan-950/25 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-6 cursor-pointer group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-gray-200 text-teal-700 text-xs font-bold font-['JetBrains_Mono'] rounded-[100px]">
                  SECURITY RESEARCH
                </span>
                <span className="text-slate-400 text-xs font-normal font-['JetBrains_Mono']">
                  MARCH 08, 2026
                </span>
              </div>

              <h3 className="text-slate-900 text-xl sm:text-2xl font-extrabold font-['Hanken_Grotesk'] leading-snug group-hover:text-red-500 transition-colors">
                Analyzing Memory Leakage Profiles in Kernel-Space Endpoint Telemetry Agents
              </h3>

              <p className="text-gray-500 text-sm font-normal font-['Manrope'] leading-relaxed">
                An exhaustive study on non-paged pool allocations during high-frequency network interrupts, modeling the structural limits of real-time event aggregation under heavy I/O boundaries.
              </p>

              <div className="p-3 bg-stone-100 rounded-lg space-y-1 text-xs font-normal font-['JetBrains_Mono'] text-slate-500 border border-stone-200/80">
                <div>ARTIFACT: github.com/zoiko/kernel-profile-v2</div>
                <div>INTEGRITY: SHA-256 [e2a4f6...] · Peer-Reviewed</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-stone-100">
              <div className="flex items-center gap-2">
                <div className="size-6 bg-red-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                  
                </div>
                <span className="text-slate-900 text-xs font-semibold font-['Manrope']">
                  Systems Engineering Group
                </span>
              </div>
              <span className="text-gray-500 text-xs font-normal font-['Manrope']">
                14 min read
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => onSelectInvestigation && onSelectInvestigation("posture-validation")}
            className="p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 hover:outline-cyan-950/25 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-6 cursor-pointer group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-red-50 text-rose-800 text-xs font-bold font-['JetBrains_Mono'] rounded-[100px]">
                  THREAT ANALYSIS
                </span>
                <span className="text-slate-400 text-xs font-normal font-['JetBrains_Mono']">
                  FEB 24, 2026
                </span>
              </div>

              <h3 className="text-slate-900 text-xl sm:text-2xl font-extrabold font-['Hanken_Grotesk'] leading-snug group-hover:text-red-500 transition-colors">
                Vulnerability Pattern Study: Evading Traditional POST Posture Validation Lines
              </h3>

              <p className="text-gray-500 text-sm font-normal font-['Manrope'] leading-relaxed">
                Documenting coordinated bypass strategies observed in legacy directory sync systems, demonstrating how invalid session scopes evade unvalidated endpoint health reporting.
              </p>

              <div className="p-3 bg-stone-100 rounded-lg space-y-1 text-xs font-normal font-['JetBrains_Mono'] text-slate-500 border border-stone-200/80">
                <div>ARTIFACT: CVE-2026-9042 Mitigation Blueprint</div>
                <div>STATUS: Fully Disclosed &amp; Patched</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-stone-100">
              <div className="flex items-center gap-2">
                <div className="size-6 bg-slate-400 rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                  
                </div>
                <span className="text-slate-900 text-xs font-semibold font-['Manrope']">
                  Threat Intelligence Team
                </span>
              </div>
              <span className="text-gray-500 text-xs font-normal font-['Manrope']">
                18 min read
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
