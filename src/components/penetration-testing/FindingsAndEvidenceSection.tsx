"use client";

import React from "react";

const RECORD_ITEMS: { label: string; rest: string }[] = [
  {
    label: "Stable finding ID",
    rest: " that survives draft, remediation and retest.",
  },
  {
    label: "Observation separated from inference",
    rest: " — what was seen, then what it means.",
  },
  {
    label: "Severity with its method, source, version and rationale",
    rest: ", never a bare number.",
  },
  {
    label: "Business context supplied by you",
    rest: ", clearly separated from assessor facts.",
  },
  {
    label: "Known limitations",
    rest: " — coverage gaps, untested variants, transient state, uncertainty.",
  },
  {
    label: "Owner and status",
    rest: ", with residual risk decided by your risk authority.",
  },
];

const STATES: { name: string; description: string }[] = [
  { name: "Candidate", description: "Not yet reportable. Validation pending." },
  {
    name: "Validated",
    description: "Evidence and scope reviewed, ready for reporting.",
  },
  {
    name: "Duplicate",
    description: "Linked to the canonical finding. No double-counting.",
  },
  {
    name: "Needs context",
    description: "Your information required. The uncertainty stays visible.",
  },
  {
    name: "Disputed",
    description: "Disagreement recorded with evidence and a reviewer.",
  },
  {
    name: "False positive",
    description: "Rejected with a reason and evidence. Not deleted.",
  },
  {
    name: "Out of scope",
    description: "Testing halted, owner notified, observation retained securely.",
  },
  {
    name: "Superseded",
    description: "Linked to the corrected or current record.",
  },
  { name: "Withdrawn", description: "Reason and approval recorded." },
  {
    name: "Unable to validate",
    description: "Limitations visible. Never promoted to certainty.",
  },
];

export default function FindingsAndEvidenceSection() {
  return (
    <section className="bg-[#F5F2EB] px-5 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-5 shrink-0 bg-[#E0402F]" aria-hidden="true" />
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E0402F] sm:text-xs">
            Findings and evidence
          </span>
        </div>

        <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-[#0B1B26] sm:text-3xl lg:text-4xl">
          Reports that stay inspectable without becoming exploit kits.
        </h2>

        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[#4B5563] sm:text-base">
          Evidence is purpose-limited and sufficient for validation, remediation
          and retest — no more than that. Collect the least sensitive evidence
          that proves the finding.
        </p>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-[#E0DCD3] bg-white p-5 sm:p-6">
            <div className="mb-4 flex size-8 items-center justify-center rounded-md bg-[#EEEBE7] font-mono text-xs text-[#0B1B26]">
              &#9707;
            </div>
            <h3 className="mb-3 text-base font-bold text-[#0B1B26] sm:text-lg">
              What a finding record carries
            </h3>
            <ul className="mb-6">
              {RECORD_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-3 border-b border-[#E0DCD3] py-2.5 last:border-b-0"
                >
                  <span
                    className="mt-2 size-2 shrink-0 rounded-[1px] border border-[#E0402F]"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-6 text-[#4B5563]">
                    <span className="font-semibold text-[#0B1B26]">
                      {item.label}
                    </span>
                    {item.rest}
                  </p>
                </li>
              ))}
            </ul>
            <div>
              <p className="mb-1 font-mono text-[10px] font-medium uppercase tracking-wider text-[#0B1B26]">
                Evidence minimization
              </p>
              <p className="break-words font-mono text-[11px] leading-5 text-[#4B5563] sm:text-xs">
                Reports don&apos;t retain passwords, full secrets, unnecessary
                personal data or production records merely because they were
                technically reachable.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-[#E0DCD3] border-t-[3px] border-t-[#E0402F] bg-white p-5 sm:p-6">
            <div className="mb-4 flex size-8 items-center justify-center rounded-md bg-[#EEEBE7] font-mono text-xs text-[#0B1B26]">
              &#8800;
            </div>
            <h3 className="mb-3 text-base font-bold text-[#0B1B26] sm:text-lg">
              Severity law
            </h3>
            <p className="mb-4 text-sm leading-6 text-[#4B5563]">
              A CVSS score, a scanner label or a successful exploit does not
              automatically determine business materiality, breach likelihood,
              regulatory significance or remediation priority. Technical
              severity, exploitability, exposure, business impact and your risk
              decision are related but distinct.
            </p>
            <p className="text-sm leading-6 text-[#4B5563]">
              <span className="font-bold text-[#0B1B26]">
                Finding count is not value.
              </span>{" "}
              Quality is measured by validated, scoped, evidenced and actionable
              records — not by maximizing the number of issues in a report.
            </p>
          </div>
        </div>

        <h3 className="mb-4 mt-10 text-lg font-bold text-[#0B1B26] sm:text-xl">
          Ten finding states — nothing is silently deleted
        </h3>

        <dl className="grid grid-cols-1 overflow-hidden rounded-lg border border-[#E0DCD3] bg-white sm:grid-cols-2 lg:grid-cols-4">
          {STATES.map((state) => (
            <div
              key={state.name}
              className="border-b border-r border-[#E0DCD3] p-4 sm:p-5"
            >
              <dt className="mb-1.5 font-mono text-sm text-[#0B1B26]">
                {state.name}
              </dt>
              <dd className="text-xs leading-5 text-[#4B5563]">
                {state.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
