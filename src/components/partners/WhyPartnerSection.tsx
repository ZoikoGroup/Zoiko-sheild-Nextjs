"use client";

import React from "react";

const valueCards = [
  {
    num: "01",
    title: "Deterministic Interoperability",
    description:
      "No speculative mapping. Every integrated connection is cryptographically matched and synchronized directly from source registries.",
  },
  {
    num: "02",
    title: "Evidence-Aware Delivery",
    description:
      "Enable customers to generate audit-ready compliance proof automatically across all partner-managed controls.",
  },
  {
    num: "03",
    title: "Enterprise-Grade Governance",
    description:
      "Enforce multi-party authorization limits, least-privilege scoping, and strict separation of administrative duties.",
  },
  {
    num: "04",
    title: "Accountable Outcomes",
    description:
      "Transition from loose commercial metrics to verifiable operational states backed by live telemetry verification.",
  },
];

export default function WhyPartnerSection() {
  return (
    <section className="w-full bg-white py-20 px-6 sm:px-8 lg:px-12 border-b border-[#123B4C]/10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="font-mono text-xs sm:text-[13px] font-medium tracking-[0.115em] text-[#C44242] uppercase">
              PARTNER VALUE SYSTEM
            </span>
          </div>

          <h2 className="font-hanken font-extrabold text-3xl sm:text-4xl text-[#0A2029]">
            Ecosystem Principles & Interoperability
          </h2>

          <p className="font-manrope text-base text-[#5E6670] leading-relaxed">
            We believe partnerships shouldn&apos;t rely on trust alone. They must be
            validated continuously by verifiable system states.
          </p>
        </div>

        {/* Why Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueCards.map((c) => (
            <div
              key={c.num}
              className="bg-[#F7F5F0] rounded-xl p-6 border border-[#123B4C]/5 flex flex-col justify-start space-y-4 hover:border-[#123B4C]/20 transition-all duration-200"
            >
              <span className="font-mono text-sm font-bold text-[#C44242]">
                {c.num}
              </span>
              <h3 className="font-hanken font-extrabold text-xl text-[#0A2029] leading-snug">
                {c.title}
              </h3>
              <p className="font-manrope text-sm leading-relaxed text-[#5E6670]">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
