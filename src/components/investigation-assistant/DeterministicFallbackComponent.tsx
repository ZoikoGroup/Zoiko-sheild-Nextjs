"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DeterministicFallbackComponent() {
  return (
    <div className="min-h-screen bg-[#f6f4f2] text-[#F8FAFC] font-sans antialiased py-16 px-4 md:px-8 flex flex-col items-center justify-center">
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
            <span className="text-xs font-bold tracking-[0.2em] text-[#93A6B8] uppercase">
              DETERMINISTIC FALLBACK
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B2237] tracking-tight mb-3">
            Ten ways it can fail, and none of them free-generates.
          </h1>
          <p className="text-sm md:text-base text-[#94A3B8] max-w-2xl leading-relaxed">
            The source requires deterministic fallback but does not define its
            algorithm, feature parity, latency or exact journey &mdash; those
            stay implementation authority. What is fixed is that every failure
            path ends somewhere safe.
          </p>
        </div>

        {/* Hero Illustration Card */}
        <div className="overflow-hidden">
          <div className="w-full h-full relative rounded-[4px] overflow-hidden min-h-[350px] md:min-h-[480px]">
            <Image
              src="/images/investigation/4.png"
              alt="Deterministic Fallback 3D Illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
