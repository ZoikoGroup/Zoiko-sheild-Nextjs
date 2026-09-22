"use client";

import React from "react";
import { Pill, Reveal, Section, SectionHeader, cardClass } from "./shared";

const domains = [
  { title: "Governance", tier: "Tier 1 — Public", desc: "Oversees policy exception pipelines, executive reporting, and alignment with modern frameworks.", scope: "Org-wide policies", owner: "Risk & Compliance", status: "Active / Verified" },
  { title: "Secure Development", tier: "Tier 2 — Restricted", desc: "Automated dependency tracing, static analysis, secrets protection, and strict release gating.", scope: "All Zoiko repositories", owner: "Product Security", status: "Continuous CI Check" },
  { title: "Identity & Access", tier: "Tier 1 — Public", desc: "Ensures phishing-resistant MFA, just-in-time elevation, and cryptographic boundary enforcement.", scope: "SSO, PAM, Directories", owner: "IAM Architecture", status: "Verified (Read/Write)" },
  { title: "Data Protection", tier: "Tier 1 — Public", desc: "Tenant separation, zero-invented-cryptography guardrails, and cryptographic storage mapping.", scope: "SaaS & Infrastructure", owner: "Data Privacy Team", status: "Enforced via Posture" },
  { title: "Infrastructure", tier: "Tier 3 — NDA", desc: "Isolates tenant footprints, enforces strict cloud boundaries, and audits administrative accesses.", scope: "VPC, Containers, Cloud", owner: "SecOps Infrastructure", status: "Real-time Hardening" },
  { title: "Monitoring", tier: "Tier 2 — Restricted", desc: "Unifies live host processes with auth logs to surface stealthy identity elevation paths.", scope: "SIEM, Audit Trail", owner: "Security Ops Center", status: "Continuous Telemetry" },
  { title: "Vulnerabilities", tier: "Tier 1 — Public", desc: "Registry-driven triage, strict remediation workflows, and coordination with outside researchers.", scope: "Product, Host, Cloud", owner: "Security Research", status: "Active Program" },
  { title: "Resilience", tier: "Tier 2 — Restricted", desc: "Continuity planning, replica monitoring, and direct system status indicators without artificial limits.", scope: "SaaS Systems, Backups", owner: "Site Reliability", status: "Automated Testing" },
];

export default function DomainStatusSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Integration Ecosystem"
        title="Current status across key integration domains"
        description="We connect directly into source registries to ensure full chain-of-custody, validating both read metrics and write remediation capabilities."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {domains.map((d, i) => (
          <Reveal key={d.title} delay={i * 0.04} className={`${cardClass} p-6 flex flex-col gap-4`}>
            {/* Title and tier wrap onto two lines when the card is narrow, instead of overlapping. */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-hanken font-extrabold text-[18px] text-[#0a2029] m-0">{d.title}</h3>
              <Pill tone="blue">{d.tier}</Pill>
            </div>
            <p className="font-manrope text-[14px] leading-[20px] text-[#5b6670] m-0">{d.desc}</p>
            <div className="flex flex-col gap-1 mt-auto">
              <p className="font-jetbrains text-[11px] text-[#5b6670] m-0">SCOPE: {d.scope}</p>
              <p className="font-jetbrains text-[11px] text-[#5b6670] m-0">OWNER: {d.owner}</p>
              <p className="font-jetbrains text-[11px] text-[#5b6670] m-0">STATUS: {d.status}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
