"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { Navbar } from "@/components/layout/Navbar";
// import { Footer } from "@/components/layout/Footer";
import { DemoModal } from "@/components/ui/DemoModal";

// Interactive Advisory Fit Options
const FIT_OPTIONS = [
  {
    id: "program",
    label: "Establish a program",
    fits: true,
    result:
      "Strategy, governance, ownership and roadmap discovery — establishing what the program is, who owns each part, and how decisions get made and recorded.",
  },
  {
    id: "board",
    label: "Board reporting",
    fits: true,
    result:
      "Evidence-linked summaries and decision preparation for executives and the Board, with your named approver and review chain.",
  },
  {
    id: "policies",
    label: "Policies & controls",
    fits: true,
    result:
      "Governance model, policy review, framework mappings and remediation ownership — structure the advisor can facilitate and record.",
  },
  {
    id: "architecture",
    label: "Architecture & vendors",
    fits: true,
    result:
      "Security requirements, tradeoff analysis, design and vendor review — with decision criteria and evidence-linked records.",
  },
  {
    id: "incident-readiness",
    label: "Incident readiness",
    fits: true,
    result:
      "Plans, exercises, authority models and communication preparation — readiness governance, not IR operations.",
  },
  {
    id: "run-detection",
    label: "Run detection",
    fits: false,
    result:
      "If the gap is ongoing control evidence rather than structure, Continuous Assurance is the better fit for this one.",
  },
  {
    id: "independent-testing",
    label: "Independent testing",
    fits: false,
    result:
      "Scoped, authorized testing and retest is a separate service. Advisory defines objectives and interprets findings — it does not test.",
  },
  {
    id: "active-incident",
    label: "Active incident emergency",
    fits: false,
    result:
      "Active security incidents outrank sales and advisory intake. Use the Incident Activation route immediately.",
  },
];

// Decision Rights Matrix Data
const DECISION_RIGHTS = [
  {
    class: "Recommendation",
    advisorRole: "Analyzes options, evidence, tradeoffs and next steps.",
    yourAuthority: "Authorized leader decides whether to act.",
  },
  {
    class: "Policy proposal",
    advisorRole: "Drafts or reviews language and implications.",
    yourAuthority: "Policy owner approves and publishes.",
  },
  {
    class: "Risk treatment",
    advisorRole: "Facilitates options and supporting evidence.",
    yourAuthority: "Risk owner accepts, mitigates, transfers or avoids.",
  },
  {
    class: "Architecture",
    advisorRole: "Reviews controls and tradeoffs, records concerns.",
    yourAuthority: "Design authority approves implementation.",
  },
  {
    class: "Vendor selection",
    advisorRole: "Supports security diligence and remediation conditions.",
    yourAuthority: "Procurement or business owner selects and contracts.",
  },
  {
    class: "Board materials",
    advisorRole: "Prepares evidence-linked briefing and questions.",
    yourAuthority: "Executives and Board own statements and decisions.",
  },
  {
    class: "Incident action",
    advisorRole: "Advises based on the readiness and authority model.",
    yourAuthority: "Incident authority or a separate service executes.",
  },
  {
    class: "Regulatory position",
    advisorRole: "Identifies the issue for qualified review.",
    yourAuthority: "Legal, compliance or an authorized officer determines it.",
  },
  {
    class: "Exception / waiver",
    advisorRole: "Assesses security impact and conditions.",
    yourAuthority: "Named exception or risk authority approves.",
  },
];

// Nine Workstreams Data
const WORKSTREAMS = [
  {
    num: "01",
    title: "Strategy & roadmap",
    desc: "Objectives, priorities, sequencing, owners and a decision record you can replay later.",
    boundary: "No promise that every initiative will be executed.",
  },
  {
    num: "02",
    title: "Risk governance",
    desc: "Risk taxonomy, review rhythm, treatment and exception facilitation.",
    boundary: "Customer-authorized roles accept or transfer risk.",
  },
  {
    num: "03",
    title: "Policy & controls",
    desc: "Governance model, policy review, framework mappings and remediation ownership.",
    boundary: "No compliance or certification guarantee.",
  },
  {
    num: "04",
    title: "Architecture",
    desc: "Security requirements, tradeoff analysis, design and vendor review.",
    boundary: "Engineering implementation remains assigned to your teams.",
  },
  {
    num: "05",
    title: "Third parties",
    desc: "Due-diligence criteria, risk review and decision support for procurement.",
    boundary: "No legal or vendor warranty.",
  },
  {
    num: "06",
    title: "Executive reporting",
    desc: "Evidence-linked summaries and decision preparation for executives and the Board.",
    boundary: "No fiduciary or materiality decision.",
  },
  {
    num: "07",
    title: "Incident readiness",
    desc: "Plans, exercises, authority models and communication preparation.",
    boundary: "No 24/7 or SOC coverage.",
  },
  {
    num: "08",
    title: "Team enablement",
    desc: "Roles, operating rhythms, coaching and auditor coordination.",
    boundary: "No HR or management decision.",
  },
  {
    num: "09",
    title: "Assurance support",
    desc: "Evidence gaps, remediation governance and auditor coordination.",
    boundary: "No independent audit opinion.",
  },
];

// Process Loop Steps
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Prepare",
    desc: "Pre-read, evidence bundle and agenda circulated before the session.",
  },
  {
    step: "02",
    title: "Advise",
    desc: "Options, tradeoffs and limitations laid out against current evidence.",
  },
  {
    step: "03",
    title: "Decide",
    desc: "Your authorized decider records the outcome and its effective date.",
  },
  {
    step: "04",
    title: "Assign",
    desc: "Actions get an accountable owner, due date, dependency and priority.",
  },
  {
    step: "05",
    title: "Evidence",
    desc: "Decisions and artifacts are versioned — not left in a slide deck or a chat thread.",
  },
  {
    step: "06",
    title: "Review",
    desc: "Open decisions, overdue actions and accepted exceptions are revisited.",
  },
  {
    step: "07",
    title: "Adjust",
    desc: "Scope fit, consumption and outcomes assessed at the term review.",
  },
];

