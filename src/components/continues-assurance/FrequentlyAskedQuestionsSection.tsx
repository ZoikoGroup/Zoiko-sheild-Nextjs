"use client";

import React from "react";

export default function FrequentlyAskedQuestionsSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
            Clear answers, without overclaiming.
          </h2>
        </div>

        {/* FAQ List Table / Rows */}
        <div className="border-t border-[#CBD5E1]">
          {/* Item 01 */}
          <div className="grid grid-cols-1 md:grid-cols-12 py-6 border-b border-[#CBD5E1] gap-4 items-center">
            <div className="md:col-span-1 font-mono text-xs font-bold text-[#E04F2E]">
              01
            </div>
            <div className="md:col-span-5 text-sm sm:text-base font-bold text-[#0F172A]">
              What is ZolikoShield Continuous Assurance?
            </div>
            <div className="md:col-span-6 text-xs sm:text-sm text-[#475569] leading-relaxed">
              An active assurance-led starting path; exact scope follows
              approved service authority.
            </div>
          </div>

          {/* Item 02 */}
          <div className="grid grid-cols-1 md:grid-cols-12 py-6 border-b border-[#CBD5E1] gap-4 items-center">
            <div className="md:col-span-1 font-mono text-xs font-bold text-[#E04F2E]">
              02
            </div>
            <div className="md:col-span-5 text-sm sm:text-base font-bold text-[#0F172A]">
              Is Continuous Assurance the same as Managed Defense?
            </div>
            <div className="md:col-span-6 text-xs sm:text-sm text-[#475569] leading-relaxed">
              No. They are independent peer starting paths; neither is
              prerequisite.
            </div>
          </div>

          {/* Item 03 */}
          <div className="grid grid-cols-1 md:grid-cols-12 py-6 border-b border-[#CBD5E1] gap-4 items-center">
            <div className="md:col-span-1 font-mono text-xs font-bold text-[#E04F2E]">
              03
            </div>
            <div className="md:col-span-5 text-sm sm:text-base font-bold text-[#0F172A]">
              Does Continuous Assurance certify compliance?
            </div>
            <div className="md:col-span-6 text-xs sm:text-sm text-[#475569] leading-relaxed">
              No certification, regulator approval or guaranteed compliance.
            </div>
          </div>

          {/* Item 04 */}
          <div className="grid grid-cols-1 md:grid-cols-12 py-6 border-b border-[#CBD5E1] gap-4 items-center">
            <div className="md:col-span-1 font-mono text-xs font-bold text-[#E04F2E]">
              04
            </div>
            <div className="md:col-span-5 text-sm sm:text-base font-bold text-[#0F172A]">
              Can it use ZolikoShield evidence?
            </div>
            <div className="md:col-span-6 text-xs sm:text-sm text-[#475569] leading-relaxed">
              It may connect to governed Evidence and Compliance when
              authorized.
            </div>
          </div>

          {/* Item 05 */}
          <div className="grid grid-cols-1 md:grid-cols-12 py-6 border-b border-[#CBD5E1] gap-4 items-center">
            <div className="md:col-span-1 font-mono text-xs font-bold text-[#E04F2E]">
              05
            </div>
            <div className="md:col-span-5 text-sm sm:text-base font-bold text-[#0F172A]">
              Does it perform an independent audit?
            </div>
            <div className="md:col-span-6 text-xs sm:text-sm text-[#475569] leading-relaxed">
              We do not claim this unless the independence model is approved.
            </div>
          </div>

          {/* Item 06 */}
          <div className="grid grid-cols-1 md:grid-cols-12 py-6 border-b border-[#CBD5E1] gap-4 items-center">
            <div className="md:col-span-1 font-mono text-xs font-bold text-[#E04F2E]">
              06
            </div>
            <div className="md:col-span-5 text-sm sm:text-base font-bold text-[#0F172A]">
              Which frameworks are covered?
            </div>
            <div className="md:col-span-6 text-xs sm:text-sm text-[#475569] leading-relaxed">
              Framework Coverage is a separate conditional destination.
            </div>
          </div>

          {/* Item 07 */}
          <div className="grid grid-cols-1 md:grid-cols-12 py-6 border-b border-[#CBD5E1] gap-4 items-center">
            <div className="md:col-span-1 font-mono text-xs font-bold text-[#E04F2E]">
              07
            </div>
            <div className="md:col-span-5 text-sm sm:text-base font-bold text-[#0F172A]">
              Is the service continuous 24/7?
            </div>
            <div className="md:col-span-6 text-xs sm:text-sm text-[#475569] leading-relaxed">
              The source does not define cadence; we do not infer it from the
              name.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
