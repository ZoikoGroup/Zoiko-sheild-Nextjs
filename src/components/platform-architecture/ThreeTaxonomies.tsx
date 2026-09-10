"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ThreeTaxonomies() {
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
    <section className="w-full bg-[#EEEBE7] py-16 md:py-24 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header Section */}
        <div className="mb-10">
          {/* Tag */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-4 h-[2px] bg-[#E0402F]"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#E0402F] uppercase">
              LAYERS, PLANES AND STEPS
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[34px] font-bold text-[#0B192C] leading-[1.25] lg:leading-[58px] tracking-normal mb-4"
          >
            Three taxonomies. No mapping between them.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#6B7280] max-w-2xl font-normal leading-relaxed"
          >
            These are the three most commonly conflated ideas on an architecture
            page — and conflating them here would invent architecture that
            nobody has approved. They are shown side by side, deliberately
            unconnected.
          </motion.p>
        </div>

        {/* 3D Illustration Container */}
        <motion.div
          variants={itemVariants}
          className="relative w-full rounded-2xl overflow-hidden"
        >
          <Image
            src="/images/platform/5.png"
            alt="Three taxonomies side by side"
            width={1200}
            height={600}
            className="w-full h-auto object-cover display-block"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
