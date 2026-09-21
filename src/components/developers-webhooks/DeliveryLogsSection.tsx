"use client";

import React from "react";
import { BreakableName, Reveal, Section, SectionHeader, Tag, cardClass, tableHeadCell, type Tone } from "./shared";

const logs: {
  id: string;
  event: string;
  status: string;
  tone: Tone;
  latency: string;
  time: string;
  meta: string;
  retrying: boolean;
}[] = [
  {
    id: "dly_9a102bc",
    event: "event.device.unhealthy_v1",
    status: "200 OK",
    tone: "green",
    latency: "14.5ms",
    time: "2026-02-14 03:45:21",
    meta: "Attempt 1 (Success)",
    retrying: false,
  },
  {
    id: "dly_8b301cd",
    event: "event.auth.session_breach_v1",
    status: "408 Timeout",
    tone: "amber",
    latency: "3000ms",
    time: "2026-02-14 03:40:11",
    meta: "Retrying (Attempt 2 scheduled)",
    retrying: true,
  },
];

const headers = ["Delivery ID", "Event Type", "Status", "Latency", "Dispatch Time (UTC)", "Attempt Meta"];

export default function DeliveryLogsSection() {
  return (
    <Section>
      <SectionHeader eyebrow="Audit Ledger" title="Delivery Logs" />

      {/* Mobile / tablet: stacked cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:hidden">
        {logs.map((l) => (
          <Reveal key={l.id} className={`${cardClass} p-5 flex flex-col gap-3`}>
            <div className="flex items-center justify-between gap-3">
              <span className="font-jetbrains text-[13px] text-[#c44242]">{l.id}</span>
              <Tag tone={l.tone}>{l.status}</Tag>
            </div>
            <p className="font-jetbrains text-[13px] text-[#0a2029] m-0">
              <BreakableName>{l.event}</BreakableName>
            </p>
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 m-0 pt-3 border-t border-[rgba(18,59,76,0.1)] font-jetbrains text-[12px]">
              <dt className="text-[#5b6670] uppercase">Latency</dt>
              <dd className="m-0 text-[#0a2029]">{l.latency}</dd>
              <dt className="text-[#5b6670] uppercase">Dispatched</dt>
              <dd className="m-0 text-[#0a2029]">{l.time} UTC</dd>
              <dt className="text-[#5b6670] uppercase">Attempt</dt>
              <dd className={`m-0 ${l.retrying ? "text-[#b45309]" : "text-[#5b6670]"}`}>{l.meta}</dd>
            </dl>
          </Reveal>
        ))}
      </div>

      {/* Desktop: table */}
      <Reveal className={`hidden lg:block ${cardClass} overflow-hidden w-full`}>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#f0ede6]">
              {headers.map((h) => (
                <th key={h} className={tableHeadCell}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {logs.map((l) => (
              <tr key={l.id} className="border-t border-[rgba(18,59,76,0.1)]">
                <td className="px-4 py-4 font-jetbrains text-[13px] text-[#c44242]">{l.id}</td>
                <td className="px-4 py-4 font-jetbrains text-[13px] text-[#0a2029]">{l.event}</td>
                <td className="px-4 py-4">
                  <Tag tone={l.tone}>{l.status}</Tag>
                </td>
                <td className="px-4 py-4 font-jetbrains text-[13px] text-[#5b6670]">{l.latency}</td>
                <td className="px-4 py-4 font-jetbrains text-[13px] text-[#5b6670]">{l.time}</td>
                <td className={`px-4 py-4 font-jetbrains text-[13px] ${l.retrying ? "text-[#b45309]" : "text-[#5b6670]"}`}>
                  {l.meta}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </Section>
  );
}
