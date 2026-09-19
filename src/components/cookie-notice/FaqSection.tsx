"use client";

import React from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What technologies are used?",
    a: "We utilize localized HTTP session parameters, temporary browser-scoped memory, and minimal localStorage keys. Pixel-trackers are entirely blocked across the platform.",
  },
  {
    q: "Why are certain technologies always-active?",
    a: "These parameters are technically limited to security functions — such as cross-site forgery mitigation and encrypted tunnel identification — which do not build cross-domain user tracking profiles.",
  },
  {
    q: "Does rejecting optional choices degrade experience?",
    a: "No. Rejecting optional parameters guarantees equal session capabilities, excluding the interactive chat feature which remains securely gated until consented.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-[#f7f5f0] w-full">
      <div className="flex flex-col gap-6 lg:gap-10 mx-auto max-w-[1440px] px-4 py-8 lg:px-[108px] lg:py-[80px]">
        <div className="flex flex-col gap-2 lg:gap-4 items-start w-full">
          <div className="flex gap-2 lg:gap-3 items-center w-full">
            <div className="bg-[#c44242] h-[2px] w-4 lg:w-[24px] shrink-0" />
            <p className="font-hanken lg:font-sans font-medium text-[11px] lg:text-[13px] text-[#c44242] tracking-[1px] lg:tracking-[1.5px] uppercase m-0">
              <span className="lg:hidden">QUESTIONS</span>
              <span className="hidden lg:inline">FREQUENTLY ASKED QUESTIONS</span>
            </p>
          </div>
          <h2 className="font-hanken lg:font-sans font-extrabold text-[26px] lg:text-[36px] text-[#0a2029] tracking-[-0.4px] lg:tracking-[-0.8px] m-0">
            <span className="lg:hidden">Architecture FAQ</span>
            <span className="hidden lg:inline">Architecture &amp; Choices FAQ</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4 items-start w-full">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
              className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-5 lg:p-[24px] rounded-[12px] w-full"
            >
              <p className="font-hanken lg:font-sans font-extrabold text-[#0a2029] text-[16px] lg:text-[18px] m-0 w-full">
                {f.q}
              </p>
              <p className="font-manrope lg:font-sans font-normal text-[#5b6670] text-[13px] lg:text-[14px] leading-[1.5] m-0 w-full">
                {f.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
