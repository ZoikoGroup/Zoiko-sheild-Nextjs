"use client";

import React from "react";
import { CircleAlert, Settings, Shield, TriangleAlert, UserCheck } from "lucide-react";
import { DarkImageSection, IMG, Reveal, SectionHeader } from "./shared";

const reasons = [
  {
    icon: UserCheck,
    title: "See actor and asset",
    desc: "Instantly link authentication anomalies with local process execution on the host machine.",
  },
  {
    icon: TriangleAlert,
    title: "Reduce investigation gaps",
    desc: "No more stitching Okta events to CrowdStrike host timelines manually. Zoiko maps it instantly.",
  },
  {
    icon: Shield,
    title: "Preserve source authority",
    desc: "Maintain read and write boundaries. Trust is built through cryptographic, direct-from-source proof.",
  },
  {
    icon: CircleAlert,
    title: "Expose control gaps",
    desc: "Flag devices that are passing directory checks but have inactive or stale local EDR agents.",
  },
  {
    icon: Settings,
    title: "Govern response",
    desc: "Execute containment or session termination safely under multi-party approval policies.",
  },
];

export default function WhyTogetherSection() {
  return (
    <DarkImageSection image={`${IMG}/why-together-bg.webp`}>
      <SectionHeader
        dark
        eyebrow="The Correlation Power"
        title="Why Endpoint and Identity must be governed together"
        description="Separate security tools create massive investigation blindspots. We unify signals to prove state and defend digital operations."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6 w-full">
        {reasons.map((r, i) => (
          <Reveal
            key={r.title}
            delay={i * 0.06}
            className="bg-[#0b0f17]/95 border border-white/10 rounded-[12px] p-6 flex flex-col gap-3"
          >
            <r.icon className="size-6 text-[#e0967d]" strokeWidth={1.6} />
            <h3 className="font-hanken font-bold text-[19px] leading-[24px] text-white m-0">{r.title}</h3>
            <p className="font-manrope text-[14px] leading-[21px] text-[#a9bcd0] m-0">{r.desc}</p>
          </Reveal>
        ))}
      </div>
    </DarkImageSection>
  );
}
