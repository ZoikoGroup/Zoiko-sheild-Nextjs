"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function OperatingSequence() {
  const steps = [
    {
      number: "01",
      title: "Connect",
      description: "Detail supplied by product authority",
    },
    {
      number: "02",
      title: "Correlate",
      description: "Detail supplied by product authority",
    },
    {
      number: "03",
      title: "Govern",
      description: "Detail supplied by product authority",
    },
    {
      number: "04",
      title: "Preserve",
      description: "Detail supplied by product authority",
    },
    {
      number: "05",
      title: "Verify",
      description: "Detail supplied by product authority",
    },
  ] as const;

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
            <span className="text-xs font-bold tracking-[0.2em] text-[#E0402F] uppercase">
              THE OPERATING SEQUENCE
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#0B192C] leading-[1.15] tracking-tight mb-4"
          >
            Connect, correlate, govern, preserve, verify.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-[#6B7280] max-w-3xl font-normal leading-relaxed"
          >
            Five verbs, in that order. They describe how work moves through the
            platform — and they are deliberately{" "}
            <span className="italic">not</span> the same thing as the five
            platform layers below.
          </motion.p>
        </div>

        {/* 5-Step Grid Container */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB] overflow-hidden mb-10"
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-6 lg:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Number Header with Line */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-bold text-[#E0402F]">
                    {step.number}
                  </span>
                  <div className="h-[1px] flex-1 bg-[#E5E7EB]"></div>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-[#0B192C] mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs font-mono text-[#888E9B] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Action Button */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <a
            href="#"
            className="px-6 py-3.5 hover:bg-[#e4e3dd] text-[#0B192C] border border-[#E2E1DC] font-semibold text-sm rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
          >
            <span>Read the full explanation</span>
            <ArrowRight className="w-4 h-4 text-[#0B192C]" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
