"use client";

import React from "react";
import { DarkFeatureSection, IMG } from "./shared";

const items = [
  {
    title: "Clear Ownership",
    desc: "Each domain is managed by designated, certified security and privacy owners with direct responsibility for continuous verification.",
  },
  {
    title: "Policy Gaps & Exceptions",
    desc: "Exceptions to technical controls undergo risk assessments, explicit approval constraints, and automated expiration monitoring.",
  },
  {
    title: "Executive Oversight",
    desc: "Monthly risk audits, platform telemetry, and control health reviews are surfaced directly to board-level stakeholders.",
  },
];

export default function GovernanceSection() {
  return (
    <DarkFeatureSection
      image={`${IMG}/governance-bg.webp`}
      eyebrow="Governance"
      title="Ownership, risk, and structural alignment"
      items={items}
    />
  );
}
