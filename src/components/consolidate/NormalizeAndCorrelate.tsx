"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function NormalizeAndCorrelate() {
  return (
    <section className="relative w-full bg-[#071829] py-16 md:py-24 text-white font-sans overflow-hidden">
      {/* Background Graphic / Overlay Image if applicable */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <img
          src="/images/security/bg.png"
          alt="Background network mesh"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E0967D]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E0967D] uppercase">
              NORMALIZE AND CORRELATE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white tracking-tight leading-[1.15] mb-4">
            Build context. Preserve identity.
          </h2>

          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            Interpret telemetry into a useful operating view while retaining
            every raw source reference and severity.
          </p>
        </div>

        {/* 3 Cards Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1: Telemetry ingestion */}
          <div className="bg-[#FFFFFF0D] backdrop-blur-sm rounded-2xl p-6 border border-[#FFFFFF1F] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-white mb-3">
                Telemetry ingestion
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Source events &mdash; received time &mdash; schema version
                &mdash; parser / transform &mdash; normalized fields &mdash; raw
                / source reference.
              </p>
            </div>
          </div>

          {/* Card 2: Correlation objects */}
          <div className="bg-[#FFFFFF0D] backdrop-blur-sm rounded-2xl p-6 border border-[#FFFFFF1F] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-white mb-3">
                Correlation objects
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                User / account &mdash; Device / endpoint &mdash; Cloud resource
                &mdash; Application / service &mdash; IP / network &mdash; Email
                / domain.
              </p>
            </div>
          </div>

          {/* Card 3: Signal correlation */}
          <div className="bg-[#FFFFFF0D] backdrop-blur-sm rounded-2xl p-6 border border-[#FFFFFF1F] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-white mb-3">
                Signal correlation
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Cluster ID &mdash; underlying records &mdash; relationship
                reason &mdash; scope &mdash; source severities preserved.
              </p>
            </div>
          </div>
        </div>

        {/* Graphic Showcase Container */}
        <div className="relative rounded-3xl overflow-hidden mb-8">
          <img
            src="/images/security/4.png"
            alt="Normalize and correlate telemetry network and nodes graphic"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </div>

        {/* Bottom Alert/Note Banner */}
        <div className="bg-[#FFFFFF0D  ] backdrop-blur-sm rounded-2xl p-4 border border-[#FFFFFF1F] flex items-center gap-3">
          <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#E0967D] shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#E0967D]" />
          </div>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            Normalization is interpretation, not replacement for source
            evidence.
          </p>
        </div>
      </div>
    </section>
  );
}
