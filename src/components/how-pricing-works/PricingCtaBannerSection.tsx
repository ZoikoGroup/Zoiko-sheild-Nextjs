"use client";

import React from "react";
import Image from "next/image";

interface PricingCtaBannerSectionProps {
  onOpenDemo?: () => void;
}

export const PricingCtaBannerSection: React.FC<PricingCtaBannerSectionProps> = ({
  onOpenDemo,
}) => {
  return (
    <section className="w-full relative overflow-hidden bg-[#07131e] py-20 lg:py-28 border-t border-cyan-950">
      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none ">
        <Image
          src="/images/how-pricing-works/Final-CTA-Section.png"
          alt="CTA Background Circuit Grid"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        {/* Eyebrow */}
        <div className="text-red-400 text-[11px] font-bold font-['JetBrains_Mono'] tracking-widest uppercase">
          DEFENSIBLE ENTERPRISE SECURITY
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white font-['Hanken_Grotesk'] tracking-tight leading-tight">
          Scale your assurance controls securely.
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-slate-300 font-['Manrope'] max-w-xl mx-auto leading-relaxed pt-1 pb-3">
          Submit your scope configurations directly to an integration architect today. Receive an authoritative, certified commercial proposal within 24 hours.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-1">
          <button
            type="button"
            onClick={onOpenDemo}
            className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold font-['Manrope'] shadow-lg shadow-red-900/30 transition-all hover:scale-[1.01]"
          >
            Talk to an Integration Architect
          </button>

          <button
            type="button"
            onClick={onOpenDemo}
            className="px-6 py-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-white text-xs sm:text-sm font-bold font-['Manrope'] transition-all"
          >
            Request System Demo
          </button>
        </div>
      </div>
    </section>
  );
};
