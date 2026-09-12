"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type Assessment = {
  tab: string;
  title: string;
  description: string;
  prerequisites: string;
  note: string;
};

const ASSESSMENTS: Assessment[] = [
  {
    tab: "External exposure",
    title: "Assess agreed internet-facing systems.",
    description:
      "Scope confirmation comes first: which addresses and services are yours to authorize, which sit behind a provider, and which are explicitly excluded.",
    prerequisites:
      "Confirmed asset ownership · authorizing role identified · provider testing policy checked where edge infrastructure is involved · agreed testing window.",
    note: "Anything discovered during preparation that isn't on the authorized list stays out of scope until it's approved.",
  },
  {
    tab: "Application / API",
    title: "Assess an agreed application or API surface.",
    description:
      "Testing follows the roles, functions and data paths you authorize — including which environments, accounts and integrations are in scope and which are not.",
    prerequisites:
      "Environment identified · test accounts and roles provisioned · rate and volume constraints agreed · data handling class confirmed.",
    note: "Test accounts are provisioned by you. Accounts are not created, escalated or shared outside the approved set.",
  },
  {
    tab: "Cloud / identity",
    title: "Review an authorized cloud tenancy or identity configuration.",
    description:
      "Provider testing policy and your account authority are checked first. Configuration review and permitted testing are separate activities with separate approvals.",
    prerequisites:
      "Tenancy or account owner confirmed · provider testing policy checked · read access scope agreed · identity boundary documented.",
    note: "Provider-owned infrastructure stays excluded unless the provider's policy and your account authority both permit it.",
  },
  {
    tab: "Internal / assumed breach",
    title: "Assess what an authorized starting position can reach.",
    description:
      "A defined foothold, account or network position is agreed in advance. The starting assumption is documented — it is not established by testing.",
    prerequisites:
      "Starting position defined and provisioned · segmentation boundaries documented · safety contacts named · change freeze windows agreed.",
    note: "The starting position is granted by you. Reaching a new position does not extend authorization to use it.",
  },
  {
    tab: "Specialized environment",
    title: "Assess an environment with its own safety constraints.",
    description:
      "Operational, embedded, regulated or high-availability environments need handling rules, a named safety owner and constraints defined before any activity begins.",
    prerequisites:
      "Safety owner named · disruption tolerance stated · approved test window and halt rule · regulatory constraints identified.",
    note: "Where disruption risk cannot be controlled, the activity is re-scoped to a non-intrusive method or declined.",
  },
  {
    tab: "Retest findings",
    title: "Validate specified remediation within a defined retest scope.",
    description:
      "Retest confirms whether named finding IDs still reproduce under the retest conditions. It is not a fresh assessment of the system.",
    prerequisites:
      "Original finding IDs listed · remediation deployed and confirmed by you · environment ready · retest eligibility per contract.",
    note: "Anything found outside the listed finding IDs is recorded as a new issue, never folded into the original finding.",
  },
  {
    tab: "Active incident",
    title: "This is not a testing request.",
    description:
      "If you believe an incident is in progress, testing is the wrong path. Response, containment and evidence preservation take priority over assessment.",
    prerequisites:
      "Route to incident response · preserve evidence · limit further access · engage your legal and security contacts.",
    note: "A test engagement does not begin against a system you believe is actively compromised.",
  },
  {
    tab: "Not sure",
    title: "Describe the objective and we'll name the category.",
    description:
      "Tell us what decision the result has to support — an audit, a customer requirement, a release gate or a board question. The category follows from that.",
    prerequisites:
      "The objective · who needs the result · any deadline · who can authorize testing.",
    note: "If the objective doesn't need a penetration test, we'll say so and point you to the assessment that fits.",
  },
];

export default function RightAssessmentTabs() {
  const [active, setActive] = useState(0);
  const current = ASSESSMENTS[active] ?? ASSESSMENTS[0]!;

  return (
    <section
      id="testing-scope"
      className="bg-[#F5F2EB] px-5 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-24 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-5 shrink-0 bg-[#E0402F]" aria-hidden="true" />
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E0402F] sm:text-xs">
            Is this the right assessment?
          </span>
        </div>

        <h2 className="mb-4 max-w-4xl text-2xl font-bold leading-tight tracking-tight text-[#0B1B26] sm:text-3xl lg:text-4xl">
          Tell us the objective. We&apos;ll say what it needs — or route you
          elsewhere.
        </h2>

        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[#4B5563] sm:text-base">
          This captures the category of testing need only. Asset identifiers,
          credentials and vulnerability detail belong in a controlled
          pre-engagement workflow, after ownership and confidentiality controls
          exist.
        </p>

        <div className="overflow-hidden rounded-lg border border-[#E0DCD3]">
          <div
            role="tablist"
            aria-label="Assessment categories"
            className="flex flex-wrap border-b border-[#E0DCD3] bg-[#EEEBE7]"
          >
            {ASSESSMENTS.map((item, index) => {
              const isActive = index === active;
              return (
                <button
                  key={item.tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(index)}
                  className={`grow basis-auto border-b border-r border-[#E0DCD3] px-3 py-3 text-center text-[11px] font-medium transition-colors sm:grow-0 sm:px-5 sm:py-3.5 sm:text-xs ${
                    isActive
                      ? "bg-white text-[#0B1B26] shadow-[inset_0_-2px_0_0_#E0402F]"
                      : "text-[#4B5563] hover:bg-white/60 hover:text-[#0B1B26]"
                  }`}
                >
                  {item.tab}
                </button>
              );
            })}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 gap-6 bg-white p-5 sm:p-7 lg:grid-cols-12 lg:gap-10"
          >
            <div className="lg:col-span-8">
              <h3 className="mb-2 text-base font-bold text-[#0B1B26]">
                {current.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-[#4B5563]">
                {current.description}
              </p>
              <div className="border-t border-[#E0DCD3] pt-3.5">
                <p className="mb-1 font-mono text-[10px] font-medium uppercase tracking-wider text-[#0B1B26]">
                  Prerequisites
                </p>
                <p className="break-words font-mono text-[11px] leading-5 text-[#4B5563] sm:text-xs">
                  {current.prerequisites}
                </p>
              </div>
            </div>

            <aside className="rounded-md bg-[#EEEBE7] p-4 lg:col-span-4">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-[#4B5563]">
                Note
              </p>
              <p className="text-xs leading-5 text-[#4B5563]">{current.note}</p>
            </aside>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
