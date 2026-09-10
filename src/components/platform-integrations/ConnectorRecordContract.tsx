"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ConnectorRecordContract() {
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

  const contractRows = [
    {
      field: "integration_id",
      rule: "Stable internal identifier. Secret and config identifiers are never exposed.",
    },
    {
      field: "display_name",
      rule: "Approved public name. Vendor trademark and partner usage is subject to legal authority.",
    },
    {
      field: "category_ids",
      rule: "Controlled taxonomy values only. May map to a conditional child route.",
    },
    {
      field: "state",
      rule: "Draft, Ready, Active, Conditional, Suspended or Retired.",
    },
    {
      field: "availability_scope",
      rule: "Product, contract, region and prerequisite boundaries. Never inferred.",
    },
    {
      field: "connection_mode",
      rule: 'The exact approved mode — or "details unavailable" until authority exists.',
    },
    {
      field: "direction",
      rule: "Read, ingest, write or action — only when verified for that connector.",
    },
    {
      field: "permission_profile",
      rule: "Scopes, purpose, least-privilege rationale and the authorization owner.",
    },
    {
      field: "health_expectation",
      rule: "Approved health and freshness semantics. Not a universal SLA.",
    },
    {
      field: "data_handling_ref",
      rule: "Pointer to the approved privacy, architecture and data-location authority.",
    },
    {
      field: "owner / review_date",
      rule: "A named accountable owner and a freshness gate.",
    },
    {
      field: "claim_ids / evidence_refs",
      rule: "Required for any claim-bearing availability, partner, security or performance label.",
    },
  ] as const;

  return (
    <section className="w-full bg-[#EEEBE7] py-16 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
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
              CONNECTOR RECORD CONTRACT
            </span>
          </motion.div>

          {/* Heading with 34px font size */}
          <motion.h2
            variants={itemVariants}
            className="text-[34px] font-bold text-[#0B192C] leading-[1.2] tracking-tight mb-4 max-w-4xl"
          >
            What every entry has to disclose before it appears.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#6B7280] max-w-2xl font-normal leading-relaxed"
          >
            This is the shape of a catalog entry. A connector that cannot fill
            these fields from authoritative sources does not render publicly —
            and it isn&apos;t shown as a greyed-out card either, because that
            reads as &quot;coming soon.&quot;
          </motion.p>
        </div>

        {/* Contract Table */}
        <motion.div
          variants={itemVariants}
          className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-xs mb-8"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                {/* Header with #0B2237 background */}
                <tr className="bg-[#0B2237] text-white font-mono text-[11px] uppercase tracking-wider">
                  <th className="py-3.5 px-6 font-semibold w-[15%]">FIELD</th>
                  <th className="py-3.5 px-6 font-semibold w-[65%]">RULE</th>
                  <th className="py-3.5 px-6 font-semibold w-[20%] text-right">
                    CURRENT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3F4F6] text-xs sm:text-sm">
                {contractRows.map((row, idx) => (
                  <tr key={idx} className="hover:opacity-95 transition-opacity">
                    {/* 1st Column: 20% width & #FCFBFA */}
                    <td className="py-3.5 px-6 font-mono text-xs text-[#0B192C] font-medium bg-[#FCFBFA] w-[20%]">
                      {row.field}
                    </td>

                    {/* 2nd Column: 60% width & White */}
                    <td className="py-3.5 px-6 text-[#6B7280] font-normal leading-relaxed bg-white w-[60%]">
                      {row.rule}
                    </td>

                    {/* 3rd Column: 20% width & #FCFBFA with #D3CFC9 border and 3px radius */}
                    <td className="py-3.5 px-6 text-right bg-[#FCFBFA] w-[20%]">
                      <span className="inline-block border border-[#D3CFC9] rounded-[3px] px-2.5 py-1 font-mono text-[10px] text-[#9CA3AF] bg-[#F9FAFB]">
                        — NO RECORDS
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Bottom Banner Card */}
        <motion.div
          variants={itemVariants}
          className="bg-white border border-[#E5E7EB] border-l-4 border-l-[#E0402F] rounded-xl p-6 sm:p-8 shadow-xs"
        >
          <h3 className="text-base sm:text-lg font-bold text-[#0B192C] mb-2">
            Badges that need evidence, not enthusiasm
          </h3>
          <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
            <span className="font-bold text-[#0B192C]">
              Certified • verified • native • official • partner.
            </span>{" "}
            Each is a claim about a relationship or a validation process. None
            appears without current evidence and legal or partner approval
            behind it — and a decorative logo wall is not proof that anything is
            available.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
