"use client";

import React from "react";

export default function ServiceOptionsSection() {
  return (
    <section className="w-full bg-[#F0EDE6] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C44242]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
              SERVICE OPTIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
            Choose the route that exists today.
          </h2>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Card 1: IR Retainer */}
          <div className="bg-white rounded-[20px] p-8 border border-[#C44242] shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#FDF2F2] text-[10px] font-mono font-bold text-[#C44242] tracking-wider uppercase mb-6">
                CONDITIONAL ON DELIVERY READINESS
              </span>

              <h3 className="text-2xl font-extrabold text-[#0F172A] mb-3">
                IR Retainer
              </h3>

              <p className="text-xs sm:text-sm text-[#64748B] mb-6">
                Annual readiness and activation service
              </p>

              <div className="text-xs font-mono text-[#94A3B8] mb-8">
                /services/ir-retainer
              </div>
            </div>

            <div>
              <button
                onClick={() => console.log("Open Gated Service clicked")}
                className="px-5 py-2.5 rounded-xl border border-[#CBD5E1] hover:border-[#0F172A] text-[#0F172A] text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2 bg-white/50 cursor-pointer shadow-sm"
              >
                Open Gated Service
              </button>
            </div>
          </div>

          {/* Card 2: Managed Defense */}
          <div className="bg-[#123B4C] text-white rounded-[20px] p-8 border border-[#0D2A32] shadow-xl flex flex-col">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#FFFFFF18] text-[10px] font-mono font-bold text-[#E0967D] tracking-wider uppercase mb-6">
                ACTIVE
              </span>

              <h3 className="text-2xl font-extrabold text-white mb-3">
                Managed Defense
              </h3>

              <p className="text-xs sm:text-sm text-[#FFFFFFAD] leading-relaxed mb-8">
                Ongoing governed security operations with current delivery
                routes and explicit authority.
              </p>
            </div>
          </div>
        </div>

        {/* Notice Box */}
        <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] text-xs text-[#64748B] leading-relaxed shadow-sm">
          Incident Readiness is not evidence that the customer holds an Incident
          Response Retainer.
        </div>
      </div>
    </section>
  );
}
