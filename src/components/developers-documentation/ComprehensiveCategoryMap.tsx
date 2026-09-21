"use client";

import React from "react";
import { motion } from "framer-motion";

interface CategoryItem {
  title: string;
  badgeText: string;
  badgeStyle: string;
  description: string;
}

const categories: CategoryItem[] = [
  {
    title: "Getting Started",
    badgeText: "RECOMMENDED",
    badgeStyle: "bg-[#E6F4EA] text-[#137333] border-[#CEEAD6]",
    description: "12 articles addressing direct-to-evidence pipeline mapping.",
  },
  {
    title: "Platform Concepts",
    badgeText: "FOUNDATIONAL",
    badgeStyle: "bg-[#E8F0FE] text-[#1A73E8] border-[#D2E3FC]",
    description: "18 articles addressing direct-to-evidence pipeline mapping.",
  },
  {
    title: "Integrations & Catalog",
    badgeText: "CONNECTOR SCHEMAS",
    badgeStyle: "bg-[#EEF2FF] text-[#4F46E5] border-[#E0E7FF]",
    description: "42 articles addressing direct-to-evidence pipeline mapping.",
  },
  {
    title: "Security & Trust",
    badgeText: "AUDITED INTEGRITY",
    badgeStyle: "bg-[#E6FFFA] text-[#0D9488] border-[#CCFBF1]",
    description: "9 articles addressing direct-to-evidence pipeline mapping.",
  },
  {
    title: "Operate & Troubleshoot",
    badgeText: "DIAGNOSTIC GUIDES",
    badgeStyle: "bg-[#FEF3C7] text-[#B45309] border-[#FDE68A]",
    description: "14 articles addressing direct-to-evidence pipeline mapping.",
  },
  {
    title: "Compliance & Evidence",
    badgeText: "REGULATORY COMPLIANT",
    badgeStyle: "bg-[#DCFCE7] text-[#15803D] border-[#BBF7D0]",
    description: "16 articles addressing direct-to-evidence pipeline mapping.",
  },
  {
    title: "API Reference",
    badgeText: "SPECIFICATION V2.0",
    badgeStyle: "bg-[#E0F2FE] text-[#0284C7] border-[#BAE6FD]",
    description: "118 endpoints addressing direct-to-evidence pipeline mapping.",
  },
  {
    title: "Webhooks Catalog",
    badgeText: "EVENT DRIVEN",
    badgeStyle: "bg-[#EDE9FE] text-[#7C3AED] border-[#DDD6FE]",
    description: "24 event types addressing direct-to-evidence pipeline mapping.",
  },
  {
    title: "Release Notes",
    badgeText: "ACTIVE RELEASES",
    badgeStyle: "bg-[#E2E8F0] text-[#475569] border-[#CBD5E1]",
    description: "Versioned logs addressing direct-to-evidence pipeline mapping.",
  },
];

export default function ComprehensiveCategoryMap() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  return (
    <section className="w-full bg-[#F5F2EB] py-16 sm:py-20 lg:py-24 px-6 md:px-12 lg:px-16 font-sans text-[#111827] border-t border-[#E7E5DF]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          {/* Tag / Kicker */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#BE3A34]" />
            <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#BE3A34] uppercase">
              STRUCTURED ARCHITECTURE
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0B1B26] tracking-tight">
            Explore the comprehensive category map
          </h2>
        </div>

        {/* 9 Category Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E7E5DF] shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#DCD8CF] transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Header Row: Title & Badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0B1B26] leading-snug">
                    {cat.title}
                  </h3>
                  <span
                    className={`font-mono text-[9.5px] sm:text-[10px] font-bold tracking-wider px-2 py-0.5 rounded border whitespace-nowrap shrink-0 uppercase ${cat.badgeStyle}`}
                  >
                    {cat.badgeText}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[12.5px] sm:text-[13px] text-[#5A6874] leading-[1.6]">
                  {cat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
