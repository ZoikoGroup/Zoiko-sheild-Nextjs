"use client";

import React from "react";
import { DarkFeatureSection, IMG, Reveal } from "./shared";

const items = [
  {
    title: "Transit & Rest States",
    desc: "All tenant data is protected during transit and at rest using standard industry algorithms. Custom-designed, non-standard encryption is prohibited.",
  },
  {
    title: "Logical Partitioning",
    desc: "Tenant data spaces are partitioned cryptographically and logically, preventing side-channel data access across customer segments.",
  },
  {
    title: "Validated Posture Only",
    desc: "Control states are validated via live registry mappings. We do not invent custom backup cadences or algorithm strengths in this documentation.",
  },
];

export default function DataProtectionSection() {
  return (
    <DarkFeatureSection
      image={`${IMG}/data-protection-bg.webp`}
      eyebrow="Data Protection"
      title="Encrypted, partitioned, and verified storage"
      items={items}
    >
      <Reveal className="w-full bg-white/10 backdrop-blur-sm rounded-[8px] px-4 py-3">
        <p className="font-jetbrains text-[11px] leading-[18px] text-[#dce5ee] m-0">
          No invented cryptographic parameters are used in these security
          specifications. Real-world parameters reside strictly within
          controlled enterprise contracts.
        </p>
      </Reveal>
    </DarkFeatureSection>
  );
}
