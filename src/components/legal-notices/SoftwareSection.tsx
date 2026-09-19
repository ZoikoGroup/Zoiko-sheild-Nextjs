"use client";

import React from "react";
import { motion } from "framer-motion";

const boxes = [
  {
    title: "Developer API Terms",
    desc: "Access and call patterns are bound by cryptographic verification rules and secure credentials guidelines.",
  },
  {
    title: "Open Source Notices",
    desc: "Third-party library credits and specific permissive licenses are fully detailed in our authoritative registry.",
  },
];

export default function SoftwareSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-start w-full">
      <div className="flex gap-2 items-center w-full">
        <div className="bg-[#c44242] h-[2px] w-4 lg:w-6 shrink-0" />
        <p className="font-jetbrains font-bold text-[#c44242] text-[12px] tracking-[1.2px] lg:tracking-[1.5px] uppercase m-0">
          05. SOFTWARE &amp; DOCUMENTATION NOTICES
        </p>
      </div>
      <p className="font-sans font-normal leading-[22px] lg:leading-[1.6] text-[14px] lg:text-[15px] text-[#5b6670] m-0 w-full">
        Any software, code packages, APIs, SDKs, or associated developer
        documentation downloadable or accessible via this site is subject
        to the specific product license terms and service conditions.
      </p>

      <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 items-start w-full">
        {boxes.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
            className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-4 lg:p-5 rounded-[12px] w-full lg:flex-1"
          >
            <p className="font-hanken font-extrabold text-[#0a2029] text-[15px] lg:text-[16px] m-0">{b.title}</p>
            <p className="font-sans font-normal leading-[20px] lg:leading-[1.5] text-[13px] text-[#5b6670] m-0">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
