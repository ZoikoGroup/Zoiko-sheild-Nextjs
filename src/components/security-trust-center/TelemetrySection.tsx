"use client";

import React from "react";
import { DarkFeatureSection, IMG } from "./shared";

const items = [
  {
    title: "Timestamp Security",
    desc: "Audit logs use synchronized, cryptographically-protected timestamps, preserving timeline integrity during forensics.",
  },
  {
    title: "Telemetry Unification",
    desc: "Zoiko Shield links authentication webhooks directly to host-level process paths, eliminating traditional investigation gaps.",
  },
  {
    title: "Controlled Evidence Access",
    desc: "Detailed forensic logs reside in an immutable, restricted-access ledger, isolated from general production networks.",
  },
];

export default function TelemetrySection() {
  return (
    <DarkFeatureSection
      image={`${IMG}/telemetry-bg.webp`}
      eyebrow="Telemetry & Detect"
      title="Live audit trails with exact source context"
      items={items}
    />
  );
}
