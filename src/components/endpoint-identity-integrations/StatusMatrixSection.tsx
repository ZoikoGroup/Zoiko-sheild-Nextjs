"use client";

import React from "react";
import { Pill, Reveal, Section, SectionHeader, cardClass, type Tone } from "./shared";

const rows: {
  product: string;
  domain: string;
  status: string;
  tone: Tone;
  direction: string;
  objects: string;
  auth: string;
}[] = [
  {
    product: "CrowdStrike Falcon",
    domain: "Endpoint Security",
    status: "Available",
    tone: "green",
    direction: "Bi-directional",
    objects: "Host, Process, FileHash",
    auth: "OAuth2 Client Credentials",
  },
  {
    product: "Okta",
    domain: "Identity & Auth",
    status: "Available",
    tone: "green",
    direction: "Bi-directional",
    objects: "User, Group, Session",
    auth: "SSO Token / API Key",
  },
  {
    product: "Microsoft Entra ID",
    domain: "Identity & PIM",
    status: "Beta",
    tone: "amber",
    direction: "Read-only",
    objects: "User, Role, Device",
    auth: "OIDC / App Consent",
  },
  {
    product: "Jamf Pro",
    domain: "Device Management",
    status: "Partner-assisted",
    tone: "blue",
    direction: "Read-only",
    objects: "Mobile Device, Posture",
    auth: "Bearer Token Refresh",
  },
  {
    product: "Microsoft Intune",
    domain: "Device Management",
    status: "Planned",
    tone: "blue",
    direction: "Bi-directional",
    objects: "Device, Compliance",
    auth: "MS Graph API Auth",
  },
];

const headers = ["Source Product", "Domain", "Zoiko Status", "Direction", "Primary Objects", "Auth Model"];

export default function StatusMatrixSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Integration Registry"
        title="Direct-from-Source Status Matrix"
        description="Production-ready integrations are actively maintained and registry-driven. Status is verified automatically every 24 hours."
      />

      {/* Mobile / tablet: stacked cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:hidden">
        {rows.map((r, i) => (
          <Reveal key={r.product} delay={i * 0.05} className={`${cardClass} p-5 flex flex-col gap-3`}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col gap-0.5">
                <p className="font-manrope font-bold text-[15px] text-[#0a2029] m-0">{r.product}</p>
                <p className="font-manrope text-[13px] text-[#5b6670] m-0">{r.domain}</p>
              </div>
              <Pill tone={r.tone}>{r.status}</Pill>
            </div>
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 m-0 pt-3 border-t border-[rgba(18,59,76,0.1)]">
              {[
                ["Direction", r.direction],
                ["Objects", r.objects],
                ["Auth", r.auth],
              ].map(([k, v]) => (
                <React.Fragment key={k}>
                  <dt className="font-jetbrains text-[11px] text-[#5b6670] uppercase pt-0.5">{k}</dt>
                  <dd className="font-jetbrains text-[12px] text-[#0a2029] m-0">{v}</dd>
                </React.Fragment>
              ))}
            </dl>
          </Reveal>
        ))}
      </div>

      {/* Desktop: table */}
      <Reveal className={`hidden lg:block ${cardClass} overflow-hidden w-full`}>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#f0ede6]">
              {headers.map((h) => (
                <th
                  key={h}
                  className="font-jetbrains font-bold text-[11px] text-[#0a2029] text-left uppercase px-4 xl:px-6 py-5"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.product} className={i < rows.length - 1 ? "border-b border-[rgba(18,59,76,0.1)]" : ""}>
                <td className="px-4 xl:px-6 py-4 font-manrope font-bold text-[14px] text-[#0a2029]">{r.product}</td>
                <td className="px-4 xl:px-6 py-4 font-manrope text-[14px] text-[#5b6670]">{r.domain}</td>
                <td className="px-4 xl:px-6 py-4 whitespace-nowrap">
                  <Pill tone={r.tone}>{r.status}</Pill>
                </td>
                <td className="px-4 xl:px-6 py-4 font-manrope text-[14px] text-[#0a2029] whitespace-nowrap">{r.direction}</td>
                <td className="px-4 xl:px-6 py-4 font-jetbrains text-[12px] text-[#5b6670]">{r.objects}</td>
                <td className="px-4 xl:px-6 py-4 font-jetbrains text-[12px] text-[#5b6670]">{r.auth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </Section>
  );
}
