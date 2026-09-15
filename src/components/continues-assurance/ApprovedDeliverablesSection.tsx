"use client";

import React from "react";
import { ShieldAlert } from "lucide-react";

export default function ApprovedDeliverablesSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
              OUTPUTS + LIMITATIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
            Approved deliverables. Clearly bounded claims.
          </h2>
        </div>

        {/* Top Grid: Approved deliverable classes & Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 items-start">
          {/* Left Column: Approved deliverable classes */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <h3 className="text-base font-bold text-[#0F172A] mb-2">
              Approved deliverable classes
            </h3>

            {/* Item 1 */}
            <div className="bg-white rounded-2xl px-6 py-4 border border-[#CBD5E1] shadow-sm flex items-center justify-between text-xs sm:text-sm">
              <span className="font-medium text-[#0F172A]">
                Evidence review summary
              </span>
              <span className="font-mono text-[11px] text-[#64748B]">
                DRAFT &rarr; REVIEWED &rarr; APPROVED
              </span>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-2xl px-6 py-4 border border-[#CBD5E1] shadow-sm flex items-center justify-between text-xs sm:text-sm">
              <span className="font-medium text-[#0F172A]">
                Control context brief
              </span>
              <span className="font-mono text-[11px] text-[#64748B]">
                DRAFT &rarr; REVIEWED &rarr; APPROVED
              </span>
            </div>

            {/* Item 3 */}
            <div className="bg-white rounded-2xl px-6 py-4 border border-[#CBD5E1] shadow-sm flex items-center justify-between text-xs sm:text-sm">
              <span className="font-medium text-[#0F172A]">
                Assessment record
              </span>
              <span className="font-mono text-[11px] text-[#64748B]">
                DRAFT &rarr; REVIEWED &rarr; APPROVED
              </span>
            </div>

            {/* Item 4 */}
            <div className="bg-white rounded-2xl px-6 py-4 border border-[#CBD5E1] shadow-sm flex items-center justify-between text-xs sm:text-sm">
              <span className="font-medium text-[#0F172A]">
                Exception register
              </span>
              <span className="font-mono text-[11px] text-[#64748B]">
                DRAFT &rarr; REVIEWED &rarr; APPROVED
              </span>
            </div>

            {/* Item 5 */}
            <div className="bg-white rounded-2xl px-6 py-4 border border-[#CBD5E1] shadow-sm flex items-center justify-between text-xs sm:text-sm">
              <span className="font-medium text-[#0F172A]">
                Open-items tracker
              </span>
              <span className="font-mono text-[11px] text-[#64748B]">
                DRAFT &rarr; REVIEWED &rarr; APPROVED
              </span>
            </div>

            {/* Item 6 */}
            <div className="bg-white rounded-2xl px-6 py-4 border border-[#CBD5E1] shadow-sm flex items-center justify-between text-xs sm:text-sm">
              <span className="font-medium text-[#0F172A]">
                Executive assurance brief
              </span>
              <span className="font-mono text-[11px] text-[#64748B]">
                DRAFT &rarr; REVIEWED &rarr; APPROVED
              </span>
            </div>
          </div>

          {/* Right Column: Image showcase */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden p-3 shadow-sm h-full flex items-center">
            <img
              src="/images/assurance/3.png"
              alt="Team collaborating on deliverables and review dashboards"
              className="w-full h-[360px] sm:h-[415px] object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Middle Alert/Note Banner */}
        <div className="bg-[#FAF0ED] rounded-2xl p-4 border border-[#E04F2E]/30 flex items-center gap-3 mb-6">
          <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#E04F2E] shrink-0">
            <ShieldAlert className="w-4 h-4 text-[#E04F2E]" />
          </div>
          <p className="text-xs sm:text-sm text-[#0F172A] font-medium leading-relaxed">
            Do not label outputs as &ldquo;audit report,&rdquo;
            &ldquo;attestation,&rdquo; &ldquo;certificate&rdquo; or
            &ldquo;opinion&rdquo; unless approved.
          </p>
        </div>

        {/* Bottom Two Cards Grid: Bounded AI assistance & What varies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Bounded AI assistance */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-3">
                Bounded AI assistance
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Retrieval, summarization and explanation only &mdash; never
                assurance authority.
              </p>
            </div>
          </div>

          {/* Card 2: What varies */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-3">
                What varies
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Scope, cadence, framework coverage, evidence sources, review
                model and outputs are engagement-specific.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
