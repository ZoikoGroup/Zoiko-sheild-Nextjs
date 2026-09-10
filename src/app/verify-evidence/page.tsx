"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { Navbar } from "@/components/layout/Navbar";
// import { Footer } from "@/components/layout/Footer";
import { DemoModal } from "@/components/ui/DemoModal";
import {
  AlertTriangle
} from "lucide-react";

// Section 1: Readiness Gates for Mobile
const READINESS_GATES = [
  { name: "Product / route", state: "PASSED", isPassed: true },
  { name: "Method & version", state: "Awaiting authority", isPassed: false },
  { name: "Compatibility range", state: "Awaiting authority", isPassed: false },
  { name: "Untrusted-input security", state: "Awaiting authority", isPassed: false },
  { name: "Privacy & retention", state: "Awaiting authority", isPassed: false },
  { name: "Accessibility", state: "PASSED", isPassed: true },
  { name: "Documentation", state: "Awaiting authority", isPassed: false },
  { name: "Download / repository", state: "Awaiting authority", isPassed: false },
  { name: "Operations & rollback", state: "Awaiting authority", isPassed: false },
  { name: "Claims & independence", state: "Awaiting authority", isPassed: false },
];

// Section 1: 5 Visible Steps
const VISIBLE_STEPS = [
  {
    step: "01",
    title: "Select or provide input",
    desc: "Approved subject types, version and sensitivity warning shown before anything is accepted.",
    boundary: "Unsupported or restricted material is never accepted silently.",
  },
  {
    step: "02",
    title: "Identify compatibility",
    desc: "Detect or request the package version, then show the supported version matrix.",
    boundary: "An unknown version is not a mismatch.",
  },
  {
    step: "03",
    title: "Run the approved method",
    desc: "Method and version are named, processing mode is disclosed, then the check runs.",
    boundary: "No hidden second method. No silent upload.",
  },
  {
    step: "04",
    title: "Interpret the result",
    desc: "Result state, plain-language explanation, and matched or mismatched detail where the method supports it.",
    boundary: "No compliance conclusion carried by colour.",
  },
  {
    step: "05",
    title: "Inspect proof and limits",
    desc: "Non-claims, package identity, and routes to Docs, Trust Center, Evidence and support.",
    boundary: "No sales gate in front of proof.",
  },
];

// Section 3: Version Compatibility Matrix
const COMPATIBILITY_ROWS = [
  {
    state: "supported",
    does: "Runs the approved method and names the exact verifier release used.",
    neverImply: "—",
  },
  {
    state: "deprecated",
    does: "Warns that the version is near or past policy deprecation and routes to the current version.",
    neverImply: "That the result is unreliable.",
  },
  {
    state: "unsupported",
    does: "Explains that this verifier cannot interpret the version, and lists what it can.",
    neverImply: "Verification failure.",
    highlightImply: true,
  },
  {
    state: "future / unknown",
    does: "Held safely as unknown until the registry resolves it.",
    neverImply: "Mismatch or tampering.",
  },
  {
    state: "migration",
    does: "Offers a documented conversion path only where an approved tool exists.",
    neverImply: "That evidence was silently rewritten.",
  },
  {
    state: "canonical form",
    does: "States prominently when the check applies to canonicalised content rather than raw file bytes.",
    neverImply: "That raw bytes were compared.",
  },
];

// Section 6: Truth Boundary Inequalities
const TRUTH_INEQUALITIES = [
  {
    left: "Tamper-evident",
    symbol: "≠",
    right: "immutable",
    desc: "Tamper-evidence means changes are detectable under the approved method — not that the record cannot change.",
  },
  {
    left: "Tamper-evident",
    symbol: "≠",
    right: "blockchain",
    desc: "Only stated where that is explicitly and currently true of the implementation.",
  },
  {
    left: "Integrity match",
    symbol: "≠",
    right: "truth",
    desc: "The representation matched its expected reference. Whether the underlying fact is true is a separate question.",
  },
  {
    left: "Integrity match",
    symbol: "≠",
    right: "completeness",
    desc: "Nothing is established beyond the declared package scope and its stated exclusions.",
  },
  {
    left: "Integrity match",
    symbol: "≠",
    right: "chain of custody",
    desc: "Legal chain of custody and admissibility are determined elsewhere, not by this check.",
  },
  {
    left: "Verification",
    symbol: "≠",
    right: "compliance",
    desc: "No certification, regulator approval or guaranteed security outcome follows from a result.",
  },
];

// Section 9: FAQ Accordion Questions
const VERIFY_FAQS = [
  {
    q: "What does Verify evidence actually do?",
    a: "It checks a supported evidence item or package using the approved verifier method and version, then reports a scoped result: the method used, the input identity, the result state, a plain-language explanation, and what the result does not establish.",
  },
  {
    q: "Does a successful result mean the evidence is true?",
    a: "No. An integrity match proves that the presented representation matches the recorded hash or signature under the stated method. It does not certify that the underlying claim, business reality, or data content is factually accurate.",
  },
  {
    q: "Does verification prove compliance or certification?",
    a: "No. Verification confirms technical cryptographic or structural consistency within a specific package boundary. Compliance, regulatory acceptance, or audit certifications require separate, formal auditor evaluations.",
  },
  {
    q: "Is the verifier open source?",
    a: "The architecture plan includes open-source verifier CLI and library distributions. Current repository links and license disclosures remain marked as 'Awaiting authority' until published under our public release gate.",
  },
  {
    q: "Does my file upload to ZoikoShield?",
    a: "Processing modes (in-browser client-side, local executable, or server-side API) are explicitly disclosed above every input control. No bytes leave your environment unless the stated processing mode requires it.",
  },
  {
    q: "Can I run the verifier offline?",
    a: "When the local CLI or standalone WebAssembly package is published, verification can be executed entirely offline without network dependencies or third-party pings.",
  },
  {
    q: "What happens if my package version is unsupported?",
    a: "Unsupported package versions trigger an explicit 'Unsupported version' state. The system displays compatible versions and documented upgrade routes, rather than misreporting a generic verification failure.",
  },
];

