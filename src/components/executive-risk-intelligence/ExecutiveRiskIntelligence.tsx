"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ExecutiveRiskIntelligence() {
  return (
    <div className="relative w-full bg-[#F6F4EE] flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-16">
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
            <span className="text-[10px] tracking-[0.2em] font-mono text-[#C8382C] uppercase font-semibold">
              — EXECUTIVE RISK INTELLIGENCE
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-[44px] lg:text-[44px] font-bold text-[#111A1E] leading-[1.1] tracking-tight mb-6">
            Board-ready risk reporting, traced to source.
          </h1>

          {/* Description Paragraph */}
          <p className="text-[#4A555B] text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
            Every executive statement links to its evidence path, decision
            history and visible limitations — so boards can trust the numbers.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C8382C] text-white text-sm font-medium tracking-wide shadow-sm hover:bg-[#b53026] transition-colors"
            >
              Book a Demo
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-transparent border border-[#111A1E30] text-[#111A1E] text-sm font-medium tracking-wide hover:bg-[#111A1E08] transition-colors"
            >
              Explore Risk Intelligence
            </a>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#111A1E15]"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-[#111A1E] mb-1">
                98.4%
              </span>
              <span className="text-[11px] text-[#7C8890] uppercase tracking-wider font-mono">
                Traceability rate
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-[#111A1E] mb-1">
                5-level
              </span>
              <span className="text-[11px] text-[#7C8890] uppercase tracking-wider font-mono">
                Evidence drill-down
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-[#111A1E] mb-1">
                Zero
              </span>
              <span className="text-[11px] text-[#7C8890] uppercase tracking-wider font-mono">
                Autonomous AI decisions
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Card with Inner Image and Custom UI Metadata */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-6 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[520px] rounded-3xl overflow-hidden shadow-2xl bg-[#0B2732] border border-[#FFFFFF20] p-6 flex flex-col">
            {/* Top Card Header */}
            <div className="flex items-center justify-between mb-4 z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C8890]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C8890]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C8890]"></span>
              </div>
              <span className="text-[10px] tracking-[0.15em] font-mono text-[#FFFFFF40] uppercase">
                GLOBAL RISK INTELLIGENCE
              </span>
            </div>

            {/* Inner Graphic / Image Frame */}
            <div className="relative w-full aspect-[22/10] rounded-2xl overflow-hidden bg-[#121B22] border border-[#232F36] mb-5">
              <Image
                src="/images/executive/1.png"
                alt="Executive Boardroom Risk Analysis"
                fill
                className="object-cover opacity-80"
              />
            </div>

            {/* Bottom Metadata Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 font-mono">
              <div className="sm:col-span-8 bg-[#FFFFFF0D] border border-[#FFFFFF14] rounded-[14px] p-4 flex flex-col justify-between">
                <span className="text-[#E0967D] tracking-wider text-[10px] uppercase mb-2">
                  MATERIAL CHANGE
                </span>
                <span className="text-[#FFFFFF] text-base font-semibold tracking-tight">
                  3 items require review
                </span>
              </div>

              <div className="sm:col-span-4 bg-[#FFFFFF0D] border border-[#FFFFFF14] rounded-[14px] p-4 flex flex-col justify-between">
                <span className="text-[#E0967D] tracking-wider text-[10px] uppercase mb-2">
                  TRACEABILITY
                </span>
                <span className="text-[#FFFFFF] text-lg font-semibold tracking-tight">
                  98.4%
                </span>
              </div>
            </div>

            {/* Micro Footer Status Inside Card */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#1A262E] text-[10px] font-mono text-[#7C8890]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]"></span>
                <span className="uppercase tracking-wider">
                  VERIFIED_ACTIVE
                </span>
              </div>
              <span className="tracking-wider">42 controls monitored</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
