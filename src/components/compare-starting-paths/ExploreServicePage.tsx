"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
    id: "view-services",
    text: "View service pages",
    href: "#",
    variant: "secondary",
  },
  {
    id: "contact-support",
    text: "Contact support",
    href: "#",
    variant: "secondary",
  },
];

export default function ExploreServicePage() {
  return (
    <div className="relative w-full min-h-[450px] bg-[#0A2029E3] flex items-center justify-center px-6 md:px-12 py-24 overflow-x-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#0A2029E3]">
        <Image
          src="/images/compare-starting-paths/3.png"
          alt="Explore service page background"
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
            CHOOSE YOUR NEXT STEP
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-[44px] font-bold text-white tracking-tight max-w-4xl mb-6 leading-[1.1]"
        >
          Explore a service page, start a neutral discovery, or use support.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-[#FFFFFFAD] text-base mb-10 leading-relaxed font-normal"
        >
          No ranking, no forced bundle — just a clearer route to the operating
          job you need to solve.
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
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold tracking-wide transition-colors group ${
                  isPrimary
                    ? "bg-[#C8382C] text-white hover:bg-[#B53227] shadow-sm"
                    : "border border-[#FFFFFF66] text-white hover:bg-[#1A262C]"
                }`}
              >
                <span>{btn.text}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
