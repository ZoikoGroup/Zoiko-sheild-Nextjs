"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, Section, SectionHeader, cardClass } from "./shared";

const areas = [
  {
    title: "Security Practices",
    desc: "Access infrastructure design, vulnerability patches, and corporate asset protections.",
    href: "#infrastructure-security",
  },
  {
    title: "Responsible AI",
    desc: "Parameters governing model input exclusions, training rules, and strict human-in-the-loop checks.",
    href: "/responsible-ai",
  },
  {
    title: "Privacy & Data Protection",
    desc: "Data residency scope, regional controls, and cryptographic session ledger parameters.",
    href: "/privacy-notice",
  },
  {
    title: "Vulnerability Disclosure",
    desc: "How to report issues, our safe-harbor guidelines, and public security.txt posture.",
    href: "#vulnerability-disclosure",
  },
  {
    title: "Operational Trust",
    desc: "System status logging, regional uptime, business continuity, and disaster recovery processes.",
    href: "#resilience",
  },
  {
    title: "Legal & Governance",
    desc: "Terms of service, compliance framework matrices, policies, and evidence lifecycles.",
    href: "/legal-notices",
  },
];

export default function TrustAreasSection() {
  return (
    <Section tone="light">
      <SectionHeader eyebrow="Deep Investigation" title="Explore specific trust areas" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {areas.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.05} className={`${cardClass} p-6 flex flex-col gap-4`}>
            <h3 className="font-sans font-extrabold text-[20px] text-[#0a2029] m-0">{a.title}</h3>
            <p className="font-manrope text-[14px] leading-[20px] text-[#5b6670] m-0">{a.desc}</p>
            <Link
              href={a.href}
              className="group inline-flex items-center gap-2 mt-auto font-manrope font-bold text-[14px] text-[#c44242]"
            >
              Review Domain Details
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
