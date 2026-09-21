"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface CuratedStudyRunsProps {
  onSelectSeries?: (title: string) => void;
}

export const CuratedStudyRunsSection: React.FC<CuratedStudyRunsProps> = ({
  onSelectSeries,
}) => {
  const seriesList = [
    {
      chapters: "04 CHAPTERS",
      title: "Endpoint State Hardening",
      description:
        "A comprehensive sequence detailing hardware isolation strategies, local kernel monitoring traps, and credential storage security parameters.",
    },
    {
      chapters: "06 CHAPTERS",
      title: "Identity Verification Protocols",
      description:
        "Examining zero-knowledge identity assertions, cross-tenant security token exchanges, and unmanaged device mapping rules.",
    },
    {
      chapters: "03 CHAPTERS",
      title: "Defensible Evidence Models",
      description:
        "Technical review of immutable storage schemes, chain-of-custody logging standards, and cryptographic validation structures.",
    },
  ];

  return (
    <section className="w-full bg-[#F0EDE6] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-3">
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-wider">
              CURATED STUDY RUNS
            </span>
          </div>
          <h2 className="text-slate-900 text-3xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Deep-Dive Systems Curations
          </h2>
        </div>

        {/* 3 Series Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {seriesList.map((series, idx) => (
            <div
              key={idx}
              onClick={() => onSelectSeries && onSelectSeries(series.title)}
              className="p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 hover:outline-cyan-950/25 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-4 cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="text-slate-400 text-xs font-bold font-['JetBrains_Mono']">
                  {series.chapters}
                </div>
                <h3 className="text-slate-900 text-lg font-extrabold font-['Hanken_Grotesk'] leading-snug group-hover:text-red-500 transition-colors">
                  {series.title}
                </h3>
                <p className="text-gray-500 text-xs font-normal font-['Manrope'] leading-relaxed">
                  {series.description}
                </p>
              </div>

              <div className="inline-flex items-center gap-1 text-red-500 text-xs font-bold font-['Manrope'] pt-2">
                <span>Start Series</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
