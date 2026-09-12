"use client";

import React from "react";
import { motion } from "framer-motion";

interface GovernanceCard {
  id: string;
  title: string;
  description: string;
}

const governanceCards: GovernanceCard[] = [
  {
    id: "1",
    title: "Detection & Response",
    description:
      "Escalations inform risk change. Boundary: Operational response remains separately governed.",
  },
  {
    id: "2",
    title: "Security Analytics",
    description:
      "Signals support evidence sets. Boundary: Correlation is not source certainty.",
  },
  {
    id: "3",
    title: "Case Management",
    description:
      "Cases preserve investigation history. Boundary: Case status is not a Board decision.",
  },
  {
    id: "4",
    title: "Governed Response",
    description:
      "Approved actions link to outcomes. Boundary: Human authorization remains required.",
  },
  {
    id: "5",
    title: "Compliance Control Plane",
    description:
      "Controls frame obligations. Boundary: Coverage does not prove effectiveness.",
  },
  {
    id: "6",
    title: "Framework Coverage",
    description:
      "Maps evidence to frameworks. Boundary: Mapping is not legal advice.",
  },
];

export default function ConnectedGovernance() {
  return (
    <div className="relative w-full bg-[#F0EDE6] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-start">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-col items-start"
        >
          {/* Subheading / Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#C8382C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8382C]">
              CONNECTED GOVERNANCE
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-[40px] font-bold text-[#111A1E] tracking-tight mb-3 leading-[1.1]">
            Related Evidence, Compliance and Security Context
          </h2>

          {/* Description */}
          <p className="text-[#4A555B] text-base max-w-3xl leading-relaxed">
            Executive reporting stays connected to operational truth without
            collapsing distinct domains or authorities.
          </p>
        </motion.div>

        {/* 3x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {governanceCards.map((card, index) => (
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
              className="bg-white p-8 shadow-sm border border-[#E5E0D5] flex flex-col justify-between min-h-[200px]"
            >
              <div>
                <h3 className="text-xl font-bold text-[#111A1E] tracking-tight mb-3">
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
