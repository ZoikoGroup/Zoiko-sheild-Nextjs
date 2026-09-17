"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TopCard {
  id: string;
  title: string;
  subtitle: string;
  actionText: string;
  status: string;
  statusColor: string;
  owner: string;
  lastVerified: string;
  statusSource: string;
  fallback: string;
  knownGaps: string;
}

interface BottomCard {
  id: string;
  title: string;
  description: string;
  linkText?: string;
}

const topCards: TopCard[] = [
  {
    id: "1",
    title: "Identity service",
    subtitle: "Account abstraction · global",
    actionText: "Read identities",
    status: "Connected",
    statusColor: "bg-[#E4F0EC] text-[#1F7A6C]",
    owner: "Platform security",
    lastVerified: "12 Sep 2026",
    statusSource: "connector check",
    fallback: "manual export",
    knownGaps: "Known gaps recorded",
  },
  {
    id: "2",
    title: "Object storage",
    subtitle: "Project abstraction · EU region",
    actionText: "Read metadata",
    status: "Partial",
    statusColor: "bg-[#FFF3D6] text-[#9B6B21]",
    owner: "Platform security",
    lastVerified: "12 Sep 2026",
    statusSource: "connector check",
    fallback: "manual export",
    knownGaps: "Known gaps recorded",
  },
  {
    id: "3",
    title: "Workflow integration",
    subtitle: "Tenant workspace · configured region",
    actionText: "Read / write approved actions",
    status: "Degraded",
    statusColor: "bg-[#FFF3D6] text-[#9B6B21]",
    owner: "Platform security",
    lastVerified: "12 Sep 2026",
    statusSource: "connector check",
    fallback: "manual export",
    knownGaps: "Known gaps recorded",
  },
];

const bottomCards: BottomCard[] = [
  {
    id: "4",
    title: "Integration catalog",
    description:
      "Source/destination · read/write/action scopes · authentication · schemas · limits · versions · retries",
    linkText: "/integrations →",
  },
  {
    id: "5",
    title: "Event delivery",
    description:
      "Webhook signing · replay protection · dead-letter handling · connector health",
  },
  {
    id: "6",
    title: "Control and exit",
    description:
      "Revocation authority · fallback/exit · known gaps · disconnected and unknown states",
  },
];

export default function CloudAndIntegrationsSection() {
  return (
    <section className="relative w-full bg-[#0A1116] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden text-white font-sans">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/b2b-saas/2.png"
          alt="Control Room Background"
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
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E0967D] font-mono">
              CLOUD AND INTEGRATIONS
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl lg:text-[40px] font-bold text-white tracking-tight mb-3 leading-[1.1]">
            Make dependencies visible—especially when they are degraded.
          </h2>

          {/* Description */}
          <p className="text-[#A0AAB0] text-sm md:text-base max-w-3xl leading-relaxed">
            Provider categories are shown without logos or universal
            compatibility claims. Health is sourced, owned and last verified.
          </p>
        </motion.div>

        {/* Grid Container */}
        <div className="flex flex-col gap-6 w-full">
          {/* Top Row (3 Cards with Status Badges & Detailed Footer info - Lighter BG) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {topCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className="bg-[#FFFFFF0D] rounded-2xl p-6 border border-[#FFFFFF24] flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Card Header with Status Badge */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {card.title}
                      </h3>
                      <p className="text-xs text-[#8A9EA8] mt-0.5">
                        {card.subtitle}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${card.statusColor}`}
                    >
                      {card.status}
                    </span>
                  </div>

                  {/* Action Link Text */}
                  <p className="text-sm font-medium text-[#5FE3C5] mb-6 mt-4">
                    {card.actionText}
                  </p>
                </div>

                {/* Metadata Footer */}
                <div className="border-t border-[#1E4D60]/50 pt-4 text-[11px] text-[#8A9EA8] flex flex-col gap-1">
                  <div>
                    <span className="text-[#A0AAB0]">Owner:</span> {card.owner}{" "}
                    &nbsp;·&nbsp;{" "}
                    <span className="text-[#A0AAB0]">Last verified:</span>{" "}
                    {card.lastVerified}
                  </div>
                  <div>
                    <span className="text-[#A0AAB0]">Status source:</span>{" "}
                    {card.statusSource} &nbsp;·&nbsp;{" "}
                    <span className="text-[#A0AAB0]">Fallback/exit:</span>{" "}
                    {card.fallback}
                  </div>
                  <div className="text-[#A0AAB0] mt-1">{card.knownGaps}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row (3 Cards with simpler descriptions - Darker BG) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {bottomCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: (index + 3) * 0.05,
                  ease: "easeOut",
                }}
                className="bg-[#123B4C] rounded-2xl p-6 border border-[#FFFFFF24] flex flex-col justify-between shadow-xl min-h-[160px]"
              >
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#8A9EA8] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {card.linkText && (
                  <div className="mt-4">
                    <span className="text-xs font-semibold text-[#4ADE80] hover:underline cursor-pointer">
                      {card.linkText}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
