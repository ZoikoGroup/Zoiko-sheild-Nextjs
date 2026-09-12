"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Step {
  id: string;
  title: string;
  description: string;
}

const stepsData: Step[] = [
  {
    id: "01",
    title: "Telemetry",
    description:
      "Customer-approved sources only, validated before entering coverage.",
  },
  {
    id: "02",
    title: "Detect",
    description:
      "Eligible detections and correlated signals within source scope.",
  },
  {
    id: "03",
    title: "Triage",
    description:
      "Signal quality, context and priority, with rationale retained.",
  },
  {
    id: "04",
    title: "Investigate",
    description: "Evidence-linked case, hypotheses separated from findings.",
  },
  {
    id: "05",
    title: "Decide",
    description: "Your authorized role decides. Recorded, attributable, timed.",
  },
  {
    id: "06",
    title: "Act",
    description:
      "Only authorized action classes, with rollback where applicable.",
  },
  {
    id: "07",
    title: "Evidence",
    description: "Case, decision and action records preserved with lineage.",
  },
  {
    id: "08",
    title: "Review",
    description: "Trends, coverage gaps and next decisions at agreed cadence.",
  },
  {
    id: "09",
    title: "Correct",
    description: "Corrections keep history. Nothing is silently overwritten.",
  },
];

export default function HowOperationsWorkComponent() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#1E293B] font-sans antialiased py-16 px-4 md:px-8 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[1200px]"
      >
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-4 h-[2px] bg-[#D97706]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#D97706] uppercase">
              HOW OPERATIONS WORK
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
            Seven steps, each leaving a record behind.
          </h1>
          <p className="text-sm md:text-base text-[#4B5563] max-w-2xl leading-relaxed">
            Triage, investigation, recommendation, approval and action each
            retain their rationale, evidence and ownership. An analyst decision
            that can&apos;t be explained later isn&apos;t a decision, it&apos;s
            an outcome.
          </p>
        </div>

        {/* Steps Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-0 border border-[#D1CBD4] rounded-[6px] overflow-hidden bg-[#FFFFFF] shadow-sm mb-6">
          {stepsData.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                onClick={() => setActiveStep(index)}
                className={`p-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#D1CBD4] last:border-r-0 cursor-pointer transition-colors relative ${
                  isActive ? "bg-[#FAFAF9]" : "hover:bg-[#FCFCFB]"
                }`}
              >
                <div>
                  <div className="text-[11px] font-bold tracking-[0.1em] text-[#DC2626] mb-2">
                    {step.id}
                  </div>
                  <div className="font-bold text-[#111827] text-[13px] mb-2">
                    {step.title}
                  </div>
                  <div className="text-[#6B7280] text-[11px] leading-relaxed">
                    {step.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="bg-[#FFFFFF] border border-[#D1CBD4] rounded-[6px] p-6 relative overflow-hidden shadow-sm flex items-start"
        >
          {/* Left Red Accent Border */}
          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#DC2626]" />

          <div className="pl-3">
            <h2 className="font-bold text-[#111827] text-[14px] mb-1.5">
              No blind cutover
            </h2>
            <p className="text-[#4B5563] text-xs md:text-[13px] leading-relaxed">
              A connector or a rule is not &quot;covered&quot; merely because it
              exists. Onboarding validates data flow, mapping, permissions,
              ownership, health and alert-path behaviour before a source enters
              active coverage — and go-live records the effective date, the
              active scope, the known gaps and a review date.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
