"use client";

import React from "react";
import Image from "next/image";

export default function ActivationGovernanceSection() {
  const activationFields = [
    { label: "criteria_set_id", status: "Required and verified" },
    { label: "qualifying condition", status: "Required and verified" },
    { label: "non-qualifying condition", status: "Required and verified" },
    { label: "service eligibility", status: "Required and verified" },
    { label: "required requester identity", status: "Required and verified" },
    { label: "authority", status: "Required and verified" },
    { label: "approval", status: "Required and verified" },
  ];

  const activationSteps = [
    { number: "01", label: "Requested", active: false },
    { number: "02", label: "Under review", active: false },
    { number: "03", label: "Activated", active: true },
    { number: "04", label: "Rejected", active: false },
    { number: "05", label: "Withdrawn", active: false },
    { number: "06", label: "Expired", active: false },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 text-white bg-[#0A2029] font-sans overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute bg-[#0A202994] inset-0 z-0">
        <Image
          src="/images/incident/3.png"
          alt="Activation Governance Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C44242]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E0967D] uppercase">
              ACTIVATION GOVERNANCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#FFFFFFAD] tracking-tight mb-4 leading-[1.15]">
            Authority before action.
          </h2>

          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-3xl">
            Every activation request is qualified, attributable, approved and
            recorded before the service route changes state.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-8">
          {/* Left Column: Activation request card */}
          <div className="lg:col-span-7 bg-[#0B2732] backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-6">
              Activation request
            </h3>

            <div className="divide-y divide-white/10">
              {activationFields.map((field) => (
                <div
                  key={field.label}
                  className="py-3 flex items-center justify-between text-xs sm:text-sm font-mono first:pt-0 last:pb-0"
                >
                  <span className="text-[#E0967D]">{field.label}</span>
                  <span className="text-[#FFFFFFAD] font-medium text-[11px]">
                    {field.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Activation step states */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {activationSteps.map((step) => (
              <div
                key={step.number}
                className={`rounded-2xl px-5 py-4 flex items-center gap-4 border transition-all ${
                  step.active
                    ? "bg-[#C44242] border-[#C44242] text-white shadow-lg shadow-[#C44242]/20"
                    : "bg-[#FFFFFF0D] border-[#FFFFFF24] text-white/90"
                }`}
              >
                <span className="text-xs font-mono opacity-80">
                  {step.number}
                </span>
                <span className="text-xs sm:text-sm text-[#E0967D] font-semibold tracking-wide">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={() => console.log("Inspect Activation Contract clicked")}
            className="px-5 py-2.5 rounded-xl bg-[#C44242] hover:bg-[#B03A3A] text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-[#C44242]/20 cursor-pointer"
          >
            Inspect Activation Contract
          </button>
        </div>
      </div>
    </section>
  );
}
