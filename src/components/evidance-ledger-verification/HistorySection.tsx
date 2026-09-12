"use client";

import React from "react";
import { motion } from "framer-motion";

interface HistoryStep {
  id: string;
  number: string;
  title: string;
}

const historySteps: HistoryStep[] = [
  { id: "1", number: "01", title: "Create / preserve" },
  { id: "2", number: "02", title: "Correct metadata" },
  { id: "3", number: "03", title: "Replace / supersede" },
  { id: "4", number: "04", title: "Withdraw" },
  { id: "5", number: "05", title: "Reverify" },
  { id: "6", number: "06", title: "Package rebuild" },
  { id: "7", number: "07", title: "Source withdrawal" },
  { id: "8", number: "08", title: "Method deprecation" },
];

export default function HistorySection() {
  return (
    <div className="relative w-full bg-[#F0EDE6] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-start">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-col items-start max-w-2xl"
        >
          {/* Subheading / Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#C8382C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8382C]">
              08 &mdash; HISTORY
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-[40px] font-bold text-[#111A1E] tracking-tight mb-3 leading-[1.1]">
            Corrections remain visible. Prior states remain interpretable.
          </h2>

          {/* Description */}
          <p className="text-[#4A555B] text-base sm:text-lg leading-relaxed">
            History preserves correction, supersession, withdrawal and prior
            verification states&mdash;without silently rewriting what recipients
            previously saw.
          </p>
        </motion.div>

        {/* 4x2 Grid of Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full mb-6">
          {historySteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              style={{ borderRadius: "20px" }}
              className="bg-white p-6 shadow-sm border border-[#E5E0D5] flex flex-col gap-4"
            >
              <span className="text-[11px] font-mono font-semibold text-[#C8382C] tracking-widest">
                {step.number}
              </span>
              <h3 className="text-[18px] font-bold text-[#111A1E] tracking-tight leading-snug">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white border border-[#D5CFC7] text-[#111A1E] text-sm font-bold tracking-wide hover:bg-[#EAE6DD] transition-colors shadow-sm"
          >
            Inspect History
          </a>
        </motion.div>
      </div>
    </div>
  );
}
