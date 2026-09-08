"use client";

import React from "react";
import { motion } from "framer-motion";
import { Key, ShieldAlert } from "lucide-react";

export default function PermissionsAndLeastPrivilege() {
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

  const scopeList = [
    {
      title: "Purpose per scope",
      desc: "what it enables, in user language, before the authorization step.",
    },
    {
      title: "Minimum for the mode",
      desc: "the least scope that supports the selected connection mode and use case.",
    },
    {
      title: "Read separated from action",
      desc: "ingest scopes are visually distinct from action-capable scopes and from governed-response authority.",
    },
    {
      title: "Credentials never redisplayed",
      desc: "secrets, tokens and private keys are not shown again after creation.",
    },
    {
      title: "Named authorization owner",
      desc: "a role in your organization grants access. ZoikoShield does not grant itself access.",
    },
    {
      title: "Auditable change",
      desc: "who changed authorization, when, what scope changed, and the approved reason.",
    },
  ] as const;

  return (
    <section className="w-full bg-[#0B2237] py-20 px-6 md:px-12 lg:px-20 font-sans text-white">
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
              PERMISSIONS AND LEAST PRIVILEGE
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[36px] font-bold text-white leading-[1.15] tracking-tight mb-4 max-w-6xl"
          >
            Access breadth is shown before authorization, not after.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#94A3B8] max-w-2xl font-normal leading-relaxed"
          >
            &ldquo;One-click setup&rdquo; framing hides how much access is being
            granted. Each approved scope is explained in plain language, with
            its purpose, before anyone approves it.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left Card: How scopes are handled */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0E2C46] border border-[#FFFFFF24] rounded-xl p-8 flex flex-col justify-between"
          >
            <div>
              {/* Icon Box */}
              <div className="w-9 h-9 rounded-md border border-[#FFFFFF12] flex items-center justify-center text-[#94A3B8] mb-6">
                <Key className="w-4 h-4" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-6">
                How scopes are handled
              </h3>

              {/* List */}
              <div className="space-y-4">
                {scopeList.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 pb-4 border-b border-[#1E3A5F]/60 last:border-0 last:pb-0"
                  >
                    <span className="w-2 h-2 mt-2 border border-[#E0402F] rounded-xs shrink-0 flex items-center justify-center">
                    </span>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      <span className="font-bold text-white">{item.title}</span>{" "}
                      — {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Card: Absolutes we don't use */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0E2C46] border border-[#FFFFFF24] rounded-xl p-8 flex flex-col justify-between"
          >
            <div>
              {/* Icon Box */}
              <div className="w-9 h-9 rounded-md border border-[#FFFFFF12] flex items-center justify-center text-[#94A3B8] mb-6">
                <ShieldAlert className="w-4 h-4" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-6">
                Absolutes we don&apos;t use
              </h3>

              {/* Content Paragraphs */}
              <div className="space-y-6 text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-normal">
                <p>
                  &ldquo;Read-only&rdquo; &middot; &ldquo;zero access&rdquo;
                  &middot; &ldquo;no credentials&rdquo; &middot; &ldquo;never
                  stores data.&rdquo; Each is a strong security claim that needs
                  evidence for a specific connector and mode — not a reassuring
                  phrase applied across a whole catalog.
                </p>

                <p>
                  Exact scope names, credential types and secret-storage
                  implementation stay with the security and integration
                  authority. They are engineering facts, not marketing copy, and
                  publishing them loosely would be its own risk.
                </p>
                <a
                  href="#"
                  className="px-5 py-3 hover:bg-[#13375B] text-white border border-[#FFFFFF24] font-semibold text-xs rounded-lg transition-colors duration-200 inline-flex items-center justify-center shadow-xs"
                >
                  Security Practices
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
