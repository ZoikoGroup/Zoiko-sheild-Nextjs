"use client";

import React from "react";
import { motion } from "framer-motion";

interface LifecycleRow {
  step: string;
  title: string;
  description: string;
  evidence: string;
  status: string;
}

const lifecycleRows: LifecycleRow[] = [
  {
    step: "01",
    title: "Collect / Receive",
    description: "Telemetry webhooks, Okta event streams, local process signatures.",
    evidence: "Ledger Logged",
    status: "Enforced",
  },
  {
    step: "02",
    title: "Normalize / Enrich",
    description: "Sanitizing PII. Mapping hardware serials deterministically.",
    evidence: "Ledger Logged",
    status: "Enforced",
  },
  {
    step: "03",
    title: "Use",
    description: "Real-time threat matching, correlation, alert processing.",
    evidence: "Ledger Logged",
    status: "Enforced",
  },
  {
    step: "04",
    title: "Store",
    description: "Encrypted, isolated tenant tables in specified hosting regions.",
    evidence: "Ledger Logged",
    status: "Enforced",
  },
  {
    step: "05",
    title: "Access",
    description: "RBAC-bounded read-only queries by authenticated analysts.",
    evidence: "Ledger Logged",
    status: "Enforced",
  },
  {
    step: "06",
    title: "Share / Transfer",
    description: "Zero automatic cross-boundary sharing pipelines configured.",
    evidence: "Ledger Logged",
    status: "Enforced",
  },
  {
    step: "07",
    title: "Retain",
    description: "Bounded strictly by default tenant guidelines. Periodic pruning.",
    evidence: "Ledger Logged",
    status: "Enforced",
  },
  {
    step: "08",
    title: "Delete / Return",
    description: "Continuous cryptographic deletion. Verification hashing.",
    evidence: "Ledger Logged",
    status: "Enforced",
  },
];

export default function PrivacyDataLifecycleSection() {
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
              DATA PIPELINES
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.02em] leading-tight">
            Strict Data Lifecycle Map
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            Every data element flows through a predictable pipeline. Governance controls are bound statically to each phase, monitored continuously.
          </p>
        </motion.div>

        {/* Lifecycle Stack */}
        <div className="flex flex-col gap-3">
          {lifecycleRows.map((row, idx) => (
            <motion.div
              key={row.step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="bg-white border border-[#123B4C]/10 rounded-lg p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-[#123B4C]/25 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            >
              {/* Left group: Step number & Title */}
              <div className="flex items-center gap-4 sm:gap-6 min-w-[240px]">
                <span className="font-mono text-base font-bold text-[#C44242] w-6 shrink-0">
                  {row.step}
                </span>
                <span className="text-sm sm:text-base font-bold text-[#0A2029] tracking-tight">
                  {row.title}
                </span>
              </div>

              {/* Middle: Description */}
              <p className="text-[#5B6670] text-xs sm:text-[13.5px] leading-relaxed font-medium flex-1 md:px-4">
                {row.description}
              </p>

              {/* Right: Evidence & Status rail */}
              <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0A2440]/5 text-[#0A2029] border border-[#0A2440]/10 text-xs font-mono font-medium">
                  <svg
                    className="w-3.5 h-3.5 text-[#1F7A6C]"
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
                  <span>{row.evidence}</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#E4F0EC] text-[#1F7A6C] text-xs font-bold">
                  {row.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