// Related Services Matrix
const RELATED_SERVICES = [
  {
    dimension: "primary job",
    vciso: "Security leadership, governance, decisions and program support.",
    adjacent: "Managed Defense — operates detection, investigation and response.",
  },
  {
    dimension: "evidence job",
    vciso: "Interprets and governs what evidence is needed.",
    adjacent: "Continuous Assurance — ongoing control and evidence assurance.",
  },
  {
    dimension: "incident job",
    vciso: "Prepares governance and advises on readiness.",
    adjacent: "IR Retainer — annual readiness plus activation service.",
  },
  {
    dimension: "assessment job",
    vciso: "Defines objectives and interprets findings.",
    adjacent: "Penetration Testing — scoped authorized testing and retest.",
  },
  {
    dimension: "authority",
    vciso: "Recommends and facilitates within the contract.",
    adjacent: "Operational and assessment rights follow each service contract.",
  },
  {
    dimension: "commercial",
    vciso: "Named advisory scope, cadence and time model.",
    adjacent: "Independent packages. No automatic inclusion.",
  },
];



// FAQ Accordion Data
const FAQS = [
  {
    q: "What is ZoikoShield vCISO & Advisory?",
    a: "A defined security-leadership advisory service covering agreed strategy, governance, risk, architecture, reporting and readiness workstreams — with named scope, a governance cadence and an hours or retainer model set by your engagement.",
  },
  {
    q: "Does the vCISO become our company CISO?",
    a: "No. The advisor acts as a specialized external consultant and facilitator. They provide expertise, policy proposals, framework alignment, and decision preparation, but your company retains officer status, signatory authority, and ultimate decision ownership.",
  },
  {
    q: "What does the advisor actually decide?",
    a: "The advisor analyzes options, prepares evidence-linked recommendations, and structures decision criteria. All binding choices — accepting risk, approving policies, contracting vendors, or submitting regulatory reports — remain strictly with your designated company leaders.",
  },
  {
    q: "How often do we meet?",
    a: "Meeting frequency, session lengths, and attendance rhythms are explicitly set by your approved proposal or order form. Common cadences range from weekly strategic syncs to monthly executive reviews and quarterly Board preparations.",
  },
  {
    q: "How many hours are included, and do unused hours roll over?",
    a: "Included units, consumption definitions (meetings, async analysis, deliverable preparation), minimum billing increments, and rollover or expiry terms are defined in your specific commercial agreement. There are no silent resets or hidden automatic overages.",
  },
  {
    q: "Is the advisor available 24/7?",
    a: "Standard advisory is delivered during scheduled engagement windows. Continuous 24/7 availability, incident response SLAs, or emergency dispatch are not included in standard advisory unless explicitly authorized under a dedicated active service retainer.",
  },
  {
    q: "Can the advisor guarantee compliance or audit success?",
    a: "No. Advisory helps structure policies, align with frameworks (such as SOC 2, ISO 27001, HIPAA), and prepare evidence. However, final compliance certification depends entirely on your operational execution and independent third-party auditor evaluations.",
  },
  {
    q: "Can the advisor perform incident response or penetration testing?",
    a: "Advisory covers readiness planning, table-top exercise design, and authority model structure. Hands-on incident containment, SOC triage, or authorized penetration testing are handled by our separate, specialized Managed Defense and Pen Testing services.",
  },
  {
    q: "Can the advisor present to our Board?",
    a: "Yes. When scoped in your engagement, the advisor can prepare evidence-linked briefings, slide decks, and risk summaries, and co-present alongside your internal leadership during Board or Audit Committee meetings.",
  },
  {
    q: "How is our confidential data handled?",
    a: "All engagement interactions, documents, and risk registers are governed by strict contractual confidentiality agreements, encrypted communication channels, and secure data handling procedures detailed in our Trust Center.",
  },
  {
    q: "What happens if our named advisor changes?",
    a: "If a named advisor becomes unavailable or requires substitution, we follow strict continuity procedures: advance notification, qualification equivalence verification, customer approval rights, and full transfer of your versioned decision and action registers.",
  },
];

