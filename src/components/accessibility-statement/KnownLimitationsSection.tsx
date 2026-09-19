"use client";

import React from "react";
import { motion } from "framer-motion";

function StatusIcon({ variant }: { variant: "alert-triangle" | "alert-circle" }) {
  if (variant === "alert-triangle") {
    return (
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
        <path d="M5 1.2L9 8.5H1L5 1.2Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
        <path d="M5 4V5.8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="5" cy="7.2" r="0.5" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <circle cx="5" cy="5" r="4.2" stroke="currentColor" strokeWidth="1" />
      <path d="M5 3V5.4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <circle cx="5" cy="7" r="0.5" fill="currentColor" />
    </svg>
  );
}

const desktopRows = [
  {
    id: "ACC-304",
    surface: "Integration UI",
    title: "Search Filter Focus Trap",
    desc: "Keyboard focus gets lost when tabbing through the active status filters. (WCAG 2.1.1)",
    workaround: "Use the default browser tabbing structure or the unfiltered table view.",
    status: "STALE",
    statusBg: "bg-[#fbefef]",
    statusText: "text-[#a43737]",
    icon: "alert-triangle" as const,
    target: "Q1 2026 Release",
  },
  {
    id: "ACC-112",
    surface: "Log Archival",
    title: "Low Contrast Diagnostic Data",
    desc: "Faint grey text in historical raw-JSON logs falls below 4.5:1. (WCAG 1.4.3)",
    workaround: "Copy the log text into a local plaintext editor or enable system high-contrast mode.",
    status: "BETA",
    statusBg: "bg-[#fef3c7]",
    statusText: "text-[#b45309]",
    icon: "alert-circle" as const,
    target: "In Validation",
  },
];

const mobileCards = [
  {
    id: "ACC-304",
    badge: "REMEDIATION PLANNED",
    surface: "SURFACE: INTEGRATION UI",
    title: "Search Filter Focus Trap",
    desc: "Keyboard focus gets lost when tabbing through the active status filters. (WCAG 2.1.1)",
    workaround: "Use the default browser tabbing structure or the unfiltered table view.",
  },
  {
    id: "ACC-112",
    badge: "IN VALIDATION",
    surface: "SURFACE: LOG ARCHIVAL",
    title: "Low Contrast Diagnostic Data",
    desc: "Faint grey text in historical raw-JSON logs falls below 4.5:1 ratio constraint. (WCAG 1.4.3)",
    workaround: "Copy log text into a local plaintext editor or enable system high-contrast mode.",
  },
];

export default function KnownLimitationsSection() {
  return (
    <section className="bg-[#f7f5f0] w-full">
      <div className="flex flex-col gap-6 lg:gap-8 mx-auto max-w-[1440px] px-4 py-8 lg:px-[108px] lg:py-[60px]">
        <div className="flex flex-col gap-3 lg:gap-4 items-start w-full">
          <div className="flex gap-2 lg:gap-3 items-center w-full">
            <div className="bg-[#c44242] h-[2px] w-6 shrink-0" />
            <p className="font-jetbrains font-bold text-[11px] lg:text-[13px] text-[#c44242] tracking-[1px] lg:tracking-[1.5px] uppercase m-0">
              TRANSPARENCY REGISTER
            </p>
          </div>
          <h2 className="font-hanken font-extrabold text-[28px] lg:text-[28px] text-[#0a2029] tracking-[-0.5px] m-0 w-full">
            Known Conformance Gaps
          </h2>
          <p className="font-manrope font-medium leading-[20px] lg:leading-[23px] text-[13px] lg:text-[15px] text-[#5b6670] m-0 w-full">
            <span className="lg:hidden">
              The following are illustrative examples of known limitations
              currently tracked in our remediation backlog. None of these
              constitute a critical blocker.
            </span>
            <span className="hidden lg:inline">
              The following are illustrative examples of known limitations
              currently tracked in our remediation backlog. None of these
              constitute a critical blocker preventing access.
            </span>
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden lg:flex bg-white border border-[rgba(18,59,76,0.1)] flex-col items-start overflow-hidden rounded-[12px] w-full">
          <div className="bg-[#f0ede6] flex items-start px-6 py-4 w-full font-jetbrains font-bold text-[#0a2029] text-[12px]">
            <p className="w-[120px] m-0">ID / SURFACE</p>
            <p className="w-[280px] m-0">DESCRIPTION &amp; WCAG IMPACT</p>
            <p className="w-[280px] m-0">WORKAROUND / ALTERNATIVE</p>
            <p className="w-[180px] m-0">STATUS</p>
            <p className="flex-1 m-0">TARGET REMEDIATION</p>
          </div>
          {desktopRows.map((r) => (
            <div key={r.id} className="border-b border-[rgba(18,59,76,0.1)] flex items-center px-6 py-4 w-full last:border-b-0">
              <div className="flex flex-col gap-1 w-[120px]">
                <p className="font-jetbrains font-bold text-[#0a2029] text-[13px] m-0">{r.id}</p>
                <p className="font-manrope font-normal text-[#5b6670] text-[12px] m-0">{r.surface}</p>
              </div>
              <div className="flex flex-col gap-1 w-[280px]">
                <p className="font-manrope font-semibold text-[#0a2029] text-[14px] m-0">{r.title}</p>
                <p className="font-manrope font-normal text-[#5b6670] text-[12px] m-0">{r.desc}</p>
              </div>
              <p className="font-manrope font-normal text-[#5b6670] text-[13px] w-[280px] m-0">{r.workaround}</p>
              <div className="w-[180px]">
                <div className={`${r.statusBg} inline-flex gap-[6px] items-center px-[10px] py-1 rounded-full`}>
                  <span className={r.statusText}>
                    <StatusIcon variant={r.icon} />
                  </span>
                  <p className={`font-jetbrains font-bold ${r.statusText} text-[11px] tracking-[0.5px] m-0 whitespace-nowrap`}>
                    {r.status}
                  </p>
                </div>
              </div>
              <p className="font-jetbrains font-normal text-[#0a2029] text-[13px] flex-1 m-0">{r.target}</p>
            </div>
          ))}
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden flex flex-col gap-4 w-full">
          {mobileCards.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
              className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-4 items-start p-5 rounded-[12px] w-full"
            >
              <div className="flex items-center justify-between w-full">
                <p className="font-jetbrains font-bold text-[#0a2029] text-[14px] m-0">{c.id}</p>
                <div className="bg-[#fef3c7] flex items-start px-[10px] py-1 rounded-full">
                  <p className="font-jetbrains font-bold text-[#b45309] text-[10px] tracking-[0.5px] whitespace-nowrap m-0">
                    {c.badge}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <p className="font-jetbrains font-bold text-[#5b6670] text-[11px] m-0">{c.surface}</p>
                <p className="font-hanken font-extrabold text-[#0a2029] text-[16px] m-0">{c.title}</p>
                <p className="font-manrope font-normal text-[#5b6670] text-[13px] leading-[18px] m-0">{c.desc}</p>
              </div>
              <div className="bg-[#f0ede6] flex flex-col gap-1 items-start p-3 rounded-[8px] w-full">
                <p className="font-jetbrains font-bold text-[#5b6670] text-[10px] tracking-[0.5px] m-0">
                  WORKAROUND / ALTERNATIVE
                </p>
                <p className="font-manrope font-normal text-[#0a2029] text-[13px] leading-[18px] m-0">
                  {c.workaround}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
