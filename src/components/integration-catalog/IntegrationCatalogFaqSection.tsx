"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

export const IntegrationCatalogFaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the Zoiko Shield Integration Catalog?",
      a: "A comprehensive registry of cloud, endpoint, identity, and security connectors built to ingest logs, map telemetry to framework controls, and generate compliance ledger evidence.",
    },
    {
      q: "Can Zoiko Shield work with my existing security stack?",
      a: "Yes, our core design is platform-agnostic and functions by Escrow-consuming telemetry from your current systems without requiring any rip-and-replace.",
    },
    {
      q: "How are integration credentials protected?",
      a: "Integrations utilize granular API client keys or secure AWS Role ARN assumptions. Secrets are escrowed inside our hardware security module Key Vaults.",
    },
    {
      q: "What data does an integration collect?",
      a: "Only raw data necessary to substantiate framework controls. Data schemas are normalized immediately to prevent PII exposure.",
    },
    {
      q: "Do integrations create compliance evidence?",
      a: "Yes. Ingested events are cryptographically committed to immutable ledgers as verified active evidence mapping directly to SOC 2, ISO 27001, or HIPAA.",
    },
    {
      q: "Can I request a connector that is not listed?",
      a: "Absolutely. You can submit our Integration Request form; typical custom pipelines are scoped and priority-scheduled within three business days.",
    },
    {
      q: "How do I know whether an integration is production-ready?",
      a: "All listed integrations feature clear status badges. Available and Partner-assisted labels represent fully verified and hardened production-ready paths.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full bg-[#F5F2EB] py-16 lg:py-20 border-b border-zoiko-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="p-5 bg-white rounded-xl border border-cyan-950/10 shadow-sm transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex items-center justify-between gap-4 focus:outline-none group"
                >
                  <span className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-red-500 transition-colors font-sans">
                    {faq.q}
                  </span>
                  <Plus
                    className={`w-5 h-5 text-red-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="mt-3 text-sm text-gray-600 font-sans leading-relaxed animate-fadeIn border-t border-gray-100 pt-3">
                    {faq.a}
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

export default IntegrationCatalogFaqSection;
