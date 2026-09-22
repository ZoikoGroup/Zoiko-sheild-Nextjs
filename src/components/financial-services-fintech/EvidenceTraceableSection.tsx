"use client";

import React from "react";
import Image from "next/image";

const PILLS = [
  "Cryptographic hashing",
  "Chain of custody",
  "One-click export",
];

export const EvidenceTraceableSection: React.FC = () => {
  return (
    <section className="w-full bg-white border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column */}
        <div className="flex-1 max-w-[600px] flex flex-col justify-start items-start gap-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3">
            <div className="w-6 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest">
              EVIDENCE, TRACEABLE TO THE SOURCE
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Payment-security evidence without audit-time scrambling.
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 text-base font-normal font-['Manrope'] leading-relaxed">
            Cryptographically verified, source-linked artifacts — period-scoped, exportable with manifest and caveats intact.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            {PILLS.map((pill) => (
              <div
                key={pill}
                className="px-4 py-2 bg-stone-100 rounded-full outline outline-1 outline-offset-[-1px] outline-cyan-950/10 text-slate-900 text-xs font-semibold font-['Manrope'] shadow-2xs"
              >
                {pill}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column Image Graphic */}
        <div className="w-full lg:w-[560px] shrink-0 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[560px] aspect-[601/355] rounded-2xl overflow-hidden shadow-xl border border-cyan-950/10 bg-slate-900 group">
            <Image
              src="/images/financial-services-fintech/image 97 (1).png"
              alt="Compliance and financial risk team reviewing evidence audit ledger"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
