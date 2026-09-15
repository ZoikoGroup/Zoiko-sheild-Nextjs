"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ConnectSecurityOperations() {
  return (
    <div className="relative w-full bg-[#F7F5F0] flex items-center justify-center px-6 md:px-16 lg:px-24 py-16">
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
              — CONSOLIDATE SECURITY OPERATIONS
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-[40px] lg:text-[40px] font-bold text-[#111A1E] leading-[1.1] tracking-tight mb-6">
            Connect security operations without losing source truth or decision
            authority.
          </h1>

          {/* Description Paragraph */}
          <p className="text-[#4A555B] text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
            Bring approved security tools, signals, cases and response workflows
            into a governed operating model that preserves source identity,
            ownership, evidence and explicit action authority.
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
              Explore Detection &amp; Response
            </a>
          </div>

          {/* Micro Footer Note */}
          <p className="text-[11px] text-[#7C8890] font-mono leading-relaxed max-w-md">
            Connector support, data modes, response actions, service coverage
            and regions vary by verified configuration and contract.
          </p>
        </motion.div>

        {/* Right Column: Card with Inner Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-6 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[520px] rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            {/* Inner Graphic / Image Frame */}
            <div className="relative w-full aspect-[3/3] overflow-hidden">
              <Image
                src="/images/security/1.png"
                alt="Security Operations Center Visualization"
                fill
                className="object-cover opacity-90"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
