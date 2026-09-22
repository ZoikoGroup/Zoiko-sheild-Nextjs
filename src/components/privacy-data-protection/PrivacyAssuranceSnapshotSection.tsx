"use client";

import React from "react";
import { motion } from "framer-motion";

interface AssuranceCard {
  title: string;
  description: string;
  owner: string;
  scope: string;
  status: string;
}

const assuranceCards: AssuranceCard[] = [
  {
    title: "Data Inventory",
    description: "Continuous mapping of active schema classes across standard operational domains.",
    owner: "OWNER: Privacy Eng",
    scope: "SCOPE: All Tenants",
    status: "Verified",
  },
  {
    title: "Access Governance",
    description: "Deterministic verification of RBAC boundaries and active MFA posture matching.",
    owner: "OWNER: IAM Admin",
    scope: "SCOPE: Root & API",
    status: "Active Check",
  },
  {
    title: "Retention Posture",
    description: "Automated ledger pruning matching customer SLA commitments. No residual drift.",
    owner: "OWNER: Core Systems",
    scope: "SCOPE: DB Records",
    status: "Synced",
  },
  {
    title: "Vendor Compliance",
    description: "Systematic oversight of subprocessors. Periodic verification of regional constraints.",
    owner: "OWNER: Legal Operations",
    scope: "SCOPE: Subprocessor list",
    status: "Verified",
  },
  {
    title: "Residency & Transfers",
    description: "Validating localized boundaries. Zero cross-border data transfer pipelines found.",
    owner: "OWNER: Security Architect",
    scope: "SCOPE: Live Infrastructure",
    status: "Localized Only",
  },
  {
    title: "Privacy-by-Design",
    description: "Automatic review triggers integrated directly into product release pipelines.",
    owner: "OWNER: ProdSec",
    scope: "SCOPE: Code Deployments",
    status: "Triggers Ready",
  },
  {
    title: "AI Data Governance",
    description: "Zero training usage bounds validated. Complete isolation of user telemetry inputs.",
    owner: "OWNER: AI Safety",
    scope: "SCOPE: LLM Gateways",
    status: "Exclusion Verified",
  },
  {
    title: "Rights Support",
    description: "Continuous tooling to execute exports, access requests, and deletions reliably.",
    owner: "OWNER: Compliance Ops",
    scope: "SCOPE: Portal Actions",
    status: "System Ready",
  },
];

export default function PrivacyAssuranceSnapshotSection() {
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
              PRIVACY POSTURE
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.02em] leading-tight">
            Privacy Assurance Snapshot
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            Proactively verified parameters across our primary architecture scopes. These metrics are dynamically mapped to cryptographic host indicators daily.
          </p>
        </motion.div>

        {/* Assurance Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {assuranceCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white border border-[#123B4C]/10 rounded-xl p-5 flex flex-col justify-between gap-5 hover:border-[#123B4C]/25 transition-all shadow-[0_2px_4px_rgba(0,0,0,0.02)]"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-[#0A2029] tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[#5B6670] text-xs sm:text-[13px] leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-2 border-t border-[#123B4C]/5">
                <div className="flex flex-col gap-1 font-mono text-[11px] font-semibold text-[#5B6670]">
                  <span>{card.owner}</span>
                  <span>{card.scope}</span>
                </div>
                <div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#E4F0EC] text-[#1F7A6C] text-[11px] font-bold">
                    {card.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
