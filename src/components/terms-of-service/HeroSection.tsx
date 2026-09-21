"use client";

import React from "react";
import Image from "next/image";
import { Info } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#F5F2EB] border-b border-cyan-950/10 overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Background Radial Glow Accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-teal-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/3 w-[500px] h-[400px] bg-cyan-950/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-3">
              <div className="w-8 h-0.5 bg-[#A91D22]" />
              <span className="text-[#A91D22] text-xs sm:text-sm font-bold font-mono uppercase tracking-widest">
                LEGAL &amp; GOVERNANCE
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0B1B26] font-sans tracking-tight leading-[1.1]">
              Terms of Service
            </h1>

            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              These terms govern access to and use of the Zoiko Shield services and
              related surfaces to the extent specified in the authoritative legal
              text. Please read this contract carefully.
            </p>

            <div className="inline-flex items-center gap-2.5 p-3  text-slate-600 text-xs font-mono max-w-xl">
              <Info className="w-4 h-4 text-slate-500 shrink-0" />
              <span>
                Note: Signed enterprise agreement precedence is determined by
                authoritative order-of-precedence language.
              </span>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[504px] aspect-[504/380] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
              <Image
                src="/images/terms-of-service/Hero-Right-Image.png"
                alt="Zoiko Shield Legal & Governance Review"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
