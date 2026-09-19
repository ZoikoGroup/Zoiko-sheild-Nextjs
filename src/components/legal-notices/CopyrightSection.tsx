"use client";

import React from "react";
import { motion } from "framer-motion";

function ArrowRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0" aria-hidden>
      <path d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5" stroke="#c44242" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CopyrightSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-start w-full">
      <div className="flex gap-2 items-center w-full">
        <div className="bg-[#c44242] h-[2px] w-4 lg:w-6 shrink-0" />
        <p className="font-jetbrains font-bold text-[#c44242] text-[12px] tracking-[1.2px] lg:tracking-[1.5px] uppercase m-0">
          02. COPYRIGHT &amp; CONTENT RIGHTS
        </p>
      </div>
      <p className="font-sans font-normal leading-[22px] lg:leading-[1.6] text-[14px] lg:text-[15px] text-[#5b6670] m-0 w-full">
        Except where explicitly stated otherwise, all platform interfaces,
        visual structures, functional designs, logic schemas, codebase
        elements, documentation, and asset publications are the exclusive
        intellectual property of the parent organization.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 lg:gap-4 items-start p-4 lg:p-5 rounded-[12px] w-full"
      >
        <p className="font-hanken font-extrabold text-[#0a2029] text-[17px] lg:text-[18px] m-0">
          Notice of Reservation of Rights
        </p>
        <p className="font-sans font-normal leading-[20px] lg:leading-[1.6] text-[13.5px] lg:text-[14px] text-[#5b6670] m-0">
          All rights are reserved globally. No part of the platform,
          documentation, or software schemas may be reproduced,
          distributed, or transmitted in any form or by any means,
          including mirroring, caching, or framing, without prior written
          authorization from the Legal Operations Office.
        </p>
        <a
          href="https://zoiko.com/terms"
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 items-center"
        >
          <span className="font-sans font-bold text-[#c44242] text-[13px] lg:text-[14px]">
            Review terms of licensing and explicit permissions
          </span>
          <ArrowRightIcon />
        </a>
      </motion.div>
    </div>
  );
}
