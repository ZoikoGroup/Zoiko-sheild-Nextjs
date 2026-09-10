"use client";

import React from "react";
import { FileSignature, FileCheck } from "lucide-react";

export default function SigningAttestationSection() {
  const signingTags = [
    "Purpose",
    "Signer",
    "Method",
    "Verification",
    "Legal effect",
  ];

  const attestationTags = [
    "Fact / assertion",
    "Actor / system",
    "Authority",
    "Scope",
    "Evidence",
    "Limitations",
  ];

  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C44242]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
              SIGNING &amp; ATTESTATION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight mb-4 leading-[1.15]">
            Prove who asserted what &mdash; and why it matters.
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Signing governance */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-between min-h-[220px]">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                Signing governance
              </h3>

              <p className="text-xs text-[#64748B] leading-relaxed mb-6 font-normal">
                Bind intent and legal effect to a verifiable act.
              </p>
            </div>

            <div>
              {/* Icon */}
              <div className="mb-4">
                <FileSignature className="w-6 h-6 text-[#C44242] stroke-[1.5]" />
              </div>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2">
                {signingTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-[#E4F0EC] text-[10px] font-mono font-medium text-[#123B4C] tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Attestation governance */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-between min-h-[220px]">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                Attestation governance
              </h3>

              <p className="text-xs text-[#64748B] leading-relaxed mb-6 font-normal">
                Record the fact or assertion with transparent limitations.
              </p>
            </div>

            <div>
              {/* Icon */}
              <div className="mb-4">
                <FileCheck className="w-6 h-6 text-[#C44242] stroke-[1.5]" />
              </div>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2">
                {attestationTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-[#E4F0EC] text-[10px] font-mono font-medium text-[#123B4C] tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
