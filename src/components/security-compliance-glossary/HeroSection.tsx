"use client";

import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearch?: () => void;
  onBrowseAZ?: () => void;
  onBrowseTopics?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  onSearch,
  onBrowseAZ,
  onBrowseTopics,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && onSearch) {
      onSearch();
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-stone-100 border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      {/* Soft atmospheric gradient radial glows */}
      <div
        className="pointer-events-none absolute -top-10 left-1/4 h-[450px] w-[500px] rounded-full bg-red-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-teal-600/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-10 right-0 h-[450px] w-[450px] rounded-full bg-cyan-950/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column */}
          <div className="flex-1 max-w-[720px] flex flex-col justify-start items-start gap-5">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <div className="w-8 h-0.5 bg-red-500" />
              <span className="text-red-500 text-sm font-bold font-['JetBrains_Mono'] uppercase tracking-widest">
                SECURITY &amp; COMPLIANCE GLOSSARY
              </span>
            </div>

            {/* Title */}
            <h1 className="text-slate-900 text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Hanken_Grotesk'] leading-[1.1] tracking-tight">
              Security and compliance terms, with the context intact.
            </h1>

            {/* Subtitle */}
            <p className="text-gray-500 text-base sm:text-lg font-medium font-['Manrope'] leading-relaxed">
              Demystifying complex cybersecurity frameworks, privacy rules, threat
              vectors, risk factors, and cryptographic protocols. We map
              source-of-truth definitions directly to technical evidence, access
              control vectors, and responsible AI governance.
            </p>

            {/* Search Box / Action Controls */}
            <div className="w-full p-1.5 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-cyan-950/10 flex flex-wrap sm:flex-nowrap items-center gap-2 overflow-hidden shadow-xs">
              <div className="flex-1 min-w-[220px] h-11 px-3.5 bg-stone-100 rounded-md flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search a term, acronym, alias, framework, or concept…"
                  className="w-full bg-transparent text-slate-900 placeholder:text-gray-500 text-xs font-medium font-['Manrope'] focus:outline-none"
                />
              </div>

              <button
                type="button"
                onClick={onSearch}
                className="w-28 h-11 bg-red-500 hover:bg-red-600 rounded-md flex justify-center items-center text-white text-[10px] font-bold font-['JetBrains_Mono'] transition-colors cursor-pointer shrink-0"
              >
                Search Glossary
              </button>

              <button
                type="button"
                onClick={onBrowseAZ}
                className="w-24 h-11 bg-white hover:bg-stone-50 rounded-md outline outline-1 outline-offset-[-1px] outline-sky-950/60 text-sky-950 text-[10px] font-bold font-['JetBrains_Mono'] transition-colors cursor-pointer shrink-0"
              >
                Browse A–Z
              </button>

              <button
                type="button"
                onClick={onBrowseTopics}
                className="w-28 h-11 bg-white hover:bg-stone-50 rounded-md outline outline-1 outline-offset-[-1px] outline-sky-950/60 text-sky-950 text-[10px] font-bold font-['JetBrains_Mono'] transition-colors cursor-pointer shrink-0"
              >
                Browse Topics
              </button>
            </div>

            {/* Context Note */}
            <div className="text-gray-500 text-[10px] font-medium font-['Manrope'] leading-4">
              Definitions can vary by authority, framework version, industry, and
              jurisdiction. We preserve that context.
            </div>
          </div>

          {/* Right Column Image */}
          <div className="w-full lg:w-auto shrink-0 flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-80 lg:w-96 aspect-square rounded-3xl overflow-hidden border border-cyan-950/10 shadow-lg bg-stone-200">
              <Image
                src="/images/security-compliance-glossary/Hero-Right-Image (2).png"
                alt="Security & Compliance Context Intact"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
