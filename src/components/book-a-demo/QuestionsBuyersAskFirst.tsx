"use client"
import React, { useState } from "react";

const faqs = [
  {
    question: "What will I see in the ZoikoShield demo?",
    answer:
      "A guided security workflow covering detection, investigation, governed AI assistance, controlled response, and security evidence. The specific areas shown depend on your evaluation priorities.",
  },
  {
    question: "Can the demo be tailored to our industry?",
    answer:
      "Yes, our walkthroughs can be tailored to align with specific sector compliance guidelines, risk profiles, and operational workflows.",
  },
  {
    question: "Do we need to connect production systems?",
    answer:
      "No, demonstrations utilize simulated, synthetic environments and workflows to ensure zero risk to your live production architecture.",
  },
  {
    question: "Can we discuss governance and audit requirements?",
    answer:
      "Absolutely. Our team is fully prepared to review access governance, evidence hashing, and compliance verification standards during your session.",
  },
  {
    question: "Is the demo a free trial or a confirmed meeting?",
    answer:
      "The demo is a scheduled consultative meeting with our security specialists rather than an automated instant trial.",
  },
];

export default function QuestionsBuyersAskFirst() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            BEFORE YOU BOOK
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111827]">
            Questions buyers ask first
          </h1>
        </div>

        {/* FAQ Accordion List */}
        <div className="border-t border-[#E5E7EB] divide-y divide-[#E5E7EB]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group"
                >
                  <h3 className="text-base md:text-lg font-bold text-[#111827] tracking-tight group-hover:text-[#C53030] transition-colors">
                    {faq.question}
                  </h3>
                  <span
                    className={`text-lg font-mono font-bold transition-colors ml-4 ${isOpen ? "text-[#C53030]" : "text-[#6B7280]"}`}
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-3 pr-8">
                    <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
