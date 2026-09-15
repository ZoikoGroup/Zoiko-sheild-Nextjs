"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DetectionAndResponse() {
  return (
    <div className="relative w-full bg-[#F6F4EE] flex items-center justify-center px-6 md:px-16 lg:px-24 py-16 overflow-x-hidden">
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
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] tracking-[0.2em] font-mono text-[#7C8890] uppercase">
              HOME &gt; PLATFORM &gt; DETECTION &amp; RESPONSE
            </span>
          </div>

          {/* Subheader Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] tracking-[0.2em] font-mono text-[#C8382C] uppercase font-semibold">
              — INSPECTABLE SECURITY OPERATIONS
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-[44px] lg:text-[44px] font-bold text-[#111A1E] leading-[1.1] tracking-tight mb-6">
            Detection &amp; Response
          </h1>

          {/* Description Paragraph */}
          <p className="text-[#4A555B] text-base sm:text-lg leading-relaxed mb-6 max-w-xl font-normal">
            Explore how ZoikoShield connects correlated detection,
            investigation, evidence-linked decisions and governed response while
            keeping source context, uncertainty and human authority visible.
          </p>

          {/* Secondary Accent Text */}
          <p className="text-[#2E7D32] text-xs font-mono mb-8 tracking-wide">
            Correlated detection, investigation, cases, and governed response.
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black text-sm font-medium tracking-wide hover:bg-[#223038] hover:text-white transition-colors"
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
            {/* Inner Graphic / Image Frame */}
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#121B22] border border-[#232F36] mb-6">
              <Image
                src="/images/detection/1.png"
                alt="Detection and Response Operations Visualization"
                fill
                className="object-cover opacity-80"
              />
            </div>

            {/* Bottom Metadata Fields */}
            <div className="flex flex-col gap-3 font-mono text-xs">
              <div className="flex justify-between items-center border-b border-[#1A262E] pb-3">
                <span className="text-[#7C8890] tracking-wider text-[10px]">
                  CASE ZS-1842 &middot; IN REVIEW
                </span>
                <span className="text-[#C2D0D8] bg-[#11242E] border border-[#223844] px-3 py-1 rounded-lg text-[10px]">
                  Human approval required
                </span>
              </div>
              <div className="pt-1">
                <span className="text-[#FFFFFF] text-base font-semibold tracking-tight">
                  Related identity anomaly
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
