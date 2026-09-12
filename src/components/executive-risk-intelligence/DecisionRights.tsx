"use client";

import React from "react";
import { motion } from "framer-motion";

interface DecisionRow {
  id: string;
  label: string;
  value: string;
}

const decisionRows: DecisionRow[] = [
  { id: "1", label: "Decision question", value: "Renew exception?" },
  { id: "2", label: "Options", value: "Mitigate · accept · defer" },
  { id: "3", label: "Evidence", value: "12 linked records" },
  { id: "4", label: "Owner", value: "Chief Risk Officer" },
  { id: "5", label: "Reviewer", value: "Audit Committee" },
  { id: "6", label: "Next review", value: "15 Oct 2026" },
  { id: "7", label: "Conditions", value: "Legal review required" },
];

export default function DecisionRights() {
  return (
    <div className="relative w-full bg-[#F7F5F0] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Large White Card with Rows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ borderRadius: "24px" }}
          className="lg:col-span-6 bg-white p-6 sm:p-8 shadow-sm border border-[#E5E0D5] flex flex-col w-full"
        >
          <div className="flex flex-col">
            {decisionRows.map((row, index) => {
              const isLast = index === decisionRows.length - 1;

              return (
                <div
                  key={row.id}
                  className={`py-4 flex items-center justify-between gap-4 ${
                    !isLast ? "border-b border-[#EAE4D9]" : ""
                  }`}
                >
                  <span className="font-mono text-sm sm:text-base font-semibold text-[#111A1E] tracking-tight">
                    {row.label}
                  </span>

                  <span className="font-mono text-sm sm:text-base text-[#4A555B] tracking-tight text-right">
                    {row.value}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column: Header & Description */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col items-start"
        >
          {/* Subheading / Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#C8382C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8382C] font-mono">
              DECISION RIGHTS
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-[36px] font-bold text-[#111A1E] tracking-tight mb-6 leading-[1.1]">
            Decision Support, Not Decision Making
          </h2>

          {/* Descriptions */}
          <p className="text-[#4A555B] text-base leading-relaxed mb-4">
            ZoikoShield supports the decision process; it does not substitute
            for Board, executive, legal, risk, compliance or fiduciary
            authority.
          </p>

          <p className="text-[#4A555B] text-base leading-relaxed">
            Every option preserves its owner, reviewer, next review date and
            governing conditions &mdash; so support remains distinct from
            authority.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
