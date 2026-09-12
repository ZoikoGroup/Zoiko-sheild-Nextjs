"use client";

import React from "react";
import { motion } from "framer-motion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    id: "1",
    question: "What is Executive Risk Intelligence?",
    answer: "Evidence-linked reporting for Board and executive review.",
  },
  {
    id: "2",
    question: "Does it calculate one universal risk score?",
    answer: "No. Methods, scope and assumptions remain explicit.",
  },
  {
    id: "3",
    question: "Does it decide materiality for the Board?",
    answer: "No. Materiality remains with the authorized governing body.",
  },
  {
    id: "4",
    question: "Can an executive statement be traced to evidence?",
    answer: "Yes. Statements drill down through records, evidence and source authority.",
  },
  {
    id: "5",
    question: "Can AI publish Board conclusions automatically?",
    answer: "No. Required review and approval cannot be bypassed.",
  },
  {
    id: "6",
    question: "Is the destination currently public?",
    answer: "No. Access is controlled and demonstration-led.",
  },
];

const bulletPoints = [
  "Traceable statements",
  "Visible limitations",
  "Governed review",
  "Versioned decisions",
];

export default function ProofAndFaqSection() {
  return (
    <div className="relative w-full bg-[#F0EDE6] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Dark Teal Sticky Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ borderRadius: "24px", backgroundColor: "#123B4C" }}
          className="lg:col-span-5 p-8 sm:p-10 text-white flex flex-col justify-between shadow-lg lg:sticky lg:top-8"
        >
          <div>
            {/* Tag */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-4 h-[1px] bg-[#C8382C]"></span>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8382C] font-mono">
                PROOF BY DESIGN
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-[34px] font-bold tracking-tight mb-8 leading-[1.15]">
              Trust comes from visible evidence, not polished certainty.
            </h2>
          </div>

          {/* Bullet Points */}
          <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
            {bulletPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#1F7A6C] shrink-0" />
                <span className="text-sm sm:text-base font-medium text-[#C2D1D9]">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Title & FAQ List */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col"
        >
          {/* Main Title */}
          <h2 className="text-4xl lg:text-[34px] font-bold text-[#111A1E] tracking-tight mb-10 leading-[1.1]">
            Proof, Trust and Frequently Asked Questions
          </h2>

          {/* FAQ Items */}
          <div className="flex flex-col">
            {faqItems.map((item, index) => {
              const isLast = index === faqItems.length - 1;

              return (
                <div
                  key={item.id}
                  className={`py-6 flex flex-col gap-1.5 ${
                    !isLast ? "border-b border-[#E5E0D5]" : ""
                  }`}
                >
                  <h3 className="text-lg font-bold text-[#111A1E] tracking-tight">
                    {item.question}
                  </h3>
                  <p className="text-sm sm:text-base text-[#4A555B] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
}