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
    id: "explore-risk-intelligence",
    text: "Explore Risk Intelligence",
    href: "#",
    variant: "secondary",
  },
];

export default function ExecutiveClaritySection() {
  return (
    <div className="relative w-full min-h-[450px] bg-[#0A2029] flex items-center justify-center px-6 md:px-12 py-24 overflow-x-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/executive/4.jpg"
          alt="Executive clarity background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center text-center">
        {/* Subheading / Tag with Dash Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="w-8 h-px bg-[#C8382C]"></span> {/* Red dash line */}
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#C8382C]">
            EXECUTIVE CLARITY
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-[34px] font-bold text-white tracking-tight max-w-4xl mb-6 leading-tight"
        >
          See Executive Risk Intelligence in Action
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-[#FFFFFFAD] text-lg mb-10 leading-relaxed font-normal max-w-2xl mx-auto"
        >
          Review what changed, trace every statement and keep decision rights
          where they belong.
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
                    : "border-2 border-[#FFFFFF1A] text-white hover:bg-[#FFFFFF0A] backdrop-blur-sm"
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
