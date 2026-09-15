"use client";

import React from "react";
import SectionEyebrow from "./SectionEyebrow";

const FAQS: { question: string; answer: string }[] = [
  {
    question: "What is ZoikoShield Continuous Assurance?",
    answer:
      "An active assurance-led starting path; exact scope follows approved service authority.",
  },
  {
    question: "Is Continuous Assurance the same as Managed Defense?",
    answer:
      "No. They are independent peer starting paths; neither is prerequisite.",
  },
  {
    question: "Does Continuous Assurance certify compliance?",
    answer: "No certification, regulator approval or guaranteed compliance.",
  },
  {
    question: "Can it use ZoikoShield evidence?",
    answer:
      "It may connect to governed Evidence and Compliance when authorized.",
  },
  {
    question: "Does it perform an independent audit?",
    answer: "We do not claim this unless the independence model is approved.",
  },
  {
    question: "Which frameworks are covered?",
    answer: "Framework Coverage is a separate conditional destination.",
  },
  {
    question: "Is the service continuous 24/7?",
    answer: "The source does not define cadence; we do not infer it from the name.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-[#F5F2EB] px-5 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <SectionEyebrow label="Frequently asked questions" tone="red" />

        <h2 className="mb-8 font-hanken text-2xl font-extrabold leading-tight tracking-tight text-[#0B2530] sm:text-3xl lg:text-4xl">
          Clear answers, without overclaiming.
        </h2>

        <dl className="border-t border-[#0B2530]/10">
          {FAQS.map((faq, index) => (
            <div
              key={faq.question}
              className="grid grid-cols-1 gap-2 border-b border-[#0B2530]/10 py-5 md:grid-cols-12 md:gap-6"
            >
              <span
                className="font-jetbrains text-[11px] text-[#C53B3B] md:col-span-1"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <dt className="font-hanken text-base font-bold leading-6 text-[#0B2530] md:col-span-5">
                {faq.question}
              </dt>
              <dd className="font-manrope text-sm leading-6 text-[#6B7280] md:col-span-6">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
