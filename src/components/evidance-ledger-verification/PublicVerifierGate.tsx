"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Circle } from "lucide-react";

interface StatusItem {
  id: string;
  name: string;
  checked: boolean;
}

interface StepItem {
  id: string;
  number: string;
  title: string;
  highlighted?: boolean;
}

const statusItems: StatusItem[] = [
  { id: "1", name: "Implementation", checked: true },
  { id: "2", name: "Compatibility", checked: true },
  { id: "3", name: "Method authority", checked: true },
  { id: "4", name: "Data handling", checked: true },
  { id: "5", name: "Privacy", checked: true },
  { id: "6", name: "Security", checked: true },
  { id: "7", name: "Documentation", checked: true },
  { id: "8", name: "Accessibility", checked: false },
  { id: "9", name: "Licensing / repository", checked: false },
  { id: "10", name: "Operations", checked: false },
];

const stepsData: StepItem[] = [
  { id: "s1", number: "01", title: "Read disclosure" },
  { id: "s2", number: "02", title: "Choose input" },
  { id: "s3", number: "03", title: "Confirm scope" },
  { id: "s4", number: "04", title: "Run check" },
  { id: "s5", number: "05", title: "Inspect result" },
  { id: "s6", number: "06", title: "Export receipt", highlighted: true },
];

export default function PublicVerifierGate() {
  return (
    <div className="relative w-full min-h-screen bg-[#0B2732E5] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 bg-[#0B2732E5]">
        <Image
          src="/images/evidance/3.png"
          alt="Background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

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
            <span className="w-4 h-[1px] bg-[#E0967D]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E0967D] font-mono">
              07 &mdash; PUBLIC VERIFIER GATE
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-[44px] font-bold text-white tracking-tight mb-4 leading-[1.1]">
            Public only after readiness is proven.
          </h2>

          {/* Description */}
          <p className="text-[#A0AAB0] text-base sm:text-lg leading-relaxed">
            Availability, processing and data-use disclosure appear before
            upload. The verifier remains gated until implementation, authority,
            privacy, security and operations are ready.
          </p>
        </motion.div>

        {/* Top Status Grid (4 columns / custom layout matching image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-10">
          {statusItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.04,
                ease: "easeOut",
              }}
              style={{
                borderRadius: "14px",
                backgroundColor: "#FFFFFF0D",
                borderColor: "#FFFFFF24",
              }}
              className="py-4 px-5 border flex items-center gap-3 backdrop-blur-sm"
            >
              {item.checked ? (
                <Check className="w-4 h-4 text-[#4ADE80] stroke-[2.5]" />
              ) : (
                <Circle className="w-4 h-4 text-[#E0967D] stroke-[2]" />
              )}
              <span className="font-mono text-sm font-medium text-white tracking-tight">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Steps Grid (6 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full mb-12">
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
                style={{
                  borderRadius: "16px",
                  backgroundColor: isHighlighted ? "#123B4C" : "#FFFFFF",
                }}
                className={`p-5 flex flex-col gap-4 shadow-sm border ${
                  isHighlighted
                    ? "border-[#123B4C] text-white"
                    : "border-[#E5E0D5] text-[#111A1E]"
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

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#C8382C] text-white text-sm font-bold tracking-wide hover:bg-[#B53227] transition-colors shadow-sm"
          >
            Open Verifier
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-[#111A1E] text-sm font-bold tracking-wide hover:bg-[#EAE6DD] transition-colors shadow-sm border border-[#D5CFC7]"
          >
            View Docs
          </a>
        </motion.div>
      </div>
    </div>
  );
}
