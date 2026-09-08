"use client";

import React, { useState } from "react";
import Image from "next/image";
// import { Navbar } from "@/components/layout/Navbar";
// import { Footer } from "@/components/layout/Footer";
import { DemoModal } from "@/components/ui/DemoModal";

// 10 Commitments Data
const TEN_COMMITMENTS = [
  {
    num: "01",
    title: "Purpose before capability",
    desc: "Every AI function names its intended purpose, its user, its scope and its current state.",
  },
  {
    num: "02",
    title: "Data before processing",
    desc: "Data categories, provider boundary, retention and training handling are stated for the exact feature.",
  },
  {
    num: "03",
    title: "Evidence before reliance",
    desc: "Outputs show their source context — or say clearly that they are inferential, incomplete or unsupported.",
  },
  {
    num: "04",
    title: "Human authority before consequence",
    desc: "Decision rights are explicit. Consequential actions are never implied to be fully autonomous.",
  },
  {
    num: "05",
    title: "Limits before confidence",
    desc: "Known limitations, unsupported contexts, staleness, uncertainty and degraded states stay visible.",
  },
  {
    num: "06",
    title: "Change before continuity",
    desc: "Material model, provider, policy, tool or data changes trigger re-review and a versioned disclosure.",
  },
  {
    num: "07",
    title: "Incident before marketing",
    desc: "Safety, privacy, security and harmful-output concerns route to governed review — not to a sales funnel.",
  },
  {
    num: "08",
    title: "Evidence before trust claim",
    desc: "No responsible, safe, fair or compliant status without scope, date, method and approval evidence.",
  },
  {
    num: "09",
    title: "Shared responsibility",
    desc: "ZoikoShield, providers, your administrators, your reviewers and your users each hold distinct obligations.",
  },
  {
    num: "10",
    title: "Correction over permanence",
    desc: "Public records can be corrected, superseded, restricted, paused or withdrawn — with history preserved.",
  },
];

// 8 Shared Responsibility Roles Data
const SHARED_ROLES = [
  {
    category: "ZOIKOSHIELD · PRODUCT & AI GOVERNANCE",
    title: "Define and disclose",
    desc: "Intended use, product controls, decision rights, evaluations, release and change governance, and this transparency surface.",
  },
  {
    category: "ZOIKOSHIELD · SECURITY",
    title: "Protect and respond",
    desc: "AI, data and tool architecture; abuse and security monitoring; incident management and vulnerability response.",
  },
  {
    category: "ZOIKOSHIELD · PRIVACY, LEGAL & COMPLIANCE",
    title: "Review the claims",
    desc: "Data use, provider and contract terms, regulatory statements, rights and disclosure boundaries.",
  },
  {
    category: "PROVIDER / SUBPROCESSOR",
    title: "Meet contracted obligations",
    desc: "Security, privacy, data-use and incident obligations within its own service scope. Provider marketing does not become a ZoikoShield statement.",
  },
  {
    category: "YOUR ADMINISTRATOR",
    title: "Configure within policy",
    desc: "Approved controls, roles, data and integrations — and avoid unsupported or prohibited uses. Ordinary admins cannot bypass non-overridable safeguards.",
  },
  {
    category: "YOUR REVIEWER OR APPROVER",
    title: "Exercise real judgment",
    desc: "Read the evidence and the limits, then accept, reject or escalate within your authority. A suggestion is not an approval.",
  },
  {
    category: "YOUR USERS",
    title: "Use within intended purpose",
    desc: "Verify material outputs, and report problems or misuse rather than working around them.",
  },
  {
    category: "AUDITORS AND REPORTERS",
    title: "Review without operating",
    desc: "Permitted evidence is reviewable read-only. Safety and security reporters need no commercial relationship to reach us.",
  },
];

// 10 Data Use Disclosures Data
const DATA_USE_DISCLOSURES = [
  {
    area: "input data",
    pub: "The categories a specific feature may receive, and the purpose.",
    never: "\"We only use what's necessary\", with no feature scope.",
    highlightNever: false,
  },
  {
    area: "output data",
    pub: "Generated, summarized or classified output categories and where they appear.",
    never: "That output is always factual or always source-backed.",
    highlightNever: false,
  },
  {
    area: "customer content",
    pub: "Whether tenant content may be processed, for that named feature.",
    never: "A universal yes or no across all AI flows.",
    highlightNever: false,
  },
  {
    area: "provider access",
    pub: "Whether approved external model processing may occur, at category level.",
    never: "Silence about third-party processing where it is material.",
    highlightNever: false,
  },
  {
    area: "training / improvement",
    pub: "Provider or platform use for training or fine-tuning, opt-out and contractual restrictions — where verified.",
    never: "\"Never used for training\" without exact proof for that service.",
    highlightNever: true,
  },
  {
    area: "retention",
    pub: "Retention category per feature, provider and telemetry type, plus customer control where approved.",
    never: "A single retention number applied across every AI flow.",
    highlightNever: false,
  },
  {
    area: "region / transfer",
    pub: "Processing, residency and transfer boundary with its dependencies, where verified.",
    never: "\"Data never leaves your region\" as a universal claim.",
    highlightNever: true,
  },
  {
    area: "logs / telemetry",
    pub: "What is logged for security, quality, audit and abuse prevention, at category level.",
    never: "Sensitive prompt text entering marketing analytics. It does not.",
    highlightNever: false,
  },
  {
    area: "reduction",
    pub: "Approved minimization or masking behaviour, and its limitation.",
    never: "Automatic anonymization, without a verified control behind it.",
    highlightNever: false,
  },
  {
    area: "sensitive data",
    pub: "Restricted and prohibited data classes, and feature-specific constraints.",
    never: "Any encouragement to submit unrestricted sensitive data.",
    highlightNever: false,
  },
];

// 9 Change & Versioning Data
const CHANGE_VERSIONING_DATA = [
  {
    type: "model / provider",
    trigger: "Quality, safety, privacy, security, contract and decision-right re-review.",
    effect: "Transparency record updated; customer notice where material or required.",
    highlightEffect: false,
  },
  {
    type: "system instruction",
    trigger: "Behaviour, safety and evidence review, proportional to effect.",
    effect: "Version and change history where material.",
    highlightEffect: false,
  },
  {
    type: "retrieval source",
    trigger: "Authority, freshness, licence, quality and citation review.",
    effect: "Source and limitation disclosures updated.",
    highlightEffect: false,
  },
  {
    type: "tool / integration",
    trigger: "Permission, side effect, rollback and security review.",
    effect: "Action mode and decision-right disclosure updated.",
    highlightEffect: false,
  },
  {
    type: "decision-right policy",
    trigger: "Governance and human-authority review.",
    effect: "Changed state and conditions published.",
    highlightEffect: false,
  },
  {
    type: "data use / retention",
    trigger: "Privacy, security, legal and provider review.",
    effect: "Data-use record updated before or at the effective change, as required.",
    highlightEffect: false,
  },
  {
    type: "evaluation regression",
    trigger: "Quality, safety and governance review.",
    effect: "Conditional, restricted or paused state — not silent continuation.",
    highlightEffect: true,
  },
  {
    type: "incident correction",
    trigger: "Root cause, remediation and claim review.",
    effect: "Correction history, current state, and disclosure where approved.",
    highlightEffect: false,
  },
  {
    type: "retirement",
    trigger: "Dependency, saved-output interpretation and evidence retention.",
    effect: "Superseded or withdrawn status with successor guidance.",
    highlightEffect: false,
  },
];

