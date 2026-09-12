"use client";

import React from "react";
import { motion } from "framer-motion";

export default function NextStepComponent() {
  return (
    <div className="bg-[#071829] text-[#F8FAFC] font-sans antialiased py-24 px-4 md:px-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Radial Gradient in Center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(224, 64, 47, 0.2) 0%, rgba(224, 64, 47, 0) 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[900px] text-center relative z-10 flex flex-col items-center"
      >
        {/* Header Section */}
        <div className="mb-6 flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-4 h-[2px] bg-[#DC2626]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#93A6B8] uppercase">
              NEXT STEP
            </span>
          </div>
          <h1 className="text-3xl md:text-[34px] font-extrabold text-[#F8FAFC] tracking-tight mb-4 leading-tight">
            Bring an answer you wouldn't want to trust blindly.
          </h1>
          <p className="text-sm md:text-base text-[#94A3B8] max-w-xl leading-relaxed">
            We'll walk a real assistance event end to end &mdash; the grounding
            set, what was cited and what wasn't, which tool was requested and
            why it stopped, and who has to review it before anything moves.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <button
            onClick={() => {}}
            className="bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold px-6 py-3 rounded-[6px] transition-colors shadow-sm"
          >
            Book a Demo
          </button>
          <button
            onClick={() => {}}
            className="hover:bg-[#163857] border border-[#FFFFFF24] text-[#F8FAFC] text-xs font-bold px-6 py-3 rounded-[6px] transition-colors shadow-sm"
          >
            AI Security & Governance
          </button>
          <button
            onClick={() => {}}
            className="hover:bg-[#163857] border border-[#FFFFFF24] text-[#F8FAFC] text-xs font-bold px-6 py-3 rounded-[6px] transition-colors shadow-sm"
          >
            Visit Trust Center
          </button>
        </div>
      </motion.div>
    </div>
  );
}
