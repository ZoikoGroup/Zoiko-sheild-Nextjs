"use client";

import React from "react";
import { motion } from "framer-motion";

const rows = [
  {
    purpose: "Continuous Device Assurance",
    categories: "Host telemetry, Sensor ID",
    basis: "Contract Perf.",
  },
  {
    purpose: "Remediation Governance",
    categories: "Admin credentials, logs",
    basis: "Legitimate Interest",
  },
  {
    purpose: "Commercial Invoicing",
    categories: "Billing address, Stripe ID",
    basis: "Legal Obligation",
  },
];

export default function LegalBasisSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-5 items-start w-full">
      <div className="flex flex-col gap-1 lg:gap-2 items-start w-full">
        <p className="font-hanken font-extrabold text-[#0a2029] text-[20px] leading-[28px] lg:text-[22px] lg:leading-normal m-0">
          Legal Basis &amp; Purpose Registry
        </p>
        <p className="font-manrope font-normal text-[#5b6670] text-[13.5px] lg:text-[14.5px] m-0">
          An authoritative look at our specific processing purposes,
          associated data categories, and recognized regulatory
          groundings:
        </p>
      </div>

      {/* Desktop table */}
      <div className="hidden lg:flex border border-[rgba(18,59,76,0.1)] flex-col items-start overflow-hidden rounded-[12px] w-full">
        <div className="bg-[#f0ede6] flex items-start p-3 w-full font-jetbrains font-bold text-[#0a2029] text-[12px]">
          <p className="w-[200px] m-0">PROCESSING PURPOSE</p>
          <p className="w-[180px] m-0">DATA CATEGORIES</p>
          <p className="w-[140px] m-0">GDPR BASIS</p>
          <p className="flex-1 m-0">RECIPIENTS &amp; RETENTION</p>
        </div>
        {rows.map((r) => (
          <div key={r.purpose} className="border border-[rgba(18,59,76,0.1)] flex items-start p-3 w-full text-[13px]">
            <p className="font-manrope font-bold text-[#0a2029] w-[200px] m-0">{r.purpose}</p>
            <p className="font-manrope font-normal text-[#5b6670] w-[180px] m-0">{r.categories}</p>
            <p className="font-manrope font-semibold text-[#4e668a] w-[140px] m-0">{r.basis}</p>
            <p className="flex-1 font-manrope font-normal text-[#5b6670] m-0">
              [RECIPIENT_REGISTRY] / [RETENTION_REGISTRY]
            </p>
          </div>
        ))}
      </div>

      {/* Mobile cards */}
      <div className="lg:hidden flex flex-col gap-3 w-full">
        {rows.map((r, i) => (
          <motion.div
            key={r.purpose}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
            className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-2 items-start p-4 rounded-[10px] w-full"
          >
            <p className="font-jetbrains font-bold text-[#5b6670] text-[11px] m-0">{r.purpose}</p>
            <p className="font-manrope font-bold text-[#4e668a] text-[15px] m-0">{r.basis}</p>
            <p className="font-manrope font-normal text-[#5b6670] text-[13px] m-0">
              Data: {r.categories}
            </p>
            <div className="bg-[#f0ede6] flex flex-col gap-1 items-start p-2 rounded-[6px] w-full">
              <p className="font-jetbrains font-bold text-[#5b6670] text-[10px] m-0">
                RECIPIENTS &amp; RETENTION:
              </p>
              <p className="font-manrope font-normal text-[#5b6670] text-[12px] m-0">
                [RECIPIENT_REGISTRY] / [RETENTION_REGISTRY]
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="font-manrope font-normal text-[#5b6670] text-[12px] m-0">
        * All unresolved values represent a strictly publication-blocked
        state [REGISTRY] to prevent the use of generic placeholder
        content.
      </p>
    </div>
  );
}
