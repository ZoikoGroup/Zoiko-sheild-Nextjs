"use client";

import React from "react";
import { motion } from "framer-motion";

export default function VersionSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-start w-full">
      <div className="flex gap-2 items-center w-full">
        <div className="bg-[#c44242] h-[2px] w-4 lg:w-6 shrink-0" />
        <p className="font-jetbrains font-bold text-[#c44242] text-[12px] tracking-[1.2px] lg:tracking-[1.5px] uppercase m-0">
          10. VERSION, EFFECTIVE DATE &amp; CHANGES
        </p>
      </div>
      <p className="font-sans font-normal leading-[22px] lg:leading-[1.6] text-[14px] lg:text-[15px] text-[#5b6670] m-0 w-full">
        The changelog below represents the historical sequence of verified
        updates made to our legal notice registry.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 lg:gap-4 items-start p-4 lg:p-5 rounded-[12px] w-full"
      >
        <div className="hidden lg:flex border-b border-[rgba(18,59,76,0.1)] items-start justify-between pb-3 w-full font-jetbrains font-bold text-[#0a2029] text-[12px]">
          <p className="m-0">VER</p>
          <p className="m-0">DATE</p>
          <p className="m-0">SUMMARY OF CHANGE</p>
        </div>
        <div className="hidden lg:flex items-start justify-between w-full">
          <p className="font-sans font-bold text-[#0a2029] text-[13px] m-0">v1.0</p>
          <p className="font-jetbrains font-normal text-[#5b6670] text-[12px] m-0">01/2026</p>
          <p className="font-sans font-normal text-[#5b6670] text-[13px] m-0 w-[380px]">
            Initial release and baseline publication under Zoiko Shield
            framework.
          </p>
        </div>

        <div className="lg:hidden bg-[#f7f5f0] flex flex-col gap-[6px] items-start p-3 rounded-[8px] w-full">
          <div className="flex items-center justify-between w-full font-jetbrains text-[11px]">
            <p className="font-bold text-[#0a2029] m-0">VER: v1.0</p>
            <p className="font-normal text-[#5b6670] m-0">01/2026</p>
          </div>
          <p className="font-sans font-normal text-[#5b6670] text-[12px] leading-[18px] m-0">
            Initial release and baseline publication under Zoiko Shield
            framework.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
