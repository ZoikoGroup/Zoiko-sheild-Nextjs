"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How are integration partner capabilities verified?",
    answer:
      "Every integration must demonstrate strict determinism inside our staging registry. We do not support speculative API mappings — each write-back or read capability must be proved with cryptographic host telemetry signatures.",
  },
  {
    question: "Do partners inherit Zoiko Shield's SOC2 or compliance status?",
    answer:
      "No. Compliance cannot be inherited by delegation. Partners operate purely within scope boundaries set by the customer's active security policies, verified independently.",
  },
  {
    question: "What happens if a partner's authorization credential expires?",
    answer:
      'Zoiko Shield\'s telemetry core immediately flags the credential state as "Suspended" in the customer\'s evidence ledger, blocking write actions at the auth boundary until validated key-rotation is executed.',
  },
];

export default function PartnerFaqSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleFaq = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="w-full bg-[#F0EDE6] py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="font-mono text-xs sm:text-[13px] font-medium tracking-[0.115em] text-[#C44242] uppercase">
              PARTNERSHIP INTEL
            </span>
          </div>

          <h2 className="font-hanken font-extrabold text-3xl sm:text-4xl text-[#0A2029]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);

            return (
              <div
                key={idx}
                className="bg-white border border-[#123B4C]/10 rounded-xl overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F7F5F0]/50 transition-colors"
                >
                  <h3 className="font-hanken font-extrabold text-base sm:text-lg text-[#0A2029]">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5E6670] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#C44242]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 border-t border-[#123B4C]/5">
                    <p className="font-manrope text-sm leading-relaxed text-[#5E6670] pt-4">
                      {faq.answer}
                    </p>
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
