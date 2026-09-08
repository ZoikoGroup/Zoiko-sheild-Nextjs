"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PlatformArchitectureHero() {
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
    <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Content (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Tag */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-4 h-[2px] bg-[#E0402F]"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#E0402F] uppercase">
              PLATFORM ARCHITECTURE
            </span>
          </motion.div>

          {/* Heading - Adjusted leading-[1.28] and leading-[64px] for spacious line spacing */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-[#0B192C] leading-[1.25] lg:leading-[64px] tracking-normal mb-6 max-w-xl"
          >
            See the public architecture —{" "}
            <span className="text-[#E0402F]">with its boundaries intact.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#6B7280] max-w-xl font-normal leading-relaxed mb-8"
          >
            The current public view of approved layers, planes, trust
            boundaries, deployment models and flows. Where architecture
            authority hasn&apos;t supplied a fact yet, this page shows the gate
            rather than a decorative stack diagram.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            {/* Primary CTA */}
            <a
              href="#"
              className="w-full sm:w-auto px-6 py-3 bg-[#E0402F] hover:bg-[#C83424] text-white text-sm font-semibold rounded-lg transition-colors duration-200 text-center shadow-xs"
            >
              Book a Demo
            </a>

            {/* Secondary CTA */}
            <a
              href="#"
              className="w-full sm:w-auto px-6 py-3 hover:bg-[#E2DFDB] text-[#0B192C] text-sm font-semibold border border-[#E5E7EB] rounded-lg transition-colors duration-200 text-center shadow-xs"
            >
              Explore the Platform
            </a>
          </motion.div>
        </div>

        {/* Right 3D Visual Illustration (5 Cols) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-sm bg-white">
            <Image
              src="/images/platform/4.png"
              alt="Platform Architecture 3D Diagram"
              width={600}
              height={700}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
