"use client";

import React from "react";
import { Pill, Reveal, Section, SectionHeader, cardClass, type Tone } from "./shared";

const domains: {
  title: string;
  metric: string;
  source: string;
  freshness: string;
  status: string;
  tone: Tone;
}[] = [
  {
    title: "Endpoint Security",
    metric: "12,400 connected hosts",
    source: "CrowdStrike Falcon / Defender",
    freshness: "Real-time stream",
    status: "Connected",
    tone: "green",
  },
  {
    title: "Identity Provider",
    metric: "4,250 directories",
    source: "Okta / Microsoft Entra ID",
    freshness: "Synced 1m ago",
    status: "Partial / Missing Group Scope",
    tone: "amber",
  },
  {
    title: "Device Management",
    metric: "8,900 profiles",
    source: "Jamf Pro / Intune",
    freshness: "Stale / Last sync 2h",
    status: "Stale / Auth expired",
    tone: "red",
  },
  {
    title: "Privileged Access",
    metric: "120 active roles",
    source: "CyberArk / Entra PIM",
    freshness: "Telemetry Active",
    status: "Connected (Read-only)",
    tone: "blue",
  },
  {
    title: "MFA & Authentication",
    metric: "Continuous session checks",
    source: "Duo Security / Okta Verify",
    freshness: "Real-time webhooks",
    status: "Write-Enabled",
    tone: "green",
  },
];

export default function DomainStatusSection() {
  return (
    <Section alt>
      <SectionHeader
        eyebrow="Integration Ecosystem"
        title="Current status across key integration domains"
        description="We connect directly into source registries to ensure full chain-of-custody, validating both read metrics and write remediation capabilities."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 w-full">
        {domains.map((d, i) => (
          <Reveal key={d.title} delay={i * 0.06} className={`${cardClass} p-5 flex flex-col gap-4 items-start`}>
            <h3 className="font-hanken font-extrabold text-[18px] text-[#0a2029] m-0">{d.title}</h3>
            <p className="font-manrope text-[14px] text-[#5b6670] m-0">{d.metric}</p>
            <div className="flex flex-col gap-1">
              <p className="font-jetbrains text-[11px] leading-[16px] text-[#8a9bb0] m-0">SOURCE: {d.source}</p>
              <p className="font-jetbrains text-[11px] leading-[16px] text-[#8a9bb0] m-0">FRESHNESS: {d.freshness}</p>
            </div>
            <div className="mt-auto">
              <Pill tone={d.tone}>{d.status}</Pill>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
