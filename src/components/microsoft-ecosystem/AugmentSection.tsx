"use client";

import React from "react";
import { Cpu, RefreshCw, Shield, TriangleAlert } from "lucide-react";
import { Badge, Reveal, Section } from "./shared";

const values = [
  {
    icon: Shield,
    title: "Preserve Microsoft Investment",
    desc: "Maximize the ROI of your E3/E5 licenses. We validate and structure telemetry you already pay for into boardroom-ready compliance proof.",
  },
  {
    icon: RefreshCw,
    title: "Reduce Context Switching",
    desc: "Unify threat signals from Defender, Sentinel, and Entra into a single governed queue with full human authorization safeguards.",
  },
  {
    icon: Cpu,
    title: "Strengthen Evidence Quality",
    desc: "Turn raw, mutable event logs into cryptographically signed evidence records that auditors and compliance leaders trust immediately.",
  },
  {
    icon: TriangleAlert,
    title: "Make Coverage Gaps Visible",
    desc: "Identify gaps caused by misconfigured policies or license limitations immediately before they fail during an external audit.",
  },
];

export default function AugmentSection() {
  return (
    <Section alt>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-[70px] items-start w-full">
        <Reveal className="flex flex-col gap-5 items-start lg:w-[370px] shrink-0">
          <Badge tone="teal">Augmented Values</Badge>
          <h2 className="font-hanken font-extrabold leading-[1.15] text-[28px] sm:text-[32px] lg:text-[36px] text-[#0a2029] tracking-[-0.5px] m-0">
            Augment, never replace your native stack.
          </h2>
          <p className="font-manrope leading-[23px] text-[14.5px] text-[#5b6670] m-0">
            We don&apos;t believe in rip-and-replace. Zoiko Shield wraps around
            your existing Microsoft security investments, enriching native
            data with non-repudiation mathematical evidence.
          </p>
        </Reveal>

        <div className="flex flex-col gap-4 flex-1 w-full">
          {values.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 0.06}
              className="bg-white rounded-[12px] p-5 flex gap-4 items-start"
            >
              <v.icon className="size-5 text-[#c44242] shrink-0 mt-0.5" strokeWidth={1.8} />
              <div className="flex flex-col gap-1">
                <h3 className="font-hanken font-extrabold text-[16px] text-[#0a2029] m-0">{v.title}</h3>
                <p className="font-manrope text-[14px] leading-[20px] text-[#5b6670] m-0">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
