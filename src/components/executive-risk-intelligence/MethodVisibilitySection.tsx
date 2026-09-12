"use client";

import React from "react";
import { motion } from "framer-motion";

interface MethodCard {
  id: string;
  title: string;
  description: string;
}

const methodCards: MethodCard[] = [
  {
    id: "1",
    title: "Risk score",
    description: "Method-specific indicator, not universal truth.",
  },
  {
    id: "2",
    title: "Severity",
    description: "Impact within the declared assessment context.",
  },
  {
    id: "3",
    title: "Risk appetite",
    description: "Board-approved posture, never set by AI.",
  },
  {
    id: "4",
    title: "Tolerance threshold",
    description: "Escalation boundary with explicit authority.",
  },
  {
    id: "5",
    title: "Materiality",
    description: "Decision context owned by governing bodies.",
  },
  {
    id: "6",
    title: "Confidence",
    description: "Evidence quality and uncertainty, visibly stated.",
  },
];

export default function MethodVisibilitySection() {
  return (
    <div className="relative w-full bg-[#F0EDE6] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
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
            <span className="w-4 h-[1px] bg-[#1F7A6C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1F7A6C]">
              TRANSPARENT METHOD
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-[40px] font-bold text-[#111A1E] tracking-tight mb-3 leading-[1.1]">
            Method Visibility and Assumptions
          </h2>

          {/* Description */}
          <p className="text-[#4A555B] text-base sm:text-lg leading-relaxed">
            The executive page remains useful without numeric scoring. Prefer
            evidence-linked statements over invented dashboards.
          </p>
        </motion.div>

        {/* 3x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {methodCards.map((card, index) => (
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
              className="bg-white p-8 shadow-sm border border-[#E5E0D5] flex flex-col justify-between min-h-[180px]"
            >
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
