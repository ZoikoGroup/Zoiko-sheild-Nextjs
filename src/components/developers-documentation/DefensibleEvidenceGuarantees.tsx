"use client";

import React from "react";
import { motion } from "framer-motion";

interface GuaranteeItem {
  title: string;
  description: string;
}

const guarantees: GuaranteeItem[] = [
  {
    title: "Least-Privilege API",
    description:
      "No default write access. Modify host trust states or directory sessions only after configuring distinct approval keys.",
  },
  {
    title: "Sanitized Code Logs",
    description:
      "All metadata, webhook payloads, and configuration templates are sanitized of raw client identifiers and secrets automatically.",
  },
  {
    title: "Immutability Hashing",
    description:
      "Synchronized telemetry is matched, verified, and mapped onto a tamper-resistant SHA-256 ledger in your region.",
  },
];

export default function DefensibleEvidenceGuarantees() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
        ease: [0.215, 0.61, 0.355, 1],
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
              SECURITY PRACTICE
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0B1B26] tracking-tight mb-3">
            Defensible evidence guarantees
          </h2>

          {/* Subtitle */}
          <p className="text-[14.5px] sm:text-base text-[#52606D] max-w-3xl leading-relaxed">
            Zoiko Shield does not declare automatic compliance. We collect validated source telemetry cryptographically to build a resilient, defensible record.
          </p>
        </div>

        {/* 3 Guarantee Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {guarantees.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-[#E7E5DF] shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#DCD8CF] transition-all duration-200"
            >
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#0B1B26] mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-[13px] sm:text-[13.5px] text-[#5A6874] leading-[1.65]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
