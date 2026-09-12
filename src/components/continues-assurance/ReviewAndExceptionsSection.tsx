"use client";

import React from "react";
import { ShieldAlert } from "lucide-react";

export default function ReviewAndExceptionsSection() {
  return (
    <section className="w-full bg-[#F0EDE6] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#1F7A6C]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#1F7A6C] uppercase">
              REVIEW + EXCEPTIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
            Every judgment has an accountable owner.
          </h2>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Questions, assessments, decisions and unresolved items remain
            attributable from review through follow-up.
          </p>
        </div>

        {/* Two-Column Grid: Left White Card with Review record, Right Dark Card with Exception governance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 items-start">
          {/* Left Column: Review record (white card) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm">
            <h3 className="text-base font-bold text-[#0F172A] mb-6">
              Review record
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white px-4 py-3 text-xs">
                <span className="font-mono text-[#0F172A]">Question</span>
                <span className="font-mono text-[#0284C7] font-semibold">
                  ATTRIBUTED
                </span>
              </div>
              <div className="flex items-center justify-between bg-white px-4 py-3 text-xs">
                <span className="font-mono text-[#0F172A]">
                  Reviewer / authority
                </span>
                <span className="font-mono text-[#0284C7] font-semibold">
                  ATTRIBUTED
                </span>
              </div>
              <div className="flex items-center justify-between bg-white px-4 py-3 text-xs">
                <span className="font-mono text-[#0F172A]">Basis</span>
                <span className="font-mono text-[#0284C7] font-semibold">
                  ATTRIBUTED
                </span>
              </div>
              <div className="flex items-center justify-between bg-white px-4 py-3 text-xs">
                <span className="font-mono text-[#0F172A]">Scope</span>
                <span className="font-mono text-[#0284C7] font-semibold">
                  ATTRIBUTED
                </span>
              </div>
              <div className="flex items-center justify-between bg-white px-4 py-3 text-xs">
                <span className="font-mono text-[#0F172A]">Conclusion</span>
                <span className="font-mono text-[#0284C7] font-semibold">
                  ATTRIBUTED
                </span>
              </div>
              <div className="flex items-center justify-between bg-white px-4 py-3 text-xs">
                <span className="font-mono text-[#0F172A]">Open questions</span>
                <span className="font-mono text-[#0284C7] font-semibold">
                  ATTRIBUTED
                </span>
              </div>
              <div className="flex items-center justify-between bg-white px-4 py-3 text-xs">
                <span className="font-mono text-[#0F172A]">Limitations</span>
                <span className="font-mono text-[#0284C7] font-semibold">
                  ATTRIBUTED
                </span>
              </div>
              <div className="flex items-center justify-between bg-white px-4 py-3 text-xs">
                <span className="font-mono text-[#0F172A]">Follow-up</span>
                <span className="font-mono text-[#0284C7] font-semibold">
                  ATTRIBUTED
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Exception governance (dark card) */}
          <div className="lg:col-span-6 bg-[#123B4C] rounded-3xl p-8 border border-[#1E3A52] shadow-sm text-white">
            <h3 className="text-base font-bold text-white mb-6">
              Exception governance
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-[#FFFFFF0D] rounded-xl px-4 py-3 border border-[#FFFFFF1F] text-xs">
                <span className="font-mono text-white">Reason</span>
                <span className="font-mono text-[#E0967D] font-semibold">
                  REQUIRED
                </span>
              </div>
              <div className="flex items-center justify-between bg-[#FFFFFF0D] rounded-xl px-4 py-3 border border-[#FFFFFF1F] text-xs">
                <span className="font-mono text-white">Scope</span>
                <span className="font-mono text-[#E0967D] font-semibold">
                  REQUIRED
                </span>
              </div>
              <div className="flex items-center justify-between bg-[#FFFFFF0D] rounded-xl px-4 py-3 border border-[#FFFFFF1F] text-xs">
                <span className="font-mono text-white">Owner</span>
                <span className="font-mono text-[#E0967D] font-semibold">
                  REQUIRED
                </span>
              </div>
              <div className="flex items-center justify-between bg-[#FFFFFF0D] rounded-xl px-4 py-3 border border-[#FFFFFF1F] text-xs">
                <span className="font-mono text-white">Approval</span>
                <span className="font-mono text-[#E0967D] font-semibold">
                  REQUIRED
                </span>
              </div>
              <div className="flex items-center justify-between bg-[#FFFFFF0D] rounded-xl px-4 py-3 border border-[#FFFFFF1F] text-xs">
                <span className="font-mono text-white">
                  Compensating context
                </span>
                <span className="font-mono text-[#E0967D] font-semibold">
                  REQUIRED
                </span>
              </div>
              <div className="flex items-center justify-between bg-[#FFFFFF0D] rounded-xl px-4 py-3 border border-[#FFFFFF1F] text-xs">
                <span className="font-mono text-white">Review expiry</span>
                <span className="font-mono text-[#E0967D] font-semibold">
                  REQUIRED
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Alert/Note Banner */}
        <div className="bg-[#FAF0ED] rounded-2xl p-4 border border-[#E0967D]/30 flex items-center gap-3">
          <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#E0967D] shrink-0">
            <ShieldAlert className="w-4 h-4 text-[#E0967D]" />
          </div>
          <p className="text-xs sm:text-sm text-[#0F172A] font-medium leading-relaxed">
            Assessments and exception decisions retain accountable human
            authority.
          </p>
        </div>
      </div>
    </section>
  );
}
