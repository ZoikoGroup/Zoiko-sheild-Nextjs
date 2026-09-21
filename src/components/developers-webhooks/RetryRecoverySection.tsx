"use client";

import React from "react";
import { Reveal, Section, SectionHeader, cardClass } from "./shared";

const patterns = [
  {
    title: "Automatic Backoff Contract",
    desc: "Failing dispatches are automatically retried up to 5 times. Our exponential backoff begins at a 15-second interval and scales up to 12 hours. Retries cease immediately upon any 2xx response.",
  },
  {
    title: "Manual Recovery Window",
    desc: 'Failed deliveries are held in the secure audit registry for 7 days. Developers can use the "Replay Delivery" button on the log timeline to trigger an immediate, manual backpressure-compliant dispatch.',
  },
];

export default function RetryRecoverySection() {
  return (
    <Section alt>
      <SectionHeader eyebrow="Backoff Policy" title="Retry, Redelivery & Recovery Patterns" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        {patterns.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className={`${cardClass} p-6 flex flex-col gap-3`}>
            <h3 className="font-hanken font-extrabold text-[18px] text-[#0a2029] m-0">{p.title}</h3>
            <p className="font-manrope text-[14px] leading-[21px] text-[#5b6670] m-0">{p.desc}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
