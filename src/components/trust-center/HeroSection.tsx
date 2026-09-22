"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IMG } from "./shared";

export default function HeroSection() {
  return (
    <section className="bg-[#f7f5f0] w-full relative overflow-hidden">
      {/* Glow effects */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-160px] top-[-120px] size-[560px] rounded-full bg-[radial-gradient(circle,rgba(196,66,66,0.28),transparent_70%)]" />
        <div className="absolute left-[36%] top-[120px] size-[440px] rounded-full bg-[radial-gradient(circle,rgba(31,122,108,0.16),transparent_70%)]" />
        <div className="absolute right-[-200px] bottom-[-220px] size-[600px] rounded-full bg-[radial-gradient(circle,rgba(10,32,41,0.26),transparent_70%)]" />
      </div>

      <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-8 items-center mx-auto max-w-[1440px] w-full px-4 sm:px-6 lg:px-10 xl:px-[108px] py-12 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 items-start flex-1 min-w-0 w-full lg:max-w-[640px]"
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#c44242] shrink-0" />
            <span className="font-sans font-bold text-[14px] text-[#c44242] uppercase tracking-[2.5px]">
              Trust &amp; Security
            </span>
          </div>

          <h1 className="font-sans font-extrabold leading-[1.15] text-[38px] sm:text-[44px] xl:text-[48px] text-[#0a2029] tracking-[-1px] m-0">
            Trust you can inspect.
          </h1>

          <p className="font-manrope font-medium leading-[26px] text-[16px] text-[#5b6670] m-0">
            Explore real-time data, programmatic posture validation, and
            cryptographic evidence. Our Trust Center houses complete assurance
            records covering Security Practices, Privacy, Responsible AI, Data
            Protection, and Vulnerability Disclosure.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 w-full sm:w-auto">
            <a
              href="#assurance-status"
              className="inline-flex items-center justify-center px-5 py-4 rounded-[10px] bg-[#c44242] hover:bg-[#b23636] transition-colors"
            >
              <span className="font-manrope font-bold text-[16px] text-white">Explore Trust &amp; Security</span>
            </a>
            <a
              href="#request-review"
              className="inline-flex items-center justify-center px-5 py-4 rounded-[10px] border border-[#0a2029] hover:bg-[#0a20290d] transition-colors"
            >
              <span className="font-manrope font-bold text-[16px] text-[#0a2029]">Request Security Review</span>
            </a>
          </div>

          <p className="font-sans text-[12px] text-[#5b6670] m-0">
            Scope: Production tenant us-east-2 · Updated every 24 hours automatically.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-[565px] lg:w-[46%] xl:w-[565px] shrink-0"
        >
          <div className="relative w-full aspect-[565/480] rounded-[16px] overflow-hidden">
            <Image
              src={`${IMG}/hero-visual.webp`}
              alt="Two executives reviewing an assurance dashboard"
              fill
              sizes="(max-width: 1024px) 100vw, 565px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
