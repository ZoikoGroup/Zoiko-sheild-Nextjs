"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Where is my tenant database physically hosted?",
    answer:
      "Unless specified otherwise in your customized contract, all tenant databases, metadata caches, and telemetry streams are hosted exclusively in AWS region: EU-West-3 (Paris).",
  },
  {
    question: "Is operational telemetry utilized for model training?",
    answer:
      "Absolutely not. Out-of-the-box LLM integrations are governed by enterprise contracts that explicitly prohibit any use of customer inputs for optimization, evaluation, or training.",
  },
  {
    question: "Can we run complete compliance reviews without enabling write permissions?",
    answer:
      "Yes. You can configure full read-only policies. Write permissions are required only if you decide to activate automated containment or directory session resets.",
  },
  {
    question: "How are conflicting device states resolved?",
    answer:
      "If your MDM says a device is compliant but local EDR says it's offline or dead, Zoiko Shield immediately raises a Control Breach Flag, blocking directory access at the boundary.",
  },
];

export default function PrivacyFaqSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2, 3]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-[#F7F5F0] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full flex flex-col gap-10 sm:gap-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.02em] leading-tight">
            Detailed Architecture FAQs
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            Direct answers to strict technical vendor screening questions.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-[#123B4C]/10 rounded-xl overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <h3 className="text-base sm:text-[17px] font-bold text-[#0A2029] tracking-tight">
                    {faq.question}
                  </h3>
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-[#F0EDE6] text-[#0A2029] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-[14px] text-[#5B6670] leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
