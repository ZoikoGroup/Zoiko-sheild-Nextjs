"use client";

import React from "react";
import Image from "next/image";

export default function SystemStatus() {
  return (
    <div className="relative w-full bg-[#FAF5F0] flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-16 overflow-hidden">
      {/* Soft gradient glow, top-right — CSS-based so it always renders correctly,
          regardless of whether a local blur asset exists */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 88% 12%, rgba(230,166,180,0.55) 0%, rgba(230,166,180,0) 55%), radial-gradient(circle at 78% 30%, rgba(150,185,210,0.35) 0%, rgba(150,185,210,0) 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
        {/* Left Column: Dark Status Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[540px] rounded-3xl overflow-hidden shadow-2xl bg-[#123B4C] border border-[#FFFFFF20] p-8 flex flex-col justify-between">
            {/* Top Tag & Indicator */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] tracking-[0.2em] font-mono text-[#C44242] uppercase font-semibold">
                  — SYSTEM STATUS
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="h-3 w-3 rounded-full bg-[#E6933F] animate-pulse mt-2 shrink-0" />
                <h1 className="text-3xl sm:text-[38px] lg:text-[56px] font-extrabold text-white leading-[1.05] tracking-tight">
                  Some Systems Experiencing Degraded Performance
                </h1>
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-[#9BA6AD] text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Our core platform, evidence logging, and support registries are
              fully operational. We are tracking a minor latency anomaly
              affecting directory posturing sync routines with certain Identity
              Providers.
            </p>

            {/* Source Freshness Info */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#7A858B] mb-6">
              <span className="text-[#85C1A3]">✓</span>
              <span>
                Source Freshness: Verified 1m ago • Next automated execution in
                4m
              </span>
            </div>

            {/* Buttons Container */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C8382C] text-white text-sm font-medium tracking-wide shadow-sm hover:bg-[#b53026] transition-colors"
              >
                Subscribe to Updates
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-transparent border border-[#FFFFFF30] text-white text-sm font-medium tracking-wide hover:bg-[#FFFFFF08] transition-colors"
              >
                View Incident History
              </a>
            </div>

            {/* Bottom Support Link */}
            <div className="pt-4 border-t border-[#FFFFFF10]">
              <span className="text-xs text-[#9BA6AD] font-mono">
                Still having trouble?{" "}
                <a
                  href="#"
                  className="text-white underline hover:text-[#C8382C] transition-colors"
                >
                  Contact Support
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Large Feature Image Card — stretches to match left card's height */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[540px] h-full min-h-[380px] rounded-3xl overflow-hidden shadow-2xl bg-[#0B2732] border border-[#FFFFFF20] p-3 sm:p-4">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#121B22] border border-[#232F36]">
              <Image
                src="/images/support/3.png"
                alt="System Monitoring Control Room Preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
