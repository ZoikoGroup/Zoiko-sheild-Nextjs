"use client";

import React from "react";
import { motion } from "framer-motion";

const marks = [
  { name: "Zoiko Shield™", status: "Registered (Authoritative Legal Registry value required)" },
  { name: "Zoiko Tech®", status: "Pending (Authoritative Legal Registry value required)" },
  { name: "Zoiko Stream™", status: "Authoritative Legal Registry value required" },
];

export default function TrademarksSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-start w-full">
      <div className="flex gap-2 items-center w-full">
        <div className="bg-[#c44242] h-[2px] w-4 lg:w-6 shrink-0" />
        <p className="font-jetbrains font-bold text-[#c44242] text-[12px] tracking-[1.2px] lg:tracking-[1.5px] uppercase m-0">
          03. TRADEMARKS &amp; BRAND RIGHTS
        </p>
      </div>
      <p className="font-sans font-normal leading-[22px] lg:leading-[1.6] text-[14px] lg:text-[15px] text-[#5b6670] m-0 w-full">
        The names, logos, design marks, wordmarks, and product-associated
        slogans published across Zoiko Shield are registered and pending
        trademarks of the organization.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 lg:gap-4 items-start p-4 lg:p-5 rounded-[12px] w-full"
      >
        <p className="font-hanken font-extrabold text-[#0a2029] text-[15px] lg:text-[16px] m-0">
          Trademark Register Overview
        </p>
        <div className="flex flex-col gap-3 lg:gap-3 items-start w-full">
          {marks.map((m) => (
            <div
              key={m.name}
              className="border-b border-[rgba(18,59,76,0.1)] flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-0 lg:justify-between pb-2 w-full"
            >
              <p className="font-sans font-bold text-[#0a2029] text-[16px] lg:text-[14px] m-0">{m.name}</p>
              <p className="font-jetbrains font-normal text-[#5b6670] text-[12px] leading-[16px] lg:leading-normal m-0">
                {m.status}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
