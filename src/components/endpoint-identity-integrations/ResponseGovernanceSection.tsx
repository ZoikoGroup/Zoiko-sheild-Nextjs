"use client";

import React from "react";
import { Pill, Reveal, Section, SectionHeader, cardClass, type Tone } from "./shared";

const actions: { title: string; desc: string; tag: string; tone: Tone }[] = [
  {
    title: "Safe / Read-Only",
    desc: "Ingest identity directories and endpoint status logs. Does not have write access to remediate.",
    tag: "Read Only Allowed",
    tone: "green",
  },
  {
    title: "Host Isolation",
    desc: "Isolate affected nodes using EDR-native commands. Requires dual-approver confirmation.",
    tag: "Approval Needed",
    tone: "amber",
  },
  {
    title: "MFA / Policy Reset",
    desc: "Terminate active sessions and force re-authentication at the directory boundary.",
    tag: "Write Permission Added",
    tone: "green",
  },
];

export default function ResponseGovernanceSection() {
  return (
    <Section alt>
      <SectionHeader
        eyebrow="Response Governance"
        title="Granular execution permissions and safeguards"
        description="Distinguish safe monitoring queries from high-impact administrative actions. Ensure write operations are strictly policy-bound."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {actions.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.06} className={`${cardClass} p-6 flex flex-col gap-3 items-start`}>
            <h3 className="font-hanken font-extrabold text-[18px] text-[#0a2029] m-0">{a.title}</h3>
            <p className="font-manrope text-[14px] leading-[21px] text-[#5b6670] m-0">{a.desc}</p>
            <div className="mt-auto pt-1">
              <Pill tone={a.tone}>{a.tag}</Pill>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
