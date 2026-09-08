"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function OperatingLayer() {
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

  const inboundItems = [
    "Identity and access providers",
    "Endpoint and workload telemetry",
    "Cloud and infrastructure platforms",
    "Network and email security",
    "Ticketing and workflow systems",
    "Control and assurance repositories",
  ] as const;

  const platformLayers = [
    "Layer 01",
    "Layer 02",
    "Layer 03",
    "Layer 04",
    "Layer 05",
  ] as const;

  const outboundItems = [
    { text: "Evidence with lineage and verification", badge: null },
    { text: "Correlated detection and investigation", badge: null },
    { text: "Governed response, under approval", badge: null },
    { text: "Control assurance and exceptions", badge: null },
    { text: "Executive decision support", badge: "CONDITIONAL" },
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
              YOUR EXISTING SECURITY ESTATE
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[34px] font-bold text-[#0B192C] leading-[1.15] tracking-tight mb-4"
          >
            An operating layer over what you already run.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#6B7280] max-w-2xl font-normal leading-relaxed"
          >
            Inbound source categories on one side, governed outcomes on the
            other, the platform in between. Category level only — the
            integration catalog holds which specific tools are currently
            supported.
          </motion.p>
        </div>

        {/* 3-Column Diagram Box */}
        <motion.div
          variants={itemVariants}
          className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-sm mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E7EB]">
            {/* Column 1: Inbound */}
            <div className="p-6 sm:p-8 bg-white flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono tracking-widest text-[#9CA3AF] uppercase mb-1">
                  INBOUND • CATEGORY LEVEL
                </div>
                <h3 className="text-base font-bold text-[#0B192C] mb-6">
                  Sources you already operate
                </h3>

                <ul className="space-y-4">
                  {inboundItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-[#4B5563] pb-3 border-b border-[#F3F4F6] last:border-b-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 2: Platform (Middle Layer) */}
            <div className="p-6 sm:p-8 bg-[#EFECE8] flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono tracking-widest text-[#78716C] uppercase mb-1">
                  PLATFORM • FIVE LAYERS
                </div>
                <h3 className="text-base font-bold text-[#0B192C] mb-6">
                  Names pending authority
                </h3>

                <div className="space-y-3 mb-6">
                  {platformLayers.map((layer, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-dashed border-[#D6D3D1] rounded px-4 py-3 flex items-center justify-between shadow-xs"
                    >
                      <span className="font-mono text-xs text-[#78716C]">
                        {layer}
                      </span>
                      <span className="font-mono text-xs text-[#A8A29E]">
                        —
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="font-mono text-[11px] text-[#78716C] pt-2">
                Operating sequence: connect → correlate → govern → preserve →
                verify
              </div>
            </div>

            {/* Column 3: Outbound */}
            <div className="p-6 sm:p-8 bg-white flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono tracking-widest text-[#9CA3AF] uppercase mb-1">
                  OUTBOUND • GOVERNED
                </div>
                <h3 className="text-base font-bold text-[#0B192C] mb-6">
                  Where work comes out
                </h3>

                <ul className="space-y-4">
                  {outboundItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-[#4B5563] pb-3 border-b border-[#F3F4F6] last:border-b-0 flex items-center justify-between gap-2"
                    >
                      <span>{item.text}</span>
                      {item.badge && (
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#FEF3C7] border border-[#FDE68A] text-[9px] font-mono font-bold text-[#92400E] shrink-0">
                          <span className="w-2 h-2 rounded-full bg-[#D97706] inline-block"></span>
                          {item.badge}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Banner inside Card */}
          <div className="p-5 sm:p-6 bg-white border-t border-[#E5E7EB] text-xs text-[#6B7280] leading-relaxed">
            <span className="font-bold text-[#0B192C]">
              Availability varies
            </span>{" "}
            by integration, permissions, product, contract and release state.
            There is no connector count, vendor logo wall,
            universal-compatibility claim, zero-migration promise or replacement
            story here — and integration presence never implies data residency.
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#"
            className="px-6 py-3 hover:bg-[#e4e3dd] text-[#0B192C] border border-[#E2E1DC] font-semibold text-xs sm:text-sm rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
          >
            <span>Explore the integration catalog</span>
            <ArrowRight className="w-4 h-4 text-[#0B192C]" />
          </a>
          <a
            href="#"
            className="px-6 py-3 hover:bg-[#e4e3dd] text-[#0B192C] border border-[#E2E1DC] font-semibold text-xs sm:text-sm rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
          >
            Request an integration
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
