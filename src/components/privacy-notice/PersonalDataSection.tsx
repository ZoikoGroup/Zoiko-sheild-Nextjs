"use client";

import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Account Identity & Auth",
    desc: "First/last name, business email, physical address, company affiliation, API tokens, and SAML credentials.",
    source: "SOURCE: DIRECT USER INPUT / SAML PROVISIONING",
  },
  {
    title: "System & Network Telemetry",
    desc: "Host device identifiers, active sensor IP addresses, sensor telemetry alerts, and direct integration handshake metadata.",
    source: "SOURCE: AUTOMATED HOST AGENT CONNECTION",
  },
  {
    title: "Commercial & Billing Records",
    desc: "Corporate credit card partials, billing contacts, payment history, and structural invoice records.",
    source: "SOURCE: STRIPE INTEGRATION / CUSTOMER SUCCESS DESK",
  },
  {
    title: "Indirect-Source Intelligence",
    desc: "External corporate identity directories, public security threat indexes, and verified compliance audit logs.",
    source: "SOURCE: PARTNERS / INTEGRATIONS / THREAT REGISTRIES",
  },
];

export default function PersonalDataSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-start w-full">
      <div className="flex flex-col gap-1 lg:gap-2 items-start w-full">
        <p className="font-hanken font-extrabold text-[#0a2029] text-[20px] leading-[28px] lg:text-[22px] lg:leading-normal m-0">
          Personal Data We Process
        </p>
        <p className="font-manrope font-normal text-[#5b6670] text-[13.5px] lg:text-[14.5px] m-0">
          The categories of personal data collected directly from you,
          automatically through use of the Service, or through indirect
          authoritative sources:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 w-full">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: (i % 2) * 0.06 }}
            className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-[10px] items-start p-4 rounded-[8px]"
          >
            <p className="font-hanken font-extrabold text-[#0a2029] text-[16px] m-0">{c.title}</p>
            <p className="font-manrope font-normal text-[#5b6670] text-[13px] m-0">{c.desc}</p>
            <p className="font-manrope font-normal text-[#c44242] text-[12px] m-0">{c.source}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
