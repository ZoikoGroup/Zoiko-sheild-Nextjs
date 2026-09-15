"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function CasesAndWorkflowSyncSection() {
  return (
    <section className="w-full bg-[#F0EDE6] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
              CASES + WORKFLOW SYNC
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
            Coordinate handoffs without blurring systems of record.
          </h2>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Link the investigation timeline across approved tools, with
            deterministic sync and reconciliation.
          </p>
        </div>

        {/* Two Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Left Card: Case fields */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-3">
                Case fields
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Case identity &mdash; timeline &mdash; evidence links &mdash;
                participants &mdash; decision history &mdash; communications
                &mdash; actions &mdash; unknowns &mdash; linked records &mdash;
                closure &mdash; history.
              </p>
            </div>
          </div>

          {/* Right Card: Cross-tool sync */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-3">
                Cross-tool sync
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                System of record &mdash; identity mapping &mdash; create /
                update &mdash; status mapping &mdash; comments &mdash;
                attachments &mdash; ownership &mdash; conflict &mdash; retry /
                dead letter &mdash; closure &mdash; reconciliation.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Alert/Note Banner */}
        <div className="bg-[#EBF3F1] rounded-2xl p-4 border border-[#CBD5E1]/60 flex items-center gap-3">
          <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#0F172A] shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#1F7A6C]" />
          </div>
          <p className="text-xs sm:text-sm text-[#0F172A] font-medium leading-relaxed">
            Case completion does not mean underlying risk is universally
            resolved.
          </p>
        </div>
      </div>
    </section>
  );
}
