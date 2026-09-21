"use client";

import React from "react";
import { Pill, Reveal, Section, SectionHeader, cardClass, type Tone } from "./shared";

const models: { tag: string; tone: Tone; title: string; desc: string }[] = [
  {
    tag: "Source-Declared",
    tone: "green",
    title: "Direct Registry Ingestion",
    desc: "Ingests the absolute identifier from CrowdStrike or Okta, preserving original context without interpolation.",
  },
  {
    tag: "Identifier Match",
    tone: "green",
    title: "Configured Matching",
    desc: "Automated mapping using strict deterministic matching constraints (e.g. Serial + OrgTenant + Domain).",
  },
  {
    tag: "Needs Review",
    tone: "amber",
    title: "Inferred Relationship",
    desc: "Flag conflict matches such as an identity logging in from a known-unmanaged device for analyst review.",
  },
];

export default function EntityResolutionSection() {
  return (
    <Section alt>
      <SectionHeader
        eyebrow="Entity Resolution"
        title="The Canonical Linkage Model"
        description="How Zoiko Shield resolves disparate device and identity directories into singular secure entities."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {models.map((m, i) => (
          <Reveal key={m.title} delay={i * 0.06} className={`${cardClass} p-6 flex flex-col gap-3 items-start`}>
            <Pill tone={m.tone}>{m.tag}</Pill>
            <h3 className="font-hanken font-extrabold text-[18px] text-[#0a2029] m-0 pt-1">{m.title}</h3>
            <p className="font-manrope text-[14px] leading-[21px] text-[#5b6670] m-0">{m.desc}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
