"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SelectiveConnection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  } as const;

  const coexistenceList = [
    {
      title: "Existing estate first",
      desc: "start from the tools you already run and the approved connector taxonomy.",
    },
    {
      title: "Shared responsibility",
      desc: "your obligations and ours are explicit. We don't control third-party availability or security.",
    },
    {
      title: "Progressive adoption",
      desc: "connect what you need, when you need it.",
    },
    {
      title: "Evidence continuity",
      desc: "connection data may support evidence and assurance, but only within approved evidence semantics.",
    },
    {
      title: "Distinct capabilities",
      desc: "connecting a source does not activate every platform capability.",
    },
  ] as const;

  return (
    <section className="w-full bg-[#071829] py-20 px-6 md:px-12 lg:px-20 font-sans text-white">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header Section */}
        <div className="mb-12">
          {/* Tag */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-4 h-[2px] bg-[#E0402F]"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#93A6B8] uppercase">
              COEXISTENCE
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[34px] font-bold text-white leading-[1.15] tracking-tight mb-4"
          >
            Selective connection, not full-estate onboarding.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-[17px] text-[#94A3B8] max-w-2xl font-normal leading-relaxed"
          >
            You authorize only the systems and modes your use case needs.
            Integrations can be added or changed through governed setup — there
            is no mandatory onboarding of everything you own.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left Card: How coexistence works */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0E2C46] border border-[#FFFFFF24] rounded-xl p-8 flex flex-col justify-between"
          >
            <div>
              {/* Icon Box */}
              <div className="w-8 h-8 rounded bg-[#FFFFFF12] flex items-center justify-center text-[#94A3B8] mb-6">
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-6">
                How coexistence works
              </h3>

              {/* List */}
              <div className="space-y-4">
                {coexistenceList.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 pb-4 border-b border-[#1E3A5F]/60 last:border-0 last:pb-0"
                  >
                    <span className="w-2 h-2 mt-2 border border-[#E0402F] rounded-xs shrink-0 flex items-center justify-center">
                    </span>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      <span className="font-bold text-white">{item.title}</span>{" "}
                      — {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Card: Consolidation claims we don't make */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0E2C46] border border-[#FFFFFF24] rounded-xl p-8 flex flex-col justify-start"
          >
            <div>
              {/* Icon Box */}
              <div className="w-8 h-8 rounded bg-[#FFFFFF12] flex items-center justify-center text-white font-mono text-xs font-bold mb-6">
                ≠
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-6">
                Consolidation claims we don&apos;t make
              </h3>

              {/* Content Paragraphs */}
              <div className="space-y-6 text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-normal">
                <p>
                  Single pane of glass &middot; replace your SIEM &middot;
                  replace your GRC &middot; works with everything &middot; rip
                  and replace. None is supported, and connectivity alone never
                  produces automatic audit or compliance proof.
                </p>

                <p>
                  What is supported: ZoikoShield connects with an existing
                  security and assurance estate through approved integrations,
                  at a scope you control.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
