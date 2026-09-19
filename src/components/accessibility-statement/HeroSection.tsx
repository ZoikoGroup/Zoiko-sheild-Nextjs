"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-[#f7f5f0] w-full relative overflow-hidden">
      <div
        className="hidden lg:block absolute left-0 -top-[100px] size-[700px] rounded-full bg-[radial-gradient(circle,rgba(196,66,66,0.14),transparent_70%)] opacity-60 pointer-events-none"
        aria-hidden
      />
      <div
        className="hidden lg:block absolute left-[100px] top-0 size-[600px] rounded-full bg-[radial-gradient(circle,rgba(31,122,108,0.12),transparent_70%)] opacity-60 pointer-events-none"
        aria-hidden
      />

      <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center mx-auto max-w-[1440px] px-4 py-8 lg:px-[108px] lg:py-[60px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-5 lg:gap-6 items-start w-full lg:flex-1 lg:max-w-[960px]"
        >
          <div className="flex gap-2 lg:gap-3 items-center">
            <div className="bg-[#c44242] h-[2px] w-6 lg:w-[32px] shrink-0" />
            <p className="font-jetbrains font-bold text-[11px] lg:text-[14px] text-[#c44242] tracking-[1px] lg:tracking-[1.68px] uppercase m-0">
              LEGAL &amp; GOVERNANCE
            </p>
          </div>

          <h1 className="font-hanken font-extrabold leading-[38px] lg:leading-[60px] text-[32px] lg:text-[56px] text-[#0a2029] tracking-[-0.5px] lg:tracking-[-1.2px] m-0">
            Accessibility Statement
          </h1>

          <p className="font-manrope font-medium leading-[22px] lg:leading-[27px] text-[15px] lg:text-[18px] text-[#5b6670] m-0">
            Zoiko Shield is committed to making its digital experiences
            usable by people with disabilities and to improving
            accessibility through standards-based design, testing,
            feedback, and remediation.
          </p>

          <div className="relative h-[220px] lg:hidden w-full rounded-[16px] overflow-hidden">
            <Image
              src="/images/accessibility-statement/hero-team.webp"
              alt="Zoiko Shield accessibility engineering team"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-3 lg:gap-3 items-start w-full lg:w-[553px]">
            <button className="w-full lg:flex-1 flex items-center justify-center bg-[#c44242] px-6 py-[14px] lg:py-[16px] rounded-[10px]">
              <span className="font-manrope font-bold text-[14px] lg:text-[15px] text-white text-center">
                <span className="lg:hidden">Report an Accessibility Barrier</span>
                <span className="hidden lg:inline">Report an Accessibility Issue</span>
              </span>
            </button>
            <button className="w-full lg:flex-1 flex items-center justify-center border border-[#123b4c] px-6 py-[14px] lg:py-[16px] rounded-[10px]">
              <span className="font-manrope font-bold text-[14px] lg:text-[15px] text-[#123b4c] text-center">
                <span className="lg:hidden">View Conformance Registry</span>
                <span className="hidden lg:inline">Request Alternative Access</span>
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hidden lg:block relative h-[464px] w-[639px] shrink-0 rounded-[16px] overflow-hidden"
        >
          <Image
            src="/images/accessibility-statement/hero-team.webp"
            alt="Zoiko Shield accessibility engineering team"
            fill
            sizes="639px"
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
