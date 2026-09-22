"use client";

import React from "react";
import Image from "next/image";

const principles = [
  {
    title: "No Inherited Certification",
    description:
      "Partnerships do not transfer compliance posture. Every system state must be proved independently by the actual tenant environment.",
  },
  {
    title: "No Automatic Access",
    description:
      "Partners carry zero standing permissions. All administrative, support, or advisory read-writes require explicit customer authorization keys.",
  },
  {
    title: "Source Authority Preserved",
    description:
      "Integrations do not duplicate data directories. We verify cryptographically without transferring the underlying database assets.",
  },
];

export default function TrustPrinciplesSection() {
  return (
    <section className="relative w-full bg-[#031220] py-20 px-6 sm:px-8 lg:px-12 overflow-hidden border-b border-white/10">
      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <Image
          src="/images/partners/trust-principles-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#031220]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#E0967D]" />
            <span className="font-mono text-xs sm:text-[13px] font-medium tracking-[0.115em] text-[#E0967D] uppercase">
              GOVERNANCE & TRUST BOUNDARIES
            </span>
          </div>

          <h2 className="font-hanken font-extrabold text-3xl sm:text-4xl text-white">
            Shared Responsibility Safeguards
          </h2>

          <p className="font-manrope text-base text-[#9FB8D6] leading-relaxed">
            We implement structural design boundaries that guarantee
            least-privilege operations across all collaborative networks.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0A0D13]/90 rounded-xl p-6 border border-white/15 flex flex-col justify-start space-y-4 backdrop-blur-sm hover:border-[#E0967D]/40 transition-all duration-200"
            >
              <h3 className="font-hanken font-extrabold text-lg text-white">
                {item.title}
              </h3>
              <p className="font-manrope text-sm leading-relaxed text-[#9FB8D6]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
