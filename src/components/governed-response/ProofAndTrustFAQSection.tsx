"use client";

import React from "react";
import { FileText, ShieldCheck, BookOpen, Activity } from "lucide-react";

interface ProofCard {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  route: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const PROOF_CARDS: ProofCard[] = [
  {
    id: "pc-1",
    icon: FileText,
    title: "Evidence",
    description: "Explore evidence resources",
    route: "/evidence",
  },
  {
    id: "pc-2",
    icon: ShieldCheck,
    title: "Trust",
    description: "Explore trust resources",
    route: "/trust",
  },
  {
    id: "pc-3",
    icon: BookOpen,
    title: "Docs",
    description: "Explore docs resources",
    route: "/docs",
  },
  {
    id: "pc-4",
    icon: Activity,
    title: "Status",
    description: "Explore status resources",
    route: "/status",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is Governed Response?",
    answer:
      "A control plane for consequential response actions, joining authority, approval, execution and evidence.",
  },
  {
    question: "What do R0-R4 mean?",
    answer:
      "They are source-controlled authority labels. ZoikoShield displays the governed source meaning rather than inferring one.",
  },
  {
    question: "Can ZoikoShield respond automatically?",
    answer:
      "Only when organizational authority, approval policy, technical permission and current runtime conditions explicitly permit it.",
  },
  {
    question: "Is rollback guaranteed?",
    answer:
      "No. Reversibility, unsupported cases and residual effects are declared per action contract.",
  },
];

export default function ProofAndTrustFAQSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C44242]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
              PROOF &amp; TRUST
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight mb-4 leading-[1.15]">
            Evidence for every consequential decision.
          </h2>
        </div>

        {/* 4-Column Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {PROOF_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[160px]"
              >
                <div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#C44242] mb-3">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] mb-1">
                    {card.title}
                  </h3>
                </div>

                <div>
                  <a
                    href={card.route}
                    className="inline-flex items-center text-xs text-[#64748B] hover:text-[#0F172A] transition-colors"
                  >
                    {card.description} &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Table / List Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight mb-8">
            Frequently asked questions.
          </h2>

          <div className="divide-y divide-[#E2E8F0]">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start first:pt-0 last:pb-0"
              >
                <div className="md:col-span-5">
                  <h4 className="text-sm sm:text-base font-bold text-[#0F172A]">
                    {item.question}
                  </h4>
                </div>
                <div className="md:col-span-7">
                  <p className="text-xs sm:text-sm text-[#64748B] font-normal leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
