"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardItem {
  title: string;
  status: "ACTIVE" | "CONDITIONAL";
  description: string;
  hasOpenLink?: boolean;
  highlightBorder?: boolean;
}

const cardsData: CardItem[] = [
  {
    title: "Detection & Response",
    status: "ACTIVE",
    description:
      "Correlated detections and investigation context. The assistant can summarize them; it cannot declare an incident verdict or confirm compromise.",
    hasOpenLink: true,
  },
  {
    title: "Evidence ledger",
    status: "ACTIVE",
    description:
      "Lineage, completeness and verification. The assistant references evidence — it does not fabricate missing evidence or turn uncertainty into fact.",
    hasOpenLink: true,
  },
  {
    title: "Compliance control plane",
    status: "ACTIVE",
    description:
      "Controls and assessments. An assistant summary is not a compliance conclusion, and legal or regulatory attribution routes to human authority.",
    hasOpenLink: true,
  },
  {
    title: "Security Analytics",
    status: "CONDITIONAL",
    description:
      "Rules, context and replay concepts. Nothing here implies the destination is currently available.",
  },
  {
    title: "Case Management",
    status: "CONDITIONAL",
    description:
      "Case ownership stays human and organizational. Assistant output is assistance and event history — never the investigator of record.",
  },
  {
    title: "Governed Response",
    status: "CONDITIONAL",
    description:
      "No action authority. A tool existing, a recommendation being made or an analyst agreeing does not authorize execution. R0–R4 and response permissions are separately authoritative.",
    highlightBorder: true,
  },
];

export default function WhereAssistanceHandsOffComponent() {
  return (
    <div className="min-h-screen bg-[#EEEBE7] text-[#1E293B] font-sans antialiased py-16 px-4 md:px-8 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[1200px]"
      >
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-4 h-[2px] bg-[#DC2626]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#DC2626] uppercase">
              WHERE ASSISTANCE HANDS OFF
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
            It retrieves and summarizes. It doesn't redefine.
          </h1>
          <p className="text-sm md:text-base text-[#4B5563] max-w-3xl leading-relaxed">
            The assistant may work with authorized context from each destination
            below, but it cannot override any of their semantics — and case,
            evidence, compliance and risk authority stays where it lives.
          </p>
        </div>

        {/* 3x2 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className={`bg-[#FFFFFF] border rounded-[6px] p-6 flex flex-col justify-between shadow-sm transition-all ${
                card.highlightBorder ? "border-[#DC2626]" : "border-[#D1CBD4]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-[#111827] text-[15px]">
                    {card.title}
                  </h2>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded flex items-center space-x-1 ${
                      card.status === "ACTIVE"
                        ? "bg-[#DCFCE7] text-[#166534]"
                        : "bg-[#FEF3C7] text-[#92400E]"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                        card.status === "ACTIVE"
                          ? "bg-[#166534]"
                          : "bg-[#D97706]"
                      }`}
                    />
                    {card.status}
                  </span>
                </div>

                <p className="text-xs text-[#4B5563] leading-relaxed">
                  {card.description}
                </p>
              </div>

              {card.hasOpenLink && (
                <div className="mt-6">
                  <a
                    href="#open"
                    onClick={(e) => e.preventDefault()}
                    className="text-xs font-bold text-[#DC2626] hover:underline inline-flex items-center"
                  >
                    Open &rarr;
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Full-Width Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          className="bg-[#FFFFFF] border border-[#D1CBD4] rounded-[6px] p-6 md:p-8 shadow-sm"
        >
          <h2 className="font-bold text-[#111827] text-[15px] mb-2">
            Hypothesis is not finding
          </h2>
          <p className="text-xs md:text-[13px] text-[#4B5563] leading-relaxed max-w-5xl">
            The assistant may help orient, summarize authorized context, surface
            alternative explanations and suggest a source-backed next question
            within allowed purpose and permissions. It does not rank hypotheses
            definitively, attribute cause, name an actor, or convert a narrative
            into a conclusion. Investigation and case authority remain with the
            people accountable for them.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
