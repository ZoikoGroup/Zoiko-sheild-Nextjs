"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Reveal, Section, SectionHeader } from "./shared";

const faqs = [
  {
    q: "What Microsoft products can Zoiko Shield connect to?",
    a: "Zoiko Shield integrates with Microsoft Entra ID (P1/P2), Microsoft Defender for Endpoint, Microsoft Intune, Microsoft Purview, and Azure Resource Manager subscriptions.",
  },
  {
    q: "Does Zoiko Shield replace Microsoft Defender or Sentinel?",
    a: "No. Zoiko Shield works alongside your Microsoft estate. We ingest security telemetry and configure automated mappings for audit defense, leaving threat detection and remediation to Defender/Sentinel.",
  },
  {
    q: "How does Zoiko Shield authenticate to Microsoft?",
    a: "Authentication is managed via Microsoft Entra ID App Registrations using either Client Certificates or secure secrets with OAuth 2.0 flows.",
  },
  {
    q: "What permissions does Zoiko Shield need?",
    a: "We require strictly limited, read-only permissions such as AuditLog.Read.All and Directory.Read.All. Zoiko holds zero write permissions.",
  },
  {
    q: "Do Microsoft license requirements apply?",
    a: "Advanced risk events require Microsoft Entra ID P2, and advanced compliance mapping recommends Microsoft Purview Audit Premium (E5). Common controls map with standard E3 licenses.",
  },
  {
    q: "What happens if Microsoft permissions are revoked?",
    a: "Your integration status degrades to suspended, alerting administrators. All previous audit evidence logs are cryptographically sealed and maintained.",
  },
  {
    q: "Can Zoiko Shield take actions in Microsoft?",
    a: "No. The system acts as a non-invasive observer layer, with no authorization to alter configuration, block logins, or quarantine devices.",
  },
  {
    q: "How is Microsoft-derived evidence handled?",
    a: "Every collected trace is normalized, matched to compliance mandates, hashed with SHA-256, and recorded with direct source attribution lineage.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <Section className="!gap-8">
      <SectionHeader
        title="Frequently Asked Questions"
        description="Review the technical integration constraints and operational mechanisms of Zoiko Shield."
      />

      <div className="flex flex-col gap-3 w-full">
        {faqs.map((item, i) => (
          <Reveal key={item.q} delay={i * 0.03}>
            <div className="bg-white border border-[rgba(18,59,76,0.1)] rounded-[12px]">
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`ms-faq-${i}`}
                className={`w-full flex items-center justify-between gap-4 px-5 pt-5 text-left ${openIndex === i ? "pb-3" : "pb-5"}`}
              >
                <span className="font-manrope font-extrabold text-[15px] text-[#0a2029]">{item.q}</span>
                {openIndex === i ? (
                  <Minus className="size-4 text-[#5b6670] shrink-0" />
                ) : (
                  <Plus className="size-4 text-[#5b6670] shrink-0" />
                )}
              </button>
              <div id={`ms-faq-${i}`} hidden={openIndex !== i} className="px-5 pb-5">
                <p className="font-manrope text-[14px] leading-[20px] text-[#5b6670] m-0">{item.a}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
