"use client";

import React from "react";
import Image from "next/image";

interface HeroProcurementSectionProps {
  onOpenDemo?: () => void;
}

export const HeroProcurementSection: React.FC<HeroProcurementSectionProps> = () => {
  return (
    <section className="w-full bg-[#f6f4ee] border-b border-stone-200/80 py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Header + 3 Horizontal Procurement Cards */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-8">
            {/* Header Content */}
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] tracking-wider uppercase">
                  — ARCHITECTURE BREAKDOWN
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 font-['Hanken_Grotesk'] tracking-tight leading-tight">
                Structured Procurement Blocks
              </h1>

              {/* Subtitle */}
              <p className="mt-3.5 text-sm sm:text-base text-slate-600 font-['Manrope'] leading-relaxed max-w-2xl">
                We structure our deployment scopes into three commercial domains to ensure predictability and alignment with corporate IT governance.
              </p>
            </div>

            {/* 3 Procurement Cards in a 3-Column Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 pt-2">
              {/* Card 1: Recurring Core */}
              <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm flex flex-col justify-start hover:border-stone-300 transition-all">
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-md text-[11px] font-bold font-['JetBrains_Mono'] bg-stone-100 text-stone-700 tracking-wider uppercase">
                    RECURRING CORE
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Hanken_Grotesk'] mb-2.5">
                  1. Base Platform
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 font-['Manrope'] leading-relaxed">
                  Covers core tenant infrastructure, continuous control correlation, compliance engine, and direct read telemetry. Formatted as flat, predictable annual subscriptions.
                </p>
              </div>

              {/* Card 2: Volume-Linked */}
              <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm flex flex-col justify-start hover:border-amber-300 transition-all">
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-md text-[11px] font-bold font-['JetBrains_Mono'] bg-amber-100/90 text-amber-800 tracking-wider uppercase">
                    VOLUME-LINKED
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Hanken_Grotesk'] mb-2.5">
                  2. Scoped Protection Units
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 font-['Manrope'] leading-relaxed">
                  Scale dynamically with protected asset thresholds. Includes EDR-managed host ceilings and active identity directory nodes. Features defined brackets to prevent overage surprises.
                </p>
              </div>

              {/* Card 3: One-Time / Service */}
              <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm flex flex-col justify-start hover:border-stone-300 transition-all">
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-md text-[11px] font-bold font-['JetBrains_Mono'] bg-stone-100 text-stone-700 tracking-wider uppercase">
                    ONE-TIME / SERVICE
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Hanken_Grotesk'] mb-2.5">
                  3. Onboarding &amp; SLA Tiers
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 font-['Manrope'] leading-relaxed">
                  Determined by your target deployment model (standard secure cloud vs isolated isolated environment), custom compliance mapping requirements, and dedicated Support SLA tier.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-4 flex">
            <div className="relative w-full min-h-[360px] sm:min-h-[440px] lg:min-h-full rounded-3xl overflow-hidden shadow-xl border border-stone-200/80 bg-stone-900 group">
              <Image
                src="/images/how-pricing-works/Procurement-Image.png"
                alt="Structured Procurement Blocks Architecture"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
