"use client";

import React from "react";

export default function RollbackRecoverySection() {
  const responsePaths = [
    "Rollback",
    "Recovery",
    "Compensating action",
    "Irreversible",
    "Unknown reversibility",
  ];

  const recoveryContractTags = [
    "Trigger",
    "Eligible authority",
    "Preconditions",
    "Procedure",
    "Time boundary",
    "Residual effects",
    "Evidence",
    "Unsupported cases",
  ];

  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C44242]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
              ROLLBACK / RECOVERY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight mb-4 leading-[1.15]">
            Reversibility is a contract, not a promise.
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Operators see residuals, unsupported cases and unknowns before
            acting &mdash; with distinct paths for undoing effects and restoring
            service.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Response paths */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-between min-h-[200px]">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-6">
                Response paths
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-auto">
              {responsePaths.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-[#E4F0EC] text-[11px] font-mono font-medium text-[#123B4C] tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Recovery contract */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-between min-h-[200px]">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-6">
                Recovery contract
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-auto">
              {recoveryContractTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-[#E4F0EC] text-[11px] font-mono font-medium text-[#123B4C] tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
