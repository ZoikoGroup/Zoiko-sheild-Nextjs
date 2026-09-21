"use client";

import React from "react";
import { motion } from "framer-motion";

interface QuickstartItem {
  id: string;
  title: string;
  prerequisites: string;
  action: string;
  success: string;
}

const quickstarts: QuickstartItem[] = [
  {
    id: "01",
    title: "Connect First Integration",
    prerequisites: "EDR Admin privileges",
    action: "Create tenant connection via credentialed flow",
    success: "Endpoint status shows: Connected",
  },
  {
    id: "02",
    title: "Setup Authentication",
    prerequisites: "Client API credentials",
    action: "Generate Bearer token using client secret",
    success: "Received 200 OK access token",
  },
  {
    id: "03",
    title: "Query Endpoint Status",
    prerequisites: "Read-only access rights",
    action: "Invoke GET /v1/endpoints with org scope",
    success: "JSON payload containing containment list",
  },
  {
    id: "04",
    title: "Establish Webhook Listener",
    prerequisites: "Public HTTPS endpoint",
    action: "Register listener URL with verified secret rotating",
    success: "Handshake signature validated",
  },
  {
    id: "05",
    title: "Generate Evidence Hash",
    prerequisites: "Active compliance manager",
    action: "Sync EDR logs and generate SHA-256 state proof",
    success: "Hash recorded to evidence ledger",
  },
  {
    id: "06",
    title: "Isolate Rogue Endpoint",
    prerequisites: "Dual-approver policy keys",
    action: "Initiate POST /v1/actions/isolate tuned policy containment",
    success: "Full non-revoked overridden with audit trail",
  },
];

export default function TelemetryBootstrapping() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  return (
    <section className="w-full bg-[#F5F2EB] py-16 sm:py-20 lg:py-24 px-6 md:px-12 lg:px-16 font-sans text-[#111827] border-t border-[#E7E5DF]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          {/* Tag / Kicker */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#BE3A34]" />
            <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#BE3A34] uppercase">
              POPULAR QUICKSTARTS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0B1B26] tracking-tight">
            Step-by-step telemetry bootstrapping
          </h2>
        </div>

        {/* 6 Quickstart Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {quickstarts.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E7E5DF] shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#DCD8CF] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Number and Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono font-bold text-lg text-[#BE3A34] tracking-tight">
                    {item.id}
                  </span>
                  <span className="font-mono text-[10px] font-bold tracking-wider text-[#2563EB] bg-[#EAF2FA] px-2 py-0.5 rounded border border-[#D0E2F7]">
                    QUICKSTART
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0B1B26] mb-4 leading-snug">
                  {item.title}
                </h3>

                {/* Details List */}
                <div className="space-y-2 text-[12px] sm:text-[12.5px] leading-relaxed">
                  <p className="text-[#5A6874]">
                    <span className="font-semibold text-[#0B1B26]">Prerequisites:</span>{" "}
                    {item.prerequisites}
                  </p>
                  <p className="text-[#5A6874]">
                    <span className="font-semibold text-[#0B1B26]">Action:</span>{" "}
                    {item.action}
                  </p>
                  <p className="text-[#5A6874]">
                    <span className="font-semibold text-[#0B1B26]">Success:</span>{" "}
                    {item.success}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
