"use client";

import React from "react";
import { motion } from "framer-motion";

interface VerificationField {
  id: string;
  name: string;
}

interface StepItem {
  id: string;
  number: string;
  title: string;
  highlighted?: boolean;
}

const leftColumnFields: VerificationField[] = [
  { id: "1", name: "method / version" },
  { id: "2", name: "started / completed" },
  { id: "3", name: "matched / mismatched elements" },
  { id: "4", name: "trust / material status" },
  { id: "5", name: "non-claims" },
];

const rightColumnFields: VerificationField[] = [
  { id: "6", name: "input identity" },
  { id: "7", name: "result state" },
  { id: "8", name: "unsupported / unverifiable" },
  { id: "9", name: "explanation" },
  { id: "10", name: "next proof" },
];

const stepsData: StepItem[] = [
  { id: "s1", number: "01", title: "Identify input" },
  { id: "s2", number: "02", title: "Load method" },
  { id: "s3", number: "03", title: "Check material" },
  { id: "s4", number: "04", title: "Compare elements" },
  { id: "s5", number: "05", title: "Classify result" },
  { id: "s6", number: "06", title: "Explain limits" },
  { id: "s7", number: "07", title: "Route next proof", highlighted: true },
];

export default function VerificationSection() {
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
              06 &mdash; VERIFICATION
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-[40px] font-bold text-[#111A1E] tracking-tight mb-3 leading-[1.1]">
            A scoped result, explained from input to next proof.
          </h2>

          {/* Description */}
          <p className="text-[#4A555B] text-base sm:text-lg leading-relaxed">
            Verification identifies the input, method and material used, then
            reports matched, mismatched and unverifiable elements without
            converting integrity into a broader truth claim.
          </p>
        </motion.div>

        {/* Two Column Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-8">
          {/* Left Fields Column */}
          <div className="flex flex-col gap-4">
            {leftColumnFields.map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
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

          {/* Right Fields Column */}
          <div className="flex flex-col gap-4">
            {rightColumnFields.map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + index * 0.05,
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

        {/* Bottom Steps Grid (7 Columns / Responsive Wrap) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 w-full mb-12">
          {stepsData.map((step, index) => {
            const isHighlighted = step.highlighted;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.05,
                  ease: "easeOut",
                }}
                style={{ borderRadius: "16px" }}
                className={`p-5 flex flex-col gap-6 shadow-sm min-h-[130px] border ${
                  isHighlighted
                    ? "bg-[#123B4C] border-[#123B4C] text-white"
                    : "bg-white border-[#E5E0D5] text-[#111A1E]"
                }`}
              >
                <span
                  className={`text-[11px] font-mono font-semibold tracking-widest ${
                    isHighlighted ? "text-[#8C9BA5]" : "text-[#C8382C]"
                  }`}
                >
                  {step.number}
                </span>
                <span
                  className={`text-sm font-bold tracking-tight leading-snug ${
                    isHighlighted ? "text-white" : "text-[#111A1E]"
                  }`}
                >
                  {step.title}
                </span>
              </motion.div>
            );
          })}
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
            Verify When Available
          </a>
        </motion.div>
      </div>
    </div>
  );
}
