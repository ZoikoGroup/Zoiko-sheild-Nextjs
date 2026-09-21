"use client";

import React from "react";
import { Badge, Reveal, Section, SectionHeader, cardClass, toneText, type Tone } from "./shared";

type Channel = {
  title: string;
  badge: string;
  tone: Tone;
  desc: string;
  rule: string;
  note: string;
};

const channels: Channel[] = [
  {
    title: "Identity & Access",
    badge: "Entra ID",
    tone: "teal",
    desc: "Pulls risk indicators, Conditional Access configuration, and tenant auth states. Establishes context around sign-in events.",
    rule: "ENTRA-AUTH-LINEAGE",
    note: "Privilege: Read least-privilege",
  },
  {
    title: "Security Operations",
    badge: "Defender XDR",
    tone: "teal",
    desc: "Correlates alert telemetry and incident states with Sentinel log outputs without modifying underlying Microsoft alert rules.",
    rule: "XDR-CORRELATION-MAPPING",
    note: "Scope: Sentinel incident read",
  },
  {
    title: "Endpoint & Device",
    badge: "Intune",
    tone: "amber",
    desc: "Tracks device enrollment, system posture, security patch updates, and overall device compliance states.",
    rule: "DEVICE-COMPLIANCE-LINEAGE",
    note: "Constraint: Intune P1 license required",
  },
  {
    title: "Cloud & Azure",
    badge: "Azure Cloud",
    tone: "teal",
    desc: "Ingests configuration changes and activity logs across management groups, subscriptions, and security frameworks.",
    rule: "AZURE-SCOPE-VALIDATION",
    note: "Scope: Management Group Reader",
  },
  {
    title: "M365 & Compliance",
    badge: "Purview",
    tone: "amber",
    desc: "Maps sensitive data activities and information barrier logs in Microsoft Purview to continuous compliance dashboards.",
    rule: "PURVIEW-AUDIT-LINEAGE",
    note: "Limit: Purview Audit Premium recommended",
  },
  {
    title: "Developer & APIs",
    badge: "Graph API",
    tone: "teal",
    desc: "Queries service health, permission grants, and application lifecycle logs via the Microsoft Graph interface.",
    rule: "GRAPH-INTEGRITY-CHECK",
    note: "Scope: Directory.Read.All",
  },
];

export default function IntegrationChannelsSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Ecosystem Platform"
        eyebrowTone="slate"
        title="Six Domain Integration Channels"
        description="Deploy Zoiko Shield to augment, analyze, and preserve evidence from across your entire Microsoft landscape. We establish a read-only registry layer that is secure and non-invasive."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full items-start">
        {channels.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06} className={`${cardClass} p-6 flex flex-col gap-4 h-full`}>
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-hanken font-extrabold text-[18px] text-[#0a2029] m-0">{c.title}</h3>
              <Badge tone={c.tone} size="sm">{c.badge}</Badge>
            </div>
            <p className="font-manrope text-[14px] leading-[20px] text-[#5b6670] m-0">{c.desc}</p>
            <div className="flex flex-col gap-1.5 mt-auto">
              <p className="font-jetbrains text-[11px] text-[#5b6670] m-0">Rule: {c.rule}</p>
              <p className={`font-jetbrains text-[11px] m-0 ${toneText[c.tone]}`}>{c.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
