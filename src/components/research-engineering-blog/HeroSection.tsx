"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Info } from "lucide-react";

interface HeroSectionProps {
  onExplore?: () => void;
  onSubscribe?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplore,
  onSubscribe,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-stone-100 border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      {/* Soft atmospheric gradient radial glows matching the Figma design */}
      <div
        className="pointer-events-none absolute -top-10 left-1/4 h-[450px] w-[500px] rounded-full bg-red-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-teal-600/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-10 right-0 h-[450px] w-[450px] rounded-full bg-cyan-950/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
          {/* Left Column */}
          <div className="flex-1 max-w-[680px] flex flex-col justify-start items-start gap-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <div className="w-8 h-0.5 bg-red-500" />
              <span className="text-red-500 text-sm font-bold font-['JetBrains_Mono'] uppercase tracking-widest">
                RESEARCH &amp; ENGINEERING
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Hanken_Grotesk'] leading-[1.15] tracking-tight">
              Technical work you can <br className="hidden sm:inline" />
              inspect, challenge, and use.
            </h1>

            {/* Subtitle */}
            <p className="text-gray-500 text-base font-medium font-['Manrope'] leading-6 max-w-xl">
              Rigorous system architecture investigations, coordinated
              vulnerability disclosures, threat intelligence reports, and
              engineering post-mortems from the Zoiko Shield Core Security group.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onExplore}
                className="px-7 py-4 bg-red-500 hover:bg-red-600 text-white text-base font-bold font-['Manrope'] rounded-[10px] shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
              >
                Explore Research &amp; Engineering
              </button>

              <button
                onClick={onSubscribe}
                className="px-6 py-4 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-sky-950 hover:bg-black/5 text-sky-950 text-base font-bold font-['Manrope'] transition-colors cursor-pointer"
              >
                Subscribe to Updates
              </button>

              <Link
                href="/guides-framework"
                className="text-red-500 hover:text-red-600 text-sm font-bold font-['Manrope'] inline-flex items-center gap-1.5 transition-colors group pl-2"
              >
                <span>Guides &amp; Frameworks</span>
                <span className="text-base leading-none group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>

            {/* Publication Policy note */}
            <div className="pt-2 inline-flex items-center gap-2 text-teal-700 text-xs font-medium font-['JetBrains_Mono']">
              <Info className="w-3.5 h-3.5 text-teal-700 shrink-0" />
              <span>
                Publication policy: All methods, code artifacts, and correction logs are fully disclosed.
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="w-full lg:w-[480px] shrink-0 flex justify-center lg:justify-end">
            <div className="w-full max-w-[480px] p-6 bg-sky-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 shadow-2xl flex flex-col justify-start items-start gap-5 overflow-hidden group">
              {/* Card Top Bar */}
              <div className="w-full flex justify-between items-center text-xs font-['JetBrains_Mono']">
                <span className="text-slate-400 font-normal">
                  ZOIKO MODEL: CORRELATION-V4
                </span>
                <span className="px-2 py-0.5 bg-cyan-950 text-white text-[10px] font-normal font-['JetBrains_Mono'] rounded-sm border border-cyan-800/40">
                  ACTIVE SCHEMA
                </span>
              </div>

              {/* Graphic / Abstract Image */}
              <div className="relative w-full h-48 rounded-lg overflow-hidden bg-slate-950 border border-white/5">
                <Image
                  src="/images/research-engineering-blog/AbstractImage.png"
                  alt="Fig 1.1: Cryptographic state reconciliation across multi-tenant identities"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Card Caption */}
              <div className="w-full flex items-center gap-2 text-slate-400 text-xs font-normal font-['Manrope'] leading-relaxed">
                <span className="size-1.5 bg-red-400 rounded-full shrink-0" />
                <span>
                  Fig 1.1: Cryptographic state reconciliation across multi-tenant identities.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
