"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DiagramDisclosure() {
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
      class: "public",
      classColor: "text-[#0B192C]",
      definition: "Approved for unauthenticated publication.",
      behavior: "Renders in the page and in public documentation.",
      highlightRow: false,
    },
    {
      class: "controlled",
      classColor: "text-[#0B192C]",
      definition: "May be shared after legitimate-purpose and identity review.",
      behavior:
        "A safe summary plus a controlled request path — never the artifact itself.",
      highlightRow: false,
    },
    {
      class: "contractual",
      classColor: "text-[#0B192C]",
      definition: "Available under an applicable agreement.",
      behavior: "The access condition is explained at a safe level.",
      highlightRow: false,
    },
    {
      class: "customer-specific",
      classColor: "text-[#0B192C]",
      definition: "Contains a customer's own architecture or configuration.",
      behavior: "Never public. Authenticated customer access only.",
      highlightRow: false,
    },
    {
      class: "restricted internal",
      classColor: "text-[#E0402F]",
      definition: "Not eligible for customer or public disclosure.",
      behavior:
        "Where sensitive, its title, identifier and existence are absent from public metadata entirely.",
      highlightRow: true,
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
              DIAGRAM DISCLOSURE
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B192C] leading-[1.25] lg:leading-[58px] tracking-normal mb-4 max-w-4xl"
          >
            Five classes. Only one of them is public.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#6B7280] max-w-2xl font-normal leading-relaxed"
          >
            Architecture artifacts carry a disclosure classification, and the
            class determines what a public page may show — including whether the
            artifact&apos;s existence can be acknowledged at all.
          </motion.p>
        </div>

        {/* Table Container */}
        <motion.div
          variants={itemVariants}
          className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-xs"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px] table-fixed">
              {/* Column Width Allocation: 20%, 40%, 40% */}
              <colgroup>
                <col className="w-[20%]" />
                <col className="w-[40%]" />
                <col className="w-[40%]" />
              </colgroup>

              {/* Table Body */}
              <tbody className="divide-y divide-[#E5E7EB] text-xs sm:text-sm">
                {tableData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#F3F1ED] transition-colors duration-150"
                  >
                    {/* First Column: Monospace tag name with subtle background */}
                    <td className="py-5 px-6 font-mono text-xs align-middle bg-[#EEEBE7]">
                      <span className={row.classColor}>{row.class}</span>
                    </td>

                    {/* Second Column: Definition / Condition */}
                    <td className="py-5 px-6 text-[#6B7280] leading-relaxed align-middle bg-white">
                      {row.definition}
                    </td>

                    {/* Third Column: Public Behavior Outcome */}
                    <td
                      className={`py-5 px-6 leading-relaxed align-middle ${
                        row.highlightRow
                          ? "bg-[#FFF5F4] text-[#8A4436]"
                          : "bg-[#FCFBFA] text-[#6B7280]"
                      }`}
                    >
                      {row.behavior}
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
