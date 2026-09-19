"use client";

import React from "react";
import { motion } from "framer-motion";

const entries = [
  {
    id: "ZKS-01",
    name: "__zks_session",
    domain: "zoikoshield.com",
    duration: "Session (Browser)",
    durationShort: "Session · First Party",
    category: "Essential",
    categoryBg: "bg-[#e4f0ec]",
    categoryText: "text-[#1f7a6c]",
    desc: "Maintains compliant operational workspace integrity and API routing.",
  },
  {
    id: "ZKS-02",
    name: "__zks_csrf",
    domain: "zoikoshield.com",
    duration: "Session (Browser)",
    durationShort: "Session · First Party",
    category: "Essential",
    categoryBg: "bg-[#e4f0ec]",
    categoryText: "text-[#1f7a6c]",
    desc: "Prevents Cross-Site Request Forgery (CSRF) exploits on forms.",
  },
  {
    id: "ZKS-03",
    name: "__zks_preferences",
    domain: "zoikoshield.com",
    duration: "365 Days (Persistent)",
    durationShort: "365 Days · First Party",
    category: "Preferences",
    categoryBg: "bg-[#ddeaf9]",
    categoryText: "text-[#4e668a]",
    desc: "Saves language selector configurations and dark mode preferences.",
  },
  {
    id: "ZKS-04",
    name: "__zks_telemetry",
    domain: "zoikoshield.com",
    duration: "90 Days (Persistent)",
    durationShort: "90 Days · First Party",
    category: "Analytics",
    categoryBg: "bg-[#ddeaf9]",
    categoryText: "text-[#4e668a]",
    desc: "Measures server response performance in privacy-safe sandbox environment.",
  },
];

export default function TechnologyRegistrySection() {
  return (
    <section className="bg-[#f0ede6] w-full">
      <div className="flex flex-col gap-6 lg:gap-8 mx-auto max-w-[1440px] px-4 py-6 lg:px-[108px] lg:py-[60px]">
        <div className="flex flex-col gap-2 lg:gap-3 items-start">
          <div className="flex gap-2 lg:gap-3 items-center">
            <div className="bg-[#c44242] h-[2px] w-4 lg:w-[24px] shrink-0" />
            <p className="font-hanken lg:font-sans font-medium text-[11px] lg:text-[13px] text-[#c44242] tracking-[1px] lg:tracking-[1.5px] uppercase m-0">
              SOURCE OF TRUTH
            </p>
          </div>
          <h2 className="font-hanken lg:font-sans font-extrabold text-[22px] lg:text-[32px] text-[#0a2029] m-0">
            <span className="lg:hidden">Real-Time Registry</span>
            <span className="hidden lg:inline">Real-Time Technology Registry</span>
          </h2>
          <p className="font-manrope lg:font-sans font-normal text-[13px] lg:text-[15px] text-[#5b6670] m-0">
            Transparency verified by automated scans. We do not use unlisted
            tracking scripts.
          </p>
        </div>

        {/* Search bar */}
        <div className="bg-white flex flex-col lg:flex-row gap-3 lg:gap-4 items-stretch lg:items-center p-3 lg:p-[12px] rounded-[8px] w-full">
          <div className="border border-[rgba(18,59,76,0.1)] flex flex-1 lg:max-w-[320px] gap-2 items-center px-3 py-2 rounded-[6px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0" aria-hidden>
              <circle cx="6" cy="6" r="4.5" stroke="#5b6670" strokeWidth="1.2" />
              <path d="M9.5 9.5L12.5 12.5" stroke="#5b6670" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <p className="font-manrope lg:font-sans font-normal text-[#5b6670] text-[13px] m-0">
              Search technologies...
            </p>
          </div>
          <div className="hidden lg:flex gap-2 items-start">
            {["Category: All", "Duration: All", "Type: First Party"].map((label) => (
              <div
                key={label}
                className="border border-[rgba(18,59,76,0.1)] flex gap-[6px] items-center px-3 py-2 rounded-[6px]"
              >
                <p className="font-sans font-normal text-[#0a2029] text-[13px] m-0">{label}</p>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="#5b6670" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop table */}
        <div className="hidden lg:flex bg-white border border-[rgba(18,59,76,0.1)] flex-col items-start overflow-hidden rounded-[12px] w-full">
          <div className="bg-[#f7f5f0] flex items-start px-6 py-4 w-full text-[#0a2029] text-[12px] font-bold font-sans">
            <p className="w-[120px] m-0">ID</p>
            <p className="w-[180px] m-0">NAME</p>
            <p className="w-[160px] m-0">DOMAIN / HOST</p>
            <p className="w-[140px] m-0">CATEGORY</p>
            <p className="w-[140px] m-0">DURATION</p>
            <p className="flex-1 m-0">SPECIFIC PURPOSE</p>
          </div>
          {entries.map((e) => (
            <div
              key={e.id}
              className="border-b border-[rgba(18,59,76,0.1)] flex items-center px-6 py-4 w-full last:border-b-0"
            >
              <p className="font-sans font-bold text-[#c44242] text-[13px] w-[120px] m-0">{e.id}</p>
              <p className="font-sans font-extrabold text-[#0a2029] text-[14px] w-[180px] m-0">{e.name}</p>
              <p className="font-sans font-normal text-[#5b6670] text-[13px] w-[160px] m-0">{e.domain}</p>
              <div className="w-[140px]">
                <div className={`${e.categoryBg} inline-flex items-start px-[10px] py-1 rounded-full`}>
                  <p className={`font-sans font-bold ${e.categoryText} text-[11px] whitespace-nowrap m-0`}>
                    {e.category}
                  </p>
                </div>
              </div>
              <p className="font-sans font-normal text-[#0a2029] text-[13px] w-[140px] m-0">{e.duration}</p>
              <p className="flex-1 font-sans font-normal text-[#5b6670] text-[13px] m-0">{e.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden flex flex-col gap-3 w-full">
          {entries.map((e, i) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
              className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-[14px] rounded-[10px] w-full"
            >
              <div className="flex items-center justify-between w-full">
                <p className="font-manrope font-bold text-[#c44242] text-[13px] m-0">{e.id}</p>
                <div className={`${e.categoryBg} flex items-start px-[10px] py-1 rounded-full`}>
                  <p className={`font-manrope font-bold ${e.categoryText} text-[11px] m-0`}>{e.category}</p>
                </div>
              </div>
              <p className="font-hanken font-extrabold text-[#0a2029] text-[15px] m-0">{e.name}</p>
              <div className="flex flex-col gap-1 w-full">
                <p className="font-manrope font-normal text-[#5b6670] text-[12px] m-0">
                  DOMAIN / HOST: {e.domain}
                </p>
                <p className="font-manrope font-normal text-[#5b6670] text-[12px] m-0">
                  DURATION: {e.durationShort}
                </p>
              </div>
              <p className="font-manrope font-normal text-[#5b6670] text-[13px] leading-[17px] m-0">
                {e.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
