"use client";

import React from "react";
import { Badge, Reveal, Section, SectionHeader, cardClass } from "./shared";

const events = [
  {
    workload: "SharePoint",
    operation: "FileAccessGranted",
    actor: "system-service-01",
    object: "doc_0x8f2b3c",
  },
  {
    workload: "Entra ID",
    operation: "RoleMemberAdded",
    actor: "global-admin-04",
    object: "user_0x112b4e",
  },
];

const headers = ["Workload", "Operation", "Actor", "Object Reference", "Verified Status"];

export default function ComplianceEvidenceSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Compliance Evidence"
        title="Turn Microsoft activity into traceable assurance evidence."
        description="Generate immutable ledger traces from your document repositories, directory changes, and Purview audit events automatically."
      />

      <Reveal className={`${cardClass} p-4 sm:p-5 flex flex-col gap-4 w-full`}>
        <p className="font-jetbrains font-bold text-[11px] text-[#5b6670] uppercase m-0">
          Unified Audit Pipeline Output
        </p>

        {/* Mobile: stacked rows */}
        <div className="flex flex-col gap-3 md:hidden">
          {events.map((e) => (
            <div key={e.object} className="border border-[rgba(18,59,76,0.1)] rounded-[10px] p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between gap-3">
                <p className="font-manrope font-bold text-[14px] text-[#0a2029] m-0">{e.workload}</p>
                <Badge tone="teal" size="sm">Hashed &amp; Plotted</Badge>
              </div>
              <p className="font-manrope text-[13px] text-[#5b6670] m-0">{e.operation}</p>
              <p className="font-jetbrains text-[11px] text-[#5b6670] m-0">
                {e.actor} → {e.object}
              </p>
            </div>
          ))}
        </div>

        {/* Tablet & desktop: table */}
        <div className="hidden md:block border border-[rgba(18,59,76,0.1)] rounded-[10px] overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#f0ede6]">
                {headers.map((h) => (
                  <th key={h} className="font-jetbrains font-bold text-[10px] text-[#0a2029] text-left uppercase px-5 py-3.5">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {events.map((e, i) => (
                <tr key={e.object} className={i < events.length - 1 ? "border-b border-[rgba(18,59,76,0.1)]" : ""}>
                  <td className="px-5 py-3.5 whitespace-nowrap font-manrope font-bold text-[13.5px] text-[#0a2029]">{e.workload}</td>
                  <td className="px-5 py-3.5 whitespace-nowrap font-manrope text-[13px] text-[#5b6670]">{e.operation}</td>
                  <td className="px-5 py-3.5 whitespace-nowrap font-manrope text-[13px] text-[#5b6670]">{e.actor}</td>
                  <td className="px-5 py-3.5 whitespace-nowrap font-jetbrains text-[12px] text-[#5b6670]">{e.object}</td>
                  <td className="px-5 py-3.5">
                    <Badge tone="teal" size="sm">Hashed &amp; Plotted</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
}
