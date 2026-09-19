"use client";

import React from "react";
import { motion } from "framer-motion";

const desktopCards = [
  {
    title: "What we process",
    pill: "RESTRAINED",
    pillBg: "bg-[rgba(31,122,108,0.1)]",
    pillBorder: "border-[#1f7a6c]",
    pillText: "text-[#1f7a6c]",
    desc: "Limited identity parameters, platform analytics, security telemetry, and customer administration metadata.",
  },
  {
    title: "Why we process",
    pill: "PURPOSE-BOUND",
    pillBg: "bg-[rgba(78,102,138,0.1)]",
    pillBorder: "border-[#4e668a]",
    pillText: "text-[#4e668a]",
    desc: "Primarily to deliver continuous infrastructure assurance, investigate endpoints safely, and perform core contractual metrics.",
  },
  {
    title: "Who receives it",
    pill: "RESTRICTED",
    pillBg: "bg-[rgba(180,83,9,0.1)]",
    pillBorder: "border-[#b45309]",
    pillText: "text-[#b45309]",
    desc: "Regulated subprocessors, authorized customer administrators, and direct-integrated endpoint service hosts.",
  },
  {
    title: "How long",
    pill: "FINITE",
    pillBg: "bg-[rgba(31,122,108,0.1)]",
    pillBorder: "border-[#1f7a6c]",
    pillText: "text-[#1f7a6c]",
    desc: "Bound by direct criteria: active lifecycle engagement plus standardized statutory archiving limits.",
  },
  {
    title: "Your choices",
    pill: "ACCESSIBLE",
    pillBg: "bg-[rgba(78,102,138,0.1)]",
    pillBorder: "border-[#4e668a]",
    pillText: "text-[#4e668a]",
    desc: "Control cookie options, opt-out of secondary analytics, and utilize accessible rights execution paths.",
  },
  {
    title: "Customer control",
    pill: "SECURE",
    pillBg: "bg-[rgba(31,122,108,0.1)]",
    pillBorder: "border-[#1f7a6c]",
    pillText: "text-[#1f7a6c]",
    desc: "Enterprise payload data stays strictly client-owned, encrypted, and isolated under direct DPA limits.",
  },
];

const mobileCards = [
  {
    title: "Personal Data Collected",
    desc: "Limited identity parameters, platform analytics, security telemetry, and customer administration metadata.",
  },
  {
    title: "Core Purpose",
    desc: "Primarily to deliver continuous infrastructure assurance, investigate endpoints safely, and perform core contractual metrics.",
  },
  {
    title: "Who Receives Data",
    desc: "Regulated subprocessors, authorized customer administrators, and direct-integrated endpoint service hosts.",
  },
  {
    title: "Retention Duration",
    desc: "Bound by direct criteria: active lifecycle engagement plus standardized statutory archiving limits.",
  },
  {
    title: "Available Choices",
    desc: "Control cookie options, opt-out of secondary analytics, and utilize accessible rights execution paths.",
  },
  {
    title: "Customer Payloads",
    desc: "Enterprise payload data stays strictly client-owned, encrypted, and isolated under direct DPA limits.",
  },
];

export default function AtAGlanceSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-start w-full">
      <div className="flex flex-col gap-1 lg:gap-2 items-start w-full">
        <p className="font-hanken font-extrabold text-[#0a2029] text-[20px] leading-[28px] lg:text-[24px] lg:leading-normal m-0">
          At-a-Glance Privacy Summary
        </p>
        <p className="font-manrope font-normal text-[#5b6670] text-[13px] lg:text-[14px] m-0">
          A high-level synthesis of our data protection practices for
          rapid comprehension.
        </p>
      </div>

      <div className="hidden lg:grid grid-cols-3 gap-4 w-full">
        {desktopCards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: (i % 3) * 0.06 }}
            className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-5 rounded-[12px]"
          >
            <div className="flex items-center justify-between w-full">
              <p className="font-hanken font-extrabold text-[#0a2029] text-[16px] m-0">{c.title}</p>
              <div className={`${c.pillBg} border ${c.pillBorder} flex items-start px-2 py-[2px] rounded-full shrink-0`}>
                <p className={`font-jetbrains font-bold ${c.pillText} text-[11px] whitespace-nowrap m-0`}>
                  {c.pill}
                </p>
              </div>
            </div>
            <p className="font-manrope font-normal text-[#5b6670] text-[13.5px] leading-[20px] m-0">{c.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="lg:hidden flex flex-col gap-3 w-full">
        {mobileCards.map((c) => (
          <div key={c.title} className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-2 items-start p-4 rounded-[12px] w-full">
            <p className="font-hanken font-extrabold text-[#0a2029] text-[15px] m-0">{c.title}</p>
            <p className="font-manrope font-normal text-[#5b6670] text-[13px] leading-[19px] m-0">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
