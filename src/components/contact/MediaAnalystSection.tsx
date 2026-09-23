"use client";

import React from "react";
import { Eyebrow } from "./shared";

const MEDIA_CARDS = [
  {
    title: "Analyst Briefings",
    description: "Schedule continuous research updates, data-drift matrix models, and market segment questions.",
  },
  {
    title: "Speaking Requests",
    description: "Request corporate participation at verified cybersecurity and trust-centered panel architectures.",
  },
];

export const MediaAnalystSection: React.FC = () => {
  return (
    <section
      id="media-analyst"
      className="w-full bg-[#F0EDE6] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-28 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
        <div className="flex-1 max-w-[500px] flex flex-col items-start gap-6">
          <Eyebrow>08 · MEDIA &amp; ANALYST ENGAGEMENT</Eyebrow>
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-hanken leading-tight">
            Press briefings &amp; analyst operations
          </h2>
          <p className="text-gray-500 text-base font-normal font-manrope leading-6">
            Verify platform telemetry, research briefs, and speaker availability. We coordinate verified inquiries
            with our corporate communications team.
          </p>
        </div>

        <div className="w-full lg:w-[56%] lg:max-w-[656px] shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {MEDIA_CARDS.map((card) => (
            <div key={card.title} className="p-5 bg-white rounded-xl flex flex-col gap-2">
              <h3 className="text-slate-900 text-lg font-extrabold font-hanken">{card.title}</h3>
              <p className="text-gray-500 text-sm font-manrope leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
