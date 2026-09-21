"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader, cardClass } from "./shared";

const steps = [
  {
    title: "Select Source",
    desc: "Select and authenticate the identity provider and endpoint security tools.",
  },
  {
    title: "Prerequisites Verified",
    desc: "Establish the underlying network access guidelines and domain mappings.",
  },
  {
    title: "Permissions Verified",
    desc: "Set strict granular read/write capability limits before authenticating.",
  },
  {
    title: "First Sync Success",
    desc: "The platform executes the first safe cryptographic registry sync.",
  },
];

export default function SetupFlowSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Setup Flow"
        title="Deploy in 13 structural steps"
        description="Follow the direct-to-evidence pipeline mapping from zero to continuous verification."
      />

      <ol className="flex flex-col gap-3 m-0 p-0 list-none w-full">
        {steps.map((s, i) => (
          <motion.li
            key={s.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
            className={`${cardClass} px-5 py-4 flex flex-col md:flex-row md:items-center gap-1.5 md:gap-0`}
          >
            <div className="flex items-center gap-4 md:w-[300px] shrink-0">
              <span className="font-jetbrains font-bold text-[18px] text-[#c44242] w-7 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-manrope font-bold text-[15px] text-[#0a2029]">{s.title}</span>
            </div>
            <p className="font-manrope text-[14px] text-[#5b6670] m-0 pl-11 md:pl-0">{s.desc}</p>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
