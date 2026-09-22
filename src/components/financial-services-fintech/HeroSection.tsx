"use client";

import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  onRequestReview?: () => void;
  onTalkToArchitect?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRequestReview,
  onTalkToArchitect,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-28 border-b border-cyan-950/20">
      {/* Radial atmospheric glows */}
      <div
        className="pointer-events-none absolute -top-16 right-0 w-[650px] h-[550px] bg-red-500/20 blur-3xl rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 left-0 w-[450px] h-[450px] bg-teal-500/10 blur-3xl rounded-full"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="flex-1 max-w-[620px] flex flex-col justify-start items-start gap-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="text-red-200 text-xs sm:text-sm font-bold font-['Manrope'] uppercase tracking-widest">
                FINANCIAL SERVICES &amp; FINTECH
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-['Manrope'] font-bold  leading-[1.15] tracking-tight">
              Secure financial operations. Prove every critical control.
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg font-normal font-['Manrope'] leading-relaxed">
              ZoikoShield connects cyber defense, continuous control assurance, and evidence-ready governance for banks, payment firms, fintech platforms, lenders, and other regulated financial operators.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col  items-stretch sm:items-start gap-4 pt-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={onRequestReview}
                className="px-6 py-4 bg-red-500 hover:bg-red-600 text-white text-sm sm:text-base font-bold font-['Manrope'] rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer text-center"
              >
                Request a Financial Services Security Review
              </button>

              <button
                type="button"
                onClick={onTalkToArchitect || onRequestReview}
                className="px-5 py-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/40 hover:bg-white/10 text-white text-sm sm:text-base font-bold font-['Manrope'] transition-colors cursor-pointer text-center"
              >
                Talk to a Compliance Architect
              </button>
            </div>
          </div>

          {/* Right Column Image Graphic */}
          <div className="w-full lg:w-[560px] shrink-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] aspect-[572/410] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900 group">
              <Image
                src="/images/financial-services-fintech/Rectangle 40039.png"
                alt="Financial Protection and Security Infrastructure on laptop screen"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
