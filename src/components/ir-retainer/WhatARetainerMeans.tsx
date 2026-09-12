"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface RowData {
  assumptionTitle: string;
  assumptionSubtitle: string;
  realityText: string;
  stateText: string;
  isIncluded: boolean;
}

const tableData: RowData[] = [
  {
    assumptionTitle: "Incident triage and scoping",
    assumptionSubtitle: '"Someone picks up and works out what\'s happening."',
    realityText:
      "An activation activity where retainer delivery supports it — the core of what the relationship is for.",
    stateText: "IF CONTRACTED",
    isIncluded: true,
  },
  {
    assumptionTitle: "Log and telemetry analysis",
    assumptionSubtitle: '"You\'ll look through our logs."',
    realityText:
      "Only for approved sources and access modes, established during readiness rather than negotiated mid-incident.",
    stateText: "APPROVED SOURCES",
    isIncluded: true,
  },
  {
    assumptionTitle: "Endpoint and host collection",
    assumptionSubtitle: '"You\'ll pull what you need off the machines."',
    realityText:
      "Conditional on supported tooling, authorization, data handling and specialist capability being in place.",
    stateText: "CONDITIONAL",
    isIncluded: true,
  },
  {
    assumptionTitle: "Cloud and identity investigation",
    assumptionSubtitle: '"You can see what happened in our tenant."',
    realityText:
      "Conditional. Provider permissions and the logs that actually exist determine the scope, not the engagement.",
    stateText: "CONDITIONAL",
    isIncluded: true,
  },
  {
    assumptionTitle: "Disk and memory forensics",
    assumptionSubtitle: '"Forensics is included, it\'s an IR retainer."',
    realityText:
      "A specialist capability. Never implied as included without explicit service authority behind it.",
    stateText: "SPECIALIST",
    isIncluded: true,
  },
  {
    assumptionTitle: "Malware reverse engineering",
    assumptionSubtitle: '"You\'ll tell us what the sample does."',
    realityText:
      "A specialist capability that may require a separate entitlement or a separate provider entirely.",
    stateText: "SPECIALIST",
    isIncluded: true,
  },
  {
    assumptionTitle: "Mobile, OT and ICS forensics",
    assumptionSubtitle: '"Same team, different device."',
    realityText:
      "High specialization, gated by delivery capability and by safety constraints that don't apply elsewhere.",
    stateText: "GATED",
    isIncluded: true,
  },
  {
    assumptionTitle: "On-site response",
    assumptionSubtitle: '"Someone gets on a plane."',
    realityText:
      "Region, travel, lead time, safety and commercial terms must all be approved before it means anything.",
    stateText: "APPROVED TERMS",
    isIncluded: true,
  },
  {
    assumptionTitle: "Legal advice and privilege",
    assumptionSubtitle: '"Your team handles the legal side."',
    realityText:
      "Not included. We coordinate with your designated counsel. Privilege is not automatically created or preserved by our involvement.",
    stateText: "SEPARATE PROFESSION",
    isIncluded: false,
  },
  {
    assumptionTitle: "Breach notification",
    assumptionSubtitle: '"You\'ll handle the regulator filings."',
    realityText:
      "Not included. We can provide technical facts. Whether something is reportable, to whom, by when and by whom is your and your counsel's decision.",
    stateText: "NOT INCLUDED",
    isIncluded: false,
  },
  {
    assumptionTitle: "Crisis communications and PR",
    assumptionSubtitle: '"You\'ll help us with the announcement."',
    realityText:
      "Not included by implication. No spokesperson role, no media relations, no reputation management, no notification drafting.",
    stateText: "NOT INCLUDED",
    isIncluded: false,
  },
  {
    assumptionTitle: "Expert witness and testimony",
    assumptionSubtitle: '"You\'d stand behind this in court."',
    realityText:
      "Not implied. That is a separate professional and legal engagement if it is offered at all.",
    stateText: "SEPARATE ENGAGEMENT",
    isIncluded: false,
  },
  {
    assumptionTitle: "Recovery engineering",
    assumptionSubtitle: '"You\'ll rebuild and restore for us."',
    realityText:
      "Separate from investigation. Exact responsibility and system ownership have to be defined — usually they stay with your teams.",
    stateText: "SEPARATE SCOPE",
    isIncluded: false,
  },
];

