"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function OperatingModelAndServicesSection() {
  return (
    <section className="w-full bg-[#F0EDE6] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
              OPERATING MODEL + SERVICES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
            Clear roles. Separate services. No forced rip-and-replace.
          </h2>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Consolidate Security Operations is an outcome-led solution. Managed
            Defense is an independent service &mdash; they are not bundled.
          </p>
        </div>

        {/* 3 Cards Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Card 1: Consolidate Security Operations */}
          <div className="bg-white rounded-3xl p-6 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-3">
                Consolidate Security Operations
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Outcome-led coordination across approved tools, signals, cases
                and governed response.
              </p>
            </div>
          </div>

          {/* Card 2: Managed Defense */}
          <div className="bg-white rounded-3xl p-6 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-3">
                Managed Defense
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Independent service with separately verified service coverage
                and contract.
              </p>
            </div>
          </div>

          {/* Card 3: Adjacent capabilities */}
          <div className="bg-white rounded-3xl p-6 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-3">
                Adjacent capabilities
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Continuous Assurance &mdash; Evidence &mdash; Compliance &mdash;
                Risk &mdash; each remains separate.
              </p>
            </div>
          </div>
        </div>

        {/* Roles Badges / Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] text-xs text-[#0F172A] font-medium shadow-sm">
            Security ops owner
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] text-xs text-[#0F172A] font-medium shadow-sm">
            Detection engineer
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] text-xs text-[#0F172A] font-medium shadow-sm">
            Analyst
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] text-xs text-[#0F172A] font-medium shadow-sm">
            Case owner
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] text-xs text-[#0F172A] font-medium shadow-sm">
            Integration owner
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] text-xs text-[#0F172A] font-medium shadow-sm">
            Action approver
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] text-xs text-[#0F172A] font-medium shadow-sm">
            System owner
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] text-xs text-[#0F172A] font-medium shadow-sm">
            Service provider
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] text-xs text-[#0F172A] font-medium shadow-sm">
            Customer executive
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] text-xs text-[#0F172A] font-medium shadow-sm">
            AI assistant
          </span>
        </div>

        {/* Existing SOC / SIEM / EDR coexistence Card */}
        <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm mb-6">
          <h3 className="text-base font-bold text-[#0F172A] mb-3">
            Existing SOC / SIEM / EDR coexistence
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Use the operating stack you already trust. Connect where verified,
            preserve ownership, and avoid unnecessary replacement.
          </p>
        </div>

        {/* Bottom Alert/Note Banner */}
        <div className="bg-[#EBF3F1] rounded-2xl p-4 border border-[#CBD5E1]/60 flex items-center gap-3">
          <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#0F172A] shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#0F172A]" />
          </div>
          <p className="text-xs sm:text-sm text-[#0F172A] font-medium leading-relaxed">
            No bundle; no implied replacement; coexistence where verified.
          </p>
        </div>
      </div>
    </section>
  );
}
