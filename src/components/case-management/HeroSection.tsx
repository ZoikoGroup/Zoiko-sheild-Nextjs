"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onOpenDemo?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative w-full bg-[#F5F2EB] py-12 lg:py-20 overflow-hidden border-b border-zoiko-border">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-0 right-0 w-[560px] h-[560px] bg-red-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute top-40 right-1/4 w-[520px] h-[520px] bg-teal-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#C53B3B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#C53B3B] font-mono">
                CASE MANAGEMENT
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#151B28] tracking-tight leading-[1.15]">
              Keep investigation, evidence, communications and decisions in{" "}
              <span className="text-[#C53B3B]">one reviewable case.</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#151B28]/75 leading-relaxed max-w-2xl font-sans">
              A governed case-management destination grounded in the controlled source. Investigation context, evidence references, decision history and attributable communications — one reviewable record, with separate authorities kept distinct.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenDemo}
                className="bg-[#C53B3B] hover:bg-[#A91D22] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                Book a Demo
              </button>
              <Link
                href="/detection-and-response"
                className="bg-white hover:bg-gray-50 text-[#151B28] border border-cyan-950/20 px-7 py-3.5 rounded-xl font-bold text-sm transition-all shadow-sm flex items-center gap-2"
              >
                <span>Detection & Response</span>
                <ArrowRight className="w-4 h-4 text-gray-500" />
              </Link>
            </div>

            {/* Conditional Publication State Card */}
            <div className="mt-6 p-5 bg-orange-50/80 rounded-2xl border border-amber-300 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 font-mono text-[11px]">
                <span className="bg-orange-200 text-[#151B28] px-2.5 py-1 rounded-full font-extrabold tracking-wider">
                  CONDITIONAL
                </span>
                <span className="text-amber-800 font-semibold tracking-wider">
                  PUBLICATION STATE
                </span>
              </div>
              <h3 className="text-base font-extrabold text-[#151B28]">
                Render only when the case substance gate passes.
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed font-sans">
                If the source is unavailable, capability becomes less permissive and uncertainty remains explicit.
              </p>
            </div>
          </div>

          {/* Right Visual Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-800 bg-[#0B181E] group">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/case-management/Hero image card.png"
                  alt="Case Review Evidence & Decision Record"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
              </div>

              {/* Status Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-white/20 flex items-center gap-2.5 text-xs text-emerald-200 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="truncate">CASE REVIEW · Evidence & Decision Record</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
