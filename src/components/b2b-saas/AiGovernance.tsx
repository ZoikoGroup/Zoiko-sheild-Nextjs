import React from "react";

const topTabs = [
  { number: "01", title: "Use case", active: false },
  { number: "02", title: "Provider and data", active: false },
  { number: "03", title: "Evaluation", active: false },
  { number: "04", title: "Decision right", active: false },
  { number: "05", title: "Human review", active: true },
];

const decisionCards = [
  {
    title: "Advisory",
    description:
      "Proposes with sources and limitations. Permission · sources · proposed changes · approver · expiry · stop/ rollback · receipts",
  },
  {
    title: "Review-required",
    description:
      "Human review before consequential use. Permission · sources · proposed changes · approver · expiry · stop/ rollback · receipts",
  },
  {
    title: "Approval-required",
    description:
      "Named approver and expiry required. Permission · sources · proposed changes · approver · expiry · stop/ rollback · receipts",
  },
  {
    title: "Prohibited",
    description:
      "Tool or action is blocked. Permission · sources · proposed changes · approver · expiry · stop/rollback · receipts",
  },
];

export default function AiGovernance() {
  return (
    <div className="bg-[#F7F5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="max-w-3xl mb-10">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            AI GOVERNANCE
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight">
            Govern AI by use case, evidence and decision rights.
          </h1>
        </div>

        {/* Top 5 Horizontal Tabs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {topTabs.map((tab, index) => (
            <div
              key={index}
              className={`rounded-2xl p-4 border flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-colors ${
                tab.active
                  ? "bg-[#123B4C] border-[#111827] text-white"
                  : "bg-white border-[#E5E7EB] text-[#111827]"
              }`}
            >
              <span
                className={`text-xs font-mono font-bold mb-3 ${tab.active ? "text-[#5FE3C5]" : "text-[#C53030]"}`}
              >
                {tab.number}
              </span>
              <span className="text-sm font-bold tracking-tight">
                {tab.title}
              </span>
            </div>
          ))}
        </div>

        {/* 3 Columns Section: Use Case, Provider, Coverage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Card 1: Use case */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB]">
            <h3 className="text-base font-bold text-[#111827] tracking-tight mb-3">
              Use case · support drafting
            </h3>
            <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
              State: declared · Purpose: draft operator summaries · Owner: AI
              governance · Roles: analysts · Scope: approved product, tenant and
              workflow · Provider/model ref + version · Data-use profile ·
              Evaluation: under review · Next review recorded
            </p>
          </div>

          {/* Card 2: Provider and data use */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB]">
            <h3 className="text-base font-bold text-[#111827] tracking-tight mb-3">
              Provider and data use
            </h3>
            <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
              Identity · deployment/version · routing · shared data/ purpose ·
              feature/provider/contract training rules · retention/deletion
              authority · residency semantics · subprocessor authority ·
              provider-change review
            </p>
          </div>

          {/* Card 3: Coverage states */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB]">
            <h3 className="text-base font-bold text-[#111827] tracking-tight mb-3">
              Coverage states
            </h3>
            <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
              Declared · connected · discovered · third-party · unknown.
              Discovery is never presented as complete.
            </p>
          </div>
        </div>

        {/* Scoped Evaluation Record Banner */}
        <div className="bg-[#F0EDE6] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] mb-6 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#111827] tracking-tight">
              Scoped evaluation record
            </h3>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FEF7E0] text-[#B06000]">
              UNDER REVIEW
            </span>
          </div>
          <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
            Exact subject/version · method/version · dataset/source/population ·
            metric definition/denominator · governed threshold if any · reviewer
            · result · limitations/uncertainty · date
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-mono text-[#C53030] pt-1">
            <span>Passed in scope</span>
            <span>·</span>
            <span>Conditional</span>
            <span>·</span>
            <span>Failed</span>
            <span>·</span>
            <span>Under review</span>
            <span>·</span>
            <span>Not evaluated</span>
            <span>·</span>
            <span>Superseded</span>
          </div>
        </div>

        {/* 4 Decision Rights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {decisionCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-[#111827] tracking-tight mb-3">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Warning Banner */}
        <div className="bg-[#F8EBEB] border border-[#F4DCDD] rounded-2xl p-6 space-y-2">
          <p className="text-xs md:text-sm font-bold text-[#111827]">
            Unknown or unresolved is fail-closed—not a fifth autonomy class. AI
            cannot self-review or self-approve.
          </p>
          <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
            Reviews cover prompt injection, data exfiltration, tool misuse,
            secret exposure, cross-tenant leakage, provider compromise, unsafe
            output/hallucination, adversarial evaluation, recourse/correction
            and human oversight. Explore /platform/ai and relevant anchors.
          </p>
        </div>
      </div>
    </div>
  );
}
