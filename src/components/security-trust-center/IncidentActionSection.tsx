"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { DarkImageSection, IMG, Reveal, SectionHeader } from "./shared";

const steps = [
  { step: "1. Detect & Analyze", title: "Authentication Anomaly", detail: "Source: Identity webhook correlation" },
  { step: "2. Contain & Isolate", title: "Host Quarantine", detail: "Rule: Suspend unmanaged directory logins" },
  { step: "3. Remediate & Recover", title: "State Verification", detail: "Proof: Cryptographic hash confirmation" },
];

export default function IncidentActionSection() {
  return (
    <DarkImageSection image={`${IMG}/incident-bg.webp`}>
      <SectionHeader dark eyebrow="Incident Action" title="Traceable, evidence-backed timeline" />

      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-6 w-full">
        {steps.map((s, i) => (
          <React.Fragment key={s.step}>
            {i > 0 && (
              <ChevronRight className="size-5 text-[#e0967d] shrink-0 self-center rotate-90 lg:rotate-0" />
            )}
            <Reveal
              delay={i * 0.08}
              className="flex-1 min-w-0 bg-[rgba(30,41,59,0.85)] backdrop-blur-sm rounded-[12px] p-5 flex flex-col gap-2"
            >
              <p className="font-jetbrains text-[11px] text-[#e0967d] uppercase m-0">{s.step}</p>
              <p className="font-hanken font-bold text-[16px] text-white m-0">{s.title}</p>
              <p className="font-manrope text-[13px] text-[#a9bcd0] m-0">{s.detail}</p>
            </Reveal>
          </React.Fragment>
        ))}
      </div>
    </DarkImageSection>
  );
}
