"use client";

import React from "react";

const guardrails = [
  {
    title: "No Commercial Co-Sell Coercion",
    description:
      "Partnership is built on technical fit and evidence-based assurance, never forced revenue bundles or high-pressure resale quotas.",
  },
  {
    title: "Standard Documentation Access",
    description:
      "All technical documentation, deployment standards, and API guides are completely public—accessible without registration walls.",
  },
];

export default function EnablementSection() {
  return (
    <section className="w-full bg-white py-20 px-6 sm:px-8 lg:px-12 border-b border-[#123B4C]/10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="font-mono text-xs sm:text-[13px] font-medium tracking-[0.115em] text-[#C44242] uppercase">
              SUPPORT & CO-SELL LIMITS
            </span>
          </div>

          <h2 className="font-hanken font-extrabold text-3xl sm:text-4xl text-[#0A2029]">
            Ecosystem Program Guardrails
          </h2>

          <p className="font-manrope text-base text-[#5E6670] leading-relaxed">
            We govern partnership benefits without commercial embellishment.
            Joint success is defined by real security outcomes.
          </p>
        </div>

        {/* Guardrail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guardrails.map((g, idx) => (
            <div
              key={idx}
              className="bg-[#F7F5F0] rounded-xl p-6 sm:p-8 border border-[#123B4C]/5 flex flex-col justify-start space-y-3 hover:border-[#123B4C]/20 transition-all duration-200"
            >
              <h3 className="font-hanken font-extrabold text-xl text-[#0A2029]">
                {g.title}
              </h3>
              <p className="font-manrope text-sm sm:text-base leading-relaxed text-[#5E6670]">
                {g.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
