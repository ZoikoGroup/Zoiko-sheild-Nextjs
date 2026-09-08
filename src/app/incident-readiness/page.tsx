"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { Navbar } from "@/components/layout/Navbar";
// import { Footer } from "@/components/layout/Footer";
import { DemoModal } from "@/components/ui/DemoModal";

// 6 Stages Data
const OPERATING_STAGES = [
  {
    step: "01",
    title: "Prepare",
    desc: "Scope, roles, contacts, dependencies, playbooks, access, evidence needs, recovery assumptions and owners.",
  },
  {
    step: "02",
    title: "Exercise",
    desc: "Scenario, objectives, participants, decisions, observations, gaps, evidence and a named reviewer.",
  },
  {
    step: "03",
    title: "Activate",
    desc: "Verified route, entitlement where applicable, incident category, scope snapshot, lead, authority and secure channel.",
  },
  {
    step: "04",
    title: "Respond",
    desc: "Facts and unknowns kept apart. Approvals, actions, communications, dependencies and evidence history.",
  },
  {
    step: "05",
    title: "Recover",
    desc: "Restoration plan, system owners, backups, validation, forward-fix or rollback, residual issues, business acceptance.",
  },
  {
    step: "06",
    title: "Learn",
    desc: "Findings, owners, priorities, due dates, corrections, runbook updates and retest conditions.",
  },
];

// 9 Roles & Command Data
const ROLES_DATA = [
  {
    role: "incident lead",
    req: "Current role, authority, alternates, activation method and handoff.",
    boundary: "ZoikoShield does not automatically command your incidents.",
  },
  {
    role: "security ops lead",
    req: "Investigation and coordination responsibilities within stated authority.",
    boundary: "Not a substitute for contracted operations scope.",
  },
  {
    role: "IT / cloud / identity",
    req: "System access, change and recovery responsibilities per system.",
    boundary: "Not every system is supported or recoverable.",
  },
  {
    role: "executive sponsor",
    req: "Escalation and decision role for business-impacting choices.",
    boundary: "No inferred legal materiality authority.",
  },
  {
    role: "legal / privacy",
    req: "Customer-designated qualified roles, routed to by category.",
    boundary: "No public exposure of personal contact detail.",
  },
  {
    role: "communications lead",
    req: "Internal and external coordination with a named approval path.",
    boundary: "No spokesperson authority created here.",
  },
  {
    role: "BC/DR owner",
    req: "Business restoration priority and the acceptance decision.",
    boundary: "Technical success is not business recovery.",
  },
  {
    role: "third parties",
    req: "Provider, support, insurer and counsel routes where authoritative.",
    boundary: "A documented contact does not guarantee cooperation.",
  },
  {
    role: "alternates",
    req: "Fallback role plus verification status for every primary.",
    boundary: "Unverified alternates render as a gap.",
  },
];

// 7 Authority Tiers Data
const AUTHORITY_TIERS = [
  {
    tier: "Advisory",
    color: "text-cyan-400",
    desc: "Recommendation or information only.",
    rule: "A human on your side decides. No hidden execution.",
  },
  {
    tier: "Review-required",
    color: "text-amber-400",
    desc: "A prepared action or work product needs authorized review.",
    rule: "Reviewer identity and role, evidence, changes and outcome all recorded.",
  },
  {
    tier: "Approval-required",
    color: "text-orange-400",
    desc: "A consequential action needs explicit authorized approval.",
    rule: "Target, scope, consequence, reversibility, expiry and approver — all named before execution.",
  },
  {
    tier: "Pre-authorized",
    color: "text-emerald-400",
    desc: "A narrow, reversible action, permitted only by explicit policy or contract.",
    rule: "Scope, stop conditions, expiry, receipts and retrospective review are mandatory.",
  },
  {
    tier: "Emergency overlay",
    color: "text-purple-400",
    desc: "Available only where exact emergency governance already exists.",
    rule: "Trigger, minimal scope, time bound, independent logging and retrospective review.",
  },
  {
    tier: "Prohibited",
    color: "text-rose-400",
    desc: "The action is not permitted in the current context.",
    rule: "Blocked, with an authorized alternative or escalation offered instead.",
  },
  {
    tier: "Unknown authority",
    color: "text-gray-400",
    desc: "Current policy or eligibility cannot be resolved.",
    rule: "Fails closed or routes to authorized review. Permission is never inferred.",
  },
];

// 8 Communications Data
const COMMS_DATA = [
  {
    type: "activation confirmation",
    content: "Case ID, verified participants, scope snapshot, unknowns, lead, secure channel, next step.",
    control: "Verified identity before any detail.",
  },
  {
    type: "operational update",
    content: "Facts, changes, evidence, open questions, options, approvals, blockers, next work.",
    control: "Facts kept separate from inference.",
  },
  {
    type: "decision request",
    content: "Decision needed, options, evidence, consequence, time sensitivity.",
    control: "Routed to the authorized owner, not the loudest room.",
  },
  {
    type: "executive update",
    content: "Business-relevant facts, changes, unknowns and decisions needed.",
    control: "No invented materiality or probability. Shorter never means more certain.",
  },
  {
    type: "legal / privacy brief",
    content: "Facts and evidence routed for qualified review.",
    control: "Counsel and privacy authority reach the conclusions.",
  },
  {
    type: "third-party request",
    content: "Provider question, scope, authorization and secure channel.",
    control: "Minimum necessary information only.",
  },
  {
    type: "external statement",
    content: "Approved facts, known unknowns, audience, owner, review and expiry.",
    control: "A named authorized publisher. Never auto-published.",
  },
  {
    type: "closure summary",
    content: "Work performed, decisions, limitations, residual issues, evidence links.",
    control: "Residual issues stay listed after closure.",
  },
];

// 6 Adjacent Routes Data
const ADJACENT_ROUTES = [
  {
    dim: "retainer fit",
    standalone: "Improve preparedness, approvals, communications and the recovery operating model.",
    separate: "IR Retainer — annual readiness plus controlled activation when delivery-ready.",
  },
  {
    dim: "operations",
    standalone: "Prepares telemetry ownership, escalation routes and evidence expectations.",
    separate: "Managed Defense — actual monitoring, detection and analyst workflow.",
  },
  {
    dim: "governance design",
    standalone: "Applies the readiness model to your environment.",
    separate: "vCISO & Advisory — may help design and review it, but never becomes incident command.",
  },
  {
    dim: "action execution",
    standalone: "Prepares decision rights and action prerequisites.",
    separate: "Governed Response — action scope and authority only where contracted.",
  },
  {
    dim: "responders",
    standalone: "No staffing promise, and no coverage-hours claim.",
    separate: "Availability and staffing come from service authority only.",
  },
  {
    dim: "forensics, legal, PR",
    standalone: "Explains the boundary and the dependency.",
    separate: "Separate entitlement, scope and authority. Not automatically included.",
  },
];

