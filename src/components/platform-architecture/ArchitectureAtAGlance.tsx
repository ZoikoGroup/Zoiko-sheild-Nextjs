"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ArchitectureAtAGlance() {
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
      concept: "platform shape",
      approved:
        "A core horizontal platform relating to your existing security estate.",
      gated: "—",
    },
    {
      concept: "layers",
      approved: (
        <>
          <strong className="font-bold text-[#0B192C]">Exactly five.</strong>{" "}
          Count is confirmed.
        </>
      ),
      gated: "Names, order, purpose, scope, exclusions and mapping.",
    },
    {
      concept: "planes",
      approved: "The concept is named in the route descriptor.",
      gated: (
        <>
          <strong className="font-bold text-[#0B192C]">
            Whether any public plane taxonomy exists at all
          </strong>{" "}
          — including how many and what they&apos;re called.
        </>
      ),
    },
    {
      concept: "trust boundaries",
      approved: "The concept is named in the route descriptor.",
      gated:
        "Zones, endpoints, identity domains, crossings and responsibility split.",
    },
    {
      concept: "deployment model",
      approved: "The concept is named in the route descriptor.",
      gated: "Mode names, tenancy, regions, providers, isolation and failover.",
    },
    {
      concept: "operating sequence",
      approved:
        "Connect, correlate, govern, preserve, verify — approved as an operating model.",
      gated: "Any mapping from those verbs to layers or planes.",
    },
    {
      concept: "existing estate",
      approved: "Relationship through approved integration categories.",
      gated: "Connector inventory, modes, data paths and residency.",
    },
    {
      concept: "protocols & infrastructure",
      approved: "—",
      gated:
        "Cryptography, key management, service identities, ports, queues, databases, zones — none of it is public.",
    },
    {
      concept: "performance & scale",
      approved: "—",
      gated: "Latency, throughput, uptime, RTO/RPO, retention and durability.",
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
              ARCHITECTURE AT A GLANCE
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[34px] font-bold text-[#0B192C] leading-[1.25] lg:leading-[58px] tracking-normal mb-4"
          >
            What&apos;s approved, and what&apos;s explicitly unknown.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#6B7280] max-w-2xl font-normal leading-relaxed"
          >
            A serious evaluator needs to know which side of the line each fact
            sits on. Guessing at the second column is how architecture pages
            become unverifiable illustration.
          </motion.p>
        </div>

        {/* Table Container */}
        <motion.div
          variants={itemVariants}
          className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-xs"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              {/* Table Header */}
              <thead>
                <tr className="bg-[#EEEBE7] border-b border-[#E5E7EB] font-mono text-[11px] uppercase tracking-wider text-[#6B7280]">
                  <th className="py-4 px-6 font-semibold w-1/4">Concept</th>
                  <th className="py-4 px-6 font-semibold w-3/8">
                    Source-Approved Today
                  </th>
                  <th className="py-4 px-6 font-semibold w-3/8">
                    Still Authority-Gated
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-[#E5E7EB] text-xs sm:text-sm">
                {tableData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#FAF9F6] transition-colors duration-150"
                  >
                    {/* Concept Column */}
                    <td className="py-5 px-6 font-mono text-xs text-[#0B192C] align-top">
                      {row.concept}
                    </td>

                    {/* Source-Approved Today Column */}
                    <td className="py-5 px-6 text-[#6B7280] leading-relaxed align-top">
                      {row.approved}
                    </td>

                    {/* Still Authority-Gated Column */}
                    <td className="py-5 px-6 text-[#6B7280] leading-relaxed align-top">
                      {row.gated}
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
