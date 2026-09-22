"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PartnersHero() {
  return (
    <section className="relative w-full bg-[#F5F3EF] overflow-hidden py-16 md:py-24 border-b border-[#123B4C]/10">
      {/* Background ambient glow/blur */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-75">
        <Image
          src="/images/partners/hero-bg-blur.svg"
          alt=""
          width={1230}
          height={560}
          className="w-[600px] md:w-[900px] lg:w-[1200px] object-contain"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#C44242]" />
              <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.12em] text-[#C44242] uppercase">
                PARTNERS
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-hanken font-extrabold text-4xl sm:text-5xl lg:text-[52px] leading-[1.12] tracking-[-0.023em] text-[#0A2029]">
              Build stronger security outcomes together
            </h1>

            {/* Description */}
            <p className="font-manrope text-base sm:text-[17px] leading-[26px] text-[#4F5358] max-w-2xl">
              Connect your technology, services, and advisory capability to Zoiko
              Shield&apos;s deterministic compliance engine. We govern security
              integration paths, preserve auditable evidence, and establish
              joint operating clarity for modern regulated enterprises.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#partner-application"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-[10px] bg-[#C44242] text-white font-manrope font-bold text-[15px] shadow-sm hover:bg-[#b03939] transition-colors"
              >
                Become a Partner
              </Link>
              <Link
                href="/integrations"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-[10px] border border-[#4F5358] text-[#4F5358] font-manrope font-bold text-[15px] hover:bg-[#0A2029]/5 transition-colors"
              >
                Explore Integrations
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-3.5 text-[#0A2029] font-manrope font-semibold text-[15px] underline underline-offset-4 hover:text-[#C44242] transition-colors"
              >
                Talk to Partnerships
              </Link>
            </div>

            {/* Verification Note */}
            <div className="pt-2">
              <p className="font-mono text-xs text-[#5E6670]">
                * Verification registry audited every 24 hours. Read-only by default.
              </p>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[558px] aspect-[558/402] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-[#0A2029]">
              <Image
                src="/images/partners/hero-partner-ecosystem.png"
                alt="Zoiko Shield Partner Ecosystem Architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 558px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
