"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function AssuranceQuestionsSection() {
  return (
    <section className="w-full bg-[#F0EDE6] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#1F7A6C]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#1F7A6C] uppercase">
              WHO THIS IS FOR
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
            Assurance questions, made explicit.
          </h2>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Each stakeholder sees the boundaries, source records and decisions
            relevant to their role.
          </p>
        </div>

        {/* Cards Grid: 3 columns layout based on visual structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Card 1: CISO / SECURITY LEADERSHIP */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#2E7D32] uppercase block mb-2">
                CISO / SECURITY LEADERSHIP
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                What assurance work is in scope, what evidence supports it, and
                what remains a customer decision?
              </h3>
            </div>
          </div>

          {/* Card 2: GRC / COMPLIANCE LEADERSHIP */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#2E7D32] uppercase block mb-2">
                GRC / COMPLIANCE LEADERSHIP
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                How can controls, tests, assessments, exceptions and evidence
                support an assurance engagement?
              </h3>
            </div>
          </div>

          {/* Card 3: AUDIT / ASSURANCE STAKEHOLDERS */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#2E7D32] uppercase block mb-2">
                AUDIT / ASSURANCE STAKEHOLDERS
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                What can be inspected, and what does ZolikoShield not claim to
                certify or attest?
              </h3>
            </div>
          </div>

          {/* Card 4: PROCUREMENT / RISK */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#2E7D32] uppercase block mb-2">
                PROCUREMENT / RISK
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                What is the service boundary, responsibility model and proof
                posture?
              </h3>
            </div>
          </div>

          {/* Card 5: SECURITY OPERATIONS */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#2E7D32] uppercase block mb-2">
                SECURITY OPERATIONS
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                Does Continuous Assurance replace or depend on Managed Defense?
              </h3>
            </div>
          </div>

          {/* Card 6: EXECUTIVE / BOARD */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#2E7D32] uppercase block mb-2">
                EXECUTIVE / BOARD
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                How is assurance context connected to evidence and risk without
                hiding limitations?
              </h3>
            </div>
          </div>

          {/* Card 7: ARCHITECTURE / ENGINEERING */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#2E7D32] uppercase block mb-2">
                ARCHITECTURE / ENGINEERING
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                What source records and access boundaries exist?
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom Alert/Note Banner */}
        <div className="bg-[#FAF0ED] rounded-2xl p-4 border border-[#E04F2E]/30 flex items-center gap-3">
          <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#E04F2E] shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#E04F2E]" />
          </div>
          <p className="text-xs sm:text-sm text-[#0F172A] font-medium leading-relaxed">
            Continuous Assurance is an independent assurance-led starting path
            &mdash; not a substitute for customer judgment or Managed Defense.
          </p>
        </div>
      </div>
    </section>
  );
}
