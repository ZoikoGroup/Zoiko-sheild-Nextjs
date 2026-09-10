"use client";

import React from "react";

export default function ExecutionSection() {
  const executionLayers = [
    { number: "01", label: "Product capability" },
    { number: "02", label: "Organizational authority" },
    { number: "03", label: "Approval" },
    { number: "04", label: "Technical permission" },
    { number: "05", label: "Target state" },
    { number: "06", label: "Service health" },
    { number: "07", label: "Action version" },
    { number: "08", label: "Execution" },
    { number: "09", label: "Result" },
  ];

  const resultStates = [
    "Not started",
    "Queued",
    "Executing",
    "Succeeded",
    "Failed",
    "Partial",
    "Unknown",
    "Stopped",
    "Timed out",
    "Rolled back",
    "Residual effect",
  ];

  return (
    <section className="w-full bg-[#F0EDE6] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C44242]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
              EXECUTION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#0F172A] tracking-tight mb-4 leading-[1.15]">
            Permission is not authority. Authority is not readiness.
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            ZoikoShield evaluates governance and current runtime state
            independently before execution can proceed.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Card: Execution layers */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 md:p-8 border border-[#E2E8F0] shadow-sm">
            <h3 className="text-lg font-bold text-[#0F172A] mb-6">
              Execution layers
            </h3>

            <div className="divide-y divide-[#E2E8F0]/60">
              {executionLayers.map((layer) => (
                <div
                  key={layer.number}
                  className="py-3 flex items-center gap-4 first:pt-0 last:pb-0"
                >
                  <span className="text-xs font-mono text-[#C44242] font-semibold">
                    {layer.number}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">
                    {layer.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card: Result states (Dark Card) */}
          <div className="lg:col-span-6 bg-[#123B4C] rounded-3xl p-6 md:p-8 text-white flex flex-col shadow-xl min-h-[360px]">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">
                Result states
              </h3>

              <p className="text-xs text-[#94A3B8] leading-relaxed mb-8 font-normal">
                Every terminal and non-terminal state is explicit, including
                uncertainty and residual effect.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {resultStates.map((state) => (
                <span
                  key={state}
                  className="px-3.5 py-1.5 rounded-full bg-[#FFFFFF0D] text-[11px] font-mono font-medium text-white tracking-wide"
                >
                  {state}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
