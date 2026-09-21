"use client";

import React from "react";
import { Pill, Reveal, Section, SectionHeader, cardClass, type Tone } from "./shared";

const safeguards: { title: string; desc: string; status: string; tone: Tone }[] = [
  { title: "System Status Feed", desc: "Our core platform services operate above a continuous SLA floor.", status: "99.98% Active", tone: "green" },
  { title: "Backup Integrity", desc: "Cryptographic volume hashes are validated dynamically every day.", status: "Backup Verified", tone: "green" },
  { title: "Uptime Communications", desc: "We stream operational incidents directly via our System Status channel.", status: "Active Intake", tone: "slate" },
];

export default function ResilienceSection() {
  return (
    <Section tone="alt" id="resilience">
      <SectionHeader eyebrow="Uptime & Resilience" title="Continuous resilience safeguards" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {safeguards.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06} className={`${cardClass} p-6 flex flex-col gap-2 items-start`}>
            <h3 className="font-sans font-bold text-[18px] text-[#0a2029] m-0">{s.title}</h3>
            <p className="font-manrope text-[14px] leading-[21px] text-[#5b6670] m-0">{s.desc}</p>
            <div className="mt-auto pt-2">
              <Pill tone={s.tone}>{s.status}</Pill>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
