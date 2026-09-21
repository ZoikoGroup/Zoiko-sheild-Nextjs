"use client";

import React from "react";
import { Reveal, Section, SectionHeader, cardClass } from "./shared";

const columns = [
  {
    title: "Customer Administrator Duties",
    items: [
      "Create Azure App Registrations and securely manage certificate rotations.",
      "Grant admin consent explicitly within your native Microsoft Tenant console.",
      "Maintain underlying Microsoft licensing levels (E3, E5, Purview Compliance packs).",
    ],
  },
  {
    title: "Zoiko Shield Inbound Capabilities",
    items: [
      "Query active configuration parameters via API calls under absolute read-only scopes.",
      "Verify cryptographic proof of policy configurations and record evidence lineage.",
      "Degrade elegantly with warnings if permissions are revoked, keeping data intact.",
    ],
  },
];

export default function ResponsibilitySection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Governance Layer"
        title="Permissions and Shared Responsibility"
        description="A transparent separation of administration duties between your internal team and Zoiko Shield's automated audit monitoring."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
        {columns.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08} className={`${cardClass} p-6 flex flex-col gap-4`}>
            <h3 className="font-hanken font-extrabold text-[18px] text-[#0a2029] m-0">{c.title}</h3>
            <ul className="flex flex-col gap-2 m-0 p-0 list-none">
              {c.items.map((item) => (
                <li key={item} className="flex gap-2 font-manrope text-[14px] leading-[20px] text-[#5b6670]">
                  <span aria-hidden>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
