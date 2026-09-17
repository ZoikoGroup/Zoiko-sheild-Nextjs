"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AiSecurityGovernance() {
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
          {/* Main Title */}
          <h1 className="text-4xl sm:text-[44px] lg:text-[48px] font-bold text-[#111A1E] leading-[1.1] tracking-tight mb-4">
            AI Security & <br />
            Governance
          </h1>

          {/* Subheading / Bold Description */}
          <p className="text-[#111A1E] text-lg sm:text-xl font-medium leading-snug mb-4">
            Bounded, cited, overridable AI and AI-risk controls.
          </p>

          {/* Description Paragraph */}
          <p className="text-[#4A555B] text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
            ZoikoShield governs AI through explicit use-case scope, inspectable
            grounding, controlled tools and permissions, defined decision
            rights, human authority, override and safe fallback.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-wrap items-center gap-4">
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
              Explore the Platform
            </a>
          </div>
        </motion.div>

        {/* Right Column: Large Feature Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-6 flex justify-center lg:justify-end"
        >
          <div className="relative w-full rounded-3xl overflow-hidden">
            <div className="relative w-full aspect-[3/3] rounded-2xl overflow-hidden bg-[#121B22] border border-[#232F36]">
              <Image
                src="/images/ai-security/1.png"
                alt="AI Security & Governance Dashboard Preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
