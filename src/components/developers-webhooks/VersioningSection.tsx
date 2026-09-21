"use client";

import React from "react";
import { Reveal, Section, SectionHeader, Tag, type Tone } from "./shared";

const versions: { tag: string; tone: Tone; desc: string }[] = [
  { tag: "v1.4 ACTIVE", tone: "green", desc: "Current registry production baseline. Safe payload updates." },
  { tag: "v1.1 DEPRECATED", tone: "red", desc: "Support ending Oct 2026. Migration guides are accessible." },
];

export default function VersioningSection() {
  return (
    <Section alt>
      <SectionHeader eyebrow="API Contracts" title="Versioning & Schema Evolution Guidelines" />

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 w-full">
        <Reveal className="flex flex-col gap-4 flex-1 min-w-0">
          <h3 className="font-hanken font-bold text-[20px] text-[#0a2029] m-0">Backward-Compatible Assurances</h3>
          <p className="font-manrope text-[15px] leading-[22px] text-[#5b6670] m-0">
            We guarantee that non-breaking changes (such as adding optional
            fields, expanding enums, or registering new event types) are
            deployed without a version increment. Breaking modifications (like
            renaming a field, modifying a type definition, or deprecating a
            payload structure) will trigger a strict major version bump.
            Historical supported versions remain active and addressable.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-4 flex-1 min-w-0">
          {versions.map((v) => (
            <div key={v.tag} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <Tag tone={v.tone} className="self-start sm:self-auto !text-[12px] !px-2.5 !py-1">
                {v.tag}
              </Tag>
              <p className="font-manrope text-[15px] text-[#5b6670] m-0">{v.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
