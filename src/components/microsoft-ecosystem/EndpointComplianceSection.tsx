"use client";

import React from "react";
import { Monitor, Smartphone } from "lucide-react";
import { Badge, Reveal, Section, SectionHeader, cardClass } from "./shared";

const devices = [
  { name: "DEV-LAPTOP-RECRUIT-01", icon: Monitor, status: "Compliant", tone: "teal" as const },
  { name: "DEV-MOBILE-OPER-12", icon: Smartphone, status: "Compliant", tone: "teal" as const },
  { name: "DEV-LAPTOP-FINANCE-04", icon: Monitor, status: "Stale Status", tone: "red" as const },
];

export default function EndpointComplianceSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Endpoint Compliance"
        title="Connect endpoint threat context with device compliance."
        description="Ingest real-time posture assessments and patch compliance status directly from Microsoft Intune and Microsoft Defender for Endpoint directories."
      />

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start w-full">
        <Reveal className={`${cardClass} p-5 flex flex-col gap-4 w-full lg:flex-[1.9] min-w-0`}>
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-hanken font-extrabold text-[16px] text-[#0a2029] m-0">
              Intune Active Device Posture
            </h3>
            <Badge tone="teal" size="sm">Synchronized</Badge>
          </div>
          <div className="flex flex-col">
            {devices.map((d, i) => (
              <div
                key={d.name}
                className={`flex items-center justify-between gap-3 py-2.5 ${
                  i < devices.length - 1 ? "border-b border-[rgba(18,59,76,0.1)]" : ""
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <d.icon className="size-4 text-[#0a2029] shrink-0" strokeWidth={1.6} />
                  <p className="font-manrope text-[13px] text-[#0a2029] m-0 truncate">{d.name}</p>
                </div>
                <Badge tone={d.tone} size="sm">{d.status}</Badge>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="bg-[#f3e4e0] rounded-[12px] p-5 flex flex-col gap-3 flex-1 w-full min-w-0">
          <p className="font-jetbrains font-bold text-[11px] text-[#c44242] uppercase m-0">
            Least-Privilege Notice
          </p>
          <p className="font-manrope text-[13.5px] leading-[20px] text-[#0a2029] m-0">
            Zoiko Shield implements absolute Least-Privilege Separation. The
            platform holds zero write permissions—meaning it cannot initiate
            device wiping, isolation, retirement, or other destructive
            remediation actions directly. All controls are observed and
            recorded continuously.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
