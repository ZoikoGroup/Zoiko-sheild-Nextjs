"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, AlertTriangle, ArrowRight, CircleAlert } from "lucide-react";

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  onSearchSubmit?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  onSearchSubmit,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && onSearchSubmit) {
      onSearchSubmit();
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full bg-[#F5F2EB] border-b border-cyan-950/10 overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Ambient background glow accents */}
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
                RESOURCES &amp; EDUCATION
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[44px] font-extrabold text-[#0B1B26] font-sans tracking-[1.1px] leading-[1.15]">
              Security frameworks, translated into practical work.
            </h1>

            <p className="text-slate-600 text-base sm:text-xm font-normal leading-relaxed max-w-2xl font-sans">
              Explore current cybersecurity frameworks, implementation guides,
              mappings, checklists, and learning paths with source authority,
              version status, and evidence boundaries clearly identified.
            </p>

            {/* Interactive Search Card */}
            <div className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200/90 shadow-md space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="w-full relative flex-1">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search frameworks, guides, controls, roles, or security questions..."
                    className="w-full pl-10 pr-4 py-3 bg-[#E6E4DD]/60 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#A91D22] focus:ring-1 focus:ring-[#A91D22] transition-colors"
                  />
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
                  <button
                    onClick={() => scrollToSection("framework-library")}
                    className="flex-1 sm:flex-initial px-5 py-3 bg-[#A91D22] hover:bg-[#8e171b] text-white text-xs sm:text-sm font-bold rounded-lg transition-all text-center cursor-pointer"
                  >
                    Browse frameworks
                  </button>

                  <button
                    onClick={() => scrollToSection("featured-guides")}
                    className="flex-1 sm:flex-initial px-5 py-3 bg-transparent hover:bg-slate-100 text-[#0B1B26] border border-[#0B1B26] text-xs sm:text-sm font-bold rounded-lg transition-all text-center cursor-pointer"
                  >
                    Browse guides
                  </button>
                </div>
              </div>

              {/* Legal & Source Disclaimer */}
              <div className="pt-2 border-t border-slate-100 flex items-start gap-2 text-xs font-mono">
                <CircleAlert className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                <p className="text-slate-500 leading-normal">
                  <span className="text-[#B45309] font-bold">Legal &amp; Source Disclaimer: </span>
                  Framework references are educational unless official; Zoiko
                  mappings are non-authoritative and do not constitute
                  certification, compliance audits, or formal legal advice.
                </p>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] aspect-[456/520] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white">
              <Image
                src="/images/guides-framework/Hero-Visual.png"
                alt="Security Framework Compliance Operations"
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
