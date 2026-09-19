"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-[#f7f5f0] w-full relative overflow-hidden">
      <div
        className="hidden lg:block absolute left-[36%] -top-[40px] size-[600px] rounded-full bg-[radial-gradient(circle,rgba(196,66,66,0.12),transparent_70%)] opacity-60 pointer-events-none"
        aria-hidden
      />

      <div className="relative flex flex-col gap-4 lg:gap-0 mx-auto max-w-[1440px] px-4 py-6 lg:px-[80px] lg:pt-[60px] lg:pb-[40px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col lg:flex-row gap-6 lg:gap-[40px] items-start w-full"
        >
          <div className="flex flex-col gap-4 lg:gap-6 items-start w-full lg:w-[676px] shrink-0">
            <div className="flex gap-2 lg:gap-3 items-center">
              <div className="bg-[#c44242] h-[2px] w-6 lg:w-[32px] shrink-0" />
              <p className="font-jetbrains font-bold text-[11px] lg:text-[14px] text-[#c44242] tracking-[1.5px] lg:tracking-[1.68px] uppercase m-0">
                LEGAL &amp; GOVERNANCE
              </p>
            </div>

            <h1 className="font-hanken font-extrabold leading-[38px] lg:leading-[60px] text-[34px] lg:text-[56px] text-[#0a2029] tracking-[-0.8px] lg:tracking-[-1.2px] m-0">
              Legal notices
            </h1>

            <p className="font-sans font-medium leading-[22px] lg:leading-[27px] text-[15px] lg:text-[18px] text-[#5b6670] m-0 lg:w-[632px]">
              This page provides official statutory, intellectual property,
              and operational notices relating to Zoiko Shield. It is
              designed to offer full transparency for corporate compliance,
              procurement, and regulatory review teams.
            </p>

            <div className="relative h-[180px] w-full rounded-[16px] overflow-hidden lg:hidden">
              <Image
                src="/images/legal-notices/hero-banner.webp"
                alt="Zoiko Shield legal and governance overview"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>

            <button className="lg:hidden w-full flex items-center justify-between bg-white border border-[rgba(18,59,76,0.12)] p-3 rounded-[10px]">
              <span className="font-manrope font-bold text-[#0a2029] text-[13px]">
                Jump to Legal Section
              </span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#5b6670" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex flex-col h-[374px] items-start relative shrink-0 w-[480px]">
            <div className="relative h-[374px] w-[547px] rounded-[24px] overflow-hidden">
              <Image
                src="/images/legal-notices/hero-banner.webp"
                alt="Zoiko Shield legal and governance overview"
                fill
                sizes="547px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
