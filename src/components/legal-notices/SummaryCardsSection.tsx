"use client";

import React from "react";
import { motion } from "framer-motion";

const tocItems = [
  "01. Legal Entity & Publisher",
  "02. Copyright & Rights",
  "03. Trademarks & Brand",
  "04. Third-Party Rights",
  "05. Software & Docs",
  "06. External Linking",
  "07. Jurisdiction Scope",
  "08. Service & Contact",
  "09. Related Governance",
  "10. Version History",
  "11. Interpretive FAQ",
];

export default function SummaryCardsSection() {
  return (
    <section className="bg-[#f7f5f0] w-full">
      <div className="mx-auto max-w-[1440px] px-4 pb-6 lg:px-[80px] lg:pb-[40px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col lg:flex-row gap-3 lg:gap-4 items-stretch w-full"
        >
          {/* TOC card */}
          <div className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-4 rounded-[10px] w-full lg:flex-1">
            <p className="font-hanken font-extrabold text-[#0a2029] text-[13px] lg:text-[14px] tracking-[0.5px] uppercase m-0">
              Navigation Outline
            </p>
            <div className="flex flex-col gap-2 items-start w-full">
              {tocItems.map((item, i) => (
                <p
                  key={item}
                  className={`font-sans text-[13px] m-0 w-full ${
                    i === 0 ? "font-bold text-[#c44242]" : "font-normal text-[#5b6670]"
                  }`}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Sovereign governance card */}
          <div className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-4 rounded-[10px] w-full lg:flex-1">
            <p className="font-hanken font-extrabold text-[#0a2029] text-[13px] lg:text-[14px] tracking-[0.5px] uppercase m-0">
              Sovereign Governance
            </p>
            <div className="flex flex-col gap-2 items-start w-full">
              <div className="flex flex-col gap-1 items-start w-full">
                <p className="font-jetbrains font-normal text-[#7891b1] text-[10px] lg:text-[11px] m-0">
                  PUBLICATION COMPLIANCE
                </p>
                <div className="bg-[#e4f0ec] flex items-start px-[10px] py-1 rounded-full">
                  <p className="font-jetbrains font-bold text-[#1f7a6c] text-[11px] tracking-[0.5px] m-0">
                    <span className="lg:hidden">VERIFIED ORIGINAL</span>
                    <span className="hidden lg:inline">Verifiable Evidence</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-start w-full">
                <p className="font-jetbrains font-normal text-[#7891b1] text-[10px] lg:text-[11px] m-0">
                  INTEGRITY PROOF
                </p>
                <p className="font-sans font-normal text-[#5b6670] text-[12px] leading-[18px] m-0">
                  Cryptographic tamper verification, isolated regions
                  cache, multi-approver sign-off, zero telemetry tracking.
                </p>
              </div>
            </div>
          </div>

          {/* Applicability card */}
          <div className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-4 rounded-[10px] w-full lg:flex-1">
            <p className="font-hanken font-extrabold text-[#0a2029] text-[13px] lg:text-[14px] tracking-[0.5px] uppercase m-0">
              Applicability / Source Authority
            </p>
            <div className="flex flex-col gap-2 items-start w-full text-[12px] lg:text-[13px] leading-[18px] lg:leading-[1.5]">
              <p className="font-sans font-normal text-[#5b6670] m-0 w-full">
                These legal notices apply to the Zoiko Shield security
                platform and are governed by the statutory framework of the
                primary operating jurisdiction.
              </p>
              <p className="font-sans font-normal text-[#5b6670] m-0 w-full">
                Individual regional constraints apply only when mandated by
                local administrative guidelines.
              </p>
            </div>
          </div>

          {/* Version info card */}
          <div className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-4 rounded-[10px] w-full lg:flex-1">
            <p className="font-hanken font-extrabold text-[#0a2029] text-[13px] lg:text-[14px] tracking-[0.5px] uppercase m-0">
              Version Information
            </p>
            <div className="flex flex-col gap-2 items-start w-full h-full">
              <p className="font-sans font-normal text-[#5b6670] text-[12px] lg:text-[13px] leading-[18px] lg:leading-[1.5] m-0">
                The changelog below represents the <br className="hidden lg:block" />
                historical sequence of verified updates <br className="hidden lg:block" />
                made to our legal notice registry.
              </p>
              <div className="bg-[#f7f5f0] flex flex-col gap-[6px] lg:gap-2 items-start p-3 rounded-[8px] w-full">
                <div className="flex flex-col items-start w-full">
                  <p className="font-jetbrains font-bold text-[#0a2029] text-[11px] lg:text-[12px] m-0">
                    VER
                  </p>
                  <p className="font-jetbrains font-normal text-[#5b6670] text-[12px] m-0">
                    v1.0
                  </p>
                  <p className="font-jetbrains font-normal text-[#5b6670] text-[11px] lg:text-[12px] m-0">
                    01/2026
                  </p>
                </div>
                <p className="font-sans font-normal text-[#5b6670] text-[12px] lg:text-[13px] leading-[18px] m-0 w-full">
                  Initial release and baseline publication under Zoiko
                  Shield framework.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
