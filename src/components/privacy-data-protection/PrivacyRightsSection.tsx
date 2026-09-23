"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProcedureCard {
  title: string;
  description: string;
}

const procedures: ProcedureCard[] = [
  {
    title: "Verification of Identity",
    description: "All data-access and deletion requests require multi-factor identity verification (MFA challenge) before processing starts.",
  },
  {
    title: "Authorized-Agent Policy",
    description: "Agents must provide a cryptographic proxy signature signed by the Org Owner to request workspace exports.",
  },
  {
    title: "SLA Response Timeline",
    description: "Standard requests are processed programmatically within 72 hours. Large table extracts are resolved within 14 days.",
  },
];

export default function PrivacyRightsSection() {
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
              USER EMPOWERMENT
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.02em] leading-tight">
            Privacy Rights & Customer Assistance
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            We make executing privacy requests simple. Distinguish between operational data-deletion requests and legal notice declarations.
          </p>
        </motion.div>

        {/* Split Layout: Left Procedures & Right Disclaimer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 3 Procedure Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {procedures.map((proc, idx) => (
              <motion.div
                key={proc.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-[#123B4C]/10 rounded-xl p-5 flex flex-col gap-2 hover:border-[#123B4C]/25 transition-all shadow-[0_2px_4px_rgba(0,0,0,0.02)]"
              >
                <h3 className="text-sm sm:text-base font-bold text-[#0A2029] tracking-tight">
                  {proc.title}
                </h3>
                <p className="text-[#5B6670] text-xs sm:text-[13.5px] leading-relaxed font-medium">
                  {proc.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Legal & Operational Distinction Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 bg-[#F0EDE6] border border-[#123B4C]/15 rounded-xl p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-[0_2px_4px_rgba(0,0,0,0.02)]"
          >
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs font-bold text-[#C44242] uppercase tracking-wider">
                LEGAL & OPERATIONAL DISTINCTION
              </span>
              <p className="text-[#5B6670] text-xs sm:text-[13.5px] leading-relaxed font-medium">
                Authoritative rights and privacy policies are set out in our formal Privacy Notice. The tools and workflows shown on this page represent live operational implementations designed to execute those commitments programmatically.
              </p>
            </div>

            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E4F0EC] text-[#1F7A6C] text-xs font-bold">
                Compliance Aligned
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
