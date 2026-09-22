"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  onBrowseLatest?: () => void;
  onSubscribe?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBrowseLatest,
  onSubscribe,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-stone-100 border-b border-cyan-950/10">
      {/* Ambient background glows matching Figma radial fills */}
      <div
        className="pointer-events-none absolute -top-10 right-10 h-80 w-[600px] rounded-full bg-red-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-24 right-1/3 h-80 w-[200px] rounded-full bg-teal-700/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-36 right-0 h-96 w-[600px] rounded-full bg-cyan-950/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline & Controls */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <div className="w-8 h-0.5 bg-red-500" />
              <span className="text-red-500 text-xs sm:text-sm font-bold font-mono uppercase tracking-widest">
                RELEASE NOTES
              </span>
            </div>

            {/* Title */}
            <h1 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sans tracking-tight leading-[1.15]">
              Track what changed.Know <br className="hidden sm:inline" />
               what to do next.
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
              Browse Zoiko Shield product, API, webhook, integration, security,
              and platform changes with clear impact, rollout status, migration
              guidance, and links to authoritative documentation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onBrowseLatest}
                className="px-6 py-3.5 bg-red-500 hover:bg-red-600 text-white text-sm font-bold rounded-lg shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>Browse latest changes</span>
              </button>

              <button
                onClick={onSubscribe}
                className="px-5 py-3.5 bg-transparent border border-sky-950 text-sky-950 hover:bg-sky-950/5 text-sm font-bold rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Subscribe to updates</span>
              </button>

              <Link
                href="/developers-documentation"
                className="px-5 py-3.5 bg-white/80 hover:bg-white border border-cyan-950/15 text-gray-700 hover:text-slate-900 text-sm font-bold rounded-lg transition-colors flex items-center gap-2"
              >
                <span>View API Reference</span>
              </Link>
            </div>

            {/* Trust Footer Note */}
            <div className="inline-flex items-center gap-2.5 pt-2 text-gray-500 text-xs font-mono">
              <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
              <span>
                Canonical release records. Stable links. Corrections remain
                visible.
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] rounded-2xl overflow-hidden shadow-2xl border border-stone-200/80 bg-slate-900 group">
              <div className="aspect-[5/4] sm:aspect-[4/3] relative w-full overflow-hidden">
                <Image
                  src="/images/developer-release-notes/Hero-Right-Visual.png"
                  alt="Zoiko Shield Developer Release Notes Visual"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Card Bottom Badge Bar */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
