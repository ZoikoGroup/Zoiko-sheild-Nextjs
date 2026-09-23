"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PartnerCtaBandSection() {
  return (
    <section className="relative w-full bg-[#0A2440] py-24 px-6 sm:px-8 lg:px-12 overflow-hidden text-center">
      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <Image
          src="/images/partners/cta-band-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0A2440]/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-6">
        {/* Eyebrow */}
        <span className="font-mono text-xs sm:text-[12px] font-bold tracking-[0.14em] text-[#E0967D] uppercase">
          READY FOR DEFENSIBLE SECURITY
        </span>

        {/* Heading */}
        <h2 className="font-hanken font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-white leading-tight max-w-2xl">
          Connect with our Partnership Architects
        </h2>

        {/* Subtitle */}
        <p className="font-manrope text-base sm:text-[16px] leading-relaxed text-[#9FB8D6] max-w-xl">
          Whether you are exploring a deep technology alliance, an advisory
          track, or managed security delivery, our architects are available to
          review the cryptographic integration standards.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="#partner-application"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-[10px] bg-[#C44242] text-white font-manrope font-bold text-[15px] shadow-sm hover:bg-[#b03939] transition-colors"
          >
            Apply to Partner
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-[10px] border border-white text-white font-manrope font-bold text-[15px] hover:bg-white/10 transition-colors"
          >
            Talk to Partnerships
          </Link>
        </div>
      </div>
    </section>
  );
}
