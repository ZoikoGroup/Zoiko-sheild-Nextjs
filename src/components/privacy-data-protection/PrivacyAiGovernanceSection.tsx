"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface AiCard {
  title: string;
  description: string;
  status: string;
}

const aiCards: AiCard[] = [
  {
    title: "No Training on Customer Data",
    description: "We explicitly bind upstream model contracts to prohibit user prompt telemetry from being utilized for fine-tuning or evaluation.",
    status: "Zero Training Use",
  },
  {
    title: "Prompt & Output Retention",
    description: "LLM assistant history is ephemeral. Log files are sanitized and permanently erased after the interactive browser session closes.",
    status: "Auto-Expire Active",
  },
  {
    title: "Sensitive Data Filtering",
    description: "Ingested streams pass through a local regex filter. Core credentials, access hashes, and keys are scrubbed before reaching model endpoints.",
    status: "Scrubbers Active",
  },
];

export default function PrivacyAiGovernanceSection() {
  return (
    <section className="w-full bg-[#F0EDE6] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full flex flex-col gap-10 sm:gap-12">
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
              MACHINE LEARNING BOUNDRIES
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.02em] leading-tight">
            AI & Data Governance Safeguards
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            Our security features utilize advanced analysis models with strict user privacy exclusions.
          </p>
        </motion.div>

        {/* 3 AI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {aiCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white border border-[#123B4C]/10 rounded-xl p-5 sm:p-6 flex flex-col justify-between gap-5 hover:border-[#123B4C]/25 transition-all shadow-[0_2px_4px_rgba(0,0,0,0.02)]"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-[#0A2029] tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[#5B6670] text-xs sm:text-[13.5px] leading-relaxed font-medium">
                  {card.description}
                </p>
              </div>

              <div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#E4F0EC] text-[#1F7A6C] text-xs font-bold">
                  {card.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Responsible AI Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="w-full bg-[#0A2440] text-white rounded-lg p-4 sm:p-5 flex items-center gap-3.5 shadow-md"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#E0967D] shrink-0" />
          <p className="text-xs sm:text-[13.5px] text-white/90 font-medium">
            To review our broad ethical commitments and safety frameworks, visit our{" "}
            <Link
              href="/responsible-ai"
              className="font-bold text-white underline underline-offset-4 hover:text-[#E0967D] transition-colors"
            >
              Responsible AI Policy
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
