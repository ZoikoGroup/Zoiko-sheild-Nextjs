"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "./shared";

const steps = [
  "Choose Source",
  "Review Prereqs",
  "Check Scopes",
  "App Consent",
  "Auth Tenant",
  "Test Ingress",
  "Audit Schema",
  "Map Controls",
  "Verify Health",
  "Continuous Sync",
  "Auditor Lock",
];

export default function SetupJourneySection() {
  return (
    <Section alt>
      <SectionHeader
        eyebrow="Setup Deployment"
        title="11-Step Setup Journey"
        description="A step-by-step onboarding sequence designed for least-privilege security engineering workflows."
      />

      <ol className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 m-0 p-0 list-none w-full">
        {steps.map((s, i) => (
          <motion.li
            key={s}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.03, ease: "easeOut" }}
            className="bg-white border border-[rgba(18,59,76,0.1)] rounded-[8px] pl-2 pr-3.5 py-2 flex items-center gap-2"
          >
            <span className="bg-[#c44242] rounded-full size-5 flex items-center justify-center font-jetbrains font-bold text-[10px] text-white shrink-0">
              {i + 1}
            </span>
            <span className="font-manrope font-bold text-[13px] text-[#0a2029] whitespace-nowrap">{s}</span>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
