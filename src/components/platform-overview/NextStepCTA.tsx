"use client";

import React from "react";
import { motion } from "framer-motion";

export default function NextStepCTA() {
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
    <section className="relative w-full bg-[#071829] py-24 px-6 md:px-12 lg:px-20 font-sans text-white overflow-hidden">
      {/* Radial Gradient overlay from top-center downwards */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px] w-full"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, #E0402F33 0%, #E0402F00 100%)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Tag */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 mb-4"
        >
          <span className="w-4 h-[2px] bg-[#93A6B8]"></span>
          <span className="text-xs font-bold tracking-[0.2em] text-[#93A6B8] uppercase">
            NEXT STEP
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-[34px] font-bold text-white leading-[1.15] tracking-tight mb-6"
        >
          Look at the proof first.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-[#94A3B8] max-w-2xl font-normal leading-relaxed mb-10"
        >
          The Trust Center, the documentation and the evidence explanation are
          all open. When you want to see the platform against your own estate,
          we&apos;ll walk it — including the parts that are still conditional.
        </motion.p>

        {/* Call-to-action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#"
            className="px-6 py-3.5 bg-[#E0402F] hover:bg-[#c93525] text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors duration-200 inline-flex items-center justify-center shadow-md"
          >
            Book a Demo
          </a>
          <a
            href="#"
            className="px-6 py-3.5 bg-transparent hover:bg-white/5 text-white border border-[#1E293B] font-semibold text-xs sm:text-sm rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
          >
            See how ZoikoShield works
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
