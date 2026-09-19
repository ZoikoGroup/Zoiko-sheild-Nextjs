"use client";

import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Target Obligation",
    desc: "Our engineering goal is full conformance with WCAG 2.2 Level AA guidelines. This applies to all responsive views, localized copies, and embedded components.",
    badge: "AUDIT IN PROGRESS",
    badgeBg: "bg-[#ddeaf9]",
    badgeText: "text-[#4e668a]",
    icon: "clock",
  },
  {
    title: "Audited Properties",
    desc: "Our core Shield Console, Endpoint Identity Ingestion wizard, and live monitoring dashboards are subject to external third-party evaluation.",
    badge: "PARTIALLY CONFORMANT",
    badgeBg: "bg-[#fef3c7]",
    badgeText: "text-[#b45309]",
    icon: "alert-triangle",
  },
  {
    title: "Excluded & Legacy Areas",
    desc: "Pre-2023 log archival storage views and certain partner-assisted third-party authentication frames have not been assessed and remain excluded.",
    badge: "UNASSESSED SURFACE",
    badgeBg: "bg-[#f0ede6]",
    badgeText: "text-[#5b6670]",
    icon: "help-circle",
  },
];

function BadgeIcon({ icon }: { icon: string }) {
  if (icon === "clock") {
    return (
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
        <circle cx="5" cy="5" r="4.2" stroke="currentColor" strokeWidth="1" />
        <path d="M5 2.6V5.2L6.6 6.2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    );
  }
  if (icon === "alert-triangle") {
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
      <path d="M3.8 3.8a1.2 1.2 0 1 1 1.9 1c-.5.35-.7.6-.7 1.1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <circle cx="5" cy="7.4" r="0.5" fill="currentColor" />
    </svg>
  );
}

export default function StandardsScopeSection() {
  return (
    <section className="bg-[#f7f5f0] border-y border-[rgba(18,59,76,0.1)] w-full">
      <div className="flex flex-col gap-6 lg:gap-10 mx-auto max-w-[1440px] px-4 py-8 lg:px-[108px] lg:py-[60px]">
        <div className="flex flex-col gap-3 lg:gap-4 items-start w-full">
          <div className="flex gap-2 lg:gap-3 items-center w-full">
            <div className="bg-[#c44242] h-[2px] w-6 shrink-0" />
            <p className="font-jetbrains font-bold text-[11px] lg:text-[13px] text-[#c44242] tracking-[1px] lg:tracking-[1.5px] uppercase m-0">
              REGISTRY DETAIL
            </p>
          </div>
          <h2 className="font-hanken font-extrabold text-[28px] lg:text-[28px] text-[#0a2029] tracking-[-0.5px] m-0 w-full">
            Digital Properties &amp; Scope Explainer
          </h2>
          <p className="font-manrope font-medium leading-[20px] lg:leading-[23px] text-[13px] lg:text-[15px] text-[#5b6670] m-0 w-full">
            We distinguish our target obligations from verified conformance
            results. The following present audited interfaces, excluded
            domains, and legal obligations as specified in the master
            registry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 w-full">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-4 items-start p-5 lg:p-[24px] rounded-[12px]"
            >
              <p className="font-hanken font-extrabold text-[#0a2029] text-[18px] m-0">{c.title}</p>
              <p className="font-manrope font-normal text-[#5b6670] text-[14px] lg:text-[14.5px] leading-[20px] m-0">
                {c.desc}
              </p>
              <div className={`${c.badgeBg} flex gap-[6px] items-center px-[10px] py-1 rounded-full`}>
                <span className={c.badgeText}>
                  <BadgeIcon icon={c.icon} />
                </span>
                <p className={`font-jetbrains font-bold ${c.badgeText} text-[11px] tracking-[0.5px] m-0 whitespace-nowrap`}>
                  {c.badge}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
