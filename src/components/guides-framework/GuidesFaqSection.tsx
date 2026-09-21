"use client";

import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Are Zoiko Shield mappings officially certified by NIST or CIS?",
    answer:
      "No. All mappings provided are educational resources authored by our security architects. They are non-authoritative and not certifications of conformance.",
  },
  {
    question: "Can we use these checklists directly for SOC 2 or ISO 27001 attestation?",
    answer:
      "Checklists and spreadsheets on this hub are designed for operational readiness assessments. Attestation must be executed by a formal accredited auditor.",
  },
  {
    question: "How often are the source cybersecurity frameworks synchronized?",
    answer:
      "We run automated update tracking monitors every 24 hours. When a source standard is updated or superseded, the freshness matrix is flagged immediately.",
  },
];

export const GuidesFaqSection: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-[#ECE8E1] border-b border-cyan-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-normal leading-relaxed">
            Understanding mapping exactness, certification boundaries, and document licensing limits.
          </p>
        </div>

        {/* 3 FAQ Cards */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:px-8 sm:py-6 border border-black/[0.04] shadow-xs flex flex-col justify-start items-start gap-2"
            >
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-sans leading-snug">
                {faq.question}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
