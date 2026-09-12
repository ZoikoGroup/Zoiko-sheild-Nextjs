"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  LifeBuoy,
  Activity,
  FileText,
  Plus,
  Minus,
} from "lucide-react";

export default function ProofAndHelpSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const proofCards = [
    {
      title: "Trust Center",
      description: "Security, privacy and assurance materials.",
      icon: <ShieldCheck className="w-5 h-5 text-[#C44242]" />,
    },
    {
      title: "Support",
      description: "Operational help and customer assistance.",
      icon: <LifeBuoy className="w-5 h-5 text-[#C44242]" />,
    },
    {
      title: "System Status",
      description: "Live service availability and history.",
      icon: <Activity className="w-5 h-5 text-[#C44242]" />,
    },
    {
      title: "Docs / Evidence",
      description: "Product guidance and evidence resources.",
      icon: <FileText className="w-5 h-5 text-[#C44242]" />,
    },
  ];

  const faqItems = [
    {
      question: "What is ZoikoShield Incident Readiness?",
      answer:
        "ZoikoShield Incident Readiness establishes the structured framework, preparation baseline, and authoritative routes required before an incident occurs.",
    },
    {
      question: "Is it a 24x7 emergency response service?",
      answer:
        "Readiness provides the structured pre-conditions and activation paths, whereas active response availability depends on your agreed delivery route and service tier.",
    },
    {
      question: "Does readiness automatically activate response actions?",
      answer:
        "No. Readiness prepares and structures capabilities, but activation requires explicit authorization and adherence to the defined operational routes.",
    },
    {
      question: "Does ZoikoShield provide an incident response retainer?",
      answer:
        "Incident Readiness is distinct from an Incident Response Retainer, which must be contracted and verified separately through active service routes.",
    },
    {
      question: "What happens during activation?",
      answer:
        "Activation transitions your prepared context into a governed operational thread, invoking specified contacts, evidence logs, and authorized response procedures.",
    },
    {
      question: "Does ZoikoShield guarantee containment or recovery?",
      answer:
        "No. Incident governance provides structured frameworks and traceable actions, but cannot promise specific recovery timeframes or guaranteed containment outcomes.",
    },
    {
      question: "Where can I get operational help?",
      answer:
        "Operational assistance and customer support channels are available directly through your designated support and trust center resources.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F0EDE6] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Top Section: Evidence where you expect it. */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C44242]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
              PROOF AND HELP
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#0F172A] tracking-tight mb-10 leading-[1.15]">
            Evidence where you expect it.
          </h2>

          {/* 4-Column Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {proofCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[14px] p-6 border border-[#E2E8F0] shadow-sm flex flex-col"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] mb-2">
                    {card.title}
                  </h3>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* FAQ Header Column */}
          <div className="lg:col-span-4 sticky top-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#C44242]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
                FAQ
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4 leading-[1.15]">
              Questions before activation.
            </h2>

            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Direct answers about scope, authority and service limitations.
            </p>
          </div>

          {/* FAQ Accordion List Column */}
          <div className="lg:col-span-8">
            <div className="border-t border-[#E2E8F0]">
              {faqItems.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="border-b border-[#E2E8F0]">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full py-6 flex items-center justify-between text-left group cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#C44242] transition-colors pr-4">
                        {item.question}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-[#EFECE6] flex items-center justify-center shrink-0 transition-transform">
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5 text-[#0F172A]" />
                        ) : (
                          <Plus className="w-3.5 h-3.5 text-[#0F172A]" />
                        )}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="pb-6 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
