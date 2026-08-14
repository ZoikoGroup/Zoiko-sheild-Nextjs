"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DemoModal } from "@/components/ui/DemoModal";

// Surface Doctrine 8 Cards Data
const SURFACE_DOCTRINES = [
  {
    num: "01",
    title: "Transparent",
    desc: "Definitions, sources, assumptions, limits and change history are inspectable from every summary.",
    blocked: "Black-box scores or unexplained red/amber/green status.",
  },
  {
    num: "02",
    title: "Evidence-linked",
    desc: "Each risk statement references approved evidence or an authoritative source claim.",
    blocked: "A risk statement resting on marketing claims vs model output alone.",
  },
  {
    num: "03",
    title: "Scoped",
    desc: "Subject, environment, time window and exclusions are visible on the view itself.",
    blocked: "One statement masquerading as enterprise.",
  },
  {
    num: "04",
    title: "Current",
    desc: "Source freshness and method version are visible; stale evidence is explicit.",
    blocked: "Silent decay of background state.",
  },
  {
    num: "05",
    title: "Human-authoritative",
    desc: "The system organizes evidence and decision context. Accountable people or governed workflows decide.",
    blocked: "Autonomous risk acceptance, remediation, budget or response.",
  },
  {
    num: "06",
    title: "Correctable",
    desc: "Evidence, scope, method and conclusions can be corrected, superseded or withdrawn with history kept.",
    blocked: "Silent historical edits.",
  },
  {
    num: "07",
    title: "Non-causal by default",
    desc: "Correlation and association stay descriptive unless a separately governed method says otherwise.",
    blocked: "Causal attribution without explicit method.",
  },
  {
    num: "08",
    title: "Non-predictive by default",
    desc: "Current evidence and measured trend stay descriptive.",
    blocked: "Likelihood as forecast of breach, incident or loss.",
  },
];

const HELD_BACK_WORDS = [
  "high", "critical", "material", "likely", "inherent", "unmoving", "improving", "systemic", "residual", "informed", "accepted", "mitigated", "scored", "less-than-first", "predictive", "forecast", "confidence", "priority"
];

const NEVER_INFERRED_WORDS = [
  "compliant", "audited", "secure", "resilient", "proven", "protected", "covered", "executive-ready", "board-ready", "decision-ready"
];