// 7 AI Capabilities Data
const AI_CAPABILITIES = [
  {
    id: "RAI-001",
    title: "Investigation Assistant",
    desc: "Answers investigation questions using cited evidence available to the authenticated user, and surfaces where context is missing rather than filling the gap.",
    right: "Advisory",
    mode: "Read-only",
    grounding: "Cited retrieval",
    dataclass: "Security telemetry, case content",
    reviewed: "04 Aug 2026",
    state: "APPROVED",
    stateType: "emerald",
    limitHeader: "KNOWN LIMITATIONS",
    limitations: "Fluency is not certainty. Where sources conflict, the conflict is shown rather than resolved. Coverage depends on which sources the user is authorized to see.",
    linkText: "Product detail →",
  },
  {
    id: "RAI-002",
    title: "Alert and case summarization",
    desc: "Condenses an alert or case into a readable summary with links back to each underlying observation.",
    right: "Advisory",
    mode: "Read-only",
    grounding: "Cited retrieval",
    dataclass: "Security telemetry",
    reviewed: "04 Aug 2026",
    state: "APPROVED",
    stateType: "emerald",
    limitHeader: "KNOWN LIMITATIONS",
    limitations: "A summary can omit a detail that mattered. It is a reading aid, not a substitute for the record. Summaries of stale sources inherit that staleness.",
    linkText: "Detection & Response →",
  },
  {
    id: "RAI-003",
    title: "Executive risk narrative drafting",
    desc: "Drafts evidence-linked narrative for executive and Board reporting, with each statement traceable to its source.",
    right: "Review-required",
    mode: "Propose-only",
    grounding: "Cited evidence",
    dataclass: "Aggregated risk context",
    reviewed: "11 Jul 2026",
    state: "CONDITIONAL",
    stateType: "amber",
    limitHeader: "KNOWN LIMITATIONS",
    limitations: "Does not determine materiality, probability or disclosure obligation. Your authorized readers own the statements and the decisions. Conditional on Executive Risk Intelligence being current for your deployment.",
    linkText: "Executive Risk Intelligence →",
  },
  {
    id: "RAI-004",
    title: "Control mapping suggestion",
    desc: "Suggests candidate control and framework mappings for evidence, with the reasoning shown for a reviewer to accept or reject.",
    right: "Review-required",
    mode: "Propose-only",
    grounding: "Rule + evidence",
    dataclass: "Control and evidence metadata",
    reviewed: "31 Jul 2026",
    state: "APPROVED",
    stateType: "emerald",
    limitHeader: "KNOWN LIMITATIONS",
    limitations: "A suggested mapping is not a compliance conclusion, an audit opinion or evidence of control effectiveness. Framework versions change; mappings need re-review when they do.",
    linkText: "Compliance Control Plane →",
  },
  {
    id: "RAI-005",
    title: "Tuning suggestion",
    desc: "Proposes a rule or threshold change for a detection engineer to evaluate, validate and release.",
    right: "Review-required",
    mode: "Propose-only",
    grounding: "Model inference",
    dataclass: "Rule and match metadata",
    reviewed: "11 Jul 2026",
    state: "UNDER REVIEW",
    stateType: "blue",
    limitHeader: "KNOWN LIMITATIONS",
    limitations: "Under review following an evaluation regression. The last verified state remains visible and no silent continuation claim is made. Auto-tuning is not enabled and is not implied by this record.",
    linkText: "Tuning governance →",
  },
  {
    id: "RAI-006",
    title: "Response action proposal",
    desc: "Prepares a containment or remediation action for a designated approver, with target, scope, consequence, reversibility and expiry stated.",
    right: "Approval-required",
    mode: "Approval-gated",
    grounding: "Cited evidence + rule",
    dataclass: "Security telemetry, asset context",
    reviewed: "04 Aug 2026",
    state: "CONDITIONAL",
    stateType: "amber",
    limitHeader: "KNOWN LIMITATIONS",
    limitations: "Approval is attributable and can never be inferred from inactivity or silence. Nothing executes without it. Conditional on Governed Response being contracted and current for your deployment.",
    linkText: "Governed Response →",
  },
  {
    id: "RAI-007",
    title: "Prohibited AI uses",
    desc: "These are blocked in the product, not merely discouraged. There is no administrator setting, escalation or \"force anyway\" path that enables them.",
    right: "Prohibited",
    mode: "Blocked",
    grounding: "None exposed",
    dataclass: "AI Governance + Security",
    reviewed: "04 Aug 2026",
    state: "PROHIBITED",
    stateType: "rose",
    limitHeader: "NOT PERMITTED IN ANY CONTEXT",
    limitations: "Autonomous containment without approval. Determining materiality or a disclosure obligation. Reaching a legal or regulatory conclusion. Inferring protected or sensitive attributes. Publishing an external statement. Self-approving its own proposal.",
    linkText: "AI decision rights →",
  },
];

// 12 Responsible AI FAQs
const RESPONSIBLE_AI_FAQS = [
  {
    q: "What does Responsible AI mean at ZoikoShield?",
    a: "A governed operating model that makes intended use, data boundaries, evidence, human authority, evaluation, limitations, changes and incidents visible. It is a versioned record you can check, not a permanent badge or a statement of values.",
  },
  {
    q: "Does ZoikoShield let AI make security decisions automatically?",
    a: "No. Consequential actions require explicit human review or approval according to defined decision rights. Automated execution is restricted to pre-authorized, narrow, reversible actions under strict policy constraints.",
  },
  {
    q: "Do you use our data to train AI models?",
    a: "No customer data is used for model training or fine-tuning without explicit, verified feature-level opt-in and contractual agreement. Each feature record explicitly states its training and data handling policy.",
  },
  {
    q: "Which AI models do you use?",
    a: "Model categories, deployment architectures, and provider boundaries are published for each feature. Specific model names and versions are disclosed at category level once security and legal reviews complete.",
  },
  {
    q: "How is the AI tested?",
    a: "AI capabilities undergo offline evaluation, synthetic scenario testing, red teaming, and continuous production regression monitoring. Pass thresholds and evaluation scopes are documented for each capability.",
  },
  {
    q: "Can people override AI recommendations?",
    a: "Yes. Authorized users can review, modify, or reject any AI suggestion. Consequential overrides are logged to ensure auditability and continuous model improvement.",
  },
  {
    q: "What happens if the AI is uncertain or has no evidence?",
    a: "The system gets quieter — not louder. When context is missing or confidence is low, outputs flag the gap or decline to generate rather than hallucination or fabricating evidence.",
  },
  {
    q: "How do I report an AI problem?",
    a: "Use our dedicated AI Concern intake route. Submissions route directly to AI governance, safety, and legal teams — completely separate from sales or marketing analytics.",
  },
  {
    q: "Does Responsible AI mean you comply with every AI law?",
    a: "Public transparency disclosures support compliance evaluation but do not constitute a universal legal certification. Specific regulatory alignments are reviewed under formal DPA and contract terms.",
  },
  {
    q: "How often is this updated?",
    a: "Disclosures update whenever a material model, provider, policy, tool, or data handling change occurs. Every record maintains version history and effective dates.",
  },
  {
    q: "Why are there no AI incident statistics here?",
    a: "Incident statistics, root causes, and impact figures publish only after formal verification and authorization by legal and disclosure authorities. Unknown remains the honest answer until verified.",
  },
  {
    q: "Can enterprises review more than this?",
    a: "Yes. Enterprise customers can request controlled evaluation evidence packs, detailed subprocessor lists, and security architecture documentation through our Trust Center.",
  },
];

