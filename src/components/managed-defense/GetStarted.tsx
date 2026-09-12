"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GetStarted() {
  return (
    <div className="relative bg-[#071829] text-[#F8FAFC] font-sans antialiased py-24 px-4 md:px-8 flex flex-col items-center justify-center overflow-hidden">
      {/* Radial Gradient Background from top-center down */}
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
        className="w-full max-w-[800px] text-center flex flex-col items-center relative z-10"
      >
        {/* Subtitle / Category */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-4 h-[2px] bg-[#DC2626]" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#93A6B8] uppercase">
            GET STARTED
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-[34px] font-extrabold text-[#F8FAFC] tracking-tight mb-4">
          Qualify the scope before anyone quotes it.
        </h1>

        {/* Description */}
        <p className="text-sm md:text-base text-[#94A3B8] max-w-xl leading-relaxed mb-8">
          We&apos;ll work through your operating model, which domains you
          actually need operated, which response actions you&apos;d authorize,
          and what coverage you require — then tell you plainly which parts are
          contractable today.
        </p>

        {/* Buttons */}
        <div className="flex flex-row items-center justify-center space-x-4">
          <a
            href="#"
            className="px-6 py-2.5 rounded-[4px] bg-[#E0402F] text-white text-xs font-semibold shadow-sm hover:bg-[#D93828] transition-colors"
          >
            Book a Demo
          </a>
          <a
            href="#"
            className="px-6 py-2.5 rounded-[4px] border border-[#FFFFFF24] text-[#F8FAFC] text-xs font-semibold shadow-sm hover:bg-[#133554] transition-colors"
          >
            Visit Trust Center
          </a>
        </div>
      </motion.div>
    </div>
  );
}