export default function VerifyEvidencePage() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#151B28] font-sans antialiased selection:bg-[#C53B3B] selection:text-white">
      {/* <Navbar onOpenDemo={() => setDemoOpen(true)} /> */}


      <main className="pt-8 sm:pt-14 pb-0 overflow-x-hidden">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO & PUBLIC VERIFIER GATE */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Text Block */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  PLATFORM · EVIDENCE & ASSURANCE
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#151B28] tracking-tight leading-[1.12]">
                Check a package <br />
                against a defined <br />
                method — <span className="text-[#E0533C]">and see the limits.</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-[#151B28]/70 max-w-xl leading-relaxed">
                Verify evidence explains exactly what the public verifier checks, which versions it understands, where your artifact is processed, and what a result does <em>not</em> establish. The verifier control stays closed until every public-readiness gate passes.
              </p>

              {/* Status Badges Row (Mobile Stack) */}
              <div className="flex lg:hidden flex-wrap items-center gap-2 pt-1 font-mono text-[10px]">
                <span className="border border-amber-300 bg-amber-50 text-amber-800 font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  VERIFIER: GATED
                </span>
                <span className="border border-emerald-300 bg-emerald-50 text-emerald-800 font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  EVIDENCE LEDGER: ACTIVE
                </span>
                <span className="border border-gray-300 bg-white/90 text-gray-600 font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                  REPOSITORY: AWAITING AUTHORITY
                </span>
                <span className="border border-gray-300 bg-white/90 text-gray-600 font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                  WCAG 2.2 AA
                </span>
              </div>

              {/* Desktop CTAs */}
              <div className="hidden lg:block space-y-3 pt-2">
                <div className="flex flex-wrap items-center gap-3.5">
                  <a
                    href="#method"
                    className="bg-[#C53B3B] hover:bg-[#a82e2e] text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors text-center shadow-sm"
                  >
                    Read the method
                  </a>

                  <Link
                    href="/dashboard"
                    className="bg-white hover:bg-gray-100 text-[#151B28] border border-gray-200/80 px-6 py-3 rounded-lg font-medium text-sm transition-colors text-center shadow-sm"
                  >
                    Evidence ledger
                  </Link>
                </div>
              </div>

              {/* Mobile CTAs & Notes */}
              <div className="space-y-3 pt-2 lg:hidden">
                <button
                  disabled
                  className="w-full bg-gray-200/80 text-gray-500 font-semibold text-xs py-3 rounded-xl border border-gray-300 shadow-inner cursor-not-allowed text-center"
                >
                  Open verifier — not yet public
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href="#method"
                    className="flex-1 bg-white hover:bg-gray-50 text-[#151B28] border border-gray-300 py-3 rounded-xl text-xs font-semibold text-center shadow-sm"
                  >
                    Read the method
                  </a>
                  <Link
                    href="/dashboard"
                    className="flex-1 bg-white hover:bg-gray-50 text-[#151B28] border border-gray-300 py-3 rounded-xl text-xs font-semibold text-center shadow-sm"
                  >
                    Evidence ledger
                  </Link>
                </div>

                <p className="text-xs text-[#151B28]/60 leading-relaxed font-mono pt-1">
                  No sales gate. Evidence explanation, Trust Center and Docs stay open regardless of verifier state.
                </p>
              </div>
            </div>

            {/* Right Column: 3D Holographic Package Scanning Illustration (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-600/40 shadow-2xl bg-black">
                <Image
                  src="/images/ve1.png"
                  alt="Package Holographic Scanner"
                  width={560}
                  height={480}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>

            {/* Mobile Fallback: Readiness Gates Card & Mobile Metadata Footer Box */}
            <div className="lg:hidden col-span-1 space-y-6">
              <div className="bg-white rounded-2xl border-2 border-amber-600/50 p-5 sm:p-6 shadow-sm space-y-4">
                <div className="border-b border-gray-200 pb-3">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#151B28]/50 uppercase block">
                    FAIL-CLOSED · PUBLIC READINESS
                  </span>
                  <h3 className="text-base font-bold text-[#151B28] mt-1">
                    Why the verifier isn't live yet
                  </h3>
                  <p className="text-xs text-[#151B28]/60 mt-1 leading-relaxed">
                    Ten gates must each carry current, approved evidence before a public verifier CTA renders. Any unknown, stale or withdrawn fact keeps this section closed.
                  </p>
                </div>

                <div className="space-y-2.5 font-mono text-xs">
                  {READINESS_GATES.map((gate, idx) => (
                    <div key={idx} className="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0">
                      <span className="text-[#151B28]/80 font-medium">{gate.name}</span>
                      {gate.isPassed ? (
                        <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[10px]">
                          ● PASSED
                        </span>
                      ) : (
                        <span className="text-amber-700 font-medium bg-amber-50 px-2 py-0.5 rounded border border-amber-200 text-[10px]">
                          Awaiting authority
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Technical Metadata Footer Box (As in section1-mob.png) */}
              <div className="bg-[#EFECE6] p-4 rounded-xl border border-gray-200 text-[10px] font-mono text-gray-600 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">ROUTE</span>
                  <span className="font-bold text-gray-800">/PLATFORM/EVIDENCEVERIFIER</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">DOC</span>
                  <span className="font-bold text-gray-800">ZS-WEB-PLATFORM-VERIFY-EVIDENCE-008</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">PARENT</span>
                  <span className="font-bold text-gray-800">EVIDENCE LEDGER & VERIFICATION</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">RESOURCE</span>
                  <span className="font-bold text-gray-800">/RESOURCES/VERIFIER</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stepper Card: Five Visible Steps (Exactly matching section1-des.png) */}
          <div id="method" className="mt-16 pt-12 border-t border-gray-200/70">
            <div className="space-y-2 mb-8">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  THE TASK
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151B28]">
                Five visible steps — before any artifact is handled.
              </h2>
              <p className="text-xs sm:text-sm text-[#151B28]/70 max-w-2xl">
                Each step names the question it answers and the boundary it will not cross. A non-specialist should be able to follow the whole journey without running anything.
              </p>
            </div>

            {/* 5 Columns Table Card */}
            <div className="bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-gray-200/80">
                {VISIBLE_STEPS.map((item, idx) => (
                  <div
                    key={item.step}
                    className={`space-y-4 ${
                      idx === 0 ? "lg:pr-6 pb-6 lg:pb-0" : idx === 4 ? "lg:pl-6 pt-6 lg:pt-0" : "lg:px-6 py-6 lg:py-0"
                    }`}
                  >
                    <div>
                      <span className="inline-block text-xs font-mono font-bold text-gray-500 border-t-2 border-[#C53B3B] pt-1 mb-2">
                        {item.step}
                      </span>
                      <h4 className="text-sm font-bold text-[#151B28]">{item.title}</h4>
                      <p className="text-xs text-[#151B28]/70 leading-relaxed mt-2">{item.desc}</p>
                    </div>

                    <div className="pt-4 border-t border-dotted border-gray-200 space-y-1">
                      <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                        BOUNDARY
                      </span>
                      <span className="font-mono text-[11px] text-gray-500 leading-normal block">
                        {item.boundary}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: INPUT CONTRACT */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200/70">
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                INPUT CONTRACT
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151B28]">
              What can be verified — and what must never be submitted.
            </h2>
            <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl">
              Every external artifact is treated as untrusted. File names, archive contents, manifests, metadata and embedded fields are never used for path, code, identity or authorization decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Card: Subject and representation */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-6">
              {/* Icon Square */}
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                <span className="font-mono font-bold text-xs">📋</span>
              </div>

              <h3 className="text-lg font-bold text-[#151B28]">
                Subject and representation
              </h3>

              <div className="divide-y divide-gray-100 text-xs sm:text-sm">
                <div className="py-3.5 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#C53B3B] mt-0.5 shrink-0"></span>
                  <span className="text-[#151B28]/80 leading-relaxed">
                    <strong className="text-[#151B28] font-mono font-bold">subject_type</strong> — evidence item, package, manifest or another registry-approved object.
                  </span>
                </div>
                <div className="py-3.5 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#C53B3B] mt-0.5 shrink-0"></span>
                  <span className="text-[#151B28]/80 leading-relaxed">
                    <strong className="text-[#151B28] font-mono font-bold">subject_id / version</strong> — stable, public-safe identity where one exists.
                  </span>
                </div>
                <div className="py-3.5 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#C53B3B] mt-0.5 shrink-0"></span>
                  <span className="text-[#151B28]/80 leading-relaxed">
                    <strong className="text-[#151B28] font-mono font-bold">representation</strong> — the exact bytes, manifest or canonical form actually checked.
                  </span>
                </div>
                <div className="py-3.5 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#C53B3B] mt-0.5 shrink-0"></span>
                  <span className="text-[#151B28]/80 leading-relaxed">
                    <strong className="text-[#151B28] font-mono font-bold">declared scope</strong> — package scope and stated exclusions.
                  </span>
                </div>
                <div className="py-3.5 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#C53B3B] mt-0.5 shrink-0"></span>
                  <span className="text-[#151B28]/80 leading-relaxed">
                    <strong className="text-[#151B28] font-mono font-bold">expected verifier version</strong> — the compatibility requirement from the public registry.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Card: Do not submit (Red accent border) */}
            <div className="bg-white rounded-2xl border-2 border-[#C53B3B] p-6 sm:p-8 shadow-sm space-y-6">
              {/* Icon Square */}
              <div className="w-8 h-8 rounded-lg bg-amber-100/80 flex items-center justify-center text-amber-700">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
              </div>

              <h3 className="text-lg font-bold text-[#151B28]">
                Do not submit
              </h3>

              <div className="divide-y divide-gray-100 text-xs sm:text-sm">
                <div className="py-3.5 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-gray-300 mt-0.5 shrink-0"></span>
                  <span className="text-[#151B28]/80 leading-relaxed">
                    Secrets, credentials, keys or tokens of any kind.
                  </span>
                </div>
                <div className="py-3.5 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-gray-300 mt-0.5 shrink-0"></span>
                  <span className="text-[#151B28]/80 leading-relaxed">
                    Regulated or customer-identifying data outside your own handling policy.
                  </span>
                </div>
                <div className="py-3.5 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-gray-300 mt-0.5 shrink-0"></span>
                  <span className="text-[#151B28]/80 leading-relaxed">
                    Active content, executables or known attack material.
                  </span>
                </div>
                <div className="py-3.5 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-gray-300 mt-0.5 shrink-0"></span>
                  <span className="text-[#151B28]/80 leading-relaxed">
                    Anything whose sensitivity class you cannot confirm.
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#151B28]/60 pt-2 leading-relaxed">
                Size limits, accepted formats and input modes — upload, paste, drag-and-drop, URL fetch, CLI, API — are reserved fields. None is claimed as supported until the implementation registry says so.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: VERSION COMPATIBILITY */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200/70">
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                VERSION COMPATIBILITY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151B28]">
              Compatibility is a state of its own — not a generic error.
            </h2>
            <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl">
              A verifier that cannot read your package version has not found a problem with your evidence. The two are reported differently, always.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200/90 shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-[#EFECE6] border-b border-gray-200 text-[11px] font-mono font-bold text-gray-600 uppercase tracking-widest">
                  <th className="py-4 px-6 w-1/4">STATE</th>
                  <th className="py-4 px-6 w-5/12">WHAT THE PAGE DOES</th>
                  <th className="py-4 px-6 w-1/3">WHAT IT MUST NEVER IMPLY</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/80 text-xs sm:text-sm">
                {COMPATIBILITY_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/70 transition-colors">
                    <td className="py-4 px-6 font-mono font-bold text-[#151B28]">
                      {row.state}
                    </td>
                    <td className="py-4 px-6 text-[#151B28]/70 leading-relaxed font-sans">
                      {row.does}
                    </td>
                    <td className={`py-4 px-6 ${row.highlightImply ? "font-bold text-[#151B28]" : "text-[#151B28]/70"}`}>
                      {row.neverImply}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: WHERE VERIFICATION RUNS & WHAT IS KEPT (DARK NAVY SECTION) */}
        {/* ========================================================================= */}
        <section className="bg-[#0B1B26] text-white py-14 sm:py-16 my-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  BEFORE YOU HAND OVER ANYTHING
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Where verification runs, and what is kept.
              </h2>
              <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
                These facts appear above every input control — not in a policy page, and not after the fact. Until the architecture registry publishes them, they read as pending rather than reassuring.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Facts List with Red Square Bullets */}
              <div className="lg:col-span-7 divide-y divide-gray-800/60 text-xs sm:text-sm text-gray-300 font-sans">
                <div className="py-3.5 flex items-start gap-3 first:pt-0">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                  <span className="leading-relaxed">
                    <strong className="text-white font-semibold">Processing mode</strong> — local executable, in-browser, server-side, API or hybrid.
                  </span>
                </div>
                <div className="py-3.5 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                  <span className="leading-relaxed">
                    <strong className="text-white font-semibold">Artifact transfer</strong> — whether any bytes leave your device, and to where.
                  </span>
                </div>
                <div className="py-3.5 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                  <span className="leading-relaxed">
                    <strong className="text-white font-semibold">Temporary storage</strong> — whether copies are made, and what deletes them.
                  </span>
                </div>
                <div className="py-3.5 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                  <span className="leading-relaxed">
                    <strong className="text-white font-semibold">Retention</strong> — whether inputs or results are kept. No default is implied.
                  </span>
                </div>
                <div className="py-3.5 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                  <span className="leading-relaxed">
                    <strong className="text-white font-semibold">Logs and telemetry</strong> — event metadata only; never evidence contents or secrets.
                  </span>
                </div>
                <div className="py-3.5 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                  <span className="leading-relaxed">
                    <strong className="text-white font-semibold">Subprocessors and residency</strong> — from privacy authority alone. Office locations do not imply processing locations.
                  </span>
                </div>
              </div>

              {/* Right Column (Desktop Only): 3D Glassmorphic Cube Graphic */}
              <div className="hidden lg:flex lg:col-span-5 justify-center">
                <div className="relative rounded-2xl overflow-hidden border border-gray-700/80 shadow-2xl bg-black max-w-md">
                  <Image
                    src="/images/ve2.png"
                    alt="Where verification runs 3D graphic"
                    width={480}
                    height={320}
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Right Column (Mobile Only): YAML Code Manifest Box (As in section6-mob.png) */}
              <div className="lg:hidden col-span-1 bg-[#11242C] rounded-xl border border-gray-800 p-5 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-gray-800 pb-3 text-gray-400 text-[10px]">
                  <span>VERIFIER-MANIFEST.YAML</span>
                  <span>PUBLIC-SAFE · ILLUSTRATIVE</span>
                </div>
                <pre className="text-gray-300 leading-relaxed overflow-x-auto text-[11px] p-1 font-mono">
{`# values render only when the registry
# approves them
verifier_id: "public-evidence-verifier"
state: "gated"  # gated | active |
# suspended | retired
version: <pending>
supported_input_versions: [<pending>]
processing_mode: <pending>
method_id: <pending>
method_version: <pending>
repository_url: <pending>
license: <pending>
privacy_disclosure_version: <pending>
claim_set_version: <pending>`}
                </pre>
              </div>
            </div>

            {/* Lower Callout Box: Privacy First */}
            <div className="mt-8 bg-[#11242C] rounded-xl border-l-4 border-[#C53B3B] border-t border-r border-b border-gray-800 p-6 space-y-2">
              <h3 className="text-base font-bold text-white">Privacy first</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                The verifier is not described as "private", "zero retention", "local-only" or "never uploaded" unless each of those properties is current, technically verified and approved. Absence of a claim here is deliberate.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4.5: RUN VERIFICATION (CONTROL CLOSED BOX) */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200/70">
          <div className="text-center space-y-3 mb-8 sm:mb-10">
            <div className="flex items-center gap-2 justify-center">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                RUN VERIFICATION
              </span>
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151B28]">
              One real action — never three hypothetical ones.
            </h2>
            <p className="text-xs sm:text-sm text-[#151B28]/70 max-w-sm sm:max-w-xl mx-auto leading-relaxed">
              The primary control carries a single label determined by the shipped implementation: <strong>Verify</strong>, <strong>Open verifier</strong> or <strong>Download verifier</strong>. While the gate is closed, none of them appears as active.
            </p>
          </div>

          {/* Golden/Amber Border Control Box */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border-2 border-amber-600/50 p-6 sm:p-10 shadow-sm text-center space-y-5">
            <span className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase block">
              CONTROL CLOSED
            </span>
            <h3 className="text-base sm:text-xl font-bold text-[#151B28]">
              The public verifier is not available yet
            </h3>
            <p className="text-xs sm:text-sm text-[#151B28]/70 max-w-sm sm:max-w-xl mx-auto leading-relaxed">
              When the release gate passes, this panel becomes the verification surface: input control, disclosed processing mode, named method version and a live result. Until then it states its own status honestly rather than caching a friendly one.
            </p>

            {/* Desktop Horizontal Row (As in desktop reference image) */}
            <div className="hidden sm:flex items-center justify-center gap-3 pt-2">
              <a
                href="#method"
                className="bg-[#C53B3B] hover:bg-[#a82e2e] text-white px-5 py-2.5 rounded-lg text-xs font-semibold transition-colors shadow-sm"
              >
                Verify a package
              </a>
              <Link
                href="/dashboard"
                className="bg-white hover:bg-gray-50 text-[#151B28] border border-gray-300 px-5 py-2.5 rounded-lg text-xs font-semibold transition-colors shadow-sm"
              >
                See how evidence is produced
              </Link>
              <Link
                href="/about"
                className="bg-white hover:bg-gray-50 text-[#151B28] border border-gray-300 px-5 py-2.5 rounded-lg text-xs font-semibold transition-colors shadow-sm"
              >
                Trust Center
              </Link>
            </div>

            {/* Mobile Vertical Stack (As in mobile reference image) */}
            <div className="flex sm:hidden flex-col items-center justify-center gap-3 pt-2 max-w-xs mx-auto">
              <button
                disabled
                className="w-full bg-gray-200/80 text-gray-500 border border-gray-300/80 px-6 py-3 rounded-xl text-xs font-semibold cursor-not-allowed text-center shadow-inner"
              >
                Verify a package
              </button>
              <Link
                href="/dashboard"
                className="w-full bg-white hover:bg-gray-50 text-[#151B28] border border-gray-300 px-6 py-3 rounded-xl text-xs font-semibold text-center transition-colors shadow-sm"
              >
                See how evidence is produced
              </Link>
              <Link
                href="/about"
                className="w-full bg-white hover:bg-gray-50 text-[#151B28] border border-gray-300 px-6 py-3 rounded-xl text-xs font-semibold text-center transition-colors shadow-sm"
              >
                Trust Center
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: RESULT CONTRACT */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200/70">
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                RESULT CONTRACT
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151B28]">
              Every result names its method, its input and its edges.
            </h2>
            <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl">
              This is the shape of a completed verification. Fields marked pending are populated by the verifier at runtime — nothing here is a sample outcome.
            </p>
          </div>

          {/* 3D Pipeline Illustration (Desktop Only) */}
          <div className="hidden lg:block mb-10 rounded-2xl overflow-hidden border border-gray-200 shadow-md">
            <Image
              src="/images/verify-section5-pipeline.png"
              alt="Data verification pipeline 3D illustration"
              width={1200}
              height={500}
              className="w-full h-auto object-cover max-h-[480px]"
            />
          </div>

          {/* Result State Card (Mobile Only — As in section5-mob.png) */}
          <div className="lg:hidden bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-sm space-y-6 mb-10">
            {/* Top Header Box */}
            <div className="bg-[#EFECE6] p-4 rounded-xl border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#151B28]">
                <span className="w-5 h-5 rounded-md bg-gray-500 text-white text-[10px] flex items-center justify-center font-mono">?</span>
                <span>Result state — awaiting verifier</span>
              </div>
              <span className="inline-block text-[10px] font-mono font-bold text-gray-500 bg-white px-2.5 py-1 rounded-full border border-gray-200">
                NO RESULT CACHED
              </span>
            </div>

            {/* Method and input */}
            <div className="space-y-3 pt-1">
              <h4 className="text-sm font-bold text-[#151B28] border-b border-gray-100 pb-2">Method and input</h4>
              <div className="divide-y divide-gray-100 text-xs font-mono">
                <div className="py-2 flex items-center justify-between">
                  <span className="text-gray-500">method_id / version</span>
                  <span className="font-bold text-gray-900">pending</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-gray-500">verifier release</span>
                  <span className="font-bold text-gray-900">pending</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-gray-500">input identity</span>
                  <span className="font-bold text-gray-900">pending</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-gray-500">package version</span>
                  <span className="font-bold text-gray-900">pending</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-gray-500">representation checked</span>
                  <span className="font-bold text-gray-900">pending</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-gray-500">started / completed</span>
                  <span className="font-bold text-gray-900">pending</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-gray-500">trust-material status</span>
                  <span className="font-bold text-gray-900">pending</span>
                </div>
              </div>
            </div>

            {/* Interpretation */}
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-bold text-[#151B28] border-b border-gray-100 pb-2">Interpretation</h4>
              <div className="divide-y divide-gray-100 text-xs font-mono">
                <div className="py-2 flex items-center justify-between">
                  <span className="text-gray-500">matched elements</span>
                  <span className="font-bold text-gray-900">method-dependent</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-gray-500">mismatched elements</span>
                  <span className="font-bold text-gray-900">safe detail only</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-gray-500">unsupported / unverifiable</span>
                  <span className="font-bold text-gray-900">reported separately</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-gray-500">plain-language meaning</span>
                  <span className="font-bold text-gray-900">always present</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-gray-500">non-claims block</span>
                  <span className="font-bold text-gray-900">always present</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-gray-500">next proof route</span>
                  <span className="font-bold text-gray-900">Evidence · Docs · Trust</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-gray-500">support reference</span>
                  <span className="font-bold text-gray-900">on error only</span>
                </div>
              </div>
            </div>

            {/* Result law note */}
            <p className="text-xs text-gray-600 leading-relaxed pt-3 border-t border-gray-100 font-sans">
              <strong className="text-gray-900 font-semibold">Result law.</strong> A successful verification is not a green badge for "secure", "compliant", "certified", "audit-ready", "legally admissible" or "complete". It is a scoped method result with visible limits.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#151B28]">
              Ten defined states — not pass and fail
            </h3>

            {/* 10 Defined States Table Container (Responsive: 1 Column on Mobile, 2 Columns on Desktop) */}
            <div className="bg-white rounded-2xl border border-gray-200/90 shadow-sm overflow-hidden divide-y divide-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
                <div className="p-5 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-600"></span>
                    <h4 className="text-sm font-bold text-[#151B28]">Match within method</h4>
                  </div>
                  <p className="text-xs text-[#151B28]/70 leading-relaxed pl-4">The defined check succeeded within the stated scope, at the named method version.</p>
                </div>
                <div className="p-5 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-[#C53B3B]"></span>
                    <h4 className="text-sm font-bold text-[#151B28]">Mismatch</h4>
                  </div>
                  <p className="text-xs text-[#151B28]/70 leading-relaxed pl-4">Safe mismatched elements and troubleshooting. Never implies fraud, tampering intent or a malicious actor.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
                <div className="p-5 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-amber-600"></span>
                    <h4 className="text-sm font-bold text-[#151B28]">Malformed input</h4>
                  </div>
                  <p className="text-xs text-[#151B28]/70 leading-relaxed pl-4">A parser or format problem, plus the safe next action. Does not mean the evidence is false.</p>
                </div>
                <div className="p-5 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-gray-500"></span>
                    <h4 className="text-sm font-bold text-[#151B28]">Unsupported version</h4>
                  </div>
                  <p className="text-xs text-[#151B28]/70 leading-relaxed pl-4">Shows supported versions and a real upgrade or migration route. Not a verification failure.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
                <div className="p-5 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-gray-500"></span>
                    <h4 className="text-sm font-bold text-[#151B28]">Unverifiable / missing reference</h4>
                  </div>
                  <p className="text-xs text-[#151B28]/70 leading-relaxed pl-4">Required material or reference is absent. Reported distinctly from mismatch.</p>
                </div>
                <div className="p-5 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-amber-600"></span>
                    <h4 className="text-sm font-bold text-[#151B28]">Trust material unavailable</h4>
                  </div>
                  <p className="text-xs text-[#151B28]/70 leading-relaxed pl-4">An external or current trust-material problem — separate from the evidence itself.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
                <div className="p-5 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-amber-600"></span>
                    <h4 className="text-sm font-bold text-[#151B28]">Trust material expired or revoked</h4>
                  </div>
                  <p className="text-xs text-[#151B28]/70 leading-relaxed pl-4">Timing and status explained in the method's own semantics. Never universal legal invalidity.</p>
                </div>
                <div className="p-5 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-gray-500"></span>
                    <h4 className="text-sm font-bold text-[#151B28]">Verifier unavailable</h4>
                  </div>
                  <p className="text-xs text-[#151B28]/70 leading-relaxed pl-4">An honest state plus Evidence, Docs and Trust Center alternatives. Never a cached "all good".</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
                <div className="p-5 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-[#C53B3B]"></span>
                    <h4 className="text-sm font-bold text-[#151B28]">Security hold / withdrawn release</h4>
                  </div>
                  <p className="text-xs text-[#151B28]/70 leading-relaxed pl-4">The affected version is blocked and the current safe release or support route is shown. Never a silent failure.</p>
                </div>
                <div className="p-5 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-gray-500"></span>
                    <h4 className="text-sm font-bold text-[#151B28]">Internal error</h4>
                  </div>
                  <p className="text-xs text-[#151B28]/70 leading-relaxed pl-4">An honest state plus Evidence, Docs and Trust Center alternatives. No stack trace, no internal path, and not a result state.</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#151B28]/60 pt-2 font-mono leading-relaxed">
              Result states are communicated with text, shape and explanation together — never colour alone. Focus moves to the result summary after verification without trapping the user.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: THE TRUTH BOUNDARY (DARK NAVY SECTION) */}
        {/* ========================================================================= */}
        <section className="bg-[#0B1B26] text-white py-14 sm:py-16 my-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  THE TRUTH BOUNDARY
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                What a verification result does not establish.
              </h2>
              <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
                A verification result establishes only the defined check within the stated scope. It is not certification, legal sufficiency, truth, or guaranteed security.
              </p>
            </div>

            {/* Desktop 6 Inequality Cards Grid (hidden lg:grid) */}
            <div className="hidden lg:grid grid-cols-2 gap-4 mb-8">
              {TRUTH_INEQUALITIES.map((card, idx) => (
                <div key={idx} className="bg-[#11242C] rounded-xl border border-gray-800 p-5 space-y-2">
                  <div className="font-mono text-xs font-bold text-gray-200">
                    <span>{card.left}</span>{" "}
                    <span className="text-[#C53B3B] font-bold px-1">{card.symbol}</span>{" "}
                    <span>{card.right}</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Mobile Single Grouped Inequality Card (lg:hidden — As in section6-mob.png) */}
            <div className="lg:hidden bg-[#11242C] rounded-2xl border border-gray-800 divide-y divide-gray-800/80 mb-8 overflow-hidden shadow-sm">
              <div className="h-2 bg-gray-800/40 w-full"></div>
              {TRUTH_INEQUALITIES.map((card, idx) => (
                <div key={idx} className="p-5 space-y-1.5">
                  <div className="font-mono text-xs font-bold text-gray-200">
                    <span>{card.left}</span>{" "}
                    <span className="text-[#C53B3B] font-bold px-1">{card.symbol}</span>{" "}
                    <span>{card.right}</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Lower Callout: On independent verification */}
            <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 space-y-3">
              <h3 className="text-base font-bold text-white">On "independent verification"</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                The phrase is used only alongside a published independence model: what is independent (implementation, execution environment, organisational function or external party), the relationship between verifier and evidence producer, who operates the verification, and what another eligible operator can reproduce.
              </p>
              <p className="text-xs text-gray-400 leading-relaxed font-mono">
                A public or open-source verifier is not an independent third-party audit. Stronger phrasing — "third-party verified", "externally validated", "auditor certified" — is release-blocked until real, current and approved.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: SOURCE & DISTRIBUTION */}
        {/* ========================================================================= */}
        <section className="bg-[#F5F2EB] py-14 sm:py-16 border-t border-gray-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  SOURCE AND DISTRIBUTION
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151B28]">
                Repository, license and releases appear when they exist.
              </h2>
              <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl">
                The route for a downloadable, open-source verifier is planned. No repository badge, license identifier or package-manager path is shown before its own publication facts are approved.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Repository Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4 shadow-sm flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold">
                    📁
                  </div>
                  <h3 className="text-base font-bold text-[#151B28]">Repository</h3>
                  <p className="text-xs text-[#151B28]/70 leading-relaxed">
                    Exact approved public source location, clearly identified as an external destination.
                  </p>
                </div>
                <div>
                  <span className="inline-block text-[10px] font-mono font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                    ● AWAITING AUTHORITY
                  </span>
                </div>
              </div>

              {/* License Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4 shadow-sm flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold">
                    ⚖️
                  </div>
                  <h3 className="text-base font-bold text-[#151B28]">License</h3>
                  <p className="text-xs text-[#151B28]/70 leading-relaxed">
                    Exact identifier, text and version. No "open source" badge before it is confirmed.
                  </p>
                </div>
                <div>
                  <span className="inline-block text-[10px] font-mono font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                    ● AWAITING AUTHORITY
                  </span>
                </div>
              </div>

              {/* Release Artifacts Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4 shadow-sm flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold">
                    📦
                  </div>
                  <h3 className="text-base font-bold text-[#151B28]">Release artifacts</h3>
                  <p className="text-xs text-[#151B28]/70 leading-relaxed">
                    Approved binary, source or package types only — with provenance and integrity instructions.
                  </p>
                </div>
                <div>
                  <span className="inline-block text-[10px] font-mono font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                    ● AWAITING AUTHORITY
                  </span>
                </div>
              </div>
            </div>

            {/* Lower Download Safety Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 space-y-5 shadow-sm">
              <h3 className="text-base font-bold text-[#151B28] border-b border-gray-100 pb-3">
                Download safety
              </h3>
              <div className="divide-y divide-gray-100 text-xs sm:text-sm">
                <div className="py-3 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#C53B3B] mt-0.5 shrink-0"></span>
                  <span className="text-[#151B28]/80 leading-relaxed">
                    No unsigned or unverified executable is distributed simply because the route exists.
                  </span>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#C53B3B] mt-0.5 shrink-0"></span>
                  <span className="text-[#151B28]/80 leading-relaxed">
                    Nothing auto-downloads from a proof link. Intent must be explicit.
                  </span>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#C53B3B] mt-0.5 shrink-0"></span>
                  <span className="text-[#151B28]/80 leading-relaxed">
                    No official package manager, container image, browser extension or installer is implied until a release registry approves it.
                  </span>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#C53B3B] mt-0.5 shrink-0"></span>
                  <span className="text-[#151B28]/80 leading-relaxed">
                    Build reproducibility is claimed only where implemented and verified — source availability alone does not imply it.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: HISTORY AND SUPPORT (DISTINCT WARM BEIGE BACKGROUND #EBE7DF) */}
        {/* ========================================================================= */}
        <section className="bg-[#EBE7DF] py-14 sm:py-16 border-t border-gray-300/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  HISTORY AND SUPPORT
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151B28]">
                Version lifecycle, in public.
              </h2>
              <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl">
                Supported versions, end-of-support policy and security-update behaviour are published alongside the verifier — never after it.
              </p>
            </div>

            {/* Timeline List */}
            <div className="space-y-6 border-l-2 border-gray-300/80 pl-6 ml-2 mb-10">
              <div className="relative space-y-1">
                <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-white border-2 border-gray-400"></span>
                <div className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider">
                  STAGE 03 · PENDING
                </div>
                <h4 className="text-base font-bold text-[#151B28]">Public release</h4>
                <p className="text-xs text-[#151B28]/70 leading-relaxed max-w-2xl">
                  Verifier version, supported input range, release notes and provenance instructions publish together with the active CTA.
                </p>
              </div>

              <div className="relative space-y-1">
                <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-white border-2 border-gray-400"></span>
                <div className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider">
                  STAGE 02 · PENDING
                </div>
                <h4 className="text-base font-bold text-[#151B28]">Documentation threshold</h4>
                <p className="text-xs text-[#151B28]/70 leading-relaxed max-w-2xl">
                  Quick start, input schema, method overview, result codes, troubleshooting, security and privacy pages must be substantive — placeholder Docs never count as readiness.
                </p>
              </div>

              <div className="relative space-y-1">
                <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-[#151B28] border-2 border-white"></span>
                <div className="text-[10px] font-mono font-bold text-[#151B28] uppercase tracking-wider">
                  STAGE 01 · CURRENT
                </div>
                <h4 className="text-base font-bold text-[#151B28]">Specification controlled</h4>
                <p className="text-xs text-[#151B28]/70 leading-relaxed max-w-2xl">
                  Route, information architecture, result vocabulary, claim limits and accessibility requirements are fixed under ZS-WEB-PLATFORM-VERIFY-EVIDENCE-008 v1.0.
                </p>
              </div>
            </div>

            {/* Lower Security Updates White Card */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-8 space-y-3 shadow-sm">
              <h3 className="text-base font-bold text-[#151B28]">Security updates and withdrawal</h3>
              <p className="text-xs sm:text-sm text-[#151B28]/70 leading-relaxed">
                If a critical verifier or method vulnerability is found, the affected release is blocked at the gate, the page states the hold, and the current safe release or support route is shown. Rollback and monitoring owners are named before public activation, not after.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: DIRECT ANSWERS (FAQ ACCORDION) */}
        {/* ========================================================================= */}
        <section className="bg-[#F5F2EB] py-14 sm:py-16 border-t border-gray-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  DIRECT ANSWERS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151B28]">
                Questions serious evaluators ask first.
              </h2>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200/90 shadow-sm divide-y divide-gray-200/80 mb-8">
              {VERIFY_FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="transition-colors">
                    <button
                      onClick={() => toggleFaq(idx)}
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

            {/* Navigation Link Pills */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className="px-4 py-2.5 bg-[#EFECE6] hover:bg-gray-200 text-[#151B28] text-xs font-semibold rounded-lg border border-gray-200 transition-colors shadow-sm"
              >
                Evidence ledger & verification
              </Link>
              <Link
                href="/services"
                className="px-4 py-2.5 bg-[#EFECE6] hover:bg-gray-200 text-[#151B28] text-xs font-semibold rounded-lg border border-gray-200 transition-colors shadow-sm"
              >
                Compliance Control Plane
              </Link>
              <Link
                href="/about"
                className="px-4 py-2.5 bg-[#EFECE6] hover:bg-gray-200 text-[#151B28] text-xs font-semibold rounded-lg border border-gray-200 transition-colors shadow-sm"
              >
                Trust Center
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2.5 bg-[#EFECE6] hover:bg-gray-200 text-[#151B28] text-xs font-semibold rounded-lg border border-gray-200 transition-colors shadow-sm"
              >
                Documentation
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 10: GET STARTED (DARK GRADIENT SECTION WITH TOP AMBIENT GLOW) */}
        {/* ========================================================================= */}
        <section className="relative bg-gradient-to-b from-[#142632] via-[#0B1B26] to-[#060D13] text-white py-20 sm:py-24 mt-12 mb-0 overflow-hidden">
          {/* Top Subtle Red/Coral Ambient Aura Glow */}
          <div className="absolute top-0 inset-x-0 h-64 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-900/25 via-transparent to-transparent pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="flex items-center gap-2 justify-center">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 font-mono">
                GET STARTED
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Inspect the proof first. Talk to us after.
            </h2>

            <p className="text-sm sm:text-base text-gray-300/80 leading-relaxed max-w-2xl mx-auto">
              Evidence explanation, the Trust Center and Documentation stay open without a demo. When you want to see the ledger against your own controls, we'll walk it with you.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setDemoOpen(true)}
                className="px-6 py-3 bg-[#E0533C] hover:bg-[#c94530] text-white font-semibold text-sm rounded-lg transition-all shadow-md flex items-center gap-2"
              >
                Book a Technical Demo
              </button>

              <Link
                href="/dashboard"
                className="px-6 py-3 bg-[#0B1B26]/80 hover:bg-[#11242C] text-white font-semibold text-sm rounded-lg border border-gray-700/80 hover:border-gray-500 transition-all shadow-sm"
              >
                Explore the Platform
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}

      {/* Demo Modal */}
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}
