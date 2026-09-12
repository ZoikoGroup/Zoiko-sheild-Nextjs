"use client";

import React from "react";

export default function AtAGlanceLifecycleSection() {
  return (
    <section className="w-full bg-[#F0EDE6] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#E04F2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
                AT A GLANCE LIFECYCLE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[34px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Follow every signal to an accountable outcome.
            </h2>
          </div>

          <div className="max-w-xs text-xs sm:text-sm text-[#475569] leading-relaxed">
            Jump to any stage to inspect context, evidence and decision
            authority.
          </div>
        </div>

        {/* Five-Column Grid for Lifecycle Stages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Stage 01 */}
          <div className="bg-white rounded-2xl p-6 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <span className="font-mono text-xs font-bold text-[#E04F2E] mb-6 block">
              01
            </span>
            <h3 className="text-base font-bold text-[#0F172A]">Signal</h3>
          </div>

          {/* Stage 02 */}
          <div className="bg-white rounded-2xl p-6 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <span className="font-mono text-xs font-bold text-[#E04F2E] mb-6 block">
              02
            </span>
            <h3 className="text-base font-bold text-[#0F172A]">Relate</h3>
          </div>

          {/* Stage 03 (Active/Dark Card) */}
          <div className="bg-[#123B4C] rounded-2xl p-6 border border-[#1E3A52] shadow-sm flex flex-col justify-between text-white">
            <span className="font-mono text-xs font-bold text-[#E0967D] mb-6 block">
              03
            </span>
            <h3 className="text-base font-bold text-white">Investigate</h3>
          </div>

          {/* Stage 04 */}
          <div className="bg-white rounded-2xl p-6 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <span className="font-mono text-xs font-bold text-[#E04F2E] mb-6 block">
              04
            </span>
            <h3 className="text-base font-bold text-[#0F172A]">Decide</h3>
          </div>

          {/* Stage 05 */}
          <div className="bg-white rounded-2xl p-6 border border-[#CBD5E1] shadow-sm flex flex-col justify-between sm:col-span-2 lg:col-span-1">
            <span className="font-mono text-xs font-bold text-[#E04F2E] mb-6 block">
              05
            </span>
            <h3 className="text-base font-bold text-[#0F172A]">
              Respond / Record
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
