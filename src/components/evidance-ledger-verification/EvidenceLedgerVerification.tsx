"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EvidenceLedgerVerification() {
  return (
    <div className="relative w-full min-h-screen bg-[#F6F4EE] flex items-center justify-center px-6 md:px-16 lg:px-24 py-16 overflow-x-hidden">
      {/* Background blur/shadow element positioned outside on the right */}
      <div className="absolute -right-32 md:-right-20 lg:-right-10 top-1/2 -translate-y-1/2 pointer-events-none z-0">
        <Image
          src="/images/blur.png"
          alt=""
          width={900}
          height={900}
          className="w-[500px] md:w-[700px] lg:w-[950px] opacity-70 object-contain"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col items-start justify-center"
        >
          {/* Breadcrumb / Top Tag */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[10px] tracking-[0.2em] font-mono text-[#7C8890] uppercase">
              HOME &gt; PLATFORM &gt; EVIDENCE LEDGER &amp; VERIFICATION
            </span>
          </div>

          {/* Status Indicator Bar */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2E7D32]"></span>
            <span className="text-[11px] font-mono font-medium tracking-[0.15em] uppercase text-[#7C8890]">
              SOURCE STATE . ACTIVE
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-[44px] lg:text-[44px] font-bold text-[#111A1E] leading-[1.1] tracking-tight mb-6">
            Evidence Ledger &amp; Verification
          </h1>

          {/* Description Paragraph */}
          <p className="text-[#4A555B] text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
            Inspect ZoikoShield tamper-evident evidence, lineage, completeness
            states, evidence packages and verification paths with clear scope
            and limitations.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C8382C] text-white text-sm font-medium tracking-wide shadow-sm hover:bg-[#b53026] transition-colors"
            >
              Book a Demo
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#111A1E] text-white text-sm font-medium tracking-wide hover:bg-[#223038] transition-colors"
            >
              Explore the Platform
            </a>
          </div>
        </motion.div>

        {/* Right Column: Card with Inner Image and Custom UI Metadata */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-6 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[500px] rounded-3xl overflow-hidden shadow-2xl bg-[#071B24DD] border border-[#FFFFFF30] p-6 flex flex-col justify-between">
            {/* Top Card Header */}
            <div className="flex items-center justify-between mb-4 z-10">
              <span className="text-[11px] tracking-[0.15em] font-mono text-[#E0967D] uppercase font-semibold">
                EVD-2026-09-11-1842
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6EE7B7]"></span>
                <span className="text-[10px] tracking-[0.15em] font-mono text-[#6EE7B7] uppercase">
                  MATCHED
                </span>
              </div>
            </div>

            {/* Inner Graphic / Image Frame */}
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#121B22] border border-[#232F36] mb-6">
              <Image
                src="/images/evidance/1.png"
                alt="Enterprise Cybersecurity Visualization"
                fill
                className="object-cover opacity-70"
              />
            </div>

            {/* Bottom Metadata Fields */}
            <div className="flex flex-col gap-3 font-mono text-xs">
              <div className="flex justify-between items-center border-b border-[#1A262E] pb-2">
                <span className="text-[#7C8890] tracking-wider text-[10px]">
                  SOURCE
                </span>
                <span className="text-[#C2D0D8]">cloud-control-plane</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#1A262E] pb-2">
                <span className="text-[#7C8890] tracking-wider text-[10px]">
                  LINEAGE
                </span>
                <span className="text-[#C2D0D8]">4 linked records</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#1A262E] pb-2">
                <span className="text-[#7C8890] tracking-wider text-[10px]">
                  COMPLETENESS
                </span>
                <span className="text-[#C2D0D8]">11 of 12 present</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#7C8890] tracking-wider text-[10px]">
                  VERSION
                </span>
                <span className="text-[#C2D0D8]">4.2</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
