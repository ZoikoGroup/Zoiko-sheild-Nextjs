"use client";

import React from "react";

type Row = {
  control: string;
  minimumRecord: string;
  treatment: string;
  emphasis?: boolean;
};

const ROWS: Row[] = [
  {
    control: "authorizing organization",
    minimumRecord:
      "Legal or operating entity, the authorized role, and evidence of that authority.",
    treatment:
      "We explain the requirement. We never assume the requester can authorize.",
  },
  {
    control: "target ownership",
    minimumRecord: "Owner or provider approval wherever it's required.",
    treatment: "Third-party, cloud and hosting boundaries stay visible.",
  },
  {
    control: "scope version",
    minimumRecord:
      "Assets and categories, environment, dates and exclusions.",
    treatment: "Scope is versioned, and the version is part of the record.",
  },
  {
    control: "rules of engagement",
    minimumRecord:
      "Allowed and prohibited activity classes plus safety constraints.",
    treatment: "Conceptual summary only — no public attack recipes.",
  },
  {
    control: "testing window",
    minimumRecord: "Approved periods, time zone and maintenance restrictions.",
    treatment: "No 24/7 permission is invented.",
    emphasis: true,
  },
  {
    control: "emergency stop",
    minimumRecord: "Named triggers, contact, and halt or resume authority.",
    treatment: "A persistent safety disclosure, not a footnote.",
  },
  {
    control: "communications",
    minimumRecord: "Operational contacts, escalation and secure channels.",
    treatment: "No personal contact details are published anywhere public.",
  },
  {
    control: "change approval",
    minimumRecord: "Who may add or remove assets and methods.",
    treatment: "No scope creep through an informal chat message.",
  },
];

export default function AuthorizationAndRulesSection() {
  return (
    <section className="border-y border-[#E0DCD3] bg-[#EEEBE7] px-5 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-5 shrink-0 bg-[#E0402F]" aria-hidden="true" />
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E0402F] sm:text-xs">
            Authorization and rules of engagement
          </span>
        </div>

        <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-[#0B1B26] sm:text-3xl lg:text-4xl">
          Testing cannot begin from marketing consent.
        </h2>

        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[#4B5563] sm:text-base">
          A signed commercial document is not automatically sufficient technical
          authorization. It has to identify the relevant authority, the scope,
          the conditions and any third-party constraints — and when authority is
          uncertain, testing is blocked.
        </p>

        {/* Mobile: stacked cards */}
        <div className="space-y-3 md:hidden">
          {ROWS.map((row) => (
            <div
              key={row.control}
              className="rounded-lg border border-[#E0DCD3] bg-white p-4"
            >
              <p className="mb-3 font-mono text-xs leading-5 text-[#0B1B26]">
                {row.control}
              </p>
              <dl className="space-y-3">
                <div>
                  <dt className="mb-0.5 font-mono text-[10px] uppercase tracking-wider text-[#4B5563]">
                    Minimum record
                  </dt>
                  <dd className="text-sm leading-6 text-[#4B5563]">
                    {row.minimumRecord}
                  </dd>
                </div>
                <div>
                  <dt className="mb-0.5 font-mono text-[10px] uppercase tracking-wider text-[#4B5563]">
                    How this page treats it
                  </dt>
                  <dd
                    className={`text-sm leading-6 ${
                      row.emphasis
                        ? "font-semibold text-[#0B1B26]"
                        : "text-[#4B5563]"
                    }`}
                  >
                    {row.treatment}
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        {/* Desktop: table */}
        <div className="hidden overflow-hidden rounded-lg border border-[#E0DCD3] bg-white md:block">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#EEEBE7]">
                  <th className="w-[26%] border-b border-[#E0DCD3] px-4 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#4B5563]">
                    Control
                  </th>
                  <th className="w-[37%] border-b border-[#E0DCD3] px-4 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#4B5563]">
                    Minimum record
                  </th>
                  <th className="w-[37%] border-b border-[#E0DCD3] px-4 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#4B5563]">
                    How this page treats it
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.control} className="border-b border-[#E0DCD3] last:border-b-0">
                    <td className="px-4 py-4 align-top font-mono text-xs leading-5 text-[#0B1B26]">
                      {row.control}
                    </td>
                    <td className="px-4 py-4 align-top text-sm leading-6 text-[#4B5563]">
                      {row.minimumRecord}
                    </td>
                    <td
                      className={`px-4 py-4 align-top text-sm leading-6 ${
                        row.emphasis
                          ? "font-semibold text-[#0B1B26]"
                          : "text-[#4B5563]"
                      }`}
                    >
                      {row.treatment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
