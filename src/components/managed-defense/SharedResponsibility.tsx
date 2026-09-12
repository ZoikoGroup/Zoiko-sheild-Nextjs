"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SharedResponsibilityComponent() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#1E293B] font-sans antialiased py-16 px-4 md:px-8 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[1200px]"
      >
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-4 h-[2px] bg-[#DC2626]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#DC2626] uppercase">
              SHARED RESPONSIBILITY
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
            Eight roles, and what none of them implies.
          </h1>
          <p className="text-sm md:text-base text-[#4B5563] max-w-xl leading-relaxed">
            Most managed-service disappointment traces back to an assumption
            about who owned something. These are stated up front rather than
            discovered during an incident.
          </p>
        </div>

        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-full rounded-[8px] overflow-hidden border border-[#D1CBD4] shadow-md bg-[#0D1524] relative aspect-[16/9]"
        >
          <Image
            src="/images/defence/big.png"
            alt="Shared Responsibility Illustration"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
