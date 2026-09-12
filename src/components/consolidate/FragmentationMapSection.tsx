"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface FragmentationCard {
  id: string;
  title: string;
  description: string;
}

const fragmentationCards: FragmentationCard[] = [
  {
    id: "1",
    title: "Sources",
    description:
      "Telemetry split across tools → Approved connection and source inventory",
  },
  {
    id: "2",
    title: "Identity / asset context",
    description:
      "Different names for same subject → Governed correlation with provenance",
  },
  {
    id: "3",
    title: "Queues",
    description: "Alerts split across consoles → Routing and linked state",
  },
  {
    id: "4",
    title: "Cases",
    description:
      "Investigation history scattered → Case linkage and timeline continuity",
  },
  {
    id: "5",
    title: "Tickets",
    description:
      "ITSM/security ownership diverges → System-of-record + sync rules",
  },
  {
    id: "6",
    title: "Actions",
    description:
      "Different APIs/privileges → Action registry + authority by connector",
  },
  {
    id: "7",
    title: "Evidence",
    description:
      "Facts/decisions hard to reconstruct → Attributable evidence and receipts",
  },
  {
    id: "8",
    title: "Ownership",
    description: "Unclear next actor → Explicit RACI, queue and escalation",
  },
  {
    id: "9",
    title: "Health",
    description:
      "Silent connector degradation → Visible coverage impact and fallback",
  },
];

export default function FragmentationMapSection() {
  return (
    <div className="relative w-full bg-[#F0EDE6] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-start">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 flex flex-col items-start"
        >
          {/* Subheading / Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#C8382C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8382C]">
              FRAGMENTATION MAP
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-[40px] font-bold text-[#111A1E] tracking-tight mb-3 leading-[1.1]">
            See every break in the operating chain.
          </h2>

          {/* Description */}
          <p className="text-[#4A555B] text-base leading-relaxed">
            Map sources, queues, handoffs and ownership gaps &mdash; then define
            the governed treatment for each.
          </p>
        </motion.div>

        {/* Featured Banner Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="relative w-full h-[220px] mb-6 overflow-hidden shadow-md"
          style={{ borderRadius: "24px" }}
        >
          <Image
            src="/images/security/2.png"
            alt="Fragmentation Network Graph"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* 3x3 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {fragmentationCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              style={{ borderRadius: "20px" }}
              className="bg-white p-6 sm:p-8 shadow-sm border border-[#E5E0D5] flex flex-col justify-between min-h-[160px]"
            >
              <div>
                <h3 className="text-lg font-bold text-[#111A1E] tracking-tight mb-2">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-[#4A555B] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
