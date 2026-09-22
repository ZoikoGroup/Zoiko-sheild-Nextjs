"use client";

import React from "react";
import { motion } from "framer-motion";

interface EvidenceRow {
  claim: string;
  source: string;
  status: string;
  isWarning?: boolean;
  lastVerified: string;
  limitation: string;
}

const evidenceData: EvidenceRow[] = [
  {
    claim: "Tenant Separation",
    source: "Logical DB Filter",
    status: "Current",
    lastVerified: "Every 24 Hours",
    limitation: "Requires correct schema tags.",
  },
  {
    claim: "Zero AI Model Training",
    source: "Upstream Contract",
    status: "Current",
    lastVerified: "Jan 12, 2026",
    limitation: "Valid only for built-in models.",
  },
  {
    claim: "MFA Token Matching",
    source: "Duo Auth Webhooks",
    status: "Current",
    lastVerified: "Real-time Stream",
    limitation: "Dependent on Duo API uptime.",
  },
  {
    claim: "Automatic Log Purging",
    source: "Cron Pruning Sweep",
    status: "Review Due",
    isWarning: true,
    lastVerified: "48 Hours Ago",
    limitation: "Manual holds bypass automation.",
  },
  {
    claim: "AWS Volume Encryption",
    source: "Paris Datacenter",
    status: "Current",
    lastVerified: "Feb 08, 2026",
    limitation: "Bound to physical AWS keys.",
  },
];

export default function PrivacyEvidenceSection() {
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
              VERIFIED EVIDENCE
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.02em] leading-tight">
            Dynamic Evidence Ledger
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            We do not ask for blind trust. Verify actual architectural claims and telemetry boundaries mapped in real-time.
          </p>
        </motion.div>

        {/* Evidence Table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-x-auto rounded-xl border border-[#123B4C]/10 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.02)]"
        >
          <table className="w-full text-left border-collapse min-w-[780px]">
            <thead>
              <tr className="bg-[#F7F5F0] border-b border-[#123B4C]/10">
                <th className="py-3.5 px-5 font-mono text-[11px] font-bold text-[#0A2029] uppercase tracking-wider">
                  CLAIM / CONTROL
                </th>
                <th className="py-3.5 px-5 font-mono text-[11px] font-bold text-[#0A2029] uppercase tracking-wider">
                  SOURCE PROVIDER
                </th>
                <th className="py-3.5 px-5 font-mono text-[11px] font-bold text-[#0A2029] uppercase tracking-wider">
                  ACTIVE STATUS
                </th>
                <th className="py-3.5 px-5 font-mono text-[11px] font-bold text-[#0A2029] uppercase tracking-wider">
                  LAST VERIFIED
                </th>
                <th className="py-3.5 px-5 font-mono text-[11px] font-bold text-[#0A2029] uppercase tracking-wider">
                  LIMITATION / WARNING
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#123B4C]/5 text-xs sm:text-[13px]">
              {evidenceData.map((row) => (
                <tr
                  key={row.claim}
                  className="hover:bg-[#F7F5F0]/60 transition-colors"
                >
                  <td className="py-4 px-5 font-bold text-[#0A2029]">
                    {row.claim}
                  </td>
                  <td className="py-4 px-5 text-[#5B6670] font-medium">
                    {row.source}
                  </td>
                  <td className="py-4 px-5">
                    {row.isWarning ? (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#F5EEFB] text-[#531DB9] text-[11px] font-bold">
                        {row.status}
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#E4F0EC] text-[#1F7A6C] text-[11px] font-bold">
                        {row.status}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-5 font-mono text-xs text-[#0A2029] font-medium">
                    {row.lastVerified}
                  </td>
                  <td className="py-4 px-5 text-[#5B6670] font-medium">
                    {row.limitation}
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
