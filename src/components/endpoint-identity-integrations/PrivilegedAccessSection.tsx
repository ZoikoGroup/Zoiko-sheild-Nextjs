"use client";

import React from "react";
import { IMG, MediaSection } from "./shared";

export default function PrivilegedAccessSection() {
  return (
    <MediaSection
      eyebrow="Privileged Access"
      title="Strictly Governed Role Elevation"
      lead="Unify standing access lists with Microsoft Entra PIM and CyberArk metrics."
      image={`${IMG}/privileged-access-visual.webp`}
      imageAlt="Administrator reviewing privileged role elevations on a laptop"
    >
      <p className="font-manrope text-[14px] leading-[21px] text-[#5b6670] m-0 pt-1">
        Track active vs eligible, expired, and emergency (breakglass) role
        elevations. Every elevated action requires matching device compliance
        proof and is bound strictly by configurable approval windows.
      </p>
    </MediaSection>
  );
}
