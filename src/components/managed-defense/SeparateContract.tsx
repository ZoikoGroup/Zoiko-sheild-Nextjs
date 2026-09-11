"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Calendar,
  Layers,
  ShieldAlert,
  ShieldCheck,
  Cpu,
} from "lucide-react";

interface ContractCard {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

const cardsData: ContractCard[] = [
  {
    title: "Evidence continuity",
    description:
      "Case, decision and action records with lineage and attribution, retained under approved retention and access states — so a decision made months ago can still be explained on its original basis.",
    icon: <FileText className="w-4 h-4 text-[#6B7280]" />,
  },
  {
    title: "Service review",
    description:
      "Trends, cases, coverage gaps and the decisions they imply, at an agreed cadence with an agreed audience. Coverage gaps are an output of the review, not something surfaced only when they cause a problem.",
    icon: <Calendar className="w-4 h-4 text-[#6B7280]" />,
  },
  {
    title: "Detection & Response platform",
    description:
      "The software capability. Managed Defense is an operated relationship that may use it — the two are not the same purchase, and platform capability is not service entitlement.",
    icon: <Layers className="w-4 h-4 text-[#6B7280]" />,
  },
  {
    title: "Incident Response Retainer",
    description: (
      <>
        <strong>Not included.</strong> Incident readiness, retainer and forensic
        services are separately defined where offered. Managed Defense creates
        no responder entitlement or activation target.
      </>
    ),
    icon: <ShieldAlert className="w-4 h-4 text-[#6B7280]" />,
  },
  {
    title: "Continuous Assurance",
    description: (
      <>
        <strong>Independent service.</strong> Ongoing control and evidence
        assurance. Not bundled with Managed Defense, and not a prerequisite in
        either direction.
      </>
    ),
    icon: <ShieldCheck className="w-4 h-4 text-[#6B7280]" />,
  },
  {
    title: "Integrations",
    description:
      "Exact connector compatibility is source-specific and comes from the catalog. Co-management accepts your existing tools; gaps are documented rather than used as replacement pressure.",
    icon: <Cpu className="w-4 h-4 text-[#6B7280]" />,
  },
];

export default function SeparateContractComponent() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#1E293B] font-sans antialiased py-16 px-4 md:px-8 flex flex-col items-center justify-center">
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
              REPORTING, EVIDENTENCE AND ADJACENT SERVICES
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
            What you keep, and what&apos;s a separate contract.
          </h1>
          <p className="text-sm md:text-base text-[#4B5563] max-w-xl leading-relaxed">
            Evidence continuity is the part of a managed service that outlives
            the engagement. The adjacent services below are independent — none
            is bundled, and none is assumed.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="bg-[#FFFFFF] border border-[#D1CBD4] rounded-[6px] p-6 md:p-8 flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Icon Box */}
                <div className="w-8 h-8 rounded bg-[#F4F1EA] flex items-center justify-center mb-6">
                  {card.icon}
                </div>

                <h2 className="font-bold text-[#111827] text-[15px] mb-3">
                  {card.title}
                </h2>

                <p className="text-xs text-[#4B5563] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
