"use client";

import React from "react";
import { motion } from "framer-motion";

interface MatrixRow {
  dimension: string;
  managedDefense: string;
  continuousAssurance: string;
}

const matrixData: MatrixRow[] = [
  {
    dimension: "Outcome",
    managedDefense:
      "Detect, investigate and govern response to security events.",
    continuousAssurance: "Maintain control effectiveness and audit readiness.",
  },
  {
    dimension: "Work objects",
    managedDefense: "Signals, cases, investigations and response decisions.",
    continuousAssurance: "Controls, tests, evidence, exceptions and mappings.",
  },
  {
    dimension: "Cadence",
    managedDefense: "Event-driven monitoring, triage and escalation rhythms.",
    continuousAssurance:
      "Continuous and scheduled tests, reviews and evidence cycles.",
  },
  {
    dimension: "Human authority",
    managedDefense: "Named owners retain R0–R4 response decision rights.",
    continuousAssurance:
      "Control owners evaluate evidence and own follow-through.",
  },
  {
    dimension: "Evidence",
    managedDefense: "Case histories, decisions, actions and response records.",
    continuousAssurance:
      "Inspectable test histories, evidence lineage and exceptions.",
  },
  {
    dimension: "Inputs/data",
    managedDefense: "Approved telemetry, systems, sources and integrations.",
    continuousAssurance:
      "Control sources, frameworks, evidence systems and integrations.",
  },
  {
    dimension: "Implementation",
    managedDefense: "Scope use cases, connect telemetry, validate routing.",
    continuousAssurance:
      "Map controls, connect evidence, validate evaluation workflows.",
  },
  {
    dimension: "Coverage",
    managedDefense:
      "Hours, regions and scope follow the approved service definition.",
    continuousAssurance:
      "Hours, regions and scope follow the approved service definition.",
  },
  {
    dimension: "Commercial",
    managedDefense: "Pricing and included capabilities are contract-specific.",
    continuousAssurance:
      "Pricing and included capabilities are contract-specific.",
  },
  {
    dimension: "Trust/privacy",
    managedDefense:
      "Review security, data handling, privacy and access questions.",
    continuousAssurance:
      "Review security, data handling, privacy and access questions.",
  },
  {
    dimension: "Support/incident",
    managedDefense:
      "Urgency routes through approved support and incident channels.",
    continuousAssurance:
      "Urgency routes through approved support and incident channels.",
  },
];

export default function ComparisonMatrix() {
  return (
    <div className="relative w-full bg-[#F6F4EE] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-start">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-col items-start"
        >
          {/* Subheading / Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#C8382C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8382C]">
              COMPARISON MATRIX
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-[44px] font-bold text-[#111A1E] tracking-tight mb-3">
            Compare the operating model, side by side.
          </h2>

          {/* Description */}
          <p className="text-[#4A555B] text-base sm:text-lg">
            Use these dimensions to prepare a more precise service conversation.
          </p>
        </motion.div>

        {/* Table Container with Horizontal Scroll for Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-full overflow-x-auto rounded-[20px] shadow-sm border border-[#E5E0D5]"
        >
          <table className="w-full text-left border-collapse min-w-[750px]">
            {/* Header Row */}
            <thead>
              <tr className="bg-[#123B4C] text-white">
                <th className="py-5 px-6 text-xs text-[#FFFFFF99] font-semibold uppercase tracking-[0.15em] w-1/4">
                  DIMENSION
                </th>
                <th className="py-5 px-6 text-base font-bold tracking-normal w-3/8">
                  Managed Defense
                </th>
                <th className="py-5 px-6 text-base font-bold tracking-normal w-3/8">
                  Continuous Assurance
                </th>
              </tr>
            </thead>

            {/* Body Rows */}
            <tbody>
              {matrixData.map((row, index) => {
                const isEven = index % 2 === 1;
                const rowBg = isEven ? "bg-[#F7F5F0]" : "bg-white";

                return (
                  <tr
                    key={index}
                    className={`${rowBg} border-b border-[#E5E0D5]/60 last:border-none`}
                  >
                    <td className="py-5 px-6 text-[13px] font-bold text-[#111A1E] align-top">
                      {row.dimension}
                    </td>
                    <td className="py-5 px-6 text-[13px] font-normal text-[#4A555B] align-top leading-relaxed">
                      {row.managedDefense}
                    </td>
                    <td className="py-5 px-6 text-[12.5px] font-normal text-[#4A555B] align-top leading-relaxed">
                      {row.continuousAssurance}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
}
