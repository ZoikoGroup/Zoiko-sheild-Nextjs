"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function EvidenceSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading, description, alert box, and button */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#E04F2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
                04 &bull; EVIDENCE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
              Evidence linked. Boundaries explicit.
            </h2>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
              Governed evidence connects source records, normalized views,
              analyst artifacts, decision records and action receipts &mdash;
              with lineage and completeness visible.
            </p>

            {/* Alert / Note Box */}
            <div className="w-full bg-[#EBF4F1] rounded-2xl p-4 border border-[#0D9488]/30 flex items-center gap-3 mb-8">
              <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#0D9488] shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
              </div>
              <p className="text-xs sm:text-sm text-[#0F172A] font-medium leading-relaxed">
                Verified evidence supports investigation &mdash; it does not
                determine intent, compromise, root cause or compliance status.
              </p>
            </div>

            {/* Button */}
            <button className="px-6 py-3 rounded-full bg-white border border-[#CBD5E1] text-xs font-mono font-bold text-[#0F172A] hover:bg-[#FAF8F5] transition-colors shadow-sm flex items-center gap-2">
              Open Evidence &rarr;
            </button>
          </div>

          {/* Right Column: Dark Evidence Records Card */}
          <div className="lg:col-span-7 bg-[#0F2232] rounded-3xl p-8 border border-[#1E3A52] shadow-sm text-white flex flex-col justify-between">
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="flex items-center justify-between pb-4 border-b border-[#FFFFFF14] text-xs">
                <span className="font-mono text-white">
                  Source record &bull; SIEM-8891
                </span>
                <span className="font-mono text-[#E0967D] font-semibold">
                  VERIFIED
                </span>
              </div>

              {/* Row 2 */}
              <div className="flex items-center justify-between pb-4 border-b border-[#FFFFFF14] text-xs">
                <span className="font-mono text-white">
                  Normalized view &bull; v3.4
                </span>
                <span className="font-mono text-[#E0967D] font-semibold">
                  VERIFIED
                </span>
              </div>

              {/* Row 3 */}
              <div className="flex items-center justify-between pb-4 border-b border-[#FFFFFF14] text-xs">
                <span className="font-mono text-white">
                  Analyst artifact &bull; hypothesis 02
                </span>
                <span className="font-mono text-[#E0967D] font-semibold">
                  VERIFIED
                </span>
              </div>

              {/* Row 4 */}
              <div className="flex items-center justify-between pb-4 border-b border-[#FFFFFF14] text-xs">
                <span className="font-mono text-white">
                  Decision record &bull; pending
                </span>
                <span className="font-mono text-[#94A3B8] font-semibold">
                  OPEN
                </span>
              </div>

              {/* Row 5 */}
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-white">
                  Action receipt &bull; not issued
                </span>
                <span className="font-mono text-[#94A3B8] font-semibold">
                  OPEN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
