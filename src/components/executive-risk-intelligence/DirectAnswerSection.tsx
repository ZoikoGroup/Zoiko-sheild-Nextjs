"use client";

import React from "react";
import { motion } from "framer-motion";

interface DirectAnswerCard {
  id: string;
  number: string;
  title: string;
  description: string;
}

const answerCards: DirectAnswerCard[] = [
  {
    id: "1",
    number: "01",
    title: "Change Context",
    description: "What changed, why it changed, and why it matters now.",
  },
  {
    id: "2",
    number: "02",
    title: "Evidence Path",
    description: "Direct links from each statement to authoritative evidence.",
  },
  {
    id: "3",
    number: "03",
    title: "Decision Questions",
    description: "The question requiring Board or executive attention.",
  },
  {
    id: "4",
    number: "04",
    title: "Owner & Review",
    description: "Accountable owner, independent reviewer and review date.",
  },
  {
    id: "5",
    number: "05",
    title: "Scope & Time Basis",
    description: "Method, reporting perimeter and comparison period.",
  },
  {
    id: "6",
    number: "06",
    title: "Assumptions & Limitations",
    description: "Visible caveats, uncertainty and unresolved conflicts.",
  },
];

export default function DirectAnswerSection() {
  return (
    <div className="relative w-full bg-[#F7F5F0] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-start">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-col items-start max-w-2xl"
        >
          {/* Subheading / Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#C8382C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8382C]">
              DIRECT ANSWER
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-[40px] font-bold text-[#111A1E] tracking-tight mb-3 leading-[1.1]">
            What Changed and Why It Matters
          </h2>

          {/* Description */}
          <p className="text-[#4A555B] text-base sm:text-lg leading-relaxed">
            A reporting frame designed around the questions executives actually
            ask &mdash; with evidence, ownership and boundaries in the same
            view.
          </p>
        </motion.div>

        {/* 3x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {answerCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              style={{ borderRadius: "20px" }}
              className="bg-white p-8 shadow-sm border border-[#E5E0D5] flex flex-col gap-6 min-h-[220px]"
            >
              <span className="text-[11px] font-mono font-semibold text-[#C8382C] tracking-widest">
                {card.number}
              </span>
              <div>
                <h3 className="text-xl font-bold text-[#111A1E] tracking-tight mb-2">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-[#4A555B] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
