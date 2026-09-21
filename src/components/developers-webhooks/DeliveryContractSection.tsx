"use client";

import React from "react";
import { Reveal, Section, SectionHeader } from "./shared";

const guaranteed = [
  "At-least-once delivery retry over designated interval.",
  "Cryptographically signed payloads utilizing HMAC-SHA256.",
  "Valid TLS 1.2 or 1.3 handshake required on endpoint receptor.",
];

const notGuaranteed = [
  "Exactly-once delivery (always implement idempotent consumers).",
  "Strict temporal ordering of distinct message packets.",
  "Instantaneous routing guarantees under multi-source alert spikes.",
];

const attributes = [
  { name: "Transport Protocol", value: "HTTPS POST, Content-Type: application/json" },
  { name: "Acknowledgment Window", value: "Success return within 3000ms threshold" },
  { name: "Default Retries", value: "5 attempts over 24h timeline (exponential backoff)" },
];

function BulletCard({
  title,
  items,
  color,
}: {
  title: string;
  items: string[];
  color: string;
}) {
  return (
    <div className="bg-white rounded-[12px] border p-6 flex flex-col gap-3 h-full" style={{ borderColor: color }}>
      <h3 className="font-hanken font-extrabold text-[18px] m-0" style={{ color }}>
        {title}
      </h3>
      <ul className="flex flex-col gap-1.5 m-0 p-0 list-none">
        {items.map((item) => (
          <li key={item} className="flex gap-2 font-manrope text-[14px] leading-[20px] text-[#5b6670]">
            <span aria-hidden>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DeliveryContractSection() {
  return (
    <Section className="!gap-10">
      <SectionHeader
        eyebrow="The Data Protocol"
        title="Delivery Model & Technical Contract"
        description="All webhook communications follow strict schemas. These contracts dictate retry behavior, latency bounds, and payload properties."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        <Reveal>
          <BulletCard title="Guaranteed Capabilities" items={guaranteed} color="#1f7a6c" />
        </Reveal>
        <Reveal delay={0.08}>
          <BulletCard title="Not Guaranteed (Do Not Design For)" items={notGuaranteed} color="#a8323a" />
        </Reveal>
      </div>

      <Reveal className="w-full border border-[rgba(18,59,76,0.1)] rounded-[12px] overflow-hidden">
        <div className="hidden sm:flex bg-[#f0ede6] px-4 py-4">
          <p className="w-[240px] shrink-0 font-jetbrains font-bold text-[12px] text-[#0a2029] m-0">CONTRACT ATTRIBUTE</p>
          <p className="flex-1 font-jetbrains font-bold text-[12px] text-[#0a2029] m-0">ENGINEERING RUNTIME VALUE</p>
        </div>
        {attributes.map((a) => (
          <div
            key={a.name}
            className="bg-white border-t border-[rgba(18,59,76,0.1)] first:border-t-0 sm:first:border-t px-4 py-4 flex flex-col sm:flex-row gap-1 sm:gap-0"
          >
            <p className="sm:w-[240px] shrink-0 font-manrope font-semibold text-[14px] text-[#0a2029] m-0">{a.name}</p>
            <p className="flex-1 font-jetbrains text-[12px] leading-[20px] text-[#5b6670] m-0 break-words">{a.value}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
