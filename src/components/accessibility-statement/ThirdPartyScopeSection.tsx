"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ThirdPartyScopeSection() {
  return (
    <section className="bg-[#f7f5f0] w-full">
      <div className="flex flex-col gap-6 lg:gap-8 mx-auto max-w-[1440px] px-4 py-8 lg:px-[108px] lg:py-[60px]">
        <div className="flex flex-col gap-3 lg:gap-4 items-start w-full">
          <div className="flex gap-2 lg:gap-3 items-center w-full">
            <div className="bg-[#c44242] h-[2px] w-6 shrink-0" />
            <p className="font-jetbrains font-bold text-[11px] lg:text-[13px] text-[#c44242] tracking-[1px] lg:tracking-[1.5px] uppercase m-0">
              SCOPE CLARIFICATION
            </p>
          </div>
          <h2 className="font-hanken font-extrabold text-[28px] lg:text-[28px] text-[#0a2029] tracking-[-0.5px] m-0 w-full">
            Third-Party Embeds &amp; Document Conformance
          </h2>
          <p className="font-manrope font-medium leading-[20px] lg:leading-[23px] text-[13px] lg:text-[15px] text-[#5b6670] m-0 w-full">
            As a platform, we connect directly to source registries. Some
            third-party elements fall outside our direct structural
            authority.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col lg:flex-row gap-5 lg:gap-6 items-start p-5 lg:p-[24px] rounded-[16px] w-full"
        >
          <div className="flex flex-col gap-3 lg:gap-4 items-start w-full lg:flex-1">
            <p className="font-hanken font-extrabold text-[#0a2029] text-[17px] lg:text-[18px] m-0">
              Full-Page Conformance Exceptions
            </p>
            <p className="font-manrope font-normal text-[#5b6670] text-[13.5px] lg:text-[14px] leading-[20px] lg:leading-[22px] m-0">
              Under WCAG rules, certain full pages may contain third-party
              diagnostic diagrams or live stream elements where direct
              accessibility markup is mathematically impossible or outside
              vendor API parameters. In these scenarios, we maintain a
              complete text-alternative fallback route.
            </p>
          </div>

          <div className="hidden lg:block bg-[rgba(18,59,76,0.1)] h-[120px] w-px shrink-0" />
          <div className="lg:hidden bg-[rgba(18,59,76,0.1)] h-px w-full" />

          <div className="flex flex-col gap-3 lg:gap-4 items-start w-full lg:flex-1">
            <p className="font-hanken font-extrabold text-[#0a2029] text-[17px] lg:text-[18px] m-0">
              Third-Party Security Frameworks
            </p>
            <p className="font-manrope font-normal text-[#5b6670] text-[13.5px] lg:text-[14px] leading-[20px] lg:leading-[22px] m-0">
              Compliance checklists, embedded partner maps, and external
              trust registries are subject to partial conformance clauses.
              We advocate actively with our platform vendors to prioritize
              accessibility fixes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
