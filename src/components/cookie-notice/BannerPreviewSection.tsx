"use client";

import React from "react";
import { motion } from "framer-motion";

const desktopStates = [
  {
    id: "STATE 01",
    title: "No Prior Choice",
    desc: "Banner is persistently shown. No non-essential scripts execute. Pure sandbox mode.",
    badge: "Pending Selection",
    badgeBg: "bg-[#fef3c7]",
    badgeText: "text-[#b45309]",
  },
  {
    id: "STATE 02",
    title: "Accepted All",
    desc: "Consent recorded in cryptographic ledger. Analytics and support agents authorized.",
    badge: "Full Authorization",
    badgeBg: "bg-[#e4f0ec]",
    badgeText: "text-[#1f7a6c]",
  },
  {
    id: "STATE 03",
    title: "Rejected Optional",
    desc: "Proceeds with essential security only. No user identifiers written to browser storage.",
    badge: "Essential Only",
    badgeBg: "bg-[#fbefef]",
    badgeText: "text-[#a43737]",
  },
  {
    id: "STATE 04",
    title: "Granular Choice",
    desc: "Custom parameters (e.g. support enabled, analytics disabled) applied instantly.",
    badge: "Granular Allowed",
    badgeBg: "bg-[#ddeaf9]",
    badgeText: "text-[#4e668a]",
  },
  {
    id: "STATE 05",
    title: "GPC Signal Active",
    desc: "Universal opt-out signal translated to absolute opt-out policy. Legally compliant.",
    badge: "GPC Honored",
    badgeBg: "bg-[#e4f0ec]",
    badgeText: "text-[#1f7a6c]",
  },
];

const mobileStates = [
  {
    id: "STATE 01 · No Prior Choice",
    desc: "Banner remains persistent. Optional scripts strictly gated in secure sandbox mode.",
    badge: "Sandbox",
    badgeBg: "bg-[rgba(180,83,9,0.13)]",
    badgeText: "text-[#b45309]",
  },
  {
    id: "STATE 02 · Accepted All",
    desc: "Ledger verifies consent cryptographically. Full functional cookies authorized.",
    badge: "Authorized",
    badgeBg: "bg-[rgba(31,122,108,0.13)]",
    badgeText: "text-[#1f7a6c]",
  },
  {
    id: "STATE 03 · Rejected Optional",
    desc: "Strictly essential scripts only. Zero tracking parameters active.",
    badge: "Essential Only",
    badgeBg: "bg-[rgba(196,66,66,0.13)]",
    badgeText: "text-[#c44242]",
  },
  {
    id: "STATE 04 · GPC Signal Active",
    desc: "Universal signal auto-applied. GPC client choices translated to strict compliance rules.",
    badge: "GPC Active",
    badgeBg: "bg-[rgba(31,122,108,0.13)]",
    badgeText: "text-[#1f7a6c]",
  },
];

