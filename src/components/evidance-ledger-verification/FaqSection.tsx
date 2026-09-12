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
    id: "1",
    question: "What is the ZoikoShield Evidence Ledger?",
    answer:
      "A governed record of evidence identity, authority, scope, lineage, state, integrity context and history.",
  },
  {
    id: "2",
    question: "What does tamper-evident mean?",
    answer:
      "It means detectable change within a declared method and scope—not immutable, blockchain, or source truth.",
  },
  {
    id: "3",
    question: "Can evidence be independently verified?",
    answer:
      "When compatible material and an authoritative method are available, a scoped result can be reproduced.",
  },
  {
    id: "4",
    question: "What is an evidence package?",
    answer:
      "A versioned manifest of included evidence, exclusions, state summaries and verification support for a stated purpose.",
  },
  {
    id: "5",
    question: "Does verification prove compliance?",
    answer:
      "No. Verification checks declared integrity inputs; it does not establish compliance or certification.",
  },
  {
    id: "6",
    question: "Is the public verifier available?",
    answer:
      "Only when the public-readiness gate is complete. Availability and data-use terms appear before use.",
  },
  {
    id: "7",
    question: "Can evidence be corrected?",
    answer:
      "Yes. Corrections, supersession and withdrawal are recorded in history rather than silently replacing prior states.",
  },
];

export default function FaqSection() {
  return (
    <div className="relative w-full bg-[#F0EDE6] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
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
              10 &mdash; PROOF + FAQ
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-[40px] font-bold text-[#111A1E] tracking-tight mb-3 leading-[1.1]">
            Direct answers, with claim limits built in.
          </h2>

          {/* Description */}
          <p className="text-[#4A555B] text-base max-w-3xl leading-relaxed">
            High-intent questions are answered in plain language while
            authority, availability and non-claims remain visible.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="flex flex-col gap-4 w-full mb-12">
          {faqData.map((item, index) => {
            const isFirst = index === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                style={{ borderRadius: "16px" }}
                className={`p-6 sm:px-8 sm:py-6 shadow-sm border border-[#E5E0D5] grid grid-cols-1 md:grid-cols-12 gap-4 items-center ${
                  isFirst ? "bg-white" : "bg-[#FFFFFF80]"
                }`}
              >
                <div className="md:col-span-5">
                  <h3 className="text-base sm:text-lg font-bold text-[#111A1E] tracking-tight">
                    {item.question}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-sm sm:text-base text-[#4A555B] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white border border-[#D5CFC7] text-[#111A1E] text-sm font-bold tracking-wide hover:bg-[#EAE6DD] transition-colors shadow-sm"
          >
            Trust Center
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white border border-[#D5CFC7] text-[#111A1E] text-sm font-bold tracking-wide hover:bg-[#EAE6DD] transition-colors shadow-sm"
          >
            Docs
          </a>
        </motion.div>
      </div>
    </div>
  );
}
