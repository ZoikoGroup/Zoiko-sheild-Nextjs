"use client";

import React from "react";

export const DecisionHistorySection: React.FC = () => {
  const steps = [
    "Create / Link",
    "Investigate",
    "Review",
    "Decide / Escalate",
    "Correct / Preserve",
  ];

  const detailCards = [
    { title: "Review", sub: "who + what + when" },
    { title: "Decision", sub: "type + rationale" },
    { title: "Escalation", sub: "from / to + reason" },
    { title: "Evidence", sub: "references + scope" },
    { title: "Authority", sub: "role + decision right" },
    { title: "Correction", sub: "previous + new + why" },
  ];

  return (
    <section id="decisions" className="w-full bg-[#F5F2EB] py-16 lg:py-20 border-b border-zoiko-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-[#C53B3B]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#C53B3B] font-mono">
              Decision history · #decisions · #history
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151B28] tracking-tight">
            Chronology that never rewrites the past silently.
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-3xl leading-relaxed font-sans">
            Review, recommendation, decision, approval, escalation, override and response authorization remain distinct — including rejected and negative paths.
          </p>
        </div>

        {/* Process Lifecycle Pills Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-4 bg-gray-200/80 rounded-xl text-center font-mono text-xs font-bold text-cyan-950 border border-gray-300/60 shadow-sm"
            >
              {step}
            </div>
          ))}
        </div>

        {/* 6 Detail Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {detailCards.map((card, idx) => (
            <div
              key={idx}
              className="p-5 bg-white rounded-2xl border border-cyan-950/10 shadow-sm space-y-2 text-left hover:border-cyan-950/20 transition-all"
            >
              <h3 className="text-lg font-extrabold text-[#151B28]">{card.title}</h3>
              <p className="text-xs text-gray-500 font-sans">{card.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DecisionHistorySection;
