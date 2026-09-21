"use client";

import React from "react";

export const ComplianceAuditTrailSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F7F5F0] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <div className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase">
            COMPLIANCE AUDIT TRAIL
          </div>
          <h2 className="text-slate-900 text-3xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Term Evolution &amp; Status Timeline
          </h2>
        </div>

        {/* Timeline Stack */}
        <div className="relative pl-8 sm:pl-10 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-stone-300">
          {/* Timeline Item 1 */}
          <div className="relative flex flex-col justify-start items-start gap-2">
            <div className="size-3 absolute -left-8 sm:-left-10 top-1 bg-red-500 rounded-full ring-4 ring-stone-100" />
            <div className="inline-flex items-center gap-3">
              <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono']">
                2026 REVISION
              </span>
              <div className="px-2 py-0.5 bg-gray-200 rounded-sm text-teal-700 text-[10px] font-bold font-['JetBrains_Mono']">
                Current / Active
              </div>
            </div>
            <h3 className="text-slate-900 text-base font-extrabold font-['Hanken_Grotesk']">
              NIST SP 800-53 Rev. 5 Terminology Adoption
            </h3>
            <p className="text-gray-500 text-xs font-normal font-['Manrope'] leading-relaxed max-w-3xl">
              Integrated comprehensive control descriptions for machine-to-machine
              session verification and zero-trust parameter boundaries.
            </p>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative flex flex-col justify-start items-start gap-2">
            <div className="size-3 absolute -left-8 sm:-left-10 top-1 bg-gray-500 rounded-full ring-4 ring-stone-100" />
            <div className="inline-flex items-center gap-3">
              <span className="text-gray-500 text-xs font-bold font-['JetBrains_Mono']">
                2024 REVISION
              </span>
              <div className="px-2 py-0.5 bg-amber-100 rounded-sm text-amber-700 text-[10px] font-bold font-['JetBrains_Mono']">
                Superseded State
              </div>
            </div>
            <h3 className="text-slate-900 text-base font-extrabold font-['Hanken_Grotesk']">
              NIST SP 800-53 Rev. 4 Legacy Definitions
            </h3>
            <p className="text-gray-500 text-sm font-normal font-['Manrope'] leading-relaxed max-w-3xl">
              Legacy terms focused heavily on boundary firewalls and localized,
              perimeter-based server isolation constraints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
