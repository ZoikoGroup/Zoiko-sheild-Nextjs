"use client";

import React from "react";
import { motion } from "framer-motion";

const rows = [
  {
    version: "v2.4.1 (Current)",
    date: "November 24, 2025",
    summary: "Updated target conformance standard from WCAG 2.1 to WCAG 2.2 AA",
    scope: "Platform Ingestion, Shield Console, Ingest Wizard",
    scopeMobile: "Scope: Platform Ingestion, Shield Console, Ingest Wizard",
  },
  {
    version: "v2.3.0",
    date: "June 12, 2024",
    summary: "Initial release following comprehensive third-party manual audit",
    scope: "Dashboard views, legacy reporting, log viewers",
    scopeMobile: "Scope: Dashboard views, legacy reporting, log viewers",
  },
];

export default function VersionHistorySection() {
  return (
    <section className="bg-[#f7f5f0] border-y border-[rgba(18,59,76,0.1)] w-full">
      <div className="flex flex-col gap-6 lg:gap-10 mx-auto max-w-[1440px] px-4 py-8 lg:px-[108px] lg:py-[60px]">
        <div className="flex flex-col gap-3 lg:gap-4 items-start w-full">
          <div className="flex gap-2 lg:gap-3 items-center w-full">
            <div className="bg-[#c44242] h-[2px] w-6 shrink-0" />
            <p className="font-jetbrains font-bold text-[11px] lg:text-[13px] text-[#c44242] tracking-[1px] lg:tracking-[1.5px] uppercase m-0">
              LEGAL AUDIT TRAIL
            </p>
          </div>
          <h2 className="font-hanken font-extrabold text-[28px] lg:text-[28px] text-[#0a2029] tracking-[-0.5px] m-0 w-full">
            Statement Revision Log
          </h2>
          <p className="font-manrope font-medium leading-[20px] lg:leading-[23px] text-[13px] lg:text-[15px] text-[#5b6670] m-0 w-full">
            Transparency is maintained through complete revision history.
            Every audit version remains documented below.
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden lg:flex bg-white border border-[rgba(18,59,76,0.1)] flex-col items-start overflow-hidden rounded-[12px] w-full">
          <div className="bg-[#f0ede6] flex items-start px-6 py-4 w-full font-jetbrains font-bold text-[#0a2029] text-[12px]">
            <p className="w-[120px] m-0">VERSION</p>
            <p className="w-[180px] m-0">PUBLISHED DATE</p>
            <p className="w-[280px] m-0">CHANGE SUMMARY</p>
            <p className="flex-1 m-0">AUDIT SCOPE</p>
          </div>
          {rows.map((r) => (
            <div key={r.version} className="border-b border-[rgba(18,59,76,0.1)] flex items-center px-6 py-4 w-full last:border-b-0">
              <p className="font-jetbrains font-bold text-[#0a2029] text-[13px] w-[120px] m-0">{r.version}</p>
              <p className="font-manrope font-normal text-[#5b6670] text-[14px] w-[180px] m-0">{r.date}</p>
              <p className="font-manrope font-normal text-[#5b6670] text-[14px] w-[280px] m-0">{r.summary}</p>
              <p className="font-manrope font-normal text-[#0a2029] text-[14px] flex-1 m-0">{r.scope}</p>
            </div>
          ))}
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden flex flex-col gap-4 w-full">
          {rows.map((r, i) => (
            <motion.div
              key={r.version}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
              className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-5 rounded-[12px] w-full"
            >
              <div className="flex items-center justify-between w-full">
                <p className="font-jetbrains font-bold text-[#0a2029] text-[14px] m-0">{r.version}</p>
                <p className="font-jetbrains font-normal text-[#5b6670] text-[12px] m-0">{r.date}</p>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p className="font-manrope font-normal text-[#0a2029] text-[13px] leading-[18px] m-0">
                  {r.summary}
                </p>
                <p className="font-manrope font-normal text-[#5b6670] text-[12px] m-0">{r.scopeMobile}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
