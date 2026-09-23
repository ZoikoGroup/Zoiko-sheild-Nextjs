"use client";

import React, { useState } from "react";
import SectionEyebrow from "./SectionEyebrow";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What does 'prove controls continuously' mean?",
    answer:
      "Instead of collecting evidence manually once a year, Zoiko connects directly to your operational tools via APIs and collectors, fetching and signing evidence automatically on configurable schedules (e.g. daily, hourly).",
  },
  {
    question: "Can every compliance control be automated?",
    answer:
      "No. High-impact human actions, board policies, and manual GRC approvals cannot be deterministically evaluated by machine APIs. Zoiko tracks these via hybrid assessments and explicit reviewer sign-offs.",
  },
  {
    question: "Does mapped mean compliant?",
    answer:
      "Absolutely not. Mapped indicates a mathematical or analytical relationship between a framework requirement and an operational control. True compliance requires the control test to pass against fresh, valid evidence.",
  },
  {
    question: "What happens when evidence becomes stale or delayed?",
    answer:
      "Zoiko instantly flags the posture state on the dashboard as 'Stale' or 'Delayed.' We do not assume compliance in the absence of telemetry. Posture returns to green only upon a successful cryptographic sync.",
  },
];

export default function ProveControlsFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F0EDE6] px-6 py-20 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start gap-4">
          <SectionEyebrow text="FAQ" />
          <h2 className="font-hanken text-[28px] font-extrabold tracking-[-0.0222em] text-[#0A2029] sm:text-[36px]">
            Architecture, mapping, and compliance questions answered
          </h2>
          <p className="max-w-3xl font-manrope text-[16px] font-medium leading-[1.5em] text-[#5B6670]">
            Substantive answers to standard questions from compliance directors, security architects, and audit partners.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-[12px] border border-[rgba(18,59,76,0.1)] bg-white transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-hanken text-[18px] font-extrabold text-[#0A2029]">
                    {faq.question}
                  </h3>
                  <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F0EDE6] text-[#0A2029] transition-transform duration-200">
                    <svg
                      className={`h-4 w-4 transform transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer content (visible when expanded, with smooth style) */}
                <div
                  className={`px-6 pb-6 pt-0 transition-all ${
                    isOpen ? "block" : "hidden sm:block"
                  }`}
                >
                  <p className="font-manrope text-[14px] leading-relaxed text-[#5B6670]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