export default function VCISOAdvisoryPage() {
  const [selectedFit, setSelectedFit] = useState("program");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const activeFit = FIT_OPTIONS.find((f) => f.id === selectedFit) ?? FIT_OPTIONS[0];
  if (!activeFit) return null;

  return (
    <div className="min-h-screen bg-[#F4F3EF] text-[#111827] font-sans antialiased">
      {/* <Navbar /> */}

      <main className="pt-24 sm:pt-28 pb-0 overflow-x-hidden">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO & EXECUTIVE CONTROL ROOM */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-14">
          {/* Mobile-only Breadcrumbs */}
          <div className="flex sm:hidden items-center gap-1.5 text-xs font-mono text-gray-500 mb-4">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gray-800 font-semibold">vCISO & Advisory</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  VCISO & ADVISORY
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#151B28] tracking-tight leading-[1.12]">
                Add structured security leadership <span className="text-[#E0533C]">without giving up decision ownership.</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-[#151B28]/75 max-w-xl leading-relaxed">
                Work with a defined advisory service to shape security strategy, governance, risk decisions, architecture reviews, executive reporting and readiness — with named scope, cadence, evidence and clear customer authority.
              </p>

              {/* Mobile-only Metadata Pill Badges */}
              <div className="flex sm:hidden flex-wrap items-center gap-2 pt-1 pb-1">
                <span className="inline-block text-[11px] font-mono font-bold text-[#854D0E] bg-[#FEF9C3] border border-[#FDE047] px-3 py-1 rounded-full">
                  ● SERVICE STATE: CONDITIONAL
                </span>
                <span className="inline-block text-[11px] font-mono font-bold text-gray-700 bg-[#EFECE6] border border-dashed border-gray-300 px-3 py-1 rounded-full">
                  ● ADVISOR: ROLE-BASED
                </span>
                <span className="inline-block text-[11px] font-mono font-bold text-gray-700 bg-[#EFECE6] border border-gray-300 px-3 py-1 rounded-full">
                  ● CADENCE: PER ENGAGEMENT
                </span>
                <span className="inline-block text-[11px] font-mono font-bold text-gray-700 bg-[#EFECE6] border border-gray-300 px-3 py-1 rounded-full">
                  ● WCAG 2.2 AA
                </span>
              </div>

              {/* Action Buttons: Vertical stack on mobile, horizontal row on desktop */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="w-full sm:w-auto px-6 py-3 bg-[#E0533C] hover:bg-[#c94530] text-white font-bold text-sm rounded-lg transition-all shadow-md text-center"
                >
                  Book a Demo
                </button>
                <a
                  href="#scope"
                  className="w-full sm:w-auto px-5 py-3 bg-[#EFECE6] hover:bg-gray-200 text-[#151B28] font-semibold text-sm rounded-lg border border-gray-300/80 transition-all shadow-sm text-center"
                >
                  Review Advisory Scope
                </a>
                <a
                  href="#trust"
                  className="w-full sm:w-auto px-5 py-3 bg-[#EFECE6] hover:bg-gray-200 text-[#151B28] font-semibold text-sm rounded-lg border border-gray-300/80 transition-all shadow-sm text-center"
                >
                  Visit Trust Center
                </a>
              </div>

              {/* Mobile-only Footnote Note */}
              <p className="block sm:hidden text-xs text-gray-600 leading-relaxed font-sans pt-2">
                Already a customer? Use the{" "}
                <a href="#routing" className="underline font-medium hover:text-gray-900">
                  account and support routes
                </a>{" "}
                below — not this form. Active incident? Go straight to the{" "}
                <a href="#routing" className="underline font-medium hover:text-gray-900">
                  incident activation route
                </a>
                .
              </p>
            </div>

            {/* Right Column: 3D Executive Control Room Image (Desktop only) */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-black">
                <Image
                  src="/images/va1.png"
                  alt="vCISO Executive Security Control Room 3D Illustration"
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
        {/* SECTION 2: ROLE BOUNDARY ("What the service does" vs "What it does not do") */}
        {/* ========================================================================= */}
        <section id="scope" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200/70">
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                ROLE BOUNDARY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151B28]">
              Security leadership support — not a borrowed executive title.
            </h2>
            <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
              The service is valuable because it creates structured leadership support with visible decision ownership and evidence. It does not substitute for accountable internal governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Card: What the service does (Green accent) */}
            <div className="bg-white rounded-2xl border-t-4 border-[#10B981] sm:border-2 sm:border-emerald-600/40 border-x border-b border-gray-200 p-6 sm:p-7 shadow-sm space-y-4">
              <div>
                <h3 className="text-lg font-bold text-[#151B28]">
                  What the service does
                </h3>
                <span className="text-xs font-mono text-gray-500 mt-0.5 block">
                  Within an agreed, contracted scope.
                </span>
              </div>

              <div className="divide-y divide-gray-100 text-xs sm:text-sm text-[#151B28]/80">
                <div className="py-3 flex items-start gap-3 first:pt-0">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                  <span className="leading-relaxed">
                    Provides <strong className="text-[#151B28] font-bold">structured security-leadership advice</strong> against a named scope.
                  </span>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                  <span className="leading-relaxed">
                    Facilitates <strong className="text-[#151B28] font-bold">evidence-linked priorities</strong>, roadmap and decisions.
                  </span>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                  <span className="leading-relaxed">
                    Defines <strong className="text-[#151B28] font-bold">cadence, owners, exceptions</strong> and follow-through.
                  </span>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                  <span className="leading-relaxed">
                    Prepares <strong className="text-[#151B28] font-bold">evidence-linked executive and Board materials</strong>.
                  </span>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                  <span className="leading-relaxed">
                    Supports <strong className="text-[#151B28] font-bold">control and evidence readiness</strong> and remediation governance.
                  </span>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                  <span className="leading-relaxed">
                    States a <strong className="text-[#151B28] font-bold">verified meeting and communication model</strong>.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Card: What it does not do (Red accent) */}
            <div className="bg-white rounded-2xl border-t-4 border-[#C53B3B] sm:border-2 sm:border-[#C53B3B]/60 border-x border-b border-gray-200 p-6 sm:p-7 shadow-sm space-y-4">
              <div>
                <h3 className="text-lg font-bold text-[#151B28]">
                  What it does not do
                </h3>
                <span className="text-xs font-mono text-gray-500 mt-0.5 block">
                  Regardless of how the engagement is packaged.
                </span>
              </div>

              <div className="divide-y divide-gray-100 text-xs sm:text-sm text-[#151B28]/80">
                <div className="py-3 flex items-start gap-3 first:pt-0">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-[#C53B3B] text-[#C53B3B] font-mono text-[9px] font-bold flex items-center justify-center mt-0.5 shrink-0">
                    o
                  </span>
                  <span className="leading-relaxed">
                    Become your CISO, Officer, statutory or delegated appointment is a <strong className="text-[#151B28] font-bold">separate legal process</strong>.
                  </span>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-[#C53B3B] text-[#C53B3B] font-mono text-[9px] font-bold flex items-center justify-center mt-0.5 shrink-0">
                    o
                  </span>
                  <span className="leading-relaxed">
                    Hold unilateral <strong className="text-[#151B28] font-bold">policy or risk-acceptance authority</strong>.
                  </span>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-[#C53B3B] text-[#C53B3B] font-mono text-[9px] font-bold flex items-center justify-center mt-0.5 shrink-0">
                    o
                  </span>
                  <span className="leading-relaxed">
                    Determine <strong className="text-[#151B28] font-bold">materiality</strong> or speak for the Board.
                  </span>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-[#C53B3B] text-[#C53B3B] font-mono text-[9px] font-bold flex items-center justify-center mt-0.5 shrink-0">
                    o
                  </span>
                  <span className="leading-relaxed">
                    Issue <strong className="text-[#151B28] font-bold">certification, audit opinion</strong> or regulator acceptance.
                  </span>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-[#C53B3B] text-[#C53B3B] font-mono text-[9px] font-bold flex items-center justify-center mt-0.5 shrink-0">
                    o
                  </span>
                  <span className="leading-relaxed">
                    Provide <strong className="text-[#151B28] font-bold">legal advice</strong> or determine a regulatory position.
                  </span>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-[#C53B3B] text-[#C53B3B] font-mono text-[9px] font-bold flex items-center justify-center mt-0.5 shrink-0">
                    o
                  </span>
                  <span className="leading-relaxed">
                    Operate detection and response, or perform <strong className="text-[#151B28] font-bold">independent testing</strong>, unless separately contracted.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Callout: No outcome guarantee */}
          <div className="mt-8 bg-white rounded-xl border-l-4 border-[#C53B3B] border-t border-r border-b border-gray-200 p-6 shadow-sm space-y-1">
            <h4 className="text-sm font-bold text-[#151B28]">
              No outcome guarantee
            </h4>
            <p className="text-xs sm:text-sm text-[#151B28]/70 leading-relaxed">
              Advisory can improve clarity, governance and follow-through. It does not guarantee prevention, compliance, certification, regulator acceptance, audit results, business continuity, insurance coverage or the absence of incidents.
            </p>
          </div>

          {/* Contract Manifest Card: "What is fixed, and what your engagement sets" (Mobile only) */}
          <div className="block sm:hidden mt-8 bg-white rounded-2xl border-t-4 border-[#0B1B26] border-x border-b border-gray-200 p-6 sm:p-7 shadow-sm space-y-4">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-gray-500 uppercase tracking-wider">
              <span>ADVISORY</span>
              <span>ZS-WEB-SVC-ADVISORY-024</span>
            </div>

            <div className="space-y-1 border-b border-gray-100 pb-4">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#151B28]">
                What is fixed, and what your engagement sets
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Role boundaries are fixed by the service doctrine. Everything commercial or scheduling-related comes from your approved proposal — never from this page.
              </p>
            </div>

            {/* 8 Dotted Key-Value Pairs */}
            <div className="divide-y divide-dashed divide-gray-200 text-xs font-sans">
              <div className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 first:pt-0">
                <span className="font-bold text-[#151B28]">Role</span>
                <span className="font-mono text-gray-600">Advisory — not an appointment</span>
              </div>
              <div className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-bold text-[#151B28]">Decision authority</span>
                <span className="font-mono text-gray-600">Customer retains</span>
              </div>
              <div className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-bold text-[#151B28]">Scope</span>
                <span className="font-mono text-gray-600">Per engagement</span>
              </div>
              <div className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-bold text-[#151B28]">Cadence</span>
                <span className="font-mono text-gray-600">Per engagement</span>
              </div>
              <div className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-bold text-[#151B28]">Time model</span>
                <span className="font-mono text-gray-600">Per engagement</span>
              </div>
              <div className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-bold text-[#151B28]">Availability</span>
                <span className="font-mono text-gray-600">Per engagement</span>
              </div>
              <div className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-bold text-[#151B28]">Named advisor</span>
                <span className="font-mono text-gray-600">On approval</span>
              </div>
              <div className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-bold text-[#151B28]">Deliverables</span>
                <span className="font-mono text-gray-600">Per engagement</span>
              </div>
            </div>

            {/* Boundary callout inside card */}
            <div className="bg-[#EFECE6] p-4 rounded-xl space-y-1 text-xs text-gray-700 leading-relaxed mt-4">
              <strong className="font-bold text-[#151B28]">Boundary.</strong> Advisory support does not by itself appoint a statutory CISO or officer, provide legal advice, issue audit opinions, operate 24/7 response, or guarantee compliance or security outcomes.
            </div>
          </div>

          {/* Mobile-only Metadata Footer Box */}
          <div className="block sm:hidden mt-8 bg-[#EFECE6] p-5 border-t border-b border-gray-300/60 font-mono text-[11px] text-gray-600 space-y-2 uppercase tracking-wider">
            <div className="flex items-center justify-between">
              <div><span className="text-gray-400">ROUTE</span> <span className="font-bold text-gray-800">/SERVICES/ADVISORY</span></div>
              <div><span className="text-gray-400">FAMILY</span> <span className="font-bold text-gray-800">SERVICES</span></div>
            </div>
            <div><span className="text-gray-400">STATE</span> <span className="font-bold text-gray-800">CONDITIONAL</span></div>
            <div><span className="text-gray-400">NEXT</span> <span className="font-bold text-gray-800">PENETRATION TESTING</span></div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: DECISION RIGHTS MATRIX TABLE (DISTINCT WARM GREY-BEIGE #EFECE6) */}
        {/* ========================================================================= */}
        <section className="bg-[#EFECE6] py-14 sm:py-16 border-t border-gray-300/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  DECISION RIGHTS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151B28]">
                The authority line, drawn decision by decision.
              </h2>
              <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
                The advisor analyzes, drafts, facilitates and records. Every consequential decision stays with a named, authorized person on your side unless a separate verified delegation says otherwise.
              </p>
            </div>

            {/* Desktop Table View (hidden on mobile) */}
            <div className="hidden sm:block bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden mb-4">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-[#0B1B26] text-white text-[11px] font-mono font-bold uppercase tracking-wider">
                      <th className="py-4 px-6 w-1/4">DECISION CLASS</th>
                      <th className="py-4 px-6 w-5/12">ADVISOR ROLE</th>
                      <th className="py-4 px-6 w-1/3 border-l border-gray-800">YOUR AUTHORITY</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                    {DECISION_RIGHTS.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3.5 px-6 font-mono font-bold text-[#151B28]">
                          {item.class}
                        </td>
                        <td className="py-3.5 px-6 text-gray-600 leading-relaxed">
                          {item.advisorRole}
                        </td>
                        <td className="py-3.5 px-6 font-bold text-[#151B28] border-l border-gray-100">
                          {item.yourAuthority}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Card Stack View (hidden on desktop) */}
            <div className="block sm:hidden bg-white rounded-2xl border border-gray-300 shadow-sm overflow-hidden divide-y divide-gray-200 mb-4">
              {DECISION_RIGHTS.map((item, idx) => (
                <div key={idx} className="p-4 space-y-2">
                  <div className="font-mono text-xs font-bold text-gray-800 uppercase tracking-wider">
                    {item.class}
                  </div>
                  <div className="font-mono text-xs text-gray-500 leading-relaxed">
                    <span className="font-bold text-gray-400">ADVISOR ROLE — </span>
                    {item.advisorRole}
                  </div>
                  <div className="bg-rose-50/40 border-l-4 border-[#C53B3B] p-3 text-xs font-bold text-[#151B28] rounded-r-md">
                    {item.yourAuthority}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[10px] sm:text-xs text-gray-500 font-mono leading-relaxed">
              — No service card, advisor profile or deliverable may imply the advisor can bind you, accept risk, sign regulatory statements, direct employees or exercise power.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: ADVISORY FIT INTERACTIVE SELECTOR (LIGHT OFF-WHITE #F4F3EF) */}
        {/* ========================================================================= */}
        <section className="bg-[#F4F3EF] py-14 sm:py-16 border-t border-gray-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  ADVISORY FIT
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151B28]">
                Tell us the need. We'll say plainly whether this is the right path.
              </h2>
              <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
                This selector explains relevance from what you declare. It does not score your maturity, infer urgency, preselect a package or record a security profile.
              </p>
            </div>

            {/* Desktop View (hidden on mobile) */}
            <div className="hidden sm:block space-y-8">
              {/* 3D Illustration Graphic */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-black">
                <Image
                  src="/images/va2.png"
                  alt="Advisory Fit 3D Decision Flow Graphic"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover max-h-[460px] rounded-2xl"
                />
              </div>

              {/* Interactive Component Container */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap gap-2.5">
                  {FIT_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedFit(opt.id)}
                      className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition-all border ${
                        selectedFit === opt.id
                          ? "bg-[#E0533C] text-white border-[#E0533C] shadow-sm"
                          : "bg-[#EFECE6] hover:bg-gray-200 text-[#151B28] border-gray-200"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                {/* Dynamic Result Box */}
                <div className="bg-[#F5F2EB] rounded-xl border border-gray-200 p-5 sm:p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider">
                      FIT ASSESSMENT
                    </span>
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full ${
                        activeFit.fits
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : "bg-amber-100 text-amber-800 border border-amber-300"
                      }`}
                    >
                      {activeFit.fits ? "MATCHES ADVISORY SCOPE" : "ALTERNATIVE SERVICE BETTER FIT"}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#151B28] leading-relaxed font-semibold">
                    {activeFit.result}
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile View (hidden on desktop) */}
            <div className="block sm:hidden space-y-4">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                {/* 8 Stacked Selector Buttons */}
                <div className="divide-y divide-gray-200/80 bg-[#EFECE6]/40">
                  {FIT_OPTIONS.map((opt) => {
                    const isSelected = selectedFit === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => setSelectedFit(opt.id)}
                        className={`w-full text-left p-4 text-xs font-semibold transition-all flex items-center justify-between ${
                          isSelected
                            ? "bg-white text-[#151B28] font-bold border-l-4 border-l-[#E0533C]"
                            : "bg-[#EFECE6]/50 text-gray-600 hover:bg-[#EFECE6]"
                        }`}
                      >
                        <span>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Dynamic Fit Result Box */}
                <div className="p-5 space-y-4 bg-white border-t border-gray-200">
                  <h3 className="text-sm font-extrabold text-[#151B28]">
                    {activeFit.fits ? "Advisory fits this directly." : "Alternative service is a better fit."}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {activeFit.result}
                  </p>

                  {/* ALSO CONSIDER Box */}
                  <div className="bg-[#EFECE6] rounded-xl p-4 space-y-1 border border-gray-300/60 font-sans text-xs">
                    <span className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-wider block">
                      ALSO CONSIDER
                    </span>
                    <p className="text-gray-600">
                      If the gap is ongoing control evidence rather than structure:
                    </p>
                    <Link
                      href="/services"
                      className="text-[#E0533C] font-mono text-xs font-bold hover:underline inline-block pt-1"
                    >
                      Continuous Assurance &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Footnote */}
              <p className="text-xs text-gray-500 leading-relaxed pt-2">
                Related services are independent packages. None is a prerequisite, bundled default, free inclusion or maturity tier for another.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: SCOPE CATALOG (NINE WORKSTREAMS 3x3 GRID) */}
        {/* ========================================================================= */}
        <section className="bg-[#F4F3EF] py-14 sm:py-16 border-t border-gray-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  SCOPE CATALOG
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151B28]">
                Nine workstreams, each with a stated edge.
              </h2>
              <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
                Exclusions are shown here, before qualification — and again near commercial conversion. There is no "full CISO function" package.
              </p>
            </div>

            {/* 3x3 Grid of Workstream Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WORKSTREAMS.map((item) => (
                <div
                  key={item.num}
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <span className="inline-block text-xs font-mono font-bold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md border border-gray-200">
                      {item.num}
                    </span>
                    <h3 className="text-base font-bold text-[#151B28]">{item.title}</h3>
                    <p className="text-xs text-[#151B28]/70 leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 text-[11px] font-mono text-gray-500">
                    <span className="font-bold text-gray-400 block uppercase text-[10px] tracking-wider">BOUNDARY</span>
                    <span>{item.boundary}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: HOW THE ENGAGEMENT WORKS (DISTINCT WARM GREY-BEIGE #EFECE6) */}
        {/* ========================================================================= */}
        <section className="bg-[#EFECE6] py-14 sm:py-16 border-t border-gray-300/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  HOW THE ENGAGEMENT WORKS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151B28]">
                A repeating loop, not a series of meetings.
              </h2>
              <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
                The cycle below is how advisory operates. How often it runs, who attends and how long each session lasts come from your approved service package — a website layout cannot create a frequency entitlement.
              </p>
            </div>

            {/* 7-Column Divided Stepper Card */}
            <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {PROCESS_STEPS.map((ps) => (
                <div key={ps.step} className="p-4 space-y-2">
                  <span className="text-xs font-mono font-bold text-gray-400 block">{ps.step}</span>
                  <h4 className="text-sm font-bold text-[#151B28]">{ps.title}</h4>
                  <p className="text-[11px] text-[#151B28]/70 leading-snug">{ps.desc}</p>
                </div>
              ))}
            </div>

            {/* Two Bottom Cards: Meeting Types & What You Keep */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Card: Meeting types the model supports */}
              <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4">
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold">
                    📅
                  </div>
                  <h3 className="text-base font-bold text-[#151B28]">
                    Meeting types the model supports
                  </h3>
                </div>

                <div className="divide-y divide-gray-100 text-xs sm:text-sm text-[#151B28]/80">
                  <div className="py-2.5 flex items-start gap-3 first:pt-0">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Standing advisory review</strong> — agenda owner, pre-read, decision types, minutes.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Executive or Board preparation</strong> — reporting period, source evidence, review chain, your approver.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Risk review</strong> — risk population, change threshold, owners, exceptions.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Architecture or vendor review</strong> — trigger, material, decision criteria.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Incident-readiness review</strong> — contacts, plans, exercise status, escalation authority.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Ad-hoc session</strong> — how it's requested, what qualifies, and how time is consumed.
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Card: What you keep afterwards */}
              <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold">
                      📁
                    </div>
                    <h3 className="text-base font-bold text-[#151B28]">
                      What you keep afterwards
                    </h3>
                  </div>

                  <div className="divide-y divide-gray-100 text-xs sm:text-sm text-[#151B28]/80">
                    <div className="py-2 flex items-start gap-3 first:pt-0">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-[#151B28] font-bold">Advisory brief</strong> — question, evidence, assumptions, options, recommendation, limitations.
                      </span>
                    </div>
                    <div className="py-2 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-[#151B28] font-bold">Decision register</strong> — options, rationale, authority, approver, conditions, supersession.
                      </span>
                    </div>
                    <div className="py-2 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-[#151B28] font-bold">Action register</strong> — owner, due date, dependency, evidence, status, escalation.
                      </span>
                    </div>
                    <div className="py-2 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-[#151B28] font-bold">Meeting record</strong> — participants, decisions, actions and evidence links.
                      </span>
                    </div>
                    <div className="py-2 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-[#151B28] font-bold">Consumption record</strong> — period, units used, remaining, corrections and disputes.
                      </span>
                    </div>
                    <div className="py-2 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-[#151B28] font-bold">Offboarding package</strong> — current artifacts, open risks, access revocation, transition status.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 text-[10px] font-mono text-gray-500 space-y-1">
                  <span className="font-bold text-gray-400 block uppercase tracking-wider">EVIDENCE PRINCIPLE</span>
                  <p className="leading-relaxed">
                    Advisory value stays inspectable after the meeting. Evidence items keep a visible state — there is no silent reset.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: HOURS AND RETAINER MODEL (DARK OBSIDIAN NAVY #0B1B26) */}
        {/* ========================================================================= */}
        <section className="bg-[#0B1B26] text-white py-14 sm:py-16 my-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  HOURS AND RETAINER MODEL
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                A balance of hours is not an availability guarantee.
              </h2>
              <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
                Here is every field that must be defined before a time model is published. The values are commercial terms and come from your proposal or order form — this page creates none of them.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Commercial terms list with red square bullets */}
              <div className="lg:col-span-7 divide-y divide-gray-800/80 text-xs sm:text-sm text-gray-300 font-sans">
                <div className="py-3 flex items-start gap-3 first:pt-0">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                  <span className="leading-relaxed">
                    <strong className="text-white font-semibold">Unit</strong> — hour, half-day, day, session or another exact unit.
                  </span>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                  <span className="leading-relaxed">
                    <strong className="text-white font-semibold">Included amount</strong> — quantity and period. Never implied by card size or plan name.
                  </span>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                  <span className="leading-relaxed">
                    <strong className="text-white font-semibold">Consumption</strong> — what counts: meetings, preparation, analysis, deliverable production, async review, specialist time.
                  </span>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                  <span className="leading-relaxed">
                    <strong className="text-white font-semibold">Minimum increment</strong> — rounding, billing increment and time-zone basis.
                  </span>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                  <span className="leading-relaxed">
                    <strong className="text-white font-semibold">Scheduling</strong> — request channel, lead time, availability window and confirmation state.
                  </span>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                  <span className="leading-relaxed">
                    <strong className="text-white font-semibold">Rollover or expiry</strong> — whether unused units carry, cap, convert or lapse.
                  </span>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                  <span className="leading-relaxed">
                    <strong className="text-white font-semibold">Overage</strong> — approval, rate source, caps and alerts. No automatic surprise charges.
                  </span>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                  <span className="leading-relaxed">
                    <strong className="text-white font-semibold">Visibility</strong> — you can inspect committed, used, remaining, disputed and corrected units.
                  </span>
                </div>
              </div>

              {/* Right Column: Desktop 3D Image vs Mobile Consumption Structure Box */}
              <div className="lg:col-span-5 space-y-6">
                {/* Desktop 3D Image (hidden on mobile) */}
                <div className="hidden lg:block relative rounded-2xl overflow-hidden border border-gray-700/80 shadow-xl bg-black">
                  <Image
                    src="/images/va3.png"
                    alt="Schedule and Hours 3D Graphic"
                    width={480}
                    height={320}
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>

                {/* Mobile Consumption View Structure Box (hidden on desktop) */}
                <div className="block lg:hidden bg-[#11242C] rounded-2xl border border-gray-800 p-5 space-y-4">
                  <div className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    CONSUMPTION VIEW — STRUCTURE ONLY
                  </div>
                  <div className="w-full h-10 border-2 border-dashed border-gray-700/80 rounded-lg flex items-center justify-center text-xs text-gray-500 font-mono">
                  </div>
                  <div className="flex flex-wrap items-center gap-3.5 text-[11px] font-mono text-gray-300">
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#C53B3B]"></span>Used</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500"></span>Committed</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>Remaining</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-gray-400"></span>Disputed</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">
                    Unfilled by design. Quantities appear in your engagement portal and on your order form, never as a website default.
                  </p>
                </div>

                {/* Blocked Language Card (Both Desktop and Mobile) */}
                <div className="bg-[#11242C] rounded-2xl border-l-4 border-[#C53B3B] border-t border-r border-b border-gray-800 p-5 sm:p-6 space-y-2">
                  <h3 className="text-base font-bold text-white">Blocked language</h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">
                    "Access to a vCISO", "on demand", "always available" and "24/7 CISO" are not used unless scheduling, coverage, response expectations and capacity rules are explicitly authorized for your engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: NAMED ADVISOR MODEL */}
        {/* ========================================================================= */}
        <section className="bg-[#F4F3EF] py-14 sm:py-16 border-t border-gray-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  NAMED ADVISOR MODEL
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151B28]">
                A person is named when a person is verified.
              </h2>
              <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
                Until a profile is approved for public display, the service is described by role. There is no badge wall standing in for service outcomes.
              </p>
            </div>

            {/* Combined Card Container */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Role Card */}
              <div className="lg:col-span-4 bg-[#EFECE6] p-7 flex flex-col justify-between space-y-6 border-b lg:border-b-0 lg:border-r border-gray-200">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-lg border-2 border-dashed border-gray-400 flex items-center justify-center text-[9px] font-mono font-bold text-gray-500 bg-white">
                    NOT NAMED
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-[#151B28]">Security Advisor</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Role-based service card. A display name, legal relationship and credentials appear only when each is current, verified and approved for publication.
                    </p>
                  </div>
                </div>

                <div>
                  <span className="inline-block text-[10px] font-mono font-bold text-gray-600 bg-white px-3 py-1 rounded-full border border-gray-300">
                    ● PROFILE: PENDING APPROVAL
                  </span>
                </div>
              </div>

              {/* Right Column: Continuity, substitution and conflicts */}
              <div className="lg:col-span-8 p-7 space-y-5">
                <h3 className="text-base font-bold text-[#151B28] border-b border-gray-100 pb-3">
                  Continuity, substitution and conflicts
                </h3>

                <div className="divide-y divide-gray-100 text-xs sm:text-sm text-[#151B28]/80">
                  <div className="py-2.5 flex items-start gap-3 first:pt-0">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Substitution</strong> — eligibility and equivalence criteria, plus disclosure and your approval rights, are defined before the engagement depends on one person.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Planned absence</strong> — notification, handoff, open decisions and coverage effect stated in advance.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Unexpected absence</strong> — fallback contact, service state and rescheduling rule.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Specialists</strong> — named category, approval path, and whether their time consumes your units.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Region and language</strong> — published only when verified. An office location is not service coverage.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Conflicts</strong> — relevant conflicts are disclosed and managed through engagement governance, with an ethical escalation path.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#10B981] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Knowledge continuity</strong> — the decision log, roadmap, evidence and action register reduce dependence on any individual.
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 text-[10px] font-mono text-gray-500 leading-relaxed">
                  <strong className="text-gray-700 uppercase block text-[9px] tracking-wider mb-0.5">ROLE BOUNDARY</strong>
                  <span>The term "vCISO" cannot by itself establish officer status, fiduciary duty, employment, regulated function, signatory authority or personal liability allocation.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: FOUR INDEPENDENT PATHS (RELATED SERVICES MATRIX) */}
        {/* ========================================================================= */}
        <section className="bg-[#F4F3EF] py-14 sm:py-16 border-t border-gray-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  RELATED SERVICES
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151B28]">
                Four independent paths. No bundle, no prerequisite, no tier.
              </h2>
              <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
                Advisory sits alongside these services. It is never a mandatory step toward them, and none of them is automatically included here.
              </p>
            </div>

            {/* Matrix Table with Cream Header */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-[#EFECE6] text-[#151B28] text-[11px] font-mono font-bold uppercase tracking-wider border-b border-gray-200">
                      <th className="py-4 px-6 w-1/4">DIMENSION</th>
                      <th className="py-4 px-6 w-5/12">VCISO & ADVISORY</th>
                      <th className="py-4 px-6 w-1/3 border-l border-gray-200/80">ADJACENT SERVICE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                    {RELATED_SERVICES.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3.5 px-6 font-mono font-bold text-[#151B28]">
                          {row.dimension}
                        </td>
                        <td className="py-3.5 px-6 text-gray-600 leading-relaxed">
                          {row.vciso}
                        </td>
                        <td className="py-3.5 px-6 text-[#151B28] border-l border-gray-100">
                          {row.adjacent}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4 Pill Navigation Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services/advisory"
                className="px-4 py-2.5 bg-[#EFECE6] hover:bg-gray-200 text-[#151B28] text-xs font-semibold rounded-lg border border-gray-200 transition-colors shadow-sm"
              >
                Compare starting paths
              </Link>
              <Link
                href="/services"
                className="px-4 py-2.5 bg-[#EFECE6] hover:bg-gray-200 text-[#151B28] text-xs font-semibold rounded-lg border border-gray-200 transition-colors shadow-sm"
              >
                Managed Defense
              </Link>
              <Link
                href="/services"
                className="px-4 py-2.5 bg-[#EFECE6] hover:bg-gray-200 text-[#151B28] text-xs font-semibold rounded-lg border border-gray-200 transition-colors shadow-sm"
              >
                Continuous Assurance
              </Link>
              <Link
                href="/services"
                className="px-4 py-2.5 bg-[#EFECE6] hover:bg-gray-200 text-[#151B28] text-xs font-semibold rounded-lg border border-gray-200 transition-colors shadow-sm"
              >
                IR Retainer
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 10: TRUST AND PROCUREMENT (DARK OBSIDIAN NAVY #0B1B26) */}
        {/* ========================================================================= */}
        <section id="trust" className="bg-[#0B1B26] text-white py-14 sm:py-16 my-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  TRUST AND PROCUREMENT
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                What diligence teams can ask for.
              </h2>
              <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
                Evidence for procurement is versioned and owned. Nothing here creates a commitment that the proposal or order form does not already carry.
              </p>
            </div>

            {/* 6 Diligence Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 space-y-3 shadow-sm hover:border-gray-700 transition-all">
                <div className="w-8 h-8 rounded-lg bg-gray-800/80 flex items-center justify-center text-gray-300 font-mono text-xs font-bold">
                  §
                </div>
                <h3 className="text-base font-bold text-white">Service and scope</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Public versioned service description with a named owner and state, plus scope and exclusion detail in the proposal.
                </p>
              </div>

              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 space-y-3 shadow-sm hover:border-gray-700 transition-all">
                <div className="w-8 h-8 rounded-lg bg-gray-800/80 flex items-center justify-center text-gray-300 font-mono text-xs font-bold">
                  ◇
                </div>
                <h3 className="text-base font-bold text-white">Security and privacy</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Trust Center authority, engagement data handling, secure channels, and subprocessor disclosure from Legal and Privacy.
                </p>
              </div>

              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 space-y-3 shadow-sm hover:border-gray-700 transition-all">
                <div className="w-8 h-8 rounded-lg bg-gray-800/80 flex items-center justify-center text-gray-300 font-mono text-xs font-bold">
                  ⚖️
                </div>
                <h3 className="text-base font-bold text-white">Continuity and coverage</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Service continuity and substitution summary — published only where verified. Capacity is never marketed as unlimited.
                </p>
              </div>

              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 space-y-3 shadow-sm hover:border-gray-700 transition-all">
                <div className="w-8 h-8 rounded-lg bg-gray-800/80 flex items-center justify-center text-gray-300 font-mono text-xs font-bold">
                  📜
                </div>
                <h3 className="text-base font-bold text-white">Credentials</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Current, scoped and source-verified only. Credentials are not offered as proof of service outcomes.
                </p>
              </div>

              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 space-y-3 shadow-sm hover:border-gray-700 transition-all">
                <div className="w-8 h-8 rounded-lg bg-gray-800/80 flex items-center justify-center text-gray-300 font-mono text-xs font-bold">
                  📄
                </div>
                <h3 className="text-base font-bold text-white">Sample deliverables</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Synthetic or redacted and clearly labelled as illustrative. No real customer material.
                </p>
              </div>

              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 space-y-3 shadow-sm hover:border-gray-700 transition-all">
                <div className="w-8 h-8 rounded-lg bg-gray-800/80 flex items-center justify-center text-gray-300 font-mono text-xs font-bold">
                  📋
                </div>
                <h3 className="text-base font-bold text-white">DPA and questionnaires</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Controlled procurement routes with a named version owner. References and case studies are permissioned and claim-reviewed.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#trust"
                className="px-5 py-2.5 bg-[#0B1B26]/90 hover:bg-[#11242C] text-white text-xs font-semibold rounded-lg border border-gray-700/80 hover:border-gray-500 transition-colors shadow-sm"
              >
                Visit Trust Center
              </a>
              <a
                href="#trust"
                className="px-5 py-2.5 bg-[#0B1B26]/90 hover:bg-[#11242C] text-white text-xs font-semibold rounded-lg border border-gray-700/80 hover:border-gray-500 transition-colors shadow-sm"
              >
                Data processing agreement
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 11: GETTING TO THE RIGHT PLACE (ROUTING TABLE) */}
        {/* ========================================================================= */}
        <section id="routing" className="bg-[#F4F3EF] py-14 sm:py-16 border-t border-gray-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  GETTING TO THE RIGHT PLACE
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151B28]">
                Not every question belongs in a sales form.
              </h2>
              <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
                Existing-customer service problems and active incidents are never converted into a demo flow. If a route is unavailable, the page shows the approved fallback and status rather than redirecting quietly.
              </p>
            </div>

            {/* Routing Table Container */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden divide-y divide-gray-100 font-sans text-xs sm:text-sm">
              {/* Row 1: Active Security Incident */}
              <div className="p-4 sm:p-5 border-l-4 border-[#C53B3B] bg-rose-50/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="font-bold text-[#151B28] sm:w-1/3">
                  Active security incident
                </div>
                <div className="text-gray-600 sm:w-1/2">
                  Urgency outranks sales and advisory intake. Do not qualify through this page.
                </div>
                <div className="sm:w-1/5 text-left sm:text-right">
                  <a href="#routing" className="text-[#E0533C] font-mono text-xs font-bold hover:underline">
                    Incident activation &rarr;
                  </a>
                </div>
              </div>

              {/* Row 2: Evaluating advisory */}
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="font-bold text-[#151B28] sm:w-1/3">
                  Evaluating advisory
                </div>
                <div className="text-gray-600 sm:w-1/2">
                  Share declared needs — not confidential security detail — and we'll scope from there.
                </div>
                <div className="sm:w-1/5 text-left sm:text-right">
                  <button onClick={() => setIsDemoModalOpen(true)} className="text-[#E0533C] font-mono text-xs font-bold hover:underline">
                    Book a Demo &rarr;
                  </button>
                </div>
              </div>

              {/* Row 3: Question about a current engagement */}
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="font-bold text-[#151B28] sm:w-1/3">
                  Question about a current engagement
                </div>
                <div className="text-gray-600 sm:w-1/2">
                  Goes to your account team with context preserved. It is not treated as a new lead.
                </div>
                <div className="sm:w-1/5 text-left sm:text-right">
                  <a href="#routing" className="text-[#E0533C] font-mono text-xs font-bold hover:underline">
                    Contact account team &rarr;
                  </a>
                </div>
              </div>

              {/* Row 4: Scheduling or consumption */}
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="font-bold text-[#151B28] sm:w-1/3">
                  Scheduling or consumption
                </div>
                <div className="text-gray-600 sm:w-1/2">
                  Current authoritative units and engagement state live in the portal.
                </div>
                <div className="sm:w-1/5 text-left sm:text-right">
                  <a href="#routing" className="text-[#E0533C] font-mono text-xs font-bold hover:underline">
                    Engagement operations &rarr;
                  </a>
                </div>
              </div>

              {/* Row 5: Scope or contract change */}
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="font-bold text-[#151B28] sm:w-1/3">
                  Scope or contract change
                </div>
                <div className="text-gray-600 sm:w-1/2">
                  Handled as a change request. No advisor makes a commercial commitment alone.
                </div>
                <div className="sm:w-1/5 text-left sm:text-right">
                  <a href="#routing" className="text-[#E0533C] font-mono text-xs font-bold hover:underline">
                    Raise a change request &rarr;
                  </a>
                </div>
              </div>

              {/* Row 6: Vulnerability in a ZoikoShield product */}
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="font-bold text-[#151B28] sm:w-1/3">
                  Vulnerability in a ZoikoShield product
                </div>
                <div className="text-gray-600 sm:w-1/2">
                  Goes to coordinated disclosure — never to advisory sales.
                </div>
                <div className="sm:w-1/5 text-left sm:text-right">
                  <a href="#routing" className="text-[#E0533C] font-mono text-xs font-bold hover:underline">
                    Vulnerability disclosure &rarr;
                  </a>
                </div>
              </div>

              {/* Row 7: Product outage */}
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="font-bold text-[#151B28] sm:w-1/3">
                  Product outage
                </div>
                <div className="text-gray-600 sm:w-1/2">
                  This page does not invent live service status.
                </div>
                <div className="sm:w-1/5 text-left sm:text-right">
                  <a href="#routing" className="text-[#E0533C] font-mono text-xs font-bold hover:underline">
                    System Status &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 12: DIRECT ANSWERS (FAQ ACCORDION IN #EFECE6 WARM BEIGE) */}
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
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151B28]">
                The questions buyers ask before procurement does.
              </h2>
            </div>

            {/* FAQ Accordion */}
            <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm divide-y divide-gray-200/80 mb-8">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="transition-colors">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="text-sm sm:text-base font-bold text-[#151B28]">
                        {faq.q}
                      </span>
                      <span className="text-[#C53B3B] text-lg font-bold shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-[#151B28]/70 leading-relaxed border-t border-gray-100">
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
        {/* SECTION 13: SCOPE CTA BANNER (EXACT PLUM-NAVY GRADIENT #071829) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#071829] text-white py-20 sm:py-24 border-t border-gray-800">
          {/* Exact top center warm reddish-plum radial glow (#3D2131 to #161B29 to #071829) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3D2131] via-[#161B29]/70 to-[#071829] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                GET STARTED
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Scope it properly before you sign anything.
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Bring the need, not the confidential detail. We'll walk the scope, the cadence options, the time model and — just as carefully — what stays your decision.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="px-6 py-3 bg-[#E0533C] hover:bg-[#c94530] text-white font-bold text-sm rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Book a Demo
              </button>

              <a
                href="#scope"
                className="px-6 py-3 bg-[#0B1B26]/80 hover:bg-[#11242C] text-white font-semibold text-sm rounded-lg border border-gray-700 hover:border-gray-500 transition-all shadow-sm"
              >
                Review Advisory Scope
              </a>

              <Link
                href="/services/advisory"
                className="px-6 py-3 bg-[#0B1B26]/80 hover:bg-[#11242C] text-white font-semibold text-sm rounded-lg border border-gray-700 hover:border-gray-500 transition-all shadow-sm"
              >
                Compare starting paths
              </Link>
            </div>

            <p className="text-[11px] font-mono text-gray-400 pt-6 max-w-xl mx-auto leading-relaxed">
              Advisor identity, cadence, included hours, availability, deliverables, commercial terms and delegated authority vary by approved engagement.
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
