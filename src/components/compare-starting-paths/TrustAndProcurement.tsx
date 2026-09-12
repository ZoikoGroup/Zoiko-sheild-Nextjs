"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface EvidenceItem {
  id: string;
  title: string;
  href: string;
}

const evidenceItems: EvidenceItem[] = [
  {
    id: "security-practices",
    title: "Security practices",
    href: "#",
  },
  {
    id: "responsible-ai",
    title: "Responsible AI",
    href: "#",
  },
  {
    id: "subprocessors",
    title: "Subprocessors",
    href: "#",
  },
  {
    id: "privacy-notice",
    title: "Privacy notice",
    href: "#",
  },
];

export default function TrustAndProcurement() {
  return (
    <div className="relative w-full bg-[#F0EDE6] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Buyer Evidence Index Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 bg-[#123B4C] rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between w-full"
        >
          {/* Card Top Label & Indicator */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#E0967D] font-mono">
              BUYER EVIDENCE INDEX
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse"></span>
              <span className="text-xs font-medium text-[#E2E8F0] tracking-wide">
                Available
              </span>
            </div>
          </div>

          {/* Evidence Rows */}
          <div className="flex flex-col gap-3 w-full">
            {evidenceItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="group flex items-center justify-between px-5 py-4 rounded-xl bg-[#1B4D60]/60 border border-[#265E74] hover:bg-[#20576C] transition-colors"
              >
                <span className="text-sm sm:text-base font-medium text-white tracking-wide">
                  {item.title}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#8C9BA5] group-hover:text-white transition-colors">
                  <span>View</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Heading, Description & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Subheading / Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#C8382C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8382C]">
              TRUST AND PROCUREMENT
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-[44px] font-bold text-[#111A1E] tracking-tight mb-4 leading-[1.1]">
            Evidence for security, privacy and procurement review.
          </h2>

          {/* Description */}
          <p className="text-[#4A555B] text-base sm:text-lg mb-8 leading-relaxed">
            Give buyer teams a direct route to trust documentation, security
            practices, responsible AI materials, subprocessors and the privacy
            notice.
          </p>

          {/* Button */}
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C8382C] text-white text-sm font-bold tracking-wide hover:bg-[#B53227] transition-colors group shadow-sm"
            >
              <span>Visit Trust Center</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
