"use client";

import React from "react";
import { motion } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How do I submit an integration request?",
    answer:
      "Complete the progressive form on this page with authorized corporate references. We use these metrics to schedule feasibility studies.",
  },
  {
    question: "Does submission guarantee the connector will be built?",
    answer:
      "No. Requests signal pipeline demand. Timeline allocation relies on technical compatibility and unified community votes.",
  },
  {
    question: "What technical details should I provide?",
    answer:
      "Target API authentication model, endpoints, data scopes, and rate limits are highly useful. Standard compliance references (SOC2) help our evaluation.",
  },
  {
    question: "How are existing-customer requests handled?",
    answer:
      "Existing customer requirements receive priority feasibility reviews, matching defined production roadmap targets where possible.",
  },
  {
    question: "Can technology vendors propose partnership integrations?",
    answer:
      "Yes. Choose Technology Partner Proposal under request type. Our partner team reviews target specifications within 7 days.",
  },
  {
    question: "Where can I configure credentials or secrets?",
    answer:
      "Never enter credentials or secrets on this public request interface. Production configurations reside fully inside your local isolated tenant environment.",
  },
  {
    question: "Are bi-directional or remediation integrations supported?",
    answer:
      "Yes. However, write-back capabilities must fall strictly under multi-party consensus and authorization rules.",
  },
  {
    question: "When will I receive feedback on my request?",
    answer:
      "We compile roadmap metrics monthly. Real-time notifications occur if we establish developer sprints for your specific vendor.",
  },
];

export default function ArchitecturalConstraintsFaq() {
  return (
    <section className="w-full bg-[#F5F2EB] py-4 sm:py-6 pb-12 sm:pb-24 px-5 sm:px-6 md:px-12 lg:px-16 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-[#E7E5DF] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-[2px] bg-[#BE3A34]" />
              <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#BE3A34] uppercase">
                FAQ
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold text-[#0B1B26] tracking-tight">
              Architectural Constraints &amp; Guidelines
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Left 8 cols on desktop, full width on mobile: FAQ Item List */}
            <div className="lg:col-span-8 w-full">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`pb-4 sm:pb-5 mb-4 sm:mb-5 ${
                    index !== faqs.length - 1 ? "border-b border-[#F0ECE4]" : ""
                  }`}
                >
                  <h3 className="text-[13.5px] sm:text-[14.5px] font-bold text-[#0B1B26] mb-1.5 leading-snug">
                    {faq.question}
                  </h3>
                  <p className="text-[11.5px] sm:text-[12.5px] text-[#5A6874] leading-[1.6] sm:leading-[1.65]">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* Right 4 cols: Evaluation Timeline Card (Hidden on mobile as shown in reference) */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl p-5">
                <h4 className="text-xs font-bold text-[#0B1B26] mb-2">
                  Evaluation Timeline
                </h4>
                <p className="text-[11.5px] text-[#6B7280] leading-relaxed">
                  Requests are reviewed in batches. If your vendor is already in an active sprint, you may receive faster follow-up. Otherwise, the team prioritizes by demand, technical fit, and compliance alignment.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
