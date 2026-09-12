"use client";

import React from "react";
import { motion } from "framer-motion";

interface RelationshipCard {
  id: string;
  title: string;
  allowedText: string;
  boundaryText: string;
}

const relationshipsData: RelationshipCard[] = [
  {
    id: "1",
    title: "Detection & Response",
    allowedText: "Allowed: alert, incident and response evidence.",
    boundaryText:
      "Boundary: detection outcome does not establish control effectiveness.",
  },
  {
    id: "2",
    title: "Risk Intelligence",
    allowedText: "Allowed: evidence-informed risk signals.",
    boundaryText: "Boundary: evidence is not a risk decision.",
  },
  {
    id: "3",
    title: "AI Security & Governance",
    allowedText: "Allowed: model, review and decision lineage.",
    boundaryText: "Boundary: integrity does not prove model safety.",
  },
  {
    id: "4",
    title: "Platform Architecture",
    allowedText: "Allowed: service, key and method context.",
    boundaryText: "Boundary: architecture remains authoritative here.",
  },
  {
    id: "5",
    title: "Integrations",
    allowedText: "Allowed: source authority and ingestion state.",
    boundaryText: "Boundary: connection does not prove source truth.",
  },
  {
    id: "6",
    title: "Integrations",
    allowedText: "Allowed: source authority and ingestion state.",
    boundaryText: "Boundary: connection does not prove source truth.",
  },
];

export default function RelationshipsSection() {
  return (
    <div className="relative w-full bg-[#F7F5F0] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-start">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-col items-start max-w-2xl"
        >
          {/* Subheading / Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#C8382C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8382C]">
              09 &mdash; RELATIONSHIPS
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-[40px] font-bold text-[#111A1E] tracking-tight mb-3 leading-[1.1]">
            Evidence connects domains without replacing their authority.
          </h2>

          {/* Description */}
          <p className="text-[#4A555B] text-base sm:text-lg leading-relaxed">
            Follow each relationship to its authoritative destination and keep
            the allowed evidence use and claim boundary attached.
          </p>
        </motion.div>

        {/* Grid of Relationship Cards (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-12">
          {relationshipsData.map((card, index) => (
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
              className="bg-white p-8 shadow-sm border border-[#E5E0D5] flex flex-col gap-4 justify-between"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-[#111A1E] tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[13px] font-medium text-[#1F7A6C] leading-snug">
                  {card.allowedText}
                </p>
                <p className="text-sm text-[#7C8890] leading-relaxed">
                  {card.boundaryText}
                </p>
              </div>

              <div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white border border-[#D5CFC7] text-[#111A1E] text-xs font-bold tracking-wide hover:bg-[#EAE6DD] transition-colors shadow-sm"
                >
                  Open Authoritative Destination
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
