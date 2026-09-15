"use client";

import React from "react";

export default function ProofFaqSection() {
  return (
    <section className="relative w-full bg-[#F7F5F0] py-16 md:py-24 text-[#071829] font-sans overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-left">
        {/* Top Tag & Title */}
        <div className="flex flex-col items-start mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
              10 &bull; PROOF + FAQ
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#071829] tracking-tight leading-[1.15] mb-3">
            Questions deserve direct answers.
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] max-w-xl leading-relaxed mb-6">
            Inspect the boundaries, source of authority and current readiness
            behind every claim.
          </p>

          {/* Action Link Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#trust-center"
              className="inline-flex items-center gap-2 bg-[#E4F0EC] hover:bg-[#E2DDD3] text-[#071829] font-mono text-xs px-4 py-2 rounded-xl border border-[#DCD5C9] transition-colors"
            >
              Trust Center &nearr;
            </a>
            <a
              href="#evidence"
              className="inline-flex items-center gap-2 bg-[#E4F0EC] hover:bg-[#E2DDD3] text-[#071829] font-mono text-xs px-4 py-2 rounded-xl border border-[#DCD5C9] transition-colors"
            >
              Evidence &nearr;
            </a>
            <a
              href="#docs"
              className="inline-flex items-center gap-2 bg-[#E4F0EC] hover:bg-[#E2DDD3] text-[#071829] font-mono text-xs px-4 py-2 rounded-xl border border-[#DCD5C9] transition-colors"
            >
              Docs &nearr;
            </a>
            <a
              href="#system-status"
              className="inline-flex items-center gap-2 bg-[#E4F0EC] hover:bg-[#E2DDD3] text-[#071829] font-mono text-xs px-4 py-2 rounded-xl border border-[#DCD5C9] transition-colors"
            >
              System Status &nearr;
            </a>
          </div>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col divide-y divide-[#E2E8F0] border-t border-b border-[#E2E8F0]">
          {/* FAQ Item 01 */}
          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
            <div className="md:col-span-1">
              <span className="font-mono text-xs text-[#E04F2E] font-bold">
                01
              </span>
            </div>
            <div className="md:col-span-11">
              <h3 className="text-base font-bold text-[#071829] mb-1">
                What does ZoikoShield Detection &amp; Response cover?
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Correlated detection, investigation, cases and governed
                response.
              </p>
            </div>
          </div>

          {/* FAQ Item 02 */}
          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
            <div className="md:col-span-1">
              <span className="font-mono text-xs text-[#E04F2E] font-bold">
                02
              </span>
            </div>
            <div className="md:col-span-11">
              <h3 className="text-base font-bold text-[#071829] mb-1">
                Does ZoikoShield respond automatically?
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                No autonomous response claim. R0&ndash;R4 behavior is
                conditional.
              </p>
            </div>
          </div>

          {/* FAQ Item 03 */}
          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
            <div className="md:col-span-1">
              <span className="font-mono text-xs text-[#E04F2E] font-bold">
                03
              </span>
            </div>
            <div className="md:col-span-11">
              <h3 className="text-base font-bold text-[#071829] mb-1">
                What is the difference between correlation and causality?
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Correlation provides relationship and context; it is not proof
                of cause.
              </p>
            </div>
          </div>

          {/* FAQ Item 04 */}
          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
            <div className="md:col-span-1">
              <span className="font-mono text-xs text-[#E04F2E] font-bold">
                04
              </span>
            </div>
            <div className="md:col-span-11">
              <h3 className="text-base font-bold text-[#071829] mb-1">
                Are Security Analytics and Case Management currently available?
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                CONDITIONAL; availability depends on readiness gates.
              </p>
            </div>
          </div>

          {/* FAQ Item 05 */}
          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
            <div className="md:col-span-1">
              <span className="font-mono text-xs text-[#E04F2E] font-bold">
                05
              </span>
            </div>
            <div className="md:col-span-11">
              <h3 className="text-base font-bold text-[#071829] mb-1">
                Where is investigation evidence handled?
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Evidence Ledger &amp; Verification, with lineage and
                completeness.
              </p>
            </div>
          </div>

          {/* FAQ Item 06 */}
          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
            <div className="md:col-span-1">
              <span className="font-mono text-xs text-[#E04F2E] font-bold">
                06
              </span>
            </div>
            <div className="md:col-span-11">
              <h3 className="text-base font-bold text-[#071829] mb-1">
                Does detection establish risk or compliance?
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                No. Those use separate authority and state models.
              </p>
            </div>
          </div>

          {/* FAQ Item 07 */}
          <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
            <div className="md:col-span-1">
              <span className="font-mono text-xs text-[#E04F2E] font-bold">
                07
              </span>
            </div>
            <div className="md:col-span-11">
              <h3 className="text-base font-bold text-[#071829] mb-1">
                Where can I see live service health?
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                System Status is authoritative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
