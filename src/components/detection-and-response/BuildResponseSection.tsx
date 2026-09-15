"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ActionButton {
  id: string;
  text: string;
  href: string;
  variant: "primary" | "secondary";
}

const actionButtons: ActionButton[] = [
  {
    id: "book-demo",
    text: "Book a Demo",
    href: "#",
    variant: "primary",
  },
  {
    id: "explore-platform",
    text: "Explore the Platform",
    href: "#",
    variant: "secondary",
  },
];

export default function BuildResponseSection() {
  return (
    <div className="relative w-full min-h-[450px] bg-[#0A2029BF] flex items-center justify-center px-6 md:px-12 py-24 overflow-x-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#0A2029BF]">
        <Image
          src="/images/detection/last.png"
          alt="Build response background"
          fill
          className="object-cover opacity-15"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center text-center">
        {/* Subheading / Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E0967D]">
            SEE DETECTION DECISIONS IN CONTEXT
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-[44px] font-bold text-white tracking-tight max-w-4xl mb-6 leading-[1.1]"
        >
          Build response around evidence and human authority.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-[#FFFFFFAD] text-base mb-10 leading-relaxed font-normal max-w-2xl mx-auto"
        >
          Explore an inspectable path from source signal to governed
          action—without turning uncertainty into an autonomous decision.
        </motion.p>

        {/* Buttons List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 w-full max-w-3xl"
        >
          {actionButtons.map((btn) => {
            const isPrimary = btn.variant === "primary";

            return (
              <a
                key={btn.id}
                href={btn.href}
                className={`inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-semibold tracking-wide transition-colors ${
                  isPrimary
                    ? "bg-[#C8382C] text-white hover:bg-[#B53227] shadow-sm"
                    : "border border-[#FFFFFF66] text-white hover:bg-[#1A262C]"
                }`}
              >
                <span>{btn.text}</span>
              </a>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
