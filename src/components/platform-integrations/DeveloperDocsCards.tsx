"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DeveloperDocsCards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  } as const;

  const cards = [
    {
      title: "Documentation",
      desc: "The primary technical proof route, ungated wherever it is current and substantive.",
      linkText: "Open docs →",
      linkUrl: "#",
      icon: (
        <svg
          className="w-4 h-4 text-[#0B192C]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="12,3 21,12 12,21 3,12" />
        </svg>
      ),
    },
    {
      title: "APIs, webhooks, SDKs",
      desc: "Public availability follows the documentation authority. Nothing is claimed here about API surface, webhook support or SDK languages ahead of that.",
      linkText: null,
      icon: (
        <svg
          className="w-4 h-4 text-[#0B192C]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      ),
    },
    {
      title: "Build your own connector",
      desc: "Whether a customer-built connector path exists — and on what terms — is a product and documentation decision, not an inference from the existence of an API.",
      linkText: null,
      icon: (
        <svg
          className="w-4 h-4 text-[#0B192C]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="5" />
        </svg>
      ),
    },
  ] as const;

  return (
    <section className="w-full bg-[#EEEBE7] py-16 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-xs min-h-[220px]"
            >
              <div>
                {/* Icon Box */}
                <div className="w-8 h-8 rounded-md bg-[#EEEBE7]/70 border border-[#E5E7EB] flex items-center justify-center mb-6">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0B192C] mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>

              {/* Optional Link Footer */}
              {card.linkText && (
                <div className="pt-6 mt-auto">
                  <a
                    href={card.linkUrl}
                    className="font-mono text-xs font-semibold text-[#E0402F] hover:underline inline-flex items-center gap-1 tracking-tight"
                  >
                    {card.linkText}
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
