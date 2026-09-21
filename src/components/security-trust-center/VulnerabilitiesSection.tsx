"use client";

import React from "react";
import { FeatureSection } from "./shared";

const items = [
  {
    title: "01. Discover & Map",
    desc: "Static and dynamic analysis run daily across active package registries and codebases.",
  },
  {
    title: "02. Triage & Contain",
    desc: "Identified issues are graded using automated exploitability metrics to determine immediate risk.",
  },
  {
    title: "03. Validate & Fix",
    desc: "Fixes undergo regression testing before hitting release pipelines, maintaining system stability.",
  },
  {
    title: "04. Outer Research",
    desc: "A coordinated disclosure process provides external security researchers a clear path to submit findings safely.",
  },
];

export default function VulnerabilitiesSection() {
  return (
    <FeatureSection
      eyebrow="Vulnerabilities"
      title="Continuous security verification and outreach"
      items={items}
      columns={4}
    />
  );
}
