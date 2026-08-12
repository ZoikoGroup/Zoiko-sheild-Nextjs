"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DemoModal } from "@/components/ui/DemoModal";

// 5 Concepts Data
const FIVE_CONCEPTS = [
  {
    num: "01",
    title: "Rules",
    desc: "What a method is looking for, who owns it, which version is current, and what it can't see.",
    linkText: "Inspect the rule contract →",
    href: "#concepts",
  },
  {
    num: "02",
    title: "Correlation",
    desc: "How two observations were related, on what basis, and what contradicts the relationship.",
    linkText: "Inspect a relationship →",
    href: "#concepts",
  },
  {
    num: "03",
    title: "Context",
    desc: "Which enrichment was applied, from which authority, how fresh it was, and what was missing.",
    linkText: "See provenance and gaps →",
    href: "#concepts",
  },
  {
    num: "04",
    title: "Replay",
    desc: "Versioned re-evaluation against a later method — and an honest account of what changed.",
    linkText: "Compare original vs replay →",
    href: "#concepts",
  },
  {
    num: "05",
    title: "Prioritization",
    desc: "Inputs, method version, rationale, uncertainty, override and history. Not a badge.",
    linkText: "Inspect a priority basis →",
    href: "#concepts",
  },
];

// 8 Doctrine Lines Data
const CONTENT_DOCTRINES = [
  {
    title: "Method before metric.",
    desc: "A priority, severity or confidence value cannot stand alone.",
  },
  {
    title: "Version before replay.",
    desc: "Original and replay method versions are always distinguished.",
  },
  {
    title: "Source before conclusion.",
    desc: "Every match, relationship and context claim points at its provenance.",
  },
  {
    title: "Correlation is not causality.",
    desc: "Relationships carry a basis and an uncertainty state.",
  },
  {
    title: "Context can be incomplete.",
    desc: "Missing, stale and conflicting context stays visible.",
  },
  {
    title: "Priority is operational.",
    desc: "It is not quietly converted into business risk or materiality.",
  },
  {
    title: "Automation is not authority.",
    desc: "Analytics output does not authorize a response action.",
  },
  {
    title: "Unknown is valid.",
    desc: "There is no positive default when method, source or state is unknown.",
  },
];

// 9 Rule Lifecycle States
const RULE_LIFECYCLE_STATES = [
  {
    name: "DRAFT",
    dotColor: "bg-gray-400",
    desc: "Proposal, spec, inputs, metrics, scope and owner specified.",
  },
  {
    name: "VALIDATED",
    dotColor: "bg-blue-500",
    desc: "Test data, data provenance, observed behaviour, limitations.",
  },
  {
    name: "REVIEWED",
    dotColor: "bg-purple-500",
    desc: "Security, product, privacy and legal review applicable.",
  },
  {
    name: "READY",
    dotColor: "bg-amber-500",
    desc: "Ownership, monitoring, rollback and release-gate requirements.",
  },
  {
    name: "ACTIVE",
    dotColor: "bg-emerald-500",
    desc: "Current info within approved scope, version and dependencies.",
  },
  {
    name: "TUNE",
    dotColor: "bg-orange-500",
    desc: "Interim review or tuning state; active; change plan & regression controls.",
  },
  {
    name: "GUARDED",
    dotColor: "bg-rose-500",
    desc: "Safety, quality or source issue; no automatic match claim.",
  },
  {
    name: "MUTED",
    dotColor: "bg-slate-500",
    desc: "Replacement and history preserved; no new matches current.",
  },
  {
    name: "REPLAY-ONLY",
    dotColor: "bg-violet-500",
    desc: "Re-evaluation for research; no current active output.",
  },
];

