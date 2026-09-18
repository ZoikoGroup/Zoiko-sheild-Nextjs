"use client";

import React from "react";
import Image from "next/image";

interface FinalCtaSectionProps {
  onOpenDemo?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenDemo }) => {
  return (
    <section className="w-full bg-[#0B181E] text-white py-20 lg:py-24 overflow-hidden relative border-t border-gray-800">
      {/* Background Image & Overlay */}
      <Image
        src="/images/case-management/Final conversion.png"
        alt="Final Conversion CTA Background"
        fill
        className="object-cover  pointer-events-none"
        priority
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Text Block */}
          <div className="max-w-2xl space-y-4 text-left">
            <span className="text-xs font-mono font-bold text-teal-300 tracking-wider uppercase block">
              CONDITIONAL CASE MANAGEMENT
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Bring reviewable context together — without blurring authority.
            </h2>

            <p className="text-sm text-white/80 font-sans font-medium">
              Evidence · Trust · Docs · System Status
            </p>
          </div>

          {/* Right Action Block */}
          <div className="flex flex-col items-center lg:items-end gap-3 shrink-0">
            <button
              onClick={onOpenDemo}
              className="bg-[#C53B3B] hover:bg-[#A91D22] text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl hover:shadow-2xl transition-all"
            >
              Book a Demo
            </button>

            <span className="text-xs text-white/50 font-sans">
              Availability conditional on readiness
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
