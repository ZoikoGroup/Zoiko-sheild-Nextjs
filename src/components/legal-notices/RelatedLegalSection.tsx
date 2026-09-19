"use client";

import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Privacy Notice",
    titleMobile: "Privacy Notice",
    desc: "Our comprehensive guidelines regarding data telemetry, active session retention, and user privacy constraints.",
  },
  {
    title: "Terms of Service",
    titleMobile: "Terms of Service",
    desc: "The contractual framework governing core platform usage, read/write permissions, and client agent execution.",
  },
  {
    title: "Cookie Notice",
    titleMobile: "Cookie Policy",
    desc: "Detailed registry of essential telemetry cookies, session tokens, and localStorage variables.",
  },
];

export default function RelatedLegalSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-start w-full">
      <div className="flex gap-2 items-center w-full">
        <div className="bg-[#c44242] h-[2px] w-4 lg:w-6 shrink-0" />
        <p className="font-jetbrains font-bold text-[#c44242] text-[12px] tracking-[1.2px] lg:tracking-[1.5px] uppercase m-0">
          09. RELATED LEGAL &amp; GOVERNANCE
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 items-start w-full">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
            className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-2 lg:gap-3 items-start p-4 lg:p-5 rounded-[12px] w-full lg:flex-1"
          >
            <div className="hidden lg:flex items-center justify-between w-full">
              <p className="font-hanken font-extrabold text-[#0a2029] text-[16px] m-0">{c.title}</p>
              <div className="bg-[#ddeaf9] flex items-start px-[10px] py-1 rounded-full">
                <p className="font-jetbrains font-bold text-[#4e668a] text-[11px] tracking-[0.5px] m-0">
                  ACTIVE
                </p>
              </div>
            </div>
            <p className="lg:hidden font-hanken font-extrabold text-[#0a2029] text-[14px] m-0">
              {c.titleMobile}
            </p>
            <p className="font-sans font-normal leading-[18px] lg:leading-[1.5] text-[12px] lg:text-[13px] text-[#5b6670] m-0">
              {c.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
