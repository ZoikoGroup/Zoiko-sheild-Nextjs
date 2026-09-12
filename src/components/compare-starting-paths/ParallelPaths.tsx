"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, GitFork } from "lucide-react";

interface PathCard {
  id: string;
  title: string;
}

const pathCards: PathCard[] = [
  { id: "shared-evidence", title: "Shared evidence" },
  { id: "shared-integrations", title: "Shared integrations" },
  { id: "shared-stakeholders", title: "Shared stakeholders" },
];

export default function ParallelPaths() {
  return (
    <div className="relative w-full bg-[#123B4CEB] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/compare-starting-paths/2.png"
          alt="Parallel paths background"
          fill
          className="object-cover opacity-10"
          priority
        />
        {/* Dark overlay gradient to match the deep blue feel */}
      </div>

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Text & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col items-start"
        >
          {/* Subheading / Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#E0967D]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E0967D]">
              PARALLEL PATHS
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-[36px] font-bold text-white tracking-tight leading-[1.1] mb-6">
            When both needs coexist.
          </h2>

          {/* Description */}
          <p className="text-[#A0AAB0] text-base sm:text-lg mb-8 leading-relaxed font-normal">
            Organizations may need both when the operating jobs and accountable
            owners differ. The paths can run in parallel without becoming a
            forced bundle.
          </p>

          {/* Button */}
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#2A3B45] bg-[#111A1E]/80 text-white text-sm font-bold tracking-wide hover:bg-[#1A262C] transition-colors group"
            >
              <span>Explore both</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full"
        >
          {pathCards.map((card) => (
            <div
              key={card.id}
              className="bg-[#0B4A64] backdrop-blur-md rounded-3xl p-8 border border-[#123B4C] flex flex-col justify-between aspect-square hover:border-[#2C4A5C] transition-colors"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[#E0967D]">
                <GitFork className="w-5 h-5" />
              </div>

              {/* Card Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                {card.title}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