// 12 Incident Readiness FAQs
const INCIDENT_FAQS = [
  {
    q: "What does incident readiness actually mean?",
    a: "Preparing roles, activation paths, approvals, communications, evidence, technical prerequisites, exercises and recovery dependencies — before urgency starts removing your options.",
  },
  {
    q: "Does readiness mean an incident will be prevented?",
    a: "No. Incident readiness improves decision clarity, activation speed, authority boundaries, and recovery governance when an event occurs. It does not guarantee prevention, zero downtime, or the absence of attacks.",
  },
  {
    q: "Does ZoikoShield provide 24/7 incident responders?",
    a: "Standalone readiness structures the operating model, playbooks, and decision rights. Hands-on 24/7 incident containment, analyst triage, or emergency dispatch require a separate active service contract such as Managed Defense or an IR Retainer.",
  },
  {
    q: "Is the Incident Response Retainer included?",
    a: "No. Incident readiness is an operating methodology and exercise framework. Commercial retainers, guaranteed SLA callout rights, and active investigation hours are contracted separately under an IR Retainer.",
  },
  {
    q: "Can ZoikoShield contain systems automatically?",
    a: "Automated or analyst-driven containment is governed strictly by your contracted response authority level. Readiness defines pre-authorized scope and stop conditions, but automated execution only occurs under explicit service entitlement.",
  },
  {
    q: "Does a tabletop prove we're ready?",
    a: "A tabletop exercise tests decision paths, role clarity, and communication under synthetic scenarios. It generates findings and action items, but it does not retroactively guarantee operational success during a real incident.",
  },
  {
    q: "Does having backups prove we can recover?",
    a: "No. Having a backup configured is only State 01. Full recovery readiness requires tested restore execution, validated data integrity, and formal acceptance by the business system owner.",
  },
  {
    q: "Does ZoikoShield decide legal notification or materiality?",
    a: "No. Determining regulatory materiality, reporting obligations, legal privilege, or notifying law enforcement and regulators remain strictly under your designated counsel and executive officer authority.",
  },
  {
    q: "Can AI run incident response?",
    a: "AI models can assist with evidence summarization, initial log correlation, and drafting communications. However, AI cannot self-approve, escalate privileges, or substitute for authorized human decision-makers.",
  },
  {
    q: "What should an existing customer do during an incident?",
    a: "Follow your established activation route immediately. Authenticate via your customer portal to initiate response under your agreed authority and SLA conditions.",
  },
  {
    q: "What happens if a key source or provider is unavailable?",
    a: "Readiness playbooks mandate explicit fallback routes and stop conditions for missing telemetry or unavailable key personnel, ensuring operations do not stall on a single point of failure.",
  },
  {
    q: "Is there a readiness score?",
    a: "We do not assign arbitrary percentage scores or green badges. Readiness is evaluated against explicit baseline criteria, verified dates, and inspectable gap records.",
  },
];

