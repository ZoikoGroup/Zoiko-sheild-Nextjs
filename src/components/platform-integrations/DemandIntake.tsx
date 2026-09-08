"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DemandIntake() {
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

  const intakeSteps = [
    {
      num: "01",
      statement:
        "We state plainly what the route collects: qualified connector demand.",
      negationPrefix: "No",
      negationText: "promise of delivery, timeline or roadmap placement.",
    },
    {
      num: "02",
      statement:
        "Minimal intake — only the fields needed to understand the system and the use case.",
      negationPrefix: "Never",
      negationText:
        "credentials, secrets, production logs or unnecessary personal data.",
    },
    {
      num: "03",
      statement:
        "Purpose: the security or assurance workflow you're trying to support, and the direction you'd need, at a high level.",
      negationPrefix: "No",
      negationText: "privileged architecture detail in a public form.",
    },
    {
      num: "04",
      statement: "A data-use notice with the appropriate consent controls.",
      negationPrefix: "No",
      negationText: "bundled marketing consent.",
    },
    {
      num: "05",
      statement:
        "Confirmation of receipt, with neutral next-step expectations.",
      negationPrefix: "No",
      negationText: '"integration approved" language and no ETA.',
    },
    {
      num: "06",
      statement: "Internal triage to the product and integration owner.",
      negationPrefix: "No",
      negationText:
        "internal scoring or priority logic exposed as product availability.",
    },
    {
      num: "07",
      statement:
        "An outcome, through the approved commercial or product channel.",
      negationPrefix: "No",
      negationText: "silent public roadmap created out of request volume.",
    },
  ] as const;

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
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
              REQUEST AN INTEGRATION
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-[34px] sm:text-4xl lg:text-[34px] font-bold text-[#0B192C] leading-[1.15] tracking-tight mb-4 max-w-4xl"
          >
            Demand intake. Explicitly not a roadmap.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#6B7280] max-w-2xl font-normal leading-relaxed"
          >
            This route records qualified connector demand so product and
            integration owners can see it. Submitting a request is not evidence
            that a connector exists, is planned, is approved, or will arrive on
            any schedule.
          </motion.p>
        </div>

        {/* List Box Container */}
        <motion.div
          variants={itemVariants}
          className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-xs"
        >
          <div className="divide-y divide-[#E5E7EB]">
            {intakeSteps.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 items-stretch"
              >
                {/* 1st Column: Numbers with bg #EEEBE7 */}
                <div className="md:col-span-1 p-4 flex items-center justify-center bg-[#EEEBE7] border-b md:border-b-0 md:border-r border-[#E5E7EB]">
                  <span className="font-mono text-xs font-bold text-[#E0402F]">
                    {item.num}
                  </span>
                </div>

                {/* 2nd Column: Statement with White Background */}
                <div className="md:col-span-6 p-5 sm:p-6 bg-white flex items-center border-b md:border-b-0 md:border-r border-[#E5E7EB]">
                  <p className="text-xs sm:text-sm text-[#0B192C] leading-relaxed font-normal">
                    {item.statement}
                  </p>
                </div>

                {/* 3rd Column: Negation Text with White Background */}
                <div className="md:col-span-5 p-5 sm:p-6 bg-white flex items-center">
                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-normal">
                    <span className="font-bold text-[#E0402F]">
                      {item.negationPrefix}
                    </span>{" "}
                    {item.negationText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
