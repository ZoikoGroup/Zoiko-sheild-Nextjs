"use client";

import React from "react";

type Row = {
  scenario: string;
  treatment: string;
  emphasis?: boolean;
};

const ROWS: Row[] = [
  {
    scenario: "cloud / hosting provider",
    treatment:
      "Follow the current provider testing policy and your account authority.",
  },
  {
    scenario: "CDN / WAF / managed edge",
    treatment:
      "Clarify in advance whether provider infrastructure is excluded or separately permitted.",
  },
  {
    scenario: "SaaS integration",
    treatment:
      "Provider systems are not tested without applicable authorization.",
  },
  {
    scenario: "payment / identity provider",
    treatment:
      "Approved test modes and accounts only, protecting regulated and sensitive data.",
  },
  {
    scenario: "partner API",
    treatment: "Owner and test rights confirmed separately.",
  },
  {
    scenario: "open-source dependency",
    treatment:
      "Your context is reported; disclosure is coordinated only through the approved process.",
  },
  {
    scenario: "accidental third-party finding",
    treatment:
      "Stop or limit access, preserve minimal evidence, notify the approved owner, legal and security route.",
    emphasis: true,
  },
  {
    scenario: "vulnerability in ZoikoShield",
    treatment:
      "Goes to Vulnerability Disclosure — not treated as a customer test finding.",
  },
  {
    scenario: "embargo / disclosure timing",
    treatment: "Governed by contract, legal and coordination authority.",
  },
];

const CARDS: { icon: string; title: string; body: string }[] = [
  {
    icon: "▤",
    title: "Data the engagement may encounter",
    body: "Testing can surface confidential or personal data. Handling class, access restriction and retention are defined before testing begins, and evidence is minimized against them.",
  },
  {
    icon: "◧",
    title: "How reports are protected",
    body: "Approved access, encryption, retention and delivery controls. Exact terms stay authoritative in the Trust Center and your contract rather than being restated as marketing copy.",
  },
  {
    icon: "○",
    title: "What's never on this page",
    body: "Live exploit screenshots, customer targets, real finding detail or identifiable evidence. Any example shown publicly is synthetic or redacted, and labelled as such.",
  },
];

export default function ThirdPartiesAndDataSection() {
  return (
    <section className="bg-[#F5F2EB] px-5 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-5 shrink-0 bg-[#E0402F]" aria-hidden="true" />
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E0402F] sm:text-xs">
            Third parties and data handling
          </span>
        </div>

        <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-[#0B1B26] sm:text-3xl lg:text-4xl">
          Your permission stops at your own perimeter.
        </h2>

        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[#4B5563] sm:text-base">
          Customer permission does not automatically authorize testing of
          infrastructure owned or operated by another party. When rights are
          uncertain, the activity is blocked or re-scoped.
        </p>

        {/* Mobile: stacked cards */}
        <div className="space-y-3 md:hidden">
          {ROWS.map((row) => (
            <div
              key={row.scenario}
              className="rounded-lg border border-[#E0DCD3] bg-white p-4"
            >
              <p className="mb-2 font-mono text-xs leading-5 text-[#0B1B26]">
                {row.scenario}
              </p>
              <p
                className={`text-sm leading-6 ${
                  row.emphasis
                    ? "font-semibold text-[#0B1B26]"
                    : "text-[#4B5563]"
                }`}
              >
                {row.treatment}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop: table */}
        <div className="hidden overflow-hidden rounded-lg border border-[#E0DCD3] bg-white md:block">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#EEEBE7]">
                  <th className="w-[30%] border-b border-[#E0DCD3] px-4 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#4B5563]">
                    Scenario
                  </th>
                  <th className="border-b border-[#E0DCD3] px-4 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#4B5563]">
                    Required treatment
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr
                    key={row.scenario}
                    className="border-b border-[#E0DCD3] last:border-b-0"
                  >
                    <td className="px-4 py-4 align-middle font-mono text-xs leading-5 text-[#0B1B26]">
                      {row.scenario}
                    </td>
                    <td
                      className={`px-4 py-4 align-middle text-sm leading-6 ${
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

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-lg border border-[#E0DCD3] bg-white p-5 sm:p-6"
            >
              <div className="mb-4 flex size-8 items-center justify-center rounded-md bg-[#EEEBE7] font-mono text-xs text-[#0B1B26]">
                {card.icon}
              </div>
              <h3 className="mb-2 text-base font-bold leading-6 text-[#0B1B26] sm:text-lg">
                {card.title}
              </h3>
              <p className="text-sm leading-6 text-[#4B5563]">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
