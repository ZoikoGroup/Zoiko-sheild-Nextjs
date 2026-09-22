"use client";

import React from "react";
import { FeatureSection } from "./shared";

const items = [
  {
    title: "Backup Replicas",
    desc: "Production data regions maintain automated hot-standby replicas. Backups are periodically evaluated against strict recovery plans.",
  },
  {
    title: "Restore Validation",
    desc: "Rather than assuming success, we execute routine restore simulations on isolated networks to verify data integrity.",
  },
  {
    title: "Zero-Hype Transparency",
    desc: "Zoiko Shield displays real-time uptime metrics via public channels. We do not publish artificial SLA percentages or RTO guarantees.",
  },
];

export default function ResilienceSection() {
  return (
    <FeatureSection
      eyebrow="Resilience"
      title="Sustained availability without implied metrics"
      items={items}
    />
  );
}
