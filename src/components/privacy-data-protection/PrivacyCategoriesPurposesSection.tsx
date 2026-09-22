"use client";

import React from "react";
import { motion } from "framer-motion";

interface MatrixRow {
  category: string;
  purpose: string;
  separatedState: string;
  isSpecialState?: boolean;
  compatibleUses: string;
  aggregateUse: string;
}

const matrixData: MatrixRow[] = [
  {
    category: "Account / Identity",
    purpose: "User Authorization",
    separatedState: "Enforced",
    compatibleUses: "Threat Attribution Only",
    aggregateUse: "Anonymized tenant metrics only.",
  },
  {
    category: "Security Telemetry",
    purpose: "Process Correlation",
    separatedState: "Enforced",
    compatibleUses: "Forensic Evidence",
    aggregateUse: "Unused. Dropped post-purge.",
  },
  {
    category: "Audit / Activity Logs",
    purpose: "Compliance Assurance",
    separatedState: "Immutable",
    compatibleUses: "Audit Trail Reporting",
    aggregateUse: "Tamper-proof ledger hashes.",
  },
  {
    category: "Customer Config",
    purpose: "Tenant Instantiation",
    separatedState: "Enforced",
    compatibleUses: "Billing Calculation",
    aggregateUse: "Consolidated system capacity data.",
  },
  {
    category: "Evidence / Compliance",
    purpose: "Audit Ingestion",
    separatedState: "Enforced",
    compatibleUses: "Regulatory Review",
    aggregateUse: "NIST compliance statistics.",
  },
  {
    category: "Support / Contact",
    purpose: "Incident Assistance",
    separatedState: "Manual",
    compatibleUses: "Service Quality",
    aggregateUse: "None. Erased after case resolution.",
  },
  {
    category: "Usage / Performance",
    purpose: "Platform Tuning",
    separatedState: "Separated",
    compatibleUses: "Database Performance",
    aggregateUse: "Aggregated query-latency arrays.",
  },
  {
    category: "AI Inputs / Outputs",
    purpose: "Investigation Help",
    separatedState: "User Excluded",
    isSpecialState: true,
    compatibleUses: "No Inferred Attribution",
    aggregateUse: "Completely excluded.",
  },
];

export default function PrivacyCategoriesPurposesSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
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
              CLASSIFICATION
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.02em] leading-tight">
            Data Categories & Purposes Matrix
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            Explicitly mapped usage constraints. We enforce mathematical separation to guarantee that data ingested for security purposes cannot be cross-utilized.
          </p>
        </motion.div>

        {/* Matrix Table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-x-auto rounded-xl border border-[#123B4C]/10 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.02)]"
        >
          <table className="w-full text-left border-collapse min-w-[840px]">
            <thead>
              <tr className="bg-[#F0EDE6] border-b border-[#123B4C]/10">
                <th className="py-3.5 px-5 font-mono text-[11px] font-bold text-[#0A2029] uppercase tracking-wider">
                  DATA CATEGORY
                </th>
                <th className="py-3.5 px-5 font-mono text-[11px] font-bold text-[#0A2029] uppercase tracking-wider">
                  PRIMARY PURPOSE
                </th>
                <th className="py-3.5 px-5 font-mono text-[11px] font-bold text-[#0A2029] uppercase tracking-wider">
                  SEPARATED STATE
                </th>
                <th className="py-3.5 px-5 font-mono text-[11px] font-bold text-[#0A2029] uppercase tracking-wider">
                  COMPATIBLE USES
                </th>
                <th className="py-3.5 px-5 font-mono text-[11px] font-bold text-[#0A2029] uppercase tracking-wider">
                  APPROVED AGGREGATE USE
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#123B4C]/5 text-xs sm:text-[13px]">
              {matrixData.map((row) => (
                <tr
                  key={row.category}
                  className="hover:bg-[#F7F5F0]/60 transition-colors"
                >
                  <td className="py-4 px-5 font-bold text-[#0A2029]">
                    {row.category}
                  </td>
                  <td className="py-4 px-5 text-[#5B6670] font-medium">
                    {row.purpose}
                  </td>
                  <td className="py-4 px-5">
                    {row.isSpecialState ? (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#F5EEFB] text-[#531DB9] text-[11px] font-bold">
                        {row.separatedState}
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#E4F0EC] text-[#1F7A6C] text-[11px] font-bold">
                        {row.separatedState}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-5 text-[#0A2029] font-medium">
                    {row.compatibleUses}
                  </td>
                  <td className="py-4 px-5 text-[#5B6670] font-medium">
                    {row.aggregateUse}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
