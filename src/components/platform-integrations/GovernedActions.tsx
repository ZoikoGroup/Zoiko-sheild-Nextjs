"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GovernedActions() {
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

  const standardActions = [
    {
      title: "Ingest and observe",
      desc: "Represented only where the connector's direction and permissions actually authorize it.",
      icon: (
        <svg
          className="w-4 h-4 text-[#0B192C]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="6" y="4" width="12" height="16" rx="1" />
          <line x1="12" y1="4" x2="12" y2="20" />
        </svg>
      ),
    },
    {
      title: "Enrich and correlate",
      desc: "May contribute source-backed context to Detection & Response or Risk Intelligence. Connectivity confers no causal certainty.",
      icon: (
        <svg
          className="w-4 h-4 text-[#0B192C]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <polygon points="12,4 20,12 12,20 4,12" />
        </svg>
      ),
    },
    {
      title: "Create case or ticket",
      desc: "Only where both the integration and the destination support it. Bidirectional updates are never assumed.",
      icon: (
        <svg
          className="w-4 h-4 text-[#0B192C]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
    },
  ] as const;

  const governedActions = [
    {
      title: "Execute response",
      desc: "Governed Response authority, approvals, signing, attestation and rollback remain separate, source-controlled capabilities. An integration does not activate them.",
      icon: (
        <svg
          className="w-4 h-4 text-[#0B192C]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="9" />
          <line x1="5.6" y1="5.6" x2="18.4" y2="18.4" />
        </svg>
      ),
    },
    {
      title: "AI-assisted action",
      desc: "AI stays bounded, cited and overridable. Connecting a system does not expand AI decision rights in any direction.",
      icon: (
        <svg
          className="w-4 h-4 text-[#0B192C]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <polygon points="12,3 21,12 12,21 3,12" />
        </svg>
      ),
    },
    {
      title: "Response levels",
      desc: "No R0–R4 level is presented as active for a connector unless the governed-response authority explicitly maps it. Action-capable integrations also need safe failure and rollback semantics before any public claim.",
      icon: (
        <span className="font-mono text-xs font-bold text-[#0B192C]">R</span>
      ),
    },
  ] as const;

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
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
              GOVERNED ACTIONS
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-[34px] sm:text-4xl lg:text-[44px] font-bold text-[#0B192C] leading-[1.15] tracking-tight mb-4 max-w-4xl"
          >
            A connector that can write is not permission to act.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#6B7280] max-w-2xl font-normal leading-relaxed"
          >
            Technical capability and authorization are separate things. Response
            authority, approvals, signing, attestation and rollback are governed
            independently of whatever a connector could technically do.
          </motion.p>
        </div>

        {/* Top Row: Standard Action Cards (3 columns) */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
        >
          {standardActions.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E7EB] rounded-xl p-6 sm:p-7 flex flex-col justify-start shadow-xs"
            >
              {/* Icon Container */}
              <div className="w-8 h-8 rounded bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center mb-5">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[#0B192C] mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-normal">
                {card.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Bottom Row: Governed Action Cards with Red Borders (3 columns) */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {governedActions.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border-t-4 border border-[#E0402F] rounded-xl p-6 sm:p-7 flex flex-col justify-start shadow-xs"
            >
              {/* Icon Container */}
              <div className="w-8 h-8 rounded bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center mb-5">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[#0B192C] mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-normal">
                {card.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
