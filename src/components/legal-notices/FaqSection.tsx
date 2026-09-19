"use client";

import React from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What is the purpose of this legal notice page?",
    a: "It houses the statutory notices, trademark registrations, operating company details, and copyright definitions that apply to the Zoiko Shield platform.",
  },
  {
    q: "How often are these notices updated?",
    a: "Our legal and compliance divisions review these records every 24 hours. Formal version changes correspond with core regulatory registry cycles.",
  },
];

export default function FaqSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-start w-full">
      <div className="flex gap-2 items-center w-full">
        <div className="bg-[#c44242] h-[2px] w-4 lg:w-6 shrink-0" />
        <p className="font-jetbrains font-bold text-[#c44242] text-[12px] tracking-[1.2px] lg:tracking-[1.5px] uppercase m-0">
          11. FAQ / INTERPRETIVE HELP
        </p>
      </div>

      <div className="flex flex-col gap-3 lg:gap-4 items-start w-full">
        {faqs.map((f, i) => (
          <motion.div
            key={f.q}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
            className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-4 lg:p-5 rounded-[12px] w-full"
          >
            <p className="font-hanken font-extrabold text-[#0a2029] text-[15px] lg:text-[16px] m-0">{f.q}</p>
            <p className="font-sans font-normal leading-[18px] lg:leading-[1.5] text-[13px] text-[#5b6670] m-0">
              {f.a}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
