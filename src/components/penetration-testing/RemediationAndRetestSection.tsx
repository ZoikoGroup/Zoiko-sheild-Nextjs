"use client";

import React from "react";

type Source = "per-contract" | "engagement" | "customer" | "assessor" | "if-authorized" | "always";

type Row = {
  field: string;
  definition: string;
  source: Source;
  sourceLabel: string;
};

const SOURCE_STYLES: Record<Source, string> = {
  "per-contract":
    "border-dashed border-[#C7C1B6] bg-transparent text-[#6B7280]",
  engagement: "border-[#BFE3C4] bg-[#F1FAF2] text-[#2E7D32]",
  customer: "border-[#BFE3C4] bg-[#F1FAF2] text-[#2E7D32]",
  assessor: "border-[#BFE3C4] bg-[#F1FAF2] text-[#2E7D32]",
  "if-authorized": "border-[#F0D9A8] bg-[#FDF6E7] text-[#B4700A]",
  always: "border-[#BFE3C4] bg-[#F1FAF2] text-[#2E7D32]",
};

const SOURCE_MARKS: Record<Source, string> = {
  "per-contract": "—",
  engagement: "●",
  customer: "●",
  assessor: "●",
  "if-authorized": "◐",
  always: "●",
};

const ROWS: Row[] = [
  {
    field: "eligibility",
    definition: "Included, add-on, separate quote, unavailable or expired.",
    source: "per-contract",
    sourceLabel: "Per contract",
  },
  {
    field: "finding scope",
    definition: "Specific finding IDs and the affected assets and versions.",
    source: "engagement",
    sourceLabel: "Engagement",
  },
  {
    field: "prerequisite",
    definition:
      "You confirm remediation is deployed and the environment is ready.",
    source: "customer",
    sourceLabel: "Customer",
  },
  {
    field: "method",
    definition:
      "Validation sufficient for, and consistent with, the original issue.",
    source: "assessor",
    sourceLabel: "Assessor",
  },
  {
    field: "result",
    definition:
      "Resolved · partially resolved · not resolved · unable to validate · out of scope.",
    source: "assessor",
    sourceLabel: "Assessor",
  },
  {
    field: "regression note",
    definition:
      "Whether related areas were checked — only where that was authorized.",
    source: "if-authorized",
    sourceLabel: "If authorized",
  },
  {
    field: "new issue",
    definition: "Recorded separately. Never silently folded into the old finding.",
    source: "always",
    sourceLabel: "Always",
  },
  {
    field: "closure",
    definition: "A technical result is not risk acceptance. Your authority decides that.",
    source: "customer",
    sourceLabel: "Customer",
  },
  {
    field: "expiry",
    definition:
      "Retest window and terms, where commercial authority approves them.",
    source: "per-contract",
    sourceLabel: "Per contract",
  },
];

export default function RemediationAndRetestSection() {
  return (
    <section className="border-y border-[#E0DCD3] bg-[#EEEBE7] px-5 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-5 shrink-0 bg-[#E0402F]" aria-hidden="true" />
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E0402F] sm:text-xs">
            Remediation and retest
          </span>
        </div>

        <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-[#0B1B26] sm:text-3xl lg:text-4xl">
          &ldquo;Passed retest&rdquo; is a narrower statement than it sounds.
        </h2>

        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[#4B5563] sm:text-base">
          It means the specified validation no longer reproduced the finding
          under the retest conditions. It does not prove the system is
          vulnerability-free, compliant, or secure against future threats.
        </p>

        {/* Mobile: stacked cards */}
        <div className="space-y-3 md:hidden">
          {ROWS.map((row) => (
            <div
              key={row.field}
              className="rounded-lg border border-[#E0DCD3] bg-white p-4"
            >
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs leading-5 text-[#0B1B26]">
                  {row.field}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded border px-2 py-1 font-mono text-[10px] uppercase tracking-wide ${
                    SOURCE_STYLES[row.source]
                  }`}
                >
                  <span aria-hidden="true">{SOURCE_MARKS[row.source]}</span>
                  {row.sourceLabel}
                </span>
              </div>
              <p className="text-sm leading-6 text-[#4B5563]">
                {row.definition}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop: table */}
        <div className="hidden overflow-hidden rounded-lg border border-[#E0DCD3] bg-white md:block">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#0B1B26]">
                  <th className="w-[20%] px-4 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#93A6B8]">
                    Retest field
                  </th>
                  <th className="px-4 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-white">
                    Definition
                  </th>
                  <th className="w-[16%] px-4 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#93A6B8]">
                    Source
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr
                    key={row.field}
                    className="border-b border-[#E0DCD3] last:border-b-0"
                  >
                    <td className="px-4 py-4 align-middle font-mono text-xs leading-5 text-[#0B1B26]">
                      {row.field}
                    </td>
                    <td className="px-4 py-4 align-middle text-sm leading-6 text-[#4B5563]">
                      {row.definition}
                    </td>
                    <td className="px-4 py-4 align-middle">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded border px-2 py-1 font-mono text-[10px] uppercase tracking-wide ${
                          SOURCE_STYLES[row.source]
                        }`}
                      >
                        <span aria-hidden="true">
                          {SOURCE_MARKS[row.source]}
                        </span>
                        {row.sourceLabel}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-4 max-w-4xl text-sm leading-6 text-[#4B5563]">
          <span className="font-bold text-[#0B1B26]">
            Retests are not automatic or unlimited
          </span>{" "}
          unless your approved commercial terms say so. Remediation itself is
          your work, with your owner and your change control — the assessor
          informs it and validates the result.
        </p>
      </div>
    </section>
  );
}
