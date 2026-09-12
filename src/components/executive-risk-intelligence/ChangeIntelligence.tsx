"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ChangeRow {
  id: string;
  label: string;
  status: "VERIFIED" | "LINKED";
  highlighted?: boolean;
}

const changeRows: ChangeRow[] = [
  {
    id: "1",
    label: "Comparison basis — Q2 2026 vs Q1 2026",
    status: "VERIFIED",
  },
  {
    id: "2",
    label: "Changed object — Third-party access risk",
    status: "VERIFIED",
  },
  {
    id: "3",
    label: "Change type — Scope and evidence update",
    status: "VERIFIED",
  },
  {
    id: "4",
    label: "Magnitude — Material increase",
    status: "VERIFIED",
    highlighted: true,
  },
  {
    id: "5",
    label: "Why it matters — New privileged pathway",
    status: "VERIFIED",
  },
  { id: "6", label: "Supporting refs — 14 linked records", status: "LINKED" },
  {
    id: "7",
    label: "Contradictions/caveats — 2 under review",
    status: "LINKED",
  },
];

export default function ChangeIntelligence() {
  return (
    <div className="relative w-full flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/executive/2.png"
          alt="Background"
          fill
          className="object-cover opacity-100"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Header & Description */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col items-start"
        >
          {/* Subheading / Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#C8382C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8382C] font-mono">
              CHANGE INTELLIGENCE
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-[48px] font-bold text-white tracking-tight mb-6 leading-[1.1]">
            Versioned Change Analysis
          </h2>

          {/* Description */}
          <p className="text-[#A0AAB0] text-base sm:text-lg leading-relaxed">
            A red/green arrow is never enough. The viewer must see what changed,
            under which method/scope, and whether the comparison is truly
            compatible.
          </p>
        </motion.div>

        {/* Right Column: Large White Card with Rows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          style={{ borderRadius: "24px" }}
          className="lg:col-span-7 bg-white p-6 sm:p-8 shadow-2xl flex flex-col w-full"
        >
          <div className="flex flex-col">
            {changeRows.map((row, index) => {
              const isHighlighted = row.highlighted;
              const isLast = index === changeRows.length - 1;

              return (
                <div
                  key={row.id}
                  className={`py-5 flex items-center justify-between gap-4 ${
                    !isLast ? "border-b border-[#EAE4D9]" : ""
                  }`}
                >
                  <span
                    className={`font-mono text-sm sm:text-base tracking-tight ${
                      isHighlighted
                        ? "text-[#C8382C] font-bold"
                        : "text-[#111A1E] font-medium"
                    }`}
                  >
                    {row.label}
                  </span>

                  <span
                    className={`font-mono text-[11px] font-bold tracking-widest px-2.5 py-1 rounded ${
                      row.status === "VERIFIED"
                        ? "text-[#1F7A6C]"
                        : "text-[#1F7A6C]"
                    }`}
                  >
                    {row.status}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
