"use client";

import React from "react";
import { Reveal, Section, SectionHeader } from "./shared";

const principles = [
  {
    title: "Strict Storage Isolation",
    desc: "We do not mix multi-tenant storage indexes. Your operational telemetry resides within segregated database containers in your chosen AWS region.",
  },
  {
    title: "Programmatic Exclusions",
    desc: "Customer keys, personal identifiers, and custom database structures are strictly isolated. No ingestion rules process plaintext sensitive data.",
  },
  {
    title: "Configurable Retention",
    desc: "Audit havens, logs, and cryptographic proofs can be configured to purge or archive strictly based on compliance retention windows.",
  },
];

export default function PrivacyPrinciplesSection() {
  return (
    <Section tone="light">
      <SectionHeader eyebrow="Privacy Principles" title="Absolute data control and location transparency" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {principles.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06} className="bg-[#f0ede6] rounded-[12px] p-6 flex flex-col gap-2">
            <h3 className="font-sans font-bold text-[18px] text-[#0a2029] m-0">{p.title}</h3>
            <p className="font-manrope text-[14px] leading-[21px] text-[#5b6670] m-0">{p.desc}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
