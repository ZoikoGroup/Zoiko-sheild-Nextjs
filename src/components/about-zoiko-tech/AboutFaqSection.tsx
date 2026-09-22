"use client";

import React from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What is Zoiko Tech, and what is the company behind Zoiko Shield?",
    answer:
      "Zoiko Tech Inc. is the official corporate entity that owns, develops, and operates the Zoiko Shield platform. Established in 2026, we focus entirely on modern compliance and cybersecurity architectures for regulated enterprises.",
  },
  {
    question: "How does Zoiko Shield ensure data isolation and least privilege?",
    answer:
      "We support strictly bounded Read-Only credential connections to ingest device posture and identity directories, ensuring no standing write capabilities can compromise active registry boundaries.",
  },
  {
    question: "Where are Zoiko Tech's global corporate offices registered?",
    answer:
      "Zoiko Tech Inc.'s global headquarters is located in Sacramento, California, US. Our European headquarters operates in London, United Kingdom. Complete legal registration documents are available via the trust center.",
  },
];

export const AboutFaqSection: React.FC = () => {
  return (
    <section className="w-full bg-stone-100 border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <div className="w-6 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Architecture &amp; Corporate Facts
          </h2>
        </div>

        {/* 3 FAQ Cards */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 shadow-xs flex flex-col justify-start items-start gap-3 transition-all hover:bg-stone-50"
            >
              <h3 className="text-slate-900 text-base sm:text-lg font-extrabold font-['Hanken_Grotesk']">
                {faq.question}
              </h3>
              <p className="text-gray-500 text-sm font-normal font-['Manrope'] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
