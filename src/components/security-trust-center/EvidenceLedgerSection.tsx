"use client";

import React from "react";
import { Pill, Reveal, Section, SectionHeader, cardClass, type Tone } from "./shared";

const artifacts: { tag: string; tone: Tone; title: string; desc: string }[] = [
  {
    tag: "PUBLIC ACCESSIBLE",
    tone: "blue",
    title: "Security Overview",
    desc: "High-level design, platform security principles, and shared responsibility sheets.",
  },
  {
    tag: "CUSTOMER ONLY (NDA)",
    tone: "amber",
    title: "Penetration Test Summary",
    desc: "Red-team test scopes, validated remediation reports, and methodology summaries.",
  },
  {
    tag: "UNAVAILABLE",
    tone: "red",
    title: "Full Telemetry Dumps",
    desc: "Individual raw log events are kept isolated and are not publicly distributed.",
  },
];

export default function EvidenceLedgerSection() {
  return (
    <Section>
      <SectionHeader eyebrow="Evidence Ledger" title="Audit-ready cryptographic storage" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {artifacts.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.06} className={`${cardClass} p-6 flex flex-col gap-4 items-start`}>
            <Pill tone={a.tone}>{a.tag}</Pill>
            <h3 className="font-hanken font-extrabold text-[18px] text-[#0a2029] m-0">{a.title}</h3>
            <p className="font-manrope text-[14px] leading-[21px] text-[#5b6670] m-0">{a.desc}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
