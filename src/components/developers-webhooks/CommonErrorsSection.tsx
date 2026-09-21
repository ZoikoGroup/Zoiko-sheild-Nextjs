"use client";

import React from "react";
import { Reveal, Section, SectionHeader, cardClass } from "./shared";

const errors = [
  {
    title: "Signature Mismatch",
    desc: "Verify you are decoding the raw request body payload before calculating the HMAC value. Avoid using formatted JSON structures.",
  },
  {
    title: "Timeouts & Latency",
    desc: "Endpoints exceeding 3000ms are severed to prevent backpressure overloads. Immediately defer deep calculations to message queues.",
  },
  {
    title: "Repeated Sensor Alerts",
    desc: "Check if your receptor returned a 2xx correctly. Intermittent delays cause retries despite success. Implement strict deduplication checks.",
  },
];

export default function CommonErrorsSection() {
  return (
    <Section alt>
      <SectionHeader eyebrow="Diagnostic Paths" title="Common Errors & Escalation Procedures" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {errors.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.06} className={`${cardClass} p-5 flex flex-col gap-2`}>
            <h3 className="font-jetbrains font-bold text-[14px] text-[#c44242] uppercase m-0">{e.title}</h3>
            <p className="font-manrope text-[14px] leading-[20px] text-[#5b6670] m-0">{e.desc}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
