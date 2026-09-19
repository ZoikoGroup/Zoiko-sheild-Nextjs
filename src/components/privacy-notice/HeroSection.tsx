"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function ArrowRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0" aria-hidden>
      <path d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5" stroke="#5b6670" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="bg-[#f7f5f0] w-full relative overflow-hidden">
      <div
        className="hidden lg:block absolute left-[45%] -top-[60px] size-[600px] rounded-full bg-[radial-gradient(circle,rgba(196,66,66,0.12),transparent_70%)] opacity-60 pointer-events-none"
        aria-hidden
      />

      <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-8 mx-auto max-w-[1440px] px-4 py-6 lg:px-[108px] lg:py-[60px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-4 lg:gap-5 items-start w-full lg:flex-1 lg:max-w-[720px]"
        >
          <div className="flex gap-2 lg:gap-3 items-center">
            <div className="bg-[#c44242] h-[2px] w-6 lg:w-[32px] shrink-0" />
            <p className="font-jetbrains font-bold text-[12px] lg:text-[14px] text-[#c44242] tracking-[1.2px] lg:tracking-[1.68px] uppercase m-0">
              PRIVACY NOTICE
            </p>
          </div>

          <h1 className="font-hanken font-extrabold leading-[38px] lg:leading-[52px] text-[32px] lg:text-[48px] text-[#0a2029] tracking-[-0.6px] lg:tracking-[-1px] m-0">
            How Zoiko Shield handles personal data
          </h1>

          <p className="font-manrope font-medium leading-[22px] lg:leading-[24px] text-[15px] lg:text-[16px] text-[#5b6670] m-0">
            Understand what personal data Zoiko Shield processes, why we
            use it, who receives it, how long we retain it, and the
            choices and rights that may be available to you.
          </p>

          <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-start pt-1 lg:pt-3 w-full">
            <div className="bg-[#f0ede6] border border-[rgba(18,59,76,0.1)] flex items-start px-[10px] py-1 rounded-[6px]">
              <p className="font-jetbrains font-bold text-[#5b6670] text-[11px] m-0 whitespace-nowrap">
                EFFECTIVE: [LEGAL_REGISTRY]
              </p>
            </div>
            <div className="bg-[#f0ede6] border border-[rgba(18,59,76,0.1)] flex items-start px-[10px] py-1 rounded-[6px]">
              <p className="font-jetbrains font-bold text-[#5b6670] text-[11px] m-0 whitespace-nowrap">
                LAST UPDATED: [LEGAL_REGISTRY]
              </p>
            </div>
            <div className="bg-[rgba(31,122,108,0.1)] border border-[#1f7a6c] flex items-start px-[10px] py-1 rounded-[6px]">
              <p className="font-jetbrains font-bold text-[#1f7a6c] text-[11px] m-0 whitespace-nowrap">
                VERSION: [NOTICE_VERSION] (ACTIVE)
              </p>
            </div>
          </div>

          <div className="relative h-[220px] w-full rounded-[16px] overflow-hidden lg:hidden">
            <Image
              src="/images/privacy-notice/hero-visual.webp"
              alt="Zoiko Shield privacy and data protection overview"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          <p className="font-manrope font-normal text-[12px] text-[#5b6670] m-0">
            This notice applies where Zoiko Shield processes personal data
            as a controller. For processing governed by a customer Data
            Processing Addendum (DPA), please contact the licensing
            organization.
          </p>

          <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 items-start pt-1 lg:pt-3 w-full">
            <button className="w-full lg:w-auto flex items-center justify-center bg-[#c44242] px-6 py-3 rounded-[8px]">
              <span className="font-manrope font-bold text-white text-[14px] whitespace-nowrap">
                Exercise Privacy Rights
              </span>
            </button>
            <button className="w-full lg:w-auto flex items-center justify-center border border-[#0a2440] px-6 py-3 rounded-[8px]">
              <span className="font-manrope font-bold text-[#0a2440] text-[14px] whitespace-nowrap">
                Manage Cookie Choices
              </span>
            </button>
            <a href="#" className="hidden lg:flex gap-1 items-center px-[18px] py-3 rounded-[8px]">
              <span className="font-manrope font-semibold text-[#5b6670] text-[14px] whitespace-nowrap">
                View Trust Center
              </span>
              <ArrowRightIcon />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hidden lg:block relative h-[360px] w-[500px] shrink-0 rounded-[16px] overflow-hidden border border-[rgba(18,59,76,0.1)]"
        >
          <Image
            src="/images/privacy-notice/hero-visual.webp"
            alt="Zoiko Shield privacy and data protection overview"
            fill
            sizes="500px"
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
