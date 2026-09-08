"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhereToGoDeeper() {
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

  const activeCards = [
    {
      icon: (
        <div className="w-5 h-5 flex items-center justify-center bg-[#111827] text-white text-[10px] rounded-[3px]">
          ■
        </div>
      ),
      title: "Evidence ledger & verification",
      badge: "ACTIVE",
      badgeType: "green",
      description:
        "Evidence identity, lineage, completeness and verification — so a claim can be traced to what supports it.",
      boundary:
        "Verification is not certification, and none of this guarantees audit readiness or compliance.",
    },
    {
      icon: (
        <div className="w-5 h-5 flex items-center justify-center bg-[#F3F4F6] border border-[#D1D5DB] text-[#111827] text-xs font-serif rounded-[3px]">
          §
        </div>
      ),
      title: "Compliance control plane",
      badge: "ACTIVE",
      badgeType: "green",
      description:
        "Controls, mappings, tests, assessments and exceptions, with the audit workspace where reviewers coordinate.",
      boundary: "Framework coverage never becomes a certification badge.",
    },
    {
      icon: (
        <div className="w-5 h-5 flex items-center justify-center bg-[#111827] text-white text-[10px] rounded-[3px]">
          ●
        </div>
      ),
      title: "Detection & response",
      badge: "ACTIVE",
      badgeType: "green",
      description:
        "Correlated detection, investigation, cases and governed response — with authority explicit at each step.",
      boundary:
        "No detection-rate, MTTR or response-time figures without current evidence. No autonomous action.",
    },
    {
      icon: (
        <div className="w-5 h-5 flex items-center justify-center bg-[#111827] text-white text-[10px] rotate-45 rounded-[2px]">
          ■
        </div>
      ),
      title: "AI security & governance",
      badge: "ACTIVE",
      badgeType: "green",
      description:
        "Bounded, cited, overridable AI, plus AI-risk controls. Investigation Assistant and AI decision rights sit within it.",
      boundary:
        "No autonomous decision, hidden model, accuracy score or universal explainability claim.",
    },
    {
      icon: (
        <div className="w-5 h-5 flex items-center justify-center bg-[#F3F4F6] border border-[#D1D5DB] text-[#111827] text-[10px] rounded-[3px]">
          ▣
        </div>
      ),
      title: "Platform architecture",
      badge: "SUBSTANCE GATE",
      badgeType: "yellow",
      description:
        "Public architecture overview, planes, trust boundaries and deployment model — as source-defined concepts.",
      boundary:
        "No topology diagram appears on this overview, and no planes, regions or deployment modes are invented here.",
    },
  ] as const;

  const conditionalItems = [
    "Risk intelligence",
    "Security analytics",
    "Case management",
    "Governed response",
    "Executive risk intelligence",
  ] as const;

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-[#EEEBE7] font-sans text-[#111827]">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header Section */}
        <div className="mb-10">
          {/* Tag */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-4 h-[2px] bg-[#E0402F]"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#E0402F] uppercase">
              WHERE TO GO DEEPER
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[34px] font-bold text-[#0B192C] leading-[1.15] tracking-tight mb-4"
          >
            Previews, not duplicates.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#6B7280] max-w-2xl font-normal leading-relaxed"
          >
            Each area below has a canonical destination that owns the detail.
            This page introduces them and gets out of the way.
          </motion.p>
        </div>

        {/* Grid Container */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* 5 Active Cards */}
          {activeCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#E5E7EB] p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow duration-200"
            >
              <div>
                {/* Header Icon & Title */}
                <div className="mb-4">{card.icon}</div>

                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-[#0B192C] tracking-tight">
                    {card.title}
                  </h3>
                </div>

                {/* Badge Status */}
                <div className="mb-4">
                  {card.badgeType === "green" ? (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[10px] font-mono font-bold text-[#047857]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                      {card.badge}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[10px] font-mono font-bold text-[#92400E]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]"></span>
                      {card.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-[#6B7280] leading-relaxed mb-6 font-normal">
                  {card.description}
                </p>

                {/* Link */}
                <div className="mb-6">
                  <a
                    href="#"
                    className="text-xs font-semibold text-[#E0402F] hover:underline inline-flex items-center gap-1"
                  >
                    Open <span className="text-sm">→</span>
                  </a>
                </div>
              </div>

              {/* Boundary Section Footnote */}
              <div className="pt-4 border-t border-[#F3F4F6]">
                <div className="text-[10px] font-mono tracking-widest text-[#9CA3AF] uppercase mb-1.5">
                  BOUNDARY
                </div>
                <p className="text-[11px] font-mono text-[#888E9B] leading-relaxed">
                  {card.boundary}
                </p>
              </div>
            </div>
          ))}

          {/* 6th Card: Conditional Destinations (Greyed out state) */}
          <div className="bg-[#EFECE8]/50 rounded-xl border border-[#E5E7EB] p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#6B7280] mb-3">
                Conditional destinations
              </h3>

              <p className="text-xs text-[#9CA3AF] leading-relaxed mb-6">
                These exist in the architecture but are not rendered as current
                capabilities until their own readiness gates pass:
              </p>

              <ul className="space-y-3 mb-6 font-sans text-xs text-[#9CA3AF]">
                {conditionalItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full border border-[#9CA3AF]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Show Them At All Note */}
            <div className="pt-4 border-t border-[#D6D3D1]/60">
              <div className="text-[10px] font-mono tracking-widest text-[#9CA3AF] uppercase mb-1.5">
                WHY SHOW THEM AT ALL
              </div>
              <p className="text-[11px] font-mono text-[#9CA3AF] leading-relaxed">
                Because a silent gap is less honest than a visible state. They
                are not links until they&apos;re ready.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