export default function SecurityAnalyticsPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F3EF] text-[#111827] font-sans antialiased">
      <Navbar />

      <main className="pt-24 sm:pt-28 pb-0 overflow-x-hidden">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO & DETECTION & RESPONSE */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  PLATFORM &middot; DETECTION &amp; RESPONSE
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#151B28] tracking-tight leading-[1.12]">
                Rules, correlation, context, replay &mdash; and prioritization{" "}
                <span className="text-[#E0533C]">you can take apart.</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-[#151B28]/75 max-w-xl leading-relaxed">
                Transparent prioritization means the basis and the limits are inspectable: which inputs were used, which method version produced the output, why, what was missing, and who can override it. It does not mean a number in a coloured badge.
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
                  href="#concepts"
                  className="px-5 py-3 bg-[#EFECE6] hover:bg-gray-200 text-[#151B28] font-semibold text-sm rounded-lg border border-gray-300/80 transition-all shadow-sm"
                >
                  Detection &amp; Response
                </a>
                <a
                  href="/services"
                  className="px-5 py-3 bg-[#EFECE6] hover:bg-gray-200 text-[#151B28] font-semibold text-sm rounded-lg border border-gray-300/80 transition-all shadow-sm"
                >
                  Explore the Platform
                </a>
              </div>

              {/* Sub-footnote */}
              <p className="text-xs text-gray-500 leading-relaxed max-w-xl pt-1">
                Proof stays ungated. Evidence, Trust Center, Docs and System Status are reachable without a demo.
              </p>
            </div>

            {/* Right Column: Hero Graphic / Holographic Control Room */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl bg-black">
                <Image
                  src="/images/incident-hero-3d.png"
                  alt="Security Analytics & Detection Platform Control Room"
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
        {/* SECTION 2: FIVE CONCEPTS & CONTENT DOCTRINE */}
        {/* ========================================================================= */}
        <section id="concepts" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200/70">
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                FIVE CONCEPTS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
              Five separate ideas. None of them stands in for another.
            </h2>
            <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
              Most analytics pages blur these together until a match reads as an incident and a score reads as risk. Here they're kept apart, each with its own record and its own edge.
            </p>
          </div>

          {/* 5-Column Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-8">
            {FIVE_CONCEPTS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-300/80 p-5 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-gray-400 block border-b border-gray-200 pb-2">
                    {item.num}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-[#151B28]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={item.href}
                    className="font-mono text-[10px] text-[#E0533C] font-bold hover:underline block"
                  >
                    {item.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Card: Content doctrine, in eight lines (PROMINENT ORANGE ACCENT LEFT BORDER) */}
          <div className="relative bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-8 pl-7 sm:pl-9 shadow-sm space-y-4 overflow-hidden">
            {/* Left Side Orange Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#E0533C]" />

            <h3 className="text-base sm:text-lg font-bold text-[#151B28]">
              Content doctrine, in eight lines
            </h3>

            <div className="divide-y divide-gray-100 text-xs sm:text-sm text-gray-700 font-sans">
              {CONTENT_DOCTRINES.map((doc, idx) => (
                <div key={idx} className="py-3 flex items-start gap-3 first:pt-0">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                  <span className="leading-relaxed">
                    <strong className="text-[#151B28] font-bold">{doc.title}</strong>{" "}
                    {doc.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: RULES (#F4F3EF BACKGROUND) */}
        {/* ========================================================================= */}
        <section id="rules" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200/70">
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                RULES
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
              Transparency without publishing the exploit.
            </h2>
            <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
              A public rule record doesn't require exposing detection logic. It requires purpose, scope, version, ownership, method context and limitations to be inspectable at the appropriate disclosure level.
            </p>
          </div>

          {/* 2-Column Top Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
            {/* Left Card: What a rule record carries */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                    ≡
                  </div>
                  <h3 className="text-lg font-bold text-[#151B28]">
                    What a rule record carries
                  </h3>
                </div>

                <div className="divide-y divide-gray-100 text-xs sm:text-sm text-[#151B28]/80 font-sans">
                  <div className="py-2.5 flex items-start gap-3 first:pt-0">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Identity and purpose</strong> &mdash; stable ID, approved name, and what the method is intended to identify within a stated scope.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Owner and version</strong> &mdash; accountable team, plus versioned reference semantics defined by product authority.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Scope</strong> &mdash; sources, environments, object types and time boundaries the rule applies to.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Prerequisites</strong> &mdash; the sources, context and permissions the rule needs to function at all.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Limitations</strong> &mdash; known blind spots, unavailable context and unsupported cases, stated plainly.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">History</strong> &mdash; version changes, reviews and effective dates, retained.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: What isn't claimed about rules (RED BORDER FRAME) */}
            <div className="bg-white rounded-2xl border-2 border-[#E0533C] p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                    ⬡
                  </div>
                  <h3 className="text-lg font-bold text-[#151B28]">
                    What isn't claimed about rules
                  </h3>
                </div>

                <div className="divide-y divide-gray-100 text-xs sm:text-sm text-gray-700 font-sans">
                  <div className="py-2.5 flex items-start gap-3 first:pt-0">
                    <span className="w-3.5 h-3.5 rounded-full border border-gray-400 mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      No rule-count, content-pack count or update-frequency figure without governed registry evidence.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-full border border-gray-400 mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      No "validated against an industry benchmark" without dataset, method, cohort, date and result.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-full border border-gray-400 mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      No "real-time" or "continuous" claims without timing semantics and operational evidence.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-full border border-gray-400 mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      No threat-framework coverage figure, technique count or badge inference.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-full border border-gray-400 mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      No managed-content library implied by the existence of a rule model.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 text-[11px] font-mono text-gray-600 leading-relaxed space-y-1">
                <strong className="text-gray-800 uppercase block text-[9px] tracking-wider">REGISTRY LAW</strong>
                <span>The engine provides no detection-content count, framework coverage, efficacy metric, benchmark or performance result. This page does not invent one.</span>
              </div>
            </div>
          </div>

          {/* Bottom 9-Stage Stepper Container */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-[#151B28]">
              Lifecycle &mdash; nine states, each with its own evidence
            </h3>

            <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 divide-x divide-y lg:divide-y-0 divide-gray-200">
              {RULE_LIFECYCLE_STATES.map((state, idx) => (
                <div key={idx} className="p-4 space-y-2 text-center flex flex-col justify-between items-center">
                  <div className="space-y-1.5 flex flex-col items-center">
                    <span className={`w-2 h-2 rounded-full ${state.dotColor} block`}></span>
                    <span className="font-mono text-[11px] font-bold text-[#151B28] block uppercase">
                      {state.name}
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-normal font-sans pt-1">
                    {state.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: CORRELATION (#EFECE6 WARM BEIGE BACKGROUND) */}
        {/* ========================================================================= */}
        <section id="correlation" className="bg-[#EFECE6] py-14 sm:py-16 border-t border-gray-300/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  CORRELATION
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
                A relationship is a claim. It shows its work.
              </h2>
              <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
                Correlation, sequence and proximity are not causality, attribution, compromise, policy violation, materiality or response authority. Every relationship keeps its basis, its lineage and its contradictions.
              </p>
            </div>

            {/* Illustrative Structure Matrix Card */}
            <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden mb-8">
              {/* Header Bar */}
              <div className="bg-[#EBE7DF] px-6 py-3 border-b border-gray-300/70 flex flex-wrap justify-between items-center gap-2 font-mono text-xs">
                <span className="font-bold text-[#151B28] uppercase tracking-wider">
                  RELATIONSHIP RECORD &mdash; ILLUSTRATIVE STRUCTURE
                </span>
                <span className="px-3 py-0.5 rounded-full font-bold text-[10px] bg-blue-50 text-blue-700 border border-blue-200">
                  REVIEW STATE: AUTHORIZED PROPOSAL
                </span>
              </div>

              {/* 3-Column Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200/80 p-6 gap-6">
                {/* Col 1 */}
                <div className="space-y-3">
                  <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                    BASIS AND CONTEXT
                  </span>
                  <div className="space-y-2 text-xs text-gray-600 font-sans leading-relaxed">
                    <p>Relationship type &mdash; approved taxonomy only</p>
                    <p>Method and version reference</p>
                    <p>Source refs with timestamps</p>
                    <p>Time window and ordering context</p>
                    <p>Directionality, where meaningful</p>
                    <p>Transformations applied to inputs</p>
                  </div>
                </div>

                {/* Col 2 */}
                <div className="space-y-3 md:pl-6 pt-4 md:pt-0">
                  <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                    SUPPORTING CONTEXT
                  </span>
                  <div className="space-y-2 text-xs text-gray-600 font-sans leading-relaxed">
                    <p>Approved facts and evidence refs</p>
                    <p>Asset and identity context, where authorized</p>
                    <p>Environment and object scope</p>
                    <p>Prior verified observations</p>
                  </div>
                </div>

                {/* Col 3 */}
                <div className="space-y-3 md:pl-6 pt-4 md:pt-0">
                  <span className="font-mono text-[10px] font-bold text-[#E0533C] uppercase tracking-wider block">
                    CONTRADICTING CONTEXT
                  </span>
                  <div className="space-y-2 text-xs text-gray-600 font-sans leading-relaxed">
                    <p>Conflicts stay visible &mdash; never resolved silently</p>
                    <p>Ambiguous or unknown state recorded</p>
                    <p>Missing interval, not "no activity"</p>
                    <p>Superseded relationships stay attributable</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2-Column Bottom Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Left Card: Timelines imply things they shouldn't */}
              <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                    ◷
                  </div>
                  <h3 className="text-lg font-bold text-[#151B28]">
                    Timelines imply things they shouldn't
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    Ancestry, proximity and ordering imply cause and effect whether or not that's present. Timelines here are chronological unless a causal model is explicitly authoritative, and every sequence view carries labels and non-alternatives that preserve temporal meaning without claiming root cause.
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 text-[11px] font-mono text-gray-600 leading-relaxed space-y-1">
                  <strong className="text-gray-800 uppercase block text-[9px] tracking-wider">TIMELINE LAW</strong>
                  <span>Before and after is a temporal relation. A missing interval is unavailable &mdash; never inferred as no activity. Clock skew and sequence handling are authority-gated.</span>
                </div>
              </div>

              {/* Right Card: Uncertainty is a field, not a mood */}
              <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                    ⬡
                  </div>
                  <h3 className="text-lg font-bold text-[#151B28]">
                    Uncertainty is a field, not a mood
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    Unknowns, ambiguities and conflicting evidence are recorded values with their own semantics. A numeric uncertainty value appears only where an approved method defines what the number means and how it was validated.
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 text-[11px] font-mono text-gray-600 leading-relaxed space-y-1">
                  <strong className="text-gray-800 uppercase block text-[9px] tracking-wider">REVIEW STATE</strong>
                  <span>Automated proposal, human reviewed, accepted and rejected are distinct &mdash; and attributable to a person where a person decided.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}
