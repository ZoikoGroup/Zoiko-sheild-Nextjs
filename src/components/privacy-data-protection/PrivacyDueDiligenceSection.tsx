"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface DueDiligenceDoc {
  title: string;
  description: string;
  actionText: string;
  href: string;
}

const dueDocs: DueDiligenceDoc[] = [
  {
    title: "Privacy Architecture",
    description: "Download full structural database separation specs.",
    actionText: "Request Document",
    href: "#contact",
  },
  {
    title: "Standard DPA Template",
    description: "Pre-signed standard contract clauses matching EU SCCs.",
    actionText: "Request Document",
    href: "#contact",
  },
  {
    title: "Data-Flow Questionnaire",
    description: "NIST-aligned self-assessment details, fully populated.",
    actionText: "Request Document",
    href: "#contact",
  },
];

export default function PrivacyDueDiligenceSection() {
  return (
    <section className="w-full bg-[#F0EDE6] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full flex flex-col gap-10 sm:gap-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              COMPLIANCE DOWNLOADS
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.02em] leading-tight">
            Enterprise Due Diligence Resources
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            Speed up vendor reviews. Access structured architecture diagrams, DPA templates, and active questionnaire details.
          </p>
        </motion.div>

        {/* 3 Doc Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {dueDocs.map((doc, idx) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white border border-[#123B4C]/10 rounded-xl p-6 flex flex-col justify-between gap-6 hover:border-[#123B4C]/25 transition-all shadow-[0_2px_4px_rgba(0,0,0,0.02)] group"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-base sm:text-lg font-bold text-[#0A2029] tracking-tight">
                  {doc.title}
                </h3>
                <p className="text-[#5B6670] text-xs sm:text-[13.5px] leading-relaxed font-medium">
                  {doc.description}
                </p>
              </div>

              <Link
                href={doc.href}
                className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-[13px] font-bold text-[#C44242] group-hover:underline underline-offset-4"
              >
                <span>{doc.actionText}</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
