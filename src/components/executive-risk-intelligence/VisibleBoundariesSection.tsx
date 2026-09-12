"use client";

import React from "react";
import { motion } from "framer-motion";

interface BoundaryCard {
  id: string;
  state: string;
  title: string;
  highlighted?: boolean;
}

const boundaryCards: BoundaryCard[] = [
  { id: "1", state: "STATE 01", title: "Assumption" },
  { id: "2", state: "STATE 02", title: "Missing evidence" },
  { id: "3", state: "STATE 03", title: "Stale evidence" },
  {
    id: "4",
    state: "STATE 04",
    title: "Conflicting evidence",
    highlighted: true,
  },
  { id: "5", state: "STATE 05", title: "Out of scope" },
  { id: "6", state: "STATE 06", title: "Under review" },
  { id: "7", state: "STATE 07", title: "Restricted evidence" },
  { id: "8", state: "STATE 08", title: "Method incompatible" },
  { id: "9", state: "STATE 09", title: "Unknown outcome" },
];

export default function VisibleBoundariesSection() {
  return (
    <div className="relative w-full bg-[#F7F5F0] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-col items-center text-center"
        >
          {/* Subheading / Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#C8382C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8382C]">
              VISIBLE BOUNDARIES
            </span>
            <span className="w-4 h-[1px] bg-[#C8382C]"></span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-[40px] font-bold text-[#111A1E] tracking-tight mb-3 leading-[1.1]">
            Limitations, Unknowns and Conflict States
          </h2>

          {/* Description */}
          <p className="text-[#4A555B] text-base leading-relaxed">
            No caveat is hidden in a footnote. Every state remains legible at
            the point of use.
          </p>
        </motion.div>

        {/* 3x3 Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {boundaryCards.map((card, index) => {
            const isHighlighted = card.highlighted;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                style={{
                  borderRadius: "14px",
                  backgroundColor: isHighlighted ? "#FBEAEA" : "#FFFFFF",
                }}
                className={`p-6 shadow-sm border flex flex-col ${
                  isHighlighted ? "border-[#C44242]" : "border-[#E5E0D5]"
                }`}
              >
                <span
                  className={`text-[11px] font-mono font-semibold tracking-widest ${
                    isHighlighted ? "text-[#C8382C]" : "text-[#1F7A6C]"
                  }`}
                >
                  {card.state}
                </span>

                <h3 className="text-lg font-bold text-[#111A1E] tracking-tight">
                  {card.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
