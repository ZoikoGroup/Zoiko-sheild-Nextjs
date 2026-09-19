"use client";

import React from "react";
import { motion } from "framer-motion";

function ShieldCheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M5 1L8.5 2.3v2.5C8.5 7.2 7 8.6 5 9c-2-.4-3.5-1.8-3.5-4.2V2.3L5 1Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      <path d="M3.5 5l1.1 1.1L6.6 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function AlertTriangleIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M5 1.2L9 8.5H1L5 1.2Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      <path d="M5 4V5.8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <circle cx="5" cy="7.2" r="0.5" fill="currentColor" />
    </svg>
  );
}

const rows = [
  {
    os: "Windows 11",
    browser: "Google Chrome (latest)",
    browserMobile: "Google Chrome",
    at: "NVDA / Keyboard Only",
    status: "FULLY CONFORMANT",
    statusMobile: "VERIFIED",
    statusBg: "bg-[#e4f0ec]",
    statusText: "text-[#1f7a6c]",
    icon: "shield" as const,
  },
  {
    os: "macOS Sonoma",
    browser: "Apple Safari (latest)",
    browserMobile: "Apple Safari",
    at: "VoiceOver / Zoom / Keyboard",
    status: "PARTIALLY CONFORMANT",
    statusMobile: "PARTIAL",
    statusBg: "bg-[#fef3c7]",
    statusText: "text-[#b45309]",
    icon: "alert" as const,
  },
];

export default function TestingCompatibilitySection() {
  return (
    <section className="bg-[#f7f5f0] border-y border-[rgba(18,59,76,0.1)] w-full">
      <div className="flex flex-col gap-6 lg:gap-10 mx-auto max-w-[1440px] px-4 py-8 lg:px-[108px] lg:py-[60px]">
        <div className="flex flex-col gap-3 lg:gap-4 items-start w-full">
          <div className="flex gap-2 lg:gap-3 items-center w-full">
            <div className="bg-[#c44242] h-[2px] w-6 shrink-0" />
            <p className="font-jetbrains font-bold text-[11px] lg:text-[13px] text-[#c44242] tracking-[1px] lg:tracking-[1.5px] uppercase m-0">
              EMPIRICAL COMPATIBILITY
            </p>
          </div>
          <h2 className="font-hanken font-extrabold text-[28px] lg:text-[28px] text-[#0a2029] tracking-[-0.5px] m-0 w-full">
            Testing Matrix &amp; Environment Details
          </h2>
          <p className="font-manrope font-medium leading-[20px] lg:leading-[23px] text-[13px] lg:text-[15px] text-[#5b6670] m-0 w-full">
            We test our system manually against typical assistive technology
            configurations. These results represent real validated
            environments.
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden lg:flex bg-white border border-[rgba(18,59,76,0.1)] flex-col items-start overflow-hidden rounded-[12px] w-full">
          <div className="bg-[#f0ede6] flex items-start px-6 py-4 w-full font-jetbrains font-bold text-[#0a2029] text-[12px]">
            <p className="w-[200px] m-0">OPERATING SYSTEM</p>
            <p className="w-[240px] m-0">BROWSER</p>
            <p className="w-[280px] m-0">ASSISTIVE TECHNOLOGY</p>
            <p className="flex-1 m-0">VERIFIED STATUS</p>
          </div>
          {rows.map((r) => (
            <div key={r.os} className="border-b border-[rgba(18,59,76,0.1)] flex items-center px-6 py-4 w-full last:border-b-0">
              <p className="font-manrope font-semibold text-[#0a2029] text-[14.5px] w-[200px] m-0">{r.os}</p>
              <p className="font-manrope font-normal text-[#5b6670] text-[14px] w-[240px] m-0">{r.browser}</p>
              <p className="font-manrope font-normal text-[#5b6670] text-[14px] w-[280px] m-0">{r.at}</p>
              <div className="flex-1">
                <div className={`${r.statusBg} inline-flex gap-[6px] items-center px-[10px] py-1 rounded-full`}>
                  <span className={r.statusText}>
                    {r.icon === "shield" ? <ShieldCheckIcon /> : <AlertTriangleIcon />}
                  </span>
                  <p className={`font-jetbrains font-bold ${r.statusText} text-[11px] tracking-[0.5px] m-0 whitespace-nowrap`}>
                    {r.status}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden flex flex-col gap-4 w-full">
          {rows.map((r, i) => (
            <motion.div
              key={r.os}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
              className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-4 items-start p-5 rounded-[12px] w-full"
            >
              <div className="flex items-center justify-between w-full">
                <p className="font-hanken font-extrabold text-[#0a2029] text-[16px] m-0">{r.os}</p>
                <div className={`${r.statusBg} flex items-start px-[10px] py-1 rounded-full`}>
                  <p className={`font-jetbrains font-bold ${r.statusText} text-[10px] tracking-[0.5px] m-0 whitespace-nowrap`}>
                    {r.statusMobile}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex gap-2 items-baseline">
                  <p className="font-jetbrains font-bold text-[#5b6670] text-[11px] m-0">BROWSER:</p>
                  <p className="font-manrope font-normal text-[#0a2029] text-[13px] m-0">{r.browserMobile}</p>
                </div>
                <div className="flex gap-2 items-baseline">
                  <p className="font-jetbrains font-bold text-[#5b6670] text-[11px] m-0">ASSISTIVE TECH:</p>
                  <p className="font-manrope font-normal text-[#0a2029] text-[13px] m-0">{r.at}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
