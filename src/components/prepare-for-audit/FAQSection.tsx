"use client";

import React, { useState } from "react";

// Answers restate commitments already made elsewhere on this page (hero
// boundary, Independence table, Where to go next) — they add no new claims.
// Content owners should review before publishing.
const FAQS: { q: string; a: string }[] = [
  {
    q: "What does Prepare for Audits actually do?",
    a: "It explains how audit scope, controls, evidence, gaps, reviewer requests, packages and known limitations can be organized for review using governed records — so that preparation work is respectable rather than assumed.",
  },
  {
    q: "Do you guarantee we'll pass an audit?",
    a: "No. Audit preparation does not guarantee auditor reliance, acceptance, certification, regulator approval, legal compliance or a favourable audit outcome. Those conclusions belong to your reviewer and the relevant external authority.",
  },
  {
    q: "What is an evidence package?",
    a: "A governed bundle of evidence assembled for a stated review purpose, carrying its source, version, scope and known limitations with it. Package identity, lineage and verification are defined by Evidence Ledger & Verification.",
  },
  {
    q: "Does a verified package prove compliance?",
    a: "No. Verification shows the package's integrity and lineage within its stated completeness boundaries. It is not a compliance verdict, and it never substitutes for a reviewer's own judgment or external assurance authority.",
  },
  {
    q: "Can an external auditor use a workspace?",
    a: "A reviewer can be given access to the audit workspace. The role is labelled \"reviewer\" unless an external audit role and engagement context are verified, and access to a workspace never implies independence, reliance or acceptance.",
  },
  {
    q: "If the workspace shows everything complete, has the auditor accepted it?",
    a: "No. Acceptance is never inferred from a status or a completed task, and audit completion is never inferred from workspace closure. Acceptance requires an attributable decision with an exact stated meaning.",
  },
  {
    q: "How are gaps handled?",
    a: "Gaps stay visible. Missing, stale or partial evidence is recorded as such, with an owner and next step, rather than being hidden or rounded up so the preparation looks complete.",
  },
  {
    q: "Which frameworks are supported?",
    a: "Framework questions are answered by Framework Coverage, which is the authority for which program alignments are current. This page doesn't answer them with a logo or a list.",
  },
  {
    q: "Do you decide materiality or audit risk?",
    a: "No. Materiality, audit risk, evidence sufficiency, control significance, legal applicability and external assurance conclusions belong to authorized reviewers and your own qualified advisors.",
  },
  {
    q: "Is Continuous Assurance required?",
    a: "No. Continuous Assurance is an independent service that can support ongoing control and evidence assurance, including audit readiness, but it is not a prerequisite for anything on this page.",
  },
  {
    q: "Can AI answer audit questions for us?",
    a: "AI can retrieve, summarize and draft from cited, authorized records. There is no anonymous \"AI approved\", and human or external authority remains responsible for every consequential conclusion.",
  },
  {
    q: "How is sensitive evidence protected?",
    a: "Evidence stays inside governed records with access scoped to authorized roles, including reviewers. Current security, privacy and subprocessor detail is published in the Trust Center, which this page never overrides.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      {/* Section 10: FAQ */}
      <section className="bg-zoiko-beige w-full py-[60px] md:py-[100px] relative border-b border-[#e1ddd8]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[48px] relative w-full">
          <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[12px]">
              <div className="w-[22px] h-[1px] bg-[#e0402f] shrink-0" />
              <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase m-0 leading-none">
                Direct answers
              </p>
            </div>
            <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[36px] tracking-[-0.756px] text-[#0b2237] m-0">
              The boundary first, then the answer.
            </h2>
          </div>

          <div className="flex flex-col w-full border-t border-[#e1ddd8]">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              const panelId = `audit-faq-panel-${i}`;
              const buttonId = `audit-faq-button-${i}`;
              return (
                <div key={item.q} className="border-b border-[#e1ddd8]">
                  <h3 className="m-0">
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full py-[20px] sm:py-[24px] flex justify-between items-center gap-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-sans font-bold text-[#0b2237] text-[15px] sm:text-[16px]">
                        {item.q}
                      </span>
                      <span aria-hidden className="font-mono text-[#e0402f] text-[20px] leading-none shrink-0">
                        {isOpen ? "—" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className="pb-[24px] sm:pb-[28px] pr-8"
                  >
                    <p className="font-sans font-normal text-[#5c6b79] text-[15px] leading-[24px] m-0">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
