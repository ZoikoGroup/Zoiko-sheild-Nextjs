"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DataControlFlows() {
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

  const flowRules = [
    {
      title: "Labelled arrows",
      desc: "with explicit direction. Colour is supplementary, never the only carrier of meaning.",
    },
    {
      title: "An ordered text equivalent",
      desc: "for every diagram, carrying the same information.",
    },
    {
      title: "Every node and edge",
      desc: "maps to an authoritative object ID in the architecture manifest.",
    },
    {
      title: "No animated particles",
      desc: 'or "real-time" motion used as a capability claim.',
    },
    {
      title: "No implication",
      desc: "that every object traverses every layer, plane or operating step.",
    },
  ] as const;

  const metadataFields = [
    { label: "DIAGRAM VERSION", value: "—" },
    { label: "OWNER", value: "—" },
    { label: "LAST REVIEWED", value: "—" },
    { label: "CLASSIFICATION", value: "—" },
  ] as const;

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
              DATA, CONTROL AND EVIDENCE FLOWS
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[34px] font-bold text-[#0B192C] leading-[1.25] lg:leading-[58px] tracking-normal mb-4 max-w-4xl"
          >
            Every arrow is a claim.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#6B7280] max-w-2xl font-normal leading-relaxed"
          >
            A flow diagram implies collection, transfer and persistence. So each
            published flow carries its object class, direction, purpose,
            boundary crossings, authority and state — and unsupported flows
            simply don&apos;t get drawn.
          </motion.p>
        </div>

        {/* Placeholder Diagram Box with Metadata Footer */}
        <motion.div
          variants={itemVariants}
          className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-xs mb-8"
        >
          {/* Top Empty State Display */}
          <div className="py-20 px-6 sm:px-12 flex flex-col items-center justify-center text-center">
            {/* Horizontal dash indicators */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-4 h-[2px] bg-[#D1D5DB]" />
              <span className="w-4 h-[2px] bg-[#D1D5DB]" />
              <span className="w-4 h-[2px] bg-[#D1D5DB]" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C] mb-3">
              No public architecture diagram is published
            </h3>

            <p className="text-xs sm:text-sm text-[#6B7280] max-w-lg leading-relaxed">
              The flow registry has no approved records, so there is nothing to
              render. A decorative diagram here would be unverifiable
              illustration presented as architecture, which is precisely the
              failure this gate exists to prevent.
            </p>
          </div>

          {/* Bottom Metadata Bar */}
          <div className="border-t border-[#E5E7EB] grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#E5E7EB] bg-[#FCFBFA]">
            {metadataFields.map((field, idx) => (
              <div
                key={idx}
                className="p-4 sm:px-6 sm:py-5 flex flex-col justify-center"
              >
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#9CA3AF] mb-1 font-medium">
                  {field.label}
                </span>
                <span className="font-mono text-xs sm:text-sm text-[#6B7280]">
                  {field.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Two Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
        >
          {/* Left Card: How flows will be drawn */}
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
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-[#0B192C] mb-6">
              How flows will be drawn
            </h3>

            {/* List */}
            <div className="divide-y divide-[#E5E7EB]">
              {flowRules.map((rule, idx) => (
                <div
                  key={idx}
                  className="py-4 first:pt-0 last:pb-0 flex items-start gap-3"
                >
                  <span className="mt-1.5 w-2.5 h-2.5 border border-[#E0402F] rounded-xs flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                    <strong className="font-semibold text-[#0B192C]">
                      {rule.title}
                    </strong>{" "}
                    {rule.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card: Absence is not prohibition */}
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
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-[#0B192C] mb-6">
              Absence is not prohibition
            </h3>

            <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed mb-6">
              A flow that isn&apos;t shown means the public source doesn&apos;t
              establish it — not that it&apos;s forbidden, and not that it
              doesn&apos;t exist. Security-sensitive flows may be summarized or
              excluded entirely, with an approved reason.
            </p>

            <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed mt-auto pt-6 border-t border-[#E5E7EB]">
              Persistence is never inferred from an arrow either. Whether
              something is stored is a separate approved fact from whether it
              moves.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
