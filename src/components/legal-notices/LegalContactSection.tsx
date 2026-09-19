"use client";

import React from "react";
import { motion } from "framer-motion";

const routes = [
  "General Legal Inquiries",
  "Data Privacy & GDPR requests",
  "Security & Vulnerability reports",
  "Formal Service of Process",
];

export default function LegalContactSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-start w-full">
      <div className="flex gap-2 items-center w-full">
        <div className="bg-[#c44242] h-[2px] w-4 lg:w-6 shrink-0" />
        <p className="font-jetbrains font-bold text-[#c44242] text-[12px] tracking-[1.2px] lg:tracking-[1.5px] uppercase m-0">
          08. LEGAL CONTACT &amp; SERVICE OF NOTICES
        </p>
      </div>
      <p className="font-sans font-normal leading-[22px] lg:leading-[1.6] text-[14px] lg:text-[15px] text-[#5b6670] m-0 w-full">
        Formal communications, regulatory reports, or service of process
        documents must go through the approved organizational routing
        channels.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 lg:gap-4 items-start p-4 lg:p-5 rounded-[12px] w-full"
      >
        <p className="font-hanken font-extrabold text-[#0a2029] text-[15px] lg:text-[16px] m-0">
          Approved Routing Directory
        </p>
        <div className="flex flex-col gap-[10px] lg:gap-3 items-start w-full">
          {routes.map((r) => (
            <div key={r} className="border-b border-[rgba(18,59,76,0.1)] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1 lg:gap-0 pb-2 w-full">
              <p className="font-sans font-semibold text-[#0a2029] text-[13px] m-0">{r}</p>
              <p className="font-jetbrains font-normal text-[#a43737] text-[12px] m-0">
                Authoritative Legal Registry value required
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
