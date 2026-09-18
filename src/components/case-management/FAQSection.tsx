"use client";

import React from "react";

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      q: "What is ZoikoShield Case Management?",
      a: "A conditional destination for investigation, evidence, communications and decision history.",
    },
    {
      q: "Is Case Management available now?",
      a: "CONDITIONAL; availability depends on readiness.",
    },
    {
      q: "Does a case mean incident confirmed?",
      a: "No. It organizes context and history and does not establish compromise or causality.",
    },
    {
      q: "What evidence is stored?",
      a: "Only exact implemented behavior may be described; Evidence Ledger remains authoritative.",
    },
    {
      q: "What communication tools?",
      a: "The source does not name channels; this page does not claim email, chat, threads or templates.",
    },
    {
      q: "Can a case trigger response automatically?",
      a: "Do not claim this. Governed Response is separate and conditional.",
    },
    {
      q: "Does Case Management have SLAs?",
      a: "The source specifies none.",
    },
    {
      q: "Where is live service health?",
      a: "System Status is authoritative.",
    },
  ];

  return (
    <section id="faq" className="w-full bg-[#F5F2EB] py-16 lg:py-20 border-b border-zoiko-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-5 bg-[#C53B3B]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#C53B3B] font-mono">
              FAQ · #faq
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151B28] tracking-tight">
            Clear answers. No invented capability.
          </h2>
        </div>

        {/* 2-Column FAQ Rows */}
        <div className="border-t border-cyan-950/10 divide-y divide-cyan-950/10">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="py-5 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-start"
            >
              <h3 className="text-base sm:text-lg font-extrabold text-[#151B28] font-sans leading-snug">
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm font-normal text-gray-500 font-sans leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