export default function RiskIntelligencePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="bg-[#F4F3EF] min-h-screen text-[#151B28] font-sans antialiased selection:bg-[#E0533C] selection:text-white">
      <Navbar />

      <main>
        {/* ========================================================================= */}
        {/* MOBILE SECTION 1 (ONLY VISIBLE ON MOBILE: block sm:hidden) */}
        {/* ========================================================================= */}
        <div className="block sm:hidden">
          {/* Top Emergency Dark Alert Banner */}
          <div className="bg-[#1C180E] text-white p-4 text-xs font-sans border-b border-[#3A2E16] space-y-2">
            <p className="leading-relaxed">
              <strong className="font-bold text-amber-200">This destination is conditional.</strong> It explains how risk views would be governed. No risk score, scale, threshold, benchmark or forecast is published, because none is defined by an approved method.
            </p>
            <a href="#eight-gates-mobile" className="text-[#E0533C] font-mono text-xs font-bold block pt-1 hover:underline">
              See the readiness gate &blacktriangledown;
            </a>
          </div>

          {/* Mobile Hero Content Container */}
          <div className="px-4 py-6 space-y-5">
            {/* Breadcrumbs */}
            <div className="font-mono text-xs text-gray-500">
              Home / Platform / Risk intelligence
            </div>

            {/* Overline */}
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                PLATFORM &middot; RISK INTELLIGENCE
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-extrabold text-[#151B28] tracking-tight leading-snug">
              Transparent, evidence-linked risk &mdash;{" "}
              <span className="text-[#E0533C]">
                and decision support that stays decision support.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs text-[#151B28]/75 leading-relaxed font-sans">
              Every risk view discloses its definition, source lineage, scope, assumptions, limitations, freshness, owner and permitted decision use. It organizes evidence and options. It does not make the decision, and it does not compress uncertainty into a colour.
            </p>

            {/* 4 Status Pill Badges Stack */}
            <div className="flex flex-col gap-2 font-mono text-[10px] font-bold uppercase pt-1">
              <span className="bg-[#FFF8EC] text-[#B47818] border border-[#E3B05C] px-3 py-1.5 rounded-full w-fit">
                ◈ ROUTE STATE: CONDITIONAL
              </span>
              <span className="bg-[#FFF8EC] text-[#B47818] border border-dashed border-[#E3B05C] px-3 py-1.5 rounded-full w-fit">
                ⬚ RISK METHOD: NOT YET DEFINED
              </span>
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-full w-fit">
                ● EVIDENCE LEDGER: ACTIVE
              </span>
              <span className="bg-white text-gray-600 border border-gray-200 px-3 py-1.5 rounded-full w-fit">
                ⬚ WCAG 2.2 AA &middot; 400% REFLOW
              </span>
            </div>

            {/* Action Buttons Grid */}
            <div className="space-y-2 pt-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="px-4 py-3 bg-[#E0533C] text-white font-bold text-xs rounded-lg text-center shadow-sm"
                >
                  Book a Demo
                </button>
                <a
                  href="#doctrine"
                  className="px-4 py-3 bg-[#EFECE6] text-[#151B28] font-semibold text-xs rounded-lg border border-gray-300/80 text-center shadow-sm"
                >
                  Explore the Platform
                </a>
              </div>
              <a
                href="/verify-evidence"
                className="block w-full py-3 bg-[#EFECE6] text-[#151B28] font-semibold text-xs rounded-lg border border-gray-300/80 text-center shadow-sm"
              >
                Evidence ledger
              </a>
            </div>

            {/* Sub-footnote */}
            <p className="text-[11px] text-gray-500 leading-relaxed font-sans pt-1">
              Proof stays ungated. Evidence, Trust Center, Documentation and System Status are all reachable without a demo form.
            </p>

            {/* Eight Gates Public Manifest Card */}
            <div id="eight-gates-mobile" className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden border-t-4 border-t-amber-500 my-6">
              {/* Header */}
              <div className="bg-[#FAF9F6] p-4 border-b border-gray-200/80 space-y-1.5">
                <div className="flex justify-between items-center font-mono text-[9px] text-gray-500">
                  <span>CONDITIONAL READINESS GATE</span>
                  <span>ZR-.-RISK-INTELLIGENCE-004</span>
                </div>
                <h3 className="text-sm font-bold text-[#151B28]">
                  Eight gates. Default is not public.
                </h3>
                <p className="text-xs text-gray-600 font-sans leading-relaxed">
                  Design approval does not activate the route. Each gate must be explicitly true in the controlled route and claim manifests.
                </p>
              </div>

              {/* 8 Gates List */}
              <div className="divide-y divide-gray-100 p-4 space-y-3">
                {/* Gate 1 */}
                <div className="space-y-1 pt-2 first:pt-0">
                  <h4 className="font-bold text-xs text-[#151B28]">Route readiness</h4>
                  <span className="font-mono text-[10px] text-gray-500 block">substantive page, owner, QA</span>
                  <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 font-mono text-[9px] font-bold rounded">
                    ● PASSED
                  </span>
                </div>

                {/* Gate 2 */}
                <div className="space-y-1 pt-2">
                  <h4 className="font-bold text-xs text-[#151B28]">Risk method</h4>
                  <span className="font-mono text-[10px] text-gray-500 block">definitions, logic, validation</span>
                  <span className="inline-block bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 font-mono text-[9px] font-bold rounded">
                    ◐ OPEN
                  </span>
                </div>

                {/* Gate 3 */}
                <div className="space-y-1 pt-2">
                  <h4 className="font-bold text-xs text-[#151B28]">Evidence lineage</h4>
                  <span className="font-mono text-[10px] text-gray-500 block">source classes, freshness rules</span>
                  <span className="inline-block bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 font-mono text-[9px] font-bold rounded">
                    ◐ OPEN
                  </span>
                </div>

                {/* Gate 4 */}
                <div className="space-y-1 pt-2">
                  <h4 className="font-bold text-xs text-[#151B28]">Decision-use boundary</h4>
                  <span className="font-mono text-[10px] text-gray-500 block">supported and prohibited uses</span>
                  <span className="inline-block bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 font-mono text-[9px] font-bold rounded">
                    ◐ OPEN
                  </span>
                </div>

                {/* Gate 5 */}
                <div className="space-y-1 pt-2">
                  <h4 className="font-bold text-xs text-[#151B28]">Claims</h4>
                  <span className="font-mono text-[10px] text-gray-500 block">each sentence mapped to evidence</span>
                  <span className="inline-block bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 font-mono text-[9px] font-bold rounded">
                    ◐ OPEN
                  </span>
                </div>

                {/* Gate 6 */}
                <div className="space-y-1 pt-2">
                  <h4 className="font-bold text-xs text-[#151B28]">AI governance</h4>
                  <span className="font-mono text-[10px] text-gray-500 block">bounded, cited, overridable</span>
                  <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 font-mono text-[9px] font-bold rounded">
                    ● PASSED
                  </span>
                </div>

                {/* Gate 7 */}
                <div className="space-y-1 pt-2">
                  <h4 className="font-bold text-xs text-[#151B28]">Security &amp; privacy</h4>
                  <span className="font-mono text-[10px] text-gray-500 block">no restricted data in client</span>
                  <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 font-mono text-[9px] font-bold rounded">
                    ● PASSED
                  </span>
                </div>

                {/* Gate 8 */}
                <div className="space-y-1 pt-2">
                  <h4 className="font-bold text-xs text-[#151B28]">Accessibility</h4>
                  <span className="font-mono text-[10px] text-gray-500 block">tables, charts, alternatives</span>
                  <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 font-mono text-[9px] font-bold rounded">
                    ● PASSED
                  </span>
                </div>
              </div>

              {/* Footnote Bar */}
              <div className="bg-[#FAF9F6] p-4 border-t border-gray-200/80 text-xs text-gray-600 font-sans leading-relaxed">
                <strong className="text-[#151B28]">Fail-closed release.</strong> While the method gate is open, no production risk value, category, chart or visualization renders at all. The failure behaviour is to show the concept and the proof routes &mdash; not a placeholder number.
              </div>
            </div>

            {/* Monospace Metadata Footer Box */}
            <div className="bg-[#EBE7DF] p-4 rounded-xl border border-gray-300/80 font-mono text-[10px] text-gray-700 space-y-1.5 my-6">
              <div>ROUTE: /PLATFORM/RISK-INTELLIGENCE</div>
              <div>PARENT: /PLATFORM &nbsp; STATE: CONDITIONAL</div>
              <div>SEPARATE ROUTE: /PLATFORM/EXECUTIVE-RISK</div>
            </div>
          </div>

          {/* Mobile Section 2: Content Doctrine & Vocabulary Held Back */}
          <div className="px-4 py-8 border-t border-gray-200/70 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  CONTENT DOCTRINE
                </span>
              </div>
              <h2 className="text-xl font-extrabold text-[#151B28] leading-tight">
                Evidence before score. Definition before visualization.
              </h2>
              <p className="text-xs text-[#151B28]/75 leading-relaxed font-sans">
                A chart, a matrix or a ranking cannot define risk. A polished generic risk dashboard would be the failure mode here, not the goal &mdash; because it would present method facts nobody has approved.
              </p>
            </div>

            {/* Single Stacked White Card Container (8 Doctrine Items) */}
            <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden divide-y divide-gray-100">
              {SURFACE_DOCTRINES.map((item, idx) => (
                <div key={idx} className="p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#E0533C]">
                      {item.num}
                    </span>
                    <h3 className="text-sm font-bold text-[#151B28]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                  <div className="text-[11px] font-sans pt-1">
                    <span className="text-[#E0533C] font-bold">Blocked: </span>
                    <span className="text-gray-600">{item.blocked}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Vocabulary held back until it's defined */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-5 shadow-sm space-y-4">
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-[#151B28]">
                  Vocabulary held back until it's defined
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  These words carry method commitments. They need an authoritative definition, scope and owner before they appear in a public risk view &mdash; so they don't appear here.
                </p>
              </div>

              {/* Held Back Words Array */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {HELD_BACK_WORDS.map((word, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 bg-gray-100 border border-gray-200 text-gray-600 font-mono text-[10px] rounded"
                  >
                    {word}
                  </span>
                ))}
              </div>

              {/* Sublabel & Never Inferred Words */}
              <div className="pt-2 space-y-2">
                <p className="text-[11px] font-bold text-[#151B28] font-sans leading-snug">
                  <span className="text-[#E0533C]">Never inferred from a risk view at all</span> &mdash; each of these carries its own separate claim and scope controls:
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {NEVER_INFERRED_WORDS.map((word, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-red-50/60 border border-red-200 text-red-700 font-mono text-[10px] rounded"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Section 3: Evidence-Linked Risk View (Warm Beige bg-[#EFECE6]) */}
          <div className="bg-[#EFECE6] px-4 py-8 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                    EVIDENCE-LINKED RISK VIEW
                  </span>
                </div>
                <h2 className="text-xl font-extrabold text-[#151B28] leading-tight">
                  Trace a statement all the way down to its sources.
                </h2>
                <p className="text-xs text-[#151B28]/75 leading-relaxed font-sans">
                  This is the shape of a production risk view, with synthetic values shown only to demonstrate structure. The lineage runs risk view &rarr; method &rarr; evidence set &rarr; source object, and every source carries its own state.
                </p>
              </div>

              {/* Lineage & Governance Main Card */}
              <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden space-y-4">
                {/* Header */}
                <div className="bg-[#FAF9F6] p-4 border-b border-gray-200/80 space-y-3">
                  <div className="flex flex-col gap-1 font-mono text-[10px] text-gray-500">
                    <span>risk_view_id &middot; RV-4471 (synthetic)</span>
                    <span>as-of 03 Aug 2026 09:00 UTC &middot; window 30d</span>
                  </div>

                  <h3 className="text-sm font-bold text-[#151B28] leading-snug">
                    Privileged access to payment-processing systems is not fully evidenced for the current review period.
                  </h3>

                  {/* Status Badges */}
                  <div className="flex flex-col gap-1.5 font-mono text-[9px] font-bold uppercase pt-1">
                    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded border border-gray-200 w-fit">
                      + SUBJECT: PAYMENT PROCESSING
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded border border-gray-200 w-fit">
                      + ENV: PRODUCTION, EU-WEST
                    </span>
                    <span className="bg-amber-50 text-amber-800 px-2.5 py-1 rounded border border-amber-200 w-fit">
                      + EVIDENCE: PARTIAL
                    </span>
                    <span className="bg-[#FFF8EC] text-[#B47818] px-2.5 py-1 rounded border border-dashed border-[#E3B05C] w-fit">
                      + METHOD: PENDING AUTHORITY
                    </span>
                  </div>
                </div>

                {/* Lineage Tree */}
                <div className="p-4 space-y-4 text-xs font-sans">
                  <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                    LINEAGE &mdash; TRACEABLE IN BOTH DIRECTIONS
                  </span>

                  {/* Node 1 */}
                  <div className="flex items-start gap-2.5">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-[#E0533C] bg-red-50 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-mono text-[9px] font-bold text-gray-400 uppercase">RISK VIEW</span>
                        <strong className="font-mono font-bold text-[#151B28]">RV-4471</strong>
                      </div>
                      <p className="text-gray-600 text-[11px] leading-relaxed">
                        A statement about evidence sufficiency within a declared scope &mdash; not a level, score or category.
                      </p>
                    </div>
                  </div>

                  {/* Node 2 */}
                  <div className="pl-4 border-l-2 border-gray-200 space-y-3">
                    <div className="flex items-start gap-2.5">
                      <span className="w-3 h-3 bg-blue-50 border-2 border-blue-600 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-mono text-[9px] font-bold text-gray-400 uppercase">METHOD</span>
                          <strong className="font-mono font-bold text-[#151B28]">METH-ACCESS-REVIEW</strong>
                          <span className="font-mono text-[8px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded border border-amber-200 font-bold uppercase">
                            &mdash; NOT YET APPROVED
                          </span>
                        </div>
                        <p className="text-gray-600 text-[11px] leading-relaxed">
                          Definition, inputs, missing-data behaviour and validation reference are required before any value or category may render.
                        </p>
                      </div>
                    </div>

                    {/* Node 3 */}
                    <div className="pl-4 border-l-2 border-gray-200 space-y-3">
                      <div className="flex items-start gap-2.5">
                        <span className="w-3 h-3 bg-gray-100 border-2 border-gray-400 shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="font-mono text-[9px] font-bold text-gray-400 uppercase">EVIDENCE SET &middot; 5 SOURCES</span>
                            <strong className="font-mono font-[#151B28]">ES-4471-a</strong>
                          </div>
                          <p className="text-gray-600 text-[11px] leading-relaxed">
                            Completeness vocabulary comes from the Evidence authority.
                          </p>
                        </div>
                      </div>

                      {/* Sources Stack */}
                      <div className="pl-4 border-l-2 border-gray-200 space-y-3 pt-1">
                        {/* Source 1 */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between gap-1 flex-wrap">
                            <span className="font-mono text-[9px] text-gray-400 font-bold uppercase">SOURCE OBJECT</span>
                            <span className="font-mono text-[9px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.5 rounded">● CURRENT</span>
                          </div>
                          <h4 className="font-bold text-xs text-[#151B28]">Identity provider access export</h4>
                          <p className="text-[11px] text-gray-600 leading-relaxed">Observed 03 Aug 2026. Verified in evidence ledger.</p>
                        </div>

                        {/* Source 2 */}
                        <div className="space-y-1 pt-2 border-t border-gray-100">
                          <div className="flex items-center justify-between gap-1 flex-wrap">
                            <span className="font-mono text-[9px] text-gray-400 font-bold uppercase">SOURCE OBJECT</span>
                            <span className="font-mono text-[9px] font-bold bg-amber-50 text-amber-700 border border-amber-200 px-1.5 py-0.5 rounded">● STALE</span>
                          </div>
                          <h4 className="font-bold text-xs text-[#151B28]">Quarterly access review record</h4>
                          <p className="text-[11px] text-gray-600 leading-relaxed">Observed 19 Apr 2026. Outside freshness window.</p>
                        </div>

                        {/* Source 3 */}
                        <div className="space-y-1 pt-2 border-t border-gray-100">
                          <div className="flex items-center justify-between gap-1 flex-wrap">
                            <span className="font-mono text-[9px] text-gray-400 font-bold uppercase">SOURCE OBJECT</span>
                            <span className="font-mono text-[9px] font-bold bg-red-50 text-red-700 border border-red-200 px-1.5 py-0.5 rounded">✕ CONFLICTING</span>
                          </div>
                          <h4 className="font-bold text-xs text-[#151B28]">Privileged-role inventory</h4>
                          <p className="text-[11px] text-gray-600 leading-relaxed">Sources disagree on role membership.</p>
                        </div>

                        {/* Source 4 */}
                        <div className="space-y-1 pt-2 border-t border-gray-100">
                          <div className="flex items-center justify-between gap-1 flex-wrap">
                            <span className="font-mono text-[9px] text-gray-400 font-bold uppercase">SOURCE OBJECT</span>
                            <span className="font-mono text-[9px] font-bold bg-gray-100 text-gray-600 border border-gray-200 px-1.5 py-0.5 rounded">&mdash; MISSING</span>
                          </div>
                          <h4 className="font-bold text-xs text-[#151B28]">Break-glass account attestation</h4>
                          <p className="text-[11px] text-gray-600 leading-relaxed">Not present. Missing stays missing.</p>
                        </div>

                        {/* Source 5 */}
                        <div className="space-y-1 pt-2 border-t border-gray-100">
                          <div className="flex items-center justify-between gap-1 flex-wrap">
                            <span className="font-mono text-[9px] text-gray-400 font-bold uppercase">SOURCE OBJECT</span>
                            <span className="font-mono text-[9px] font-bold bg-slate-100 text-slate-700 border border-slate-200 px-1.5 py-0.5 rounded">🔒 RESTRICTED</span>
                          </div>
                          <h4 className="font-bold text-xs text-[#151B28]">Third-party administrator listing</h4>
                          <p className="text-[11px] text-gray-600 leading-relaxed">Supports authorized view without leaking artifact.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Governance & Decision Use */}
                <div className="p-4 bg-[#FAF9F6] border-t border-gray-200/80 space-y-4">
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] font-bold text-gray-400 uppercase tracking-wider block">
                      GOVERNANCE
                    </span>
                    <div className="font-mono text-[11px] divide-y divide-gray-200/60 space-y-1.5 text-[#151B28]">
                      <div className="flex justify-between pt-1.5 first:pt-0">
                        <span className="text-gray-500">method_id</span>
                        <span className="font-bold">pending</span>
                      </div>
                      <div className="flex justify-between pt-1.5">
                        <span className="text-gray-500">score / level</span>
                        <span className="font-bold">not rendered</span>
                      </div>
                      <div className="flex justify-between pt-1.5">
                        <span className="text-gray-500">owner</span>
                        <span className="font-bold">Security governance</span>
                      </div>
                      <div className="flex justify-between pt-1.5">
                        <span className="text-gray-500">state</span>
                        <span className="font-bold">under review</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-gray-200/60 text-xs font-sans">
                    <strong className="font-mono text-[9px] text-gray-400 uppercase block">QUESTION THIS SUPPORTS</strong>
                    <p className="text-[#151B28] text-[11px] leading-relaxed">Do we have enough current evidence to complete this access review?</p>

                    <strong className="font-mono text-[9px] text-[#E0533C] uppercase block pt-2 font-bold">PROHIBITED USES</strong>
                    <p className="text-[#E0533C] text-[11px] leading-relaxed">Accepting risk automatically &middot; Determining materiality &middot; Authorizing response.</p>
                  </div>
                </div>

                {/* Footnote Bar */}
                <div className="bg-[#FAF9F6] p-4 border-t border-gray-200/80 text-[11px] text-gray-600 font-sans leading-relaxed">
                  <strong className="text-[#151B28]">What this view does not establish.</strong> It says something about evidence sufficiency in a stated scope. It does not say systems are secure.
                </div>
              </div>

              {/* 3 Bottom Cards Stack */}
              <div className="space-y-4">
                {/* Card 1: Five source states */}
                <div className="bg-white rounded-2xl border border-gray-300/80 p-5 shadow-sm space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                    ◈
                  </div>
                  <h3 className="text-sm font-bold text-[#151B28]">
                    Five source states
                  </h3>
                  <div className="divide-y divide-gray-100 text-xs font-sans text-gray-600 space-y-2 pt-1">
                    <div className="pt-2 first:pt-0 leading-relaxed">
                      <strong className="text-[#151B28]">Current</strong> &mdash; may support a current view, within stated scope and freshness policy.
                    </div>
                    <div className="pt-2 leading-relaxed">
                      <strong className="text-[#151B28]">Stale</strong> &mdash; visible, and may block a conclusion where fresh data is required.
                    </div>
                    <div className="pt-2 leading-relaxed">
                      <strong className="text-[#151B28]">Missing</strong> &mdash; stays missing. Never imputed.
                    </div>
                    <div className="pt-2 leading-relaxed">
                      <strong className="text-[#151B28]">Restricted</strong> &mdash; supports authorized view without leaking artifact.
                    </div>
                    <div className="pt-2 leading-relaxed">
                      <strong className="text-[#151B28]">Withdrawn</strong> &mdash; triggers review of every dependent view.
                    </div>
                  </div>
                </div>

                {/* Card 2: Supersession, not erasure */}
                <div className="bg-white rounded-2xl border border-gray-300/80 p-5 shadow-sm space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                    ≢
                  </div>
                  <h3 className="text-sm font-bold text-[#151B28]">
                    Supersession, not erasure
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    New evidence does not erase the evidence that supported a past decision-support view. Both remain inspectable, so a decision made last quarter can still be understood on the basis it was actually made.
                  </p>
                  <div className="pt-2 border-t border-gray-100 text-[10px] font-mono text-gray-600 leading-relaxed space-y-1">
                    <strong className="text-gray-800 uppercase block text-[8px] tracking-wider">INTEGRITY TERMS</strong>
                    <span>The evidence system's own tamper-evident and verification vocabulary is used as-is &mdash; never broadened to "immutable" or "independently verified" unless that is true.</span>
                  </div>
                </div>

                {/* Card 3: External evidence isn't automatically authoritative */}
                <div className="bg-white rounded-2xl border border-gray-300/80 p-5 shadow-sm space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                    ≡
                  </div>
                  <h3 className="text-sm font-bold text-[#151B28]">
                    External evidence isn't automatically authoritative
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    Issuer, date, scope and limitation stay visible on any externally issued artifact. Being external does not make it authoritative for every decision it might seem to touch.
                  </p>
                  <div className="pt-2">
                    <a
                      href="/verify-evidence"
                      className="px-3.5 py-2 bg-white hover:bg-gray-50 text-[#151B28] text-xs font-bold rounded-lg border border-gray-300 shadow-sm transition-all inline-block"
                    >
                      Evidence ledger &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>

          {/* ========================================================================= */}
          {/* MOBILE SECTION 4: METHOD GOVERNANCE (11-ROW MATRIX - EXACT SCREENSHOT MATCH) */}
          {/* ========================================================================= */}
          <div className="px-4 py-8 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500 font-mono">
                  METHOD GOVERNANCE
                </span>
              </div>
              <h2 className="text-xl font-extrabold text-[#151B28] leading-tight">
                What would have to exist before a number could.
              </h2>
              <p className="text-xs text-gray-600 font-sans leading-relaxed">
                The source authority defines no risk score, scale, formula, level, benchmark, appetite or threshold. This is the contract that would govern one if it were later authorized &mdash; it is not a claim that any of it exists today.
              </p>
            </div>

            {/* 11-Row Governance Matrix Card */}
            <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-4 space-y-3 divide-y divide-gray-800/80">
              {/* Row 1 */}
              <div className="space-y-1 pt-2 first:pt-0">
                <span className="font-mono text-xs font-bold text-white block">definition</span>
                <p className="text-xs text-gray-300/85 leading-relaxed font-sans">
                  The exact construct being measured, and why it is relevant to the declared decision job.
                </p>
              </div>

              {/* Row 2 */}
              <div className="space-y-1 pt-2.5">
                <span className="font-mono text-xs font-bold text-white block">inputs</span>
                <p className="text-xs text-gray-300/85 leading-relaxed font-sans">
                  Approved fields, units, provenance, inclusion and exclusion rules &mdash; and explicit missing-data behaviour.
                </p>
              </div>

              {/* Row 3 */}
              <div className="space-y-1 pt-2.5">
                <span className="font-mono text-xs font-bold text-white block">formula / logic</span>
                <p className="text-xs text-gray-300/85 leading-relaxed font-sans">
                  A deterministic formula, rule logic or governed analytical method. Versioned and reviewable.
                </p>
              </div>

              {/* Row 4 */}
              <div className="space-y-1 pt-2.5">
                <span className="font-mono text-xs font-bold text-white block">weights</span>
                <p className="text-xs text-gray-300/85 leading-relaxed font-sans">
                  Purpose, source, approval and sensitivity analysis wherever weighting exists.
                </p>
              </div>

              {/* Row 5 */}
              <div className="space-y-1 pt-2.5">
                <span className="font-mono text-xs font-bold text-white block">scale / categories</span>
                <p className="text-xs text-gray-300/85 leading-relaxed font-sans">
                  Exact scale, category boundaries and meaning. No generic low / medium / high assumption.
                </p>
              </div>

              {/* Row 6 */}
              <div className="space-y-1 pt-2.5">
                <span className="font-mono text-xs font-bold text-white block">thresholds</span>
                <p className="text-xs text-gray-300/85 leading-relaxed font-sans">
                  Source authority, scope, owner, effective dates, exceptions and escalation consequences.
                </p>
              </div>

              {/* Row 7 */}
              <div className="space-y-1 pt-2.5">
                <span className="font-mono text-xs font-bold text-white block">benchmark</span>
                <p className="text-xs text-gray-300/85 leading-relaxed font-sans">
                  Population, period, normalization, comparability, source and licensing. No peer claim without evidence.
                </p>
              </div>

              {/* Row 8 */}
              <div className="space-y-1 pt-2.5">
                <span className="font-mono text-xs font-bold text-white block">validation</span>
                <p className="text-xs text-gray-300/85 leading-relaxed font-sans">
                  Method tests, known failure modes, coverage, edge cases and independent review where required.
                </p>
              </div>

              {/* Row 9 */}
              <div className="space-y-1 pt-2.5">
                <span className="font-mono text-xs font-bold text-white block">change control</span>
                <p className="text-xs text-gray-300/85 leading-relaxed font-sans">
                  Prior and new version, reason, effect on comparability, and the historical restatement rule.
                </p>
              </div>

              {/* Row 10 */}
              <div className="space-y-1 pt-2.5">
                <span className="font-mono text-xs font-bold text-white block">explainability</span>
                <p className="text-xs text-gray-300/85 leading-relaxed font-sans">
                  Users can see the factors and method facts needed to understand a result &mdash; without a universal explainability claim.
                </p>
              </div>

              {/* Row 11 */}
              <div className="space-y-1 pt-2.5">
                <p className="text-xs text-gray-300/85 leading-relaxed font-sans">
                  <strong className="font-bold text-white">Method gates.</strong> Until every row above is approved and versioned, no heat map, gauge, scorecard, radar, ranking, percentile, trend line or forecast chart is canonical. Sorting by risk value stays disabled unless the scale is genuinely ordinal or quantitative and the method authority supports ranking.
                </p>
              </div>
            </div>

            {/* 2 Stacked Cards */}
            <div className="space-y-4 pt-2">
              {/* Card 1: If a visualization ever ships */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-5 space-y-3">
                <div className="w-7 h-7 rounded-md bg-[#182E38] flex items-center justify-center text-gray-300 font-mono text-[11px] font-bold border border-gray-700/80">
                  ▥
                </div>
                <h3 className="text-base font-bold text-white">
                  If a visualization ever ships
                </h3>
                <div className="divide-y divide-gray-800/80 text-xs text-gray-300/90 font-sans space-y-2.5 pt-1">
                  <div className="py-2 flex items-start gap-2.5 first:pt-0">
                    <span className="w-3 h-3 rounded-[2px] border-2 border-[#E0533C] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">It has an accessible table equivalent carrying the exact values, definitions, units, time basis and status.</span>
                  </div>
                  <div className="py-2 flex items-start gap-2.5">
                    <span className="w-3 h-3 rounded-[2px] border-2 border-[#E0533C] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">Colour does not imply severity or priority without accompanying text and a defined scale.</span>
                  </div>
                  <div className="py-2 flex items-start gap-2.5">
                    <span className="w-3 h-3 rounded-[2px] border-2 border-[#E0533C] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">A change in <strong className="text-white font-bold">method version</strong> is shown separately from a change in underlying <strong className="text-white font-bold">evidence</strong>.</span>
                  </div>
                  <div className="py-2 flex items-start gap-2.5">
                    <span className="w-3 h-3 rounded-[2px] border-2 border-[#E0533C] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">It remains usable at 400% reflow, because a risk view nobody can read is not a risk view.</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Why the restraint matters */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-5 space-y-3">
                <h3 className="text-base font-bold text-white">
                  Why the restraint matters
                </h3>
                <p className="text-xs text-gray-300/90 leading-relaxed font-sans">
                  A risk number is persuasive out of proportion to what it usually knows. Once a figure is on a slide it stops carrying its denominator, its exclusions and its freshness &mdash; and it starts getting compared to figures computed a different way.
                </p>
                <p className="text-xs text-gray-300/90 leading-relaxed font-sans pt-1">
                  So the number waits for the method. What ships first is the evidence, the scope and the honest statement of what is unknown.
                </p>
              </div>
            </div>
          </div>

          </div>

        {/* ========================================================================= */}
        {/* SECTION 1: HERO (DESKTOP: hidden sm:block) */}
        {/* ========================================================================= */}
        <section id="hero" className="hidden sm:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Text & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  PLATFORM &middot; RISK INTELLIGENCE
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151B28] tracking-tight leading-[1.15]">
                Transparent, evidence-linked risk &mdash;{" "}
                <span className="text-[#E0533C]">
                  and decision support that stays decision support.
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-[#151B28]/75 max-w-xl leading-relaxed">
                Every risk view discloses its definition, source lineage, scope, assumptions, limitations, freshness, owner and permitted decision use. It organizes evidence and options. It does not make the decision, and it does not compress uncertainty into a colour.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="px-6 py-3 bg-[#E0533C] hover:bg-[#c94530] text-white font-bold text-sm rounded-lg transition-all shadow-md"
                >
                  Book a Demo
                </button>
                <a
                  href="#doctrine"
                  className="px-5 py-3 bg-[#EFECE6] hover:bg-gray-200 text-[#151B28] font-semibold text-sm rounded-lg border border-gray-300/80 transition-all shadow-sm"
                >
                  Explore the Platform
                </a>
                <a
                  href="/verify-evidence"
                  className="px-5 py-3 bg-[#EFECE6] hover:bg-gray-200 text-[#151B28] font-semibold text-sm rounded-lg border border-gray-300/80 transition-all shadow-sm"
                >
                  Evidence ledger
                </a>
              </div>

              {/* Sub-footnote */}
              <p className="text-xs text-gray-500 leading-relaxed max-w-xl pt-1">
                Proof stays ungated. Evidence, Trust Center, Documentation and System Status are reachable without a demo form.
              </p>
            </div>

            {/* Right Column: Hero Graphic */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl bg-black">
                <Image
                  src="/images/ri1.png"
                  alt="Risk Intelligence Control Room & Holographic Dashboard"
                  width={560}
                  height={640}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: SURFACE DOCTRINE & VOCABULARY HELD BACK */}
        {/* ========================================================================= */}
        <section id="doctrine" className="hidden sm:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200/70">
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                SURFACE DOCTRINE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
              Evidence before score. Definition before visualization.
            </h2>
            <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
              A chart, a matrix or a ranking cannot define risk. A polished generic risk dashboard would be the failure mode here, not the goal &mdash; because it would present unmethodized facts nobody has approved.
            </p>
          </div>

          {/* 8-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-8">
            {SURFACE_DOCTRINES.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-300/80 p-5 sm:p-6 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#E0533C]">
                      {item.num}
                    </span>
                    <h3 className="text-base font-bold text-[#151B28]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 text-xs font-sans">
                  <span className="text-[#E0533C] font-bold">Blocked: </span>
                  <span className="text-gray-600">{item.blocked}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Vocabulary held back until it's defined */}
          <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-8 shadow-sm space-y-5">
            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-bold text-[#151B28]">
                Vocabulary held back until it's defined
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans max-w-3xl">
                These words carry method commitments. They need an authoritative definition, scope and owner before they appear in a public risk view &mdash; so they don't appear here.
              </p>
            </div>

            {/* Held Back Words Array */}
            <div className="flex flex-wrap gap-2 pt-1">
              {HELD_BACK_WORDS.map((word, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-gray-100 border border-gray-200 text-gray-600 font-mono text-xs rounded-md"
                >
                  {word}
                </span>
              ))}
            </div>

            {/* Sublabel & Never Inferred Words */}
            <div className="pt-2 space-y-3">
              <p className="text-xs font-bold text-[#151B28] font-sans">
                <span className="text-[#E0533C]">Never inferred from a risk view at all</span> &mdash; each of these carries its own separate claim and scope controls:
              </p>

              <div className="flex flex-wrap gap-2">
                {NEVER_INFERRED_WORDS.map((word, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-red-50/60 border border-red-200 text-red-700 font-mono text-xs rounded-md"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: EVIDENCE-LINKED RISK VIEW (#EFECE6 WARM BEIGE BACKGROUND) */}
        {/* ========================================================================= */}
        <section id="evidence-view" className="hidden sm:block w-full bg-[#EFECE6] py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  EVIDENCE-LINKED RISK VIEW
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
                Trace a statement all the way down to its sources.
              </h2>
              <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
                This is the shape of a production risk view, with synthetic values shown only to demonstrate structure. The lineage runs risk view &rarr; method &rarr; evidence set &rarr; source object, and every source carries its own state.
              </p>
            </div>

          {/* Main Lineage & Governance Card Container */}
          <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden mb-8">
            {/* Header Bar */}
            <div className="bg-[#FAF9F6] p-6 border-b border-gray-200/80 space-y-4">
              <div className="flex flex-wrap justify-between items-center gap-2 font-mono text-xs text-gray-500">
                <span>risk_view_id &middot; RV-4471 (synthetic)</span>
                <span>as-of 03 Aug 2026 09:00 UTC &middot; window 30d</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#151B28] leading-snug">
                Privileged access to payment-processing systems is not fully evidenced for the current review period.
              </h3>

              {/* Status Badges */}
              <div className="flex flex-wrap gap-2 font-mono text-[10px] font-bold uppercase">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md border border-gray-200">
                  + SUBJECT: PAYMENT PROCESSING
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md border border-gray-200">
                  + ENV: PRODUCTION, EU-WEST
                </span>
                <span className="bg-amber-50 text-amber-800 px-3 py-1 rounded-md border border-amber-200">
                  + EVIDENCE: PARTIAL
                </span>
                <span className="bg-[#FFF8EC] text-[#B47818] px-3 py-1 rounded-md border border-dashed border-[#E3B05C]">
                  + METHOD: PENDING AUTHORITY
                </span>
              </div>
            </div>

            {/* 2-Column Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-gray-200/80 p-6 gap-6">
              {/* Left Column: Lineage Tree (8 cols) */}
              <div className="lg:col-span-8 space-y-5">
                <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                  LINEAGE &mdash; TRACEABLE IN BOTH DIRECTIONS
                </span>

                <div className="space-y-4 text-xs font-sans">
                  {/* Node 1: RISK VIEW */}
                  <div className="flex items-start gap-3">
                    <span className="w-4 h-4 rounded-full border-2 border-[#E0533C] bg-red-50 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold text-gray-400 uppercase">RISK VIEW</span>
                        <strong className="font-mono font-bold text-[#151B28]">RV-4471</strong>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        A statement about evidence sufficiency within a declared scope &mdash; not a level, score or category.
                      </p>
                    </div>
                  </div>

                  {/* Node 2: METHOD */}
                  <div className="pl-6 border-l-2 border-gray-200 space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="w-3.5 h-3.5 bg-blue-50 border-2 border-blue-600 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] font-bold text-gray-400 uppercase">METHOD</span>
                          <strong className="font-mono font-bold text-[#151B28]">METH-ACCESS-REVIEW</strong>
                          <span className="font-mono text-[9px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-200 font-bold uppercase">
                            &mdash; NOT YET APPROVED
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          Definition, inputs, missing-data behaviour and validation reference are required before any value or category may render.
                        </p>
                      </div>
                    </div>

                    {/* Node 3: EVIDENCE SET */}
                    <div className="pl-6 border-l-2 border-gray-200 space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="w-3.5 h-3.5 bg-gray-100 border-2 border-gray-400 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] font-bold text-gray-400 uppercase">EVIDENCE SET &middot; 5 SOURCES</span>
                            <strong className="font-mono font-bold text-[#151B28]">ES-4471-a</strong>
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            Completeness vocabulary comes from the Evidence authority. No custom percentage is inverted here.
                          </p>
                        </div>
                      </div>

                      {/* Source Objects List */}
                      <div className="pl-6 border-l-2 border-gray-200 space-y-3.5 pt-1">
                        {/* Source 1 */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <span className="font-mono text-[10px] text-gray-400 font-bold uppercase">SOURCE OBJECT</span>
                            <span className="font-mono text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded">● CURRENT</span>
                          </div>
                          <h4 className="font-bold text-[#151B28]">Identity provider access export</h4>
                          <p className="text-gray-600 leading-relaxed">Observed 03 Aug 2026. Verified in the evidence ledger. Access class: controlled.</p>
                        </div>

                        {/* Source 2 */}
                        <div className="space-y-1 pt-2 border-t border-gray-100">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <span className="font-mono text-[10px] text-gray-400 font-bold uppercase">SOURCE OBJECT</span>
                            <span className="font-mono text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded">● STALE</span>
                          </div>
                          <h4 className="font-bold text-[#151B28]">Quarterly access review record</h4>
                          <p className="text-gray-600 leading-relaxed">Observed 19 Apr 2026, outside the method's freshness window. Blocks a current conclusion where the method requires fresh data.</p>
                        </div>

                        {/* Source 3 */}
                        <div className="space-y-1 pt-2 border-t border-gray-100">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <span className="font-mono text-[10px] text-gray-400 font-bold uppercase">SOURCE OBJECT</span>
                            <span className="font-mono text-[10px] font-bold bg-red-50 text-red-700 border border-red-200 px-2 py-0.5 rounded">✕ CONFLICTING</span>
                          </div>
                          <h4 className="font-bold text-[#151B28]">Privileged-role inventory</h4>
                          <p className="text-gray-600 leading-relaxed">Two current sources disagree on role membership. The conflict is shown rather than resolved, and the view is held under review by policy.</p>
                        </div>

                        {/* Source 4 */}
                        <div className="space-y-1 pt-2 border-t border-gray-100">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <span className="font-mono text-[10px] text-gray-400 font-bold uppercase">SOURCE OBJECT</span>
                            <span className="font-mono text-[10px] font-bold bg-gray-100 text-gray-600 border border-gray-200 px-2 py-0.5 rounded">&mdash; MISSING</span>
                          </div>
                          <h4 className="font-bold text-[#151B28]">Break-glass account attestation</h4>
                          <p className="text-gray-600 leading-relaxed">Not present. Missing stays missing &mdash; never imputed from an industry average, an engagement signal or an AI summary.</p>
                        </div>

                        {/* Source 5 */}
                        <div className="space-y-1 pt-2 border-t border-gray-100">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <span className="font-mono text-[10px] text-gray-400 font-bold uppercase">SOURCE OBJECT</span>
                            <span className="font-mono text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 rounded">🔒 RESTRICTED</span>
                          </div>
                          <h4 className="font-bold text-[#151B28]">Third-party administrator listing</h4>
                          <p className="text-gray-600 leading-relaxed">Supports an authorized view without exposing the artifact or its sensitive metadata publicly.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Governance & Decision Use (4 cols) */}
              <div className="lg:col-span-4 space-y-6 pt-4 lg:pt-0">
                {/* Governance */}
                <div className="space-y-3">
                  <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                    GOVERNANCE
                  </span>
                  <div className="font-mono text-xs divide-y divide-gray-100 space-y-2 text-[#151B28]">
                    <div className="flex justify-between pt-2 first:pt-0">
                      <span className="text-gray-500">method_id</span>
                      <span className="font-bold">pending</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-gray-500">method_version</span>
                      <span className="font-bold">pending</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-gray-500">score / level</span>
                      <span className="font-bold">not rendered</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-gray-500">freshness</span>
                      <span className="font-bold">1 stale source</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-gray-500">completeness</span>
                      <span className="font-bold">partial</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-gray-500">contradiction</span>
                      <span className="font-bold">under review</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-gray-500">owner</span>
                      <span className="font-bold">Security governance</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-gray-500">reviewer cadence</span>
                      <span className="font-bold">quarterly</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-gray-500">state</span>
                      <span className="font-bold">under review</span>
                    </div>
                  </div>
                </div>

                {/* Decision Use */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                    DECISION USE
                  </span>

                  <div className="space-y-3 text-xs font-sans">
                    <div className="space-y-1">
                      <strong className="font-mono text-[9px] text-gray-400 uppercase block">QUESTION THIS SUPPORTS</strong>
                      <p className="text-gray-700 leading-relaxed">Do we have enough current evidence to complete this access review, or do we need to gather more first?</p>
                    </div>

                    <div className="space-y-1">
                      <strong className="font-mono text-[9px] text-gray-400 uppercase block">AUDIENCE</strong>
                      <p className="text-gray-700 leading-relaxed">Security governance, system owner, GRC reviewer.</p>
                    </div>

                    <div className="space-y-1">
                      <strong className="font-mono text-[9px] text-gray-400 uppercase block">OPTIONS AVAILABLE</strong>
                      <p className="text-gray-700 leading-relaxed">Gather the missing attestation &middot; resolve the inventory conflict &middot; escalate to the system owner &middot; defer with a recorded reason.</p>
                    </div>

                    <div className="space-y-1 pt-2">
                      <strong className="font-mono text-[9px] text-[#E0533C] uppercase block font-bold">PROHIBITED USES</strong>
                      <p className="text-[#E0533C] leading-relaxed">Accepting the risk automatically. Determining materiality. Concluding compliance or non-compliance. Authorizing a response action. Assigning remediation budget.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footnote Bar */}
            <div className="bg-[#FAF9F6] p-4 border-t border-gray-200/80 font-sans text-xs text-gray-600 leading-relaxed">
              <strong className="text-[#151B28]">What this view does not establish.</strong> It says something about evidence sufficiency in a stated scope at a stated time. It does not say the systems are secure, that a breach is likely, that a control failed, or that anyone is at fault. Those are separate claims requiring separate authority.
            </div>
          </div>

          {/* 3 Bottom Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 shadow-sm space-y-4">
              <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                ◈
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#151B28]">
                Five source states
              </h3>
              <div className="divide-y divide-gray-100 text-xs font-sans text-gray-600 space-y-2 pt-1">
                <div className="pt-2 first:pt-0">
                  <strong className="text-[#151B28]">Current</strong> &mdash; may support a current view, within its stated scope and freshness policy.
                </div>
                <div className="pt-2">
                  <strong className="text-[#151B28]">Stale</strong> &mdash; visible, and may block a conclusion where the method requires fresh data.
                </div>
                <div className="pt-2">
                  <strong className="text-[#151B28]">Missing</strong> &mdash; stays missing. Never imputed.
                </div>
                <div className="pt-2">
                  <strong className="text-[#151B28]">Restricted</strong> &mdash; supports an authorized view without leaking the artifact.
                </div>
                <div className="pt-2">
                  <strong className="text-[#151B28]">Withdrawn</strong> &mdash; triggers review of every dependent risk view and claim.
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                  ≢
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#151B28]">
                  Supersession, not erasure
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                  New evidence does not erase the evidence that supported a past decision-support view. Both remain inspectable, so a decision made last quarter can still be understood on the basis it was actually made.
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 text-[11px] font-mono text-gray-600 leading-relaxed space-y-1">
                <strong className="text-gray-800 uppercase block text-[9px] tracking-wider">INTEGRITY TERMS</strong>
                <span>The evidence system's own tamper-evident and verification vocabulary is used as-is &mdash; never broadened to "immutable" or "independently verified" unless that is true.</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                  ≡
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#151B28]">
                  External evidence isn't automatically authoritative
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                  Issuer, date, scope and limitation stay visible on any externally issued artifact. Being external does not make it authoritative for every decision it might seem to touch.
                </p>
              </div>

              <div className="pt-3">
                <a
                  href="/verify-evidence"
                  className="px-4 py-2.5 bg-white hover:bg-gray-50 text-[#151B28] text-xs font-bold rounded-lg border border-gray-300 shadow-sm transition-all inline-block"
                >
                  Evidence ledger &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* ========================================================================= */}
        {/* SECTION 4: METHOD RESTRAINT (#0B1B26 DARK OBSIDIAN NAVY BACKGROUND) */}
        {/* ========================================================================= */}
        <section id="restraint" className="hidden sm:block bg-[#0B1B26] text-white py-14 sm:py-16 my-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  METHOD RESTRAINT
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                What would have to exist before a number could.
              </h2>
              <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
                The source authority defines no risk score, scale, formula, level, benchmark, appetite or threshold. This is the contract that would govern one if it were later authorized &mdash; it is not a claim that any of it exists today.
              </p>
            </div>

            {/* Center Holographic Graphic Container */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl bg-black max-w-5xl mx-auto">
              <Image
                src="/images/ri2.png"
                alt="Risk Intelligence Method Pipeline & Governance Controls"
                width={1000}
                height={550}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>

            {/* 2-Column Bottom Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Left Card: If a visualization ever ships */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 sm:p-7 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-lg bg-[#182E38] flex items-center justify-center text-gray-300 font-mono text-xs font-bold border border-gray-700">
                      ▥
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      If a visualization ever ships
                    </h3>
                  </div>

                  <div className="divide-y divide-gray-800/80 text-xs sm:text-sm text-gray-300 font-sans">
                    <div className="py-2.5 flex items-start gap-3 first:pt-0">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        It has an accountable table equivalent carrying the exact values, definitions, units, time limits and status.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        Colour does not imply severity or priority without accompanying text and a defined scale.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        A change in <strong className="text-white font-bold">method version</strong> is shown separately from a change in underlying <strong className="text-white font-bold">evidence</strong>.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        It remains viewable at 200% zoom, because a risk summary should read 1-to-1 or not view.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Why the restraint matters */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 sm:p-7 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white">
                    Why the restraint matters
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                    A risk number is persuasive out of proportion to what it actually knows. Once a figure is on a slide it stops carrying its uncertainties, its exclusions and its freshness &mdash; and it starts getting compared to figures computed a different way.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans pt-1">
                    So the number waits for the method. What ships first is the evidence, the scope and the honest statement of what is unknown.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: INTERPRETATION BOUNDARIES (#F4F3EF OFF-WHITE BACKGROUND) */}
        {/* ========================================================================= */}
        <section id="interpretation" className="w-full bg-[#F4F3EF] py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  INTERPRETATION BOUNDARIES
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
                Correlation, attribution, trend, forecast &mdash; four different things.
              </h2>
              <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
                Detection, case, control and evidence relationships enrich context. They do not automatically establish cause, probability, blame, materiality or financial impact.
              </p>
            </div>

          {/* 7-Row Interpretation Matrix Table */}
          <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[750px]">
                <thead>
                  <tr className="bg-[#EBE7DF] text-[#151B28] text-[11px] font-mono font-bold uppercase tracking-wider border-b border-gray-300/70">
                    <th className="py-4 px-6 w-1/5">CONCEPT</th>
                    <th className="py-4 px-6 w-9/20 border-l border-gray-300/70">ALLOWED BY DEFAULT</th>
                    <th className="py-4 px-6 w-[35%] border-l border-gray-300/70">REQUIRES SEPARATE AUTHORITY</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200/80 text-xs sm:text-sm">
                  {[
                    {
                      concept: "association",
                      allowed: "Showing that approved observations are related or co-occur under a defined relationship.",
                      requires: "Claiming one observation caused another.",
                    },
                    {
                      concept: "attribution",
                      allowed: "Showing source, ownership and relationship facts.",
                      requires: "Assigning cause, fault or responsibility for an incident or outcome.",
                    },
                    {
                      concept: "trend",
                      allowed: "Showing measured change over a defined period, using the same method throughout.",
                      requires: "Explaining why the change occurred.",
                    },
                    {
                      concept: "scenario",
                      allowed: "Presenting clearly labelled hypotheticals or decision options where authorized.",
                      requires: "Any probability that a scenario will occur.",
                    },
                    {
                      concept: "forecast",
                      allowed: "Not assumed at all.",
                      highlightAllowed: true,
                      requires: "A predictive method, its validation, horizon, uncertainty and claims approval.",
                    },
                    {
                      concept: "loss / impact",
                      allowed: "Only approved observed or modelled fields.",
                      requires: "Financial loss estimates, business-interruption estimates or materiality.",
                    },
                    {
                      concept: "recommendation",
                      allowed: "Presenting governed options where source-approved.",
                      requires: "Unqualified prescriptive action or autonomous remediation.",
                    },
                  ].map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-3.5 px-6 font-mono font-bold text-[#151B28]">
                        {item.concept}
                      </td>
                      <td className="py-3.5 px-6 text-gray-600 border-l border-gray-200/80 leading-relaxed font-sans">
                        {item.highlightAllowed ? (
                          <strong className="text-[#151B28] font-bold">{item.allowed}</strong>
                        ) : (
                          item.allowed
                        )}
                      </td>
                      <td className="py-3.5 px-6 text-gray-700 border-l border-gray-200/80 leading-relaxed font-sans">
                        {item.requires}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2-Column Bottom Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1: Risk is not compliance */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                    ▼
                  </div>
                  <h3 className="text-lg font-bold text-[#151B28]">
                    Risk is not compliance
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                  Framework mappings, certifications and control status stay distinct from risk conclusions. A control being in a particular state does not by itself determine a risk conclusion, and a risk view never establishes that you are compliant, certified or covered.
                </p>
              </div>

              <div className="pt-3">
                <a
                  href="/services"
                  className="px-4 py-2.5 bg-white hover:bg-gray-50 text-[#151B28] text-xs font-bold rounded-lg border border-gray-300 shadow-sm transition-all inline-block"
                >
                  Compliance Control Plane &rarr;
                </a>
              </div>
            </div>

            {/* Card 2: AI assists; it does not adjudicate */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                    ◆
                  </div>
                  <h3 className="text-lg font-bold text-[#151B28]">
                    AI assists; it does not adjudicate
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                  Where AI summarizes risk context, it inherits the bounded, cited and overridable behaviour and the decision-right classes defined by AI Security &amp; Governance. AI output is not risk authority, and no risk score is generated by a model without an approved method.
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 text-[11px] font-mono text-gray-600 leading-relaxed space-y-1">
                <strong className="text-gray-800 uppercase block text-[9px] tracking-wider">FALLBACK</strong>
                <span>When AI is unavailable, a deterministic source-driven view is used. The underlying evidence view is never blocked by it.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* ========================================================================= */}
        {/* SECTION 6: DECISION SUPPORT AND HUMAN AUTHORITY (#EFECE6 WARM BEIGE BACKGROUND) */}
        {/* ========================================================================= */}
        <section id="decision-support" className="w-full bg-[#EFECE6] py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  DECISION SUPPORT AND HUMAN AUTHORITY
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
                The decision question is stated out loud &mdash; not hidden as an objective.
              </h2>
              <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
                A decision-support frame names what it is trying to help with, who it is for, what the evidence does and does not cover, what the options are, and who holds the authority to choose.
              </p>
            </div>

          {/* 3-Column Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {/* Card 01: What every frame carries */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-gray-400 block border-b border-gray-100 pb-1">
                    01
                  </span>
                  <h3 className="text-base font-bold text-[#151B28]">
                    What every frame carries
                  </h3>
                </div>

                <div className="divide-y divide-gray-100 text-xs sm:text-sm text-gray-700 font-sans">
                  <div className="py-2.5 flex items-start gap-3 first:pt-0">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Decision question</strong> &mdash; in plain language.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Audience</strong> &mdash; who may view, interpret or act.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Evidence summary</strong> including what is missing, stale or conflicting.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Options</strong> &mdash; which may include defer, escalate or gather more evidence.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Tradeoffs</strong> &mdash; constraints and dependencies, without false cost-benefit precision.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 02: Authority and escalation */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-gray-400 block border-b border-gray-100 pb-1">
                    02
                  </span>
                  <h3 className="text-base font-bold text-[#151B28]">
                    Authority and escalation
                  </h3>
                </div>

                <div className="divide-y divide-gray-100 text-xs sm:text-sm text-gray-700 font-sans">
                  <div className="py-2.5 flex items-start gap-3 first:pt-0">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Authority</strong> &mdash; the named human role or governed workflow that may decide or approve.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Escalation</strong> &mdash; what happens when evidence is insufficient, sources conflict, or authority is missing.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Challenge</strong> &mdash; users can dispute the evidence, method, scope or assumptions and route the view for review.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Decision record</strong> &mdash; linked to attributable history where the product supports it.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 03: What a risk view never does on its own (RED FRAME) */}
            <div className="bg-white rounded-2xl border-2 border-[#E0533C] p-6 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-[#E0533C] block border-b border-gray-100 pb-1">
                    03
                  </span>
                  <h3 className="text-base font-bold text-[#151B28]">
                    What a risk view never does on its own
                  </h3>
                </div>

                <div className="divide-y divide-gray-100 text-xs sm:text-sm text-gray-700 font-sans">
                  <div className="py-2.5 flex items-start gap-3 first:pt-0">
                    <span className="w-3.5 h-3.5 rounded-full border border-gray-400 mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">Accept a risk.</span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-full border border-gray-400 mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">Assign budget.</span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-full border border-gray-400 mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">Certify compliance.</span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-full border border-gray-400 mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">Authorize a response action.</span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-full border border-gray-400 mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">Close an investigation.</span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-full border border-gray-400 mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">Override organizational policy.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 text-[11px] font-mono text-gray-600 leading-relaxed space-y-1">
                <strong className="text-gray-800 uppercase block text-[9px] tracking-wider">DEFAULT</strong>
                <span>There is no auto-action control on a decision-support panel.</span>
              </div>
            </div>
          </div>

          {/* Bottom Card: Executive support stays traceable */}
          <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-[#151B28]">
              Executive support stays traceable
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
              An executive summary may compress complexity, but it cannot remove the uncertainty, exclusions or source freshness that materially change how it should be read. Every executive view drills back to evidence, definition, method, scope, assumptions and limitations. There is no untraceable red/amber/green.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans pt-1">
              <strong className="text-[#151B28] font-bold">Route separation.</strong> Board and executive reporting is a separate conditional destination &mdash; Executive Risk Intelligence at /platform/executive-risk. This page may link to it but does not absorb it, present it as current, or publish a board KPI set, reporting cadence or materiality threshold on its behalf.
            </p>
          </div>
        </div>
      </section>

        {/* ========================================================================= */}
        {/* SECTION 7: CHANGE AND COMPARISON (#F4F3EF OFF-WHITE BACKGROUND) */}
        {/* ========================================================================= */}
        <section id="comparison" className="w-full bg-[#F4F3EF] py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  CHANGE AND COMPARISON
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
                Some comparisons should be refused.
              </h2>
              <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
                A comparison engine checks method ID and version, scope, time basis, units, completeness and required source classes before it renders any delta. When they don't match, it explains why instead of producing a number.
              </p>
            </div>

            {/* Comparison Refusal Box */}
            <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden mb-8">
              {/* Top 2-Column Comparison Display */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200/80 p-6 gap-6 bg-[#FAF9F6] border-b border-gray-200/80">
                {/* Period A */}
                <div className="space-y-3">
                  <span className="font-mono text-[10px] text-gray-400 font-bold uppercase tracking-wider block">
                    PERIOD A &middot; 23 2026
                  </span>
                  <h3 className="text-sm font-bold text-[#151B28]">
                    Access evidence sufficiency
                  </h3>
                  <div className="font-mono text-xs divide-y divide-gray-100 space-y-2 text-[#151B28]">
                    <div className="flex justify-between pt-2 first:pt-0">
                      <span className="text-gray-500">method_id</span>
                      <span className="font-bold">METH-ACCESS-REVIEW</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-gray-500">method_version</span>
                      <span className="font-bold">v1.2</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-gray-500">scope</span>
                      <span className="font-bold">PRODUCTION, EU-WEST</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-gray-500">time basis</span>
                      <span className="font-bold">90d window</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-gray-500">source classes</span>
                      <span className="font-bold">4 of 5 present</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-gray-500">completeness</span>
                      <span className="font-bold">partial</span>
                    </div>
                  </div>
                </div>

                {/* Period B */}
                <div className="space-y-3 pt-4 md:pt-0">
                  <span className="font-mono text-[10px] text-gray-400 font-bold uppercase tracking-wider block">
                    PERIOD B &middot; Q1 2026
                  </span>
                  <h3 className="text-sm font-bold text-[#151B28]">
                    Access evidence sufficiency
                  </h3>
                  <div className="font-mono text-xs divide-y divide-gray-100 space-y-2 text-[#151B28]">
                    <div className="flex justify-between items-center pt-2 first:pt-0">
                      <span className="text-gray-500">method_id</span>
                      <span className="font-bold">METH-ACCESS-REVIEW</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-gray-500">method_version</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold">v2.0</span>
                        <span className="bg-red-50 text-red-700 border border-red-200 px-1.5 py-0.5 text-[9px] font-bold rounded">
                          ✕ CHANGED
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-gray-500">scope</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold">PRODUCTION, EU-WEST + US-EAST</span>
                        <span className="bg-red-50 text-red-700 border border-red-200 px-1.5 py-0.5 text-[9px] font-bold rounded">
                          ✕ CHANGED
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-gray-500">time basis</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold">30d window</span>
                        <span className="bg-red-50 text-red-700 border border-red-200 px-1.5 py-0.5 text-[9px] font-bold rounded">
                          ✕ CHANGED
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-gray-500">source classes</span>
                      <span className="font-bold">5 of 5 present</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-gray-500">completeness</span>
                      <span className="font-bold">partial</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Refusal Alert Box */}
              <div className="bg-[#FFF5F5] p-6 border-t border-red-200 space-y-4">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] font-bold text-[#E0533C] uppercase tracking-wider block">
                    COMPARISON BLOCKED
                  </span>
                  <h3 className="text-base font-bold text-[#151B28]">
                    These two periods are not comparable.
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 font-sans leading-relaxed pt-1">
                    The method version changed from v1.2 to v2.0, the scope widened to a second region, and the observation window narrowed from 90 days to 30. Any percentage change rendered across these differences would be an artifact of the changes, not a movement in the underlying position. So no delta is shown.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  <button className="px-4 py-2 bg-white text-[#151B28] font-mono text-xs font-bold rounded-md border border-gray-300 shadow-sm hover:bg-gray-50 transition-all">
                    Compare within v2.0 only &rarr;
                  </button>
                  <button className="px-4 py-2 bg-white text-[#151B28] font-mono text-xs font-bold rounded-md border border-gray-300 shadow-sm hover:bg-gray-50 transition-all">
                    View the method change record &rarr;
                  </button>
                  <button className="px-4 py-2 bg-white text-[#151B28] font-mono text-xs font-bold rounded-md border border-gray-300 shadow-sm hover:bg-gray-50 transition-all">
                    Restate Period A under v2.0 &rarr;
                  </button>
                </div>
              </div>
            </div>

            {/* 2-Column Bottom Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Left Card */}
              <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                  ◫
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#151B28]">
                  Method change vs evidence change
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                  These are annotated separately, always. A view can move because the world changed or because we changed how we measure it &mdash; and conflating the two is how a governance conversation goes wrong. A superseded method preserves its historical results under the old method rather than restating them silently.
                </p>
              </div>

              {/* Right Card */}
              <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                      ◧
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#151B28]">
                      What history records
                    </h3>
                  </div>

                  <div className="divide-y divide-gray-100 text-xs sm:text-sm text-gray-700 font-sans">
                    <div className="py-2 flex items-start gap-3 first:pt-0">
                      <span className="w-3.5 h-3.5 rounded-full border border-gray-400 mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">Evidence added, superseded or withdrawn.</span>
                    </div>
                    <div className="py-2 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-full border border-gray-400 mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">Method version changes and the reason for each.</span>
                    </div>
                    <div className="py-2 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-full border border-gray-400 mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">Scope and assumption changes.</span>
                    </div>
                    <div className="py-2 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-full border border-gray-400 mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">Reviews, corrections and publication events, with actor role and effective time.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 text-[11px] font-mono text-gray-600 leading-relaxed space-y-1">
                  <strong className="text-gray-800 uppercase block text-[9px] tracking-wider">DRILL-DOWN RULE</strong>
                  <span>Moving to detail preserves the current scope, method, evidence and source context. No context reset that quietly changes the meaning.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: CROSS-PLATFORM RELATIONSHIPS (#0B1B26 DARK OBSIDIAN NAVY BACKGROUND) */}
        {/* ========================================================================= */}
        <section id="relationships" className="w-full bg-[#0B1B26] text-white py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  CROSS-PLATFORM RELATIONSHIPS
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Linked, and deliberately not collapsed.
              </h2>
              <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
                Risk Intelligence sits between several authorities. It references each of them; it redefines none of them.
              </p>
            </div>

            {/* 6 Parent Route Cards Grid (3 cols x 2 rows) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-white">Evidence ledger</h3>
                    <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 text-[9px] font-mono font-bold uppercase rounded">
                      ● ACTIVE
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">
                    Supplies tamper-evident evidence, lineage, completeness states and verification. Risk views reference it and use its vocabulary as-is.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="/verify-evidence"
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-bold rounded-lg border border-white/20 transition-all inline-block"
                  >
                    Open &rarr;
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-white">Detection &amp; Response</h3>
                    <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 text-[9px] font-mono font-bold uppercase rounded">
                      ● ACTIVE
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">
                    Correlated detections, investigations and cases can contribute evidence. They do not confer causality, severity or action authority on a risk view.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="/incident-readiness"
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-bold rounded-lg border border-white/20 transition-all inline-block"
                  >
                    Open &rarr;
                  </a>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-white">AI Security &amp; Governance</h3>
                    <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 text-[9px] font-mono font-bold uppercase rounded">
                      ● ACTIVE
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">
                    Owns the decision-right taxonomy that any AI-assisted risk summary inherits. Nothing here redefines the AI authority model.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="/responsible-ai"
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-bold rounded-lg border border-white/20 transition-all inline-block"
                  >
                    Open &rarr;
                  </a>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <h3 className="text-base font-bold text-white">Executive Risk Intelligence</h3>
                    <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 text-[9px] font-mono font-bold uppercase rounded">
                      ● CONDITIONAL
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">
                    The separate destination for Board and executive reporting with evidence drill-down. Not absorbed into this route and not presented as current.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <h3 className="text-base font-bold text-white">Security Analytics</h3>
                    <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 text-[9px] font-mono font-bold uppercase rounded">
                      ● CONDITIONAL
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">
                    A subordinate conditional destination. Nothing here implies its availability or a specific analytics engine behind it.
                  </p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <h3 className="text-base font-bold text-white">Managed Defense &amp; Continuous Assurance</h3>
                    <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 text-[9px] font-mono font-bold uppercase rounded">
                      ● ACTIVE
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">
                    Independent services. Their judgments and staffing do not become platform risk-method facts, and neither service is a risk-intelligence layer.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="bg-[#11242C] rounded-2xl border border-gray-800 border-l-4 border-l-[#E0533C] p-6 sm:p-7 space-y-2">
              <h3 className="text-base font-bold text-white">System Status is not a risk view</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                Live service health lives at System Status and only there. Operational availability is never inferred from a risk dashboard, and a risk view is never used to imply that something is up or down.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: DIRECT ANSWERS FAQ ACCORDION (#EFECE6 WARM BEIGE BACKGROUND) */}
        {/* ========================================================================= */}
        <section id="faq" className="w-full bg-[#EFECE6] py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  DIRECT ANSWERS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
                Questions a risk leader asks before trusting any of this.
              </h2>
            </div>

            {/* Collapsible FAQ List */}
            <div className="divide-y divide-gray-200/80 border-y border-gray-200/80">
              {[
                {
                  q: "What is ZoikoShield Risk Intelligence?",
                  a: "Transparent, evidence-linked risk and executive decision support. Its route state is conditional, so it currently explains how risk views are defined and governed rather than presenting production risk values.",
                },
                {
                  q: "Do you give a risk score?",
                  a: "No. The platform presents evidence sufficiency, lineage, freshness, completeness and explicit limitations. Risk scores, scales or levels require a separately authorized method and claims approval.",
                },
                {
                  q: "How do you explain a risk view?",
                  a: "By tracing it through its four lineage levels: risk view -> method -> evidence set -> source objects. Every source carries its state (Current, Stale, Missing, Restricted, Withdrawn) explicitly.",
                },
                {
                  q: "Do you predict breaches?",
                  a: "No. Current evidence and measured trends stay descriptive. Likelihood is never presented as a forecast of breach, incident or financial loss without an approved, validated predictive method.",
                },
                {
                  q: "Does a risk view mean we're compliant?",
                  a: "No. Control status, framework mappings and certifications stay distinct from risk conclusions. A risk view never establishes that you are compliant, certified or covered.",
                },
                {
                  q: "Can AI decide our risk priority?",
                  a: "No. AI assists by summarizing context, but it inherits bounded, cited and overridable behavior. Accountable humans or governed workflows retain decision authority.",
                },
                {
                  q: "What happens when evidence is missing or sources disagree?",
                  a: "Missing evidence stays missing — it is never imputed. Conflicting sources are displayed as conflicting rather than artificially resolved, and the view is placed under review.",
                },
                {
                  q: "Why won't it compare two periods for me?",
                  a: "A comparison is refused when method version, scope, time window or source classes differ between periods. Comparing across mismatched methods renders deltas that are artifacts of change, not movement in risk.",
                },
                {
                  q: "Where does executive and Board reporting live?",
                  a: "Board and executive reporting lives at Executive Risk Intelligence (/platform/executive-risk). This page provides platform risk views and decision-support structures.",
                },
                {
                  q: "Can a risk view be wrong, and then corrected?",
                  a: "Yes. Evidence, scope, method and conclusions can be corrected, superseded or withdrawn while preserving historical audit records. Edits are never silent.",
                },
                {
                  q: "Is anything on this page real customer data?",
                  a: "No. All values, IDs and statements shown on this page are synthetic structure demonstrations created to illustrate method commitments.",
                },
              ].map((item, idx) => (
                <div key={idx} className="py-4 sm:py-5">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between text-left gap-4 font-bold text-sm sm:text-base text-[#151B28] hover:text-[#E0533C] transition-colors"
                  >
                    <span>{item.q}</span>
                    <span className="text-[#E0533C] font-mono text-lg font-bold shrink-0">
                      {openFaqIndex === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openFaqIndex === idx && (
                    <p className="mt-3 text-xs sm:text-sm text-gray-600 font-sans leading-relaxed pr-8">
                      {item.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 10: GET STARTED CTA BANNER (DARK RADIAL PLUM AURA) */}
        {/* ========================================================================= */}
        <section id="get-started" className="w-full bg-[#071829] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3D2131] via-[#161B28]/70 to-[#071829] text-white pt-12 sm:pt-16 pb-8 sm:pb-12 mt-8 sm:mt-12 mb-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                GET STARTED
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Bring a risk statement you don't fully trust.
            </h2>

            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We'll walk it down to its sources &mdash; what's current, what's stale, what's missing, what disagrees &mdash; and be explicit about which parts need an approved method before they can carry a number at all.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="px-6 py-3 bg-[#E0533C] hover:bg-[#c94530] text-white font-bold text-sm rounded-lg transition-all shadow-md"
              >
                Book a Demo
              </button>
              <a
                href="#hero"
                className="px-5 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm rounded-lg border border-white/20 transition-all shadow-sm"
              >
                Explore the Platform
              </a>
              <a
                href="/about"
                className="px-5 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm rounded-lg border border-white/20 transition-all shadow-sm"
              >
                Visit the Trust Center
              </a>
            </div>

            {/* Monospace Footnote */}
            <p className="text-[11px] font-mono text-gray-400 max-w-xl mx-auto leading-relaxed pt-4">
              Risk taxonomy, method, scale, thresholds, benchmarks, execution fields and AI role are authority-gated. Route state is conditional; examples on this page are synthetic.
            </p>
          </div>
        </section>
      </main>

      <Footer />

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}
