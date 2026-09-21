"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface PipelineStep {
  number: string;
  title: string;
  description: string;
}

const pipelineSteps: PipelineStep[] = [
  {
    number: "01",
    title: "Prerequisites",
    description:
      "Validate tenant guidelines, client scopes, and OAuth configuration before starting.",
  },
  {
    number: "02",
    title: "Authorize",
    description:
      "Generate secure OIDC authentication context directly at the directory boundary.",
  },
  {
    number: "03",
    title: "Scope Limit",
    description:
      "Apply strict read-write boundaries to ensure least-privilege operations.",
  },
  {
    number: "04",
    title: "Verify & Test",
    description:
      "Execute safe diagnostic runs and verify immediate webhook connection telemetry.",
  },
];

export default function StructuredIntegrationPipeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  return (
    <section className="w-full bg-[#F5F2EB] py-16 sm:py-20 lg:py-24 px-6 md:px-12 lg:px-16 font-sans text-[#111827] border-t border-[#E7E5DF]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          {/* Tag / Kicker */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#BE3A34]" />
            <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#BE3A34] uppercase">
              CONNECTOR LIFECYCLE
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0B1B26] tracking-tight mb-3">
            The structured integration pipeline
          </h2>

          {/* Subtitle */}
          <p className="text-[14.5px] sm:text-base text-[#52606D] max-w-3xl leading-relaxed">
            Integrations follow an automated verification lifecycle from directory discovery to reauthorization.
          </p>
        </div>

        {/* 4 Pipeline Step Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {pipelineSteps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E7E5DF] shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#DCD8CF] transition-all duration-200 flex flex-col justify-start"
            >
              {/* Step Number */}
              <span className="font-mono font-bold text-lg text-[#BE3A34] tracking-tight mb-3 block">
                {step.number}
              </span>

              {/* Step Title */}
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0B1B26] mb-2 leading-snug">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-[12.5px] sm:text-[13px] text-[#5A6874] leading-[1.65]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Integration Callout Box */}
        <motion.div
          className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E7E5DF] shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row sm:items-center justify-between gap-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0B1B26] mb-1">
              Need a custom integration or specialized schema context?
            </h3>
            <p className="text-[13px] sm:text-[13.5px] text-[#5A6874] leading-relaxed">
              Our engineering team collaborates closely with corporate partners to establish verifiable connection paths.
            </p>
          </div>

          <Link
            href="#custom-integration"
            className="border border-[#BE3A34] text-[#BE3A34] hover:bg-[#BE3A34]/5 text-[13px] font-semibold px-5 py-2.5 rounded-lg transition-colors duration-150 inline-flex items-center justify-center shrink-0 self-start sm:self-auto"
          >
            Request custom integration
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
