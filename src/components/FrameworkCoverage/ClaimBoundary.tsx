"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ClaimBoundary() {
  return (
    <div className="w-full flex flex-col font-sans">
      {/* Top Section with #F7E6E2 background */}
      <section className="w-full bg-[#F7E6E2] flex justify-center px-6 md:px-16 lg:px-24 py-8 border-b border-[#111A1E10]">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-start md:items-center">
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-[0.2em] font-mono text-[#C44242] uppercase font-semibold">
              CURRENT STATE <span className="mx-1">•</span> CONDITIONAL
            </span>
          </div>
          <p className="text-[#0A2029] text-xs sm:text-sm font-normal leading-relaxed">
            Approved public records are not yet populated. Framework references
            do not imply certification, regulatory approval, guaranteed
            compliance, or guaranteed security.
          </p>
        </div>
      </section>

      {/* Main Bottom Section with #F0EDE6 background */}
      <section className="w-full bg-[#F0EDE6] flex justify-center px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-md flex flex-col items-start"
          >
            <div className="mb-4">
              <span className="text-[10px] tracking-[0.2em] font-mono text-[#C8382C] uppercase font-semibold">
                CLAIM BOUNDARY
              </span>
            </div>
            <h2 className="text-4xl sm:text-[42px] font-bold text-[#111A1E] leading-[1.15] tracking-tight">
              Alignment is a scoped relationship—not a verdict.
            </h2>
          </motion.div>

          {/* Right Column: Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
          >
            {/* Card 1: What it means */}
            <div className="bg-[#FFFFFF] rounded-[14px] p-6 shadow-sm border border-[#111A1E08] flex flex-col justify-between w-full">
              <div>
                <h3 className="text-[#1F7A6C] text-lg font-bold mb-4 tracking-tight">
                  What it means
                </h3>
                <p className="text-[#4A555B] text-sm sm:text-[15px] leading-relaxed">
                  An approved, reviewed record describes a specific relationship
                  between a named authority reference and a defined ZoikoShield
                  product or service scope.
                </p>
              </div>
            </div>

            {/* Card 2: What it does not mean */}
            <div className="bg-[#123B4C] rounded-[14px] p-6 shadow-md border border-[#FFFFFF10] flex flex-col justify-between w-full">
              <div>
                <h3 className="text-[#E0967D] text-lg font-bold mb-4 tracking-tight">
                  What it does not mean
                </h3>
                <p className="text-[#9BA6AD] text-sm sm:text-[15px] leading-relaxed">
                  It is not certification, regulator approval, guaranteed
                  compliance, guaranteed security, or a statement that every
                  reference applies to every customer.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
