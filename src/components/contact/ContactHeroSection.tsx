"use client";

import React from "react";
import Image from "next/image";
import { ShieldAlert } from "lucide-react";
import { Eyebrow, scrollToSection } from "./shared";

export const ContactHeroSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7F5F0] py-16 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-28">
      {/* Soft atmospheric radial glows */}
      <div
        className="pointer-events-none absolute -top-10 right-0 h-[420px] w-[620px] rounded-full bg-red-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-24 left-1/3 h-[340px] w-[560px] rounded-full bg-teal-700/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-32 -right-20 h-[420px] w-[640px] rounded-full bg-cyan-950/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
        {/* Left Column */}
        <div className="flex-1 max-w-[640px] flex flex-col items-start gap-6">
          <Eyebrow>CONTACT ZOIKO SHIELD</Eyebrow>

          <h1 className="text-slate-900 text-4xl sm:text-5xl font-extrabold font-hanken leading-[1.12] tracking-tight">
            Reach the right team without the runaround.
          </h1>

          <p className="text-gray-500 text-base font-medium font-manrope leading-6">
            Direct access paths configured for sales inquiries, security architecture vetting, verified
            active-customer support, privacy requests, and legal compliance.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("secure-dispatcher")}
              className="px-6 py-3.5 bg-red-500 hover:bg-red-600 text-white text-sm font-bold font-manrope rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Choose Inquiry Type
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("architecture-vetting")}
              className="px-6 py-3.5 rounded-lg outline outline-1 outline-offset-[-1px] outline-sky-950 hover:bg-black/5 text-sky-950 text-sm font-bold font-manrope transition-colors cursor-pointer"
            >
              Talk to an Architect
            </button>
          </div>

          <div className="pt-3 flex items-start gap-2">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-800 shrink-0 mt-0.5" />
            <p className="text-rose-800 text-xs font-medium font-jetbrains leading-relaxed">
              IMPORTANT: Do not submit api keys, access tokens, or raw logs in standard inquiry forms. Use the
              verified disclosure channels below.
            </p>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="w-full lg:w-[420px] xl:w-[500px] shrink-0">
          <div className="relative w-full aspect-[500/360] rounded-2xl overflow-hidden border border-white/20 shadow-xl">
            <Image
              src="/images/contact/Hero-Routing-Image.webp"
              alt="Security teams reviewing the Zoiko Shield inquiry routing board"
              fill
              priority
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
