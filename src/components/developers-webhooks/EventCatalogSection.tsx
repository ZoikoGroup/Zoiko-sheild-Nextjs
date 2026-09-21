"use client";

import React, { useState } from "react";
import { BreakableName, Reveal, Section, SectionHeader, Tag, cardClass, type Tone } from "./shared";

type Status = "Released" | "Beta" | "Deprecated" | "Planned";

const statusTone: Record<Status, Tone> = {
  Released: "green",
  Beta: "green",
  Deprecated: "red",
  Planned: "green",
};

const events: { domain: string; name: string; status: Status; version: string }[] = [
  { domain: "Endpoint Security", name: "event.device.unhealthy_v1", status: "Released", version: "v1.4" },
  { domain: "Identity & Authentication", name: "event.auth.session_breach_v1", status: "Released", version: "v1.2" },
  { domain: "Device Posture", name: "event.directory.policy_drift_v1", status: "Released", version: "v1.0" },
  { domain: "Privileged Access", name: "event.elevation.emergency_triggered_v1", status: "Beta", version: "v2.0-beta" },
  { domain: "Ecosystem Status", name: "event.integration.auth_expired_v1", status: "Deprecated", version: "v1.1" },
  { domain: "Remediation Pipeline", name: "event.remediation.reboot_requested_v1", status: "Planned", version: "v1.5" },
];

/** Events the endpoint in "Endpoint Configuration" is currently subscribed to. */
const subscribed = new Set(["event.device.unhealthy_v1", "event.auth.session_breach_v1"]);

export default function EventCatalogSection() {
  const [showSubscribed, setShowSubscribed] = useState(true);
  const visible = showSubscribed ? events : events.filter((e) => !subscribed.has(e.name));

  return (
    <Section alt>
      <SectionHeader
        eyebrow="Registry Domains"
        title="Event Schema Catalog"
        aside={
          <div className="flex items-center gap-3 shrink-0">
            <span id="catalog-toggle-label" className="font-manrope text-[14px] text-[#5b6670]">
              Show active subscriptions:
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={showSubscribed}
              aria-labelledby="catalog-toggle-label"
              onClick={() => setShowSubscribed((v) => !v)}
              className={`rounded-full px-3 py-1.5 font-jetbrains font-bold text-[12px] transition-colors ${
                showSubscribed ? "bg-[#1f7a6c] text-white" : "bg-[#dcd8cf] text-[#5b6670]"
              }`}
            >
              {showSubscribed ? "ON" : "OFF"}
            </button>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {visible.map((e, i) => (
            <Reveal
              key={e.name}
              delay={i * 0.05}
              className={`${cardClass} p-6 flex flex-col gap-4`}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-jetbrains text-[12px] text-[#5b6670] m-0">{e.domain}</p>
                <Tag tone={statusTone[e.status]}>{e.status.toUpperCase()}</Tag>
              </div>
              <p className="font-jetbrains font-bold text-[15px] lg:text-[16px] text-[#0a2029] m-0">
                <BreakableName>{e.name}</BreakableName>
              </p>
              <p className="font-manrope text-[14px] leading-[20px] text-[#5b6670] m-0">
                Illustrative mock — registry-driven event structures for secure ingestion environments.
              </p>
              <div className="flex items-center justify-between gap-3 mt-auto">
                <span className="font-jetbrains text-[12px] text-[#5b6670]">VER: {e.version}</span>
                <a href="#event-detail" className="font-manrope text-[14px] text-[#c44242] hover:underline">
                  View event detail
                </a>
              </div>
            </Reveal>
        ))}
      </div>
    </Section>
  );
}
