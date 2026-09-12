"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AISecurityAssistant() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#1E293B] font-sans antialiased py-16 px-4 md:px-12 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Column: Content */}
        <div className="flex flex-col items-start">
          {/* Subtitle / Category */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-4 h-[2px] bg-[#DC2626]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#DC2626] uppercase">
              AI SECURITY &amp; GOVERNANCE &middot; INVESTIGATION ASSISTANT
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-6 leading-tight">
            Assistance you can take apart{" "}
            <span className="text-[#DC2626]">&mdash; answer by answer.</span>
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-[#4B5563] max-w-xl leading-relaxed mb-8">
            Grounded assistance, approved tools, approval-aware workflows and
            deterministic fallback, within a currently authorized scope. Every
            material output carries its purpose, grounding, citations, tool
            permissions, decision-right state, override path and history.
          </p>

          {/* Buttons */}
          <div className="flex flex-row items-center space-x-4">
            <a
              href="#"
              className="px-6 py-2.5 rounded-[4px] bg-[#E0402F] text-white text-xs font-semibold shadow-sm hover:bg-[#D93828] transition-colors"
            >
              Book a Demo
            </a>
            <a
              href="#"
              className="px-6 py-2.5 rounded-[4px] border border-[#D1CBD4] text-[#111827] text-xs font-semibold shadow-sm hover:bg-[#E2DDD5] transition-colors"
            >
              AI Decision Rights
            </a>
          </div>
        </div>

        {/* Right Column: 3D Illustration / Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-full rounded-[8px] overflow-hidden border border-[#D1CBD4] shadow-md bg-[#0D1524] relative aspect-[1/1]"
        >
          <Image
            src="/images/investigation/1.png"
            alt="AI Security and Governance Investigation Assistant Illustration"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
