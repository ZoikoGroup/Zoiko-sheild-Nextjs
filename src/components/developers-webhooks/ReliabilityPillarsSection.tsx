"use client";

import React from "react";
import { Reveal, Section, SectionHeader, cardClass } from "./shared";

const pillars = [
  { title: "Acknowledge quickly", desc: "Return a 200 OK immediately and process your operations asynchronously." },
  { title: "Idempotent consumer", desc: "Validate that every event is deduplicated by its canonical event_id." },
  { title: "Ordering tolerance", desc: "Do not assume sequence. Compare the event timestamp inside your database." },
  { title: "Selective subscriptions", desc: "Only register for events your backend is actively listening to." },
  { title: "Handle backpressure", desc: "Implement rate-limit handling on your endpoints during severe spikes." },
  { title: "Poison events handling", desc: "Safely isolate invalid payloads to dry-run queues instead of crashing." },
  { title: "Schema tolerance", desc: "Ensure your parser handles newly appended JSON schema fields gracefully." },
  { title: "Clock handling", desc: "Validate that your system clocks are synchronized with verified NTP servers." },
];

export default function ReliabilityPillarsSection() {
  return (
    <Section>
      <SectionHeader eyebrow="System Tolerance" title="8 Pillars of Reliable Receptor Engineering" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.04} className={`${cardClass} p-5 flex flex-col gap-2`}>
            <h3 className="font-hanken font-extrabold text-[16px] text-[#0a2029] m-0">{p.title}</h3>
            <p className="font-manrope text-[14px] leading-[20px] text-[#5b6670] m-0">{p.desc}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
