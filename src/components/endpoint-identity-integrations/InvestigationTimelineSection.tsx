"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { DarkImageSection, IMG, Reveal, SectionHeader } from "./shared";

const events = [
  { step: "1. Actor", title: "alex.rivera@zoiko.com", detail: "Auth Source: Okta Tenant_A" },
  { step: "2. MFA Attempt", title: "Duo Push Approved", detail: "Device Match: Compliant EDR" },
  { step: "3. Action Remediated", title: "Host Isolation Initiated", detail: "Approver: SecOps Lead (Verifiable)" },
];

export default function InvestigationTimelineSection() {
  return (
    <DarkImageSection
      image={`${IMG}/investigation-bg.webp`}
      overlay="bg-gradient-to-b from-[rgba(15,42,74,0.7)] to-[rgba(15,42,74,0.45)]"
    >
      <SectionHeader
        dark
        eyebrow="Investigation Pathway"
        title="Traceable, evidence-backed timeline"
        description="Avoid black-box AI magic or confusing network-packet visualizations. Follow the explicit connection edges."
      />

      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-6 w-full">
        {events.map((e, i) => (
          <React.Fragment key={e.step}>
            {i > 0 && <ArrowRight className="size-5 text-[#e0967d] shrink-0 self-center rotate-90 lg:rotate-0" />}
            <Reveal
              delay={i * 0.08}
              className="flex-1 min-w-0 bg-[rgba(30,41,59,0.75)] backdrop-blur-sm border border-white/15 rounded-[12px] p-5 flex flex-col gap-2"
            >
              <p className="font-jetbrains text-[11px] text-[#e0967d] uppercase m-0">{e.step}</p>
              <p className="font-manrope font-bold text-[16px] text-white m-0 break-all">{e.title}</p>
              <p className="font-manrope text-[13px] text-[#a9bcd0] m-0">{e.detail}</p>
            </Reveal>
          </React.Fragment>
        ))}
      </div>
    </DarkImageSection>
  );
}
