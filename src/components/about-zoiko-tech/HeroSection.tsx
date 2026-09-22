"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

interface HeroSectionProps {
  onOpenDemo?: () => void;
  onTalkToSecurity?: () => void;
  onViewLeadership?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenDemo,
  onTalkToSecurity,
  onViewLeadership,
}) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-stone-100 border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      {/* Soft atmospheric gradient radial glow */}
      <div
        className="pointer-events-none absolute -top-12 left-0 h-[600px] w-[600px] rounded-full bg-red-500/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-12 left-1/3 h-[450px] w-[500px] rounded-full bg-teal-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
          {/* Left Column */}
          <div className="flex-1 max-w-[680px] flex flex-col justify-start items-start gap-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <div className="w-6 h-0.5 bg-red-500" />
              <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-wider">
                ABOUT ZOIKO TECH
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Hanken_Grotesk'] leading-[1.15] tracking-tight">
              Security that can be explained, governed, and defended.
            </h1>

            {/* Subtitle */}
            <p className="text-gray-500 text-base font-medium font-['Manrope'] leading-relaxed">
              Zoiko Tech builds modern cybersecurity and compliance technology designed to bring validated, human-governed controls to regulated enterprises. We replace opaque assumptions with immutable registry-driven proof, strengthening investigations and empowering security operations with true source authority.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="/platform-overview"
                className="px-7 py-4 bg-red-500 hover:bg-red-600 text-white text-base font-bold font-['Manrope'] rounded-[10px] shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
              >
                Explore Zoiko Shield
              </Link>

              <button
                type="button"
                onClick={onTalkToSecurity || onOpenDemo}
                className="px-6 py-4 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-sky-950 hover:bg-black/5 text-sky-950 text-base font-bold font-['Manrope'] transition-colors cursor-pointer"
              >
                Talk to Security
              </button>

              <button
                type="button"
                onClick={onViewLeadership || (() => scrollToSection("leadership-section"))}
                className="p-4 text-gray-500 hover:text-slate-900 text-base font-bold font-['Manrope'] transition-colors cursor-pointer"
              >
                View Leadership
              </button>
            </div>

            {/* Verification Note */}
            <div className="pt-2 inline-flex items-center gap-2.5 text-gray-500 text-xs font-medium font-['JetBrains_Mono']">
              <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
              <span>
                Decisions backed by absolute evidence, strict human governance, and deep session context.
              </span>
            </div>
          </div>

          {/* Right Column Image */}
          <div className="w-full lg:w-[504px] shrink-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[504px] aspect-[504/390] rounded-2xl overflow-hidden shadow-xl border border-white/20 bg-slate-900 group">
              <Image
                src="/images/about-zoiko-tech/Hero-Right-Image.png"
                alt="Zoiko Tech Security Operations Center"
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
