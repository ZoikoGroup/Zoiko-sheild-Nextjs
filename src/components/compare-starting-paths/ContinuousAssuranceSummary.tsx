"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, GitFork } from "lucide-react";

interface ServiceDetail {
  label: string;
  value: string;
}

const serviceDetails: ServiceDetail[] = [
  {
    label: "Outcome",
    value:
      "Support ongoing control/evidence assurance and audit readiness through defined monitoring and review.",
  },
  {
    label: "Core objects",
    value:
      "Controls, tests, evidence, exceptions, mappings and assurance state.",
  },
  {
    label: "Authority",
    value:
      "Control/evidence evaluation, exception and remediation ownership remains explicit.",
  },
  {
    label: "Evidence",
    value: "Freshness, completeness, test result, mapping and change history.",
  },
  {
    label: "Dependencies",
    value:
      "Evidence ledger, compliance control plane, framework mapping, integrations and trust.",
  },
  {
    label: "What varies",
    value:
      "Control scope, cadence, framework/program coverage, evidence sources, review model and outputs.",
  },
  {
    label: "What it does not promise",
    value:
      "Certification, regulator approval, zero findings, audit acceptance or universal compliance.",
  },
];

export default function ContinuousAssuranceSummary() {
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
              PATH DETAIL
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-[44px] font-bold text-[#111A1E] tracking-tight mb-3 leading-[1.1]">
            Continuous Assurance — detailed service summary.
          </h2>

          {/* Description */}
          <p className="text-[#5B6670] max-w-3xl text-base leading-relaxed">
            A canonical summary of the Continuous Assurance path: what it
            supports, what it depends on, what varies, and what it does not
            promise.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#E5E0D5] w-full flex flex-col justify-between"
        >
          <div>
            {/* Icon / Badge */}
            <div className="w-12 h-12 rounded-xl bg-[#FDF3F2] flex items-center justify-center text-[#C8382C] mb-6">
              <GitFork className="w-6 h-6" />
            </div>

            {/* Path Tag */}
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C8382C] block mb-2">
              CONTROL / EVIDENCE ASSURANCE PATH
            </span>

            {/* Card Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111A1E] tracking-tight mb-8">
              Continuous Assurance
            </h3>

            <div className="w-full h-[1px] bg-[#EFECE4] mb-8"></div>

            {/* Specs List */}
            <div className="space-y-6 mb-10">
              {serviceDetails.map((detail, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 items-start"
                >
                  <span className="text-xs font-bold text-[#0A2029] tracking-wider uppercase md:col-span-1">
                    {detail.label}
                  </span>
                  <span className="text-sm text-[#111A1E] font-normal leading-relaxed md:col-span-3">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Button */}
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#7C8890]/40 text-[#111A1E] text-sm font-bold tracking-wide hover:bg-[#F6F4EE] transition-colors group w-fit"
            >
              <span>Explore Continuous Assurance</span>
              <ArrowRight className="w-4 h-4 text-[#111A1E] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
