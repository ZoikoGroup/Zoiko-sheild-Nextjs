"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface MatrixResult {
  title: string;
  category: string;
  badgeText: string;
  badgeStyle: string;
  href: string;
}

const matchResults: MatrixResult[] = [
  {
    title: "CrowdStrike Falcon",
    category: "Endpoint Security",
    badgeText: "Available",
    badgeStyle: "bg-[#E6F4EA] text-[#137333] border-[#CEEAD6]",
    href: "/integrations",
  },
  {
    title: "Okta Identity",
    category: "Identity & Access",
    badgeText: "Available",
    badgeStyle: "bg-[#E6F4EA] text-[#137333] border-[#CEEAD6]",
    href: "/integrations",
  },
  {
    title: "Microsoft Entra ID",
    category: "Identity & FIM",
    badgeText: "Beta / Planned",
    badgeStyle: "bg-[#FEF3C7] text-[#B45309] border-[#FDE68A]",
    href: "/integrations",
  },
  {
    title: "Jamf Pro",
    category: "Device Management",
    badgeText: "Partner-assisted",
    badgeStyle: "bg-[#EEF2FF] text-[#4F46E5] border-[#E0E7FF]",
    href: "/integrations",
  },
];

const sideGuarantees = [
  {
    title: "Defensible Evidence",
    desc: "Custom endpoints undergo complete cryptographic posture verification. We maintain strict chain of custody.",
    mobileBorder: "border-l-4 border-l-[#0B1B26]",
    mobileShow: true,
  },
  {
    title: "Clean Posture Guarantee",
    desc: "Never enter active system keys, client secrets, or incident logs. Information stays high-level and safe.",
    mobileBorder: "border-l-4 border-l-[#D97706]",
    mobileShow: true,
  },
  {
    title: "Automated Registry Sync",
    desc: "Our direct integration registry checks active endpoints every 24 hours to keep status matrices updated.",
    mobileBorder: "",
    mobileShow: false,
  },
  {
    title: "Multi-Party Consent",
    desc: "Write actions require dual-approver non-revocable keys. You govern execution boundaries.",
    mobileBorder: "",
    mobileShow: false,
  },
];

export default function SearchDirectory() {
  const [searchTerm, setSearchTerm] = useState("Okta");

  return (
    <section className="w-full bg-[#F5F2EB] py-6 sm:py-10 lg:py-14 px-5 sm:px-6 md:px-12 lg:px-16 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-[#E7E5DF] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-[2px] bg-[#BE3A34]" />
              <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#BE3A34] uppercase">
                SEARCH DIRECTORY
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold text-[#0B1B26] tracking-tight mb-2">
              Verify existing <span className="hidden sm:inline">ecosystem </span>capabilities first
            </h2>

            <p className="text-[13px] sm:text-[14px] text-[#52606D] leading-relaxed">
              We might already support this provider. Search our registry before initiating a formal custom request.
            </p>
          </div>

          {/* Grid Layout: Search & Matrix on Left, Guarantees on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Left Column: Input and Ecosystem Match Matrix */}
            <div className="lg:col-span-8">
              {/* Search Input */}
              <div className="mb-5 sm:mb-6">
                <label className="block text-xs font-semibold text-[#0B1B26] mb-1.5">
                  Quick Search Vendor or Product Alias
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="e.g. Okta, CrowdStrike, AWS"
                  className="w-full bg-[#FAF9F5] border border-[#D5DFE5] rounded-lg px-3.5 py-2.5 text-sm text-[#0B1B26] placeholder-[#627585] outline-none focus:bg-white focus:ring-2 focus:ring-[#0B1B26]/10 transition-all"
                />
              </div>

              {/* Match Matrix Label */}
              <h3 className="text-xs font-semibold text-[#0B1B26] mb-3">
                Ecosystem Match Matrix Results
              </h3>

              {/* Results Rows */}
              <div className="space-y-2 sm:space-y-2.5">
                {matchResults.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-[#FAF9F6] border border-[#EAE6DF] rounded-xl p-3 sm:p-4 flex items-center justify-between gap-3 transition-colors hover:bg-[#F5F2EB] ${
                      index === 3 ? "hidden sm:flex" : "flex"
                    }`}
                  >
                    <div>
                      <h4 className="text-[13.5px] sm:text-sm font-bold text-[#0B1B26]">
                        {item.title}
                      </h4>
                      <p className="text-[11.5px] sm:text-xs text-[#6B7280]">
                        {item.category}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className={`font-mono text-[9.5px] sm:text-[10px] font-bold tracking-wider px-2 py-0.5 rounded border ${item.badgeStyle}`}
                      >
                        {item.badgeText}
                      </span>
                      {/* View Integration button: visible on desktop, hidden on mobile */}
                      <Link
                        href={item.href}
                        className="hidden sm:inline-flex border border-[#0B1B26] hover:bg-[#0B1B26]/5 text-[#0B1B26] text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                      >
                        View Integration
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column / Below on Mobile: Side Guarantee Cards */}
            <div className="lg:col-span-4 space-y-3 mt-4 lg:mt-0">
              {sideGuarantees.map((card, index) => (
                <div
                  key={index}
                  className={`bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl p-4 transition-all ${
                    card.mobileBorder
                  } ${card.mobileShow ? "block" : "hidden sm:block"}`}
                >
                  <h4 className="text-xs font-bold text-[#0B1B26] mb-1">
                    {card.title}
                  </h4>
                  <p className="text-[11.5px] text-[#6B7280] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
