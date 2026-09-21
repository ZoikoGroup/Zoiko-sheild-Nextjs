"use client";

import React from "react";
import { Reveal, Section, SectionHeader, cardClass } from "./shared";

const steps = [
  { title: "Choose events", desc: "Select granular events from our deterministic catalog mapping." },
  { title: "Add HTTPS endpoint", desc: "Configure your secure endpoint URL. Must return TLS 1.3 compliance." },
  { title: "Store secret", desc: "Securely retrieve the unique signing key to persist in environment stores." },
  { title: "Verify signatures", desc: "Match payload signatures using the exact raw body contract." },
  { title: "Return 2xx response", desc: "Return success quickly within 3000ms, then queue async processes." },
  { title: "Deduplicate", desc: "Protect downstream logic using the unique event_id contract header." },
  { title: "Test with simulator", desc: "Utilize the testing panel to send mock events and debug headers." },
  { title: "Monitor delivery logs", desc: "Analyze telemetry, latency profiles, and retry events continuously." },
];

export default function GettingStartedSection() {
  return (
    <Section alt>
      <SectionHeader eyebrow="Getting Started" title="Deploy your first integration pipeline in 8 steps" />

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-0 p-0 list-none w-full">
        {steps.map((s, i) => (
          <li key={s.title}>
            <Reveal delay={i * 0.04} className={`${cardClass} p-5 flex flex-col gap-3 h-full`}>
              <span className="font-jetbrains font-extrabold text-[20px] text-[#c44242]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-hanken font-extrabold text-[16px] text-[#0a2029] m-0">{s.title}</h3>
              <p className="font-manrope text-[14px] leading-[20px] text-[#5b6670] m-0">{s.desc}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
