"use client";

import React from "react";
import { Reveal, Section, SectionHeader } from "./shared";

const practices = [
  {
    title: "Identity & Access Governance",
    desc: "We enforce strict role-based access controls with Microsoft Entra ID integration. Temporary administrative elevations require cryptographic verification.",
  },
  {
    title: "Secure Engineering Lifecycle",
    desc: "Every update is continuously scanned, peer-reviewed, and proven clean of CVE exceptions before hitting our isolated staging pipeline.",
  },
  {
    title: "Detection & Response",
    desc: "Zoiko Shield queries sensor states continuously. Posture anomalies (like offline EDR hosts) are instantly flagged to govern containment actions.",
  },
];

const posture = [
  { label: "IAM MFA Policies", status: "Enforced", tone: "bg-[#e4f0ec] text-[#1f7a6c]" },
  { label: "Production EDR State", status: "100% Sensors", tone: "bg-[#e4f0ec] text-[#1f7a6c]" },
  { label: "Static Application Scanning", status: "No blockers", tone: "bg-[#eceae4] text-[#3a4550]" },
];

export default function InfrastructureSecuritySection() {
  return (
    <Section tone="alt" id="infrastructure-security">
      <SectionHeader eyebrow="Infrastructure Security" title="Defensible security, verified directly" />

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 lg:items-start w-full">
        <Reveal className="flex flex-col gap-6 flex-1 min-w-0">
          {practices.map((p) => (
            <div key={p.title} className="flex flex-col gap-2">
              <h3 className="font-sans font-bold text-[18px] text-[#0a2029] m-0">{p.title}</h3>
              <p className="font-manrope text-[15px] leading-[22px] text-[#5b6670] m-0">{p.desc}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="w-full lg:w-[42%] xl:w-[500px] shrink-0 bg-[#0f2440] rounded-[16px] p-6 flex flex-col gap-3">
          <p className="font-sans font-bold text-[13px] text-white uppercase tracking-[0.5px] m-0 pb-1">
            Security Posture Matrix
          </p>
          {posture.map((row) => (
            <div key={row.label} className="bg-[#1f3a57] rounded-[6px] px-3 py-3 flex items-center justify-between gap-3">
              <span className="font-manrope text-[13px] text-[#dce5ee]">{row.label}</span>
              <span className={`rounded-full px-2.5 py-0.5 font-sans font-bold text-[12px] whitespace-nowrap ${row.tone}`}>
                {row.status}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
