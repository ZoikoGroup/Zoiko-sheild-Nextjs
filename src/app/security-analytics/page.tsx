"use client";

import React, { useState } from "react";
import Image from "next/image";
// import { Navbar } from "@/components/layout/Navbar";
// import { Footer } from "@/components/layout/Footer";
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

// 9 Context Dimensions Data
const CONTEXT_DISCLOSURES = [
  {
    dim: "asset / system",
    rec: "Source, owner, freshness and scope, from an approved authority.",
    never: "Criticality. That comes from your governance, not from us.",
    highlightNever: false,
  },
  {
    dim: "identity / access",
    rec: "Only authorized, relevant identity and access facts.",
    never: "Any protected-attribute inference.",
    highlightNever: false,
  },
  {
    dim: "threat intelligence",
    rec: "Source, version, timestamp, confidence, limitations and licensing.",
    never: "That a feed match establishes compromise.",
    highlightNever: false,
  },
  {
    dim: "business context",
    rec: "Customer-provided or governed source only.",
    never: "Hidden business-impact inference.",
    highlightNever: false,
  },
  {
    dim: "vulnerability",
    rec: "Source, version, freshness and applicability.",
    never: "An exploitability conclusion without authority.",
    highlightNever: false,
  },
  {
    dim: "configuration",
    rec: "Current source-known state, with stale context made explicit.",
    never: "That unknown configuration is compliant configuration.",
    highlightNever: false,
  },
  {
    dim: "historical",
    rec: "Time-scoped and versioned, alongside present state.",
    never: "That history overwrote the current picture.",
    highlightNever: false,
  },
  {
    dim: "external",
    rec: "Rights, licensing, source availability and trust boundaries.",
    never: "That an external source inherits internal trust.",
    highlightNever: false,
  },
  {
    dim: "missing",
    rec: "An explicit unknown or limited state, carried through to the output.",
    never: "That absent context is benign context.",
    highlightNever: true,
  },
];

// 8 Replay Comparisons Data
const REPLAY_COMPARISONS = [
  {
    dim: "input / source version",
    orig: "Recorded original source ref, as captured.",
    replay: "Replay refs, with missing, new and changed inputs identified.",
    highlightReplay: true,
  },
  {
    dim: "rule / method version",
    orig: "The exact version that ran at the time.",
    replay: "The exact replay version, and what changed between them.",
    highlightReplay: false,
  },
  {
    dim: "context / enrichment",
    orig: "Context as it stood, at its then-freshness.",
    replay: "Replay context, with freshness and version differences named.",
    highlightReplay: false,
  },
  {
    dim: "relationship output",
    orig: "Original relationship and state.",
    replay: "Replay relationship, with changed basis and uncertainty.",
    highlightReplay: false,
  },
  {
    dim: "priority",
    orig: "Original output and rationale.",
    replay: "Replay output, plus the input and method differences behind it.",
    highlightReplay: false,
  },
  {
    dim: "investigation state",
    orig: "Original decision history, untouched.",
    replay: "A possible new standoff. Replay does not overwrite prior decisions.",
    highlightReplay: false,
  },
  {
    dim: "evidence ref",
    orig: "Original evidence, with its lineage.",
    replay: "New or updated evidence. Lineage stays attributable to both.",
    highlightReplay: false,
  },
  {
    dim: "action / response",
    orig: "Actions taken then remain historical facts.",
    replay: "No retroactive action. Anything new needs current authority.",
    highlightReplay: false,
  },
];

// 8 Tuning Governance Items Data
const TUNING_GOVERNANCE_DATA = [
  {
    mech: "rule tuning",
    gov: "Change request, owner, reason, version and effective time, validation, and a rollback or suspend path.",
  },
  {
    mech: "suppression",
    gov: "Scope, condition, owner, reason, start and expiry, visibility to authorized users, and audit history.",
  },
  {
    mech: "deduplication",
    gov: "Method and version, grouping basis, source completeness — and what remains individually inspectable underneath the group.",
  },
  {
    mech: "threshold change",
    gov: "Exact method and meaning, approver, effective time and an impact evaluation.",
  },
  {
    mech: "exception",
    gov: "Object and scope, justification, owner, expiry or review date, and downstream visibility.",
  },
  {
    mech: "bulk change",
    gov: "Preview before commit, authorization, scope, rollback path and audit trail.",
  },
  {
    mech: "auto-tuning",
    gov: "Never assumed. Requires explicit automation authority, evaluation and approval semantics.",
  },
  {
    mech: "tuning feedback",
    gov: "Recorded only within approved product semantics. No silent model-training claim.",
  },
];

// 7 Handoff Boundaries Data
const HANDOFF_BOUNDARIES = [
  {
    out: "rule match",
    hands: "Source, method, version and context refs.",
    bound: "A match is not an incident verdict.",
  },
  {
    out: "correlation",
    hands: "Relationship basis, lineage and uncertainty.",
    bound: "Correlation is not causality.",
  },
  {
    out: "priority",
    hands: "Operational ordering plus the rationale behind it.",
    bound: "Priority is not response authority.",
  },
  {
    out: "replay delta",
    hands: "Original and replay versions and their differences.",
    bound: "Replay does not rewrite history.",
  },
  {
    out: "evidence refs",
    hands: "Governed evidence links with lineage.",
    bound: "Verification does not decide compromise.",
  },
  {
    out: "analyst review",
    hands: "Attributable accept, reject or escalate.",
    bound: "No hidden automatic decision.",
  },
  {
    out: "response suggestion",
    hands: "A recommendation within current authority.",
    bound: "No action until governed-response decision rights allow it.",
  },
];

// 12 Security Analytics FAQs Data
const SECURITY_ANALYTICS_FAQS = [
  {
    q: "What is ZoikoShield Security Analytics?",
    a: "A conditional destination covering five approved concepts: rules, correlation, context, replay and transparent prioritization. It explains how those concepts are governed — it is not a description of a shipped engine.",
  },
  {
    q: "Is it available now?",
    a: "Availability varies by feature, deployment model and contract state. Check live service status and version documentation for active features.",
  },
  {
    q: "Does correlation prove causality?",
    a: "No. Correlation, sequence and proximity represent relationship hypotheses. Causality requires an explicit, authoritative causal model.",
  },
  {
    q: "What does transparent prioritization actually mean?",
    a: "It means the inputs, method version, rationale, uncertainty state and override history behind a priority ordering are fully inspectable.",
  },
  {
    q: "What is replay?",
    a: "Replay runs a versioned, updated method against retained original inputs to compare outputs and identify what changed.",
  },
  {
    q: "Does a replay result replace the original?",
    a: "No. Replay results are separate versioned comparisons. Original records and decision histories remain untouched.",
  },
  {
    q: "Does analytics authorize a response?",
    a: "No. Analytics produces context for investigation. Consequential response actions require explicit governed-response authority.",
  },
  {
    q: "What are the detection rate, MTTD and false-positive rate?",
    a: "Performance figures require governed benchmark datasets, cohorts and timing semantics. Generic performance numbers are not claimed.",
  },
  {
    q: "How much of the ATT&CK framework is covered?",
    a: "Framework coverage is stated only with approved registry evidence. Coverage badges without dataset proof are never published.",
  },
  {
    q: "Where is investigation handled?",
    a: "Investigation lives in Case Management and Detection & Response, carrying explicit authority boundaries.",
  },
  {
    q: "What happens if a source is unavailable?",
    a: "Stale or missing sources are explicitly marked as unavailable or degraded. Missing data is never inferred as clean or normal.",
  },
  {
    q: "Where is live service health?",
    a: "Live operational health and platform availability belong to System Status and the canonical integration contract.",
  },
];

