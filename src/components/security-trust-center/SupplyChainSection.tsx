"use client";

import React from "react";
import { FeatureSection } from "./shared";

const items = [
  {
    title: "SBOM Availability",
    desc: "Software Bill of Materials (SBOM) digests are compiled for core builds, documenting transit dependencies and library origins.",
  },
  {
    title: "Vendor Verification",
    desc: "Every subprocessor is vetted against strict data-isolation standards, credential lifecycles, and access constraints.",
  },
  {
    title: "Build Integrity Gating",
    desc: "Our build servers execute in isolated enclaves, ensuring artifacts are cryptographically signed before release.",
  },
];

export default function SupplyChainSection() {
  return (
    <FeatureSection
      eyebrow="Supply Chain"
      title="Defending software dependencies and partners"
      items={items}
    />
  );
}
