"use client";

import React from "react";
import { motion } from "framer-motion";

interface TimelineStep {
  step: string;
  title: string;
  description: string;
}

const timelineSteps: TimelineStep[] = [
  {
    step: "01",
    title: "Discovery",
    description: "Analyze scope of telemetry requirements before coding starts.",
  },
  {
    step: "02",
    title: "Architecture",
    description: "Enforce cryptographic separation on data-base layers.",
  },
  {
    step: "03",
    title: "Build",
    description: "Continuous testing of retention and tenant isolation.",
  },
  {
    step: "04",
    title: "Launch",
    description: "Automated checklist validation by security architect.",
  },
  {
    step: "05",
    title: "Operate",
    description: "Active runtime threat modeling of all API boundaries.",
  },
  {
    step: "06",
    title: "Retire",
    description: "Complete database cleaning following retention limits.",
  },
];

const reviewTriggers = [
  "New Telemetry Class Requested",
  "Sensitive Context Processing",
  "Third-Party Vendor Integration",
  "Cross-Region Residency Shifts",
  "External Telemetry Stream Activation",
  "AI Feature / LLM Integration",
  "Ad-Hoc SQL Direct Queries",
];

export default function PrivacyByDesignSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full flex flex-col gap-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              ENGINEERING METHODOLOGY
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.02em] leading-tight">
            Privacy by Design & Default
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            We build privacy into the foundation of the platform codebase. Product releases follow structured checkpoints to prevent silent telemetry expansion.
          </p>
        </motion.div>

        {/* Timeline Grid (6 Steps) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4">
          {timelineSteps.map((node, idx) => (
            <motion.div
              key={node.step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-[#F0EDE6] border border-[#123B4C]/10 rounded-lg p-4 flex flex-col justify-start gap-2 hover:border-[#123B4C]/25 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.02)] min-h-[140px]"
            >
              <span className="font-mono text-base font-bold text-[#C44242]">
                {node.step}
              </span>
              <h3 className="text-sm font-bold text-[#0A2029] tracking-tight">
                {node.title}
              </h3>
              <p className="text-[#5B6670] text-xs leading-relaxed font-medium">
                {node.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Triggers Box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full bg-[#0A2440] rounded-xl p-6 sm:p-7 flex flex-col gap-4 shadow-lg border border-[#0A2440]"
        >
          <span className="font-mono font-bold text-xs sm:text-[13px] tracking-wider text-[#E0967D] uppercase">
            MANDATORY PRIVACY-RISK-REVIEW TRIGGERS
          </span>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {reviewTriggers.map((trigger) => (
              <span
                key={trigger}
                className="px-3.5 py-1.5 rounded-md bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs sm:text-[13px] font-medium border border-white/10 transition-colors"
              >
                {trigger}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
