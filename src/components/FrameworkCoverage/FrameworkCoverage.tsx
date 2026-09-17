"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FrameworkCoverage() {
  return (
    <div className="relative w-full bg-[#F6F4EE] flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-16 overflow-hidden">
      {/* Background blur/shadow element positioned outside on the right */}
      <div className="absolute -right-32 md:-right-20 lg:-right-10 top-1/2 -translate-y-1/2 pointer-events-none z-0">
        <Image
          src="/images/blur.png"
          alt=""
          width={900}
          height={900}
          className="w-[500px] md:w-[700px] lg:w-[950px] opacity-80 object-contain"
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
              RESOURCES / SUPPORTED PROGRAM ALIGNMENT
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-[44px] lg:text-[44px] font-bold text-[#111A1E] leading-[1.1] tracking-tight mb-6">
            Framework <span className="text-[#C8382C]">Coverage</span>
          </h1>

          {/* Description Paragraph */}
          <p className="text-[#4A555B] text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
            Explore how approved framework references relate to ZoikoShield
            products, services, mappings, and evidence—without overstating what
            that relationship proves.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C8382C] text-white text-sm font-medium tracking-wide shadow-sm hover:bg-[#b53026] transition-colors"
            >
              Browse approved references
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-transparent border border-[#111A1E30] text-[#111A1E] text-sm font-medium tracking-wide hover:bg-[#111A1E08] transition-colors"
            >
              How evidence works
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
          <div className="relative w-full max-w-[520px] rounded-3xl overflow-hidden shadow-2xl bg-[#0B2732] border border-[#FFFFFF20] p-6 flex flex-col">
            {/* Inner Graphic / Image Frame */}
            <div className="relative w-full aspect-[22/10] rounded-2xl overflow-hidden bg-[#121B22] border border-[#232F36] mb-5">
              <Image
                src="/images/framework/1.png"
                alt="Controlled Reference State"
                fill
                className="object-cover opacity-80"
              />
            </div>

            {/* Controlled Reference State Label */}
            <div className="mb-2">
              <span className="text-[10px] tracking-[0.15em] font-mono text-[#E0967D] uppercase">
                CONTROLLED REFERENCE STATE
              </span>
            </div>

            {/* Card Title */}
            <h3 className="text-white text-xl font-bold tracking-tight mb-3">
              Conditional directory preview
            </h3>

            {/* Card Description */}
            <p className="text-[#9BA6AD] text-xs sm:text-sm leading-relaxed font-normal">
              Production framework names and editions appear only after
              authority, rights, scope, ownership, and review are approved.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
