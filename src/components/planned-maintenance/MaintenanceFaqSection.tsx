"use client";

import React, { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: "Is customer action required for standard database maintenance?",
    a: "No. All core operational tasks execute with active-passive gateway pairs. Primary tasks reroute to hot replicas automatically without terminating client session tokens.",
  },
  {
    q: "How are timezone offsets handled in maintenance schedules?",
    a: "To ensure defensibility, all schedules are registered on UTC (Coordinated Universal Time) with localized machine offsets (EST/PST) calculated natively on render. We prevent silent hour drift.",
  },
  {
    q: "Can we configure notifications for specific endpoint families?",
    a: "Yes. The Subscription Center allows you to narrow notifications down to specific cloud directories, regions, and integration families (e.g. CrowdStrike sensors vs Entra ID).",
  },
];

export default function MaintenanceFaqSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2]);

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="faq" className="w-full bg-[#F7F5F0] py-16 sm:py-20 lg:py-24 border-b border-[#123B4C]/10">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#C44242]" />
            <span className="font-jetbrains text-xs sm:text-sm font-bold tracking-[0.0833em] text-[#C44242] uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="font-hanken font-extrabold text-3xl sm:text-4xl text-[#0A2029] tracking-tight">
            Detailed architecture and integration constraints
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#123B4C]/10 shadow-xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F0EDE6]/30 transition-colors"
                >
                  <span className="font-hanken font-bold text-base sm:text-lg text-[#0A2029]">
                    {faq.q}
                  </span>
                  <span className="text-[#0A2029] font-jetbrains text-lg font-bold flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-[15px] font-manrope text-[#5E6670] leading-relaxed border-t border-[#123B4C]/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
