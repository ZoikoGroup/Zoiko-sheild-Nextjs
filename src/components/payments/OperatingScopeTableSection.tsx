"use client";

import React from "react";

interface ScopeRow {
  dimension: string;
  established: string;
  neverInferred: string;
  isHighlighted?: boolean;
}

const SCOPE_ROWS: ScopeRow[] = [
  {
    dimension: "entity category",
    established: "Declared legal or operating entity, with a source and owner.",
    neverInferred: "Company name or website content.",
  },
  {
    dimension: "business activity",
    established:
      "Payments, acquiring, issuing, merchant, gateway, insurance, brokerage or claims service \u2014 when declared.",
    neverInferred: "Sector page visit or product interest.",
  },
  {
    dimension: "product / service",
    established:
      "Named customer systems, in an authenticated or gated context only.",
    neverInferred: "Anything on a public page.",
  },
  {
    dimension: "jurisdiction",
    established: "Authoritative input, for legal relevance.",
    neverInferred: "IP address or company registration.",
    isHighlighted: true,
  },
  {
    dimension: "environment",
    established:
      "Production or non-production, cloud, on-prem or third party, with boundaries.",
    neverInferred: "Integration presence.",
  },
  {
    dimension: "data classes",
    established:
      "Payment and account, policyholder, claim, employee, secrets, telemetry \u2014 from the approved taxonomy.",
    neverInferred: 'Assumption about what a sector "usually" holds.',
  },
  {
    dimension: "criticality",
    established: "Your approved method and your owner.",
    neverInferred: "Transaction volume or brand recognition.",
  },
  {
    dimension: "decision authority",
    established:
      "Named customer, provider, legal or professional roles for each consequential decision.",
    neverInferred: "Who happens to be logged in.",
  },
  {
    dimension: "unknowns",
    established: "Missing, stale and conflicting scope values stay visible.",
    neverInferred: "\u2014",
  },
];

export default function OperatingScopeTableSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#E04F2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
                OPERATING SCOPE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Every sector statement starts with declared context.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Generic sector copy collapses materially different roles. A
              processor, a merchant, a broker and a TPA face different
              obligations, so nothing here is valid outside its recorded entity,
              activity, system, jurisdiction, period and authority.
            </p>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E2E8F0] bg-[#EEEBE7]">
                  <th className="py-4 px-6 text-[10px] font-mono font-bold tracking-widest text-[#64748B] uppercase w-1/4">
                    SCOPE DIMENSION
                  </th>
                  <th className="py-4 px-6 text-[10px] font-mono font-bold tracking-widest text-[#64748B] uppercase w-2/5">
                    HOW IT&apos;S ESTABLISHED
                  </th>
                  <th className="py-4 px-6 text-[10px] font-mono font-bold tracking-widest text-[#64748B] uppercase w-7/20">
                    NEVER INFERRED FROM
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {SCOPE_ROWS.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#FAFAF8]/50 transition-colors"
                  >
                    <td className="py-5 px-6 text-xs sm:text-sm font-semibold text-[#0F172A] font-mono">
                      {row.dimension}
                    </td>
                    <td className="py-5 px-6 text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {row.established}
                    </td>
                    <td className="py-5 px-6 text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {row.isHighlighted ? (
                        <span className="font-bold text-[#0F172A]">
                          {row.neverInferred}
                        </span>
                      ) : (
                        row.neverInferred
                      )}
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
