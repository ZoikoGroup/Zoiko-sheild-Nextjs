"use client";

import React from "react";
import { motion } from "framer-motion";

const refs = [
  {
    name: "CrowdStrike / Defender",
    desc: "Referenced as native endpoint connectors. All trademark rights reside with respective corporate owners.",
  },
  {
    name: "Okta / Microsoft Entra ID",
    desc: "Referenced as integrated identity directories. No endorsement or exclusive partnership implied.",
  },
  {
    name: "Jamf Pro / Intune",
    desc: "Device posture and MDM sync references. Respective brand marks are preserved.",
  },
];

export default function ThirdPartySection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-start w-full">
      <div className="flex gap-2 items-center w-full">
        <div className="bg-[#c44242] h-[2px] w-4 lg:w-6 shrink-0" />
        <p className="font-jetbrains font-bold text-[#c44242] text-[12px] tracking-[1.2px] lg:tracking-[1.5px] uppercase m-0">
          04. THIRD-PARTY RIGHTS &amp; REFERENCES
        </p>
      </div>
      <p className="font-sans font-normal leading-[22px] lg:leading-[1.6] text-[14px] lg:text-[15px] text-[#5b6670] m-0 w-full">
        All third-party product names, logos, brands, and trademarks quoted
        or pictured across the platform are the property of their
        respective owners. Their use does not imply any affiliation,
        sponsorship, endorsement, or direct partnership unless explicitly
        declared in writing.
      </p>

      <div className="flex flex-col gap-3 items-start w-full">
        {refs.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
            className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-2 items-start p-4 rounded-[8px] w-full"
          >
            <p className="font-hanken font-extrabold text-[#0a2029] text-[14px] m-0">{r.name}</p>
            <p className="font-sans font-normal leading-[20px] lg:leading-[1.5] text-[13px] text-[#5b6670] m-0">
              {r.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
