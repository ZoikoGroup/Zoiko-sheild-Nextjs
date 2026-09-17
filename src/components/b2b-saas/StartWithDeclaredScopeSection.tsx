"use client";

import React from "react";
import Image from "next/image";

export default function StartWithDeclaredScopeSection() {
  return (
    <section className="relative w-full bg-[#071E2ADB] flex items-center justify-center px-6 md:px-12 py-28 md:py-36 overflow-x-hidden text-white font-sans">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/b2b-saas/3.png"
          alt="Start with Declared Scope Background"
          fill
          className="object-cover opacity-40 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1116]/90 via-[#0A1116]/75 to-[#0A1116]/90 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center w-full">
          {/* Subheading / Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#C8382C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E0967D] font-mono">
              START WITH DECLARED SCOPE
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white tracking-tight mb-4 leading-[1.15]">
            Build a review route your teams can defend.
          </h2>

          {/* Description */}
          <p className="text-[#A0AAB0] text-sm md:text-base max-w-2xl leading-relaxed mb-6">
            Discuss broad product, cloud and AI governance needs without
            submitting sensitive free text.
          </p>

          {/* Category Links Inline */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-mono text-[#4ADE80] mb-10">
            <span className="hover:underline cursor-pointer">Platform</span>
            <span className="text-[#56687A]">·</span>
            <span className="hover:underline cursor-pointer">
              AI governance
            </span>
            <span className="text-[#56687A]">·</span>
            <span className="hover:underline cursor-pointer">Evidence</span>
            <span className="text-[#56687A]">·</span>
            <span className="hover:underline cursor-pointer">Compliance</span>
            <span className="text-[#56687A]">·</span>
            <span className="hover:underline cursor-pointer">Services</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              style={{ backgroundColor: "#C8382C" }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-white font-medium text-sm tracking-wide shadow-lg hover:opacity-95 transition-opacity cursor-pointer"
            >
              Book a Demo
            </button>
            <button className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-[#0A1116] font-medium text-sm tracking-wide shadow-lg hover:bg-gray-100 transition-colors cursor-pointer">
              Explore the platform
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