export default function IncidentReadinessPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#F4F3EF] text-[#111827] font-sans antialiased">
      {/* <Navbar /> */}

      <main className="pt-24 sm:pt-28 pb-0 overflow-x-hidden">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO & INCIDENT COMMAND CENTER */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-14">
          {/* Mobile Emergency Alert Top Banner (Mobile only) */}
          <div className="block sm:hidden bg-[#0B1B26] p-4 rounded-xl text-xs font-sans text-gray-300 border border-gray-800 space-y-2 mb-4">
            <p className="leading-relaxed">
              <strong className="text-white font-bold">Dealing with an incident right now?</strong> Don't use this page. Go to the approved activation route &mdash; a demo form is not an incident channel.
            </p>
            <div className="flex items-center gap-4 font-mono text-[11px] font-bold text-[#E0533C]">
              <a href="#routing" className="hover:underline">Get Support &rarr;</a>
              <a href="#routing" className="hover:underline">System Status &rarr;</a>
            </div>
          </div>

          {/* Mobile Breadcrumbs (Mobile only) */}
          <div className="block sm:hidden font-mono text-[11px] text-gray-500 mb-4">
            <span>Home</span> <span className="text-gray-400">/</span> <span>Solutions</span> <span className="text-gray-400">/</span> <span className="text-gray-800 font-semibold">Strengthen incident readiness</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  INCIDENT READINESS
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#151B28] tracking-tight leading-[1.12]">
                Strengthen incident readiness{" "}
                <span className="text-[#E0533C]">before urgency removes options.</span>
              </h1>

              <p className="text-xs sm:text-base lg:text-lg text-[#151B28]/75 max-w-xl leading-relaxed">
                Prepare roles, approvals, communications, evidence, exercises and recovery dependencies so your organization can act through explicit authority and visible limitations when an incident occurs.
              </p>

              {/* Mobile Status Pill Badges Stack (Mobile only) */}
              <div className="flex flex-wrap items-center gap-2 block sm:hidden py-1">
                <span className="bg-[#EFECE6] text-amber-800 font-mono text-[10px] font-bold px-3 py-1 rounded-full border border-amber-300/70">
                  &bull; SOLUTION STATE: CONDITIONAL
                </span>
                <span className="bg-white text-gray-700 font-mono text-[10px] font-bold px-3 py-1 rounded-full border border-gray-300">
                  &bull; SCOPE: PER ENVIRONMENT
                </span>
                <span className="bg-white text-gray-700 font-mono text-[10px] font-bold px-3 py-1 rounded-full border border-gray-300">
                  &bull; COVERAGE: PER CONTRACT
                </span>
                <span className="bg-white text-gray-700 font-mono text-[10px] font-bold px-3 py-1 rounded-full border border-gray-300">
                  &bull; WCAG 2.2 AA
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 sm:pt-2">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="px-6 py-3.5 bg-[#E0533C] hover:bg-[#c94530] text-white font-bold text-sm rounded-lg transition-all shadow-md text-center"
                >
                  Book a Demo
                </button>
                <a
                  href="#operating-model"
                  className="px-5 py-3.5 bg-[#EFECE6] hover:bg-gray-200 text-[#151B28] font-semibold text-sm rounded-lg border border-gray-300/80 transition-all shadow-sm text-center"
                >
                  Explore Incident Readiness
                </a>
                <Link
                  href="/services"
                  className="px-5 py-3.5 bg-[#EFECE6] hover:bg-gray-200 text-[#151B28] font-semibold text-sm rounded-lg border border-gray-300/80 transition-all shadow-sm text-center"
                >
                  Explore Managed Defense
                </Link>
              </div>

              {/* Mobile Boundary Footnote (Mobile only) */}
              <p className="block sm:hidden text-xs text-gray-600 leading-relaxed pt-1">
                <strong className="text-[#151B28] font-bold">Boundary.</strong> Readiness does not guarantee incident prevention, evidence completeness, containment, recovery time, legal or regulatory outcome, insurer acceptance, or business continuity.
              </p>
            </div>

            {/* Right Column: 3D Incident Command Center Image (Desktop) */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-black">
                <Image
                  src="/images/ir1.png"
                  alt="Incident Readiness 3D Holographic Command Center Illustration"
                  width={560}
                  height={640}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Mobile Readiness Domains Illustrative Card (Mobile only) */}
          <div className="block sm:hidden mt-8 bg-white rounded-2xl border-t-4 border-[#0B1B26] border-x border-b border-gray-200 p-5 shadow-sm space-y-4">
            <div className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider">
              READINESS DOMAINS &mdash; ILLUSTRATIVE
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-extrabold text-[#151B28]">
                Six domains, six separate states
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Each domain carries its own state. States are not averaged, weighted or rolled up.
              </p>
            </div>

            {/* 6 Illustrative Domain Rows */}
            <div className="divide-y divide-gray-100 text-xs font-sans space-y-1">
              <div className="py-2.5 flex items-center justify-between gap-2 first:pt-0">
                <div>
                  <div className="font-bold text-[#151B28]">Roles & contacts</div>
                  <div className="font-mono text-[10px] text-gray-500">verified 04 Aug 2026</div>
                </div>
                <span className="bg-emerald-50 text-emerald-700 font-mono text-[10px] font-bold px-2.5 py-0.5 rounded border border-emerald-200">
                  PREPARED
                </span>
              </div>
              <div className="py-2.5 flex items-center justify-between gap-2">
                <div>
                  <div className="font-bold text-[#151B28]">Activation & approvals</div>
                  <div className="font-mono text-[10px] text-gray-500">2 paths unowned</div>
                </div>
                <span className="bg-amber-50 text-amber-700 font-mono text-[10px] font-bold px-2.5 py-0.5 rounded border border-amber-200">
                  PARTIAL
                </span>
              </div>
              <div className="py-2.5 flex items-center justify-between gap-2">
                <div>
                  <div className="font-bold text-[#151B28]">Access prerequisites</div>
                  <div className="font-mono text-[10px] text-gray-500">last tested 11 Feb 2026</div>
                </div>
                <span className="bg-rose-50 text-rose-700 font-mono text-[10px] font-bold px-2.5 py-0.5 rounded border border-rose-200">
                  STALE
                </span>
              </div>
              <div className="py-2.5 flex items-center justify-between gap-2">
                <div>
                  <div className="font-bold text-[#151B28]">Evidence & telemetry</div>
                  <div className="font-mono text-[10px] text-gray-500">1 source degraded</div>
                </div>
                <span className="bg-amber-50 text-amber-700 font-mono text-[10px] font-bold px-2.5 py-0.5 rounded border border-amber-200">
                  PARTIAL
                </span>
              </div>
              <div className="py-2.5 flex items-center justify-between gap-2">
                <div>
                  <div className="font-bold text-[#151B28]">Playbooks & exercises</div>
                  <div className="font-mono text-[10px] text-gray-500">3 of 7 scenarios</div>
                </div>
                <span className="bg-slate-100 text-slate-700 font-mono text-[10px] font-bold px-2.5 py-0.5 rounded border border-slate-300">
                  UNTESTED
                </span>
              </div>
              <div className="py-2.5 flex items-center justify-between gap-2">
                <div>
                  <div className="font-bold text-[#151B28]">Recovery & restore</div>
                  <div className="font-mono text-[10px] text-gray-500">no validated restore on record</div>
                </div>
                <span className="bg-gray-100 text-gray-600 font-mono text-[10px] font-bold px-2.5 py-0.5 rounded border border-gray-300">
                  UNKNOWN
                </span>
              </div>
            </div>

            {/* Bottom Callout inside card */}
            <div className="bg-[#EFECE6] p-4 rounded-xl space-y-1 text-xs text-gray-700 leading-relaxed mt-4">
              <span>Overall readiness score: 76% &mdash; <strong className="text-[#151B28] font-bold">deliberately absent</strong>. A single number would compress incomparable gaps into false precision. No global score is published without an approved methodology, denominator, period, scope and validation.</span>
            </div>
          </div>

          {/* Mobile Metadata Footer Box (Mobile only) */}
          <div className="block sm:hidden mt-6 bg-[#EFECE6] p-5 border-t border-b border-gray-300/60 font-mono text-[11px] text-gray-600 space-y-2 uppercase tracking-wider">
            <div className="flex items-center justify-between">
              <div><span className="text-gray-400">ROUTE</span> <span className="font-bold text-gray-800">/SOLUTIONS/INCIDENT-READINESS</span></div>
              <div><span className="text-gray-400">FAMILY</span> <span className="font-bold text-gray-800">SOLUTIONS BY NEED</span></div>
            </div>
            <div><span className="text-gray-400">STATE</span> <span className="font-bold text-gray-800">CONDITIONAL</span></div>
            <div><span className="text-gray-400">CANONICAL SERVICE</span> <span className="font-bold text-gray-800">/SERVICES/INCIDENT-READINESS</span></div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: READINESS OPERATING MODEL (SIX STAGES) */}
        {/* ========================================================================= */}
        <section id="operating-model" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200/70">
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                READINESS OPERATING MODEL
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
              Six stages, and none of them proves the one before it.
            </h2>
            <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
              The transition from planned readiness to incident-time authority is where most programs lose clarity. Each stage keeps its own record so the handover stays legible under pressure.
            </p>
          </div>

          {/* 6-Column Divided Stepper Card */}
          <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            {OPERATING_STAGES.map((stg) => (
              <div key={stg.step} className="p-5 space-y-2">
                <span className="text-xs font-mono font-bold text-gray-400 block">{stg.step}</span>
                <h4 className="text-sm sm:text-base font-bold text-[#151B28]">{stg.title}</h4>
                <p className="text-[11px] sm:text-xs text-[#151B28]/70 leading-relaxed">{stg.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom Callout: Lifecycle law */}
          <div className="bg-white rounded-xl border-l-4 border-[#C53B3B] border-t border-r border-b border-gray-200 p-5 sm:p-6 shadow-sm space-y-1">
            <p className="text-xs sm:text-sm text-[#151B28]/75 leading-relaxed font-sans">
              <strong className="text-[#151B28] font-bold">Lifecycle law.</strong> A later stage never retroactively proves an earlier assumption. An executed action does not prove readiness. A successful restore does not prove every recovery dependency. An exercise pass does not guarantee an incident outcome. A material change to a system, provider, role or policy re-opens the readiness assumptions it touched.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: READINESS BASELINE (#F4F3EF BACKGROUND) */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200/70">
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                READINESS BASELINE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
              Readiness applies to a declared scope — and says so.
            </h2>
            <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
              One application, one tabletop, one control set or one business unit does not establish organization-wide readiness. The baseline is bounded, dated and inspectable.
            </p>
          </div>

          {/* 2-Column Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Card: What the baseline records */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                    📋
                  </div>
                  <h3 className="text-lg font-bold text-[#151B28]">
                    What the baseline records
                  </h3>
                </div>

                <div className="divide-y divide-gray-100 text-xs sm:text-sm text-[#151B28]/80 font-sans">
                  <div className="py-2.5 flex items-start gap-3 first:pt-0">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Scope ID and version</strong> with a stable effective date.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Business services</strong> in scope, and the systems and identity categories with their owners.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Regions and environments</strong> from authoritative operational scope only.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Critical dependencies</strong> — cloud, identity, endpoints, communications, backups, suppliers, facilities.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Scenario classes</strong> that were considered. There is no "all threats" claim.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Owners and alternates</strong> with the date each was last verified.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Gaps stay visible (Gold Accent Border) */}
            <div className="bg-white rounded-2xl border-2 border-amber-500/80 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center text-amber-700 font-mono text-xs font-bold border border-amber-200">
                    ⚠️
                  </div>
                  <h3 className="text-lg font-bold text-[#151B28]">
                    Gaps stay visible
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    Missing, stale, untested, unknown and blocked are all first-class states. None of them is silently assumed current, and none is rounded up into a green indicator.
                  </p>
                </div>

                <div className="divide-y divide-gray-100 text-xs sm:text-sm text-[#151B28]/80 font-sans">
                  <div className="py-2.5 flex items-start gap-3 first:pt-0">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-gray-400 mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      A stale contact is a readiness gap, not a working contact.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-gray-400 mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      An untested restore is not a recovery capability.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-gray-400 mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      A degraded provider changes what the baseline can claim.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-gray-400 mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      Exclusions — out-of-scope services, third parties and professional services — are named explicitly.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 text-[10px] font-mono text-gray-500 leading-relaxed">
                <strong className="text-gray-700 uppercase block text-[9px] tracking-wider mb-0.5">CONTACT SAFETY</strong>
                <span>Public examples use role categories only — never live phone numbers, private addresses, customer identities or emergency credentials.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: ROLES, CONTACTS AND COMMAND (DISTINCT WARM GREY-BEIGE #EFECE6) */}
        {/* ========================================================================= */}
        <section className="bg-[#EFECE6] py-14 sm:py-16 border-t border-gray-300/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  ROLES, CONTACTS AND COMMAND
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
                Who holds what, and who covers when they don't.
              </h2>
              <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
                The role contract is explained publicly. Actual contacts stay inside governed customer and service records. No role is left as a silent single point of failure.
              </p>
            </div>

            {/* Matrix Table with Warm Grey Header */}
            <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden mb-4">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-[#EBE7DF] text-[#151B28] text-[11px] font-mono font-bold uppercase tracking-wider border-b border-gray-300/70">
                      <th className="py-4 px-6 w-1/4">ROLE</th>
                      <th className="py-4 px-6 w-5/12">READINESS REQUIREMENT</th>
                      <th className="py-4 px-6 w-1/3 border-l border-gray-300/70">BOUNDARY</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200/80 text-xs sm:text-sm">
                    {ROLES_DATA.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3.5 px-6 font-mono font-bold text-[#151B28]">
                          {item.role}
                        </td>
                        <td className="py-3.5 px-6 text-gray-600 leading-relaxed">
                          {item.req}
                        </td>
                        <td className="py-3.5 px-6 text-gray-600 border-l border-gray-200/80">
                          {item.boundary}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: DECISION RIGHTS (DARK OBSIDIAN NAVY #0B1B26 BACKGROUND) */}
        {/* ========================================================================= */}
        <section className="bg-[#0B1B26] text-white py-14 sm:py-16 my-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  DECISION RIGHTS
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Severity is not authority.
              </h2>
              <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
                Impact, technical capability and permission are different dimensions. A high-impact event does not by itself permit containment, data access, service activation or external communication.
              </p>
            </div>

            {/* 4 Dimension Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-[#11242C] rounded-xl border border-gray-800 p-4 space-y-1">
                <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider block">DIMENSION 01</span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  <strong className="text-white font-bold">Severity</strong> — how bad it looks right now, by an authority-defined method.
                </p>
              </div>
              <div className="bg-[#11242C] rounded-xl border border-gray-800 p-4 space-y-1">
                <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider block">DIMENSION 02</span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  <strong className="text-white font-bold">Business impact</strong> — what the organization is actually losing.
                </p>
              </div>
              <div className="bg-[#11242C] rounded-xl border border-gray-800 p-4 space-y-1">
                <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider block">DIMENSION 03</span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  <strong className="text-white font-bold">Technical capability</strong> — whether the action is even possible.
                </p>
              </div>
              <div className="bg-[#11242C] rounded-xl border border-gray-800 p-4 space-y-1">
                <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider block">DIMENSION 04</span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  <strong className="text-white font-bold">Authorization</strong> — whether anyone is permitted to take it.
                </p>
              </div>
            </div>

            {/* Desktop Authority Grid Table (hidden on mobile) */}
            <div className="hidden sm:block bg-[#0E202B] rounded-2xl border border-gray-800 overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <tbody className="divide-y divide-gray-800/80 text-xs sm:text-sm">
                    {AUTHORITY_TIERS.map((tierItem, idx) => (
                      <tr key={idx} className="hover:bg-[#132836] transition-colors">
                        <td className={`py-4 px-6 font-mono font-bold w-1/4 ${tierItem.color}`}>
                          {tierItem.tier}
                        </td>
                        <td className="py-4 px-6 text-gray-300 w-5/12 leading-relaxed">
                          {tierItem.desc}
                        </td>
                        <td className="py-4 px-6 text-gray-300 w-1/3 border-l border-gray-800 leading-relaxed">
                          {tierItem.rule}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Authority Card Stack (hidden on desktop) */}
            <div className="block sm:hidden bg-[#0E202B] rounded-2xl border border-gray-800 overflow-hidden divide-y divide-gray-800/80 mb-6">
              {AUTHORITY_TIERS.map((tierItem, idx) => (
                <div key={idx} className="p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-1 h-4 rounded-full ${
                        idx === 0 ? "bg-cyan-400" :
                        idx === 1 ? "bg-amber-400" :
                        idx === 2 ? "bg-orange-400" :
                        idx === 3 ? "bg-emerald-400" :
                        idx === 4 ? "bg-purple-400" :
                        idx === 5 ? "bg-rose-400" : "bg-gray-400"
                      }`}
                    ></span>
                    <span className={`font-mono text-xs font-bold uppercase tracking-wider ${tierItem.color}`}>
                      {tierItem.tier}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {tierItem.desc}
                  </p>
                  <p className="text-xs text-gray-300 leading-relaxed pt-1">
                    {tierItem.rule}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Callout: Authority law */}
            <div className="bg-[#11242C] rounded-2xl border-l-4 border-[#C53B3B] border-t border-r border-b border-gray-800 p-6 space-y-2">
              <h3 className="text-base font-bold text-white">Authority law</h3>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                Technical access, severity, analyst confidence, an AI recommendation, executive urgency and customer silence do not equal approval. No self-approval, no privilege escalation, and no action tier assigned without authoritative policy.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: PREREQUISITES (#F4F3EF BACKGROUND) */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200/70">
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                PREREQUISITES
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
              A credential existing is not readiness.
            </h2>
            <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
              Incident-time failure usually starts with an access assumption nobody verified, or a log source nobody checked. Both are treated as governed records with a last-verified date.
            </p>
          </div>

          {/* 2-Column Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Card: Access and identity */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                    🔑
                  </div>
                  <h3 className="text-lg font-bold text-[#151B28]">
                    Access and identity
                  </h3>
                </div>

                <div className="divide-y divide-gray-100 text-xs sm:text-sm text-[#151B28]/80 font-sans">
                  <div className="py-2.5 flex items-start gap-3 first:pt-0">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Identity and scope</strong> — authorized role or service identity, with the assurance requirements set by security authority.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Access path</strong> — approved route, least privilege, and a revocable mechanism.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Break-glass</strong> — claimed only where an exact policy exists, with owner, trigger, audit and expiry.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Tool permissions</strong> — read, write and action scopes held separately from response authority.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Access test</strong> — last verified date and result. A passing test does not guarantee future availability.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Revocation</strong> — stale responders, vendors and emergency grants removed when roles change.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 text-[10px] font-mono text-gray-500 leading-relaxed">
                <strong className="text-gray-700 uppercase block text-[9px] tracking-wider mb-0.5">ACCESS PRINCIPLE</strong>
                <span>Readiness needs current authorization, tested routing, a named owner, an expiry — and a safe fallback for when the preferred path is unavailable.</span>
              </div>
            </div>

            {/* Right Card: Telemetry and evidence */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                    📊
                  </div>
                  <h3 className="text-lg font-bold text-[#151B28]">
                    Telemetry and evidence
                  </h3>
                </div>

                <div className="divide-y divide-gray-100 text-xs sm:text-sm text-[#151B28]/80 font-sans">
                  <div className="py-2.5 flex items-start gap-3 first:pt-0">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-gray-400 mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Source inventory</strong> — approved categories and owners. No universal coverage claim.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-gray-400 mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Freshness</strong> — observation and update time, with an explicit stale state.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-gray-400 mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Completeness</strong> — complete, partial, missing or unknown. No percentage without a denominator and method.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-gray-400 mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Time integrity</strong> — clock source and known drift. Timestamps are not assumed comparable.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-gray-400 mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Provider outage</strong> — unavailable or degraded sources are shown with their effect. Missing evidence is never fabricated.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-gray-400 mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Correction</strong> — supersession history retained. No silent overwrite of prior evidence.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 text-[10px] font-mono text-gray-500 leading-relaxed">
                <strong className="text-gray-700 uppercase block text-[9px] tracking-wider mb-0.5">EVIDENCE LAW</strong>
                <span>Preservation improves investigation and review. It does not prove root cause, attribution, legal sufficiency, containment or recovery success.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: PLAYBOOKS AND EXERCISES (#F4F3EF BACKGROUND) */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200/70">
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                PLAYBOOKS AND EXERCISES
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
              An exercise is a learning mechanism, not a badge.
            </h2>
            <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
              The strongest proof of readiness is traceable findings, owned actions and verified follow-through — not a completion count.
            </p>
          </div>

          {/* Top 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Card 1: Runbooks as live records */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                  📖
                </div>
                <h3 className="text-base font-bold text-[#151B28]">
                  Runbooks as live records
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  Stable ID, owner, state and effective date. Scenario, scope and exclusions. Prerequisites, ordered steps with real decision points, and the authority required before each protected step.
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100 text-[10px] font-mono text-gray-500 leading-relaxed">
                <strong className="text-gray-700 uppercase block text-[9px] tracking-wider mb-0.5">RUNBOOK LAW</strong>
                <span>A runbook is not executable authority. Scripts remain subject to current permissions, decision rights, scope and downstream checks.</span>
              </div>
            </div>

            {/* Card 2: Fallbacks and stop conditions */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                  🛑
                </div>
                <h3 className="text-base font-bold text-[#151B28]">
                  Fallbacks and stop conditions
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  Every procedure names a manual or alternate path for when a tool, provider or role is unavailable — and the conditions that require a pause, escalation or safe rollback rather than pressing on.
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100 text-[10px] font-mono text-gray-500 leading-relaxed">
                <strong className="text-gray-700 uppercase block text-[9px] tracking-wider mb-0.5">CHANGE CONTROL</strong>
                <span>Owner, reason, review, effective date and supersession recorded for every revision.</span>
              </div>
            </div>

            {/* Card 3: What an exercise records */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                  📋
                </div>
                <h3 className="text-base font-bold text-[#151B28]">
                  What an exercise records
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  Objective and synthetic scenario. Scope and explicit exclusions. Role categories and decision authority. Decisions with the evidence behind them, observations kept apart from facilitator interpretation, and stated limitations.
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100 text-[10px] font-mono text-gray-500 leading-relaxed">
                <strong className="text-gray-700 uppercase block text-[9px] tracking-wider mb-0.5">EXERCISE LAW</strong>
                <span>No "passed tabletop", maturity badge or exercise score without an approved method.</span>
              </div>
            </div>
          </div>

          {/* Bottom Card: From finding to closure */}
          <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-[#151B28]">
              From finding to closure
            </h3>
            <div className="divide-y divide-gray-100 text-xs sm:text-sm text-[#151B28]/80 font-sans">
              <div className="py-2.5 flex items-start gap-3 first:pt-0">
                <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                <span className="leading-relaxed">
                  <strong className="text-[#151B28] font-bold">Finding</strong> — observation, scope, evidence, source exercise or incident, owner and state.
                </span>
              </div>
              <div className="py-2.5 flex items-start gap-3">
                <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                <span className="leading-relaxed">
                  <strong className="text-[#151B28] font-bold">Gap</strong> — the missing, stale or untested dependency, described without inflated severity.
                </span>
              </div>
              <div className="py-2.5 flex items-start gap-3">
                <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                <span className="leading-relaxed">
                  <strong className="text-[#151B28] font-bold">Action</strong> — accountable owner, due date, dependency and the evidence required to close it.
                </span>
              </div>
              <div className="py-2.5 flex items-start gap-3">
                <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                <span className="leading-relaxed">
                  <strong className="text-[#151B28] font-bold">Blocked action</strong> — the dependency or authority preventing completion, plus the escalation path.
                </span>
              </div>
              <div className="py-2.5 flex items-start gap-3">
                <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                <span className="leading-relaxed">
                  <strong className="text-[#151B28] font-bold">Retest</strong> — method, scope, reviewer, result semantics and limitations.
                </span>
              </div>
              <div className="py-2.5 flex items-start gap-3">
                <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                <span className="leading-relaxed">
                  <strong className="text-[#151B28] font-bold">Overdue</strong> — stays visibly overdue. There is no silent deadline reset.
                </span>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-100 text-[10px] font-mono text-gray-500 leading-relaxed">
              <strong className="text-gray-700 uppercase block text-[9px] tracking-wider mb-0.5">FOLLOW-THROUGH PRINCIPLE</strong>
              <span>A resolved action is not proof that the whole domain is effective. Closure applies to the governed item and its scope only.</span>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: COMMUNICATIONS (DISTINCT WARM GREY-BEIGE #EFECE6 BACKGROUND) */}
        {/* ========================================================================= */}
        <section className="bg-[#EFECE6] py-14 sm:py-16 border-t border-gray-300/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  COMMUNICATIONS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
                Separate the audience, the channel, the facts and the approver.
              </h2>
              <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
                Urgency produces contradictory messages when those four things blur. Cadence promises publish only from approved policy — otherwise cadence is established at activation.
              </p>
            </div>

            {/* Matrix Table with Warm Grey Header */}
            <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-[#EBE7DF] text-[#151B28] text-[11px] font-mono font-bold uppercase tracking-wider border-b border-gray-300/70">
                      <th className="py-4 px-6 w-1/4">COMMUNICATION</th>
                      <th className="py-4 px-6 w-5/12">MINIMUM CONTENT</th>
                      <th className="py-4 px-6 w-1/3 border-l border-gray-300/70">CONTROL</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200/80 text-xs sm:text-sm">
                    {COMMS_DATA.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3.5 px-6 font-mono font-bold text-[#151B28]">
                          {item.type}
                        </td>
                        <td className="py-3.5 px-6 text-gray-600 leading-relaxed">
                          {item.content}
                        </td>
                        <td className="py-3.5 px-6 text-gray-600 border-l border-gray-200/80">
                          {item.control}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bottom 2 Cards Grid with Red Accent Borders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Card: Legal, privacy and regulatory */}
              <div className="bg-white rounded-2xl border border-[#C53B3B]/40 p-6 shadow-sm space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-[#151B28]">
                    Legal, privacy and regulatory
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    Readiness makes the coordination path explicit: facts and evidence routed to your designated counsel, privacy facts identified and preserved, notification decision owner tracked, and factual context prepared for a regulator when authorized.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 text-[10px] font-mono text-gray-500 leading-relaxed">
                  <strong className="text-gray-700 uppercase block text-[9px] tracking-wider mb-0.5">PROFESSIONAL BOUNDARY</strong>
                  <span>ZoikoShield is not your counsel and is not a notification authority. Legal applicability, obligations, privilege and formal statements stay with qualified, customer-authorized roles.</span>
                </div>
              </div>

              {/* Right Card: Crisis communications and PR */}
              <div className="bg-white rounded-2xl border border-[#C53B3B]/40 p-6 shadow-sm space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-[#151B28]">
                    Crisis communications and PR
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    Readiness can prepare holding-statement templates, review chains and approval routes. It does not create spokesperson authority, and it does not include a crisis-communications service.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 text-[10px] font-mono text-gray-500 leading-relaxed">
                  <strong className="text-gray-700 uppercase block text-[9px] tracking-wider mb-0.5">PR BOUNDARY</strong>
                  <span>"Crisis comms included", "we speak for you" and "we handle the media" are not claims made here. AI may draft under decision rights; it cannot publish or approve itself.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: RECOVERY (#F4F3EF BACKGROUND) */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200/70">
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                RECOVERY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
              Four states that are not the same state.
            </h2>
            <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
              The most common readiness error is treating a configured backup as a recovery capability. These four are tracked separately and never compressed into one green indicator.
            </p>
          </div>

          {/* 4 States Stepper Cards */}
          <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            <div className="p-5 space-y-2">
              <span className="text-[10px] font-mono font-bold text-gray-400 block uppercase tracking-wider">STATE 01</span>
              <h4 className="text-sm font-bold text-[#151B28]">Backup configured</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                An approved source exists, with a category, owner, scope and state. This is an input to recovery — nothing more.
              </p>
            </div>
            <div className="p-5 space-y-2">
              <span className="text-[10px] font-mono font-bold text-gray-400 block uppercase tracking-wider">STATE 02</span>
              <h4 className="text-sm font-bold text-[#151B28]">Restore attempted</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                A restore was run. Method, scope, environment, date and result are recorded, along with what the attempt did not cover.
              </p>
            </div>
            <div className="p-5 space-y-2">
              <span className="text-[10px] font-mono font-bold text-gray-400 block uppercase tracking-wider">STATE 03</span>
              <h4 className="text-sm font-bold text-[#151B28]">Restore validated</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Technical checks passed with evidence. An integrity check confirms what the restore defines — not that data is malware-free.
              </p>
            </div>
            <div className="p-5 space-y-2">
              <span className="text-[10px] font-mono font-bold text-gray-400 block uppercase tracking-wider">STATE 04</span>
              <h4 className="text-sm font-bold text-[#151B28]">Business accepted</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                An authorized business owner validated the service outcome. Technical success alone is not business recovery.
              </p>
            </div>
          </div>

          {/* Middle Callout Note */}
          <span className="font-mono text-xs text-[#E0533C] mb-8 block leading-relaxed">
            &mdash; One test does not prove all services. "Revertible" and "air-gapped" are claimed only with evidence; missing and stale states stay visible with a named action owner.
          </span>

          {/* Bottom 2 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Card: What a recovery plan must name */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                    ▶
                  </div>
                  <h3 className="text-lg font-bold text-[#151B28]">
                    What a recovery plan must name
                  </h3>
                </div>

                <div className="divide-y divide-gray-100 text-xs sm:text-sm text-[#151B28]/80 font-sans">
                  <div className="py-2.5 flex items-start gap-3 first:pt-0">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Dependencies</strong> — identity, network, cloud, data, keys, vendors, facilities, people and communications.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Sequence and prerequisites</strong>, the system owner for each step, alternatives, and stop conditions.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Data source</strong> — backup, snapshot, replica or origin, with authoritative integrity and age content.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Authorization</strong> — who approves a restore, rebuild or failover, and under what conditions.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Service priority</strong> — set by your governance. Criticality is never inferred by us.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Residual issues</strong> — open risks, exceptions and monitoring that outlive the incident.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Recovery law */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#151B28]">
                  Recovery law
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans font-medium">
                  "Recover" does not mean guaranteed restoration, zero data loss, zero downtime, ransomware-proof backup, a clean restore, or a fixed RTO and RPO.
                </p>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  Exact recovery objectives, responsibilities and test evidence are authority-gated and vary by environment and contract. A business continuity plan does not guarantee service continuity, and instant failover is not claimed unless the current architecture supports it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 10: ADJACENT ROUTES (DISTINCT WARM GREY-BEIGE #EFECE6 BACKGROUND) */}
        {/* ========================================================================= */}
        <section className="bg-[#EFECE6] py-14 sm:py-16 border-t border-gray-300/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  ADJACENT ROUTES
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
                What this solution is — and which service you'd actually contract.
              </h2>
              <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
                This page explains the problem and the operating approach. It is not a service entitlement, and it does not include any of the services below.
              </p>
            </div>

            {/* Matrix Table with Warm Grey Header */}
            <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-[#EBE7DF] text-[#151B28] text-[11px] font-mono font-bold uppercase tracking-wider border-b border-gray-300/70">
                      <th className="py-4 px-6 w-1/4">DIMENSION</th>
                      <th className="py-4 px-6 w-5/12">STANDALONE INCIDENT READINESS</th>
                      <th className="py-4 px-6 w-1/3 border-l border-gray-300/70">SEPARATE SERVICE AUTHORITY</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200/80 text-xs sm:text-sm">
                    {ADJACENT_ROUTES.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3.5 px-6 font-mono font-bold text-[#151B28]">
                          {item.dim}
                        </td>
                        <td className="py-3.5 px-6 text-gray-600 leading-relaxed">
                          {item.standalone}
                        </td>
                        <td className="py-3.5 px-6 text-[#151B28] font-bold border-l border-gray-200/80">
                          {item.separate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Monospace Footnote */}
            <p className="font-mono text-[11px] text-gray-600 mb-6 leading-relaxed">
              <strong className="text-gray-800">Non-bundle law.</strong> Consider a retainer when you need an agreed preparedness-and-activation relationship. It is not included with this solution, Managed Defense, the platform, or any readiness exercise.
            </p>

            {/* 4 White Pill Navigation Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/incident-readiness"
                className="px-5 py-2.5 rounded-full bg-white hover:bg-gray-50 text-[#151B28] font-bold text-xs border border-gray-300 shadow-sm transition-all"
              >
                Incident Readiness
              </Link>
              <Link
                href="/services"
                className="px-5 py-2.5 rounded-full bg-white hover:bg-gray-50 text-[#151B28] font-bold text-xs border border-gray-300 shadow-sm transition-all"
              >
                IR Retainer
              </Link>
              <Link
                href="/services"
                className="px-5 py-2.5 rounded-full bg-white hover:bg-gray-50 text-[#151B28] font-bold text-xs border border-gray-300 shadow-sm transition-all"
              >
                Managed Defense
              </Link>
              <Link
                href="/services"
                className="px-5 py-2.5 rounded-full bg-white hover:bg-gray-50 text-[#151B28] font-bold text-xs border border-gray-300 shadow-sm transition-all"
              >
                Governed Response
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 11: DEPENDENCIES YOU DON'T CONTROL (#0B1B26 DARK NAVY BACKGROUND) */}
        {/* ========================================================================= */}
        <section className="bg-[#0B1B26] text-white py-14 sm:py-16 my-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  DEPENDENCIES YOU DON'T CONTROL
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                A documented contact is not a guaranteed outcome.
              </h2>
              <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
                Many incidents turn on parties outside your direct control. Readiness makes those dependencies explicit rather than implying anyone can command them.
              </p>
            </div>

            {/* 6 Diligence Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: Cloud and SaaS providers */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-[#182E38] flex items-center justify-center text-gray-300 font-mono text-xs font-bold border border-gray-700">
                    ☁️
                  </div>
                  <h3 className="text-base font-bold text-white">
                    Cloud and SaaS providers
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">
                    Support route, entitlement, account identity, evidence availability, escalation path and the current status source. Provider states can be degraded, partial or unknown.
                  </p>
                </div>
              </div>

              {/* Card 2: Insurers and brokers */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-[#182E38] flex items-center justify-center text-gray-300 font-mono text-xs font-bold border border-gray-700">
                    🛡️
                  </div>
                  <h3 className="text-base font-bold text-white">
                    Insurers and brokers
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">
                    Your designated route. Claim and consent obligations sit with external authority, and insurer acceptance is never implied.
                  </p>
                </div>
              </div>

              {/* Card 3: External counsel */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-[#182E38] flex items-center justify-center text-gray-300 font-mono text-xs font-bold border border-gray-700">
                    ⚖️
                  </div>
                  <h3 className="text-base font-bold text-white">
                    External counsel
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">
                    Customer-designated. Privilege and legal advice remain counsel authority. Law enforcement contact is your decision — there is no automatic reporting.
                  </p>
                </div>
              </div>

              {/* Card 4: Forensic specialists */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-[#182E38] flex items-center justify-center text-gray-300 font-mono text-xs font-bold border border-gray-700">
                    🔍
                  </div>
                  <h3 className="text-base font-bold text-white">
                    Forensic specialists
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">
                    A separate entitlement with its own scope, expertise and availability authority.
                  </p>
                </div>
              </div>

              {/* Card 5: MSSP or MDR incumbents */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-[#182E38] flex items-center justify-center text-gray-300 font-mono text-xs font-bold border border-gray-700">
                    📄
                  </div>
                  <h3 className="text-base font-bold text-white">
                    MSSP or MDR incumbents
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">
                    Role boundary, ownership, escalation, evidence handling and response authority stated so there is no ambiguity mid-incident.
                  </p>
                </div>
              </div>

              {/* Card 6: Provider outage */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-[#182E38] flex items-center justify-center text-gray-300 font-mono text-xs font-bold border border-gray-700">
                    📋
                  </div>
                  <h3 className="text-base font-bold text-white">
                    Provider outage
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">
                    The alternative path, the last verified state and the effect on readiness — recorded before you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 12: GETTING TO THE RIGHT PLACE (#F4F3EF BACKGROUND) */}
        {/* ========================================================================= */}
        <section id="routing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200/70">
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                GETTING TO THE RIGHT PLACE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
              Urgent routing outranks sales conversion.
            </h2>
            <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
              If the incident route is degraded, the page shows the approved fallback and System Status. It is never replaced with a demo form.
            </p>
          </div>

          {/* Routing Matrix Container */}
          <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden divide-y divide-gray-100 text-xs sm:text-sm">
            {/* Row 1: Active or suspected incident (RED ACCENT) */}
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-l-4 border-[#C53B3B] bg-rose-50/20">
              <div className="font-bold text-[#151B28] sm:w-1/3">
                Active or suspected incident
              </div>
              <div className="text-gray-600 sm:w-1/2">
                Approved activation route first. Minimum safe facts, verified identity, secure channel.
              </div>
              <div className="sm:w-1/5 text-left sm:text-right">
                <a href="#routing" className="text-[#E0533C] font-mono text-xs font-bold hover:underline">
                  Get Support &rarr;
                </a>
              </div>
            </div>

            {/* Row 2: Building a readiness program */}
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="font-bold text-[#151B28] sm:w-1/3">
                Building a readiness program
              </div>
              <div className="text-gray-600 sm:w-1/2">
                Share declared readiness needs — nothing confidential.
              </div>
              <div className="sm:w-1/5 text-left sm:text-right">
                <button onClick={() => setIsDemoModalOpen(true)} className="text-[#E0533C] font-mono text-xs font-bold hover:underline">
                  Book a Demo &rarr;
                </button>
              </div>
            </div>

            {/* Row 3: Existing customer readiness question */}
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="font-bold text-[#151B28] sm:w-1/3">
                Existing customer readiness question
              </div>
              <div className="text-gray-600 sm:w-1/2">
                Authenticated support and account route, with your context preserved.
              </div>
              <div className="sm:w-1/5 text-left sm:text-right">
                <a href="#routing" className="text-[#E0533C] font-mono text-xs font-bold hover:underline">
                  Contact Support &rarr;
                </a>
              </div>
            </div>

            {/* Row 4: Interested in an annual retainer */}
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="font-bold text-[#151B28] sm:w-1/3">
                Interested in an annual retainer
              </div>
              <div className="text-gray-600 sm:w-1/2">
                A separate commercial service path, qualified when delivery-ready.
              </div>
              <div className="sm:w-1/5 text-left sm:text-right">
                <Link href="/services" className="text-[#E0533C] font-mono text-xs font-bold hover:underline">
                  IR Retainer &rarr;
                </Link>
              </div>
            </div>

            {/* Row 5: Platform outage */}
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="font-bold text-[#151B28] sm:w-1/3">
                Platform outage
              </div>
              <div className="text-gray-600 sm:w-1/2">
                This page does not invent live service health.
              </div>
              <div className="sm:w-1/5 text-left sm:text-right">
                <a href="#routing" className="text-[#E0533C] font-mono text-xs font-bold hover:underline">
                  System Status &rarr;
                </a>
              </div>
            </div>

            {/* Row 6: Vulnerability in a ZoikoShield product */}
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="font-bold text-[#151B28] sm:w-1/3">
                Vulnerability in a ZoikoShield product
              </div>
              <div className="text-gray-600 sm:w-1/2">
                Coordinated disclosure, kept separate from the customer incident flow.
              </div>
              <div className="sm:w-1/5 text-left sm:text-right">
                <a href="#routing" className="text-[#E0533C] font-mono text-xs font-bold hover:underline">
                  Vulnerability disclosure &rarr;
                </a>
              </div>
            </div>

            {/* Row 7: Privacy concern */}
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="font-bold text-[#151B28] sm:w-1/3">
                Privacy concern
              </div>
              <div className="text-gray-600 sm:w-1/2">
                Purpose-specific handling through the privacy and trust route.
              </div>
              <div className="sm:w-1/5 text-left sm:text-right">
                <a href="#routing" className="text-[#E0533C] font-mono text-xs font-bold hover:underline">
                  Privacy & Trust &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 13: DIRECT ANSWERS (FAQ ACCORDION IN #EFECE6 WARM BEIGE) */}
        {/* ========================================================================= */}
        <section className="bg-[#EFECE6] py-14 sm:py-16 border-t border-gray-300/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  DIRECT ANSWERS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
                The questions worth asking before you buy anything.
              </h2>
            </div>

            {/* FAQ Accordion Container */}
            <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm divide-y divide-gray-200/80 mb-8">
              {INCIDENT_FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="transition-colors">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="font-bold text-[#151B28] text-sm sm:text-base leading-snug">
                        {faq.q}
                      </span>
                      <span className="text-[#E0533C] font-mono text-lg font-bold shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed font-sans border-t border-gray-100/60 pt-3">
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
        {/* SECTION 14: GET STARTED (SCOPE CTA BANNER WITH EXACT GRADIENT BACKGROUND) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#071829] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3D2131] via-[#161B29]/70 to-[#071829] text-white py-16 sm:py-24 border-t border-gray-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                GET STARTED
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
              Find the gaps while it's still a conversation.
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We'll walk the six domains against your environment, name what's missing or stale, and be explicit about which parts need a separate service and which stay your decision.
            </p>

            {/* Action Buttons Stack */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto w-full pt-4">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3 sm:py-3.5 bg-[#E0533C] hover:bg-[#c94530] text-white font-bold text-sm rounded-lg transition-all shadow-md text-center"
              >
                Book a Demo
              </button>
              <a
                href="#operating-model"
                className="w-full sm:w-auto px-6 py-3 sm:py-3.5 bg-[#16202A] hover:bg-[#1E2B38] text-white font-semibold text-sm rounded-lg border border-gray-700 transition-all shadow-sm text-center"
              >
                Explore Incident Readiness
              </a>
              <Link
                href="/about"
                className="w-full sm:w-auto px-6 py-3 sm:py-3.5 bg-[#16202A] hover:bg-[#1E2B38] text-white font-semibold text-sm rounded-lg border border-gray-700 transition-all shadow-sm text-center"
              >
                Visit Trust Center
              </Link>
            </div>

            {/* Mobile Warning Box: Before you fill in a form (Mobile only) */}
            <div className="block sm:hidden border-2 border-dashed border-gray-700 rounded-xl p-4 bg-[#11202D]/60 text-xs text-gray-300 space-y-1 text-left mt-6 max-w-md mx-auto">
              <p className="leading-relaxed">
                <strong className="text-white font-bold">Before you fill in a form:</strong> do not submit active incident details, indicators, credentials, evidence, or confidential architecture through a demo request. If something is happening now, use <a href="#routing" className="text-white underline font-semibold">Get Support</a> instead.
              </p>
            </div>

            {/* Mobile Monospace Footer Note (Mobile only) */}
            <p className="block sm:hidden font-mono text-[10px] text-gray-400 leading-relaxed text-center pt-4 max-w-md mx-auto">
              Readiness scope, tools, integrations, services, responders, regions, recovery objectives and professional-service relationships vary by approved environment and contract.
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

