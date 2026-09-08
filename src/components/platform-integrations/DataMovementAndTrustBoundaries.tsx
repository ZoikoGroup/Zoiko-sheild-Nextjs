"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DataMovementAndTrustBoundaries() {
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

  const questionRows = [
    {
      question: "What data can move?",
      answerSource:
        "The approved data classes and events on that connector's record.",
      blockedShortcut:
        '"All security data" or "metadata only" as a blanket answer.',
    },
    {
      question: "Which direction?",
      answerSource: "The verified ingress, egress or action direction.",
      blockedShortcut: "Bidirectionality inferred from connectivity.",
    },
    {
      question: "Where is it processed?",
      answerSource:
        "Current architecture, privacy and data-location authority.",
      blockedShortcut:
        "Residency inferred from office presence or a vendor's region.",
    },
    {
      question: "Who can access it?",
      answerSource:
        "Roles, permissions and the trust and security authorities.",
      blockedShortcut: 'An absolute "nobody can access it" statement.',
    },
    {
      question: "What does the provider receive?",
      answerSource:
        "Approved third-party sharing and responsibility disclosure.",
      blockedShortcut:
        "Silence about provider-side processing where it is material.",
    },
    {
      question: "What happens after disconnect?",
      answerSource: "Retention, deletion and credential authorities.",
      blockedShortcut: "An immediate-deletion promise without evidence.",
    },
    {
      question: "What is logged?",
      answerSource:
        "Public-safe audit and connection event categories, where approved.",
      blockedShortcut: "Any exposure of secrets or internal topology.",
    },
  ] as const;

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
        <div className="mb-10">
          {/* Tag */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-4 h-[2px] bg-[#E0402F]"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#E0402F] uppercase">
              DATA MOVEMENT AND TRUST BOUNDARIES
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[34px] font-bold text-[#0B192C] leading-[1.15] tracking-tight mb-4"
          >
            Seven questions, each with an authority behind the answer.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#6B7280] max-w-xl font-normal leading-relaxed"
          >
            These are answered per connector from the approved architecture and
            privacy sources — not generalized here, and never inferred from an
            office location or a cloud vendor&apos;s region.
          </motion.p>
        </div>

        {/* Questions Table */}
        <motion.div
          variants={itemVariants}
          className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-xs"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                {/* Header with #EEEBE7 background */}
                <tr className="bg-[#EEEBE7] text-[#6B7280] font-mono text-[10px] uppercase tracking-widest border-b border-[#E5E7EB]">
                  <th className="py-3.5 px-6 font-semibold w-[25%]">
                    QUESTION
                  </th>
                  <th className="py-3.5 px-6 font-semibold w-[40%]">
                    WHERE THE ANSWER COMES FROM
                  </th>
                  <th className="py-3.5 px-6 font-semibold w-[35%]">
                    BLOCKED SHORTCUT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB] text-xs sm:text-sm">
                {questionRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    {/* Question */}
                    <td className="py-4 px-6 font-mono text-xs text-[#0B192C] font-semibold w-[25%] align-top">
                      {row.question}
                    </td>

                    {/* Where the Answer Comes From */}
                    <td className="py-4 px-6 text-[#6B7280] font-normal leading-relaxed w-[40%] align-top">
                      {row.answerSource}
                    </td>

                    {/* Blocked Shortcut */}
                    <td className="py-4 px-6 text-[#6B7280] font-normal leading-relaxed w-[35%] align-top">
                      {row.blockedShortcut}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
