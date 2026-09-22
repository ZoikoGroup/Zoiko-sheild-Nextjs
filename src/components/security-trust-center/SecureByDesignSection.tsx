"use client";

import React from "react";
import { FeatureSection } from "./shared";

const items = [
  {
    title: "Threat Modeling",
    desc: "Systemic threat modeling occurs before code is drafted, defining clear security boundaries and default-deny requirements.",
  },
  {
    title: "Secrets Handling",
    desc: "Hardcoded credentials are banned; active secrets live in managed key repositories with automated rotation profiles.",
  },
  {
    title: "Dependency Security",
    desc: "All external libraries are traced, scanned, and pinned to verified cryptographic hashes in the build pipeline.",
  },
  {
    title: "Defect Lifecycles",
    desc: "Identified software defects are triaged against standard severity tables and resolved under strict engineering agreements.",
  },
];

export default function SecureByDesignSection() {
  return (
    <FeatureSection
      eyebrow="Secure by Design"
      title="A disciplined product build lifecycle"
      items={items}
      columns={4}
    />
  );
}
