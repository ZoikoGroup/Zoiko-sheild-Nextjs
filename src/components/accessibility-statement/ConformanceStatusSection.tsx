"use client";

import React from "react";
import { motion } from "framer-motion";

function AlertTriangleIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M5 1.2L9 8.5H1L5 1.2Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      <path d="M5 4V5.8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <circle cx="5" cy="7.2" r="0.5" fill="currentColor" />
    </svg>
  );
}

export default function ConformanceStatusSection() {
  return (
    <section className="bg-[#f7f5f0] w-full">
      <div className="flex flex-col gap-6 lg:gap-8 mx-auto max-w-[1440px] px-4 py-8 lg:px-[108px] lg:py-[60px]">
        <div className="flex flex-col gap-3 lg:gap-4 items-start w-full">
          <div className="flex gap-2 lg:gap-3 items-center w-full">
            <div className="bg-[#c44242] h-[2px] w-6 shrink-0" />
            <p className="font-jetbrains font-bold text-[11px] lg:text-[13px] text-[#c44242] tracking-[1px] lg:tracking-[1.5px] uppercase m-0">
              AUDIT TELEMETRY
            </p>
          </div>
          <h2 className="font-hanken font-extrabold text-[28px] lg:text-[28px] text-[#0a2029] tracking-[-0.5px] m-0 w-full">
            Audit Methods &amp; Registry Summary
          </h2>
          <p className="font-manrope font-medium leading-[20px] lg:leading-[23px] text-[13px] lg:text-[15px] text-[#5b6670] m-0 w-full">
            Conformance status is computed from empirical evaluations. We
            present our live status alongside validated limitations.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-4 lg:gap-5 items-start p-5 lg:p-[24px] rounded-[16px] w-full"
        >
          <div className="flex items-center justify-between w-full">
            <p className="font-hanken font-extrabold text-[#0a2029] text-[17px] lg:text-[20px] m-0">
              Verification Registry
            </p>
            <div className="bg-[#fef3c7] flex gap-[6px] items-center px-[10px] py-1 rounded-full shrink-0">
              <span className="text-[#b45309]">
                <AlertTriangleIcon />
              </span>
              <p className="font-jetbrains font-bold text-[#b45309] text-[11px] tracking-[0.5px] m-0 whitespace-nowrap">
                PARTIALLY CONFORMANT
              </p>
            </div>
          </div>

          <div className="hidden lg:block bg-[rgba(18,59,76,0.1)] h-px w-full" />

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-start w-full">
            <div className="flex flex-col gap-3 items-start w-full lg:flex-1">
              <p className="font-jetbrains font-bold text-[#5b6670] text-[12px] m-0">
                EVALUATION METHODOLOGY
              </p>
              <div className="font-manrope font-normal text-[#0a2029] text-[13px] lg:text-[14px] flex flex-col gap-1">
                <p className="m-0">
                  • External Expert Manual Audit (WCAG 2.2)
                </p>
                <p className="m-0">
                  <span className="lg:hidden">• Screen Reader Testing (NVDA / VoiceOver)</span>
                  <span className="hidden lg:inline">• Screen Reader Testing (NVDA / JAWS / VoiceOver)</span>
                </p>
                <p className="m-0">• Automated Regression Scans (Deque Axe Core)</p>
              </div>
            </div>

            <div className="hidden lg:block bg-[rgba(18,59,76,0.1)] h-[70px] w-px shrink-0" />
            <div className="lg:hidden bg-[rgba(18,59,76,0.1)] h-px w-full" />

            <div className="flex flex-col gap-3 items-start w-full lg:flex-1">
              <p className="font-jetbrains font-bold text-[#5b6670] text-[12px] m-0">
                ACTIVE LIMITATION COUNT
              </p>
              <p className="font-hanken font-extrabold text-[#b45309] text-[28px] lg:text-[36px] m-0">
                4 Open Cases
              </p>
              <p className="font-manrope font-normal text-[#5b6670] text-[13px] m-0">
                None are categorized as Critical severity
              </p>
            </div>

            <div className="hidden lg:block bg-[rgba(18,59,76,0.1)] h-[70px] w-px shrink-0" />
            <div className="lg:hidden bg-[rgba(18,59,76,0.1)] h-px w-full" />

            <div className="flex flex-col gap-3 items-start w-full lg:flex-1">
              <p className="font-jetbrains font-bold text-[#5b6670] text-[12px] m-0">
                NEXT TARGET REVIEW
              </p>
              <p className="font-hanken font-extrabold text-[#0a2029] text-[20px] lg:text-[24px] m-0">
                April 2026
              </p>
              <p className="font-manrope font-normal text-[#5b6670] text-[13px] m-0">
                Committed re-audit window
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
