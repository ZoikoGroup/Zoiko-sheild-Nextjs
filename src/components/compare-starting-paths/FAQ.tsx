"use client";

import React from "react";
import { motion } from "framer-motion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: "what-is-managed-defense",
    question: "What is Managed Defense?",
    answer:
      "A security-operations service path focused on detection, investigation and governed response.",
  },
  {
    id: "what-is-continuous-assurance",
    question: "What is Continuous Assurance?",
    answer:
      "An assurance service path focused on ongoing control/evidence assurance and audit-readiness support.",
  },
  {
    id: "which-service-is-better",
    question: "Which service is better?",
    answer:
      "Neither is defined as better. They solve different operating jobs.",
  },
  {
    id: "do-i-need-managed-defense",
    question: "Do I need Managed Defense before Continuous Assurance?",
    answer: "No. The paths are independent.",
  },
  {
    id: "can-we-use-both",
    question: "Can we use both?",
    answer:
      "Potentially, when the organization has both needs; scope and terms remain separate.",
  },
  {
    id: "does-either-service-guarantee-compliance",
    question: "Does either service guarantee compliance?",
    answer: "No.",
  },
  {
    id: "how-do-we-confirm-pricing",
    question: "How do we confirm pricing or service levels?",
    answer: "Through approved commercial qualification and contract sources.",
  },
  {
    id: "what-if-we-have-an-active-incident",
    question: "What if we have an active incident?",
    answer: "Use the approved incident/support route.",
  },
];

export default function FAQ() {
  return (
    <div className="relative w-full bg-[#F6F4EE] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-start">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-col items-start"
        >
          {/* Subheading / Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#C8382C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8382C]">
              FAQ
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-[44px] font-bold text-[#111A1E] tracking-tight mb-3 leading-[1.1]">
            Direct answers, without the ranking.
          </h2>

          {/* Description */}
          <p className="text-[#4A555B] text-base sm:text-lg leading-relaxed">
            The right starting point depends on the operating job, accountable
            owners and approved scope.
          </p>
        </motion.div>

        {/* FAQ List Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-full flex flex-col border-t border-[#E5E0D5]"
        >
          {faqData.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 px-4 sm:px-6 border-b border-[#E5E0D5] items-start"
            >
              {/* Question Column */}
              <div className="md:col-span-5">
                <h3 className="text-base sm:text-lg font-bold text-[#111A1E] tracking-tight leading-snug">
                  {item.question}
                </h3>
              </div>

              {/* Answer Column */}
              <div className="md:col-span-7">
                <p className="text-sm sm:text-base text-[#4A555B] font-normal leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
