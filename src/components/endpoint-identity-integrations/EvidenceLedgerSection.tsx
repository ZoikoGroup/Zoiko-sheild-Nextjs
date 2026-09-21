"use client";

import React from "react";
import { IMG, MediaSection } from "./shared";

export default function EvidenceLedgerSection() {
  return (
    <MediaSection
      eyebrow="Evidence Ledger"
      title="Audit-ready cryptographic storage"
      lead="Stale or unvalidated telemetry cannot support current assurance. Zoiko hashes every source artifact to verify state."
      image={`${IMG}/evidence-visual.webp`}
      imageAlt="Data center aisle storing the evidence ledger"
    >
      <p className="font-manrope text-[14px] leading-[21px] text-[#5b6670] m-0 pt-1">
        Chain of custody stays completely intact. Download artifacts in one
        click with verified cryptographic hashes matching the live execution
        state in your environment.
      </p>
    </MediaSection>
  );
}
