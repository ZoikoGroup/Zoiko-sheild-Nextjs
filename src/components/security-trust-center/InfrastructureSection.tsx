"use client";

import React from "react";
import { FeatureSection } from "./shared";

const items = [
  {
    title: "Environment Separation",
    desc: "Development, testing, staging, and production environments are strictly isolated. No live customer data ever enters testing zones.",
  },
  {
    title: "Application Defense",
    desc: "Automated rate limiters, continuous web application firewalls, and direct edge filtering defend against application-level attacks.",
  },
  {
    title: "Hardened Containers",
    desc: "Production containers are minimal, immutable, and configured with read-only root filesystems to limit the impact of any host-level anomaly.",
  },
];

export default function InfrastructureSection() {
  return (
    <FeatureSection
      eyebrow="Infrastructure"
      title="Hardened boundaries and segregated environments"
      items={items}
    />
  );
}
