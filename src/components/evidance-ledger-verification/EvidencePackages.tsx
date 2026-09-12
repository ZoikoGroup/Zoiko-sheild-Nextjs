"use client";

import React from "react";
import { motion } from "framer-motion";

interface PackageField {
  id: string;
  name: string;
}

interface StepItem {
  id: string;
  number: string;
  title: string;
  highlighted?: boolean;
}

const leftColumnFields: PackageField[] = [
  { id: "1", name: "package_id / version" },
  { id: "2", name: "generated_at" },
  { id: "3", name: "completeness summary" },
  { id: "4", name: "verification support" },
  { id: "5", name: "owner / access" },
];

const rightColumnFields: PackageField[] = [
  { id: "6", name: "purpose / scope" },
  { id: "7", name: "item inventory" },
  { id: "8", name: "integrity summary" },
  { id: "9", name: "known exclusions" },
  { id: "10", name: "history" },
];

const stepsData: StepItem[] = [
  { id: "s1", number: "01", title: "Choose purpose" },
  { id: "s2", number: "02", title: "Define scope" },
  { id: "s3", number: "03", title: "Select items" },
  { id: "s4", number: "04", title: "Resolve states" },
  { id: "s5", number: "05", title: "Generate manifest" },
  { id: "s6", number: "06", title: "Review exclusions" },
  { id: "s7", number: "07", title: "Publish package", highlighted: true },
];

export default function EvidencePackages() {
  return (
    <div className="relative w-full bg-[#F6F4EE] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
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
              05 &mdash; EVIDENCE PACKAGES
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-[40px] font-bold text-[#111A1E] tracking-tight mb-3 leading-[1.1]">
            Build a bounded package, not an ambiguous export.
          </h2>

          {/* Description */}
          <p className="text-[#4A555B] text-base sm:text-lg leading-relaxed">
            A package declares purpose, inventory, exclusions, version and
            verification support so recipients can understand exactly what
            is&mdash;and is not&mdash;inside.
          </p>
        </motion.div>

        {/* Top Split Section: Dark Card & Two Column Fields */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full mb-8 items-start">
          {/* Left Column: Dark Featured Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ borderRadius: "20px" }}
            className="lg:col-span-5 bg-[#123B4C] p-8 text-white flex flex-col shadow-sm"
          >
            <div>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#E0967D] mb-4 block">
                PACKAGE &bull; READY
              </span>
              <h3 className="text-2xl font-bold tracking-tight mb-6 leading-snug">
                Assurance review &middot; Q3 controls
              </h3>
            </div>
            <div className="font-mono text-xs text-[#A0B2BC] flex flex-col gap-1.5 pt-6 border-t border-white/10">
              <p className="tracking-tight">PKG-88842 / v3.1</p>
              <p className="tracking-tight">24 items &bull; 2 exclusions</p>
              <p className="tracking-tight">Generated 11 Sep 2026</p>
            </div>
          </motion.div>

          {/* Right Column: Two Column Fields Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  className="bg-white py-4 px-5 shadow-sm border border-[#E5E0D5] flex items-center h-[58px]"
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
                  className="bg-white py-4 px-5 shadow-sm border border-[#E5E0D5] flex items-center h-[58px]"
                >
                  <span className="font-mono text-sm font-semibold text-[#111A1E] tracking-tight">
                    {field.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Steps Grid (7 Columns / Responsive Wrap) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 w-full mb-6">
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
                className={`p-5 flex flex-col shadow-sm gap-2 border ${
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
            Inspect Package
          </a>
        </motion.div>
      </div>
    </div>
  );
}
