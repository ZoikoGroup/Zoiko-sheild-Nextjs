"use client";

import React from "react";
import { Eyebrow } from "./shared";

const FAQS = [
  {
    question: "How does the dispatch dispatcher ensure high-trust routing?",
    answer:
      "Every request is assigned a persistent ledger reference. Requests matching security or vulnerability classes are routed over encrypted PGP queues to safeguard infrastructure borders.",
  },
  {
    question: "What is the guaranteed response time across standard routes?",
    answer:
      "Enterprise customer support contracts guarantee SLAs starting under 1 hour for P1 outages. General inquiries or procurement onboardings have a standard SLA of 24-48 business hours.",
  },
  {
    question: "Are PGP keys mandatory for security vulnerability reporting?",
    answer:
      "Yes. To maintain secure chain of custody, unpatched remote exploit details must be encrypted with our verified public key prior to upload.",
  },
];

export const ContactFaqSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F0EDE6] py-16 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-28">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="space-y-4">
          <Eyebrow>13 · ARCHITECTURE &amp; ROUTING FAQ</Eyebrow>
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-hanken leading-tight">
            Frequently Asked Operations Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div
              key={faq.question}
              className="p-5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-cyan-950/10 flex flex-col gap-2"
            >
              <h3 className="text-slate-900 text-base font-bold font-hanken">{faq.question}</h3>
              <p className="text-gray-500 text-sm font-manrope leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
