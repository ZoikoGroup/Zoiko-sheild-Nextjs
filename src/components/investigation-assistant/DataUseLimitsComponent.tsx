"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

interface CardItem {
  title: string;
  description: string;
}

const cardsData: CardItem[] = [
  {
    title: "The AI stack",
    description:
      "Model, provider, hosting, routing, retrieval, embedding and orchestration implementation are all authority-gated. So are prompt templates, context-window behaviour, source ranking and the citation generator.",
  },
  {
    title: "Performance metrics",
    description:
      "Accuracy, hallucination rate, citation precision and recall, groundedness, latency, throughput and availability are not published. A number without a method and a denominator would mislead rather than inform.",
  },
  {
    title: "Data handling",
    description:
      "Session and history retention, memory, prompt logging, training use, provider data use, residency and subprocessors are answered by Trust and Privacy authority — for the specific feature, not as a blanket claim.",
  },
];

export default function DataUseLimitsComponent() {
  return (
    <div className="min-h-screen bg-[#f6f4f2] text-[#1E293B] font-sans antialiased py-16 px-4 md:px-8 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[1200px]"
      >
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-4 h-[2px] bg-[#DC2626]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#DC2626] uppercase">
              DATA USE, MODEL AND MEASUREMENT LIMITS
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
            What this section deliberately doesn't tell you.
          </h1>
          <p className="text-sm md:text-base text-[#4B5563] max-w-2xl leading-relaxed">
            Several things a reader might reasonably want are not published
            here, because publishing them without authority would be inventing
            them.
          </p>
        </div>

        {/* 3 Columns Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className="bg-[#FFFFFF] border border-[#D1CBD4] rounded-[6px] p-6 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="w-8 h-8 rounded bg-[#EEEBE7] flex items-center justify-center text-[#6B7280] mb-6">
                  <FileText className="w-4 h-4" />
                </div>

                <h2 className="font-bold text-[#111827] text-[15px] mb-3">
                  {card.title}
                </h2>

                <p className="text-xs text-[#4B5563] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Full-Width Card with Red Left Border Accent */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="bg-[#FFFFFF] border border-[#D1CBD4] rounded-[6px] p-6 md:p-8 shadow-sm relative overflow-hidden"
        >
          {/* Left Red Accent Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#E0402F]" />
          <div className="pl-2">
            <h2 className="font-bold text-[#111827] text-[15px] mb-2">
              Synthetic examples only
            </h2>
            <p className="text-xs md:text-[13px] text-[#4B5563] leading-relaxed max-w-5xl">
              Every example on this page is synthetic. Public examples never
              contain live customer incidents, credentials, personal data or
              sensitive security topology — and the question input itself is
              designed not to collect unnecessary secrets.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
