"use client";

import React from "react";
import { FeatureSection } from "./shared";

const items = [
  {
    title: "Background Ingestion",
    desc: "Where permitted by regional authority, personnel screening is standard procedure before access credentials are created.",
  },
  {
    title: "Separation of Duties",
    desc: "Our operational guidelines ensure no single analyst can authorize both containment rules and policy resets unilaterally.",
  },
  {
    title: "Role-Specific Training",
    desc: "Security engineers undergo tailored simulations focusing on identity-hijack patterns and session hijacking countermeasures.",
  },
];

export default function PersonnelSection() {
  return (
    <FeatureSection
      eyebrow="Personnel"
      title="Strict screening and mandatory awareness"
      items={items}
    />
  );
}
