"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function SourceToEvidenceModel() {
  return (
    <section className="w-full bg-[#F5F2EB] py-16 sm:py-20 lg:py-24 px-6 md:px-12 lg:px-16 font-sans text-[#111827] border-t border-[#E7E5DF]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          {/* Tag / Kicker */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#BE3A34]" />
            <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#BE3A34] uppercase">
              THE ARCHITECTURAL TRUTH
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0B1B26] tracking-tight mb-3">
            The Canonical Source-to-Evidence Model
          </h2>

          {/* Subtitle */}
          <p className="text-[14.5px] sm:text-base text-[#52606D] max-w-4xl leading-relaxed">
            Zoiko Shield operates strictly within verified credential and network guidelines, executing automated correlation across discrete security silos without altering original telemetry profiles.
          </p>
        </div>

        {/* Diagram Box */}
        <motion.div
          className="bg-[#EFECE5]/80 border border-[#E3DFD5] rounded-2xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
        >
          {/* 3 Step Sequence */}
          <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
            {/* Step 1 */}
            <div className="bg-white border border-[#E3DFD5] rounded-xl p-5 sm:p-6 w-full md:flex-1 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <span className="font-mono text-[10.5px] sm:text-[11px] font-bold tracking-wider text-[#BE3A34] uppercase block mb-1">
                1. SOURCE CREDENTIALS
              </span>
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0B1B26] mb-1">
                Okta / Microsoft Entra ID
              </h3>
              <p className="text-[12px] sm:text-[12.5px] text-[#5A6874] leading-relaxed">
                Unmanaged user sessions/Commission status.
              </p>
            </div>

            {/* Red Arrow 1 */}
            <div className="flex items-center justify-center shrink-0">
              <ArrowRight className="w-5 h-5 text-[#BE3A34] hidden md:block" />
              <ArrowDown className="w-5 h-5 text-[#BE3A34] md:hidden my-0.5" />
            </div>

            {/* Step 2 (Navy Dark Accent) */}
            <div className="bg-[#0B1D2A] border border-[#142B3B] rounded-xl p-5 sm:p-6 w-full md:flex-1 shadow-lg text-white">
              <span className="font-mono text-[10.5px] sm:text-[11px] font-bold tracking-wider text-[#F59E0B] uppercase block mb-1">
                2. AUTHENTICATION SHIELD
              </span>
              <h3 className="text-[16px] sm:text-[17px] font-bold text-white mb-1">
                Zoiko Correlation Gateway
              </h3>
              <p className="text-[12px] sm:text-[12.5px] text-gray-300/90 leading-relaxed">
                Validating strict runtime mappings cryptographically.
              </p>
            </div>

            {/* Red Arrow 2 */}
            <div className="flex items-center justify-center shrink-0">
              <ArrowRight className="w-5 h-5 text-[#BE3A34] hidden md:block" />
              <ArrowDown className="w-5 h-5 text-[#BE3A34] md:hidden my-0.5" />
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-[#E3DFD5] rounded-xl p-5 sm:p-6 w-full md:flex-1 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <span className="font-mono text-[10.5px] sm:text-[11px] font-bold tracking-wider text-[#0D9488] uppercase block mb-1">
                3. EVIDENCE LEDGER
              </span>
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0B1B26] mb-1">
                Immutability Guarantee
              </h3>
              <p className="text-[12px] sm:text-[12.5px] text-[#5A6874] leading-relaxed">
                Audit-ready artifact source certified by two signatures.
              </p>
            </div>
          </div>

          {/* Footnote text below the 3 steps */}
          <p className="font-mono text-[11.5px] sm:text-[12px] text-[#6B7280] leading-[1.65] mt-6 pt-5 border-t border-[#E3DFD5]/70">
            This data flow pathway preserves host state integrity throughout the authentication lifetime. Telemetry mappings are direct, unmanipulated, and governed under strict multi-party approver keys before any write containment or session-reset command is issued to source providers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
