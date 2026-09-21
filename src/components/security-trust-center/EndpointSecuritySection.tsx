"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { Reveal, Section, SectionHeader } from "./shared";

const steps = [
  { label: "MDM Compliance State", state: "State: Compliant", detail: "Policy checks succeeded 1h ago", variant: "light" as const },
  { label: "EDR Agent Telemetry", state: "State: Unhealthy", detail: "Sensor has not communicated in 48h", variant: "danger" as const },
  { label: "Zoiko Shield Core Rule", state: "Posturing Breach Flagged", detail: "Access suspended at auth boundary", variant: "dark" as const },
];

export default function EndpointSecuritySection() {
  return (
    <Section>
      <SectionHeader eyebrow="Endpoint Security" title="Evidence-driven device state and compliance" />

      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-6 w-full">
        {steps.map((s, i) => {
          const dark = s.variant === "dark";
          return (
            <React.Fragment key={s.label}>
              {i > 0 && (
                <ChevronRight className="size-5 text-[#c44242] shrink-0 self-center rotate-90 lg:rotate-0" />
              )}
              <Reveal
                delay={i * 0.08}
                className={`flex-1 min-w-0 rounded-[12px] p-5 flex flex-col gap-2 ${
                  dark ? "bg-[#0f2440]" : "bg-white border border-[rgba(18,59,76,0.1)]"
                }`}
              >
                <p
                  className={`font-jetbrains font-bold text-[11px] uppercase m-0 ${
                    dark ? "text-[#e0967d]" : "text-[#c44242]"
                  }`}
                >
                  {s.label}
                </p>
                <p
                  className={`font-hanken font-extrabold text-[20px] m-0 ${
                    dark ? "text-white" : s.variant === "danger" ? "text-[#a8323a]" : "text-[#0a2029]"
                  }`}
                >
                  {s.state}
                </p>
                <p className={`font-manrope text-[13px] m-0 ${dark ? "text-[#a9bcd0]" : "text-[#5b6670]"}`}>
                  {s.detail}
                </p>
              </Reveal>
            </React.Fragment>
          );
        })}
      </div>
    </Section>
  );
}
