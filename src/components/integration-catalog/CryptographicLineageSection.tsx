"use client";

import React from "react";
import { Check } from "lucide-react";

export const CryptographicLineageSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Ingestion Event",
      desc: "UTC timestamped, raw state archived with provider signature.",
    },
    {
      num: "02",
      title: "ASV Normalization",
      desc: "Unifying telemetry into verifiable schemas for audits.",
    },
    {
      num: "03",
      title: "Evidence Mapping",
      desc: "Mapped automatically to SOC 2, ISO, HIPAA & NIST policies.",
    },
    {
      num: "04",
      title: "Ledger Commitment",
      desc: "Hashed and written to immutable cryptographic proof chains.",
    },
  ];

  return (
    <section className="w-full bg-[#F0EDE6] py-16 lg:py-20 border-b border-zoiko-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-red-500" />
            <span className="text-sm font-medium uppercase tracking-widest text-red-500 font-mono">
              Cryptographic Lineage
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            From raw event telemetry to boardroom-ready proof.
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-3xl leading-relaxed font-sans">
            Unlike simple screenshots or logs, Zoiko Shield preserves immutable custody chains that prove compliance status mathematically at the exact millisecond of inquiry.
          </p>
        </div>

        {/* 4 Process Step Cards in Cyan 950 Container */}
        <div className="p-8 bg-cyan-950 rounded-3xl shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 bg-white/5 rounded-xl border border-white/10 space-y-3 flex flex-col justify-between hover:border-white/20 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-emerald-200">
                  {step.num}
                </span>
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-extrabold text-white font-sans">
                  {step.title}
                </h3>
                <p className="text-xs text-white/70 font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CryptographicLineageSection;
