import React from "react";

const faqItems = [
  {
    question: "How do I troubleshoot an 'unhealthy' EDR agent state?",
    answer:
      "Verify the CrowdStrike Falcon or Defender local sensor is active, has verified outbound connectivity to its primary console, and that your API credentials have permission-scoped read limits active on Zoiko Shield.",
  },
  {
    question: "What is 'Entitlement Unknown' on the support panel?",
    answer:
      "This state indicates your local tenant session cannot resolve live contract parameters. Support remains fully available for high-severity telemetry conflicts via manual verification.",
  },
  {
    question: "How does the dual-party approval safeguard work?",
    answer:
      "Host isolation and policy write actions cannot execute from a single analyst session. The request generates an approval webhook that must be cryptographically signed by an authorized supervisor.",
  },
];

export default function ArchitecturalFaqs() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-6">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            ARCHITECTURAL FAQS
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[32px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Detailed integration constraints, posture conflicts, and dual-party
            approval details.
          </p>
        </div>

        {/* FAQ Cards List */}
        <div className="flex flex-col gap-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB]"
            >
              <h3 className="text-base md:text-lg font-bold text-[#111827] tracking-tight mb-3">
                {item.question}
              </h3>
              <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
