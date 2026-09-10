"use client";

import React, { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What does 'Govern AI Risk' mean?",
    answer:
      "Create an inspectable operating model for AI inventory, risks, controls, evaluations, transparency, change and human oversight.",
  },
  {
    id: "faq-2",
    question: "Does ZoikoShield assign one AI risk score?",
    answer:
      "No. ZoikoShield avoids simplistic single-score metrics. Instead, it tracks specific controls, evidence records, evaluation results, and human decision rights in context.",
  },
  {
    id: "faq-3",
    question: "Can ZoikoShield identify every AI system automatically?",
    answer:
      "ZoikoShield integrates with discovery pipelines and model registries to detect AI assets, paired with human-in-the-loop verification to ensure complete inventory coverage.",
  },
  {
    id: "faq-4",
    question: "Does an evaluation prove an AI system is safe?",
    answer:
      "Evaluations measure specific benchmarks and datasets, but cannot guarantee universal safety. ZoikoShield explicitly attaches known limitations to every evaluation record.",
  },
  {
    id: "faq-5",
    question: "Who makes consequential AI decisions?",
    answer:
      "Accountable people do. Decision rights explicitly designate human authorities for advisory, review-required, approval-required, or prohibited use cases.",
  },
  {
    id: "faq-6",
    question: "Does this make us compliant with AI laws?",
    answer:
      "ZoikoShield provides the structured evidence, traceability, and controls required by major AI frameworks, though ultimate legal compliance remains subject to corporate oversight.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C44242]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
              FAQ
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#0F172A] tracking-tight mb-4 leading-[1.2]">
            Clear answers, without overclaiming.
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            The operating model records scope, authority and limitations so
            governance statements remain specific and inspectable.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? "bg-white border-[#E2E8F0] shadow-md"
                    : "bg-[#F0EDE6] border-transparent hover:border-[#E2E8F0]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-5 flex items-start gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-[#C44242] font-mono text-base font-bold select-none shrink-0 leading-none mt-0.5">
                    {isOpen ? "−" : "+"}
                  </span>

                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                      {faq.question}
                    </h3>

                    {isOpen && (
                      <p className="text-xs sm:text-sm text-[#64748B] font-normal leading-relaxed mt-2">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
