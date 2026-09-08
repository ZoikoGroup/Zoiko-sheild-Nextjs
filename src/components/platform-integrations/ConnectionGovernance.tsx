"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ConnectionGovernance() {
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

  const operationalStates = [
    {
      title: "configured",
      desc: "Settings exist. Nothing is authorized and no data is moving.",
    },
    {
      title: "authorized",
      desc: "Your administrator granted the approved scope. Not yet proof it works.",
    },
    {
      title: "validating",
      desc: "Setup is being confirmed. Neither success nor failure yet.",
    },
    {
      title: "healthy",
      desc: "Approved checks indicate expected operation, as of a stated time.",
    },
    {
      title: "degraded",
      desc: 'Partial failure, with the affected source, mode or data domain named — not "healthy."',
    },
    {
      title: "suspended",
      desc: "Stopped for a security, privacy or operational reason, through governance.",
    },
    {
      title: "revoked",
      desc: "Access withdrawn. Distinct from a provider outage.",
    },
    {
      title: "unknown",
      desc: "Telemetry or authority missing. Shown as unknown, never as green.",
    },
  ] as const;

  const governanceConceptRows = [
    {
      concept: "mode",
      disclosed:
        "The approved technical connection method and its prerequisites, at a level safe for public documentation.",
      notAssumed:
        "API, webhook, agent, collector, polling, streaming, file or native behaviour.",
      notAssumedHighlight: false,
    },
    {
      concept: "direction",
      disclosed:
        "Whether data enters ZoikoShield, leaves it, both, or whether actions are permitted.",
      notAssumed: 'Bidirectional access inferred from the word "integration."',
      notAssumedHighlight: false,
    },
    {
      concept: "setup owner",
      disclosed:
        "The role in your organization responsible for enabling the connection.",
      notAssumed: "That ZoikoShield can self-authorize inside your estate.",
      notAssumedHighlight: false,
    },
    {
      concept: "authorization",
      disclosed: "A customer-controlled approval and consent step.",
      notAssumed:
        "That clicking Connect grants everything the provider could offer.",
      notAssumedHighlight: false,
    },
    {
      concept: "validation",
      disclosed:
        "How setup success is confirmed, and which fields are safe to display.",
      notAssumed: "Exact test calls or operational latency.",
      notAssumedHighlight: false,
    },
    {
      concept: "disconnect",
      disclosed: "How access is withdrawn and how the effect is communicated.",
      notAssumed:
        "Immediate deletion or downstream revocation, unless authority says so.",
      notAssumedHighlight: false,
    },
    {
      concept: "re-consent",
      disclosed: "Required when scope or provider policy materially changes.",
      notAssumed: "Silent permission expansion. It doesn't happen.",
      notAssumedHighlight: true,
    },
  ] as const;

  return (
    <section className="w-full bg-[#F8F7F5] py-16 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
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
              CONNECTION GOVERNANCE
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[34px] font-bold text-[#0B192C] leading-[1.15] tracking-tight mb-4 max-w-4xl"
          >
            &ldquo;Connected&rdquo; is not a single state.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#6B7280] max-w-2xl font-normal leading-relaxed"
          >
            Eight distinct operational states sit behind that one word. An
            interface has to tell them apart, because the difference between{" "}
            <span className="italic">authorized</span> and{" "}
            <span className="italic">healthy</span> is the difference between a
            working pipeline and a silent gap.
          </motion.p>
        </div>

        {/* 8 Operational States Grid Box */}
        <motion.div
          variants={itemVariants}
          className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-xs mb-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-[#E5E7EB]">
            {operationalStates.map((state, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-7 flex flex-col justify-start ${
                  idx < 4 ? "lg:border-b border-[#E5E7EB]" : ""
                } ${
                  (idx + 1) % 4 !== 0 ? "lg:border-r border-[#E5E7EB]" : ""
                } ${idx % 2 === 0 ? "sm:border-r lg:border-r-0" : ""} ${
                  idx >= 2 && idx < 6 ? "sm:border-t lg:border-t-0" : ""
                }`}
              >
                <h3 className="font-mono text-sm font-bold text-[#0B192C] mb-2">
                  {state.title}
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed font-normal">
                  {state.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Governance Concepts Table Box */}
        <motion.div
          variants={itemVariants}
          className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-xs"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                {/* Header with #EEEBE7 background */}
                <tr className="bg-[#EEEBE7] text-[#6B7280] font-mono text-[10px] uppercase tracking-widest border-b border-[#E5E7EB]">
                  <th className="py-3.5 px-6 font-semibold w-[20%]">CONCEPT</th>
                  <th className="py-3.5 px-6 font-semibold w-[40%]">
                    DISCLOSED BEFORE SETUP
                  </th>
                  <th className="py-3.5 px-6 font-semibold w-[40%]">
                    NOT ASSUMED
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB] text-xs sm:text-sm">
                {governanceConceptRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    {/* Concept */}
                    <td className="py-4 px-6 font-mono text-xs text-[#0B192C] font-semibold w-[20%] align-top">
                      {row.concept}
                    </td>

                    {/* Disclosed Before Setup */}
                    <td className="py-4 px-6 text-[#6B7280] font-normal leading-relaxed w-[40%] align-top">
                      {row.disclosed}
                    </td>

                    {/* Not Assumed */}
                    <td className="py-4 px-6 text-[#6B7280] font-normal leading-relaxed w-[40%] align-top">
                      {row.notAssumedHighlight ? (
                        <>
                          <span className="font-bold text-[#0B192C]">
                            Silent permission expansion.
                          </span>{" "}
                          It doesn&apos;t happen.
                        </>
                      ) : (
                        row.notAssumed
                      )}
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
