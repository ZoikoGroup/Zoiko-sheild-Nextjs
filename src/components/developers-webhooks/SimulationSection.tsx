"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IMG, Reveal, Section, SectionHeader } from "./shared";

const templates = [
  "event.device.unhealthy_v1",
  "event.auth.session_breach_v1",
  "event.directory.policy_drift_v1",
];

const outcomes = [
  { value: "200", label: "Verify success path (Returns 200 OK)", result: "200 OK — delivered in 14.5ms, no retry scheduled." },
  { value: "408", label: "Simulate timeout (Returns 408)", result: "408 Timeout — endpoint exceeded 3000ms; attempt 2 scheduled with backoff." },
  { value: "401", label: "Simulate signature failure (Returns 401)", result: "401 Unauthorized — HMAC mismatch; verify you hash the raw request body." },
];

const fieldClass =
  "w-full bg-white border border-[rgba(18,59,76,0.1)] rounded-[8px] px-3 py-3 text-[14px] text-[#0a2029] outline-none focus:border-[#1f7a6c] focus:ring-2 focus:ring-[#1f7a6c]/20";

export default function SimulationSection() {
  const [template, setTemplate] = useState<string>("event.device.unhealthy_v1");
  const [outcome, setOutcome] = useState("200");
  const [result, setResult] = useState<string | null>(null);

  return (
    <Section alt>
      <SectionHeader eyebrow="Simulation Panel" title="Send Test Simulation" />

      <div className="flex flex-col lg:flex-row gap-8 w-full">
        <Reveal className="flex-1 min-w-0">
          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              const o = outcomes.find((x) => x.value === outcome)!;
              setResult(`Simulated ${template}: ${o.result}`);
            }}
          >
            <label className="flex flex-col gap-2">
              <span className="font-manrope font-bold text-[14px] text-[#0a2029]">1. Select Target Event Template</span>
              <select
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
                className={`${fieldClass} font-jetbrains`}
              >
                {templates.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-manrope font-bold text-[14px] text-[#0a2029]">2. Targeted Simulation Outcome</span>
              <select
                value={outcome}
                onChange={(e) => setOutcome(e.target.value)}
                className={`${fieldClass} font-manrope`}
              >
                {outcomes.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="submit"
              className="w-full px-5 py-3 rounded-[8px] bg-[#c44242] hover:bg-[#b23636] transition-colors font-manrope font-bold text-[15px] text-white"
            >
              Dispatch Test Simulation Payload
            </button>
            {result && (
              <p role="status" className="font-jetbrains text-[12px] leading-[18px] text-[#0a2029] bg-white border border-[rgba(18,59,76,0.1)] rounded-[8px] px-3 py-2.5 m-0 break-words">
                {result}
              </p>
            )}
          </form>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-2 w-full lg:w-[48%] xl:w-[596px] shrink-0">
          <p className="font-manrope font-bold text-[14px] text-[#0a2029] m-0">
            Simulation Dispatch Outcome (Historical Registry output)
          </p>
          <div className="relative w-full aspect-[596/254] rounded-[12px] overflow-hidden">
            <Image
              src={`${IMG}/simulation-visual.webp`}
              alt="Engineer testing hardware against simulated webhook payloads"
              fill
              sizes="(max-width: 1024px) 100vw, 596px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
