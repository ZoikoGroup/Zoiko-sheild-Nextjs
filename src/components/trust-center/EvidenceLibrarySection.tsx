"use client";

import React, { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Pill, Reveal, Section, SectionHeader, cardClass, type Tone } from "./shared";

const artifacts: {
  title: string;
  status: string;
  tone: Tone;
  access: string;
  issuer: string;
  period: string;
}[] = [
  { title: "SOC 2 Type II Evidence Report", status: "Current", tone: "green", access: "NDA Required", issuer: "External CPA Firm", period: "Jan 2025 - Dec 2025" },
  { title: "ISO 27001 ISMS Posture Proof", status: "Current", tone: "green", access: "Public", issuer: "ANAB Accredited", period: "Expires Mar 2027" },
  { title: "Quarterly Penetration Assessment", status: "Under Review", tone: "amber", access: "Restricted", issuer: "Bishop Fox Team", period: "Concluded Q4 2025" },
  { title: "GDPR Data Transfer Assessment", status: "Current", tone: "green", access: "On Request", issuer: "Privacy Legal Team", period: "Active 2026" },
  { title: "Disaster Recovery Testing Audit", status: "Superseded", tone: "red", access: "NDA Required", issuer: "SecOps Committee", period: "Q2 2024 Audit" },
  { title: "HIPAA Security Evaluation", status: "Not Applicable", tone: "red", access: "Internal", issuer: "Compliance Lead Office", period: "N/A" },
];

export default function EvidenceLibrarySection() {
  const [draft, setDraft] = useState("");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return artifacts;
    return artifacts.filter((a) =>
      [a.title, a.status, a.access, a.issuer, a.period].some((field) => field.toLowerCase().includes(q)),
    );
  }, [query]);

  return (
    <Section tone="alt" id="evidence-library">
      <SectionHeader
        eyebrow="Compliance Evidence"
        title="Evidence Library"
        description="Browse and verify programmatic proofs. Restricted artifacts require active NDA reviews."
        aside={
          <form
            role="search"
            className="flex gap-2 w-full md:w-auto shrink-0"
            onSubmit={(e) => {
              e.preventDefault();
              setQuery(draft);
            }}
          >
            <label htmlFor="artifact-search" className="sr-only">
              Search artifacts
            </label>
            <input
              id="artifact-search"
              type="search"
              value={draft}
              onChange={(e) => {
                setDraft(e.target.value);
                if (!e.target.value) setQuery("");
              }}
              placeholder="Search artifacts..."
              className="flex-1 md:w-[240px] bg-white border border-[rgba(18,59,76,0.1)] rounded-[8px] px-4 py-2.5 font-manrope text-[14px] text-[#0a2029] placeholder:text-[#8a8f96] outline-none focus:border-[#1f7a6c] focus:ring-2 focus:ring-[#1f7a6c]/20 min-w-0"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-[8px] bg-[#c44242] hover:bg-[#b23636] transition-colors font-manrope font-bold text-[14px] text-white"
            >
              Filter
            </button>
          </form>
        }
      />

      {visible.length === 0 ? (
        <p role="status" className="font-manrope text-[15px] text-[#5b6670] m-0">
          No artifacts match “{query}”. Try a framework name like SOC 2 or ISO 27001.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {visible.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05} className={`${cardClass} p-6 flex flex-col gap-3`}>
              <div className="flex items-center justify-between gap-3">
                <Pill tone={a.tone}>{a.status}</Pill>
                <span className="font-sans font-semibold text-[12px] text-[#5b6670] text-right">{a.access}</span>
              </div>
              <h3 className="font-sans font-bold text-[17px] text-[#0a2029] m-0 pt-1">{a.title}</h3>
              <div className="flex flex-col gap-1">
                <p className="font-manrope text-[13px] text-[#5b6670] m-0">Issuer: {a.issuer}</p>
                <p className="font-manrope text-[13px] text-[#5b6670] m-0">Period: {a.period}</p>
              </div>
              <a
                href="#request-review"
                className="group inline-flex items-center gap-2 mt-auto pt-3 font-manrope font-semibold text-[14px] text-[#c44242]"
              >
                Request Artifact
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
