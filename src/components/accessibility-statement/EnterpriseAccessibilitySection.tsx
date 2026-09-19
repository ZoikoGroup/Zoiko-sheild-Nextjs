"use client";

import React from "react";
import { motion } from "framer-motion";

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0" aria-hidden>
      <path d="M7 1.5V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M3.8 6.2L7 9.4l3.2-3.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 11.5h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export default function EnterpriseAccessibilitySection() {
  return (
    <section className="bg-[#f7f5f0] border-y border-[rgba(18,59,76,0.1)] w-full">
      <div className="flex flex-col gap-6 lg:gap-10 mx-auto max-w-[1440px] px-4 py-8 lg:px-[108px] lg:py-[60px]">
        <div className="flex flex-col gap-3 lg:gap-4 items-start w-full">
          <div className="flex gap-2 lg:gap-3 items-center w-full">
            <div className="bg-[#c44242] h-[2px] w-6 shrink-0" />
            <p className="font-jetbrains font-bold text-[11px] lg:text-[13px] text-[#c44242] tracking-[1px] lg:tracking-[1.5px] uppercase m-0">
              PROCUREMENT &amp; TRUST
            </p>
          </div>
          <h2 className="font-hanken font-extrabold text-[28px] lg:text-[28px] text-[#0a2029] tracking-[-0.5px] m-0 w-full">
            Enterprise ACR &amp; VPAT Registry
          </h2>
          <p className="font-manrope font-medium leading-[20px] lg:leading-[23px] text-[13px] lg:text-[15px] text-[#5b6670] m-0 w-full">
            We provide transparent documentation for compliance and
            security architects during the onboarding and audit phases.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col lg:flex-row gap-6 items-start lg:items-center p-5 lg:p-[24px] rounded-[16px] w-full"
        >
          <div className="flex flex-col gap-3 lg:gap-4 items-start w-full lg:flex-1">
            <p className="font-hanken font-extrabold text-[#0a2029] text-[18px] lg:text-[20px] m-0">
              Accessibility Conformance Report (ACR)
            </p>
            <p className="font-manrope font-normal text-[#5b6670] text-[13.5px] lg:text-[14.5px] leading-[20px] lg:leading-[22px] m-0">
              Our official ACR is based on the voluntary product
              accessibility template (VPAT 2.4 rev WCAG). This document is
              compiled following external manual auditing and contains
              detailed criteria-by-criteria conformance remarks.
            </p>
            <div className="flex gap-2 items-center text-[#c44242]">
              <DownloadIcon />
              <p className="font-manrope font-bold text-[#c44242] text-[13px] lg:text-[14px] m-0">
                Download Current VPAT (PDF) — Version 2.4.1
              </p>
            </div>
          </div>

          <div className="bg-[#f0ede6] flex flex-col gap-3 items-start p-5 lg:p-[24px] rounded-[12px] w-full lg:w-[400px]">
            <p className="font-jetbrains font-bold text-[#5b6670] text-[11px] m-0">
              PROCUREMENT METRICS
            </p>
            <p className="font-manrope font-semibold text-[#0a2029] text-[13px] lg:text-[14px] m-0">
              • Section 508 Compliant: Yes
            </p>
            <p className="font-manrope font-semibold text-[#0a2029] text-[13px] lg:text-[14px] m-0">
              • EN 301 549 Conformance: Verified
            </p>
            <p className="font-manrope font-semibold text-[#0a2029] text-[13px] lg:text-[14px] m-0">
              • Master VPAT updated: Nov 2025
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
