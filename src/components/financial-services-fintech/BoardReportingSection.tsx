"use client";

import React from "react";

interface BoardCard {
  tag: string;
  description: string;
}

const BOARD_CARDS: BoardCard[] = [
  {
    tag: "TOP RISKS",
    description: "Business-context risks, trend, affected services, and named owner.",
  },
  {
    tag: "CONTROL RELIABILITY",
    description: "Effectiveness plus unknown, stale, and failed states — visible, not averaged away.",
  },
  {
    tag: "THIRD-PARTY RISK",
    description: "Critical providers, concentration, unresolved issues, overdue reviews.",
  },
  {
    tag: "DECISIONS REQUIRED",
    description: "Explicit decisions, owner, deadline, and the evidence behind each.",
  },
];

export const BoardReportingSection: React.FC = () => {
  return (
    <section className="w-full bg-stone-100 border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        {/* Header */}
        <div className="max-w-3xl flex flex-col items-center text-center gap-3">
          <div className="inline-flex items-center gap-2">
            <div className="w-5 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest">
              BOARD &amp; REGULATOR REPORTING
            </span>
          </div>

          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Turn technical risk into decision-ready exposure.
          </h2>

          <p className="text-gray-500 text-sm sm:text-base font-normal font-['Manrope'] leading-relaxed">
            Board views summarize and link to evidence — they never hide unknown or stale states behind an averaged score.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BOARD_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 hover:outline-cyan-950/25 shadow-xs flex flex-col justify-start items-start gap-2.5 transition-all hover:bg-stone-50"
            >
              <div className="text-slate-600 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-wider">
                {card.tag}
              </div>
              <p className="text-slate-900 text-xs sm:text-sm font-normal font-['Manrope'] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
