"use client";

import React from "react";

export default function HistorySection() {
  const steps = [
    { number: "01", label: "Request" },
    { number: "02", label: "Authority check" },
    { number: "03", label: "Approval" },
    { number: "04", label: "Signing" },
    { number: "05", label: "Execution" },
    { number: "06", label: "Result" },
    { number: "07", label: "Attestation" },
    { number: "08", label: "Stop / cancel" },
    { number: "09", label: "Rollback / recovery" },
    { number: "10", label: "Correction" },
    { number: "11", label: "Supersession" },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 text-white bg-[#0B2732] font-sans overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/response/history.png"
          alt="Document History Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto text-left px-4">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C44242]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E0967D] uppercase">
              HISTORY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white tracking-tight mb-4 leading-[1.15]">
            From request to recovery, nothing disappears.
          </h2>

          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-3xl">
            A continuous chronology preserves decisions, execution outcomes,
            failure handling and later correction.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-11 gap-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#123B4C] backdrop-blur-md rounded-xl p-3.5 border border-white/10 flex flex-col justify-between min-h-[100px]"
            >
              <span className="text-[10px] font-mono font-semibold text-[#E0967D] mb-4">
                {step.number}
              </span>
              <span className="text-[11px] font-medium text-[#E2E8F0] leading-snug">
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
