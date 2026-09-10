"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FiveLayerContract() {
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

  const tableData = [
    {
      field: "display_name / order",
      requirement:
        "Exact approved public name and position, from architecture authority.",
      status: "— GATED",
    },
    {
      field: "purpose / user_job",
      requirement:
        "Outcome-oriented definition and the evaluator or operator job it serves.",
      status: "— GATED",
    },
    {
      field: "scope / exclusions",
      requirement:
        "Current capability boundaries and explicit non-capabilities.",
      status: "— GATED",
    },
    {
      field: "relationships",
      requirement: "Approved adjacency and dependency. No inferred sequence.",
      status: "— GATED",
    },
    {
      field: "plane_mapping",
      requirement: "Explicit and many-to-many, only where approved.",
      status: "— GATED",
    },
    {
      field: "route / state / version",
      requirement: "Canonical destination, lifecycle state and version.",
      status: "— GATED",
    },
    {
      field: "owner / last_reviewed",
      requirement: "Named architecture owner and a freshness gate.",
      status: "— GATED",
    },
    {
      field: "evidence_refs",
      requirement: "Required for every claim-bearing descriptor.",
      status: "— GATED",
    },
  ] as const;

  return (
    <section className="w-full bg-[#F8F7F5] py-16 md:py-24 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
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
              FIVE-LAYER CONTRACT
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B192C] leading-[1.25] lg:leading-[58px] tracking-normal mb-4 max-w-4xl"
          >
            What each layer must carry before it gets a name in public.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#6B7280] max-w-2xl font-normal leading-relaxed"
          >
            Five slots exist in every large-screen architecture view, and the
            order is content rather than decoration — mobile preserves it in a
            single column. Publication is blocked until every field below is
            authoritative.
          </motion.p>
        </div>

        {/* Table Container */}
        <motion.div
          variants={itemVariants}
          className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-xs"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px] table-fixed">
              {/* Table Column Widths (15%, 65%, 20%) */}
              <colgroup>
                <col className="w-[20%]" />
                <col className="w-[70%]" />
                <col className="w-[10%]" />
              </colgroup>

              {/* Dark Table Header */}
              <thead>
                <tr className="bg-[#071829] border-b border-[#071829] font-mono text-[11px] uppercase tracking-wider text-[#94A3B8]">
                  <th className="py-4 px-6 font-semibold">Field</th>
                  <th className="py-4 px-6 font-semibold text-white">
                    Publication Requirement
                  </th>
                  <th className="py-4 px-6 font-semibold text-right">
                    Current
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-[#E5E7EB] text-xs sm:text-sm">
                {tableData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#F3F1ED] transition-colors duration-150"
                  >
                    {/* 1st Column: bg-[#FCFBFA] */}
                    <td className="py-5 px-6 font-mono text-xs text-[#0B192C] align-middle bg-[#FCFBFA]">
                      {row.field}
                    </td>

                    {/* 2nd Column: standard bg-white */}
                    <td className="py-5 px-6 text-[#6B7280] leading-relaxed align-middle bg-white">
                      {row.requirement}
                    </td>

                    {/* 3rd Column: bg-[#FCFBFA] */}
                    <td className="py-5 px-6 align-middle text-right bg-[#FCFBFA]">
                      <span className="inline-block px-2.5 py-1 text-[10px] font-mono font-medium text-[#9CA3AF] border border-dashed border-[#D1D5DB] rounded bg-white">
                        {row.status}
                      </span>
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
