"use client";

import React from "react";
import {
  Database,
  ShieldAlert,
  FileText,
  Search,
  RefreshCw,
  Layers,
} from "lucide-react";

interface CardItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  boundary: string;
  linkText: string;
}

const CARDS_DATA: CardItem[] = [
  {
    icon: <Database className="w-5 h-5 text-[#0F172A]" />,
    title: "Evidence ledger",
    description:
      "Identity, lineage, completeness, verification, packages and correction \u2014 the record behind a statement.",
    boundary:
      "Verification is not settlement truth, claim validity or compliance.",
    linkText: "Evidence & verification",
  },
  {
    icon: <ShieldAlert className="w-5 h-5 text-[#0F172A]" />,
    title: "Compliance control plane",
    description:
      "Controls, mappings, tests, assessments and exceptions, with applicability and scope explicit.",
    boundary:
      "No automatic PCI, insurance or financial-crime conclusion. A mapping is not a certification.",
    linkText: "Control plane",
  },
  {
    icon: <FileText className="w-5 h-5 text-[#0F172A]" />,
    title: "Audit and examination prep",
    description:
      "Scope, evidence, gaps, packages and reviewer coordination for internal and external review.",
    boundary:
      "External reviewer, examiner and regulator acceptance remains entirely independent.",
    linkText: "Prepare for audits",
  },
  {
    icon: <Search className="w-5 h-5 text-[#0F172A]" />,
    title: "Detection, cases, response",
    description:
      "Signals, investigations, cases, approvals, actions and rollback under governed authority.",
    boundary:
      "No fraud adjudication, transaction reversal or claims authority.",
    linkText: "Detection & response",
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-[#0F172A]" />,
    title: "Incident readiness & recovery",
    description:
      "Roles, approvals, communications, evidence and recovery dependencies prepared in advance.",
    boundary:
      "No 24/7 responder entitlement, guaranteed recovery or insurer coverage.",
    linkText: "Incident readiness",
  },
  {
    icon: <Layers className="w-5 h-5 text-[#0F172A]" />,
    title: "Continuous Assurance",
    description:
      "An independent service for ongoing control and evidence assurance. Not bundled, not a prerequisite.",
    boundary: "Assurance activity is not an audit opinion or a certification.",
    linkText: "Continuous Assurance",
  },
];

export default function EvidenceControlsAndReviewSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
              EVIDENCE, CONTROLS AND REVIEW
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
            Evidence is the continuity layer. It isn&apos;t a verdict.
          </h2>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-3xl">
            Lineage, completeness and verification carry across security,
            controls, incidents, reviews and decisions &mdash; and each handoff
            keeps its own boundary.
          </p>
        </div>

        {/* 3x2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {CARDS_DATA.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F1F0EB] flex items-center justify-center mb-6">
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                  {card.description}
                </p>

                <div className="pt-6 border-t border-[#E2E8F0] mb-6">
                  <span className="block text-[10px] font-mono font-bold tracking-widest text-[#64748B] uppercase mb-1">
                    BOUNDARY
                  </span>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {card.boundary}
                  </p>
                </div>
              </div>

              <div>
                <a
                  href="#link"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#E04F2E] hover:underline"
                >
                  {card.linkText}
                  <span className="text-sm">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Wide Banner */}
        <div className="bg-white rounded-[6px] p-8 md:p-10 border border-[#CBD5E1] border-l-4 border-l-[#E0402F] shadow-sm relative overflow-hidden">
          <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-3">
            Standards and regulations stay scoped
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-5xl">
            Any standard, scheme or regulation referenced in your engagement
            requires an exact version, applicability determination, scope,
            evidence and an authorized assessment or legal authority behind it.
            This page publishes no badge wall, no scheme name as proof, and no
            universal compliance conclusion &mdash; and applicability is your
            and your counsel&apos;s determination, not ours.
          </p>
        </div>
      </div>
    </section>
  );
}
