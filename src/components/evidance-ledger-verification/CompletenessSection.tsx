"use client";

import React from "react";
import { motion } from "framer-motion";

interface FieldItem {
  id: string;
  name: string;
}

const leftColumnFields: FieldItem[] = [
  { id: "1", name: "completeness_state" },
  { id: "3", name: "required_elements" },
  { id: "5", name: "missing_elements" },
  { id: "7", name: "restricted_elements" },
  { id: "9", name: "calculation_method" },
  { id: "11", name: "limitations" },
];

const rightColumnFields: FieldItem[] = [
  { id: "2", name: "scope_basis" },
  { id: "4", name: "present_elements" },
  { id: "6", name: "unknown_elements" },
  { id: "8", name: "stale_elements" },
  { id: "10", name: "reviewed_at / owner" },
];

export default function CompletenessSection() {
  return (
    <div className="relative w-full bg-[#F6F4EE] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-start">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-col items-start max-w-3xl"
        >
          {/* Subheading / Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#C8382C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8382C]">
              03 &mdash; COMPLETENESS
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-[40px] font-bold text-[#111A1E] tracking-tight mb-3 leading-[1.1]">
            Missing and unknown are governed states&mdash;not empty space.
          </h2>

          {/* Description */}
          <p className="text-[#4A555B] text-base max-w-2xl leading-relaxed">
            Completeness is calculated against a declared scope and method,
            preserving restricted, stale and unavailable elements as distinct
            states.
          </p>
        </motion.div>

        {/* Grid Container for Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-6">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {leftColumnFields.map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                style={{ borderRadius: "14px" }}
                className="bg-white py-5 px-6 shadow-sm border border-[#E5E0D5] flex items-center"
              >
                <span className="font-mono text-sm font-semibold text-[#111A1E] tracking-tight">
                  {field.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {rightColumnFields.map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05 + 0.1,
                  ease: "easeOut",
                }}
                style={{ borderRadius: "14px" }}
                className="bg-white py-5 px-6 shadow-sm border border-[#E5E0D5] flex items-center"
              >
                <span className="font-mono text-sm font-semibold text-[#111A1E] tracking-tight">
                  {field.name}
                </span>
              </motion.div>
            ))}
          </div>
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
            Inspect Completeness
          </a>
        </motion.div>
      </div>
    </div>
  );
}
