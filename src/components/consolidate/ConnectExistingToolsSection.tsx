"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const modeTags = [
  "Read-only pull",
  "Read-only push",
  "Bi-directional metadata",
  "Prepare-write",
  "Approval-required write",
  "Delegated reversible write",
  "Administrative",
  "Disconnected",
];

const categoryTags = [
  "SIEM",
  "Endpoint / EDR",
  "Identity / PAM",
  "Cloud / SaaS",
  "Network / Email",
  "Ticketing / ITSM",
  "Messaging",
  "Threat Intel",
  "Custom / API",
];

export default function ConnectExistingToolsSection() {
  return (
    <div className="relative w-full bg-[#F7F5F0] flex items-center justify-center px-6 md:px-12 py-20 overflow-x-hidden">
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text Content & Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col items-start"
        >
          {/* Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#C8382C]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8382C] font-mono">
              CONNECT EXISTING TOOLS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl lg:text-[34px] font-bold text-[#111A1E] tracking-tight mb-4 leading-[1.1]">
            Connection without surrendering control.
          </h2>

          {/* Description */}
          <p className="text-[#4A555B] text-sm leading-relaxed mb-8">
            Choose explicit modes, permissions and health states for every
            approved connector.
          </p>

          {/* Mode Tags Row */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {modeTags.map((tag, index) => (
              <span
                key={index}
                className="text-[11px] font-mono font-medium text-[#111A1E] bg-white border border-[#E5E0D5] px-3.5 py-1.5 rounded-full shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Connector Lifecycle Box */}
          <div
            style={{ borderRadius: "20px" }}
            className="w-full bg-white border border-[#E5E0D5] p-6 shadow-sm mb-8 flex flex-col gap-2"
          >
            <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-[#111A1E]">
              Connector lifecycle
            </h3>
            <p className="text-xs sm:text-sm font-mono text-[#4A555B] tracking-tight overflow-x-auto whitespace-nowrap">
              Requested → Authorized → Configured → Validated → Active →
              Degraded → Suspended → Retired
            </p>
          </div>

          {/* Category Tags Row */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {categoryTags.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-mono font-medium text-[#111A1E] bg-white border border-[#E5E0D5] px-3.5 py-1.5 rounded-full shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom Info Banner */}
          <div
            style={{
              borderRadius: "16px",
              backgroundColor: "#E4F0EC",
            }}
            className="w-full p-5 flex items-start gap-4 border border-[#D0E2DB]"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4 text-[#1F7A6C]" />
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#111A1E] leading-relaxed">
              Technical capability, configured permission and decision authority
              are three separate states.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Server/Console Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-6 relative w-full h-[570px] overflow-hidden shadow-2xl"
          style={{ borderRadius: "24px" }}
        >
          <Image
            src="/images/security/3.png"
            alt="Connector Health Console"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
