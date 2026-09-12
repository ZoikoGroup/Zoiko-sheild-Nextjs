"use client";

import React from "react";
import { ShieldCheck, FileText, BookOpen, Activity } from "lucide-react";

export default function TrustAndProofSection() {
  return (
    <section className="w-full bg-[#F0EDE6] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#2E7D32]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#2E7D32] uppercase">
              TRUST + PROOF
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
            Verify the claim. Follow the source.
          </h2>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Buyer-facing proof routes expose security, privacy and assurance
            context without hiding boundaries.
          </p>
        </div>

        {/* Four-Column Grid: Trust Center, Evidence, Docs, System Status */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Trust Center */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#FAF0ED] flex items-center justify-center text-[#E04F2E] mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2 flex items-center gap-1.5">
                Trust Center <span className="text-xs">&nearr;</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Security and privacy posture
              </p>
            </div>
          </div>

          {/* Card 2: Evidence */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#FAF0ED] flex items-center justify-center text-[#E04F2E] mb-6">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2 flex items-center gap-1.5">
                Evidence <span className="text-xs">&nearr;</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Governed source records
              </p>
            </div>
          </div>

          {/* Card 3: Docs */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#FAF0ED] flex items-center justify-center text-[#E04F2E] mb-6">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2 flex items-center gap-1.5">
                Docs <span className="text-xs">&nearr;</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Service and platform guidance
              </p>
            </div>
          </div>

          {/* Card 4: System Status */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#FAF0ED] flex items-center justify-center text-[#E04F2E] mb-6">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2 flex items-center gap-1.5">
                System Status <span className="text-xs">&nearr;</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Live availability history
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
