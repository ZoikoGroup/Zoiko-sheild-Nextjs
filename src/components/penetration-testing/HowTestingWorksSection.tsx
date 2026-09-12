"use client";

import React from "react";

type Stage = {
  number: string;
  title: string;
  body: string;
  output: string;
};

const STAGES: Stage[] = [
  {
    number: "01",
    title: "Authorize",
    body: "Validate owner, scope and contract authority.",
    output: "authorization record",
  },
  {
    number: "02",
    title: "Prepare",
    body: "Confirm contacts, access, environment, safety.",
    output: "readiness checklist",
  },
  {
    number: "03",
    title: "Assess",
    body: "Execute the approved testing category.",
    output: "activity and evidence refs",
  },
  {
    number: "04",
    title: "Validate",
    body: "Confirm candidates, reduce false positives.",
    output: "validated or rejected",
  },
  {
    number: "05",
    title: "Review",
    body: "Peer review, severity method, limitations.",
    output: "approved draft finding",
  },
  {
    number: "06",
    title: "Report",
    body: "Deliver executive and technical output securely.",
    output: "versioned package",
  },
  {
    number: "07",
    title: "Remediate",
    body: "You own the corrective work and exceptions.",
    output: "remediation state",
  },
  {
    number: "08",
    title: "Retest",
    body: "Validate specified changes within retest scope.",
    output: "retest result",
  },
  {
    number: "09",
    title: "Close",
    body: "Record residual, open or superseded state.",
    output: "closure record",
  },
];

const COMMUNICATIONS: { label: string; rest: string }[] = [
  {
    label: "Named roles, not names",
    rest: " — a primary technical contact and an authorization contact, by role, with an alternate.",
  },
  {
    label: "Operational notices",
    rest: " for start, end, change and degradation, each with a reference ID.",
  },
  {
    label: "Critical-finding escalation",
    rest: " with a defined criticality method and an acknowledgement state.",
  },
  {
    label: "Maintenance conflicts",
    rest: " handled by reschedule, with evidence — not by testing through them.",
  },
  {
    label: "Communication failure",
    rest: " triggers the fallback method, and a safe halt if required.",
  },
];

export default function HowTestingWorksSection() {
  return (
    <section className="border-y border-[#E0DCD3] bg-[#EEEBE7] px-5 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-5 shrink-0 bg-[#E0402F]" aria-hidden="true" />
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E0402F] sm:text-xs">
            How testing works
          </span>
        </div>

        <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-[#0B1B26] sm:text-3xl lg:text-4xl">
          Nine stages, each with an output you can point at.
        </h2>

        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[#4B5563] sm:text-base">
          The value is in disciplined authorization, coverage definition,
          evidence, review and closure — not in performative exploit detail.
          Public methodology language names recognized high-level practices only
          where they apply and are approved.
        </p>

        <ol className="grid grid-cols-1 overflow-hidden rounded-lg border border-[#E0DCD3] bg-white sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-9">
          {STAGES.map((stage) => (
            <li
              key={stage.number}
              className="border-b border-r border-[#E0DCD3] p-4 last:border-r-0"
            >
              <p className="mb-2 font-mono text-xs font-semibold leading-4 text-[#E0402F]">
                {stage.number}
              </p>
              <h3 className="mb-1.5 text-sm font-bold leading-5 text-[#0B1B26]">
                {stage.title}
              </h3>
              <p className="text-xs leading-5 text-[#4B5563]">
                {stage.body}{" "}
                <span className="text-[#0B1B26]">&rarr; {stage.output}</span>
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-[#E0DCD3] border-l-[3px] border-l-[#E0402F] bg-white p-5 sm:p-6">
            <div className="mb-4 flex size-8 items-center justify-center rounded-md bg-[#EEEBE7] font-mono text-xs text-[#0B1B26]">
              &#9724;
            </div>
            <h3 className="mb-3 text-base font-bold text-[#0B1B26] sm:text-lg">
              Emergency stop
            </h3>
            <p className="mb-4 text-sm leading-6 text-[#4B5563]">
              Named triggers, a named person who may invoke it, a confirmation,
              a stop timestamp and a reason. Resuming is a separate decision
              with its own owner, preconditions and an updated scope version.
            </p>
            <p className="text-sm leading-6 text-[#4B5563]">
              <span className="font-bold text-[#0B1B26]">Safety first.</span> If
              a required safety contact is unreachable or a stop condition
              fires, the engagement follows the approved halt rule. Testing does
              not continue merely to meet a schedule or a commercial milestone.
            </p>
          </div>

          <div className="rounded-lg border border-[#E0DCD3] bg-white p-5 sm:p-6">
            <div className="mb-4 flex size-8 items-center justify-center rounded-md bg-[#EEEBE7] font-mono text-xs text-[#0B1B26]">
              &#9671;
            </div>
            <h3 className="mb-3 text-base font-bold text-[#0B1B26] sm:text-lg">
              Communications during the engagement
            </h3>
            <ul>
              {COMMUNICATIONS.map((item) => (
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
          </div>
        </div>
      </div>
    </section>
  );
}
