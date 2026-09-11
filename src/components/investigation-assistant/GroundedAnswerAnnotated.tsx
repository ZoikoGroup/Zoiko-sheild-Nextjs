"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GroundedAnswerAnnotated() {
  return (
    <div className="min-h-screen bg-[#0B2237] text-[#F8FAFC] font-sans antialiased py-16 px-4 md:px-12 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[1200px]"
      >
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-4 h-[2px] bg-[#DC2626]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#DC2626] uppercase">
              A GOVERNED ANSWER, ANNOTATED
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-3">
            Grounded is a property you can check, not an adjective.
          </h1>
          <p className="text-sm md:text-base text-[#94A3B8] max-w-xl leading-relaxed">
            Here is a single synthetic assistance event with every part exposed
            &mdash; the authorized context set, the citation mapping, an uncited
            claim held back, a tool request awaiting permission, and the
            decision-right gate that stops it from going further on its own.
          </p>
        </div>

        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-full rounded-[8px] overflow-hidden border border-[#1E3A5A] shadow-lg bg-[#071829] relative aspect-[16/9]"
        >
          <Image
            src="/images/investigation/2.png"
            alt="Grounded is a property you can check, not an adjective illustration"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
