"use client";

import React from "react";

export default function RecoveryGovernanceSection() {
  const recoveryCards = [
    {
      number: "01",
      title: "Recovery scope",
      description: "Recorded with evidence, owner and current decision state.",
    },
    {
      number: "02",
      title: "Recovery decision",
      description: "Recorded with evidence, owner and current decision state.",
    },
    {
      number: "03",
      title: "Objective / target (only if current authority supplies)",
      description: "Only where current authority supplies the objective.",
    },
    {
      number: "04",
      title: "Action vs outcome",
      description: "Recorded with evidence, owner and current decision state.",
    },
    {
      number: "05",
      title: "Residual risk / unknown",
      description: "Recorded with evidence, owner and current decision state.",
    },
    {
      number: "06",
      title: "Validation",
      description: "Recorded with evidence, owner and current decision state.",
    },
    {
      number: "07",
      title: "Customer responsibility",
      description: "Recorded with evidence, owner and current decision state.",
    },
    {
      number: "08",
      title: "Closure",
      description: "Recorded with evidence, owner and current decision state.",
    },
    {
      number: "09",
      title: "Post-event review",
      description: "Recorded with evidence, owner and current decision state.",
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C44242]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
              RECOVERY GOVERNANCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#0F172A] tracking-tight mb-3 leading-[1.15]">
            Describe recovery without overpromising it.
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Residual state, decisions and limitations remain explicit through
            validation, closure and post-event review.
          </p>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {recoveryCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[14px] p-6 border border-[#E2E8F0] shadow-sm flex flex-col"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded-lg bg-[#123B4C0D] text-[11px] font-mono font-bold text-[#123B4C]">
                    {card.number}
                  </span>
                  <h3 className="text-sm font-bold text-[#0F172A] leading-snug">
                    {card.title}
                  </h3>
                </div>
              </div>
              <div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Notice Box */}
        <div className="p-4 rounded-[14px] bg-[#E4F0EC] border border-[#CBD5E1] text-xs text-[#123B4C] font-medium leading-relaxed mb-8">
          Recovery governance can be described without promising a recovery time
          or successful restoration.
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={() => console.log("Inspect Recovery Governance clicked")}
            className="px-5 py-2.5 rounded-xl border border-[#CBD5E1] hover:border-[#0F172A] text-[#0F172A] text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2 bg-white cursor-pointer shadow-sm"
          >
            Inspect Recovery Governance
          </button>
        </div>
      </div>
    </section>
  );
}
