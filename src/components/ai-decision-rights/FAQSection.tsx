import React from "react";

const faqItems = [
  {
    question: "What are the classes?",
    answer:
      "Advisory, review-required, approval-required and prohibited - exactly four policy categories.",
  },
  {
    question: "Are they autonomy levels?",
    answer:
      "No. They are policy categories, not maturity levels or a low-to-high progression.",
  },
  {
    question: "Can AI approve itself?",
    answer: "No. AI cannot review or approve itself, or change its own class.",
  },
  {
    question: "Does write access mean AI may act?",
    answer:
      "No. Technical write access does not create organizational authority.",
  },
  {
    question: "What happens when class is unknown?",
    answer: "The experience fails closed or routes to approved review.",
  },
  {
    question: "Does approval authorize response execution?",
    answer: "No. Governed Response and R0-R4 authority remain separate.",
  },
  {
    question: "Can confidence or urgency bypass approval?",
    answer:
      "No. Confidence, urgency, silence and tool availability never imply approval.",
  },
];

export default function FAQSection() {
  return (
    <div className="bg-[#F7F5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            FAQ
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight">
            The boundaries, in plain language.
          </h1>
        </div>

        {/* FAQ Rows Container */}
        <div className="flex flex-col gap-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl px-6 md:px-8 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="md:w-1/3">
                <h3 className="text-sm md:text-base font-bold text-[#111827] tracking-tight">
                  {item.question}
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
