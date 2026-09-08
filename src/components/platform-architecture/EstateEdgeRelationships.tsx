"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EstateEdgeRelationships() {
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

  const cardsData = [
    {
      title: "Existing security estate",
      description:
        "Category-level inbound and outbound relationships only. No connector counts, vendor names, modes, data paths or residency — and no rip-and-replace framing.",
      buttonText: "Integrations →",
      buttonUrl: "#",
    },
    {
      title: "Evidence ledger",
      description:
        "Architecture may reference evidence, lineage, completeness, packages and verification — without inventing evidence storage topology.",
      buttonText: "Evidence →",
      buttonUrl: "#",
    },
    {
      title: "Detection & response",
      description:
        "A route relationship, not a claim about exact runtime paths.",
      buttonText: "Detection →",
      buttonUrl: "#",
    },
    {
      title: "AI security & governance",
      description:
        "AI is one bounded route among several. There is no assumption that an AI plane or a model sits at the center of the platform, and no hidden-model or autonomous-architecture inference.",
      buttonText: "AI governance →",
      buttonUrl: "#",
    },
    {
      title: "Compliance control plane",
      description:
        "A product destination label. It does not establish the existence, name or responsibility of an architecture plane — the two uses of the word are unrelated.",
      buttonText: "Control plane →",
      buttonUrl: "#",
    },
    {
      title: "System Status",
      description:
        "Authoritative for live service health. An architecture diagram never implies availability.",
      buttonText: "Status →",
      buttonUrl: "#",
    },
  ] as const;

  return (
    <section className="w-full bg-[#0B2237] py-16 md:py-24 px-6 md:px-12 lg:px-20 font-sans text-white">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header Section */}
        <div className="mb-12">
          {/* Tag */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-4 h-[2px] bg-[#E0402F]"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#93A6B8] uppercase">
              ESTATE EDGE AND DOMAIN RELATIONSHIPS
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[34px] font-bold text-white leading-[1.25] lg:leading-[58px] tracking-normal mb-4"
          >
            Architecture links out. It doesn&apos;t absorb.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#94A3B8] max-w-2xl font-normal leading-relaxed"
          >
            The integration edge, the evidence system, detection and AI each
            have their own authoritative destination. This page shows the
            relationship and routes to them rather than restating what they own.
          </motion.p>
        </div>

        {/* 6-Card Grid Layout */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cardsData.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#0E2C46] border border-[#FFFFFF24] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#2A4D7A] transition-colors duration-200"
            >
              <div>
                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#94A3B8] font-normal leading-relaxed mb-8">
                  {card.description}
                </p>
              </div>

              {/* Outline Button */}
              <div>
                <a
                  href={card.buttonUrl}
                  className="inline-flex items-center justify-center px-4 py-2 bg-[#0D2A45]/50 hover:bg-[#13375B] text-white text-xs font-medium border border-[#1E3A5F] rounded-md transition-colors duration-200"
                >
                  {card.buttonText}
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
