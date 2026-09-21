"use client";

import React from "react";
import Image from "next/image";
interface ResearchCtaBannerProps {
  onRequestDemo?: () => void;
  onTalkToArchitect?: () => void;
}

export const ResearchCtaBannerSection: React.FC<ResearchCtaBannerProps> = ({
  onRequestDemo,
  onTalkToArchitect,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A1926] text-white py-16 sm:py-20 px-4 sm:px-8 lg:px-28 min-h-[400px] flex items-center justify-center">
      {/* Circuit background & glow */}
      <div className="absolute inset-0 z-0">
              <Image
                src="/images/research-engineering-blog/Background-Image.png"
                alt="Editorial Standards Background"
                fill
                className="object-cover object-center opacity-30 "
                priority
              />
              <div className="absolute inset-0  backdrop-blur-xs" />
            </div>
      <div
        className="pointer-events-none absolute inset-0 bg-radial from-red-500/10 via-teal-900/10 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-sky-900/20 blur-3xl rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2">
          <span className="text-red-400 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest">
            READY FOR DEFENSIBLE SECURITY
          </span>
        </div>

        {/* Title */}
        <h2 className="text-white text-3xl sm:text-4xl lg:text-[38px] font-extrabold font-['Hanken_Grotesk'] leading-[1.2] tracking-tight max-w-3xl">
          Connect identity and endpoint context without losing control.
        </h2>

        {/* Subtitle */}
        <p className="text-[#9FB8D6] text-sm sm:text-sm font-medium font-['Manrope'] leading-relaxed max-w-2xl">
          Schedule a conversation with our core security group. Walk through
          deployment schema specifications, verified compliance paths, and
          cryptographic ledger limits.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onRequestDemo}
            className="px-7 py-4 bg-red-500 hover:bg-red-600 text-white text-base font-bold font-['Manrope'] rounded-[10px] shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
          >
            Request a Demo
          </button>

          <button
            onClick={onTalkToArchitect}
            className="px-6 py-4 bg-transparent outline outline-1 outline-offset-[-1px] outline-white hover:bg-white/10 text-white text-base font-bold font-['Manrope'] rounded-[10px] transition-colors cursor-pointer"
          >
            Talk to a Security Architect
          </button>
        </div>
      </div>
    </section>
  );
};
