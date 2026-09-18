"use client";

import React from "react";
import Image from "next/image";

export const AuthorityHandoffsSection: React.FC = () => {
  const rulePills = [
    "No case = incident verdict",
    "No evidence = legal conclusion",
    "No communication channel invented",
    "No SLA / queue / status invented",
    "No response authority from case state",
  ];

  const handoffCards = [
    { title: "Detection & Response", desc: "Active parent and investigation context." },
    { title: "Security Analytics", desc: "Conditional context handoff, not case authority." },
    { title: "Evidence Ledger & Verification", desc: "Evidence authority." },
    { title: "Governed Response", desc: "Separate authorization, only when readiness permits." },
    { title: "Integrations", desc: "Approved sources and operations only." },
    { title: "System Status", desc: "Authoritative live health." },
  ];

  return (
    <section id="authority" className="w-full bg-[#0A2029] text-white py-16 lg:py-20 overflow-hidden relative border-b border-gray-800">
      {/* Background Image & Overlay */}
      <Image
        src="/images/case-management/Authority and handoffs.png"
        alt="Authority & Handoffs Background"
        fill
        className="object-cover opacity-30 pointer-events-none"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2029]/80 via-[#0B2732]/70 to-[#0A2029]/90 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-teal-300" />
            <span className="text-xs font-bold uppercase tracking-widest text-teal-300 font-mono">
              Authority · #authority · #handoffs
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            A case organizes context. It does not grant authority.
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-3xl leading-relaxed font-sans">
            A case can organize investigation, evidence, communications and decision history. It does not by itself establish compromise, causality, legal responsibility, compliance status, response authority or permission to execute an action. Governed Response remains separately conditional.
          </p>
        </div>

        {/* 5 Badge Pills */}
        <div className="flex flex-wrap items-center gap-3">
          {rulePills.map((pill, idx) => (
            <div
              key={idx}
              className="px-4 py-2.5 bg-black/40 backdrop-blur-md rounded-lg border border-white/20 text-teal-300 font-mono text-xs font-semibold shadow-sm"
            >
              {pill}
            </div>
          ))}
        </div>

        {/* 6 Handoff Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {handoffCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 bg-black/40 rounded-2xl border border-white/15 backdrop-blur-md space-y-2 hover:border-teal-400/40 transition-all"
            >
              <h3 className="text-lg font-extrabold text-white">{card.title}</h3>
              <p className="text-xs text-white/70 font-sans leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorityHandoffsSection;
