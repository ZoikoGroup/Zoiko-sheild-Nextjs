"use client";

import React from "react";
import { IMG, MediaSection } from "./shared";

export default function IdentityAuthSection() {
  return (
    <MediaSection
      reverse
      eyebrow="Identity & Authentication"
      title="Cryptographic Session Verification"
      lead="Never translate unavailable telemetry into low risk. Ensure directories are mapped with exact Tenant and Org scope."
      image={`${IMG}/identity-visual.webp`}
      imageAlt="Professional verifying an identity session on a laptop"
    >
      <p className="font-manrope text-[14px] leading-[21px] text-[#5b6670] m-0 pt-1">
        Trace sessions across your IdPs and authentication mechanisms. Flag
        when administrative consent changes, or when users are added to
        critical security roles without matching device context.
      </p>
    </MediaSection>
  );
}
