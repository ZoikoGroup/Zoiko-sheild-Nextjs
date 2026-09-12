"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  AlertTriangle,
  FileText,
  GitBranch,
  History,
} from "lucide-react";

interface TraceabilityCard {
  id: string;
  number: string;
  title: string;
  description: string;
  footerText: string;
  icon: React.ComponentType<{ className?: string }>;
  highlighted?: boolean;
}

const traceabilityCards: TraceabilityCard[] = [
  {
    id: "1",
    number: "01",
    title: "Executive Statement",
    description: "Concise claim for the decision-maker.",
    footerText: "No implied certainty beyond its sources.",
    icon: MessageSquare,
  },
  {
    id: "2",
    number: "02",
    title: "Risk Record",
    description: "Structured risk, owner and status.",
    footerText: "Bound to the stated scope and method.",
    icon: AlertTriangle,
  },
  {
    id: "3",
    number: "03",
    title: "Evidence Set",
    description: "Supporting and contradictory records.",
    footerText: "Freshness and completeness remain visible.",
    icon: FileText,
  },
  {
    id: "4",
    number: "04",
    title: "Source Authority",
    description: "System, person or document of origin.",
    footerText: "Authority is explicit, never inferred.",
    icon: GitBranch,
  },
  {
    id: "5",
    number: "05",
    title: "Decision History",
    description: "Prior questions, reviews and outcomes.",
    footerText: "Records process, not substituted judgment.",
    icon: History,
    highlighted: true,
  },
];

export default function TraceabilitySection() {
  return (
    <div className="relative w-full bg-[#F0EDE6] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
      <div className="relative z-10 max-w-7xl w-full flex flex-col items-start">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-col items-start max-w-3xl mx-auto text-center w-full"
        >
          {/* Subheading / Tag */}
          <div className="flex items-center justify-center gap-2 mb-4 w-full">
            <span className="w-4 h-[1px] bg-[#1F7A6C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1F7A6C]">
              TRACEABILITY
            </span>
            <span className="w-4 h-[1px] bg-[#1F7A6C]"></span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-[42px] font-bold text-[#111A1E] tracking-tight mb-4 leading-[1.1]">
            Evidence Drill-Down and Traceability
          </h2>

          {/* Description */}
          <p className="text-[#4A555B] text-base sm:text-lg leading-relaxed max-w-2xl">
            Move from a board-ready statement to the source authority and
            decision history without losing context.
          </p>
        </motion.div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full">
          {traceabilityCards.map((card, index) => {
            const IconComponent = card.icon;
            const isHighlighted = card.highlighted;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                style={{
                  borderRadius: "20px",
                  backgroundColor: isHighlighted ? "#123B4C" : "#FFFFFF",
                }}
                className={`p-6 shadow-sm border flex flex-col justify-between min-h-[360px] ${
                  isHighlighted
                    ? "border-[#123B4C] text-white"
                    : "border-[#E5E0D5] text-[#111A1E]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-[11px] font-mono font-semibold tracking-widest ${
                        isHighlighted ? "text-[#8C9BA5]" : "text-[#C8382C]"
                      }`}
                    >
                      {card.number}
                    </span>
                  </div>

                  {/* Icon Box */}
                  <div
                    style={{
                      borderRadius: "12px",
                      backgroundColor: isHighlighted ? "#FFFFFF0D" : "#E4F0EC",
                    }}
                    className="w-12 h-12 flex items-center justify-center mb-6"
                  >
                    <IconComponent
                      className={`w-5 h-5 ${
                        isHighlighted ? "text-white" : "text-[#1F7A6C]"
                      }`}
                    />
                  </div>

                  <h3
                    className={`text-lg font-bold tracking-tight mb-3 ${
                      isHighlighted ? "text-white" : "text-[#111A1E]"
                    }`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      isHighlighted ? "text-[#C2D1D9]" : "text-[#4A555B]"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>

                <div
                  className={`pt-5 text-xs leading-relaxed border-t ${
                    isHighlighted
                      ? "border-white/10 text-[#9BB1BC]"
                      : "border-[#E5E0D5] text-[#7C8890]"
                  }`}
                >
                  {card.footerText}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
