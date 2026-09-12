"use client";

import React from "react";

export default function ConditionalChildrenSection() {
  return (
    <section className="relative w-full bg-[#F7F5F0] py-16 md:py-24 text-[#071829] font-sans overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-left">
        {/* Top Tag & Title */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
              07 &bull; CONDITIONAL CHILDREN
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#071829] tracking-tight leading-[1.15] mb-4">
            Capabilities that appear when they are ready.
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] max-w-2xl leading-relaxed">
            Readiness gates protect the parent platform promise. These
            conditional children are not represented as currently available
            commitments.
          </p>
        </div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Security Analytics Card */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase block mb-3">
                AVAILABLE WHEN READY
              </span>
              <h3 className="text-lg font-bold text-[#071829] mb-2">
                Security Analytics
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Rules, correlation and replay context.
              </p>
            </div>
          </div>

          {/* Case Management Card */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase block mb-3">
                AVAILABLE WHEN READY
              </span>
              <h3 className="text-lg font-bold text-[#071829] mb-2">
                Case Management
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Investigation, evidence, communications and decision history.
              </p>
            </div>
          </div>

          {/* Governed Response Card */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase block mb-3">
                AVAILABLE WHEN READY
              </span>
              <h3 className="text-lg font-bold text-[#071829] mb-2">
                Governed Response
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Decision rights, bounded actions and rollback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
