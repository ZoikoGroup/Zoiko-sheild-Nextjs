"use client";

import React from "react";
import { motion } from "framer-motion";

interface RetentionState {
  stateNum: string;
  title: string;
  description: string;
  evidence: string;
  status: string;
}

const retentionStates: RetentionState[] = [
  {
    stateNum: "STATE 01",
    title: "Active State",
    description: "Data is actively processed. Covered by normal tenant retention limits.",
    evidence: "SLA Logged",
    status: "Verified",
  },
  {
    stateNum: "STATE 02",
    title: "Retention Window",
    description: "The operational limit has elapsed. Data is queued for programmatic deletion.",
    evidence: "SLA Logged",
    status: "Verified",
  },
  {
    stateNum: "STATE 03",
    title: "Deletion Queued",
    description: "The record is hidden from the query path, awaiting the physical table sweep.",
    evidence: "SLA Logged",
    status: "Verified",
  },
  {
    stateNum: "STATE 04",
    title: "Deleted",
    description: "Cryptographically destroyed. Ingested keys are zeroed, making the data unrecoverable.",
    evidence: "SLA Logged",
    status: "Verified",
  },
  {
    stateNum: "STATE 05",
    title: "Backup Residual",
    description: "Minimal offline archive. Completely overwritten within 14 calendar days.",
    evidence: "SLA Logged",
    status: "Verified",
  },
  {
    stateNum: "STATE 06",
    title: "Legal / Compliance Hold",
    description: "Pruning is suspended for specified tables under explicit, verified legal holds.",
    evidence: "SLA Logged",
    status: "Verified",
  },
];

export default function PrivacyRetentionSection() {
  return (
    <section className="w-full bg-[#F0EDE6] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full flex flex-col gap-10 sm:gap-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              LIFECYCLE ENFORCEMENT
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.02em] leading-tight">
            Retention, Deletion & Legal Hold States
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            Data only lives as long as specified. Clear logical states ensure that records are systematically purged once their purpose is completed.
          </p>
        </motion.div>

        {/* States Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {retentionStates.map((state, idx) => (
            <motion.div
              key={state.stateNum}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white border border-[#123B4C]/10 rounded-xl p-5 flex flex-col justify-between gap-5 hover:border-[#123B4C]/25 transition-all shadow-[0_2px_4px_rgba(0,0,0,0.02)]"
            >
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs font-bold text-[#C44242] uppercase tracking-wider">
                  {state.stateNum}
                </span>
                <h3 className="text-base font-bold text-[#0A2029] tracking-tight">
                  {state.title}
                </h3>
                <p className="text-[#5B6670] text-xs sm:text-[13px] leading-relaxed font-medium">
                  {state.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#123B4C]/5">
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#0A2440]/5 text-[#0A2029] text-[11px] font-mono font-medium">
                  <svg
                    className="w-3 h-3 text-[#1F7A6C]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>{state.evidence}</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#E4F0EC] text-[#1F7A6C] text-[11px] font-bold">
                  {state.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
