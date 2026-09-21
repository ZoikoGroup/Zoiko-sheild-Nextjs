"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export const ChangelogFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How are breaking changes announced and tracked?",
      answer:
        "Breaking changes receive the 'Action Required' or 'Breaking' status badge and carry a unique canonical release ID. High-impact updates are announced at least 90 days before enforcement with clear migration guidelines and rollback constraints.",
    },
    {
      question: "Can I receive machine-readable updates for automation?",
      answer:
        "Yes. In the Enterprise Change-Management section, developers can access raw RSS/Atom, JSON Schema feeds, or export specific date queries to align directly with internal compliance registries and automated CI/CD posture scanners.",
    },
    {
      question: "What is the difference between Deprecation and Retirement?",
      answer:
        "Deprecation signals a supported but discouraged state with an active migration window. Retirement is the final termination of an endpoint, protocol, or parameter, past which requests will strictly fail or be rejected at the boundary.",
    },
  ];

  return (
    <section className="w-full bg-stone-200 py-16 px-4 sm:px-6 lg:px-8 border-b border-cyan-950/10">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-3">
            <div className="w-6 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-mono uppercase tracking-wider">
              CHANGELOG FAQ
            </span>
          </div>
          <h2 className="text-slate-900 text-2xl sm:text-3xl lg:text-4xl font-extrabold font-sans">
            Detailed Architecture &amp; Integration Constraints
          </h2>
        </div>

        {/* FAQs list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx || openIndex === null; // rendered expanded by default matching Figma or toggleable
            return (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl border border-cyan-950/10 shadow-xs space-y-3 transition-all"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                >
                  <h3 className="text-slate-900 text-base sm:text-lg font-extrabold font-sans group-hover:text-red-500 transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed pt-1 border-t border-stone-100">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
