"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Info, ShieldCheck } from "lucide-react";
import { Eyebrow } from "./shared";

const LEGAL_CARDS = [
  {
    title: "Vendor Onboarding Registry",
    description: "Request tax documents (W-9), corporate status logs, and verification audits.",
    cta: "Onboard Zoiko",
    href: "#fallback-inquiry",
  },
  {
    title: "Law Enforcement Requests",
    description: "Process warrant structures or official verification subpoenas strictly via standard legal portals.",
    cta: "LE Portal Link",
    href: "/legal-notices",
  },
];

export const LegalProcurementSection: React.FC = () => {
  return (
    <section
      id="legal-procurement"
      className="w-full bg-[#F0EDE6] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-28 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Left Column */}
        <div className="flex-1 max-w-[500px] flex flex-col items-start gap-6">
          <Eyebrow>06 · LEGAL &amp; PROCUREMENT GUIDELINES</Eyebrow>
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-hanken leading-tight">
            Contractual governance &amp; secure onboarding
          </h2>
          <p className="text-gray-500 text-base font-normal font-manrope leading-6">
            Establish verified supplier listings and process legal service notifications. We do not invent proxy
            legal addresses; formal processing must meet Sacramento, California and London, UK registered
            guidelines.
          </p>
          <div className="w-full p-4 bg-[#F7F5F0] rounded-lg flex items-center gap-2.5">
            <ShieldCheck className="w-3.5 h-3.5 text-red-600 shrink-0" />
            <span className="text-red-600 text-xs font-semibold font-manrope">
              We strictly limit communications to verified registered channels.
            </span>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[56%] lg:max-w-[656px] shrink-0 flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {LEGAL_CARDS.map((card) => (
              <div key={card.title} className="p-5 bg-white rounded-xl flex flex-col gap-2">
                <h3 className="text-slate-900 text-lg font-extrabold font-hanken">{card.title}</h3>
                <p className="text-gray-500 text-sm font-manrope leading-relaxed flex-1">{card.description}</p>
                <Link
                  href={card.href}
                  className="group mt-1 inline-flex items-center gap-1.5 text-red-500 hover:text-red-600 text-sm font-bold font-manrope"
                >
                  {card.cta}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="p-4 bg-red-50 rounded-lg flex items-start gap-2.5">
            <Info className="w-3.5 h-3.5 text-rose-800 shrink-0 mt-0.5" />
            <p className="text-rose-800 text-xs font-medium font-manrope leading-relaxed">
              Accessibility Statement compliance: Standard procurement templates meet current WCAG AAA structure.{" "}
              <Link href="/accessibility-statement" className="underline hover:text-rose-900">
                Request audit reports directly.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
