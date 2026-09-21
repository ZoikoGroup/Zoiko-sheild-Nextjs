"use client";

import React from "react";
import { Reveal, Section, SectionHeader, cardClass } from "./shared";

const roles = [
  { role: "Developer", limits: "Read logs, dispatch simulations, edit Sandbox endpoints." },
  { role: "Security Admin", limits: "Manage Production endpoints, view payloads, rotate secrets." },
];

export default function RbacSection() {
  return (
    <Section>
      <SectionHeader eyebrow="Role Boundaries" title="RBAC Permissions & Isolated Stages" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
        <Reveal className={`${cardClass} !rounded-[16px] p-6 flex flex-col gap-3`}>
          <h3 className="font-hanken font-bold text-[18px] text-[#0a2029] m-0">Isolated Sandbox Environments</h3>
          <p className="font-manrope text-[14px] leading-[21px] text-[#5b6670] m-0">
            Each environment (Sandbox, Staging, Production) is strictly
            isolated. Secrets are independently generated per stage and cannot
            be shared across directories.
          </p>
        </Reveal>

        <Reveal delay={0.08} className={`${cardClass} overflow-hidden`}>
          <div className="flex bg-[#f0ede6] px-3 py-3">
            <p className="w-[110px] sm:w-[180px] shrink-0 font-jetbrains font-bold text-[12px] text-[#0a2029] m-0">ROLE</p>
            <p className="flex-1 font-jetbrains font-bold text-[12px] text-[#0a2029] m-0">CAPABILITIES / LIMITS</p>
          </div>
          {roles.map((r) => (
            <div key={r.role} className="flex border-t border-[rgba(18,59,76,0.1)] px-3 py-3">
              <p className="w-[110px] sm:w-[180px] shrink-0 font-manrope font-bold text-[14px] text-[#0a2029] m-0">{r.role}</p>
              <p className="flex-1 font-manrope text-[14px] leading-[20px] text-[#5b6670] m-0">{r.limits}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
