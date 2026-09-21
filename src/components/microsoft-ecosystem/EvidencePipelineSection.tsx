"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Reveal, Section, SectionHeader, cardClass } from "./shared";

const stages = [
  { step: "01 / Event Source", title: "Microsoft Graph", desc: "Raw event trigger" },
  { step: "02 / Ingestion", title: "Consent Check", desc: "Least-privilege verify" },
  { step: "03 / Zoiko Processing", title: "Evidence Ledger", desc: "SHA-256 validation" },
  { step: "04 / Assurance", title: "Auditor Export", desc: "One-click SOC 2 trace" },
];

const schema = [
  { key: "source_provider", value: "Microsoft.Azure", accent: false },
  { key: "collection_time_utc", value: "2026-08-04T08:42:11Z", accent: false },
  { key: "hashing_scheme", value: "SHA-256 Intact", accent: false },
  { key: "mapped_controls", value: "SOC 2 / ISO 27001", accent: true },
];

export default function EvidencePipelineSection() {
  return (
    <Section alt>
      <SectionHeader
        eyebrow="System Architecture"
        title="Unified Evidence Pipeline Architecture"
        description="Tracing the path from a raw Microsoft directory event to a non-repudiation cryptographic compliance ledger in Zoiko Shield."
      />

      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-4 w-full">
          {stages.map((s, i) => (
            <React.Fragment key={s.title}>
              {i > 0 && (
                <ArrowRight className="size-4 text-[#5b6670] shrink-0 self-center rotate-90 lg:rotate-0" />
              )}
              <Reveal delay={i * 0.08} className={`${cardClass} p-5 flex flex-col gap-1 flex-1 min-w-0`}>
                <p className="font-jetbrains font-bold text-[11px] text-[#5b6670] uppercase m-0">{s.step}</p>
                <p className="font-hanken font-extrabold text-[16px] text-[#0a2029] m-0 pt-1">{s.title}</p>
                <p className="font-manrope text-[12.5px] text-[#5b6670] m-0">{s.desc}</p>
              </Reveal>
            </React.Fragment>
          ))}
        </div>

        <Reveal className={`${cardClass} p-5 flex flex-col gap-4 w-full`}>
          <p className="font-jetbrains font-bold text-[12px] text-[#0a2029] uppercase m-0">
            Compact Evidence Object Schematic
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {schema.map((f) => (
              <div key={f.key} className="flex flex-col gap-1 min-w-0">
                <p className="font-jetbrains text-[11px] text-[#5b6670] m-0">{f.key}</p>
                <p
                  className={`font-manrope font-bold text-[14px] m-0 break-all ${
                    f.accent ? "text-[#1f7a6c]" : "text-[#0a2029]"
                  }`}
                >
                  {f.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
