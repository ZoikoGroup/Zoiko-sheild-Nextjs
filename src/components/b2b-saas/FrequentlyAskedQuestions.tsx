import React from "react";

const faqList = [
  {
    question: "What is ZoikoShield for B2B SaaS, cloud and AI?",
    answer:
      "A sector route connecting trust, assurance, AI governance and security operations.",
  },
  {
    question: "Does it certify enterprise readiness?",
    answer:
      "No. It organizes scoped evidence and governed review; it does not certify readiness.",
  },
  {
    question: "Does it cover every cloud or provider?",
    answer:
      "No universal provider coverage is claimed; approved scope and gaps remain visible.",
  },
  {
    question: "Does it guarantee tenant isolation?",
    answer:
      "No blanket guarantee. Architecture, evidence, shared responsibility and limitations are reviewed in scope.",
  },
  {
    question: "Can it help customer security reviews?",
    answer:
      "It can organize current evidence, Trust and assurance where approved; the customer decides sufficiency.",
  },
  {
    question: "How does it govern AI?",
    answer:
      "Through inventory, provider/data-use records, controls, evaluations, decision rights, change, incidents and oversight.",
  },
  {
    question: "Does evaluation prove safety?",
    answer:
      "No. An evaluation is a scoped result for an exact subject, method, dataset and date.",
  },
  {
    question: "Can AI act automatically?",
    answer:
      "Only under explicit decision rights and tool permissions. Consequential actions may need review or approval; prohibited and unknown states fail closed.",
  },
  {
    question: "Does evidence prove compliance?",
    answer:
      "No. Evidence supports review but is not certification, compliance, attestation or guaranteed acceptance.",
  },
  {
    question: "Does this page promise 24/7 security operations?",
    answer:
      "No. Availability and entitlements require exact service authority and scope.",
  },
  {
    question: "What should an existing customer do during an incident?",
    answer:
      "Use Support for customer help and Status for an active service issue-not the marketing form.",
  },
];

export default function FrequentlyAskedQuestions() {
  return (
    <div className="bg-[#F7F5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="max-w-3xl mb-10">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight">
            Controlled answers for enterprise review.
          </h1>
        </div>

        {/* FAQ Container Box with internal divider lines */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] divide-y divide-[#E5E7EB] overflow-hidden">
          {faqList.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 px-6 py-5 items-center gap-4"
            >
              <div className="md:col-span-5 text-sm font-bold text-[#111827]">
                {item.question}
              </div>
              <div className="md:col-span-7 text-xs md:text-sm text-[#4B5563] leading-relaxed">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
