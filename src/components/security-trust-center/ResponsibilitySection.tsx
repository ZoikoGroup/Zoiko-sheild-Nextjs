"use client";

import React from "react";
import { Reveal, Section, SectionHeader, cardClass } from "./shared";

const rows = [
  {
    domain: "Platform Security",
    zoiko: "Hardening enclaves, dependency security, data rest encryption.",
    customer: "Configuring administrative access groups and JIT approvals.",
  },
  {
    domain: "Endpoints & MDM",
    zoiko: "Validating compliance states and exposing drift telemetry.",
    customer: "Maintaining active compliance policies inside MDM/EDR agents.",
  },
  {
    domain: "Remediation Execution",
    zoiko: "Providing secure, cryptographically validated commands.",
    customer: "Authorizing and executing high-impact actions under dual-approval.",
  },
];

const headers = ["Security Domain", "Zoiko Shield Responsibility", "Customer Responsibility"];

export default function ResponsibilitySection() {
  return (
    <Section>
      <SectionHeader eyebrow="Responsibility" title="Demarcation of security ownership" />

      {/* Mobile: stacked cards */}
      <div className="flex flex-col gap-4 w-full md:hidden">
        {rows.map((r) => (
          <Reveal key={r.domain} className={`${cardClass} p-5 flex flex-col gap-3`}>
            <p className="font-manrope font-bold text-[15px] text-[#0a2029] m-0">{r.domain}</p>
            <div className="flex flex-col gap-1 pt-3 border-t border-[rgba(18,59,76,0.1)]">
              <p className="font-jetbrains font-bold text-[11px] text-[#5b6670] uppercase m-0">Zoiko Shield</p>
              <p className="font-manrope text-[14px] text-[#5b6670] m-0">{r.zoiko}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-jetbrains font-bold text-[11px] text-[#5b6670] uppercase m-0">Customer</p>
              <p className="font-manrope text-[14px] text-[#0a2029] m-0">{r.customer}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Tablet & desktop: table */}
      <Reveal className={`hidden md:block ${cardClass} overflow-hidden w-full`}>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#f0ede6]">
              {headers.map((h) => (
                <th key={h} className="font-jetbrains font-bold text-[11px] text-[#0a2029] text-left uppercase px-6 py-5">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.domain} className="border-t border-[rgba(18,59,76,0.1)]">
                <td className="px-6 py-4 font-manrope font-bold text-[14px] text-[#0a2029] lg:w-[25%]">{r.domain}</td>
                <td className="px-6 py-4 font-manrope text-[14px] text-[#5b6670]">{r.zoiko}</td>
                <td className="px-6 py-4 font-manrope text-[14px] text-[#0a2029]">{r.customer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </Section>
  );
}
