"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TwoWaysToStart() {
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

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header Section */}
        <div className="text-center mb-12 flex flex-col items-center max-w-3xl">
          {/* Tag */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-4 h-[2px] bg-[#E0402F]"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#E0402F] uppercase">
              TWO WAYS TO START
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[34px] font-bold text-[#0B192C] leading-[1.15] tracking-tight mb-4"
          >
            Independent offers. Neither is the default.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#6B7280] font-normal leading-relaxed"
          >
            These are peer entry points with equal standing. There&apos;s no
            recommended badge, no preferred path, and neither is a prerequisite
            for the other.
          </motion.p>
        </div>

        {/* Two Offers Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-10"
        >
          {/* Offer 1: Managed Defense */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-8 sm:p-10 flex flex-col justify-between shadow-xs">
            <div className="mb-8">
              <div className="text-[10px] font-mono tracking-widest text-[#9CA3AF] uppercase mb-3">
                SECURITY-LED ENTRY
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C] mb-4">
                Managed Defense
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-normal">
                Operated detection, investigation and response by our analysts,
                working against your environment. Operational scope and
                exclusions are stated plainly in the service terms rather than
                implied.
              </p>
            </div>

            <div>
              <a
                href="#"
                className="px-5 py-3 hover:bg-[#F3F4F6] text-[#0B192C] border border-[#E5E7EB] font-semibold text-xs sm:text-sm rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
              >
                <span>Explore Managed Defense</span>
                <span className="text-sm">→</span>
              </a>
            </div>
          </div>

          {/* Offer 2: Continuous Assurance */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-8 sm:p-10 flex flex-col justify-between shadow-xs">
            <div className="mb-8">
              <div className="text-[10px] font-mono tracking-widest text-[#9CA3AF] uppercase mb-3">
                ASSURANCE-LED ENTRY
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C] mb-4">
                Continuous Assurance
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-normal">
                Ongoing control and evidence assurance, run against your
                existing estate. Fully independent from Managed Defense — not a
                follow-on, not an upsell, not a tier.
              </p>
            </div>

            <div>
              <a
                href="#"
                className="px-5 py-3 hover:bg-[#F3F4F6] text-[#0B192C] border border-[#E5E7EB] font-semibold text-xs sm:text-sm rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
              >
                <span>Explore Continuous Assurance</span>
                <span className="text-sm">→</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Neutral Compare Button */}
        <motion.div variants={itemVariants}>
          <a
            href="#"
            className="px-6 py-3.5 hover:bg-[#e4e3dd] text-[#0B192C] border border-[#E2E1DC] font-semibold text-xs sm:text-sm rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
          >
            Compare the two neutrally
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
