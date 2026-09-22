"use client";

import React from "react";
import { Reveal, Section, SectionHeader, cardClass } from "./shared";

const entries = [
  { date: "Feb 10, 2026", iso: "2026-02-10", title: "Privacy Policy Update", desc: "Added strict exclusions regarding non-ingestion of biometrics data." },
  { date: "Jan 15, 2026", iso: "2026-01-15", title: "Security.txt Realignment", desc: "Updated PGP signature credentials for primary intake team." },
  { date: "Dec 08, 2025", iso: "2025-12-08", title: "Incident DR Exercise", desc: "Concluded full failover simulation of us-east-2 region telemetry clusters." },
];

export default function ChangeLogSection() {
  return (
    <Section tone="alt">
      <SectionHeader eyebrow="Timeline Records" title="Trust Change Log" />

      <ol className="flex flex-col gap-4 m-0 p-0 list-none w-full">
        {entries.map((e, i) => (
          <li key={e.title}>
            <Reveal
              delay={i * 0.05}
              className={`${cardClass} px-4 py-4 flex flex-col md:flex-row md:items-center gap-1 md:gap-0`}
            >
              <time dateTime={e.iso} className="md:w-[140px] shrink-0 font-sans font-bold text-[14px] text-[#c44242]">
                {e.date}
              </time>
              <p className="md:w-[260px] shrink-0 font-sans font-bold text-[14px] text-[#0a2029] m-0">{e.title}</p>
              <p className="font-manrope text-[14px] text-[#5b6670] m-0">{e.desc}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
