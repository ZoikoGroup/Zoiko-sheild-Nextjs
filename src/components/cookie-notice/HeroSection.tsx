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

      <div className="relative flex flex-col-reverse lg:flex-row gap-8 lg:gap-[40px] items-start mx-auto max-w-[1440px] px-4 py-6 lg:px-[108px] lg:py-[60px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-5 lg:gap-6 items-start w-full lg:max-w-[720px]"
        >
          <div className="flex gap-2 lg:gap-3 items-center">
            <div className="bg-[#c44242] h-[2px] w-4 lg:w-[32px] shrink-0" />
            <p className="font-hanken lg:font-sans font-bold text-[11px] lg:text-[14px] text-[#c44242] tracking-[1px] lg:tracking-[1.68px] uppercase m-0">
              LEGAL &amp; GOVERNANCE
            </p>
          </div>

          <h1 className="font-hanken lg:font-sans font-extrabold leading-[38px] lg:leading-[60px] text-[32px] lg:text-[56px] text-[#0a2029] tracking-[-0.5px] lg:tracking-[-1.2px] m-0">
            Cookie Notice
          </h1>

          <p className="font-manrope lg:font-sans font-normal lg:font-medium leading-[22px] lg:leading-[27px] text-[15px] lg:text-[18px] text-[#5b6670] m-0">
            Learn how Zoiko Shield uses cookies and similar storage/access
            technologies on its websites and digital services, why they are
            used, and how you can manage your choices.
          </p>

          {/* Hero photo - mobile position (between copy and metadata) */}
          <div className="lg:hidden relative h-[238px] w-full rounded-[16px] overflow-hidden">
            <Image
              src="/images/cookie-notice/hero-photo.webp"
              alt="Zoiko Shield cookie governance control room"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="bg-[#f0ede6] flex flex-col lg:flex-row gap-3 lg:gap-8 items-start p-3 lg:p-[16px] rounded-[8px] w-full">
            <div className="flex items-start justify-between w-full lg:contents">
              <div className="flex flex-col gap-[2px] lg:gap-1 items-start">
                <p className="font-manrope lg:font-sans font-semibold text-[#5b6670] text-[9px] lg:text-[11px] m-0">
                  EFFECTIVE DATE
                </p>
                <p className="font-manrope lg:font-sans font-bold text-[#0a2029] text-[12px] lg:text-[13px] m-0">
                  January 13, 2026
                </p>
              </div>
              <div className="flex flex-col gap-[2px] lg:gap-1 items-start">
                <p className="font-manrope lg:font-sans font-semibold text-[#5b6670] text-[9px] lg:text-[11px] m-0">
                  VERSION
                </p>
                <p className="font-manrope lg:font-sans font-bold text-[#0a2029] text-[12px] lg:text-[13px] m-0">
                  v2.4 (Active Audit)
                </p>
              </div>
            </div>
            <div className="h-px w-full bg-[rgba(18,59,76,0.1)] lg:hidden" />
            <div className="flex flex-col gap-[2px] lg:gap-1 items-start">
              <p className="font-manrope lg:font-sans font-semibold text-[#5b6670] text-[9px] lg:text-[11px] m-0">
                LAST REAL-TIME SCAN
              </p>
              <p className="font-manrope lg:font-sans font-bold text-[#1f7a6c] text-[12px] lg:text-[13px] m-0">
                Today, 04:00 AM (Verified)
              </p>
            </div>
          </div>

          <div className="hidden lg:flex gap-4 items-center pt-0">
            <button className="inline-flex items-center justify-center px-[28px] py-[16px] rounded-[10px] bg-[#c44242] hover:bg-[#b23636] transition-colors">
              <span className="font-sans font-bold text-[15px] text-white whitespace-nowrap">
                Manage Cookie Preferences
              </span>
            </button>
            <button className="inline-flex items-center justify-center px-[24px] py-[16px] rounded-[10px] border border-[#4e668a] hover:bg-[#4e668a0d] transition-colors">
              <span className="font-sans font-bold text-[15px] text-[#4e668a] whitespace-nowrap">
                View Technology Registry
              </span>
            </button>
            <button className="inline-flex items-center justify-center px-[12px] py-[16px]">
              <span className="font-sans font-bold text-[15px] text-[#5b6670] underline whitespace-nowrap">
                Privacy Notice
              </span>
            </button>
          </div>

          <div className="hidden lg:flex gap-2 items-center w-full">
            <svg
              className="shrink-0"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden
            >
              <circle cx="7" cy="7" r="6" stroke="#5b6670" strokeWidth="1.2" />
              <path d="M7 6.2V10" stroke="#5b6670" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7" cy="4.2" r="0.7" fill="#5b6670" />
            </svg>
            <p className="flex-1 font-sans font-medium text-[13px] text-[#5b6670] m-0">
              Choices can be updated at any time. Non-essential technologies
              follow active preferences and jurisdiction rules.
            </p>
          </div>
        </motion.div>

        {/* Hero photo - desktop position (right column) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hidden lg:block relative h-[360px] w-[480px] shrink-0 rounded-[16px] overflow-hidden"
        >
          <Image
            src="/images/cookie-notice/hero-photo.webp"
            alt="Zoiko Shield cookie governance control room"
            fill
            sizes="480px"
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
