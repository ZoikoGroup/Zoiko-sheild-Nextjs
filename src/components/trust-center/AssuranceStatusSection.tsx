"use client";

import React from "react";
import { Pill, Reveal, Section, SectionHeader, cardClass, type Tone } from "./shared";

const postures: { title: string; scope: string; source: string; status: string; tone: Tone; freshness: string }[] = [
  { title: "Security Practices", scope: "Corporate & Prod Cloud", source: "Internal Posture Agent", status: "Operational", tone: "green", freshness: "Real-time" },
  { title: "Independent Assurance", scope: "System & Org Controls", source: "Third-party Auditor", status: "Under Review", tone: "amber", freshness: "Periodic" },
  { title: "Privacy & Data Protection", scope: "User & Session Registries", source: "Chain of Custody Ledger", status: "Verified", tone: "green", freshness: "Updated 1h ago" },
  { title: "Responsible AI", scope: "Model Exclusions & Audits", source: "Ingestion Policy Controller", status: "Enforced", tone: "green", freshness: "Continuous" },
  { title: "Vulnerability Management", scope: "Internal / Public Scope", source: "Security.txt & Bug Bounty", status: "Active Intake", tone: "green", freshness: "Real-time stream" },
  { title: "Operational Resilience", scope: "DR & Backups Authority", source: "Multi-Region Replication", status: "Backup Validated", tone: "green", freshness: "Synced 24h ago" },
];

export default function AssuranceStatusSection() {
  return (
    <Section tone="alt" id="assurance-status">
      <SectionHeader eyebrow="Assurance Status" title="Real-time compliance postures" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {postures.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05} className={`${cardClass} p-5 flex flex-col gap-3`}>
            <h3 className="font-sans font-extrabold text-[18px] text-[#0a2029] m-0">{p.title}</h3>
            <div className="flex flex-col gap-1">
              <p className="font-manrope text-[13px] text-[#5b6670] m-0">Scope: {p.scope}</p>
              <p className="font-manrope text-[13px] text-[#5b6670] m-0">Source: {p.source}</p>
            </div>
            <div className="flex items-center justify-between gap-3 mt-auto pt-1">
              <Pill tone={p.tone}>{p.status}</Pill>
              <span className="font-sans text-[12px] text-[#5b6670] text-right">{p.freshness}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
