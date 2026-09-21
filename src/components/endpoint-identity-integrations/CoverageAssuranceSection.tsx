"use client";

import React from "react";
import { IMG, MediaSection } from "./shared";

export default function CoverageAssuranceSection() {
  return (
    <MediaSection
      alt
      eyebrow="Coverage Assurance"
      title="Expose unmanaged devices instantly"
      lead="Don't wait for audit breaches. Detect drift, degraded sensor states, and unmanaged endpoints."
      image={`${IMG}/coverage-visual.webp`}
      imageAlt="Analyst monitoring device coverage across multiple screens"
    >
      <p className="font-manrope text-[14px] leading-[21px] text-[#5b6670] m-0 pt-1">
        Zoiko Shield continuously compares active logins on directories
        against active EDR sensors. Flag device profiles that have passed
        directory posture checks but are missing protection agents.
      </p>
      <a
        href="/contact"
        className="inline-flex items-center justify-center mt-4 px-6 py-3 rounded-[8px] bg-[#c44242] hover:bg-[#b23636] transition-colors w-full sm:w-auto"
      >
        <span className="font-manrope font-bold text-[15px] text-white">Resolve active drift issues</span>
      </a>
    </MediaSection>
  );
}
