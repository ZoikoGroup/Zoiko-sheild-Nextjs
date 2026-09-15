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
    id: "explore-detection-response",
    text: "Explore Detection & Response",
    href: "#",
    variant: "secondary",
  },
];

export default function SecurityOperationsSection() {
  return (
    <div className="relative w-full min-h-[500px] bg-[#0A2029E3] flex items-center justify-center px-6 md:px-12 py-24 overflow-x-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#0A2029E3]">
        <Image
          src="/images/security/6.png"
          alt="Security operations background"
          fill
          className="object-cover opacity-15"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center text-center">
        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-bold text-white tracking-tight max-w-4xl mb-6 leading-[1.1]"
        >
          Bring your security operations into one governed model.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-[#FFFFFFAD] mb-10 leading-relaxed font-normal mx-auto"
        >
          Connect approved tools, preserve source truth and make every
          consequential action explicit.
        </motion.p>

        {/* Buttons List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 w-full max-w-3xl mb-8"
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
                    : "border-2 border-[#FFFFFF26] text-white hover:bg-[#FFFFFF0A] backdrop-blur-sm"
                }`}
              >
                <span>{btn.text}</span>
              </a>
            );
          })}
        </motion.div>

        {/* Disclaimer / Bottom Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-[#FFFFFF66] text-xs mx-auto leading-relaxed"
        >
          Consolidation does not guarantee universal tool compatibility,
          complete detection, automatic containment, 24/7 operations, compliance
          or security outcomes.
        </motion.p>
      </div>
    </div>
  );
}
