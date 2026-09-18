"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-[#f7f5f0] w-full relative overflow-hidden">
      <div className="relative flex flex-col mx-auto max-w-[1440px] w-full px-[22px] lg:px-[108px] py-8 lg:py-[80px]">
        {/* Glow effects */}
        <div
          aria-hidden
          className="hidden lg:block absolute left-0 -top-[100px] size-[700px] rounded-full bg-[radial-gradient(circle,rgba(196,66,66,0.18),transparent_70%)] opacity-60 pointer-events-none"
        />
        <div
          aria-hidden
          className="hidden lg:block absolute left-[100px] top-0 size-[600px] rounded-full bg-[radial-gradient(circle,rgba(31,122,108,0.15),transparent_70%)] opacity-60 pointer-events-none"
        />

        <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-[40px] items-center lg:items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6 lg:gap-[24px] items-start flex-1 min-w-0 w-full"
          >
            <div className="flex gap-2 items-center">
              <div className="bg-[#c44242] size-[8px] shrink-0" />
              <p className="font-jetbrains font-bold text-[13px] text-[#c44242] tracking-[1.68px] uppercase m-0">
                CLOUD PLATFORM
              </p>
            </div>

            <h1 className="font-hanken font-extrabold leading-[1.07] text-[36px] sm:text-[44px] lg:text-[56px] text-[#0a2029] tracking-[-1.2px] m-0">
              Connect every cloud without losing source truth.
            </h1>

            <p className="font-manrope font-medium leading-[27px] text-[16px] lg:text-[18px] text-[#5b6670] m-0 max-w-[560px]">
              Bring cloud posture, security findings, audit activity, assets,
              workloads, APIs, and compliance evidence into Zoiko Shield
              while preserving provider context, scope, permissions,
              timestamps, and evidence lineage.
            </p>

            <div className="flex flex-wrap gap-4 items-center pt-3">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-[14px] rounded-[10px] bg-[#c44242] shadow-[0px_4px_6px_rgba(196,66,66,0.2)] hover:bg-[#b23636] transition-colors"
              >
                <span className="font-manrope font-bold text-[15px] text-white whitespace-nowrap">
                  Explore cloud integrations
                </span>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-[14px] rounded-[10px] border-[1.5px] border-[#123b4c] hover:bg-[#123b4c0d] transition-colors"
              >
                <span className="font-manrope font-bold text-[15px] text-[#123b4c] whitespace-nowrap">
                  Request a Demo
                </span>
              </a>
            </div>

            <div className="flex gap-2 items-center pt-6">
              <svg
                className="shrink-0"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx="8" cy="8" r="7.5" stroke="#1f7a6c" />
                <path
                  d="M4.5 8.2L6.8 10.5L11.5 5.5"
                  stroke="#1f7a6c"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="font-jetbrains font-bold text-[12px] text-[#0a2029] whitespace-nowrap m-0">
                Provider-aware. Evidence-ready. Policy-governed. Multi-cloud
                by design.
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex flex-1 items-center justify-center w-full lg:w-auto"
          >
            <div className="relative rounded-[16px] w-full h-[280px] sm:size-[420px] lg:size-[560px] overflow-hidden shrink-0">
              <Image
                src="/images/cloud-platform-integrations/hero-visual.webp"
                alt="Cloud platform integration visualization"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
