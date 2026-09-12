"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface JobOption {
  id: string;
  label: string;
}

const jobOptions: JobOption[] = [
  { id: "extend-detection", label: "Extend detection/triage" },
  { id: "govern-response", label: "Govern response" },
  { id: "improve-audit", label: "Improve audit readiness" },
  { id: "monitor-control", label: "Monitor control effectiveness" },
  { id: "reduce-fragmented", label: "Reduce fragmented security operations" },
  { id: "prove-controls", label: "Prove controls continuously" },
  { id: "both-operational", label: "Both operational defense and assurance" },
  { id: "not-sure", label: "Not sure" },
];

export default function WhatJobAreYouTryingToSolve() {
  const [selectedId, setSelectedId] = useState<string>("not-sure");

  return (
    <div className="relative w-full bg-[#F0EDE6] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Explanatory Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-20"
        >
          {/* Subheading / Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#C8382C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8382C]">
              START WITH YOUR NEED
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-[44px] font-bold text-[#111A1E] tracking-tight leading-[1.1] mb-4">
            What job are you trying to solve?
          </h2>

          {/* Description */}
          <p className="text-[#4A555B] text-base sm:text-lg mb-8 leading-relaxed">
            Choose the category closest to your current need. The explanation
            gives you context — not a recommendation.
          </p>

          {/* Explanatory Result Box */}
          <div className="w-full bg-[#123B4C] rounded-2xl p-6 md:p-8 text-white shadow-lg">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#E0967D] block mb-3 font-mono">
              EXPLANATORY RESULT
            </span>
            <p className="text-sm md:text-base text-[#E2E8F0] font-normal leading-relaxed">
              Your declared need helps identify which service page has the most
              relevant detail. It does not rank either service or determine fit.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Interactive Options List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col gap-3 w-full"
        >
          {jobOptions.map((option) => {
            const isSelected = selectedId === option.id;

            return (
              <div
                key={option.id}
                onClick={() => setSelectedId(option.id)}
                className={`w-full px-6 py-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center gap-4 shadow-sm ${
                  isSelected
                    ? "bg-[#123B4C] border-[#123B4C] text-white"
                    : "bg-white border-[#E5E0D5] text-[#111A1E] hover:border-[#C4C0B5]"
                }`}
              >
                {/* Custom Radio Circle */}
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                    isSelected ? "border-white" : "border-[#7C8890]"
                  }`}
                >
                  {isSelected && (
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  )}
                </div>

                {/* Option Label */}
                <span className="text-sm sm:text-base font-medium tracking-wide">
                  {option.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
