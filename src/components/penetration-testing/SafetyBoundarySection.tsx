"use client";

import React from "react";

type Boundary = {
  action: string;
  rule: string;
  status: string;
  bar: string;
  danger?: boolean;
};

const BOUNDARIES: Boundary[] = [
  {
    action: "proof of exploitability",
    rule: "Minimum necessary validation, consistent with the agreed scope.",
    status: "Controlled",
    bar: "#3A86C8",
  },
  {
    action: "privilege change",
    rule: "Only where explicitly authorized and safely reversible.",
    status: "Approval required",
    bar: "#D97706",
  },
  {
    action: "persistence",
    rule: "Never assumed. Separately authorized, with cleanup and expiry.",
    status: "Prohibited unless explicit",
    bar: "#E0402F",
    danger: true,
  },
  {
    action: "data access",
    rule: "Synthetic or minimized evidence wherever possible.",
    status: "Restricted",
    bar: "#D97706",
  },
  {
    action: "destructive change",
    rule: "Blocked unless an exceptional controlled test plan explicitly allows it.",
    status: "Prohibited by default",
    bar: "#E0402F",
    danger: true,
  },
  {
    action: "service disruption",
    rule: "Not a standard proof mechanism.",
    status: "Prohibited / exceptional",
    bar: "#E0402F",
    danger: true,
  },
  {
    action: "credential handling",
    rule: "Test credentials stored and used under approved secret controls.",
    status: "Restricted",
    bar: "#D97706",
  },
  {
    action: "cleanup",
    rule: "Remove test artifacts, accounts and temporary access — while preserving evidence.",
    status: "Required",
    bar: "#2E7D32",
  },
];

export default function SafetyBoundarySection() {
  return (
    <section className="bg-[#0B1B26] px-5 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-5 shrink-0 bg-[#E0402F]" aria-hidden="true" />
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#93A6B8] sm:text-xs">
            Safety boundary
          </span>
        </div>

        <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
          The goal is sufficient evidence, not maximal impact.
        </h2>

        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[#93A6B8] sm:text-base">
          A finding does not become more valuable because testing caused greater
          disruption or reached more sensitive data. Every consequential action
          class has a default, and most of those defaults are &ldquo;no.&rdquo;
        </p>

        {/* Mobile: stacked cards */}
        <div className="space-y-3 md:hidden">
          {BOUNDARIES.map((item) => (
            <div
              key={item.action}
              className="rounded-lg border border-white/[0.14] bg-[#0F2331] p-4"
            >
              <div className="mb-2 flex items-center gap-2.5">
                <span
                  className="h-5 w-1 shrink-0 rounded-sm"
                  style={{ backgroundColor: item.bar }}
                  aria-hidden="true"
                />
                <span
                  className={`font-mono text-xs leading-5 ${
                    item.danger ? "text-[#F4A79B]" : "text-white"
                  }`}
                >
                  {item.action}
                </span>
              </div>
              <p className="mb-2 text-sm leading-6 text-[#93A6B8]">
                {item.rule}
              </p>
              <span
                className={`font-mono text-[10px] uppercase leading-4 tracking-wide ${
                  item.danger ? "text-[#F4A79B]" : "text-[#DDE3E8]"
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>

        {/* Desktop: table */}
        <div className="hidden overflow-hidden rounded-lg border border-white/[0.14] md:block">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Consequential action classes and their default treatment
              </caption>
              <tbody>
                {BOUNDARIES.map((item) => (
                  <tr
                    key={item.action}
                    className="border-b border-white/[0.14] bg-[#0F2331] last:border-b-0"
                  >
                    <td className="w-[26%] border-r border-white/[0.14] px-5 py-4 align-middle">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="h-6 w-1 shrink-0 rounded-sm"
                          style={{ backgroundColor: item.bar }}
                          aria-hidden="true"
                        />
                        <span
                          className={`font-mono text-xs leading-5 ${
                            item.danger ? "text-[#F4A79B]" : "text-white"
                          }`}
                        >
                          {item.action}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4 align-middle text-sm leading-5 text-[#93A6B8]">
                      {item.rule}
                    </td>
                    <td className="w-[22%] border-l border-white/[0.14] px-5 py-4 align-middle">
                      <span
                        className={`font-mono text-xs uppercase leading-4 tracking-wide ${
                          item.danger ? "text-[#F4A79B]" : "text-[#DDE3E8]"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-white/[0.14] border-l-[3px] border-l-[#E0402F] bg-[#0F2331] p-5 sm:p-6">
          <h3 className="mb-3 text-base font-bold text-white sm:text-lg">
            Language this page doesn&apos;t use
          </h3>
          <p className="text-sm leading-6 text-[#93A6B8]">
            &ldquo;Hackers on demand&rdquo; · &ldquo;unbreakable&rdquo; ·
            &ldquo;100% secure&rdquo; · &ldquo;find every flaw&rdquo; ·
            &ldquo;military grade&rdquo; · breach countdowns. Testing framed as
            spectacle creates legal ambiguity and sells the wrong thing.
            Assessor roles are described only where they&apos;re verified — no
            elite-hacker or ex-agency prestige, and no certification badge
            standing in for evidence.
          </p>
        </div>
      </div>
    </section>
  );
}
