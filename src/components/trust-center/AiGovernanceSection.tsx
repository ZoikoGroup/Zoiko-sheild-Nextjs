"use client";

import React from "react";
import { CircleCheck } from "lucide-react";
import { Reveal, Section, SectionHeader, cardClass } from "./shared";

const commitments = [
  "Zero model training on customer telemetry data",
  "Dual-approver requirements before automated remediation",
];

const excluded = [
  "Raw administrative user passwords",
  "Multi-party encryption key segments",
  "Biometric authentication logs",
];

export default function AiGovernanceSection() {
  return (
    <Section tone="alt">
      <SectionHeader eyebrow="AI Governance" title="Responsible models, strictly governed" />

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 w-full">
        <Reveal className="flex flex-col gap-4 flex-1 min-w-0">
          <h3 className="font-sans font-bold text-[20px] text-[#0a2029] m-0">Our Core AI Commitments</h3>
          <p className="font-manrope text-[15px] leading-[22px] text-[#5b6670] m-0">
            At Zoiko Shield, artificial intelligence acts solely as a
            correlation companion under strict human oversight. We never use
            client telemetry, incident descriptions, or directory contexts to
            train foundation models.
          </p>
          <ul className="flex flex-col gap-2 m-0 p-0 list-none">
            {commitments.map((c) => (
              <li key={c} className="flex items-center gap-2">
                <CircleCheck className="size-[18px] text-[#1f7a6c] shrink-0" />
                <span className="font-manrope font-semibold text-[15px] text-[#0a2029]">{c}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className={`${cardClass} w-full lg:w-[40%] xl:w-[450px] shrink-0 self-start p-6 flex flex-col gap-3`}>
          <h3 className="font-sans font-bold text-[17px] text-[#0a2029] m-0">Excluded / Restricted Model Scope</h3>
          <p className="font-manrope text-[14px] text-[#5b6670] m-0">The correlation engine does not ingest or analyze:</p>
          <ul className="flex flex-col gap-1 m-0 p-0 list-none">
            {excluded.map((e) => (
              <li key={e} className="font-manrope text-[13px] text-[#c44242]">
                · {e}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
