"use client";

import React from "react";

const phases = [
  {
    phase: "PHASE 01",
    title: "Technical Discovery",
    description:
      "Map directory structures, API endpoints, and expected read-write limits.",
  },
  {
    phase: "PHASE 02",
    title: "Privacy & Security",
    description:
      "Evaluate auth constraints, least privilege configurations, and encryption standards.",
  },
  {
    phase: "PHASE 03",
    title: "Cryptographic Sync",
    description:
      "Configure secure ledger ingestion pipelines with absolute host proof validation.",
  },
];

export default function TechStandardsSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-20 px-6 sm:px-8 lg:px-12 border-b border-[#123B4C]/10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="font-mono text-xs sm:text-[13px] font-medium tracking-[0.115em] text-[#C44242] uppercase">
              DEVELOPMENT LIFECYCLE
            </span>
          </div>

          <h2 className="font-hanken font-extrabold text-3xl sm:text-4xl text-[#0A2029]">
            Integration & Technical Discovery Path
          </h2>

          <p className="font-manrope text-base text-[#5E6670] leading-relaxed">
            Our structured integration track ensures that only verified, secure
            connections enter our customer-facing ecosystem catalog.
          </p>
        </div>

        {/* Discovery Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((item) => (
            <div
              key={item.phase}
              className="bg-white rounded-xl p-6 border border-[#123B4C]/10 flex flex-col justify-start space-y-3 shadow-sm hover:border-[#123B4C]/25 transition-all duration-200"
            >
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#C44242]">
                {item.phase}
              </span>
              <h3 className="font-hanken font-extrabold text-lg text-[#0A2029]">
                {item.title}
              </h3>
              <p className="font-manrope text-sm text-[#5E6670] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
