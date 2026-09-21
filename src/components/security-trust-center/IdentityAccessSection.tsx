"use client";

import React from "react";
import { FeatureSection } from "./shared";

const items = [
  {
    title: "Zero Trust Access Patterns",
    desc: "Device posture compliance is cryptographically verified before any session starts. Inactive or unmanaged nodes are isolated at the auth boundary.",
  },
  {
    title: "Just-In-Time Elevation",
    desc: "Administrative roles must be elevated dynamically with explicit reason parameters, remaining active only for limited, audited windows.",
  },
  {
    title: "Shared Boundaries",
    desc: "Clear demarcation lines isolate Zoiko corporate infrastructure from the SaaS production planes, audited via continuous logging.",
  },
];

export default function IdentityAccessSection() {
  return (
    <FeatureSection
      eyebrow="Identity & Access"
      title="Strict boundary enforcement and lease privileges"
      items={items}
    />
  );
}
