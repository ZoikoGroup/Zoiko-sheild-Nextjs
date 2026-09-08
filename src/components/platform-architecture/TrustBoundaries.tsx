"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TrustBoundaries() {
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

  const boundaryFields = [
    {
      title: "Sides",
      desc: "the approved public zones, parties or authority domains it separates.",
    },
    {
      title: "Crossing objects",
      desc: "which categories of data, control, evidence, identity or request are allowed across.",
    },
    {
      title: "Direction and purpose",
      desc: "verified, and with a reason the crossing exists.",
    },
    {
      title: "Identity and authorization",
      desc: "the public-safe model, without implementation detail.",
    },
    {
      title: "Responsibility split",
      desc: "customer, ZoikoShield, provider or shared, stated only where the source supports it.",
    },
    {
      title: "Deny behaviour",
      desc: "what happens, publicly safely described, when trust cannot be established.",
    },
  ] as const;

  return (
    <section className="w-full bg-[#0B2237] md:py-24 px-6 md:px-12 lg:px-20 font-sans text-white">
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
              TRUST BOUNDARIES
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[34px] font-bold text-white leading-[1.25] lg:leading-[58px] tracking-normal mb-4 max-w-4xl"
          >
            A boundary is a record, not an icon.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#94A3B8] max-w-2xl font-normal leading-relaxed"
          >
            Selecting a boundary should reveal its scope, what crosses it, who
            is responsible on each side, and what happens when trust can&apos;t
            be established. An outline on a diagram tells an evaluator nothing.
          </motion.p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Box: Fields every boundary needs */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0E2C46] border border-[#FFFFFF24] rounded-2xl p-6 sm:p-8 flex flex-col"
          >
            {/* Header Icon */}
            <div className="w-8 h-8 rounded-md bg-[#FFFFFF12] flex items-center justify-center mb-6">
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="12" y1="3" x2="12" y2="21" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-white mb-6">
              Fields every boundary needs
            </h3>

            {/* List */}
            <div className="divide-y divide-[#1E3A5F]/60">
              {boundaryFields.map((field, idx) => (
                <div
                  key={idx}
                  className="py-4 first:pt-0 last:pb-0 flex items-start gap-3"
                >
                  <span className="mt-2 w-2 h-2 border border-[#E0402F] rounded-xs flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    <strong className="font-semibold text-white">
                      {field.title}
                    </strong>{" "}
                    — {field.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Box: What no diagram will ever contain */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0E2C46] border border-[#FFFFFF24] rounded-2xl p-6 sm:p-8 flex flex-col"
          >
            {/* Header Icon */}
            <div className="w-8 h-8 rounded-md bg-[#FFFFFF12] flex items-center justify-center mb-6">
              <svg
                className="w-4 h-4 text-[#94A3B8]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="9" />
                <line x1="5.6" y1="5.6" x2="18.4" y2="18.4" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-white mb-6">
              What no diagram will ever contain
            </h3>

            {/* Items list with bullet separators */}
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-loose mb-8">
              Internal hostnames{" "}
              <span className="text-[#E0402F] font-bold mx-1">·</span> network
              ranges <span className="text-[#E0402F] font-bold mx-1">·</span>{" "}
              security groups{" "}
              <span className="text-[#E0402F] font-bold mx-1">·</span> private
              endpoints <span className="text-[#E0402F] font-bold mx-1">·</span>{" "}
              keys and secrets{" "}
              <span className="text-[#E0402F] font-bold mx-1">·</span> tenant
              identifiers{" "}
              <span className="text-[#E0402F] font-bold mx-1">·</span> provider
              account IDs{" "}
              <span className="text-[#E0402F] font-bold mx-1">·</span>{" "}
              vulnerability detail{" "}
              <span className="text-[#E0402F] font-bold mx-1">·</span> defensive
              blind spots{" "}
              <span className="text-[#E0402F] font-bold mx-1">·</span> attack
              paths.
            </p>

            {/* Explanatory Paragraph */}
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mt-auto pt-6 border-t border-[#1E3A5F]/60">
              Architecture transparency and attack enablement are different
              things. Public, controlled and restricted architecture detail are
              separated at the service boundary, not just in the page template —
              and a boundary change invalidates every dependent diagram before
              republication.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
