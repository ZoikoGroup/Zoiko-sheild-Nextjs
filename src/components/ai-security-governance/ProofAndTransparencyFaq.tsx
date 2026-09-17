import React from "react";

const trustCards = [
  {
    title: "Trust Center",
    link: "/trust",
  },
  {
    title: "Evidence",
    link: "/platform/evidence",
  },
  {
    title: "Docs",
    link: "docs.zoikoshield.com",
  },
  {
    title: "System Status",
    link: "status.zoikoshield.com",
  },
];

const faqItems = [
  {
    question: "How does ZoikoShield govern AI?",
    answer:
      "AI is bounded, cited and overridable, with explicit AI-risk controls.",
  },
  {
    question: "What AI decision rights?",
    answer: "Advisory, review-required, approval-required and prohibited.",
  },
  {
    question: "Can AI take autonomous actions?",
    answer:
      "We do not claim autonomous decision or execution. Actions inherit permission, decision-right and Governed Response authority.",
  },
  {
    question: "What does Investigation Assistant do?",
    answer:
      "Grounded assistance with tools, approvals and deterministic fallback; exact capabilities are governed.",
  },
  {
    question: "What if AI is unavailable or ungrounded?",
    answer:
      "Use an approved deterministic/manual fallback; never fabricate sources or broaden capability.",
  },
  {
    question: "Which model?",
    answer: "The source does not specify. Claims require authority.",
  },
  {
    question: "Customer data used to train?",
    answer: "The source does not answer; use authoritative disclosures.",
  },
  {
    question: "Is it compliant?",
    answer:
      "There is no universal claim; obligations are scoped and authority-specific.",
  },
];

export default function ProofAndTransparencyFaq() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Section 1 Header: Proof and Transparency */}
        <div className="max-w-3xl mb-10">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            PROOF AND TRANSPARENCY
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Verify through authoritative destinations.
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Privacy and security disclosures remain connected to their
            authoritative routes. No provider badge wall, no borrowed assurance.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {trustCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-[#111827] tracking-tight mb-2">
                  {card.title}
                </h3>
                <p className="text-xs font-mono text-[#4B5563]">{card.link}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2 Header: FAQ */}
        <div className="max-w-3xl mb-10">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111827] leading-tight">
            Clear answers, controlled claims.
          </h2>
        </div>

        {/* FAQ List / Table Rows */}
        <div className="w-full divide-y divide-[#E5E7EB] border-t border-b border-[#E5E7EB]">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 py-5 gap-4 items-center"
            >
              <div className="md:col-span-5 text-sm font-bold text-[#111827]">
                {item.question}
              </div>
              <div className="md:col-span-7 text-xs md:text-sm text-[#4B5563]">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
