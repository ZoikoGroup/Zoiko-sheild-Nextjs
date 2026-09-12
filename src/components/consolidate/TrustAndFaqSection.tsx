"use client";

import React from "react";

export default function TrustAndFaqSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
              TRUST + FAQ
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-6">
            Direct answers for security leaders.
          </h2>

          {/* Filter Badges / Pills */}
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-1.5 rounded-full bg-white border border-[#CBD5E1] text-xs text-[#0F172A] font-medium shadow-sm">
              Trust Center
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white border border-[#CBD5E1] text-xs text-[#0F172A] font-medium shadow-sm">
              Evidence
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white border border-[#CBD5E1] text-xs text-[#0F172A] font-medium shadow-sm">
              Detection & Response
            </span>
          </div>
        </div>

        {/* FAQ Grid: 2 columns, 3 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-3">
                What does &ldquo;consolidate security operations&rdquo; mean?
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Coordinate approved tools, telemetry, cases and response
                workflows while preserving source identity, ownership, health
                and decision authority.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-3">
                Do I need to replace my SIEM or EDR?
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                No forced replacement. Exact compatibility depends on verified
                integration.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-3">
                How are response actions governed?
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Every action requires canonical authority, preconditions,
                preview, approval and receipt.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-3">
                Can it work with my existing SOC?
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Designed for coexistence. Exact operating model depends on
                verified configuration.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-3">
                Does consolidation guarantee security outcomes?
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                No. Connector support, data modes, response actions and coverage
                vary.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-3">
                What about AI in operations?
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                AI may assist but cannot autonomously set consequential states.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
