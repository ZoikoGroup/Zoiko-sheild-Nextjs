"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight, AlertTriangle } from "lucide-react";

export const EvidenceSection: React.FC = () => {
  return (
    <section id="evidence" className="w-full bg-stone-200/70 py-16 lg:py-20 border-b border-zoiko-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#C53B3B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#C53B3B] font-mono">
                Evidence · #evidence
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151B28] tracking-tight leading-tight">
              Evidence context remains governed at the source.
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
              A case can collect or reference evidence context. Verified evidence does not by itself determine compromise, causality, root cause, legal responsibility, compliance status or response authority.
            </p>

            <div className="pt-2">
              <Link
                href="/evidence-ledger-verification"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#151B28] border border-cyan-950/20 px-6 py-3.5 rounded-xl font-bold text-sm shadow-sm transition-all"
              >
                <span>Open Evidence</span>
                <ArrowRight className="w-4 h-4 text-gray-500" />
              </Link>
            </div>
          </div>

          {/* Right Dark Card */}
          <div className="lg:col-span-6">
            <div className="p-7 bg-[#0B181E] rounded-3xl text-white shadow-xl border border-gray-800 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-teal-300 tracking-wider uppercase">
                  GOVERNED EVIDENCE REFERENCE
                </span>
              </div>

              <ul className="space-y-3 text-sm text-gray-300 font-sans leading-relaxed divide-y divide-gray-800/80">
                <li className="pt-2 first:pt-0">Origin and relationship</li>
                <li className="pt-2">Lineage and access state</li>
                <li className="pt-2">Completeness and verification limitations</li>
                <li className="pt-2">Version, scope and exclusions</li>
                <li className="pt-2">Superseded · withdrawn · corrected history</li>
              </ul>

              <div className="p-3.5 bg-orange-950/40 rounded-xl border border-orange-500/30 flex items-center gap-2 text-xs font-mono text-orange-300">
                <span>RESTRICTED / MISSING REFERENCES REMAIN EXPLICIT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvidenceSection;
