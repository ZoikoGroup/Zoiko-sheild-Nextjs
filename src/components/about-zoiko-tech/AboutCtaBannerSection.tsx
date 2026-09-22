"use client";

import React from "react";
import Image from "next/image";

interface AboutCtaBannerProps {
  onRequestDemo?: () => void;
  onTalkToArchitect?: () => void;
}

export const AboutCtaBannerSection: React.FC<AboutCtaBannerProps> = ({
  onRequestDemo,
  onTalkToArchitect,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white py-20 sm:py-24 px-4 sm:px-8 lg:px-28 min-h-[420px] flex items-center justify-center">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-zoiko-tech/Conversion.png"
          alt="Defensible Security Operations"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Atmospheric Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-red-500/10 blur-3xl rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-start gap-6">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3">
          <div className="w-6 h-0.5 bg-red-500" />
          <span className="text-red-400 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-wider">
            READY FOR DEFENSIBLE SECURITY
          </span>
        </div>

        {/* Title */}
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Hanken_Grotesk'] leading-[1.15] tracking-tight">
          Connect context without losing authority.
        </h2>

        {/* Subtitle */}
        <p className="text-slate-300 text-base sm:text-lg font-normal font-['Manrope'] leading-relaxed max-w-2xl">
          Let&apos;s evaluate your enterprise integration scope. Initiate a transparent product path or request direct talk with our security architects.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            type="button"
            onClick={onRequestDemo}
            className="px-7 py-4 bg-red-500 hover:bg-red-600 text-white text-base font-bold font-['Manrope'] rounded-[10px] shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
          >
            Request a Demo
          </button>

          <button
            type="button"
            onClick={onTalkToArchitect || onRequestDemo}
            className="px-6 py-4 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-white hover:bg-white/10 text-white text-base font-bold font-['Manrope'] transition-colors cursor-pointer"
          >
            Talk to a Security Architect
          </button>
        </div>
      </div>
    </section>
  );
};
