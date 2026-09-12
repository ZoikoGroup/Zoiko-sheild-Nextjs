"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface IntegrityItem {
  id: string;
  name: string;
}

const topRowItems: IntegrityItem[] = [
  { id: "1", name: "Claim vocabulary · tamper-evident only" },
  { id: "2", name: "Method name / version" },
  { id: "3", name: "Integrity reference" },
  { id: "4", name: "Verification input" },
];

const bottomRowItems: IntegrityItem[] = [
  { id: "5", name: "Trust anchor / key context" },
  { id: "6", name: "Timestamp context" },
  { id: "7", name: "Failure state" },
  { id: "8", name: "Scope limitation" },
];

export default function TamperEvidentIntegrity() {
  return (
    <div className="relative w-full bg-[#0B2732CC] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 bg-[#0B2732CC]">
        <Image
          src="/images/evidance/2.png"
          alt="Tamper Evident Integrity Background"
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
              04 &mdash; TAMPER-EEVIDENT INTEGRITY
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-[44px] font-bold text-white tracking-tight mb-4 leading-[1.1]">
            Integrity metadata, with the claim boundary attached.
          </h2>

          {/* Description */}
          <p className="text-[#A0AAB0] text-base leading-relaxed">
            ZoikoShield uses the precise claim tamper-evident. Method, inputs, trust context, timestamp, failure state and scope limitation remain visible beside every result.
          </p>
        </motion.div>

        {/* 4x2 Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-8">
          {topRowItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              style={{ borderRadius: "14px" }}
              className="bg-white py-6 px-5 shadow-sm flex items-center min-h-[90px]"
            >
              <span className="font-mono text-sm font-semibold text-[#111A1E] tracking-tight leading-snug">
                {item.name}
              </span>
            </motion.div>
          ))}

          {bottomRowItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05, ease: "easeOut" }}
              style={{ borderRadius: "14px" }}
              className="bg-white py-6 px-5 shadow-sm flex items-center min-h-[90px]"
            >
              <span className="font-mono text-sm font-semibold text-[#111A1E] tracking-tight leading-snug">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Prohibited Inference Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          style={{ borderRadius: "16px" }}
          className="w-full bg-[#C4424224] border border-[#C4424224] p-6 sm:p-8 mb-8 backdrop-blur-sm"
        >
          <span className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#E0967D] font-mono mb-3">
            PROHIBITED INFERENCE
          </span>
          <p className="font-mono text-xs sm:text-sm text-[#E2E8F0] tracking-tight leading-relaxed">
            tamper-evident &ne; immutable &nbsp;&bull;&nbsp; &ne; blockchain &nbsp;&bull;&nbsp; integrity match &ne; source truth &nbsp;&bull;&nbsp; &ne; legal chain of custody &nbsp;&bull;&nbsp; &ne; compliance / certification
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#C8382C] text-white text-sm font-bold tracking-wide hover:bg-[#B53227] transition-colors shadow-sm"
          >
            See Method/Version Context
          </a>
        </motion.div>

      </div>
    </div>
  );
}