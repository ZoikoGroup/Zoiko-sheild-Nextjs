"use client";

import React from "react";
import { Check, TriangleAlert } from "lucide-react";
import { Badge, Reveal, Section, SectionHeader, cardClass } from "./shared";

const authentications = [
  { name: "Admin Sign-In Override", result: "MFA Bypass Detected", danger: true },
  { name: "Conditional Access Policy Change", result: "Mapped to Rule AC-2", danger: false },
];

const scopes = [
  { name: "AuditLog.Read.All (Least Privilege)", warn: false },
  { name: "Directory.Read.All", warn: false },
  { name: "IdentityRiskEvent.Read.All (License-limited)", warn: true },
];

export default function IdentitySection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Identity Integrity"
        title="Bring identity risk and sign-in context into security decisions."
        description="Connect Entra ID directories, tenant settings, and conditional access telemetry. Rather than managing users, Zoiko Shield monitors identity configurations and correlates authentication logs to establish cryptographic lineage."
        descriptionClassName="max-w-[800px]"
      />

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start w-full">
        <Reveal className={`${cardClass} p-5 sm:p-6 flex flex-col gap-5 w-full lg:flex-[1.9] min-w-0`}>
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-hanken font-extrabold text-[16px] text-[#0a2029] m-0">
              Active Authentication telemetry
            </h3>
            <Badge tone="teal" size="sm">Active Audit</Badge>
          </div>

          <div className="bg-[#f0ede6] rounded-[10px] px-4 py-3 flex flex-col gap-2">
            <div className="flex items-center justify-between gap-3">
              <p className="font-manrope text-[13px] text-[#5b6670] m-0">Active Directory Tenant</p>
              <p className="font-jetbrains text-[12px] text-[#0a2029] m-0 whitespace-nowrap">tenant-0x3b92a</p>
            </div>
            <div className="flex items-center justify-between gap-3">
              <p className="font-manrope text-[13px] text-[#5b6670] m-0">Directory Role Monitoring</p>
              <p className="font-jetbrains text-[12px] text-[#1f7a6c] m-0 whitespace-nowrap">Healthy (4 Roles)</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-jetbrains font-bold text-[11px] text-[#5b6670] uppercase m-0">
              Risk-Correlated Authentications
            </p>
            <div className="flex flex-col">
              {authentications.map((a) => (
                <div
                  key={a.name}
                  className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 py-2 border-t border-[rgba(18,59,76,0.1)]"
                >
                  <p className="font-manrope text-[13px] text-[#0a2029] m-0">{a.name}</p>
                  <p
                    className={`font-jetbrains text-[11px] m-0 ${
                      a.danger ? "text-[#c44242]" : "text-[#1f7a6c]"
                    }`}
                  >
                    {a.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-4 flex-1 w-full min-w-0">
          <div className="bg-[#f0ede6] rounded-[12px] p-5 flex flex-col gap-3">
            <p className="font-jetbrains font-bold text-[11px] text-[#5b6670] uppercase m-0">
              API Permission Scopes
            </p>
            <ul className="flex flex-col gap-2 m-0 p-0 list-none">
              {scopes.map((s) => (
                <li key={s.name} className="flex items-center gap-2">
                  {s.warn ? (
                    <TriangleAlert className="size-4 text-[#d97706] shrink-0" />
                  ) : (
                    <Check className="size-4 text-[#1f7a6c] shrink-0" />
                  )}
                  <span
                    className={`font-manrope text-[13.5px] ${
                      s.warn ? "text-[#5b6670]" : "text-[#0a2029]"
                    }`}
                  >
                    {s.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <p className="font-manrope text-[13.5px] leading-[20px] text-[#5b6670] m-0">
            * Note: Ingesting advanced identity protection triggers requires
            Microsoft Entra ID P2 licensing. If unavailable, logs degrade
            gracefully to audit-only.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
