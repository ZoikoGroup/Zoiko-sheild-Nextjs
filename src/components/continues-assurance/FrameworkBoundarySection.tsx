"use client";

import React from "react";
import { ShieldAlert } from "lucide-react";

export default function FrameworkBoundarySection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
              FRAMEWORK BOUNDARY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
            Alignment is versioned &mdash; never implied.
          </h2>
        </div>

        {/* Two-Column Grid: Conditional destination & Text, not badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Card 1: Conditional destination */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-3">
                Conditional destination
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Framework Coverage is linked only when ready and separately
                governed.
              </p>
            </div>
          </div>

          {/* Card 2: Text, not badges */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-3">
                Text, not badges
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Program-alignment references are text-based and versioned
                &mdash; never represented as certification marks.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Alert/Note Banner */}
        <div className="bg-[#FAF0ED] rounded-2xl p-4 border border-[#E04F2E]/30 flex items-center gap-3">
          <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#E04F2E] shrink-0">
            <ShieldAlert className="w-4 h-4 text-[#E04F2E]" />
          </div>
          <p className="text-xs sm:text-sm text-[#0F172A] font-medium leading-relaxed">
            Framework alignment is separately gated, never certification by
            implication.
          </p>
        </div>
      </div>
    </section>
  );
}
