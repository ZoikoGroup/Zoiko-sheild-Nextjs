"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PlatformHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  } as const;

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  } as const;

  return (
    <section className="w-full min-h-screen flex items-center justify-center p-6 md:p-12 lg:p-20 font-sans text-[#111827]">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          className="lg:col-span-6 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subtitle / Tag */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-4 h-[2px] bg-[#E0402F]"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#E0402F] uppercase">
              PLATFORM
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#0B192C] leading-[1.1] tracking-tight mb-8"
          >
            A horizontal platform <br className="hidden sm:inline" />
            for security, assurance, <br className="hidden sm:inline" />
            <span className="text-[#E0402F]">and evidence.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-[#6B7280] leading-relaxed mb-10 max-w-xl font-normal"
          >
            Connect threat defense, governed response, control assurance and
            evidence across the tools you already run. ZoikoShield is an
            operating layer over your existing security estate — not a
            replacement for it.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <a
              href="#"
              className="px-6 py-3.5 bg-[#E0402F] hover:bg-[#c93525] text-white font-semibold text-sm rounded-lg transition-colors duration-200 shadow-sm inline-flex items-center justify-center"
            >
              Book a Demo
            </a>
            <a
              href="#"
              className="px-6 py-3.5 hover:bg-[#e4e3dd] text-[#0B192C] border border-[#E2E1DC] font-semibold text-sm rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              See how ZoikoShield works
            </a>
          </motion.div>

          {/* Footer Note */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm text-[#888E9B] leading-relaxed max-w-lg"
          >
            Proof is not behind a form. Evidence, Trust Center, Docs and System
            Status are all reachable without booking anything.
          </motion.p>
        </motion.div>

        {/* Right Column: Image Component */}
        <motion.div
          className="lg:col-span-6 flex justify-center lg:justify-end"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-full overflow-hidden shadow-2xl">
            <Image
              src="/images/platform/1.png"
              alt="A horizontal platform for security, assurance, and evidence graphic"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
