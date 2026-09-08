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
    <section className="relative w-full bg-[#071829] py-28 px-6 md:px-12 lg:px-20 font-sans text-white overflow-hidden">
      {/* Radial Gradient Glow Effect in Center Top/Down */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] pointer-events-none rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(224,64,47,0.20) 0%, rgba(224,64,47,0) 70%)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Tag */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <span className="w-4 h-[2px] bg-[#E0402F]"></span>
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#93A6B8] uppercase">
            NEXT STEP
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-[34px] font-bold text-white leading-[1.2] tracking-tight mb-5"
        >
          Bring your actual stack to the conversation.
        </motion.h2>

        {/* Subtitle Paragraph */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-[#94A3B8] max-w-xl font-normal leading-relaxed mb-8"
        >
          We&apos;ll go through what connects today, on what terms, and what
          would need to be built — including where the honest answer is that it
          doesn&apos;t exist yet.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary Button */}
          <a
            href="#"
            className="w-full sm:w-auto px-6 py-3 bg-[#E0402F] hover:bg-[#C83424] text-white text-sm font-semibold rounded-lg transition-colors duration-200 text-center shadow-xs"
          >
            Book a Demo
          </a>

          {/* Secondary Button */}
          <a
            href="#"
            className="w-full sm:w-auto px-6 py-3 hover:bg-[#13375B] text-white text-sm font-semibold border border-[#FFFFFF24] rounded-lg transition-colors duration-200 text-center shadow-xs"
          >
            Request an integration
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
