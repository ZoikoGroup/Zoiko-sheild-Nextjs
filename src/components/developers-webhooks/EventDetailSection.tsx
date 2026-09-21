"use client";

import React from "react";
import Image from "next/image";
import { BreakableName, IMG, Reveal, Section, SectionHeader, cardClass } from "./shared";

export default function EventDetailSection() {
  return (
    <Section id="event-detail">
      <SectionHeader eyebrow="Schema Validation" title="Event Detail Schema & Payload Fixtures" />

      <div className="flex flex-col lg:flex-row gap-8 w-full">
        <Reveal className="flex flex-col gap-6 flex-1 min-w-0">
          <div className={`${cardClass} p-4 flex flex-col gap-1`}>
            <p className="font-manrope text-[12px] text-[#5b6670] uppercase m-0">Canonical Name</p>
            <p className="font-jetbrains font-bold text-[16px] lg:text-[18px] text-[#c44242] m-0">
              <BreakableName>event.device.unhealthy_v1</BreakableName>
            </p>
          </div>

          <div className="flex flex-col gap-2 max-w-[520px]">
            <h3 className="font-manrope font-bold text-[15px] text-[#0a2029] m-0">Explicit Ingestion Trigger</h3>
            <p className="font-manrope text-[14px] leading-[22px] text-[#5b6670] m-0">
              Fires immediately when an EDR sensor heartbeat is missing for
              over 48 hours, or the agent state transitions to disabled in the
              primary telemetry registry.
            </p>
          </div>

          <div className="bg-[#fdf1c7] rounded-[8px] px-3 py-3">
            <p className="font-manrope text-[14px] leading-[20px] text-[#b45309] m-0">
              <strong className="font-bold">Changelog (v1.4):</strong> Added optional{" "}
              <code className="font-jetbrains text-[13px]">host_serial_number</code> string to the{" "}
              <code className="font-jetbrains text-[13px]">resource</code> envelope. Backwards-compatible.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-2 w-full lg:w-[48%] xl:w-[596px] shrink-0">
          <p className="font-manrope font-bold text-[14px] text-[#0a2029] m-0">Synthetic Fixture (application/json)</p>
          <div className="relative w-full aspect-[596/397] rounded-[12px] overflow-hidden">
            <Image
              src={`${IMG}/event-detail-visual.webp`}
              alt="Engineer reviewing event payload fixtures across three monitors"
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
