"use client";

import React from "react";
import { Eyebrow } from "./shared";

const OFFICES = [
  {
    label: "GLOBAL HEADQUARTERS",
    city: "Sacramento, California",
    lines: ["1401 21st Street, Suite R", "Sacramento, California, United States"],
    status: "STATUS: Registered Legal Office Only · No walk-in support",
  },
  {
    label: "EUROPEAN HEADQUARTERS",
    city: "London, United Kingdom",
    lines: ["167-169 Great Portland Street, 5th Floor", "London, W1W 5PF, United Kingdom"],
    status: "STATUS: Active European Registry · Mail only",
  },
];

export const VerifiedLocationsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F7F5F0] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-28">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="space-y-4">
          <Eyebrow>11 · VERIFIED LOCATIONS</Eyebrow>
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-hanken leading-tight">
            Global Headquarters &amp; Registered Offices
          </h2>
          <p className="text-gray-500 text-base font-medium font-manrope">
            In accordance with legal and compliance guidelines, we maintain verified registered corporate office
            centers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OFFICES.map((office) => (
            <address
              key={office.city}
              className="not-italic p-5 sm:p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 flex flex-col gap-3"
            >
              <span className="text-red-500 text-sm sm:text-lg font-medium font-jetbrains uppercase">{office.label}</span>
              <h3 className="text-slate-900 text-2xl font-bold font-hanken">{office.city}</h3>
              <div className="text-gray-500 text-sm font-manrope leading-relaxed">
                {office.lines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
              <div className="pt-3 mt-1 border-t border-cyan-950/10 text-slate-400 text-xs font-jetbrains">
                {office.status}
              </div>
            </address>
          ))}
        </div>
      </div>
    </section>
  );
};
