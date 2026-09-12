"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileStack, FileX, Calendar, Presentation, Copy } from "lucide-react";

interface DistributionCard {
  id: string;
  title: string;
  badgeText: string;
  icon: React.ComponentType<{ className?: string }>;
}

const distributionCards: DistributionCard[] = [
  {
    id: "1",
    title: "Board pack",
    badgeText: "REVIEW GATED",
    icon: FileStack,
  },
  {
    id: "2",
    title: "PDF export",
    badgeText: "APPROVAL GATED",
    icon: FileX,
  },
  {
    id: "3",
    title: "Scheduled delivery",
    badgeText: "OWNER GATED",
    icon: Calendar,
  },
  {
    id: "4",
    title: "Presentation mode",
    badgeText: "ACCESS GATED",
    icon: Presentation,
  },
  {
    id: "5",
    title: "Offline copy",
    badgeText: "POLICY GATED",
    icon: Copy,
  },
];

export default function ControlledDistribution() {
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
            <span className="w-4 h-[1px] bg-[#1F7A6C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1F7A6C]">
              CONTROLLED DISTRIBUTION
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-[40px] font-bold text-[#111A1E] tracking-tight mb-3 leading-[1.1]">
            Executive Pack and Export Governance
          </h2>

          {/* Description */}
          <p className="text-[#4A555B] text-base sm:text-lg leading-relaxed">
            Every output carries its approval, access and delivery conditions
            with it.
          </p>
        </motion.div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full">
          {distributionCards.map((card, index) => {
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
                  backgroundColor: "#FFFFFF",
                }}
                className="p-6 shadow-sm border border-[#E5E0D5] flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  {/* Icon Box */}
                  <div
                    style={{
                      borderRadius: "12px",
                      backgroundColor: "#E4F0EC",
                    }}
                    className="w-12 h-12 flex items-center justify-center mb-6"
                  >
                    <IconComponent className="w-5 h-5 text-[#1F7A6C]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#111A1E] tracking-tight mb-2">
                    {card.title}
                  </h3>
                </div>

                <div className="pt-4">
                  <span className="text-[11px] font-mono font-semibold text-[#1F7A6C] tracking-widest">
                    {card.badgeText}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
