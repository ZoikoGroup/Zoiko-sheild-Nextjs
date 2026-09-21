"use client";

import React from "react";
import { motion } from "framer-motion";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const pipelineSteps: StepItem[] = [
  {
    number: "01",
    title: "Deduplication",
    description:
      "We check the active queue for identical vendor APIs to group voting weight.",
  },
  {
    number: "02",
    title: "Feasibility Check",
    description:
      "Our security architects analyze the target API architecture for compliance.",
  },
  {
    number: "03",
    title: "Pipeline Routing",
    description:
      "Approved modules are assigned to technology partner or core sprint cycles.",
  },
];

export default function PipelineTransparency() {
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
    <section className="w-full bg-[#F5F2EB] py-4 sm:py-6 px-5 sm:px-6 md:px-12 lg:px-16 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-[#E7E5DF] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-[2px] bg-[#BE3A34]" />
              <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#BE3A34] uppercase">
                PIPELINE TRANSPARENCY
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold text-[#0B1B26] tracking-tight mb-2">
              How requests transition into supported modules
            </h2>

            <p className="hidden sm:block text-[13.5px] sm:text-[14px] text-[#52606D] leading-relaxed">
              Transparency keeps our process defensible. Here is how your proposal is managed.
            </p>
          </div>

          {/* 3 Steps Grid: Stacked vertically on mobile, 3-columns on desktop */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {pipelineSteps.map((step) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl p-4 sm:p-6 flex flex-col justify-start"
              >
                <span className="font-mono text-xs font-bold text-[#BE3A34] mb-1.5 block">
                  {step.number}
                </span>
                <h3 className="text-sm font-bold text-[#0B1B26] mb-1.5 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[11.5px] text-[#5A6874] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
