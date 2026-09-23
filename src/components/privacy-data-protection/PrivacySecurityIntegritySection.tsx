"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface SecuritySpec {
  title: string;
  description: string;
}

const specs: SecuritySpec[] = [
  {
    title: "Transport Protection",
    description: "All incoming and outgoing streams are bound strictly to validated TLS connections.",
  },
  {
    title: "Storage Protection",
    description: "Isolated logical tables are encrypted natively at the cloud volume boundary.",
  },
  {
    title: "Key & Secret Governance",
    description: "Cryptographic secrets are rotated automatically every 90 days. Zero human key-access.",
  },
  {
    title: "Integrity & Provenance",
    description: "Every telemetry log is hashed at ingestion. Tampering triggers immediate system alerts.",
  },
];

export default function PrivacySecurityIntegritySection() {
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
              PROTECTION MECHANISMS
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A2029] tracking-[-0.024em] leading-tight">
            Data Security & Integrity Protocols
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-[15px] leading-relaxed font-normal">
            Ensuring mathematical defense. We protect data using strict runtime access verification and continuous telemetry checks.
          </p>
        </motion.div>

        {/* Split Visual: Left vertical list + Right Transparency Notice Box */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-12 w-full">
          {/* Left Column: 4 vertical items without card backgrounds or borders */}
          <div className="flex-1 flex flex-col gap-6 sm:gap-7 w-full">
            {specs.map((spec, idx) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex flex-col gap-1.5"
              >
                <h3 className="text-[16px] font-extrabold text-[#0A2029] tracking-tight">
                  {spec.title}
                </h3>
                <p className="text-[#5B6670] text-[13.5px] leading-relaxed font-normal max-w-xl">
                  {spec.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column: IMPORTANT TRANSPARENCY NOTICE Box */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-full lg:w-[500px] shrink-0 bg-[#F0EDE6] border border-[#123B4C]/10 rounded-[12px] p-6 sm:p-7 flex flex-col justify-between gap-5"
          >
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[12px] font-bold text-[#C44242] uppercase tracking-wider">
                IMPORTANT TRANSPARENCY NOTICE
              </span>
              <p className="text-[#5B6670] text-[13px] leading-[1.45em] font-normal">
                We do not invent proprietary cryptographic algorithms or make unverifiable security claims. Zoiko Shield relies strictly on industry-standard, validated cloud platform key management libraries (KMS) and open-source TLS profiles. Live compliance reports show actual running configurations — we do not use score-theater metrics.
              </p>
            </div>

            <div className="flex items-center gap-5 pt-1 font-bold text-[13px]">
              <Link
                href="#logging-specs"
                className="text-[#C44242] hover:opacity-85 underline underline-offset-2"
              >
                Logging Specs
              </Link>
              <Link
                href="#resilience-logs"
                className="text-[#C44242] hover:opacity-85 underline underline-offset-2"
              >
                Backup & Resilience Logs
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
