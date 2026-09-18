"use client";

import React from "react";
import { motion } from "framer-motion";

const jsonLines = [
  `{`,
  `  "provider": "AWS",`,
  `  "source_service": "Security Hub",`,
  `  "scope_type": "Account",`,
  `  "scope_id": "123456789012",`,
  `  "region": "us-east-1",`,
  `  "provider_object_id": "arn:aws:sec...",`,
  `  "collection_time": "2026-08-04T08:42:11Z",`,
  `  "hashing_method": "SHA-256",`,
  `  "merkle_root_hash": "8f434346648f...",`,
  `  "control_mappings": ["AC-2", "SOC-2-CC7.2"],`,
  `  "evidence_freshness": "Healthy"`,
  `}`,
];

export default function EvidenceSection() {
  return (
    <section className="bg-[#f0ede6] w-full">
      <div className="flex flex-col gap-10 mx-auto max-w-[1440px] px-[22px] lg:px-[108px] py-[22px] lg:py-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-4 items-start w-full"
        >
          <div className="flex gap-2 items-center">
            <div className="bg-[#c44242] size-[8px] shrink-0" />
            <p className="font-jetbrains font-bold text-[13px] text-[#c44242] tracking-[1.68px] uppercase m-0">
              EVIDENCE LEDGER
            </p>
          </div>
          <h2 className="font-hanken font-extrabold leading-[1.08] text-[28px] sm:text-[34px] lg:text-[38px] text-[#0a2029] tracking-[-0.76px] m-0">
            Cryptographically Traceable Evidence Model
          </h2>
          <p className="font-manrope font-medium leading-[21px] lg:leading-[25px] text-[14px] lg:text-[16.5px] text-[#5b6670] m-0 max-w-[720px]">
            The exact data model auditors use to verify state without
            logging into native provider consoles.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 items-start w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#0a2029] flex flex-1 flex-col gap-4 items-start p-6 rounded-[16px] min-w-0 w-full"
          >
            <p className="font-jetbrains font-bold text-[#e0967d] text-[12px] whitespace-nowrap m-0">
              cloud_evidence_object.json
            </p>
            <div className="h-px w-full bg-[rgba(255,255,255,0.1)]" />
            <div className="font-jetbrains font-normal text-[#a9c0cc] text-[12px] w-full overflow-x-auto">
              {jsonLines.map((line, i) => (
                <p key={i} className="leading-[20px] m-0 whitespace-pre">
                  {line}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-1 flex-col gap-6 items-start min-w-0 w-full"
          >
            <h3 className="font-hanken font-extrabold text-[#0a2029] text-[24px] m-0">
              Automated validation architecture.
            </h3>
            <p className="font-manrope font-normal leading-[22px] text-[#5b6670] text-[15px] m-0">
              Every collected record is normalized, enveloped with metadata
              containing region-specific context, and appended to the local
              state register. The resulting schema maps natively to ISO
              27001, SOC 2, and HIPAA control matrices automatically.
            </p>
            <div className="bg-[#e4f0ec] flex items-start px-5 py-3 rounded-[8px]">
              <p className="font-jetbrains font-bold text-[#1f7a6c] text-[12px] m-0">
                ✓ Exportable ledger signed and verified instantly for
                auditor review.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
