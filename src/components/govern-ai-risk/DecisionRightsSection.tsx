"use client";

import React from "react";

interface DecisionCard {
  id: string;
  dotColor: string;
  title: string;
  description: string;
  isDark?: boolean;
}

const CARDS: DecisionCard[] = [
  {
    id: "d1",
    dotColor: "bg-[#10B981]",
    title: "Advisory",
    description: "AI proposes; an accountable person decides.",
  },
  {
    id: "d2",
    dotColor: "bg-[#0F172A]",
    title: "Review-required",
    description: "A person must review output before use.",
  },
  {
    id: "d3",
    dotColor: "bg-[#D97706]",
    title: "Approval-required",
    description: "Named authority must explicitly approve.",
  },
  {
    id: "d4",
    dotColor: "bg-[#C44242]",
    title: "Prohibited",
    description: "The use case cannot proceed in this context.",
    isDark: true,
  },
];

export default function DecisionRightsSection() {
  return (
    <section className="w-full bg-[#F0EDE6] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto text-left">
        {/* Eyebrow and Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C44242]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
              DECISION RIGHTS
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[42px] font-extrabold text-[#0F172A] tracking-tight mb-4 leading-[1.2]">
            Keep consequential authority with accountable people.
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Define what AI may recommend, what requires review, what requires
            approval and what must never be automated.
          </p>
        </div>

        {/* 4 Cards Grid Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className={`rounded-3xl p-6 flex flex-col justify-between min-h-[200px] border transition-all ${
                card.isDark
                  ? "bg-[#123B4C] border-[#123B4C] text-white shadow-lg"
                  : "bg-white border-[#E2E8F0] text-[#0F172A]"
              }`}
            >
              <div>
                <span
                  className={`w-2.5 h-2.5 rounded-full block mb-5 ${card.dotColor}`}
                />

                <h3 className="text-lg font-bold mb-2">{card.title}</h3>

                <p
                  className={`text-xs leading-relaxed ${card.isDark ? "text-[#94A3B8]" : "text-[#64748B]"}`}
                >
                  {card.description}
                </p>
              </div>

              <span
                className={`text-[9px] font-mono font-bold tracking-widest uppercase mt-6 ${card.isDark ? "text-[#10B981]" : "text-[#C44242]"}`}
              >
                HUMAN AUTHORITY RECORDED
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Red Border */}
        <div className="bg-white rounded-2xl p-5 border border-[#C44242] flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h4 className="text-sm font-bold text-[#0F172A] mb-1">
              Unknown decision right
            </h4>
            <p className="text-xs text-[#64748B]">
              Use is paused until ownership, authority and the permitted action
              are resolved.
            </p>
          </div>

          <button
            type="button"
            className="px-5 py-2.5 rounded-xl border border-[#0F172A]/20 bg-white hover:bg-[#F8FAFC] text-[#0F172A] text-xs font-bold transition-all cursor-pointer shrink-0"
          >
            Review Responsible AI
          </button>
        </div>

        {/* Footer Disclaimer */}
        <p className="text-[10px] text-[#94A3B8] leading-relaxed">
          Governance records do not guarantee AI safety, fairness, accuracy,
          legal compliance, certification or regulator acceptance.
        </p>
      </div>
    </section>
  );
}