export default function ResponsibleAIPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("All records");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Filter capabilities based on active tab
  const filteredCapabilities = AI_CAPABILITIES.filter((cap) => {
    if (activeTab === "All records") return true;
    return cap.right.toLowerCase() === activeTab.toLowerCase();
  });

  return (
    <div className="min-h-screen bg-[#F4F3EF] text-[#111827] font-sans antialiased">
      {/* <Navbar /> */}

      <main className="pt-24 sm:pt-28 pb-0 overflow-x-hidden">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO & AI GOVERNANCE CONTROL PANEL */}
        {/* ========================================================================= */}
        {/* MOBILE VERSION (block sm:hidden) */}
        <section className="block sm:hidden px-4 py-4 space-y-5">
          {/* Top Emergency Dark Navy Alert Banner */}
          <div className="bg-[#071829] text-white p-4 rounded-xl shadow-md space-y-3">
            <p className="text-xs leading-relaxed">
              <strong className="text-white font-bold">Something wrong with an AI output?</strong>{" "}
              <span className="text-gray-300">
                The concern route is a trust and safety function &mdash; no demo interest, sales qualification or company details required.
              </span>
            </p>
            <div className="flex flex-wrap items-center gap-4 font-mono text-xs pt-1">
              <a href="#concerns" className="text-cyan-400 font-bold hover:underline">
                Report an AI Concern &rarr;
              </a>
              <a href="#concerns" className="text-cyan-400 font-bold hover:underline">
                Vulnerability Disclosure &rarr;
              </a>
            </div>
          </div>

          {/* Breadcrumbs */}
          <div className="text-xs font-mono text-gray-500 py-1">
            Home / Trust / Responsible AI
          </div>

          {/* Overline & Headline */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                RESPONSIBLE AI
              </span>
            </div>

            <h1 className="text-3xl font-extrabold text-[#151B28] tracking-tight leading-[1.15]">
              Make AI use visible, bounded,{" "}
              <span className="text-[#E0533C]">and accountable.</span>
            </h1>

            <p className="text-sm text-[#151B28]/75 leading-relaxed">
              ZoikoShield is designed to make AI-supported security work understandable: what the AI is used for, what data it may process, what evidence supports its output, what people still decide, how behaviour is tested, and how concerns or material changes are handled.
            </p>
          </div>

          {/* 4 Status Badges Stack */}
          <div className="flex flex-col gap-2 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              TRUST CONTENT: APPROVED
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-gray-100 text-gray-600 border border-gray-300/80 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
              MODEL & PROVIDER DETAIL: AUTHORITY-GATED
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-50 text-amber-700 border border-amber-200/80 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              AVAILABILITY VARIES BY FEATURE
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-100 text-slate-600 border border-slate-200/80 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
              WCAG 2.2 AA
            </span>
          </div>

          {/* Vertical Buttons Stack */}
          <div className="space-y-2.5 pt-2">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="w-full text-center px-5 py-3.5 bg-[#E0533C] hover:bg-[#c94530] text-white font-bold text-sm rounded-xl shadow-md transition-all block"
            >
              Review AI Controls
            </button>
            <a
              href="#doctrine"
              className="w-full text-center px-5 py-3.5 bg-[#F8F7F4] hover:bg-gray-100 text-[#151B28] font-bold text-sm rounded-xl border border-gray-300/80 shadow-sm transition-all block"
            >
              Explore AI Security & Governance
            </a>
            <a
              href="#concerns"
              className="w-full text-center px-5 py-3.5 bg-[#F8F7F4] hover:bg-gray-100 text-[#151B28] font-bold text-sm rounded-xl border border-gray-300/80 shadow-sm transition-all block"
            >
              Report an AI Concern
            </a>
          </div>

          {/* Sub-footnote */}
          <p className="text-xs text-gray-500 leading-relaxed pt-1">
            AI can support analysis and workflow, but consequential authority remains governed by defined decision rights and authorized people.
          </p>

          {/* AI Governance Control Panel / Current Posture Card (Mobile) */}
          <div className="bg-white rounded-2xl border-t-4 border-[#071829] border-x border-b border-gray-300/80 shadow-md overflow-hidden font-sans mt-6">
            {/* Card Header */}
            <div className="p-5 border-b border-gray-200/80 space-y-2">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase font-bold tracking-wider text-gray-500">
                <span>PUBLIC TRANSPARENCY RECORD</span>
                <span>ZS-TRUST-RAI-020</span>
              </div>
              <h3 className="text-xl font-extrabold text-[#151B28]">
                Current posture
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                This is a versioned disclosure surface, not a badge. Each row carries its own state and its own last-reviewed date.
              </p>
            </div>

            {/* Posture Rows */}
            <div className="divide-y divide-gray-200/80">
              {/* Row 1 */}
              <div className="p-4 space-y-1">
                <div className="font-bold text-sm text-[#151B28]">AI capability inventory</div>
                <div className="font-mono text-[10px] text-gray-500">7 public records</div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  APPROVED
                </span>
              </div>

              {/* Row 2 */}
              <div className="p-4 space-y-1">
                <div className="font-bold text-sm text-[#151B28]">Data-use disclosures</div>
                <div className="font-mono text-[10px] text-gray-500">per feature and provider</div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-50 text-amber-700 border border-amber-200/80 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  CONDITIONAL
                </span>
              </div>

              {/* Row 3 */}
              <div className="p-4 space-y-1">
                <div className="font-bold text-sm text-[#151B28]">Decision-right classes</div>
                <div className="font-mono text-[10px] text-gray-500">owned by /platform/ai</div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  APPROVED
                </span>
              </div>

              {/* Row 4 */}
              <div className="p-4 space-y-1">
                <div className="font-bold text-sm text-[#151B28]">Model &amp; provider names</div>
                <div className="font-mono text-[10px] text-gray-500">disclosure pending approval</div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-gray-50 text-gray-600 border border-dashed border-gray-300 w-fit">
                  ? UNKNOWN
                </span>
              </div>

              {/* Row 5 */}
              <div className="p-4 space-y-1">
                <div className="font-bold text-sm text-[#151B28]">Evaluation evidence</div>
                <div className="font-mono text-[10px] text-gray-500">scope and method category only</div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-50 text-amber-700 border border-amber-200/80 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  CONDITIONAL
                </span>
              </div>

              {/* Row 6 */}
              <div className="p-4 space-y-1">
                <div className="font-bold text-sm text-[#151B28]">Public incident archive</div>
                <div className="font-mono text-[10px] text-gray-500">thresholds not yet approved</div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-gray-50 text-gray-600 border border-dashed border-gray-300 w-fit">
                  &mdash; UNAVAILABLE
                </span>
              </div>

              {/* Row 7 */}
              <div className="p-4 space-y-1">
                <div className="font-bold text-sm text-[#151B28]">Concern intake route</div>
                <div className="font-mono text-[10px] text-gray-500">reviewed 04 Aug 2026</div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  APPROVED
                </span>
              </div>
            </div>

            {/* Footer Callout Box inside Card */}
            <div className="bg-[#EFECE6] p-4 text-xs leading-relaxed font-sans text-gray-700 border-t border-gray-200">
              <strong className="text-[#151B28] font-bold">Correction over permanence.</strong> Any record here can be corrected, restricted, paused, superseded or withdrawn &mdash; with its history preserved. Unknown is published as unknown rather than smoothed into confidence.
            </div>
          </div>

          {/* Bottom Metadata Footer Box */}
          <div className="bg-[#EFECE6]/80 rounded-xl p-4 font-mono text-[11px] text-gray-600 space-y-1.5 border border-gray-200/60 mt-4">
            <div><span className="text-gray-400">ROUTE</span> <strong className="text-gray-800">/TRUST/RESPONSIBLE-AI</strong></div>
            <div><span className="text-gray-400">PARENT</span> <strong className="text-gray-800">TRUST &amp; SECURITY</strong></div>
            <div><span className="text-gray-400">PRODUCT DETAIL</span> <strong className="text-gray-800">/PLATFORM/AI</strong></div>
            <div><span className="text-gray-400">REVIEWED</span> <strong className="text-gray-800">04 AUG 2026</strong></div>
          </div>
        </section>

        {/* DESKTOP VERSION (hidden sm:block) - 100% UNTOUCHED */}
        <section className="hidden sm:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  RESPONSIBLE AI
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#151B28] tracking-tight leading-[1.12]">
                Make AI use visible, bounded,{" "}
                <span className="text-[#E0533C]">and accountable.</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-[#151B28]/75 max-w-xl leading-relaxed">
                ZoikoShield is designed to make AI-supported security work understandable: what the AI is used for, what data it may process, what evidence supports its output, what people still decide, how behaviour is tested, and how concerns or material changes are handled.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="px-6 py-3 bg-[#E0533C] hover:bg-[#c94530] text-white font-bold text-sm rounded-lg transition-all shadow-md"
                >
                  Review AI Controls
                </button>
                <a
                  href="#doctrine"
                  className="px-5 py-3 bg-[#EFECE6] hover:bg-gray-200 text-[#151B28] font-semibold text-sm rounded-lg border border-gray-300/80 transition-all shadow-sm"
                >
                  Explore AI Security & Governance
                </a>
                <a
                  href="#concerns"
                  className="px-5 py-3 bg-[#EFECE6] hover:bg-gray-200 text-[#151B28] font-semibold text-sm rounded-lg border border-gray-300/80 transition-all shadow-sm"
                >
                  Report an AI Concern
                </a>
              </div>

              {/* Sub-footnote */}
              <p className="text-xs text-gray-500 leading-relaxed max-w-xl pt-1">
                AI can support analysis and workflow, but consequential authority remains governed by defined decision rights and authorized people.
              </p>
            </div>

            {/* Right Column: AI Hero Graphic / Photo (Desktop) */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-black">
                <Image
                  src="/images/ra.png"
                  alt="Responsible AI Governance Control Panel Illustration"
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
        {/* SECTION 2: PUBLIC DOCTRINE (TEN COMMITMENTS) */}
        {/* ========================================================================= */}
        <section id="doctrine" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200/70">
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                PUBLIC DOCTRINE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
              Ten commitments, each attached to something you can check.
            </h2>
            <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
              Responsible AI here is an operating discipline and a set of controls. Every principle below maps to a public control, an evidence type, an owner and a stated limitation — not to values language.
            </p>
          </div>

          {/* 5x2 Grid of 10 Commitments */}
          <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden mb-6 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-gray-200">
            {TEN_COMMITMENTS.map((c, idx) => (
              <div
                key={c.num}
                className={`p-6 space-y-2 ${
                  idx % 2 === 0 ? "md:border-r border-gray-200" : ""
                } ${idx >= 2 ? "border-t border-gray-200" : ""}`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#E0533C]">{c.num}</span>
                  <h4 className="text-sm sm:text-base font-bold text-[#151B28]">{c.title}</h4>
                </div>
                <p className="text-xs text-[#151B28]/70 leading-relaxed font-sans">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom Callout: What this page will not say */}
          <div className="bg-white rounded-xl border-l-4 border-[#C53B3B] border-t border-r border-b border-gray-200 p-5 sm:p-6 shadow-sm space-y-2">
            <h3 className="text-base font-bold text-[#151B28]">What this page will not say</h3>
            <p className="text-xs sm:text-sm text-[#151B28]/75 leading-relaxed font-sans">
              These phrases are release-blocked because none of them can be true as an unqualified property of a system: "AI you can trust completely", "bias-free", "fully compliant", "always accurate", "safe by design" as an outcome, "human-level", "autonomous security", "zero-risk".
            </p>
            <p className="text-xs sm:text-sm text-[#151B28]/75 leading-relaxed font-sans pt-1">
              Governance controls and framework references do not constitute universal legal compliance, regulatory approval or certification. Evaluation supports bounded assurance; it does not guarantee future behaviour.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: WHERE AI IS USED (DISTINCT WARM GREY-BEIGE #EFECE6 BACKGROUND) */}
        {/* ========================================================================= */}
        <section id="capabilities" className="bg-[#EFECE6] py-14 sm:py-16 border-t border-gray-300/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  WHERE AI IS USED
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
                Every AI capability, with its boundary attached.
              </h2>
              <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
                This is an approved public view &mdash; not a raw internal registry. It excludes internal model names, security-sensitive pipelines, tenant configuration and roadmap commitments. Filter by what the AI is permitted to do.
              </p>
            </div>

            {/* Status Badges Legend Bar */}
            <div className="flex flex-wrap items-center gap-2 mb-6 font-mono text-[10px] font-bold uppercase">
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded">
                &bull; APPROVED
              </span>
              <span className="bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded">
                &bull; CONDITIONAL
              </span>
              <span className="bg-rose-50 text-rose-700 border border-rose-200 px-2.5 py-1 rounded">
                &bull; RESTRICTED
              </span>
              <span className="bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-1 rounded">
                &bull; UNDER REVIEW
              </span>
              <span className="bg-purple-50 text-purple-700 border border-purple-200 px-2.5 py-1 rounded">
                &bull; PAUSED
              </span>
              <span className="bg-slate-100 text-slate-700 border border-slate-300 px-2.5 py-1 rounded">
                &bull; SUPERSEDED
              </span>
              <span className="bg-red-50 text-red-700 border border-red-200 px-2.5 py-1 rounded">
                &bull; WITHDRAWN
              </span>
              <span className="bg-gray-100 text-gray-600 border border-gray-300 px-2.5 py-1 rounded">
                ? UNKNOWN
              </span>
              <span className="bg-gray-100 text-gray-600 border border-gray-300 px-2.5 py-1 rounded">
                &mdash; UNAVAILABLE
              </span>
            </div>

            {/* Filter Tabs Header */}
            <div className="flex flex-wrap items-center gap-2 bg-[#EBE7DF] p-1.5 rounded-xl border border-gray-300/70 mb-6">
              {["All records", "Advisory", "Review-required", "Approval-required", "Prohibited"].map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${
                      isActive
                        ? "bg-white text-[#151B28] shadow-sm border-b-2 border-[#E0533C]"
                        : "text-gray-600 hover:text-[#151B28]"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* AI Capabilities Matrix Table Container */}
            <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden divide-y divide-gray-200">
              {filteredCapabilities.map((cap) => (
                <div key={cap.id} className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-gray-200/80">
                  {/* Col 1: Capability Details */}
                  <div className="lg:col-span-4 p-6 space-y-2">
                    <span className="font-mono text-[10px] font-bold text-gray-400 block uppercase tracking-wider">
                      {cap.id}
                    </span>
                    <h3 className="text-base font-bold text-[#151B28]">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-sans">
                      {cap.desc}
                    </p>
                  </div>

                  {/* Col 2: Metadata & Governance */}
                  <div className="lg:col-span-4 p-6 bg-gray-50/40 font-mono text-xs space-y-2.5 flex flex-col justify-between">
                    <div className="space-y-1.5 text-gray-600">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">decision right</span>
                        <span className="font-bold text-[#151B28]">{cap.right}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">action mode</span>
                        <span className="font-bold text-[#151B28]">{cap.mode}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">grounding</span>
                        <span className="font-bold text-[#151B28]">{cap.grounding}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">data class</span>
                        <span className="font-bold text-[#151B28] text-right max-w-[200px] truncate">{cap.dataclass}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">reviewed</span>
                        <span className="font-bold text-[#151B28]">{cap.reviewed}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-gray-200/80">
                      <span className="text-gray-400">state</span>
                      <span
                        className={`px-2.5 py-0.5 rounded font-mono text-[10px] font-bold border ${
                          cap.stateType === "emerald"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : cap.stateType === "amber"
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : cap.stateType === "blue"
                            ? "bg-blue-50 text-blue-700 border-blue-200"
                            : "bg-rose-50 text-rose-700 border-rose-200"
                        }`}
                      >
                        ● {cap.state}
                      </span>
                    </div>
                  </div>

                  {/* Col 3: Known Limitations & Link */}
                  <div className="lg:col-span-4 p-6 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider block">
                        {cap.limitHeader}
                      </span>
                      <p className="text-xs text-gray-600 leading-relaxed font-sans">
                        {cap.limitations}
                      </p>
                    </div>

                    <a href="#capabilities" className="text-[#E0533C] font-mono text-xs font-bold hover:underline pt-2 inline-block">
                      {cap.linkText}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Monospace Footnote */}
            <p className="font-mono text-[11px] text-gray-600 mt-4 leading-relaxed">
              Filters use categorical properties only. No prompt text, tenant identifier, customer name or free-text is collected by this page's analytics.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: DATA USE (#F4F3EF BACKGROUND) */}
        {/* ========================================================================= */}
        <section id="data-use" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200/70">
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                DATA USE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
              Scoped answers, because absolute ones would be false.
            </h2>
            <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
              "We never use customer data for training" is only meaningful for an exact feature, provider and contract. Each disclosure below is stated per feature with a reviewed date, and the Privacy Notice, DPA and subprocessor list remain authoritative for legal processing terms.
            </p>
          </div>

          {/* 10-Row Data Use Disclosure Matrix Table */}
          <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[750px]">
                <thead>
                  <tr className="bg-[#EBE7DF] text-[#151B28] text-[11px] font-mono font-bold uppercase tracking-wider border-b border-gray-300/70">
                    <th className="py-4 px-6 w-1/4">DISCLOSURE AREA</th>
                    <th className="py-4 px-6 w-5/12">WHAT IS PUBLISHED</th>
                    <th className="py-4 px-6 w-1/3 border-l border-gray-300/70">WHAT IS NEVER PUBLISHED AS A BLANKET CLAIM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200/80 text-xs sm:text-sm">
                  {DATA_USE_DISCLOSURES.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-3.5 px-6 font-mono font-bold text-[#151B28]">
                        {item.area}
                      </td>
                      <td className="py-3.5 px-6 text-gray-600 leading-relaxed font-sans">
                        {item.pub}
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

          {/* 3 Bottom Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Model and provider transparency */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                  ◇
                </div>
                <h3 className="text-lg font-bold text-[#151B28]">
                  Model and provider transparency
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  The provider and deployment category is always explained where it's material &mdash; hosted model, managed model, self-hosted, retrieval-assisted or rules and ML. Specific provider names, model names and versions publish only when approved, current and not contract- or security-sensitive.
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 text-[11px] font-mono text-gray-600 leading-relaxed space-y-1">
                <strong className="text-gray-800 uppercase block text-[9px] tracking-wider">CURRENT STATE</strong>
                <span>Name-level disclosure is pending Security, Privacy, Legal and provider evidence review. Category-level disclosure is available per record.</span>
              </div>
            </div>

            {/* Card 2: Where the legal answer lives */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                  ⚡
                </div>
                <h3 className="text-lg font-bold text-[#151B28]">
                  Where the legal answer lives
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  This page explains AI-specific data use. It does not restate &mdash; and cannot override &mdash; the Privacy Notice, the DPA, the subprocessor list or your contract. Those are cross-linked deliberately rather than duplicated, so the copy can't drift apart from them.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href="/privacy"
                  className="w-full text-center px-4 py-2.5 bg-white hover:bg-gray-50 text-[#151B28] text-xs font-bold rounded-lg border border-gray-300 shadow-sm transition-all block"
                >
                  Privacy Notice
                </a>
                <a
                  href="/privacy"
                  className="w-full text-center px-4 py-2.5 bg-white hover:bg-gray-50 text-[#151B28] text-xs font-bold rounded-lg border border-gray-300 shadow-sm transition-all block"
                >
                  Subprocessors
                </a>
              </div>
            </div>

            {/* Card 3: Least privilege, not omniscience */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                  🛡️
                </div>
                <h3 className="text-lg font-bold text-[#151B28]">
                  Least privilege, not omniscience
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  AI features respect authenticated identity, tenant boundaries and authorized role scope. Tool access receives only the scope it requires. There is no "the AI sees everything" posture here, and secrets and credentials are not placed into model context.
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 text-[11px] font-mono text-gray-600 leading-relaxed space-y-1">
                <strong className="text-gray-800 uppercase block text-[9px] tracking-wider">BOUNDARY</strong>
                <span>Protective objectives are stated without an absolute leakage-prevention guarantee. Encryption and infrastructure claims live in Security Practices.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: HUMAN AUTHORITY (#0B1B26 DARK OBSIDIAN NAVY BACKGROUND) */}
        {/* ========================================================================= */}
        <section id="authority" className="bg-[#0B1B26] text-white py-14 sm:py-16 my-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#E0533C]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                  HUMAN AUTHORITY
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Four classes. Two of them mean AI cannot proceed alone.
              </h2>
              <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
                The taxonomy is owned by AI Security & Governance. This page explains why the classes matter and how they appear in each public record &mdash; it does not invent a second autonomy model.
              </p>
            </div>

            {/* MOBILE 4-CLASS AUTHORITY STACKED CONTAINER (block sm:hidden) */}
            <div className="block sm:hidden bg-[#0E202B] rounded-2xl border border-gray-800 p-5 space-y-6 mb-8 shadow-md font-sans">
              {/* Class 1: Advisory */}
              <div className="space-y-2 border-b border-gray-800/80 pb-5">
                <div className="font-mono font-bold text-cyan-400 text-xs flex items-center">
                  <span className="w-1 h-3.5 rounded-full bg-cyan-400 inline-block mr-2"></span>
                  Advisory
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  AI may surface or summarize information. The user keeps decision and action authority.
                </p>
                <p className="text-xs text-gray-400 leading-relaxed pt-1 border-t border-gray-800/60 mt-2">
                  No autonomous consequence is implied or available.
                </p>
              </div>

              {/* Class 2: Review-required */}
              <div className="space-y-2 border-b border-gray-800/80 pb-5">
                <div className="font-mono font-bold text-amber-400 text-xs flex items-center">
                  <span className="w-1 h-3.5 rounded-full bg-amber-400 inline-block mr-2"></span>
                  Review-required
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Output enters a workflow only after required human review.
                </p>
                <p className="text-xs text-gray-400 leading-relaxed pt-1 border-t border-gray-800/60 mt-2">
                  Review must be meaningful, informed and genuinely rejectable &mdash; not a formality.
                </p>
              </div>

              {/* Class 3: Approval-required */}
              <div className="space-y-2 border-b border-gray-800/80 pb-5">
                <div className="font-mono font-bold text-orange-400 text-xs flex items-center">
                  <span className="w-1 h-3.5 rounded-full bg-orange-400 inline-block mr-2"></span>
                  Approval-required
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  A designated authorized person must approve before any consequential action.
                </p>
                <p className="text-xs text-gray-400 leading-relaxed pt-1 border-t border-gray-800/60 mt-2">
                  Approval is attributable and cannot be inferred from inactivity.
                </p>
              </div>

              {/* Class 4: Prohibited */}
              <div className="space-y-2">
                <div className="font-mono font-bold text-rose-400 text-xs flex items-center">
                  <span className="w-1 h-3.5 rounded-full bg-rose-400 inline-block mr-2"></span>
                  Prohibited
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  AI is not permitted to perform the action or use in the stated context.
                </p>
                <p className="text-xs text-gray-400 leading-relaxed pt-1 border-t border-gray-800/60 mt-2">
                  No hidden bypass and no "force anyway" control is exposed anywhere in the UI.
                </p>
              </div>
            </div>

            {/* DESKTOP 4-CLASS AUTHORITY MATRIX TABLE (hidden sm:block) */}
            <div className="hidden sm:block bg-[#0E202B] rounded-2xl border border-gray-800 overflow-hidden mb-8 shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <tbody className="divide-y divide-gray-800/80 text-xs sm:text-sm">
                    <tr className="hover:bg-[#132836] transition-colors">
                      <td className="py-4 px-6 font-mono font-bold text-cyan-400 w-1/4">
                        <span className="w-1 h-3.5 rounded-full bg-cyan-400 inline-block mr-2"></span>
                        Advisory
                      </td>
                      <td className="py-4 px-6 text-gray-300 w-5/12 leading-relaxed">
                        AI may surface or summarize information. The user keeps decision and action authority.
                      </td>
                      <td className="py-4 px-6 text-gray-300 w-1/3 border-l border-gray-800 leading-relaxed">
                        No autonomous consequence is implied or available.
                      </td>
                    </tr>
                    <tr className="hover:bg-[#132836] transition-colors">
                      <td className="py-4 px-6 font-mono font-bold text-amber-400 w-1/4">
                        <span className="w-1 h-3.5 rounded-full bg-amber-400 inline-block mr-2"></span>
                        Review-required
                      </td>
                      <td className="py-4 px-6 text-gray-300 w-5/12 leading-relaxed">
                        Output enters a workflow only after required human review.
                      </td>
                      <td className="py-4 px-6 text-gray-300 w-1/3 border-l border-gray-800 leading-relaxed">
                        Review must be meaningful, informed and genuinely rejectable &mdash; not a formality.
                      </td>
                    </tr>
                    <tr className="hover:bg-[#132836] transition-colors">
                      <td className="py-4 px-6 font-mono font-bold text-orange-400 w-1/4">
                        <span className="w-1 h-3.5 rounded-full bg-orange-400 inline-block mr-2"></span>
                        Approval-required
                      </td>
                      <td className="py-4 px-6 text-gray-300 w-5/12 leading-relaxed">
                        A designated authorized person must approve before any consequential action.
                      </td>
                      <td className="py-4 px-6 text-gray-300 w-1/3 border-l border-gray-800 leading-relaxed">
                        Approval is attributable and cannot be inferred from inactivity.
                      </td>
                    </tr>
                    <tr className="hover:bg-[#132836] transition-colors">
                      <td className="py-4 px-6 font-mono font-bold text-rose-400 w-1/4">
                        <span className="w-1 h-3.5 rounded-full bg-rose-400 inline-block mr-2"></span>
                        Prohibited
                      </td>
                      <td className="py-4 px-6 text-gray-300 w-5/12 leading-relaxed">
                        AI is not permitted to perform the action or use in the stated context.
                      </td>
                      <td className="py-4 px-6 text-gray-300 w-1/3 border-l border-gray-800 leading-relaxed">
                        No hidden bypass and no "force anyway" control is exposed anywhere in the UI.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2-Column Bottom Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Left Card: What makes oversight real rather than ceremonial */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 sm:p-7 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-lg bg-[#182E38] flex items-center justify-center text-gray-300 font-mono text-xs font-bold border border-gray-700">
                      ◉
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      What makes oversight real rather than ceremonial
                    </h3>
                  </div>

                  <div className="divide-y divide-gray-800/80 text-xs sm:text-sm text-gray-300 font-sans">
                    <div className="py-2.5 flex items-start gap-3 first:pt-0">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Competence</strong> &mdash; review is assigned to a role with enough subject, security, legal or privacy competence for the consequence.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Information</strong> &mdash; the reviewer sees the source, evidence, assumptions, limitations, affected scope and proposed action.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Time</strong> &mdash; review happens before the consequential action. Urgency does not silently erase the gate.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Independence</strong> &mdash; separation of duties and recusal are supported where dual control matters.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Override</strong> &mdash; authorized people can change or reject an AI suggestion, and consequential overrides are logged.
                      </span>
                    </div>
                    <div className="py-2.5 flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                      <span className="leading-relaxed">
                        <strong className="text-white font-bold">Rollback</strong> &mdash; actions with side effects expose a reversal or containment path where feasible.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: No dark patterns */}
              <div className="bg-[#11242C] rounded-2xl border border-gray-800 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-9 h-9 rounded-lg bg-[#182E38] flex items-center justify-center text-gray-300 font-mono text-xs font-bold border border-gray-700">
                    ⊘
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    No dark patterns
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">
                    The interface does not preselect "approve", hide limitations behind a generic modal, or use friction to discourage rejection. A limitation callout sits adjacent to the claim it qualifies, always.
                  </p>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans pt-1">
                    Some safeguards are intentionally non-overridable: ordinary administrators cannot bypass designated safety, security or privacy controls. That is a deliberate design constraint, not a gap in configurability.
                  </p>
                </div>

                <div className="pt-4">
                  <a
                    href="#authority"
                    className="px-4 py-2.5 bg-[#16242F] hover:bg-[#1E303D] text-white text-xs font-bold rounded-lg border border-gray-700 shadow-sm transition-all inline-block"
                  >
                    AI decision rights
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: SAFETY, TESTING AND LIMITS (#F4F3EF BACKGROUND) */}
        {/* ========================================================================= */}
        <section id="safety" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200/70">
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                SAFETY, TESTING AND LIMITS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
              Safeguards manage risk. They do not guarantee outcomes.
            </h2>
            <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
              Outputs can be blocked, constrained, escalated, corrected or withdrawn when safety or policy conditions fail. What follows is the honest account of how that works and where it stops.
            </p>
          </div>

          {/* 3-Column Top Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {/* Card 1: Safety controls */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                    ◉
                  </div>
                  <h3 className="text-lg font-bold text-[#151B28]">
                    Safety controls
                  </h3>
                </div>

                <div className="divide-y divide-gray-100 text-xs sm:text-sm text-[#151B28]/80 font-sans">
                  <div className="py-2.5 flex items-start gap-3 first:pt-0">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      Tool invocation stays scoped by identity, permission, policy, decision right and action mode.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      Refusals and blocks return a reason category and a safe next step, where disclosure is safe.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      Emergency containment can pause, disable, narrow or revoke an affected AI capability.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      Abuse and security monitoring is purpose-limited and minimized. It is not marketing profiling.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 text-[11px] font-mono text-gray-600 leading-relaxed space-y-1">
                <strong className="text-gray-800 uppercase block text-[9px] tracking-wider">DELIBERATE OMISSION</strong>
                <span>Prompt-injection defences are described at a high level only. Publishing detail that materially enables a bypass would be the opposite of responsible.</span>
              </div>
            </div>

            {/* Card 2: How evaluation is reported */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                    ⚙️
                  </div>
                  <h3 className="text-lg font-bold text-[#151B28]">
                    How evaluation is reported
                  </h3>
                </div>

                <div className="divide-y divide-gray-100 text-xs sm:text-sm text-[#151B28]/80 font-sans">
                  <div className="py-2.5 flex items-start gap-3 first:pt-0">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Scope</strong> &mdash; feature, model class, data class, role, region and language where relevant.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Method category</strong> &mdash; offline test, synthetic scenario, red team, adversarial test, human review, production monitoring or regression.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Result state</strong> &mdash; passed within scope, conditional, failed, under review, not evaluated, unavailable or superseded.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Limitations</strong> &mdash; blind spots, sparse coverage, context exclusions and freshness.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 text-[11px] font-mono text-gray-600 leading-relaxed space-y-1">
                <strong className="text-gray-800 uppercase block text-[9px] tracking-wider">METRICS</strong>
                <span>A score or pass threshold publishes only when its methodology and interpretation are approved. No benchmark badge appears without one.</span>
              </div>
            </div>

            {/* Card 3: On fairness (Top Red Accent Border) */}
            <div className="bg-white rounded-2xl border-t-4 border-[#C53B3B] border-x border-b border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-mono text-xs font-bold border border-gray-200">
                  ⚡
                </div>
                <h3 className="text-lg font-bold text-[#151B28]">
                  On fairness
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  Bias and error patterns are assessed for specific use cases, with representative scenarios where relevant and lawful, and coverage limits documented. Known population, language and context gaps are published where material and safe to state.
                </p>
                <p className="text-xs text-gray-600 leading-relaxed font-sans pt-1">
                  What is not claimed: that no one can be adversely affected, that the AI is unbiased as a universal property, that one benchmark proves fairness everywhere, or that adding a reviewer eliminates bias. Absence of a known issue is not absence of risk.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Banner Card: When AI is uncertain */}
          <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#151B28]">
              When AI is uncertain, the system gets quieter &mdash; not louder
            </h3>

            <div className="divide-y divide-gray-100 text-xs sm:text-sm text-gray-700 font-sans">
              <div className="py-3 flex items-start gap-3 first:pt-0">
                <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                <span className="leading-relaxed">
                  <strong className="text-[#151B28] font-bold">Inference is labelled</strong> separately from observed fact and from evidence-backed conclusion.
                </span>
              </div>
              <div className="py-3 flex items-start gap-3">
                <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                <span className="leading-relaxed">
                  <strong className="text-[#151B28] font-bold">A missing or restricted source</strong> is stated, along with the limitation it creates.
                </span>
              </div>
              <div className="py-3 flex items-start gap-3">
                <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                <span className="leading-relaxed">
                  <strong className="text-[#151B28] font-bold">Conflicting sources</strong> stay visible. One is not silently chosen without a governed rule or a human decision.
                </span>
              </div>
              <div className="py-3 flex items-start gap-3">
                <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                <span className="leading-relaxed">
                  <strong className="text-[#151B28] font-bold">Citation failure</strong> withholds or degrades the claim. A source is never fabricated to support it.
                </span>
              </div>
              <div className="py-3 flex items-start gap-3">
                <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                <span className="leading-relaxed">
                  <strong className="text-[#151B28] font-bold">Stale evidence</strong> shows its captured or reviewed time wherever staleness changes the interpretation.
                </span>
              </div>
              <div className="py-3 flex items-start gap-3">
                <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                <span className="leading-relaxed">
                  <strong className="text-[#151B28] font-bold">Degraded and fallback states</strong> disclose what may be less complete &mdash; and never quietly reduce privacy, security or decision-right controls.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: CHANGE AND VERSIONING (#F4F3EF BACKGROUND) */}
        {/* ========================================================================= */}
        <section id="versioning" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200/70">
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                CHANGE AND VERSIONING
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
              A model change can invalidate yesterday's disclosure.
            </h2>
            <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
              So each material change carries a review trigger and a public effect. Records are versioned; corrections keep their history; nothing is quietly updated in place.
            </p>
          </div>

          {/* 9-Row Change & Versioning Matrix Table */}
          <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[750px]">
                <thead>
                  <tr className="bg-[#EBE7DF] text-[#151B28] text-[11px] font-mono font-bold uppercase tracking-wider border-b border-gray-300/70">
                    <th className="py-4 px-6 w-1/4">CHANGE TYPE</th>
                    <th className="py-4 px-6 w-5/12">REVIEW TRIGGER</th>
                    <th className="py-4 px-6 w-1/3 border-l border-gray-300/70">PUBLIC EFFECT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200/80 text-xs sm:text-sm">
                  {CHANGE_VERSIONING_DATA.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-3.5 px-6 font-mono font-bold text-[#151B28]">
                        {item.type}
                      </td>
                      <td className="py-3.5 px-6 text-gray-600 leading-relaxed font-sans">
                        {item.trigger}
                      </td>
                      <td className="py-3.5 px-6 text-gray-700 border-l border-gray-200/80 leading-relaxed font-sans">
                        {item.highlightEffect ? (
                          <strong className="text-[#151B28] font-bold">{item.effect}</strong>
                        ) : (
                          item.effect
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
            Recovered is only published after verification passes. "Resolved" is not used ahead of the checks that justify it.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: CONCERNS AND INCIDENT POSTURE (#F4F3EF BACKGROUND) */}
        {/* ========================================================================= */}
        <section id="concerns" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200/70">
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                CONCERNS AND INCIDENT POSTURE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
              Report it here. It does not go to sales.
            </h2>
            <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
              The AI concern route is a trust and safety function. It requires no demo interest, company size, budget, lead scoring, newsletter consent or meeting booking &mdash; and its content is excluded from marketing analytics.
            </p>
          </div>

          {/* 7-Row Concern Routing Matrix Container */}
          <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden divide-y divide-gray-100 text-xs sm:text-sm mb-6">
            {/* Row 1: Security vulnerability or prompt injection (RED ACCENT) */}
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-l-4 border-[#C53B3B] bg-rose-50/20">
              <div className="font-bold text-[#151B28] sm:w-1/3">
                Security vulnerability or prompt injection
              </div>
              <div className="text-gray-600 sm:w-1/2">
                Coordinated disclosure. Please don't include public exploit detail in an open channel.
              </div>
              <div className="sm:w-1/5 text-left sm:text-right">
                <a href="#concerns" className="text-[#E0533C] font-mono text-xs font-bold hover:underline">
                  Vulnerability Disclosure &rarr;
                </a>
              </div>
            </div>

            {/* Row 2: Harmful or unsafe output */}
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="font-bold text-[#151B28] sm:w-1/3">
                Harmful or unsafe output
              </div>
              <div className="text-gray-600 sm:w-1/2">
                Goes to AI governance and safety. The affected capability can be contained if required.
              </div>
              <div className="sm:w-1/5 text-left sm:text-right">
                <a href="#concerns" className="text-[#E0533C] font-mono text-xs font-bold hover:underline">
                  Report a safety concern &rarr;
                </a>
              </div>
            </div>

            {/* Row 3: Incorrect or unsupported output */}
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="font-bold text-[#151B28] sm:w-1/3">
                Incorrect or unsupported output
              </div>
              <div className="text-gray-600 sm:w-1/2">
                Product and quality review. Source, version and context are preserved, and affected records are corrected where material.
              </div>
              <div className="sm:w-1/5 text-left sm:text-right">
                <a href="#concerns" className="text-[#E0533C] font-mono text-xs font-bold hover:underline">
                  Report an accuracy concern &rarr;
                </a>
              </div>
            </div>

            {/* Row 4: Bias or accessibility impact */}
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="font-bold text-[#151B28] sm:w-1/3">
                Bias or accessibility impact
              </div>
              <div className="text-gray-600 sm:w-1/2">
                Responsible AI review, with accessibility, privacy or legal involvement depending on the context.
              </div>
              <div className="sm:w-1/5 text-left sm:text-right">
                <a href="#concerns" className="text-[#E0533C] font-mono text-xs font-bold hover:underline">
                  Report an impact concern &rarr;
                </a>
              </div>
            </div>

            {/* Row 5: Privacy or data exposure */}
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="font-bold text-[#151B28] sm:w-1/3">
                Privacy or data exposure
              </div>
              <div className="text-gray-600 sm:w-1/2">
                Privacy and Security incident process. Rights and notification depend on verified facts and applicable law.
              </div>
              <div className="sm:w-1/5 text-left sm:text-right">
                <a href="#concerns" className="text-[#E0533C] font-mono text-xs font-bold hover:underline">
                  Privacy contact &rarr;
                </a>
              </div>
            </div>

            {/* Row 6: Unauthorized action or decision-right breach */}
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="font-bold text-[#151B28] sm:w-1/3">
                Unauthorized action or decision-right breach
              </div>
              <div className="text-gray-600 sm:w-1/2">
                Security and governance review. The action path is contained and approval evidence is preserved.
              </div>
              <div className="sm:w-1/5 text-left sm:text-right">
                <a href="#concerns" className="text-[#E0533C] font-mono text-xs font-bold hover:underline">
                  Report an authority concern &rarr;
                </a>
              </div>
            </div>

            {/* Row 7: Something in this page is wrong */}
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="font-bold text-[#151B28] sm:w-1/3">
                Something in this page is wrong
              </div>
              <div className="text-gray-600 sm:w-1/2">
                Public transparency corrections go through content, governance and legal review, with the correction history kept.
              </div>
              <div className="sm:w-1/5 text-left sm:text-right">
                <a href="#concerns" className="text-[#E0533C] font-mono text-xs font-bold hover:underline">
                  Report a disclosure error &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Middle Card: What the intake asks for */}
          <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-3 mb-6">
            <h3 className="text-base sm:text-lg font-bold text-[#151B28]">
              What the intake asks for &mdash; and what it won't
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
              A concern category, the affected feature (including "not sure"), what happened, roughly when, and an impact description. Contact details are optional where the route allows it. Please leave out secrets, credentials and any personal or sensitive data that isn't necessary to understand the problem.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans pt-1">
              No response-time commitment is published, because none is approved. You receive an acknowledgement and a reference where the system supports one. Consent is specific to processing your concern &mdash; marketing consent is never bundled into it.
            </p>
          </div>

          {/* Bottom Card: Why there are no incident statistics (RED ACCENT LEFT BORDER) */}
          <div className="bg-white rounded-2xl border-l-4 border-[#C53B3B] border-t border-r border-b border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-[#151B28]">
              Why there are no incident statistics on this page
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
              Incident counts, severity distributions, root causes, response times, customer impact figures and notification commitments publish only when the underlying incident, legal and disclosure authorities approve those specific facts. Until then, unknown is the honest answer &mdash; and a better one than premature certainty.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: SHARED RESPONSIBILITY (#F4F3EF BACKGROUND) */}
        {/* ========================================================================= */}
        <section id="responsibility" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200/70">
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                SHARED RESPONSIBILITY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151B28]">
              Governing AI is not a single party's job.
            </h2>
            <p className="text-sm sm:text-base text-[#151B28]/70 max-w-3xl leading-relaxed">
              Public disclosure is not the same thing as your internal control design, and ZoikoShield does not replace your accountable roles.
            </p>
          </div>

          {/* 4x2 Grid of 8 Responsibility Roles */}
          <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm overflow-hidden mb-8 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-gray-200">
            {SHARED_ROLES.map((r, idx) => (
              <div
                key={idx}
                className={`p-6 space-y-2 ${
                  idx % 2 === 0 ? "md:border-r border-gray-200" : ""
                } ${idx >= 2 ? "border-t border-gray-200" : ""}`}
              >
                <span className="text-[#E0533C] font-mono text-[10px] font-bold uppercase tracking-wider block">
                  {r.category}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-[#151B28]">
                  {r.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 2-Column Bottom Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Card: Separation of duties */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#151B28]">
                  Separation of duties
                </h3>

                <div className="divide-y divide-gray-100 text-xs sm:text-sm text-[#151B28]/80 font-sans">
                  <div className="py-2.5 flex items-start gap-3 first:pt-0">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Build vs approve</strong> &mdash; a material AI change is not self-approved by its implementer where policy requires independent review.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Operate vs audit</strong> &mdash; auditor and reviewer access can be read-only and independent.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Suggestion vs action</strong> &mdash; an AI suggestion is never treated as an approval or an authorization.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Sales vs intake</strong> &mdash; safety, security and privacy routes never depend on commercial qualification.
                    </span>
                  </div>
                  <div className="py-2.5 flex items-start gap-3">
                    <span className="w-3.5 h-3.5 rounded-[3px] border-2 border-[#E0533C] mt-0.5 shrink-0"></span>
                    <span className="leading-relaxed">
                      <strong className="text-[#151B28] font-bold">Marketing vs trust claims</strong> &mdash; marketing cannot publish an AI assurance claim without evidence and owner approval.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: For enterprise review and procurement */}
            <div className="bg-white rounded-2xl border border-gray-300/80 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-[#151B28]">
                  For enterprise review and procurement
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  Which AI features are active, which providers process data, whether AI can be disabled or restricted, and what evaluation evidence exists &mdash; these are answerable. The public inventory covers what can be public; controlled evidence requires authorization and does not expose customer or security-sensitive data.
                </p>
              </div>

              <div className="space-y-2 pt-3">
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="/about"
                    className="px-5 py-2.5 bg-white hover:bg-gray-50 text-[#151B28] text-xs font-bold rounded-lg border border-gray-300 shadow-sm transition-all inline-block"
                  >
                    Trust Center
                  </a>
                  <a
                    href="/security"
                    className="px-5 py-2.5 bg-white hover:bg-gray-50 text-[#151B28] text-xs font-bold rounded-lg border border-gray-300 shadow-sm transition-all inline-block"
                  >
                    Security Practices
                  </a>
                </div>
                <div>
                  <button
                    onClick={() => setIsDemoModalOpen(true)}
                    className="px-5 py-2.5 bg-white hover:bg-gray-50 text-[#151B28] text-xs font-bold rounded-lg border border-gray-300 shadow-sm transition-all inline-block"
                  >
                    Request evidence pack
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 10: DIRECT ANSWERS (FAQ ACCORDION IN #EFECE6 WARM BEIGE) */}
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
                The questions that decide whether this page is worth anything.
              </h2>
            </div>

            {/* FAQ Accordion Container */}
            <div className="bg-white rounded-2xl border border-gray-300/80 shadow-sm divide-y divide-gray-200/80 mb-8">
              {RESPONSIBLE_AI_FAQS.map((faq, idx) => {
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
        {/* SECTION 11: GO DEEPER (SCOPE CTA BANNER WITH EXACT GRADIENT BACKGROUND) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#071829] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3D2131] via-[#161B29]/70 to-[#071829] text-white py-16 sm:py-24 border-t border-gray-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#E0533C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0533C] font-mono">
                GO DEEPER
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
              Check the controls. Then hold us to them.
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              The product-level governance detail sits in AI Security & Governance; the decision-right taxonomy sits with it. If something here is wrong, incomplete or out of date, the correction route is open to anyone.
            </p>

            {/* Action Buttons Stack */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto w-full pt-4">
              <a
                href="#capabilities"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#E0533C] hover:bg-[#c94530] text-white font-bold text-sm rounded-lg transition-all shadow-md text-center"
              >
                Explore AI Security & Governance
              </a>
              <a
                href="#concerns"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#16202A] hover:bg-[#1E2B38] text-white font-semibold text-sm rounded-lg border border-gray-700 transition-all shadow-sm text-center"
              >
                Report an AI Concern
              </a>
              <a
                href="/about"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#16202A] hover:bg-[#1E2B38] text-white font-semibold text-sm rounded-lg border border-gray-700 transition-all shadow-sm text-center"
              >
                Visit the Trust Center
              </a>
            </div>

            {/* Mobile Monospace Footnote (block sm:hidden) */}
            <p className="block sm:hidden font-mono text-[10px] text-gray-400 leading-relaxed max-w-xs mx-auto text-center pt-6">
              Availability, providers, data handling, evaluation results and control details vary by approved feature, deployment, region and contract. This page states only verified public facts.
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
