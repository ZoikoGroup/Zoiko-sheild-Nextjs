"use client";

import React from "react";
import { Reveal, Section, SectionHeader } from "./shared";

const subprocessors = [
  { name: "Amazon Web Services (AWS)", services: "Cloud Host & segregated database infrastructure", location: "US-East, EU-Central" },
  { name: "Okta Inc.", services: "Identity Directory & authentication integrations", location: "Multi-Region" },
  { name: "CrowdStrike Falcon", services: "Telemetry streaming & API ingestion endpoint", location: "US-West" },
];

const flow = [
  "Ingest: IDP & EDR endpoints",
  "Isolate: Strict tenant segregated tables",
  "Audit: Hashed proof stored in Evidence Ledger",
];

export default function ProcessorMapSection() {
  return (
    <Section tone="light">
      <SectionHeader eyebrow="Processor Map" title="Transparent data lineage and subprocessors" />

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 w-full">
        <Reveal className="flex flex-col gap-3 flex-1 min-w-0">
          <h3 className="font-sans font-bold text-[18px] text-[#0a2029] m-0 pb-1">Active Subprocessors</h3>
          {subprocessors.map((s) => (
            <div key={s.name} className="bg-[#f0ede6] rounded-[8px] px-4 py-4 flex flex-col gap-1">
              <p className="font-sans font-bold text-[15px] text-[#0a2029] m-0">{s.name}</p>
              <p className="font-manrope text-[13px] text-[#5b6670] m-0">Services: {s.services}</p>
              <p className="font-manrope text-[13px] text-[#5b6670] m-0">Location: {s.location}</p>
            </div>
          ))}
        </Reveal>

        <Reveal
          delay={0.1}
          className="w-full lg:w-[40%] xl:w-[500px] shrink-0 self-start bg-[#0f2440] rounded-[12px] p-6 flex flex-col gap-3"
        >
          <p className="font-sans font-bold text-[13px] text-white uppercase tracking-[0.5px] m-0 pb-1">
            Data-Flow Architecture
          </p>
          <ol className="flex flex-col gap-3 m-0 p-0 list-none">
            {flow.map((step, i) => (
              <li key={step} className="bg-[#1f3a57] rounded-[6px] px-3 py-3 flex items-center gap-4">
                <span className="font-sans font-bold text-[13px] text-white">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-manrope text-[13px] text-[#dce5ee]">{step}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
