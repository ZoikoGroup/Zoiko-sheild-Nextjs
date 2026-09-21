"use client";

import React from "react";
import { Reveal, Section, SectionHeader } from "./shared";

const items = [
  {
    q: "Does Zoiko Shield replace Defender?",
    a: "No. Zoiko Shield is an augmented compliance and evidence monitoring layer. We process telemetry from Defender but do not act as an EDR agent.",
  },
  {
    q: "What is the data residency route?",
    a: "All evidence processing occurs strictly within your chosen deployment region (US-East, EU-Frankfurt, etc.). No customer payload is cached outside.",
  },
  {
    q: "What happens if consent is revoked?",
    a: "Zoiko Shield transitions gracefully to a suspended, degraded state. Your historical compliance ledger traces are locked and kept structurally intact.",
  },
  {
    q: "Are there write capabilities?",
    a: "None. The Azure App registrations require strict read-only scopes. No active tenant configuration or security state can be mutated by Zoiko.",
  },
];

export default function ProcurementFaqSection() {
  return (
    <Section alt>
      <SectionHeader
        eyebrow="Procurement Compliance"
        title="Security Architecture & Procurement FAQ"
        description="Answers to key structural questions regarding data privacy boundaries and system permissions."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {items.map((item, i) => (
          <Reveal key={item.q} delay={i * 0.06} className="bg-white rounded-[12px] p-5 flex flex-col gap-2">
            <h3 className="font-hanken font-extrabold text-[16px] text-[#0a2029] m-0">{item.q}</h3>
            <p className="font-manrope text-[14px] leading-[20px] text-[#5b6670] m-0">{item.a}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
