"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PlatformIntegrations() {
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
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Column: Content */}
        <div className="lg:col-span-6 flex flex-col items-start">
          {/* Tag */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-4 h-[2px] bg-[#E0402F]"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#E0402F] uppercase">
              PLATFORM INTEGRATIONS
            </span>
          </motion.div>

          {/* Main Heading with Highlight */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#0B192C] leading-[1.15] tracking-tight mb-6"
          >
            Connect to the estate you already run —{" "}
            <span className="text-[#E0402F]">on terms you can inspect.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#6B7280] font-normal leading-relaxed mb-6"
          >
            The governed entry to the connector ecosystem. Every integration
            discloses its connection mode, direction, permission scope, data
            handling and health expectation before you authorize anything.
          </motion.p>

          {/* Badges Grid */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-2 mb-8"
          >
            {/* Route State Active */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[10px] font-mono font-bold text-[#047857]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
              ROUTE STATE: ACTIVE
            </span>

            {/* Registry Inventory Unavailable */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#E5E7EB] text-[10px] font-mono font-bold text-[#9CA3AF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D1D5DB]"></span>
              REGISTRY INVENTORY: UNAVAILABLE
            </span>

            {/* Categories Conditional */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[10px] font-mono font-bold text-[#92400E]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]"></span>
              CATEGORIES: CONDITIONAL
            </span>

            {/* WCAG 2.2 AA */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#E5E7EB] text-[10px] font-mono font-bold text-[#6B7280]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9CA3AF]"></span>
              WCAG 2.2 AA
            </span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <a
              href="#"
              className="px-5 py-3 bg-[#E0402F] hover:bg-[#c93525] text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors duration-200 inline-flex items-center justify-center shadow-xs"
            >
              Book a Demo
            </a>
            <a
              href="#"
              className="px-5 py-3 hover:bg-[#e4e3dd] text-[#0B192C] border border-[#E2E1DC] font-semibold text-xs sm:text-sm rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Request an integration
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 text-xs font-semibold text-[#0B192C] mb-8"
          >
            <a href="#" className="hover:underline">
              Documentation
            </a>
            <a href="#" className="hover:underline">
              Trust Center
            </a>
            <a href="#" className="hover:underline">
              System Status
            </a>
          </motion.div>

          {/* Footnote */}
          <motion.p
            variants={itemVariants}
            className="text-xs text-[#9CA3AF] leading-relaxed max-w-lg"
          >
            No connector count, no vendor logo wall, no &quot;works with
            everything.&quot; Availability comes from the registry or it
            doesn&apos;t appear.
          </motion.p>
        </div>

        {/* Right Column: Hero Image Container */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-6 relative w-full aspect-[4/3] lg:aspect-[1/1] max-h-[580px] overflow-hidden"
        >
          <Image
            src="/images/platform/3.png"
            alt="Platform Integrations Dashboard Preview"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
