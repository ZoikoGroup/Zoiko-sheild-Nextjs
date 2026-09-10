"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ControlledArchitectureReview() {
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

  const doNotSendItems = [
    {
      text: "Credentials, keys or secrets of any kind.",
    },
    {
      text: (
        <>
          Vulnerability details — those go to{" "}
          <a href="#" className="text-[#E0402F] font-semibold hover:underline">
            coordinated disclosure
          </a>
          .
        </>
      ),
    },
    {
      text: "Regulated or customer-identifying data.",
    },
    {
      text: "Your own confidential architecture, unless the route explicitly supports it.",
    },
  ] as const;

  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
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
              CONTROLLED ARCHITECTURE REVIEW
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B192C] leading-[1.25] lg:leading-[58px] tracking-normal mb-4 max-w-4xl"
          >
            For the detail that can&apos;t be public.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#6B7280] max-w-2xl font-normal leading-relaxed"
          >
            Some architecture evidence is controlled or contractual rather than
            secret. Where that&apos;s the case there&apos;s a purpose-limited
            review path — and it never gates the proof that is already public.
          </motion.p>
        </div>

        {/* Two Column Cards Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
        >
          {/* Left Card: What the review path is for */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 flex flex-col shadow-xs">
            {/* Header Icon */}
            <div className="w-7 h-7 rounded-md bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center mb-6">
              <svg
                className="w-3.5 h-3.5 text-[#6B7280]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="9" y1="3" x2="9" y2="21" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-[#0B192C] mb-4">
              What the review path is for
            </h3>

            <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed mb-6">
              Enterprise architects and security reviewers who need controlled
              architecture detail under a legitimate-purpose and identity
              review, or under an applicable agreement.
            </p>

            <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed pt-6 border-t border-[#E5E7EB]/60">
              It is a request route, not a download. Access decisions are made
              by the architecture and security owners, and a request creates no
              entitlement.
            </p>
          </div>

          {/* Right Card: Please don't send us (Red Border Highlighted) */}
          <div className="bg-white border-t-4 border-2 border-[#E0402F] rounded-2xl p-6 sm:p-8 flex flex-col shadow-xs">
            {/* Header Icon with Alert */}
            <div className="w-7 h-7 rounded-md bg-[#FEF2F2] border border-[#FCA5A5] flex items-center justify-center mb-6">
              <svg
                className="w-3.5 h-3.5 text-[#E0402F]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-[#0B192C] mb-6">
              Please don&apos;t send us
            </h3>

            {/* Radio / Circle Bullet List */}
            <div className="divide-y divide-[#E5E7EB] mb-8">
              {doNotSendItems.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3.5 first:pt-0 last:pb-0 flex items-start gap-3"
                >
                  <span className="mt-1 w-3 h-3 rounded-full border border-[#D1D5DB] flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Data Minimization Section */}
            <div className="mt-auto pt-6 border-t border-[#E5E7EB]">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#9CA3AF] block mb-2 font-medium">
                DATA MINIMIZATION
              </span>
              <p className="font-mono text-[11px] sm:text-xs text-[#6B7280] leading-relaxed">
                The form collects the minimum needed to assess purpose.
                Free-text technical questions, diagram annotations and
                controlled artifact names are excluded from analytics.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
