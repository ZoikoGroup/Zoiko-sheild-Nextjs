"use client";

import React, { useState } from "react";
import {
  Search,
  Link as LinkIcon,
  Printer,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";

interface ClauseItem {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  orientation: string;
  fullText: string;
  isCritical?: boolean;
}

const CLAUSES: ClauseItem[] = [
  {
    id: "clause-1",
    number: 1,
    title: "1. Applicability & Acceptance of Terms",
    shortTitle: "1. Applicability & Acceptance",
    orientation:
      "This section defines the legal entities entering into the agreement, criteria for user eligibility, electronic records acknowledgment, and how acceptance is registered.",
    fullText:
      'This Terms of Service agreement ("Agreement") constitutes a binding contract between Zoiko Shield Inc. ("Zoiko") and the registering entity or individual ("Customer"). By completing the online enrollment, clicking "I Agree," or accessing the Zoiko Shield platform surfaces, Customer accepts these terms in full. If registering on behalf of an organization, you represent that you possess authorized organization authority.',
  },
  {
    id: "clause-2",
    number: 2,
    title: "2. Service Provisioning & Account Security",
    shortTitle: "2. Service & Account Access",
    orientation:
      "Outlines requirements for registration metrics, credential hygiene, administrative escalation restrictions, and the prevention of unauthorized account delegation.",
    fullText:
      "Subject to continued compliance with this contract, Zoiko provides access to the continuous security-assurance platform. Customer must provide accurate and authentic directory context upon registration. Credentials must remain strictly confidential. Administrator credentials carry significant elevation permission rights; any unauthorized access resulting from negligent session hygiene remains the sole risk responsibility of the Customer.",
  },
  {
    id: "clause-3",
    number: 3,
    title: "3. Subscription Fees, Trials, & Billing Authority",
    shortTitle: "3. Subscription / Fees / Trials",
    orientation:
      "Authoritative payment parameters. Fees are bound strictly by current executed Order Forms. No invented pricing metrics exist here.",
    fullText:
      "All subscription rates, trial parameters, billing intervals, tax designations, and renewal pathways are governed strictly by the values specified in an active, mutually executed Order Form. Free trials or beta preview tiers are subject to change, cessation, or restriction without notice. Late payments represent a critical control breach and may result in immediate access restriction or suspension.",
  },
  {
    id: "clause-4",
    number: 4,
    title: "4. Acceptable Use Policy & Security Audits",
    shortTitle: "4. Acceptable Use & Security",
    orientation:
      "Governs behavioral boundaries. Explicit prohibitions against load abuse, unlawful reverse engineering, and safe security disclosure requirements.",
    fullText:
      "Customers must not utilize Zoiko Shield to construct malicious processes, bypass host EDR sensor checks, or cause platform stability degradation. Reverse engineering is strictly prohibited unless allowed by law. Vulnerability research and testing are governed exclusively by our published Safe Harbor Vulnerability Disclosure policy. Link to standard AUP governs.",
  },
  {
    id: "clause-5",
    number: 5,
    title: "5. Customer Data, Privacy & Processing Limits",
    shortTitle: "5. Customer Data & Privacy",
    orientation:
      "Defines telemetry licensing boundaries, data sovereignty guarantees, subprocessor isolation controls, and machine learning telemetry limitations.",
    fullText:
      "Zoiko Shield does not claim ownership of local telemetry records, endpoint event logs, or identity profiles. You grant Zoiko a limited license to process this information purely to perform, monitor, and improve service execution. All data processing is bound tightly by our published, legal-approved Data Processing Addendum (DPA) and regional residency requirements. We do not utilize customer telemetry to train public AI models.",
  },
  {
    id: "clause-6",
    number: 6,
    title: "6. Intellectual Property & Third-Party Integrations",
    shortTitle: "6. IP, Feedback & Third Party",
    orientation:
      "Protects the underlying proprietary systems, open source attributions, trademark rights, and integrations authority.",
    fullText:
      "The continuous assurance platform, including all algorithms, visualization structures, and evidentiary methods, remains the exclusive proprietary property of Zoiko Tech. Feedback submitted by customers may be used without compensation or restriction. Disconnection of any third-party integration (such as CrowdStrike or Okta) is fully governed by Customer-configured policies and carries no platform liability.",
  },
  {
    id: "clause-7",
    number: 7,
    title: "7. Mutual Confidentiality",
    shortTitle: "7. Confidentiality",
    orientation:
      "Authoritative scope of protected platform or organizational details, exclusion rules, and compelled disclosure routes.",
    fullText:
      "Both parties agree to hold all non-public system schemas, audit findings, telemetry blueprints, and administrative procedures strictly confidential. Standard exclusions apply for independently researched concepts, historical public domain facts, or legally compelled judicial disclosure, provided prompt notification channels are respected.",
  },
  {
    id: "clause-8",
    number: 8,
    title: "8. System Availability, Changes, & Beta previews",
    shortTitle: "8. Availability & SLA",
    orientation:
      "Specifies maintenance windows, beta service disclaimers, and dependency boundary limitations.",
    fullText:
      'Zoiko Shield metrics rely on third-party registry API performance. Scheduled maintenance and standard platform service-level guarantees are bound exclusively by our Service Level Agreement (SLA). Beta services are offered strictly "AS-IS" without warranties of any kind and may be terminated at any time without platform liability.',
  },
  {
    id: "clause-9",
    number: 9,
    title: "9. Lifecycle, Cure Periods, & Deletion",
    shortTitle: "9. Suspension & Exit",
    orientation:
      "Detailed visual and textual definition of the data exit and retrieval lifecycle. Strict registry timing applies.",
    fullText:
      "Upon lease expiration or direct notice of breach, the client platform follows our structured egress protocol. Active instances progress to suspended status where read operations are restricted. Unless restored within thirty (30) days, the account is terminated, initiating a designated data retrieval window before permanent deletion of all stored evidentiary hashes.",
  },
  {
    id: "clause-10",
    number: 10,
    title: "10. Warranties, Liability Limits & Indemnification",
    shortTitle: "10. Risk & Warranties",
    orientation:
      "Both parties agree that these provisions are displayed with equal readability without visual concealment or microscopic text styling. Labeled legal authority required.",
    fullText:
      'EXCEPT AS EXPLICITLY OUTLINED IN A MUTUALLY SIGNED ORDER FORM, ALL SERVICES, EVIDENTIARY HASHES, AND TELEMETRY VERIFICATIONS ARE PROVIDED STRICTLY "AS-IS." ZOIKO DISCLAIMS ALL IMPLIED WARRANTIES OF MERCHANTABILITY, SUITABILITY, AND REGULATORY COMPLIANCE ADEQUACY. LIABILITY LIMITS AND INDEMNIFICATION PATHS ARE STRICTLY BOUND BY THE NEGOTIATED MASTER AGREEMENT PARAMETERS.',
    isCritical: true,
  },
  {
    id: "clause-11",
    number: 11,
    title: "11. Compliance, Export Control, & Sanctions",
    shortTitle: "11. Compliance & Sanctions",
    orientation:
      "Sanctions screening and export compliance thresholds. No regulatory compliance-certification overclaims are made.",
    fullText:
      "Customer represents and warrants that no platform surfaces are accessed, monitored, or deployed in violation of standard United States, United Kingdom, or European Union export controls, OFAC sanctions lists, or international anti-corruption regulations. Zoiko Shield provides tools for continuous monitoring; it does not claim to supply direct legal or compliance certifications.",
  },
  {
    id: "clause-12",
    number: 12,
    title: "12. Governing Law, Venues & Disputes",
    shortTitle: "12. Disputes & Notices",
    orientation:
      "Jurisdiction and venue parameters. Direct contract authority holds precedence over automated templates.",
    fullText:
      "Any dispute, controversy, or claim arising from this Agreement is governed by the laws and venues explicitly designated in your active signed Master Agreement or Order Form. Arbitration processes, informal mediation periods, and legal notices follow standard legal-approved enterprise compliance channels strictly.",
  },
  {
    id: "clause-13",
    number: 13,
    title: "13. Changes to These Terms",
    shortTitle: "13. Changes to These Terms",
    orientation:
      "Defines procedure for updating standard terms and notice mechanisms.",
    fullText:
      "Zoiko reserves the right to modify these public terms. Material modifications will be broadcasted to designated administrative billing channels thirty (30) days in advance. Continued utilization of platform continuous-verification tools following the effective date represents binding re-acceptance.",
  },
];

export const TermsContentSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeClause, setActiveClause] = useState("clause-1");
  const [copiedToast, setCopiedToast] = useState(false);

  const filteredClauses = CLAUSES.filter(
    (c) =>
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.orientation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.fullText.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollToClause = (id: string) => {
    setActiveClause(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2500);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <section className="py-12 md:py-20 bg-[#F5F2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Sticky Sidebar (4 Spans on LG) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search within terms..."
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-xs font-normal text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#A91D22] focus:ring-1 focus:ring-[#A91D22] transition-colors"
              />
            </div>

            {/* Navigation List */}
            <div className=" space-y-1">
              <div className="text-[#A91D22] text-xs font-bold font-sans uppercase tracking-wide px-3 py-1.5 mb-1">
                Clauses &amp; Anchors
              </div>

              <div className="space-y-0.5 max-h-[480px] overflow-y-auto pr-1">
                {CLAUSES.map((clause) => {
                  const isActive = activeClause === clause.id;
                  return (
                    <button
                      key={clause.id}
                      onClick={() => scrollToClause(clause.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-xs font-medium transition-colors cursor-pointer flex items-center justify-between ${
                        isActive
                          ? "bg-slate-100 text-[#0B1B26] font-bold"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <span className="truncate">{clause.shortTitle}</span>
                      {isActive && (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#A91D22] shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className=" space-y-3">
              <button
                onClick={handleCopyLink}
                className="w-full text-left text-xs text-slate-600 hover:text-[#0B1B26] flex items-center gap-2 transition-colors cursor-pointer"
              >
                <LinkIcon className="w-3.5 h-3.5 text-slate-500" />
                <span>{copiedToast ? "Link copied to clipboard!" : "Copy stable deep link"}</span>
              </button>

              <button
                onClick={handlePrint}
                className="w-full text-left text-xs text-slate-600 hover:text-[#0B1B26] flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-slate-500" />
                <span>Open print-ready format</span>
              </button>
            </div>
          </aside>

          {/* Right Main Content (8 Spans on LG) */}
          <div className="lg:col-span-8 space-y-12">
            {filteredClauses.map((clause) => (
              <div
                key={clause.id}
                id={clause.id}
                className="space-y-5 scroll-mt-28"
              >
                {/* Title */}
                <h2 className="text-2xl font-extrabold text-[#0B1B26] font-sans">
                  {clause.title}
                </h2>

                {/* Orientation Bar */}
                <div
                  className={`p-4 rounded-lg space-y-1 ${
                    clause.isCritical
                      ? "bg-red-50 border border-red-200/80"
                      : "bg-[#E6E4DD] border border-slate-300/60"
                  }`}
                >
                  <div
                    className={`text-xs font-bold font-mono ${
                      clause.isCritical ? "text-[#A91D22]" : "text-[#A91D22]"
                    }`}
                  >
                    {clause.isCritical
                      ? "CRITICAL WARRANTY & RISK PROVISIONS — READABLE WITH MAXIMUM CLEARNESS."
                      : "ORIENTATION ONLY — AUTHORITATIVE CLAUSE TEXT CONTROLS."}
                  </div>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    {clause.orientation}
                  </p>
                </div>

                {/* Full Clause Content */}
                <div
                  className={`text-base leading-relaxed ${
                    clause.isCritical
                      ? "text-slate-900 text-xs font-bold font-mono uppercase bg-red-50/40 p-4 rounded-lg border border-red-200/60"
                      : "text-slate-700 font-normal"
                  }`}
                >
                  {clause.fullText}
                </div>

                {/* Specific Visual Add-ons for Clauses */}
                {clause.number === 1 && (
                  <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-xs space-y-3">
                    <div className="text-xs font-bold font-mono text-slate-900">
                      CRYPTOGRAPHIC ACCEPTANCE LOG (AUDIT-READY MOCK)
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
                      <div>
                        <span className="text-slate-400 block text-[11px] font-sans">
                          terms_version
                        </span>
                        <span className="font-mono text-slate-900 font-semibold">
                          v2026.1.4_RELEASE
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px] font-sans">
                          accepted_at
                        </span>
                        <span className="font-mono text-slate-900 font-semibold">
                          2026-01-15T09:42:11Z
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px] font-sans">
                          record_hash
                        </span>
                        <span className="font-mono text-teal-700 font-semibold truncate block">
                          0x8a2f4c919d...e173
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {clause.number === 9 && (
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 text-center">
                    <div className="flex-1 min-w-[70px] space-y-0.5">
                      <span className="text-[#A91D22] text-[10px] font-mono block font-semibold">
                        STAGE 01
                      </span>
                      <span className="text-slate-900 text-sm font-extrabold font-sans">
                        Active
                      </span>
                    </div>

                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />

                    <div className="flex-1 min-w-[70px] space-y-0.5">
                      <span className="text-amber-700 text-[10px] font-mono block font-semibold">
                        STAGE 02
                      </span>
                      <span className="text-amber-700 text-sm font-extrabold font-sans">
                        Suspended
                      </span>
                    </div>

                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />

                    <div className="flex-1 min-w-[70px] space-y-0.5">
                      <span className="text-rose-800 text-[10px] font-mono block font-semibold">
                        STAGE 03
                      </span>
                      <span className="text-rose-800 text-sm font-extrabold font-sans">
                        Terminated
                      </span>
                    </div>

                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />

                    <div className="flex-1 min-w-[70px] space-y-0.5">
                      <span className="text-slate-500 text-[10px] font-mono block font-semibold">
                        STAGE 04
                      </span>
                      <span className="text-slate-700 text-sm font-extrabold font-sans">
                        Egress / Retrieve
                      </span>
                    </div>

                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />

                    <div className="flex-1 min-w-[70px] space-y-0.5">
                      <span className="text-teal-700 text-[10px] font-mono block font-semibold">
                        STAGE 05
                      </span>
                      <span className="text-teal-700 text-sm font-extrabold font-sans">
                        Deleted
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Secure Legal Communications Card */}
            <div className="p-6 bg-white rounded-xl border border-red-500/20 shadow-xs space-y-3">
              <div className="flex items-center gap-2.5">
                <ShieldAlert className="w-4 h-4 text-[#A91D22]" />
                <h3 className="text-lg font-extrabold text-[#0B1B26] font-sans">
                  Secure Legal Communications
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                For any formal notices, corporate governance inquiries, subpoena
                deliveries, or custom agreement requests, please contact our
                designated department:
              </p>
              <div className="text-xs font-mono font-bold text-[#A91D22]">
                <a
                  href="mailto:legal-notices@zoiko.com"
                  className="hover:underline"
                >
                  legal-notices@zoiko.com
                </a>
              </div>
            </div>

            {/* Legal Content Registry Governance Card */}
            <div className="p-6 bg-[#0B1B26] text-white rounded-2xl shadow-lg space-y-4">
              <h3 className="text-lg font-extrabold text-white font-sans">
                Legal Content Registry Governance
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400 font-sans">
                    Acceptance State:
                  </span>
                  <span className="px-2.5 py-1 bg-white text-[#1F7A6C] border border-teal-500/30 rounded-full font-bold text-[11px]">
                    Acceptance Recorded
                  </span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400 font-sans">
                    Verification URL:
                  </span>
                  <span className="font-mono text-slate-200">
                    /legal/terms/v2026.1.4/canonical
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-sans">
                    Security Verification Checksum:
                  </span>
                  <span className="font-mono text-slate-300 truncate max-w-xs">
                    SHA256_3af9b402fd8a992...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