export default function SecurityAnalyticsPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F4F3EF] text-[#111827] font-sans antialiased">
      {/* <Navbar /> */}

      <main className="pt-24 sm:pt-28 pb-0 overflow-x-hidden">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO & DETECTION & RESPONSE */}
        {/* ========================================================================= */}

        {/* MOBILE SECTION 1 (block sm:hidden) */}
        <section className="block sm:hidden max-w-7xl mx-auto px-4 py-6 space-y-6">
          {/* Top Emergency Dark Alert Banner */}
          <div className="bg-[#1C180E] text-white p-4 rounded-xl border border-[#3A2E16] space-y-2">
            <p className="text-xs text-amber-100/90 leading-relaxed font-sans">
              <strong className="text-white font-bold">This destination is conditional.</strong> It explains five approved concepts. It does not describe a shipped engine, and it publishes no performance, coverage or availability claim.
            </p>
            <a
              href="#concepts"
              className="font-mono text-xs font-bold text-[#EAB308] hover:underline block pt-1"
            >
              Detection &amp; Response in active &rarr;
            </a>
          </div>

          {/* Breadcrumbs */}
          <div className="font-mono text-[11px] text-gray-500">
            Home / Platform / Detection &amp; Response / Security Analytics
          </div>

          {/* Overline & Headline */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                PLATFORM &middot; DETECTION &amp; RESPONSE
              </span>
            </div>

            <h1 className="text-3xl font-extrabold text-[#151B28] tracking-tight leading-snug">
              Rules, correlation, context, replay &mdash; and prioritization{" "}
              <span className="text-[#E0533C]">you can take apart.</span>
            </h1>

            <p className="text-xs text-[#151B28]/75 leading-relaxed font-sans">
              Transparent prioritization means the basis and the limits are inspectable: which inputs were used, which method version produced the output, why, what was missing, and who can override it. It does not mean a number in a coloured badge.
            </p>
          </div>

          {/* 4 Status Pill Badges Stack */}
          <div className="flex flex-col gap-2 font-mono text-[10px] font-bold">
            <span className="px-3 py-1.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
              &#183; DESTINATION STATE: CONDITIONAL
            </span>
            <span className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
              &#183; PARENT: DETECTION &amp; RESPONSE ACTIVE
            </span>
            <span className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
              &#183; ENGINE DETAILS: AUTHORITY-GATED
            </span>
            <span className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
              &#183; WCAG 2.2 AA
            </span>
          </div>

          {/* Action Buttons Stack */}
          <div className="space-y-2.5 pt-2">
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full py-3 bg-[#E0533C] hover:bg-[#c94530] text-white font-bold text-xs rounded-lg transition-all shadow-md text-center"
              >
                Book a Demo
              </button>
              <a
                href="#concepts"
                className="w-full py-3 bg-[#EFECE6] hover:bg-gray-200 text-[#151B28] font-semibold text-xs rounded-lg border border-gray-300 transition-all shadow-sm text-center flex items-center justify-center"
              >
                Detection &amp; Response
              </a>
            </div>
            <a
              href="/services"
              className="w-full py-3 bg-[#EFECE6] hover:bg-gray-200 text-[#151B28] font-semibold text-xs rounded-lg border border-gray-300 transition-all shadow-sm text-center block"
            >
              Explore the Platform
            </a>
          </div>

          {/* Sub-footnote */}
          <p className="text-[11px] text-gray-500 leading-relaxed pt-1 font-sans">
            Proof stays ungated. Evidence, Trust Center, Docs and System Status are reachable without a demo.
          </p>

          {/* PUBLIC CLAIM MANIFEST Card Container */}
          <div className="bg-white rounded-2xl border-t-4 border-amber-500 border-x border-b border-gray-300/80 p-5 shadow-md space-y-4">
            <div className="space-y-2">
              <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                PUBLIC CLAIM MANIFEST
              </span>
              <h3 className="text-lg font-bold text-[#151B28]">
                What this page does not claim
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed font-sans">
                These fields are null by governance, not by omission. Each requires an approved method, dataset, scope, period and review date.
              </p>
            </div>

            {/* 8 Governance Null/False Rows */}
            <div className="divide-y divide-gray-100 font-mono text-xs pt-1">
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-gray-700">detection_rate</span>
                <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-400 border border-dashed border-gray-300 text-[10px]">
                  NULL
                </span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-gray-700">mttd / mttr</span>
                <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-400 border border-dashed border-gray-300 text-[10px]">
                  NULL
                </span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-gray-700">false_positive_rate</span>
                <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-400 border border-dashed border-gray-300 text-[10px]">
                  NULL
                </span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-gray-700">precision / recall</span>
                <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-400 border border-dashed border-gray-300 text-[10px]">
                  NULL
                </span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-gray-700">framework_coverage_pct</span>
                <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-400 border border-dashed border-gray-300 text-[10px]">
                  NULL
                </span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-gray-700">rule_content_count</span>
                <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-400 border border-dashed border-gray-300 text-[10px]">
                  NULL
                </span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-gray-700">benchmark_percentile</span>
                <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-400 border border-dashed border-gray-300 text-[10px]">
                  NULL
                </span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-gray-700">autonomous_response</span>
                <span className="px-2 py-0.5 rounded bg-rose-50 text-rose-600 border border-rose-200 text-[10px] font-bold">
                  FALSE
                </span>
              </div>
            </div>

            {/* Footnote Box */}
            <div className="pt-3 border-t border-gray-100 space-y-1">
              <strong className="text-xs font-bold text-[#151B28] block">
                Fail-closed publication law.
              </strong>
              <p className="text-[11px] text-gray-600 leading-relaxed font-sans">
                Where exact rule, replay or prioritization semantics can't be verified, the page stays narrow rather than filling the gap with generic security-analytics language.
              </p>
            </div>
          </div>

          {/* Bottom Monospace Metadata Box */}
          <div className="bg-[#F4F1EA] p-4 rounded-xl border border-gray-300/70 font-mono text-[10px] text-gray-600 space-y-1">
            <div className="flex items-center justify-between">
              <span>ROUTE</span>
              <span className="text-gray-800 font-bold">/PLATFORM/SECURITY-ANALYTICS</span>
            </div>
            <div className="flex items-center justify-between">
              <span>PARENT</span>
              <span className="text-gray-800 font-bold">/PLATFORM/DETECTION-RESPONSE</span>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-gray-300/50">
              <span>STATE <strong className="text-gray-800 font-bold">CONDITIONAL</strong></span>
              <span>NEXT <strong className="text-gray-800 font-bold">CASE MANAGEMENT</strong></span>
            </div>
          </div>
        </section>

        {/* DESKTOP SECTION 1 (hidden sm:block) */}
        <section className="hidden sm:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
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
                  src="/images/sa1.png"
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

        {/* MOBILE SECTION 2 (block sm:hidden) */}
        <section id="concepts-mobile" className="block sm:hidden max-w-7xl mx-auto px-4 py-8 border-t border-gray-200/70">
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                FIVE CONCEPTS
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-[#151B28] tracking-tight leading-snug">
              Five separate ideas. None of them stands in for another.
            </h2>
            <p className="text-xs text-[#151B28]/75 leading-relaxed font-sans">
              Most analytics pages blur these together until a match reads as an incident and a score reads as risk. Here they're kept apart, each with its own record and its own edge.
            </p>
          </div>

          {/* Single White Card Container for 5 Concepts */}
          <div className="bg-white rounded-2xl border border-gray-300/80 p-5 shadow-sm space-y-4 divide-y divide-gray-100 mb-8">
            {FIVE_CONCEPTS.map((item, idx) => (
              <div key={idx} className={`${idx === 0 ? "pt-0" : "pt-4"} space-y-2`}>
                <span className="font-mono text-xs font-bold text-gray-400 block border-b border-gray-100 pb-1">
                  {item.num}
                </span>
                <h3 className="text-sm font-bold text-[#151B28]">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  {item.desc}
                </p>
                <div className="pt-1">
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

          {/* Bottom Card: Content doctrine, in eight lines (CORAL/ORANGE ACCENT LEFT BORDER) */}
          <div className="relative bg-white rounded-2xl border border-gray-300/80 p-5 pl-7 shadow-sm space-y-4 overflow-hidden">
            {/* Left Side Orange Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#E0533C]" />

            <h3 className="text-base font-bold text-[#151B28]">
              Content doctrine, in eight lines
            </h3>

            <div className="divide-y divide-gray-100 text-xs text-gray-700 font-sans">
              {CONTENT_DOCTRINES.map((doc, idx) => (
                <div key={idx} className="py-2.5 flex items-start gap-3 first:pt-0">
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

        {/* DESKTOP SECTION 2 (hidden sm:block) */}
        <section id="concepts" className="hidden sm:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200/70">
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

        {/* MOBILE SECTION 3 (block sm:hidden) */}
        <section id="rules-mobile" className="block sm:hidden max-w-7xl mx-auto px-4 py-8 border-t border-gray-200/70">
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                RULES
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-[#151B28] tracking-tight leading-snug">
              Transparency without publishing the exploit.
            </h2>
            <p className="text-xs text-[#151B28]/75 leading-relaxed font-sans">
              A public rule record doesn't require exposing detection logic. It requires purpose, scope, version, ownership, method context and limitations to be inspectable at the appropriate disclosure level.
            </p>
          </div>

          {/* Stacked Top Cards */}
          <div className="space-y-6 mb-8">
            {/* Left Card: What a rule record carries */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-5 shadow-sm space-y-4">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                  ≡
                </div>
                <h3 className="text-base font-bold text-[#151B28]">
                  What a rule record carries
                </h3>
              </div>

              <div className="divide-y divide-gray-100 text-xs text-[#151B28]/80 font-sans">
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

            {/* Right Card: What isn't claimed about rules (RED BORDER FRAME) */}
            <div className="bg-white rounded-2xl border-2 border-[#E0533C] p-5 shadow-sm space-y-4">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                  ⬡
                </div>
                <h3 className="text-base font-bold text-[#151B28]">
                  What isn't claimed about rules
                </h3>
              </div>

              <div className="divide-y divide-gray-100 text-xs text-gray-700 font-sans">
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

              <div className="pt-3 border-t border-gray-100 text-[11px] font-mono text-gray-600 leading-relaxed space-y-1">
                <strong className="text-gray-800 uppercase block text-[9px] tracking-wider">REGISTRY LAW</strong>
                <span>The engine provides no detection-content count, framework coverage, efficacy metric, benchmark or performance result. This page does not invent one.</span>
              </div>
            </div>
          </div>

          {/* Vertical 9-Stage Stepper Container */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#151B28]">
              Lifecycle &mdash; nine states, each with its own evidence
            </h3>

            <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden divide-y divide-gray-100">
              {RULE_LIFECYCLE_STATES.map((state, idx) => (
                <div key={idx} className="p-4 space-y-1.5 text-center flex flex-col items-center justify-center">
                  <span className={`w-2.5 h-2.5 rounded-full ${state.dotColor} block mb-0.5`}></span>
                  <span className="font-mono text-xs font-bold text-[#151B28] block uppercase tracking-wider">
                    {state.name}
                  </span>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans max-w-xs">
                    {state.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DESKTOP SECTION 3 (hidden sm:block) */}
        <section id="rules" className="hidden sm:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200/70">
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

        {/* MOBILE SECTION 4 (block sm:hidden) */}
        <section id="correlation-mobile" className="block sm:hidden bg-[#EFECE6] py-8 border-t border-gray-300/60">
          <div className="max-w-7xl mx-auto px-4">
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  CORRELATION
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-[#151B28] tracking-tight leading-snug">
                A relationship is a claim. It shows its work.
              </h2>
              <p className="text-xs text-[#151B28]/75 leading-relaxed font-sans">
                Correlation, sequence and proximity are not causality, attribution, compromise, policy violation, materiality or response authority. Every relationship keeps its basis, its lineage and its contradictions.
              </p>
            </div>

            {/* Illustrative Structure Matrix Card */}
            <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden mb-6">
              {/* Header Bar */}
              <div className="bg-[#EBE7DF] p-4 border-b border-gray-300/70 space-y-2 font-mono text-xs">
                <span className="font-bold text-[#151B28] uppercase tracking-wider block">
                  RELATIONSHIP RECORD &mdash; ILLUSTRATIVE STRUCTURE
                </span>
                <span className="px-3 py-1 rounded-full font-bold text-[10px] bg-blue-50 text-blue-700 border border-blue-200 inline-block">
                  REVIEW STATE: AUTOMATED PROPOSAL
                </span>
              </div>

              {/* 3 Stacked Category Blocks */}
              <div className="divide-y divide-gray-200/80 p-4 text-xs space-y-3">
                {/* Block 1 */}
                <div className="space-y-2 pb-3">
                  <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                    BASIS AND LINEAGE
                  </span>
                  <div className="space-y-2 text-gray-600 font-sans leading-relaxed">
                    <p>Relationship type &mdash; approved label only</p>
                    <p>Method and version reference</p>
                    <p>Source refs with timestamps</p>
                    <p>Time window and ordering context</p>
                    <p>Directionality, where meaningful</p>
                    <p>Transformations applied to inputs</p>
                  </div>
                </div>

                {/* Block 2 */}
                <div className="space-y-2 pt-3 pb-3">
                  <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                    SUPPORTING CONTEXT
                  </span>
                  <div className="space-y-2 text-gray-600 font-sans leading-relaxed">
                    <p>Approved facts and evidence refs</p>
                    <p>Asset and identity context, where authorized</p>
                    <p>Environment and object scope</p>
                    <p>Prior related observations</p>
                  </div>
                </div>

                {/* Block 3 */}
                <div className="space-y-2 pt-3">
                  <span className="font-mono text-[10px] font-bold text-[#E0533C] uppercase tracking-wider block">
                    CONTRADICTING CONTEXT
                  </span>
                  <div className="space-y-2 text-gray-600 font-sans leading-relaxed">
                    <p>Conflicts stay visible &mdash; never resolved silently</p>
                    <p>Ambiguous or unknown state recorded</p>
                    <p>Missing interval, not "no activity"</p>
                    <p>Superseded relationships stay attributable</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2 Stacked Bottom Cards */}
            <div className="space-y-6">
              {/* Left Card: Timelines imply things they shouldn't */}
              <div className="bg-white rounded-2xl border border-gray-300/80 p-5 shadow-sm space-y-4">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                    ◷
                  </div>
                  <h3 className="text-base font-bold text-[#151B28]">
                    Timelines imply things they shouldn't
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    Arrows, proximity and ordering read as cause and effect whether or not that's meant. Timelines here are chronological unless a causal model is explicitly authoritative, and every sequence view carries labels and text alternatives that preserve temporal meaning without claiming root cause.
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 text-[11px] font-mono text-gray-600 leading-relaxed space-y-1">
                  <strong className="text-gray-800 uppercase block text-[9px] tracking-wider">TIMELINE LAW</strong>
                  <span>Before and after is a temporal relation. A missing interval is unavailable &mdash; never inferred as no activity. Clock skew and timezone handling are authority-gated.</span>
                </div>
              </div>

              {/* Right Card: Uncertainty is a field, not a mood */}
              <div className="bg-white rounded-2xl border border-gray-300/80 p-5 shadow-sm space-y-4">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                    ⬡
                  </div>
                  <h3 className="text-base font-bold text-[#151B28]">
                    Uncertainty is a field, not a mood
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    Unknown, ambiguous and conflicting are recorded states with their own semantics. A numeric uncertainty value appears only where an approved method defines what the number means and how it was validated.
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

        {/* DESKTOP SECTION 4 (hidden sm:block) */}
        <section id="correlation" className="hidden sm:block bg-[#EFECE6] py-14 sm:py-16 border-t border-gray-300/60">
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

        {/* ========================================================================= */}
        {/* SECTION 5: CONTEXT AND ENRICHMENT (#EFECE6 WARM BEIGE BACKGROUND) */}
        {/* ========================================================================= */}

        {/* MOBILE SECTION 5 (block sm:hidden) */}
        <section id="context-mobile" className="block sm:hidden bg-[#EFECE6] py-8 border-t border-gray-300/60">
          <div className="max-w-7xl mx-auto px-4 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  CONTEXT AND ENRICHMENT
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-[#151B28] tracking-tight leading-snug">
                More context is not automatically better context.
              </h2>
              <p className="text-xs text-[#151B28]/75 leading-relaxed font-sans">
                Every enrichment source has an authority, a freshness, a permission scope and a limitation. Restricted or stale enrichment cannot quietly strengthen a conclusion.
              </p>
            </div>

            {/* Stacked Disclosure Matrix Card for 9 Context Dimensions */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-4 shadow-sm space-y-4 divide-y divide-gray-100">
              <div className="bg-[#EBE7DF] p-3 rounded-xl font-mono text-[10px] font-bold text-[#151B28] uppercase tracking-wider flex justify-between">
                <span>CONTEXT DIMENSION</span>
                <span>DISCLOSURE</span>
              </div>

              {CONTEXT_DISCLOSURES.map((item, idx) => (
                <div key={idx} className="pt-3 space-y-1.5 text-xs font-sans">
                  <span className="font-mono font-bold text-[#151B28] text-xs block uppercase">
                    {item.dim}
                  </span>
                  <p className="text-gray-600 leading-relaxed">
                    <strong className="text-gray-800 font-semibold">RECORDED:</strong> {item.rec}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-800 font-semibold">NEVER INFERRED:</strong>{" "}
                    {item.highlightNever ? (
                      <strong className="text-[#151B28] font-bold">{item.never}</strong>
                    ) : (
                      item.never
                    )}
                  </p>
                </div>
              ))}
            </div>

            {/* 2 Stacked Bottom Cards */}
            <div className="space-y-6">
              {/* Left Card */}
              <div className="bg-white rounded-2xl border border-gray-300/80 p-5 shadow-sm space-y-4">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                    ≠
                  </div>
                  <h3 className="text-base font-bold text-[#151B28]">
                    Source state changes what analytics can say
                  </h3>

                  <div className="divide-y divide-gray-100 text-xs text-gray-700 font-sans">
                    <div className="py-2.5 flex items-start gap-3 first:pt-0">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-[#151B28] font-bold">Delayed or stale</strong> &mdash; the source time and state are labelled, and certainty is reduced as defined.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-[#151B28] font-bold">Unavailable</strong> &mdash; shown as unavailable or unknown. Never read as an absence of activity.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-[#151B28] font-bold">Correlation unavailable</strong> &mdash; the approved context is shown rather than forcing a relationship.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-[#151B28] font-bold">Conflicting results</strong> &mdash; conflicts and the review state are both shown.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 text-[11px] font-mono text-gray-600 leading-relaxed space-y-1">
                  <strong className="text-gray-800 uppercase block text-[9px] tracking-wider">DEGRADED STATE</strong>
                  <span>When method, source, replay or priority basis is missing, the interface becomes more explicit and less certain &mdash; never more confident or more actionable.</span>
                </div>
              </div>

              {/* Right Card */}
              <div className="bg-white rounded-2xl border border-gray-300/80 p-5 shadow-sm space-y-4">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                    ≡
                  </div>
                  <h3 className="text-base font-bold text-[#151B28]">
                    Your existing estate
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    Source categories come from the canonical integrations registry &mdash; never from an invented vendor list. Read scope is least-privilege and separate from write and workflow permissions.
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans pt-1">
                    Live source health belongs to the Integration contract and System Status. This page does not duplicate availability as an analytics claim.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="/services"
                    className="px-4 py-2 bg-white hover:bg-gray-50 text-[#151B28] text-xs font-bold rounded-lg border border-gray-300 shadow-sm transition-all inline-block"
                  >
                    Explore Integrations
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DESKTOP SECTION 5 (hidden sm:block) */}
        <section id="context" className="hidden sm:block bg-[#EFECE6] py-14 sm:py-16 border-t border-gray-300/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  CONTEXT AND ENRICHMENT
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
                More context is not automatically better context.
              </h2>
              <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
                Every enrichment source has an authority, a freshness, a permission scope and a limitation. Restricted or stale enrichment cannot quietly strengthen a conclusion.
              </p>
            </div>

            {/* 9-Row Context Dimension Disclosure Matrix Table */}
            <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[750px]">
                  <thead>
                    <tr className="bg-[#EBE7DF] text-[#151B28] text-[11px] font-mono font-bold uppercase tracking-wider border-b border-gray-300/70">
                      <th className="py-4 px-6 w-1/4">CONTEXT DIMENSION</th>
                      <th className="py-4 px-6 w-5/12">WHAT MUST BE RECORDED</th>
                      <th className="py-4 px-6 w-1/3 border-l border-gray-300/70">WHAT IS NEVER INFERRED</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200/80 text-xs sm:text-sm">
                    {CONTEXT_DISCLOSURES.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3.5 px-6 font-mono font-bold text-[#151B28]">
                          {item.dim}
                        </td>
                        <td className="py-3.5 px-6 text-gray-600 leading-relaxed font-sans">
                          {item.rec}
                        </td>
                        <td className="py-3.5 px-6 text-gray-700 border-l border-gray-200/80 leading-relaxed font-sans">
                          {item.highlightNever ? (
                            <strong className="text-[#151B28] font-bold">{item.never}</strong>
                          ) : (
                            item.never
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2-Column Bottom Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Left Card: Source state changes what analytics can say */}
              <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                      ≠
                    </div>
                    <h3 className="text-lg font-bold text-[#151B28]">
                      Source state changes what analytics can say
                    </h3>
                  </div>

                  <div className="divide-y divide-gray-100 text-xs sm:text-sm text-gray-700 font-sans">
                    <div className="py-2.5 flex items-start gap-3 first:pt-0">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-[#151B28] font-bold">Delayed or stale</strong> &mdash; the source time and state are labelled, and certainty is reduced as defined.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-[#151B28] font-bold">Unavailable</strong> &mdash; shown as unavailable or unknown. Never read as an absence of activity.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-[#151B28] font-bold">Correlation unavailable</strong> &mdash; the approved context is shown rather than forcing a relationship.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-[#151B28] font-bold">Conflicting results</strong> &mdash; conflicts and the review state are both shown.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 text-[11px] font-mono text-gray-600 leading-relaxed space-y-1">
                  <strong className="text-gray-800 uppercase block text-[9px] tracking-wider">DEGRADED STATE</strong>
                  <span>When method, source, replay or priority basis is missing, the interface becomes more explicit and less certain &mdash; never more confident or more actionable.</span>
                </div>
              </div>

              {/* Right Card: Your existing estate */}
              <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                    ≡
                  </div>
                  <h3 className="text-lg font-bold text-[#151B28]">
                    Your existing estate
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    Source categories come from the canonical integrations registry &mdash; never from an invented vendor list. Read scope is least-privilege and separate from write and workflow permissions, which are in turn separate from response permissions.
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans pt-1">
                    Live source health belongs to the Integration contract and System Status. This page does not duplicate availability as an analytics claim.
                  </p>
                </div>

                <div className="pt-3">
                  <a
                    href="/services"
                    className="px-4 py-2.5 bg-white hover:bg-gray-50 text-[#151B28] text-xs font-bold rounded-lg border border-gray-300 shadow-sm transition-all inline-block"
                  >
                    Explore Integrations
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: REPLAY (#F4F3EF BACKGROUND) */}
        {/* ========================================================================= */}

        {/* MOBILE SECTION 6 (block sm:hidden) */}
        <section id="replay-mobile" className="block sm:hidden max-w-7xl mx-auto px-4 py-8 border-t border-gray-200/70">
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                REPLAY
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-[#151B28] tracking-tight leading-snug">
              Versioned re-evaluation &mdash; not a better version of the past.
            </h2>
            <p className="text-xs text-[#151B28]/75 leading-relaxed font-sans">
              Replay runs a later method against retained inputs. It is not a promise that the past can be perfectly reconstructed, and a replayed result is not automatically more true than the original.
            </p>
          </div>

          {/* 8 Stacked Dimension Comparison Cards Container */}
          <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden divide-y divide-gray-100 mb-4">
            {REPLAY_COMPARISONS.map((item, idx) => (
              <div key={idx} className="p-4 space-y-2 text-xs font-sans">
                <span className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider block border-b border-gray-100 pb-1">
                  {item.dim}
                </span>
                <p className="text-gray-500 leading-relaxed font-sans">
                  <strong className="font-mono text-[10px] text-gray-400 font-bold uppercase mr-1">ORIGINAL &mdash;</strong>
                  {item.orig}
                </p>
                <div className="bg-[#FAF9F6] p-2.5 rounded-xl border border-gray-100 mt-1">
                  <p className="text-gray-800 leading-relaxed font-sans font-semibold">
                    {item.replay}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Monospace Footnote */}
          <p className="font-mono text-[11px] text-gray-600 mt-3 leading-relaxed mb-6">
            &mdash; A replay that produces no match does not invalidate the original observation &mdash; the method and input differences are what get explained. History is never rewritten to make a replay result look like it was known at the time.
          </p>

          {/* 3 Stacked Bottom Cards Grid */}
          <div className="space-y-4">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-5 shadow-sm space-y-3">
              <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                ↑
              </div>
              <h3 className="text-base font-bold text-[#151B28]">
                Every run is a record
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed font-sans">
                Run reference, original and replay method versions, input snapshot and availability, run time, reason &mdash; validation, tuning, investigation or retrospective analysis &mdash; result, delta, reviewer and limitations.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-5 shadow-sm space-y-3">
              <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                ◐
              </div>
              <h3 className="text-base font-bold text-[#151B28]">
                Partial is a real answer
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed font-sans">
                Where historical fields are unavailable or versions are incompatible, the run shows what was missing and marks the result non-comparable rather than presenting a clean delta.
              </p>
            </div>

            {/* Card 3 (RED ACCENT FRAME) */}
            <div className="bg-white rounded-2xl border-2 border-[#E0533C] p-5 shadow-sm space-y-3">
              <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                🔒
              </div>
              <h3 className="text-base font-bold text-[#151B28]">
                No fake controls
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed font-sans">
                If replay isn't supported for a case, the interface explains availability rather than showing a disabled control that implies the capability exists.
              </p>
            </div>
          </div>
        </section>

        {/* DESKTOP SECTION 6 (hidden sm:block) */}
        <section id="replay" className="hidden sm:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200/70">
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                REPLAY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
              Versioned re-evaluation &mdash; not a better version of the past.
            </h2>
            <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
              Replay runs a later method against retained inputs. It is not a promise that the past can be perfectly reconstructed, and a replayed result is not automatically more true than the original.
            </p>
          </div>

          {/* 8-Row Dark Navy Header Comparison Matrix Table */}
          <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[750px]">
                <thead>
                  <tr className="bg-[#0B1B26] text-white text-[11px] font-mono font-bold uppercase tracking-wider border-b border-gray-800">
                    <th className="py-4 px-6 w-1/4">DIMENSION</th>
                    <th className="py-4 px-6 w-3/8 border-l border-gray-800">ORIGINAL</th>
                    <th className="py-4 px-6 w-3/8 border-l border-gray-800">REPLAY</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200/80 text-xs sm:text-sm">
                  {REPLAY_COMPARISONS.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-3.5 px-6 font-mono font-bold text-[#151B28]">
                        {item.dim}
                      </td>
                      <td className="py-3.5 px-6 text-gray-600 border-l border-gray-200/80 leading-relaxed font-sans">
                        {item.orig}
                      </td>
                      <td className="py-3.5 px-6 text-gray-700 border-l border-gray-200/80 leading-relaxed font-sans">
                        {item.highlightReplay ? (
                          <strong className="text-[#151B28] font-bold">{item.replay}</strong>
                        ) : (
                          item.replay
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Monospace Footnote */}
          <p className="font-mono text-[11px] text-gray-600 mt-4 leading-relaxed">
            &mdash; A replay that produces no match does not invalidate the original observation &mdash; the method and input differences are what get explained. History is never rewritten to make a replay result look like it was known at the time.
          </p>

          {/* 3-Column Bottom Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-8">
            {/* Card 1: Every run is a record */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                  ↑
                </div>
                <h3 className="text-lg font-bold text-[#151B28]">
                  Every run is a record
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  Run reference, original and replay method versions, input snapshot and availability, run time, reason &mdash; validation, tuning, investigation or retrospective analysis &mdash; result, delta, reviewer and limitations.
                </p>
              </div>
            </div>

            {/* Card 2: Partial is a real answer */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                  ◐
                </div>
                <h3 className="text-lg font-bold text-[#151B28]">
                  Partial is a real answer
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  Where historical fields are unavailable or versions are incompatible, the run shows what was missing and marks the result non-comparable rather than presenting a clean delta.
                </p>
              </div>
            </div>

            {/* Card 3: No fake controls (RED ACCENT FRAME) */}
            <div className="bg-white rounded-2xl border-2 border-[#E0533C] p-6 sm:p-7 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                  🔒
                </div>
                <h3 className="text-lg font-bold text-[#151B28]">
                  No fake controls
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  If replay isn't supported for a case, the interface explains availability rather than showing a disabled control that implies the capability exists.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: TRANSPARENT PRIORITIZATION (#0B1B26 DARK OBSIDIAN NAVY) */}
        {/* ========================================================================= */}

        {/* MOBILE SECTION 7 (block sm:hidden) */}
        <section id="prioritization-mobile" className="block sm:hidden bg-[#0B1B26] text-white py-8 border-t border-gray-800 my-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  TRANSPARENT PRIORITIZATION
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight leading-snug">
                Transparent means inspectable &mdash; not a number with a colour.
              </h2>
              <p className="text-xs text-gray-300/80 leading-relaxed font-sans">
                Transparency lets you see the basis and the limits of ordering. It doesn't require publishing sensitive rule logic, and it doesn't justify an unexplained score badge.
              </p>
            </div>

            {/* Required Fields Card Container */}
            <div className="bg-[#071520] rounded-2xl border border-gray-800 p-4 shadow-sm space-y-4 divide-y divide-gray-800/80 mb-6">
              {/* Header Bar */}
              <div className="space-y-2 pb-2 font-mono text-xs">
                <span className="font-bold text-gray-400 uppercase tracking-wider block text-[10px]">
                  PRIORITY BASIS &mdash; REQUIRED FIELDS
                </span>
                <span className="bg-[#2A2318] text-[#F3C880] border border-[#524126] px-3 py-1 rounded-sm font-bold text-[9px] uppercase tracking-wider inline-block">
                  METHOD SEMANTICS: PENDING APPROVAL
                </span>
              </div>

              {/* 9 Rows */}
              <div className="pt-3 space-y-1.5 text-xs font-sans">
                <span className="font-mono font-bold text-white text-xs block">priority_method_id</span>
                <p className="text-gray-300/80 leading-relaxed">A stable method reference &mdash; so two priorities can be compared meaningfully.</p>
              </div>

              <div className="pt-3 space-y-1.5 text-xs font-sans">
                <span className="font-mono font-bold text-white text-xs block">method_version</span>
                <p className="text-gray-300/80 leading-relaxed">Exact current version and effective time.</p>
              </div>

              <div className="pt-3 space-y-1.5 text-xs font-sans">
                <span className="font-mono font-bold text-white text-xs block">inputs</span>
                <p className="text-gray-300/80 leading-relaxed">Named, approved inputs with source refs. No hidden attribute derived from sensitive data.</p>
              </div>

              <div className="pt-3 space-y-1.5 text-xs font-sans">
                <span className="font-mono font-bold text-white text-xs block">input_freshness</span>
                <p className="text-gray-300/80 leading-relaxed">Fresh, stale or unknown &mdash; per input, not averaged across them.</p>
              </div>

              <div className="pt-3 space-y-1.5 text-xs font-sans">
                <span className="font-mono font-bold text-white text-xs block">rationale</span>
                <p className="text-gray-300/80 leading-relaxed">A human-readable explanation of why this method produced this output.</p>
              </div>

              <div className="pt-3 space-y-1.5 text-xs font-sans">
                <span className="font-mono font-bold text-white text-xs block">uncertainty</span>
                <p className="text-gray-300/80 leading-relaxed">Known gaps, missing inputs and the scope the method does not cover.</p>
              </div>

              <div className="pt-3 space-y-1.5 text-xs font-sans">
                <span className="font-mono font-bold text-white text-xs block">decision / override</span>
                <p className="text-gray-300/80 leading-relaxed">Who may override, on what grounds &mdash; and the record of when they did.</p>
              </div>

              <div className="pt-3 space-y-1.5 text-xs font-sans">
                <span className="font-mono font-bold text-white text-xs block">history</span>
                <p className="text-gray-300/80 leading-relaxed">Prior outputs, method changes and input changes, preserved.</p>
              </div>

              <div className="pt-3 space-y-1.5 text-xs font-sans">
                <span className="font-mono font-bold text-white text-xs block">downstream_meaning</span>
                <p className="text-gray-300/80 leading-relaxed">Whether this affects analyst ordering only, or some other approved workflow.</p>
              </div>

              {/* Bottom Footnote Box */}
              <div className="pt-3 font-mono text-[11px] text-gray-400 leading-relaxed">
                <span>Priority-87-1-106 &mdash; <strong className="text-white font-bold">withheld</strong>. An output label or value publishes only once its exact semantics are approved. Until then the honest presentation is a categorical or unknown state, not a generic 0-100 score, heatmap or confidence percentage.</span>
              </div>
            </div>

            {/* 2 Stacked Bottom Cards */}
            <div className="space-y-6">
              {/* Card 1: Priority is not risk */}
              <div className="bg-[#071520] rounded-2xl border border-gray-800 p-5 space-y-3">
                <h3 className="text-base font-bold text-white">
                  Priority is not risk
                </h3>
                <p className="text-xs text-gray-300/80 leading-relaxed font-sans">
                  Operational prioritization orders analyst work. It is not an executive or business risk score, and it does not establish materiality or a compliance failure. Where an executive risk view exists, Risk Intelligence owns that method &mdash; not this page.
                </p>
              </div>

              {/* Card 2: Severity, confidence and scoring */}
              <div className="bg-[#071520] rounded-2xl border border-gray-800 p-5 space-y-3">
                <h3 className="text-base font-bold text-white">
                  Severity, confidence and scoring
                </h3>

                <div className="divide-y divide-gray-800/80 text-xs text-gray-300/80 font-sans">
                  <div className="py-2.5 flex items-start gap-3 first:pt-0">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-white font-bold">Severity</strong> &mdash; needs an exact scale, definitions, owner and change behaviour. Severity is not compromise.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-white font-bold">Confidence</strong> &mdash; needs a method, range, validation and interpretation. It is not a probability of breach.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-white font-bold">Quality scores</strong> &mdash; need a source, method and denominator &mdash; otherwise they're a generic trust number.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-white font-bold">Benchmark percentiles</strong> &mdash; need dataset, cohort, method, period and sign-off before they mean anything.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DESKTOP SECTION 7 (hidden sm:block) */}
        <section id="prioritization" className="hidden sm:block bg-[#0B1B26] text-white py-14 sm:py-16 my-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  TRANSPARENT PRIORITIZATION
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Transparent means inspectable &mdash; not a number with a colour.
              </h2>
              <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
                Transparency lets you see the basis and the limits of ordering. It doesn't require publishing sensitive rule logic, and it doesn't justify an unexplained score badge.
              </p>
            </div>

            {/* Center Holographic Graphic Container */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl bg-black max-w-5xl mx-auto">
              <Image
                src="/images/sa2.png"
                alt="Transparent Prioritization & Analytics Pipeline"
                width={1000}
                height={550}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>

            {/* 2-Column Bottom Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Left Card: Priority is not risk */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 sm:p-7 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white">
                    Priority is not risk
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                    Operational prioritization orders analyst work. It is not an executive or business risk score, and it does not establish materiality or a compliance failure. Where an executive risk view exists, Risk Intelligence owns that method &mdash; not this page.
                  </p>
                </div>
              </div>

              {/* Right Card: Severity, confidence and scoring */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 sm:p-7 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white">
                    Severity, confidence and scoring
                  </h3>

                  <div className="divide-y divide-gray-800/80 text-xs sm:text-sm text-gray-300 font-sans">
                    <div className="py-2.5 flex items-start gap-3 first:pt-0">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Severity</strong> &mdash; needs an exact scale, definitions, owner and change behaviour. Severity is not compromise.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Confidence</strong> &mdash; needs a method, range, validation and interpretation. It is not a probability of breach.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Quality scores</strong> &mdash; need a source, method and denominator &mdash; otherwise they're a generic trust number.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Benchmark percentiles</strong> &mdash; need dataset, cohort, method, period and rights before they mean anything.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: TUNING AND SUPPRESSION (#F4F3EF BACKGROUND) */}
        {/* ========================================================================= */}

        {/* MOBILE SECTION 8 (block sm:hidden) */}
        <section id="tuning-mobile" className="block sm:hidden max-w-7xl mx-auto px-4 py-8 border-t border-gray-200/70">
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                TUNING AND SUPPRESSION
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-[#151B28] tracking-tight leading-snug">
              Tuning must not make inconvenient detections disappear.
            </h2>
            <p className="text-xs text-[#151B28]/75 leading-relaxed font-sans">
              If suppression, deduplication or exception behaviour exists, its scope, owner, rationale and history are inspectable by authorized users. Quiet is not the same as clean.
            </p>
          </div>

          {/* 8-Row Governance Disclosure Card */}
          <div className="bg-white rounded-2xl border border-gray-300/80 p-4 shadow-sm space-y-4 divide-y divide-gray-100 mb-6">
            {/* Header */}
            <div className="bg-[#EBE7DF] p-3 rounded-xl font-mono text-[10px] font-bold text-[#151B28] uppercase tracking-wider flex justify-between">
              <span>MECHANISM</span>
              <span>MINIMUM GOVERNANCE WHERE IMPLEMENTED</span>
            </div>

            {/* Rows */}
            {TUNING_GOVERNANCE_DATA.map((item, idx) => (
              <div key={idx} className="pt-3 space-y-1.5 text-xs font-sans">
                <span className="font-mono font-bold text-[#151B28] text-xs block uppercase">
                  {item.mech}
                </span>
                <p className="text-gray-600 leading-relaxed font-sans">
                  {item.gov}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* DESKTOP SECTION 8 (hidden sm:block) */}
        <section id="tuning" className="hidden sm:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200/70">
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                TUNING AND SUPPRESSION
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
              Tuning must not make inconvenient detections disappear.
            </h2>
            <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
              If suppression, deduplication or exception behaviour exists, its scope, owner, rationale and history are inspectable by authorized users. Quiet is not the same as clean.
            </p>
          </div>

          {/* 8-Row Tuning Governance Disclosure Matrix Table */}
          <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[750px]">
                <thead>
                  <tr className="bg-[#EBE7DF] text-[#151B28] text-[11px] font-mono font-bold uppercase tracking-wider border-b border-gray-300/70">
                    <th className="py-4 px-6 w-1/4">MECHANISM</th>
                    <th className="py-4 px-6 w-3/4 border-l border-gray-300/70">MINIMUM GOVERNANCE WHERE IMPLEMENTED</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200/80 text-xs sm:text-sm">
                  {TUNING_GOVERNANCE_DATA.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-3.5 px-6 font-mono font-bold text-[#151B28]">
                        {item.mech}
                      </td>
                      <td className="py-3.5 px-6 text-gray-600 border-l border-gray-200/80 leading-relaxed font-sans">
                        {item.gov}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: HANDOFF AND AUTHORITY (#F4F3EF BACKGROUND) */}
        {/* ========================================================================= */}

        {/* MOBILE SECTION 9 (block sm:hidden) */}
        <section id="handoff-mobile" className="block sm:hidden max-w-7xl mx-auto px-4 py-8 border-t border-gray-200/70">
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                HANDOFF AND AUTHORITY
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-[#151B28] tracking-tight leading-snug">
              Analytics produces context for investigation. Nothing more.
            </h2>
            <p className="text-xs text-[#151B28]/75 leading-relaxed font-sans">
              It does not independently establish causality, compromise, materiality or response authority. Each output crosses into the parent route carrying its own boundary with it.
            </p>
          </div>

          {/* 7-Row Stacked Handoff Matrix Card */}
          <div className="bg-white rounded-2xl border border-gray-300/80 p-4 shadow-sm space-y-4 divide-y divide-gray-100 mb-6">
            <div className="bg-[#EBE7DF] p-3 rounded-xl font-mono text-[10px] font-bold text-[#151B28] uppercase tracking-wider flex justify-between">
              <span>ANALYTICS OUTPUT</span>
              <span>HANDOFF BOUNDARY</span>
            </div>

            {HANDOFF_BOUNDARIES.map((item, idx) => (
              <div key={idx} className="pt-3 space-y-1.5 text-xs font-sans">
                <span className="font-mono font-bold text-[#151B28] text-xs block uppercase">
                  {item.out}
                </span>
                <p className="text-gray-600 leading-relaxed font-sans">
                  <strong className="text-gray-800 font-semibold">HANDSOFF TO D&R:</strong> {item.hands}
                </p>
                <p className="text-gray-700 leading-relaxed font-sans">
                  <strong className="text-gray-800 font-semibold">BOUNDARY:</strong> {item.bound}
                </p>
              </div>
            ))}
          </div>

          {/* 3 Stacked Parent Route Cards */}
          <div className="space-y-4 mb-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-bold text-[#151B28]">
                  Detection &amp; Response
                </h3>
                <span className="px-2.5 py-0.5 rounded-full font-bold text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">
                  ACTIVE
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed font-sans">
                The active parent. Investigation and authority context live there.
              </p>
              <div className="pt-1">
                <a
                  href="#hero"
                  className="px-4 py-2 bg-white hover:bg-gray-50 text-[#151B28] text-xs font-bold rounded-lg border border-gray-300 shadow-sm transition-all inline-block"
                >
                  Open &rarr;
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-bold text-[#151B28]">
                  Case Management
                </h3>
                <span className="px-2.5 py-0.5 rounded-full font-bold text-[10px] font-mono bg-amber-50 text-amber-700 border border-amber-200">
                  CONDITIONAL
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed font-sans">
                Investigation, evidence, communications and decision history remain a separately gated destination. Nothing here implies it is current.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-bold text-[#151B28]">
                  Governed Response
                </h3>
                <span className="px-2.5 py-0.5 rounded-full font-bold text-[10px] font-mono bg-amber-50 text-amber-700 border border-amber-200">
                  CONDITIONAL
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed font-sans">
                Approvals, signing, attestation and rollback belong there. Analytics cannot imply action authority or tier availability.
              </p>
            </div>
          </div>

          {/* Footnote */}
          <p className="font-mono text-[11px] text-gray-600 leading-relaxed">
            <strong className="text-[#151B28] font-bold">No authority leak.</strong> Analytics prioritization, replay or rule evaluation cannot silently trigger or authorize a consequential response action unless governed-response authority explicitly says so.
          </p>
        </section>

        {/* DESKTOP SECTION 9 (hidden sm:block) */}
        <section id="handoff" className="hidden sm:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200/70">
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                HANDOFF AND AUTHORITY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
              Analytics produces context for investigation. Nothing more.
            </h2>
            <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
              It does not independently establish causality, compromise, materiality or response authority. Each output crosses into the parent route carrying its own boundary with it.
            </p>
          </div>

          {/* 7-Row Handoff & Boundary Matrix Table */}
          <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[750px]">
                <thead>
                  <tr className="bg-[#EBE7DF] text-[#151B28] text-[11px] font-mono font-bold uppercase tracking-wider border-b border-gray-300/70">
                    <th className="py-4 px-6 w-1/4">ANALYTICS OUTPUT</th>
                    <th className="py-4 px-6 w-5/12 border-l border-gray-300/70">WHAT HANDS OFF TO DETECTION &amp; RESPONSE</th>
                    <th className="py-4 px-6 w-1/3 border-l border-gray-300/70">BOUNDARY THAT TRAVELS WITH IT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200/80 text-xs sm:text-sm">
                  {HANDOFF_BOUNDARIES.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-3.5 px-6 font-mono font-bold text-[#151B28]">
                        {item.out}
                      </td>
                      <td className="py-3.5 px-6 text-gray-600 border-l border-gray-200/80 leading-relaxed font-sans">
                        {item.hands}
                      </td>
                      <td className="py-3.5 px-6 text-gray-700 border-l border-gray-200/80 leading-relaxed font-sans">
                        {item.bound}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3-Column Parent Route Destination Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-4">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#151B28]">
                    Detection &amp; Response
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full font-bold text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">
                    ACTIVE
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  The active parent. Investigation and authority context live there.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="#hero"
                  className="px-4 py-2 bg-white hover:bg-gray-50 text-[#151B28] text-xs font-bold rounded-lg border border-gray-300 shadow-sm transition-all inline-block"
                >
                  Open &rarr;
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#151B28]">
                    Case Management
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full font-bold text-[10px] font-mono bg-amber-50 text-amber-700 border border-amber-200">
                    CONDITIONAL
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  Investigation, evidence, communications and decision history remain a separately gated destination. Nothing here implies it is current.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#151B28]">
                    Governed Response
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full font-bold text-[10px] font-mono bg-amber-50 text-amber-700 border border-amber-200">
                    CONDITIONAL
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  Approvals, signing, attestation and rollback belong there. Analytics cannot imply action authority or tier availability.
                </p>
              </div>
            </div>
          </div>

          {/* Monospace Footnote */}
          <p className="font-mono text-[11px] text-gray-600 mt-4 leading-relaxed">
            <strong className="text-[#151B28] font-bold">No authority leak.</strong> Analytics prioritization, replay or rule evaluation cannot silently trigger or authorize a consequential response action unless governed-response authority explicitly says so.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 10: AI, RISK AND COMPLIANCE BOUNDARIES (#0B1B26 DARK NAVY) */}
        {/* ========================================================================= */}

        {/* MOBILE SECTION 10 (block sm:hidden) */}
        <section id="ai-boundaries-mobile" className="block sm:hidden bg-[#0B1B26] text-white py-8 border-t border-gray-800 my-6">
          <div className="max-w-7xl mx-auto px-4 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  AI, RISK AND COMPLIANCE BOUNDARIES
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight leading-snug">
                AI explains. It does not decide.
              </h2>
              <p className="text-xs text-gray-300/80 leading-relaxed font-sans">
                Where AI assists, it stays bounded, cited and overridable. It does not become the authority for rule validity, prioritization, incident determination, suppression or response execution.
              </p>
            </div>

            {/* 2 Stacked Cards */}
            <div className="space-y-6">
              {/* Left Card: What AI may do here */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-5 space-y-4">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-[#182E38] flex items-center justify-center text-gray-300 font-mono text-xs font-bold border border-gray-700">
                    ◆
                  </div>
                  <h3 className="text-base font-bold text-white">
                    What AI may do here
                  </h3>

                  <div className="divide-y divide-gray-800/80 text-xs text-gray-300 font-sans">
                    <div className="py-2.5 flex items-start gap-3 first:pt-0">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Summarize an approved rule's purpose</strong> &mdash; with a citation, and without exposing sensitive logic.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Summarize source-backed relationships</strong> &mdash; without the leap to causality or attribution.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Explain a priority</strong> using the approved method's inputs &mdash; not generate the score semantics.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Explain a replay difference</strong> using cited versions and inputs, without rewriting history.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Suggest a rule or a tuning change</strong> &mdash; advisory only, requiring human review and a versioned release.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="/responsible-ai"
                    className="px-4 py-2 bg-[#16242F] hover:bg-[#1E303D] text-white text-xs font-bold rounded-lg border border-gray-700 shadow-sm transition-all inline-block"
                  >
                    AI decision rights
                  </a>
                </div>
              </div>

              {/* Right Card: Where each conclusion actually lives */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-5 space-y-4">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-[#182E38] flex items-center justify-center text-gray-300 font-mono text-xs font-bold border border-gray-700">
                    ◇
                  </div>
                  <h3 className="text-base font-bold text-white">
                    Where each conclusion actually lives
                  </h3>

                  <div className="divide-y divide-gray-800/80 text-xs text-gray-300 font-sans">
                    <div className="py-2.5 flex items-start gap-3 first:pt-0">
                      <span className="w-3.5 h-3.5 rounded-full border border-gray-600 mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Evidence Ledger</strong> &mdash; analytics may reference governed evidence. Verification is not detection truth.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-full border border-gray-600 mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Compliance Control Plane</strong> &mdash; findings may relate to controls and exceptions. A detection is not a compliance conclusion.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-full border border-gray-600 mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Risk Intelligence</strong> &mdash; analytics context may feed evidence-linked risk. Priority is not executive risk.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-full border border-gray-600 mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Trust Center</strong> &mdash; current security, privacy and assurance claims. There is no self-certified analytics assurance.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-full border border-gray-600 mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">System Status</strong> &mdash; authoritative for live service health. Analytics never restates availability.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DESKTOP SECTION 10 (hidden sm:block) */}
        <section id="ai-boundaries" className="hidden sm:block bg-[#0B1B26] text-white py-14 sm:py-16 my-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  AI, RISK AND COMPLIANCE BOUNDARIES
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                AI explains. It does not decide.
              </h2>
              <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
                Where AI assists, it stays bounded, cited and overridable. It does not become the authority for rule validity, prioritization, incident determination, suppression or response execution.
              </p>
            </div>

            {/* 2-Column Bottom Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Left Card: What AI may do here */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 sm:p-7 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-lg bg-[#182E38] flex items-center justify-center text-gray-300 font-mono text-xs font-bold border border-gray-700">
                      ◆
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      What AI may do here
                    </h3>
                  </div>

                  <div className="divide-y divide-gray-800/80 text-xs sm:text-sm text-gray-300 font-sans">
                    <div className="py-2.5 flex items-start gap-3 first:pt-0">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Summarize an approved rule's purpose</strong> &mdash; with a citation, and without exposing sensitive logic.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Summarize source-backed relationships</strong> &mdash; without the leap to causality or attribution.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Explain a priority</strong> using the approved method's inputs &mdash; not generate the score semantics.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Explain a replay difference</strong> using cited versions and inputs, without rewriting history.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Suggest a rule or a tuning change</strong> &mdash; advisory only, requiring human review and a versioned release.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="/responsible-ai"
                    className="px-4 py-2.5 bg-[#16242F] hover:bg-[#1E303D] text-white text-xs font-bold rounded-lg border border-gray-700 shadow-sm transition-all inline-block"
                  >
                    AI decision rights
                  </a>
                </div>
              </div>

              {/* Right Card: Where each conclusion actually lives */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 sm:p-7 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-lg bg-[#182E38] flex items-center justify-center text-gray-300 font-mono text-xs font-bold border border-gray-700">
                      ◇
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      Where each conclusion actually lives
                    </h3>
                  </div>

                  <div className="divide-y divide-gray-800/80 text-xs sm:text-sm text-gray-300 font-sans">
                    <div className="py-2.5 flex items-start gap-3 first:pt-0">
                      <span className="w-3.5 h-3.5 rounded-full border border-gray-600 mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Evidence Ledger</strong> &mdash; analytics may reference governed evidence. Verification is not detection truth.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-full border border-gray-600 mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Compliance Control Plane</strong> &mdash; findings may relate to controls and exceptions. A detection is not a compliance conclusion.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-full border border-gray-600 mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Risk Intelligence</strong> &mdash; analytics context may feed evidence-linked risk. Priority is not executive risk.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-full border border-gray-600 mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Trust Center</strong> &mdash; current security, privacy and assurance claims. There is no self-certified analytics assurance.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-full border border-gray-600 mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">System Status</strong> &mdash; authoritative for live service health. Analytics never restates availability.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 11: DIRECT ANSWERS FAQ ACCORDION (#EFECE6 WARM BEIGE BACKGROUND) */}
        {/* ========================================================================= */}

        {/* MOBILE SECTION 11 (block sm:hidden) */}
        <section id="faq-mobile" className="block sm:hidden bg-[#EFECE6] py-8 border-t border-gray-300/60">
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  DIRECT ANSWERS
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-[#151B28] tracking-tight leading-snug">
                Questions a detection engineer asks first.
              </h2>
            </div>

            {/* 12 Collapsible FAQ Accordion Stack */}
            <div className="divide-y divide-gray-300/60 border-t border-b border-gray-300/60 font-sans">
              {SECURITY_ANALYTICS_FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="py-3.5">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between gap-3 text-left group focus:outline-none"
                    >
                      <span className="text-xs font-bold text-[#151B28] group-hover:text-[#E0533C] transition-colors leading-snug">
                        {faq.q}
                      </span>
                      <span className="text-base font-bold text-[#E0533C] shrink-0 font-mono">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-2.5 text-xs text-gray-600 leading-relaxed font-sans">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* DESKTOP SECTION 11 (hidden sm:block) */}
        <section id="faq" className="hidden sm:block bg-[#EFECE6] py-16 sm:py-24 border-t border-gray-300/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  DIRECT ANSWERS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151B28]">
                Questions a detection engineer asks first.
              </h2>
            </div>

            {/* 12 Collapsible FAQ Accordion Stack */}
            <div className="divide-y divide-gray-300/60 border-t border-b border-gray-300/60 font-sans">
              {SECURITY_ANALYTICS_FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="py-4 sm:py-5">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none"
                    >
                      <span className="text-sm sm:text-base font-bold text-[#151B28] group-hover:text-[#E0533C] transition-colors">
                        {faq.q}
                      </span>
                      <span className="text-lg sm:text-xl font-bold text-[#E0533C] shrink-0 font-mono">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed max-w-3xl pr-6 font-sans">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 12: GET STARTED (CTA BANNER WITH RADIAL PLUM GRADIENT & MONOSPACE) */}
        {/* ========================================================================= */}

        {/* MOBILE SECTION 12 (block sm:hidden) */}
        <section className="block sm:hidden relative overflow-hidden bg-[#071829] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3D2131] via-[#161B29]/70 to-[#071829] text-white py-12 px-4 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center space-y-5 relative z-10">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                GET STARTED
              </span>
            </div>

            <h2 className="text-2xl font-extrabold text-white tracking-tight leading-snug">
              Bring a hard question about how a result was produced.
            </h2>

            <p className="text-xs text-gray-300 leading-relaxed font-sans">
              We'll walk the rule record, the relationship basis, the context provenance, a replay comparison and a priority rationale &mdash; and be explicit about which parts are conditional and which are governed elsewhere.
            </p>

            {/* Action Buttons Stack matching screenshot */}
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="px-4 py-3 bg-[#E0533C] hover:bg-[#c94530] text-white font-bold text-xs rounded-lg transition-all shadow-md text-center"
                >
                  Book a Demo
                </button>
                <a
                  href="#hero"
                  className="px-4 py-3 bg-white/5 border border-white/20 hover:bg-white/10 text-white font-semibold text-xs rounded-lg transition-all text-center"
                >
                  Detection &amp; Response
                </a>
              </div>

              <div className="flex justify-center">
                <a
                  href="/verify-evidence"
                  className="px-6 py-3 bg-white/5 border border-white/20 hover:bg-white/10 text-white font-semibold text-xs rounded-lg transition-all text-center inline-block"
                >
                  Evidence ledger
                </a>
              </div>
            </div>

            {/* Monospace Footnote */}
            <p className="font-mono text-[10px] text-gray-400 leading-relaxed pt-4">
              Rule language, correlation engine, context providers, replay scope and prioritization method are authority-gated and vary by approved implementation.
            </p>
          </div>
        </section>

        {/* DESKTOP SECTION 12 (hidden sm:block) */}
        <section className="hidden sm:block relative overflow-hidden bg-[#071829] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3D2131] via-[#161B29]/70 to-[#071829] text-white py-16 sm:py-24 border-t border-gray-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                GET STARTED
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
              Bring a hard question about how a result was produced.
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We'll walk the rule record, the relationship basis, the context provenance, a replay comparison and a priority rationale &mdash; and be explicit about which parts are conditional and which are governed elsewhere.
            </p>

            {/* Action Buttons Stack */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto w-full pt-4">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#E0533C] hover:bg-[#c94530] text-white font-bold text-sm rounded-lg transition-all shadow-md text-center"
              >
                Book a Demo
              </button>
              <a
                href="#hero"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#16202A] hover:bg-[#1E2B38] text-white font-semibold text-sm rounded-lg border border-gray-700 transition-all shadow-sm text-center"
              >
                Detection &amp; Response
              </a>
              <a
                href="/verify-evidence"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#16202A] hover:bg-[#1E2B38] text-white font-semibold text-sm rounded-lg border border-gray-700 transition-all shadow-sm text-center"
              >
                Evidence ledger
              </a>
            </div>

            {/* Monospace Footnote */}
            <p className="font-mono text-[10px] text-gray-400 leading-relaxed max-w-lg mx-auto text-center pt-6">
              Rule language, correlation engine, context providers, replay scope and prioritization method are authority-gated and vary by approved implementation.
            </p>
          </div>
        </section>
      </main>

      {/* <Footer /> */}

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}
