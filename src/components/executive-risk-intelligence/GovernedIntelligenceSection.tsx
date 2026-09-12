"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, GitCompare, Edit3, MessageSquare, Star } from "lucide-react";

interface AiBoundaryCard {
  id: string;
  title: string;
  actionText: string;
  boundaryText: string;
  icon: React.ComponentType<{ className?: string }>;
}

const aiBoundaryCards: AiBoundaryCard[] = [
  {
    id: "1",
    title: "Summarize",
    actionText: "Condense cited evidence",
    boundaryText: "Cannot strengthen certainty",
    icon: FileText,
  },
  {
    id: "2",
    title: "Compare",
    actionText: "Identify versioned differences",
    boundaryText: "Cannot hide incompatible methods",
    icon: GitCompare,
  },
  {
    id: "3",
    title: "Draft",
    actionText: "Prepare review-ready language",
    boundaryText: "Cannot approve its own report",
    icon: Edit3,
  },
  {
    id: "4",
    title: "Answer",
    actionText: "Respond from governed sources",
    boundaryText: "Cannot invent missing evidence",
    icon: MessageSquare,
  },
  {
    id: "5",
    title: "Recommend",
    actionText: "Surface options and conditions",
    boundaryText: "Cannot make Board decisions",
    icon: Star,
  },
];

export default function GovernedIntelligenceSection() {
  return (
    <div className="relative w-full bg-[#0B2732B5] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/executive/3.png"
          alt="Background"
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1116]/90 via-[#0A1116]/70 to-[#0A1116]/90 backdrop-blur-[1px]" />
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 flex flex-col items-center text-center"
        >
          {/* Subheading / Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#C8382C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8382C] font-mono">
              GOVERNED INTELLIGENCE
            </span>
            <span className="w-4 h-[1px] bg-[#C8382C]"></span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-[40px] font-bold text-white tracking-tight mb-4 leading-[1.1]">
            AI Summary and Decision-Rights Boundaries
          </h2>

          {/* Description */}
          <p className="text-[#A0AAB0] text-base max-w-2xl leading-relaxed">
            AI cannot strengthen source certainty, approve its own report, make
            Board decisions, set appetite/tolerance or bypass required review.
          </p>
        </motion.div>

        {/* 5 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 w-full">
          {aiBoundaryCards.map((card, index) => {
            const IconComponent = card.icon;

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
                  backgroundColor: "#123B4C",
                }}
                className="p-6 shadow-lg border border-[#1E4D60] flex flex-col justify-between gap-4"
              >
                <div>
                  {/* Icon Box */}
                  <div
                    style={{
                      borderRadius: "12px",
                      backgroundColor: "#FFFFFF0D",
                    }}
                    className="w-12 h-12 flex items-center justify-center mb-6"
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-4">
                    {card.title}
                  </h3>

                  <p className="text-sm text-[#C2D1D9] leading-relaxed">
                    {card.actionText}
                  </p>
                </div>

                <div className="text-xs font-medium text-[#E0967D] leading-relaxed border-t border-white/10">
                  {card.boundaryText}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