export default function BannerPreviewSection() {
  return (
    <section className="bg-[#f0ede6] w-full">
      <div className="flex flex-col gap-5 lg:gap-6 mx-auto max-w-[1440px] px-4 py-6 lg:px-[108px] lg:py-[40px]">
        <div className="flex flex-col gap-1 lg:gap-2 items-start w-full">
          <p className="font-jetbrains lg:font-sans font-bold text-[11px] lg:text-[13px] text-[#c44242] tracking-[1px] uppercase m-0">
            {"VISUAL STATE PREVIEWS"}
          </p>
          <h2 className="font-hanken lg:font-sans font-extrabold text-[22px] lg:text-[24px] text-[#0a2029] m-0">
            First-Layer Transparency &amp; Consent Banner
          </h2>
          <p className="font-manrope lg:font-sans font-normal text-[13px] lg:text-[14px] text-[#5b6670] m-0">
            Zoiko Shield implements zero-bias choices. Rejecting optional
            cookies is as easy as accepting them, with equal prominence and
            no coercive formatting. Below are the functional states as
            processed by the consent pipeline.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white border border-[rgba(18,59,76,0.1)] lg:border-[rgba(18,59,76,0.1)] flex flex-col gap-4 lg:gap-5 items-start p-4 lg:p-[24px] rounded-[12px] w-full"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-start justify-between gap-3 w-full">
            <div className="flex flex-col gap-3 items-start max-w-[800px] w-full">
              <div className="flex gap-2 lg:gap-3 items-center w-full">
                <div className="bg-[#1f7a6c] rounded-full size-[6px] lg:size-[8px] shrink-0" />
                <p className="flex-1 lg:flex-none font-hanken lg:font-sans font-extrabold text-[#0a2029] text-[15px] lg:text-[16px] m-0 truncate">
                  Cookie &amp; Consent Manager
                </p>
              </div>
              <p className="font-manrope lg:font-sans font-normal text-[#5b6670] text-[12px] lg:text-[13.5px] leading-[18px] lg:leading-[20px] m-0">
                <span className="lg:hidden">
                  We use essential cookies for security and system integrity.
                  Optional technologies are strictly gated until you consent.
                  You may decline or customize any time.
                </span>
                <span className="hidden lg:inline">
                  We use cookies and similar technologies to ensure the
                  essential security, operation, and load-balancing
                  integrity of our services. With your permission, we would
                  also like to deploy optional technologies for system
                  preferences, analytics, and functional live chat support.
                  We never sell or share your data, and optional trackers
                  remain gated until you consent. You may close this banner
                  to proceed with essential cookies only. Read our{" "}
                  <span className="text-[#c44242] underline">
                    Privacy Policy
                  </span>{" "}
                  and{" "}
                  <span className="text-[#c44242] underline">
                    Cookie Notice
                  </span>{" "}
                  for details.
                </span>
              </p>
            </div>
            <div className="bg-[#ddeaf9] flex items-start px-3 py-1 rounded-full shrink-0">
              <p className="font-manrope lg:font-sans font-bold text-[#4e668a] text-[10px] lg:text-[11px] whitespace-nowrap m-0">
                {"PECR opt-in active"}
                <span className="hidden lg:inline">{" "}</span>
              </p>
            </div>
          </div>

          <div className="flex gap-2 items-center w-full lg:w-auto">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="shrink-0" aria-hidden>
              <circle cx="7" cy="7" r="6.3" stroke="#1f7a6c" strokeWidth="1.3" />
              <path d="M4.3 7.2L6.1 9L9.7 5" stroke="#1f7a6c" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="flex-1 font-manrope lg:font-sans font-semibold text-[#1f7a6c] text-[11px] lg:text-[12px] m-0 truncate">
              Global Privacy Control{" "}
              <span className="hidden lg:inline">(GPC) signal honored successfully.</span>
              <span className="lg:hidden">signal honored</span>
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-2 lg:gap-3 items-start w-full lg:justify-end">
            <button className="w-full lg:w-auto flex items-center justify-center border border-[#0a2029] px-5 py-[10px] lg:py-[12px] rounded-[6px]">
              <span className="font-manrope lg:font-sans font-bold text-[#0a2029] text-[12px] lg:text-[13px]">
                <span className="lg:hidden">Reject all</span>
                <span className="hidden lg:inline">Reject optional</span>
              </span>
            </button>
            <button className="w-full lg:w-auto flex items-center justify-center border border-[#0a2029] px-5 py-[10px] lg:py-[12px] rounded-[6px]">
              <span className="font-manrope lg:font-sans font-bold text-[#0a2029] text-[12px] lg:text-[13px]">
                <span className="lg:hidden">Manage</span>
                <span className="hidden lg:inline">Manage preferences</span>
              </span>
            </button>
            <button className="w-full lg:w-auto flex items-center justify-center bg-[#c44242] px-6 py-3 rounded-[6px]">
              <span className="font-manrope lg:font-sans font-bold text-white text-[13px]">
                Accept all optional
              </span>
            </button>
          </div>
        </motion.div>

        {/* Desktop: 5-up states matrix grid */}
        <div className="hidden lg:grid grid-cols-5 gap-4 w-full">
          {desktopStates.map((s) => (
            <div
              key={s.id}
              className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-4 rounded-[8px]"
            >
              <p className="font-sans font-bold text-[#5b6670] text-[12px] m-0">{s.id}</p>
              <p className="font-sans font-extrabold text-[#0a2029] text-[14px] m-0">{s.title}</p>
              <p className="font-sans font-normal text-[#5b6670] text-[12px] m-0">{s.desc}</p>
              <div className={`${s.badgeBg} flex items-start px-2 py-1 rounded-[4px]`}>
                <p className={`font-sans font-bold ${s.badgeText} text-[10px] m-0`}>{s.badge}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: stacked 4-state list */}
        <div className="lg:hidden flex flex-col gap-3 w-full">
          {mobileStates.map((s) => (
            <div
              key={s.id}
              className="bg-white border border-[rgba(18,59,76,0.12)] flex flex-col gap-2 items-start p-3 rounded-[8px] w-full"
            >
              <div className="flex items-center justify-between w-full">
                <p className="font-manrope font-bold text-[#5b6670] text-[12px] m-0">{s.id}</p>
                <div className={`${s.badgeBg} flex items-start px-2 py-[2px] rounded-[4px]`}>
                  <p className={`font-manrope font-bold ${s.badgeText} text-[10px] m-0 whitespace-nowrap`}>
                    {s.badge}
                  </p>
                </div>
              </div>
              <p className="font-manrope font-normal text-[#0a2029] text-[12px] leading-[18px] m-0 w-full">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