export default function WhatARetainerMeans() {
  return (
    <section className="bg-[#EEEBE7] text-[#111827] py-20 px-4 sm:px-6 lg:px-12 min-h-screen flex flex-col items-center">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className="w-5 h-[2px] bg-[#E05236]"
              aria-hidden="true"
            ></span>
            <span className="text-[#E05236] font-semibold text-xs tracking-[0.2em] uppercase">
              WHAT A RETAINER MEANS
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#111827] leading-[1.15] mb-4">
            The word carries assumptions. Here they are, one at a time.
          </h1>

          {/* Subtitle */}
          <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed max-w-4xl font-normal">
            &ldquo;Retainer&rdquo; is often read as unlimited responders,
            forensics, counsel and crisis support on standby. Each of those is a
            separate question of capability, entitlement, dependency and
            profession — so each gets its own answer.
          </p>
        </motion.div>

        {/* Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="w-full bg-white rounded-lg border border-[#E5E7EB] overflow-hidden shadow-sm"
        >
          {/* Table Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#111827] text-white text-xs font-semibold tracking-wider px-6 py-4 uppercase">
            <div className="lg:col-span-4">What people assume it includes</div>
            <div className="lg:col-span-5 hidden lg:block">
              What it actually is
            </div>
            <div className="lg:col-span-3 hidden lg:block text-right">
              State
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-[#E5E7EB]">
            {tableData.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-12 px-6 py-5 items-start gap-4 lg:gap-0 transition-colors ${
                  !row.isIncluded
                    ? "bg-[#FDF2F1]/60"
                    : "bg-white hover:bg-[#FAFAFA]"
                }`}
              >
                {/* Column 1: Assumption */}
                <div className="lg:col-span-4 lg:pr-6 flex flex-col justify-center">
                  <h3
                    className={`font-semibold text-sm sm:text-base mb-1 ${!row.isIncluded ? "text-[#991B1B]" : "text-[#111827]"}`}
                  >
                    {row.assumptionTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B7280] italic">
                    {row.assumptionSubtitle}
                  </p>
                </div>

                {/* Column 2: Reality */}
                <div className="lg:col-span-5 lg:pr-6 flex flex-col justify-center text-xs sm:text-sm text-[#374151] leading-relaxed">
                  <div className="lg:hidden text-[10px] font-bold text-[#9CA3AF] uppercase mb-1 tracking-wider">
                    What it actually is
                  </div>
                  {row.realityText}
                </div>

                {/* Column 3: State Badge */}
                <div className="lg:col-span-3 flex lg:justify-end items-center mt-2 lg:mt-0">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded border text-[11px] font-semibold tracking-wide bg-white shadow-2xs">
                    {row.isIncluded ? (
                      <Check
                        className="w-3 h-3 text-[#D97706]"
                        strokeWidth={2.5}
                      />
                    ) : (
                      <X className="w-3 h-3 text-[#DC2626]" strokeWidth={2.5} />
                    )}
                    <span
                      className={
                        row.isIncluded ? "text-[#92400E]" : "text-[#991B1B]"
                      }
                    >
                      {row.stateText}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-xs text-[#6B7280] leading-relaxed max-w-5xl"
        >
          <span className="font-semibold text-[#111827]">
            Scope discipline.
          </span>{" "}
          &ldquo;Forensics&rdquo; is not a blanket synonym for incident
          response. Every forensic capability needs explicit entitlement,
          tooling, expertise, data-handling and availability authority behind it
          — and finding out which of these you have during an incident is the
          worst possible time to find out.
        </motion.div>
      </div>
    </section>
  );
}
