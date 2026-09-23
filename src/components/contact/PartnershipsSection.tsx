"use client";

import React from "react";
import { Eyebrow } from "./shared";

const PARTNER_TRACKS = [
  {
    title: "Technology Partners",
    description: "Map and expose telemetry indicators natively with core EDR or identity frameworks.",
  },
  {
    title: "MSSP & MDR Services",
    description: "Unify co-managed operations to remediate tenant control drift safely.",
  },
  {
    title: "Channel & Cloud Platform",
    description: "Collaborate and bundle Zoiko Shield listings on primary cloud registries.",
  },
];

export const PartnershipsSection: React.FC = () => {
  return (
    <section
      id="partnerships"
      className="w-full bg-[#F7F5F0] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-28 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="space-y-4">
          <Eyebrow>07 · PARTNERSHIP DEVELOPMENT</Eyebrow>
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-hanken leading-tight">
            Join the defensible ecosystem registry
          </h2>
          <p className="text-gray-500 text-base font-medium font-manrope">
            Configure integrations and technology connections directly with our security engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PARTNER_TRACKS.map((track) => (
            <div
              key={track.title}
              className="glass-card p-5 rounded-xl flex flex-col gap-2"
            >
              <h3 className="text-slate-900 text-base font-extrabold font-hanken">{track.title}</h3>
              <p className="text-gray-500 text-sm font-manrope leading-relaxed">{track.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
