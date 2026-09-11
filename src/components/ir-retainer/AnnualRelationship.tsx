"use client";

import React from "react";
import { Database } from "lucide-react";

interface StageItem {
  number: string;
  title: string;
  description: string;
}

const STAGES: StageItem[] = [
  {
    number: "01",
    title: "Establish",
    description:
      "Contract, contacts, scope, environments, authority and dependencies confirmed.",
  },
  {
    number: "02",
    title: "Baseline",
    description:
      "Current plans, data sources, access, tooling and known gaps reviewed.",
  },
  {
    number: "03",
    title: "Prepare",
    description:
      "Runbooks, escalation, communications, evidence handling and access aligned.",
  },
  {
    number: "04",
    title: "Exercise",
    description:
      "Approved tabletop or rehearsal scenarios test the operating relationship.",
  },
  {
    number: "05",
    title: "Refresh",
    description:
      "Contacts, access, tools, providers and material changes revalidated.",
  },
  {
    number: "06",
    title: "Activate",
    description:
      "Approved route verifies entitlement, classifies scope and initiates response.",
  },
  {
    number: "07",
    title: "Review",
    description:
      "Closure, lessons, residual issues and updated readiness artifacts.",
  },
];

export default function AnnualRelationshipSection() {
  return (
    <section className="w-full bg-[#0B2237] py-16 md:py-24 text-white font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
              THE ANNUAL RELATIONSHIP
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white tracking-tight leading-[1.15] mb-4">
            Six stages happen before the one everyone thinks about.
          </h2>

          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-3xl">
            Activation is stage six. Most of the value of a retainer is created
            in the five that precede it &mdash; and this is a governance model,
            not a schedule. Frequency, included exercises and refresh cadence
            come from the approved service catalog or your contract.
          </p>
        </div>

        {/* 7-Column Steps Grid Container */}
        <div className="bg-white rounded-3xl border border-[#1E3A5F] shadow-sm p-6 mb-8 overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 min-w-[700px] lg:min-w-0">
            {STAGES.map((stage, idx) => (
              <div key={idx} className="flex flex-col justify-start">
                <span className="text-xs font-mono font-bold text-[#E04F2E] mb-2">
                  {stage.number}
                </span>
                <h3 className="text-sm font-bold text-slate-900 mb-2">
                  {stage.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Grid: Baseline Records & Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card: What the baseline records */}
          <div className="bg-white rounded-3xl p-8 border border-[#1E3A5F] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0B2237] flex items-center justify-center text-white mb-6">
                <Database className="w-5 h-5 text-white" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-6">
                What the baseline records
              </h3>

              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-100">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900">Environment scope</strong>{" "}
                    &mdash; business services, critical systems, cloud,
                    identity, endpoints, data classes, third parties and
                    exclusions.
                  </p>
                </div>

                <div className="pb-4 border-b border-slate-100">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900">Incident governance</strong>{" "}
                    &mdash; commander, executives, legal and privacy,
                    communications, system owners.
                  </p>
                </div>

                <div className="pb-4 border-b border-slate-100">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900">Contact methods</strong>{" "}
                    &mdash; approved channels, identity verification, an
                    out-of-band option, and an expiry.
                  </p>
                </div>

                <div className="pb-4 border-b border-slate-100">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900">Access prerequisites</strong>{" "}
                    &mdash; named systems, access mode, least privilege,
                    emergency access and break-glass policy.
                  </p>
                </div>

                <div className="pb-4 border-b border-slate-100">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900">Logs and evidence</strong>{" "}
                    &mdash; sources, retention, time sync, integrity, ownership,
                    export path and known gaps.
                  </p>
                </div>

                <div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900">Business constraints</strong>{" "}
                    &mdash; change freezes, regulated systems, safety
                    constraints and residency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Container: Graphic Showcase */}
          <div>
            <img
              src="/images/ir/2.png"
              alt="Annual relationship baseline workflow graphic"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}