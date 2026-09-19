"use client";

import React from "react";
import { motion } from "framer-motion";

const desktopCategories = [
  {
    title: "Essential / Security",
    badge: "Always Active",
    badgeBg: "bg-[#e4f0ec]",
    badgeText: "text-[#1f7a6c]",
    desc: "Critical security tokens, CSRF protection, and load-balancing telemetry required to safely access Zoiko Shield endpoints.",
    count: "ACTIVE TECHNOLOGIES: 4",
  },
  {
    title: "Preferences & Appearance",
    badge: "Optional",
    badgeBg: "bg-[#ddeaf9]",
    badgeText: "text-[#4e668a]",
    desc: "Remembers your chosen display layout, language configurations, and specific workspace preferences.",
    count: "ACTIVE TECHNOLOGIES: 2",
  },
  {
    title: "Analytics & Statistics",
    badge: "Optional",
    badgeBg: "bg-[#ddeaf9]",
    badgeText: "text-[#4e668a]",
    desc: "Privacy-safe aggregated telemetry used exclusively to measure system latency and operational page performance.",
    count: "ACTIVE TECHNOLOGIES: 3",
  },
  {
    title: "Functional & Support",
    badge: "Optional",
    badgeBg: "bg-[#ddeaf9]",
    badgeText: "text-[#4e668a]",
    desc: "Powers live technical support chats and integration-assisted playground systems.",
    count: "ACTIVE TECHNOLOGIES: 2",
  },
  {
    title: "Advertising & Marketing",
    badge: "Disabled by default",
    badgeBg: "bg-[#fbefef]",
    badgeText: "text-[#a43737]",
    desc: "We do not deploy marketing trackers or sell operational metrics. This category remains strictly locked.",
    count: "ACTIVE TECHNOLOGIES: 0",
  },
  {
    title: "Security & Fraud Prevention",
    badge: "Always Active",
    badgeBg: "bg-[#e4f0ec]",
    badgeText: "text-[#1f7a6c]",
    desc: "Real-time threat telemetry used to isolate malicious bots and preserve operational system compliance.",
    count: "ACTIVE TECHNOLOGIES: 2",
  },
];

const mobileCategories = [
  {
    title: "Essential / Security",
    badge: "Always Active",
    badgeBg: "bg-[#e4f0ec]",
    badgeText: "text-[#1f7a6c]",
    desc: "Critical security tokens, CSRF protection, and load-balancing telemetry required to safely access Zoiko Shield endpoints.",
    count: "ACTIVE TECHNOLOGIES: 4",
  },
  {
    title: "Preferences & Appearance",
    badge: "Optional",
    badgeBg: "bg-[#ddeaf9]",
    badgeText: "text-[#4e668a]",
    desc: "Remembers your chosen display layout, language configurations, and specific workspace preferences.",
    count: "ACTIVE TECHNOLOGIES: 2",
  },
  {
    title: "Analytics & Statistics",
    badge: "Optional",
    badgeBg: "bg-[#ddeaf9]",
    badgeText: "text-[#4e668a]",
    desc: "Privacy-safe aggregated telemetry used exclusively to measure system latency and operational page performance.",
    count: "ACTIVE TECHNOLOGIES: 3",
  },
  {
    title: "Advertising & Marketing",
    badge: "Disabled by Default",
    badgeBg: "bg-[#fbefef]",
    badgeText: "text-[#a43737]",
    desc: "We do not deploy marketing trackers or sell operational metrics. This category remains strictly locked.",
    count: "ACTIVE TECHNOLOGIES: 0",
  },
];

export default function TechnologyCategoriesSection() {
  return (
    <section className="bg-[#f0ede6] w-full">
      <div className="flex flex-col gap-6 lg:gap-8 mx-auto max-w-[1440px] px-4 py-6 lg:px-[108px] lg:py-[60px]">
        <div className="flex flex-col gap-2 lg:gap-3 items-start">
          <div className="flex gap-2 lg:gap-3 items-center">
            <div className="bg-[#c44242] h-[2px] w-4 lg:w-[24px] shrink-0" />
            <p className="font-hanken lg:font-sans font-medium text-[11px] lg:text-[13px] text-[#c44242] tracking-[1px] lg:tracking-[1.5px] uppercase m-0">
              UX CLASSIFICATIONS
            </p>
          </div>
          <h2 className="font-hanken lg:font-sans font-extrabold text-[24px] lg:text-[32px] text-[#0a2029] m-0">
            <span className="lg:hidden">Functional Categories</span>
            <span className="hidden lg:inline">Functional Categorization</span>
          </h2>
          <p className="font-manrope lg:font-sans font-normal text-[13px] lg:text-[15px] text-[#5b6670] m-0 lg:whitespace-nowrap">
            These groupings represent how each technology is utilized to
            serve your browser session, rather than abstract legal
            categories.
          </p>
        </div>

        {/* Desktop: 3x2 grid */}
        <div className="hidden lg:grid grid-cols-3 gap-5 w-full">
          {desktopCategories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (i % 3) * 0.08 }}
              className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-4 items-start p-6 rounded-[12px]"
            >
              <div className="flex items-center justify-between w-full">
                <p className="font-sans font-extrabold text-[#0a2029] text-[18px] m-0">{c.title}</p>
                <div className={`${c.badgeBg} flex items-start px-[10px] py-1 rounded-full shrink-0`}>
                  <p className={`font-sans font-bold ${c.badgeText} text-[11px] whitespace-nowrap m-0`}>
                    {c.badge}
                  </p>
                </div>
              </div>
              <p className="font-sans font-normal text-[#5b6670] text-[13.5px] leading-[20px] m-0 w-full">
                {c.desc}
              </p>
              <p className="font-sans font-semibold text-[#5b6670] text-[11px] m-0 w-full">{c.count}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: stacked list */}
        <div className="lg:hidden flex flex-col gap-4 w-full">
          {mobileCategories.map((c) => (
            <div
              key={c.title}
              className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-4 rounded-[12px] w-full"
            >
              <div className="flex items-center justify-between w-full gap-2">
                <p className="font-hanken font-extrabold text-[#0a2029] text-[15px] m-0">{c.title}</p>
                <div className={`${c.badgeBg} flex items-start px-[10px] py-1 rounded-full shrink-0`}>
                  <p className={`font-manrope font-bold ${c.badgeText} text-[10px] whitespace-nowrap m-0`}>
                    {c.badge}
                  </p>
                </div>
              </div>
              <p className="font-manrope font-normal text-[#5b6670] text-[13px] leading-[19px] m-0 w-full">
                {c.desc}
              </p>
              <p className="font-manrope font-semibold text-[#5b6670] text-[11px] m-0 w-full">{c.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
