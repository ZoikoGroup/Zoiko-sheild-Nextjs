"use client";

import React from "react";
import { IMG, MediaSection } from "./shared";

export default function EndpointSecuritySection() {
  return (
    <MediaSection
      alt
      eyebrow="Endpoint Security"
      title="Validate Host State on Live Telemetry"
      lead="Rather than trusting passive reports, Zoiko Shield queries local agent health and maps active process alerts to cryptographic proof."
      image={`${IMG}/endpoint-visual.webp`}
      imageAlt="Laptop running endpoint telemetry in a security operations center"
    >
      <div className="flex flex-col gap-2 pt-1">
        <h3 className="font-manrope font-semibold text-[16px] text-[#0a2029] m-0">
          CrowdStrike Falcon &amp; Defender Telemetry Mapping
        </h3>
        <p className="font-manrope text-[14px] leading-[21px] text-[#5b6670] m-0">
          Ensure local agents are actually running and communicating. Zoiko
          pulls host profiles, current sensor versions, active prevention
          state, and maps alert IDs with exact microsecond timestamps.
        </p>
      </div>
    </MediaSection>
  );
}
