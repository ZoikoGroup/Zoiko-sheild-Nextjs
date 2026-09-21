"use client";

import React from "react";
import { motion } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Where do I start integrating my first directory?",
    answer:
      "We recommend reviewing the Getting Started guide. Confirm your OIDC client credentials and read-only permission boundaries before running the first safe test synchronization.",
  },
  {
    question: "Where is the authoritative API Reference located?",
    answer:
      "The full endpoint catalog resides in the API Reference hub. Endpoint definitions, parameter constraints, and client SDK schema files are updated continuously alongside release cycles.",
  },
  {
    question: "Where can I find Webhook delivery event schemas?",
    answer:
      "Detailed payload schemas, signature algorithms, and troubleshooting steps are located in the Webhooks Catalog. All events are cryptographically hashed for verified delivery.",
  },
  {
    question: "How do I verify if a specific guide is current?",
    answer:
      "Every documentation article carries a visible \"Last Reviewed\" timestamp. Stale articles undergo automatic lifecycle reviews every 90 days governed by core architecture teams.",
  },
  {
    question: "Can I implement Zoiko Shield without contacting sales?",
    answer:
      "Yes. All setup guidelines, developer sandbox tools, and community-tier connector templates remain public. Enterprise licensing is only required for complex regional storage rules or dual-approver keys.",
  },
  {
    question: "How do I report stale documentation or configuration errors?",
    answer:
      "Click \"Submit Feedback\" at the foot of any article. Our developer experience team reviews all flagged telemetry or code template discrepancies within 24 hours.",
  },
  {
    question: "How does Zoiko Shield communicate breaking API changes?",
    answer:
      "All deprecation cycles, retired endpoint schedules, and migration steps are published inside the versioned Release Notes with a minimum 90-day grace window.",
  },
  {
    question: "What diagnostic telemetry is safe to include in support tickets?",
    answer:
      "Never share API secrets, private keys, or actual user passwords. Always strip auth headers and provide correlation IDs, tenant names, and error timestamps.",
  },
];

export default function ArchitecturalFaqs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  return (
    <section className="w-full bg-[#F5F2EB] py-16 sm:py-20 lg:py-24 px-6 md:px-12 lg:px-16 font-sans text-[#111827] border-t border-[#E7E5DF]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          {/* Tag / Kicker */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#BE3A34]" />
            <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#BE3A34] uppercase">
              ARCHITECTURAL FAQS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0B1B26] tracking-tight">
            Common technical questions
          </h2>
        </div>

        {/* 8 FAQ Stacked Cards */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E7E5DF] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#DCD8CF] transition-all duration-200"
            >
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0B1B26] mb-2 leading-snug">
                {faq.question}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-[#5A6874] leading-[1.65]">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
