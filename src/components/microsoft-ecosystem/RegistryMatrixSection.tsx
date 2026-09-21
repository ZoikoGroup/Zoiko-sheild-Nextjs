"use client";

import React from "react";
import { Badge, Reveal, Section, SectionHeader, cardClass, toneText, type Tone } from "./shared";

type Row = {
  service: string;
  status: string;
  tone: Tone;
  direction: string;
  objects: string;
  auth: string;
  license: string;
  validated: string;
  validatedTone: Tone;
};

const rows: Row[] = [
  {
    service: "Microsoft Entra ID",
    status: "Available",
    tone: "teal",
    direction: "Inbound",
    objects: "User, App, CA Policies",
    auth: "OAuth App / Certificate",
    license: "Entra ID Free / P1",
    validated: "12 minutes ago",
    validatedTone: "teal",
  },
  {
    service: "Defender for Endpoint",
    status: "Available",
    tone: "teal",
    direction: "Inbound",
    objects: "Device state, Alerts",
    auth: "MS Graph API",
    license: "Defender P2 / E5",
    validated: "1 hour ago",
    validatedTone: "teal",
  },
  {
    service: "Microsoft Purview",
    status: "Partial",
    tone: "amber",
    direction: "Inbound",
    objects: "Unified audit, barriers",
    auth: "Management Activity API",
    license: "Audit Premium (E5)",
    validated: "Scope Restricted",
    validatedTone: "amber",
  },
  {
    service: "Sentinel / SIEM",
    status: "Beta",
    tone: "slate",
    direction: "Bidirectional",
    objects: "Incidents, Alert mappings",
    auth: "Azure Monitor Workspace",
    license: "Azure Subscription",
    validated: "Under validation",
    validatedTone: "slate",
  },
];

const headers = [
  "Microsoft Service",
  "Shield Status",
  "Direction",
  "Primary Objects",
  "Auth Model",
  "License Dependency",
  "Last Validated",
];

export default function RegistryMatrixSection() {
  return (
    <Section>
      <SectionHeader
        title="Ecosystem Service Registry Matrix"
        description="Live registry indicators showing integration parameters. Actual deployment status is evaluated based on your specific tenant license level and permissions."
        descriptionClassName="max-w-[1040px]"
      />

      {/* Mobile / tablet: stacked cards */}
      <div className="flex flex-col gap-4 w-full lg:hidden">
        {rows.map((r, i) => (
          <Reveal key={r.service} delay={i * 0.05} className={`${cardClass} p-5 flex flex-col gap-3`}>
            <div className="flex items-center justify-between gap-3">
              <p className="font-hanken font-extrabold text-[16px] text-[#0a2029] m-0">{r.service}</p>
              <Badge tone={r.tone} size="sm">{r.status}</Badge>
            </div>
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 m-0 pt-3 border-t border-[rgba(18,59,76,0.1)]">
              {[
                ["Direction", r.direction],
                ["Objects", r.objects],
                ["Auth", r.auth],
                ["License", r.license],
              ].map(([k, v]) => (
                <React.Fragment key={k}>
                  <dt className="font-jetbrains text-[11px] text-[#5b6670] uppercase pt-0.5">{k}</dt>
                  <dd className="font-manrope text-[13px] text-[#0a2029] m-0">{v}</dd>
                </React.Fragment>
              ))}
            </dl>
            <p className={`font-jetbrains text-[12px] m-0 ${toneText[r.validatedTone]}`}>
              Last validated: {r.validated}
            </p>
          </Reveal>
        ))}
      </div>

      {/* Desktop: full table */}
      <Reveal className={`hidden lg:block ${cardClass} overflow-hidden w-full`}>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#f0ede6]">
              {headers.map((h) => (
                <th
                  key={h}
                  className="font-jetbrains font-bold text-[10px] text-[#0a2029] text-left uppercase px-5 py-4"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.service} className={i < rows.length - 1 ? "border-b border-[rgba(18,59,76,0.1)]" : ""}>
                <td className="px-5 py-4 font-manrope font-bold text-[13.5px] text-[#0a2029]">{r.service}</td>
                <td className="px-5 py-4">
                  <Badge tone={r.tone} size="sm">{r.status}</Badge>
                </td>
                <td className="px-5 py-4 font-jetbrains text-[12px] text-[#5b6670]">{r.direction}</td>
                <td className="px-5 py-4 font-manrope text-[13px] text-[#5b6670]">{r.objects}</td>
                <td className="px-5 py-4 font-manrope text-[13px] text-[#5b6670]">{r.auth}</td>
                <td className="px-5 py-4 font-manrope text-[13px] text-[#5b6670]">{r.license}</td>
                <td className={`px-5 py-4 font-jetbrains text-[12px] ${toneText[r.validatedTone]}`}>{r.validated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </Section>
  );
}
