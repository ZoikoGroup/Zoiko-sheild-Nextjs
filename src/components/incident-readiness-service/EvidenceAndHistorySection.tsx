"use client";

import React from "react";
import Image from "next/image";

export default function EvidenceAndHistorySection() {
  const evidenceCards = [
    {
      title: "Evidence Ledger & Verification",
      description: "Immutable records and cryptographic verification.",
    },
    {
      title: "Case Management",
      description: "One operational thread for people, actions and decisions.",
    },
    {
      title: "Activation history",
      description: "Request, review, authority and state transitions.",
    },
    {
      title: "Response history",
      description: "Approved actions, attestations and outcomes.",
    },
    {
      title: "Communications history",
      description: "Reviewed messages, releases and corrections.",
    },
    {
      title: "Recovery history",
      description: "Residual state, validation and closure.",
    },
  ];

  return (
    <section className="w-full bg-[#F0EDE6] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content & Cards */}
          <div className="lg:col-span-7 text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#C44242]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
                EVIDENCE AND HISTORY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#0F172A] tracking-tight mb-4 leading-[1.15]">
              Every decision leaves a trace.
            </h2>

            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-8">
              Preparation, activation and response evidence remains related to
              the case, its authority and its operational history.
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {evidenceCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 border border-[#E2E8F0] shadow-sm flex flex-col justify-between"
                >
                  <h3 className="text-sm font-bold text-[#0F172A] mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button className="px-5 py-2.5 rounded-xl bg-[#C44242] hover:bg-[#B03A3A] text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-[#C44242]/20 cursor-pointer">
                Open Evidence &rarr;
              </button>

              <button className="px-5 py-2.5 rounded-xl border border-[#CBD5E1] hover:border-[#0F172A] text-[#0F172A] text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2 bg-white cursor-pointer shadow-sm">
                Open Case &rarr;
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E2E8F0] aspect-[4/5]">
              <Image
                src="/images/incident/4.png"
                alt="Evidence and History Monitor"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
