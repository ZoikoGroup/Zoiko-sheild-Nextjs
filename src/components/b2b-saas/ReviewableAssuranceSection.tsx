"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface BigCard {
  id: string;
  title: string;
  description: string;
  linkText: string;
}

interface BottomBar {
  id: string;
  leftText: string;
  rightText?: string;
}

const bigCards: BigCard[] = [
  {
    id: "1",
    title: "Evidence Ledger & Verification",
    description:
      "Identity/source · lineage · freshness · completeness: complete/partial/missing/unknown · verification method/version/result · access authority · package scope/exclusions · correction/withdrawal",
    linkText: "/platform/evidence →",
  },
  {
    id: "2",
    title: "Controls and Assessment",
    description:
      "Control · framework mapping · test · assessment · exception · remediation · SaaS/cloud context · AI context",
    linkText: "/platform/compliance →",
  },
  {
    id: "3",
    title: "Continuous Assurance",
    description:
      "Current evidence/control review · customer security review · audit preparation · assessor independence · controlled questionnaire answers · permission-aware packages · authoritative cadence only",
    linkText: "/continuous-assurance →",
  },
];

const bottomBars: BottomBar[] = [
  {
    id: "4",
    leftText: "EVIDENCE RECORD",
    rightText: "→",
  },
  {
    id: "5",
    leftText: "CONTROL / TEST",
    rightText: "→",
  },
  {
    id: "6",
    leftText: "SCOPED REVIEW PACKAGE",
  },
];

export default function ReviewableAssuranceSection() {
  return (
    <section className="relative w-full bg-[#0A1116] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden text-white font-sans">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/b2b-saas/3.png"
          alt="Reviewable Assurance Background"
          fill
          className="object-cover opacity-40 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1116]/95 via-[#0A1116]/80 to-[#0A1116]/95 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-start">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-col items-start text-left"
        >
          {/* Subheading / Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#C8382C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8382C] font-mono">
              REVIEWABLE ASSURANCE
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl lg:text-[40px] font-bold text-white tracking-tight mb-3 leading-[1.1]">
            Turn current evidence into reviewable assurance.
          </h2>

          {/* Description */}
          <p className="text-[#A0AAB0] text-sm md:text-base max-w-4xl leading-relaxed">
            Evidence, verification, mapping, testing, assurance and packages are
            scoped records—not certification, compliance, attestation, audit
            success or customer acceptance.
          </p>
        </motion.div>

        {/* Grid Container */}
        <div className="flex flex-col gap-6 w-full">
          {/* Top Row (3 Big Cards with background #123B4C and border #FFFFFF24) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {bigCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                style={{
                  backgroundColor: "#123B4C",
                  borderColor: "#FFFFFF24",
                }}
                className="rounded-2xl p-6 border flex flex-col justify-between shadow-xl min-h-[320px]"
              >
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#C2D1D9] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6">
                  <span className="text-xs font-mono font-medium text-[#4ADE80] hover:underline cursor-pointer">
                    {card.linkText}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row (3 Bar Divs with background #FFFFFF0D and border #FFFFFF24) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {bottomBars.map((bar, index) => (
              <motion.div
                key={bar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: (index + 3) * 0.05,
                  ease: "easeOut",
                }}
                style={{
                  backgroundColor: "#FFFFFF0D",
                  borderColor: "#FFFFFF24",
                }}
                className="rounded-2xl px-6 py-5 border flex items-center justify-between shadow-lg backdrop-blur-sm"
              >
                <span className="text-xs font-mono tracking-wider font-semibold text-[#8AE9C1]">
                  {bar.leftText}
                </span>
                {bar.rightText && (
                  <span className="text-xs font-mono text-[#8AE9C1]">
                    {bar.rightText}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
