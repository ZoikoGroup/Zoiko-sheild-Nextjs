"use client";

import React from "react";
import { BarChart3, User, Grid2X2, Shield, GitFork } from "lucide-react";

interface SnapshotCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SNAPSHOTS: SnapshotCard[] = [
  {
    icon: <User className="w-5 h-5 text-red-500" />,
    title: "High-value identities",
    description:
      "Privileged, workforce, service-account and customer-facing access paths need strong control and evidence.",
  },
  {
    icon: <Grid2X2 className="w-5 h-5 text-red-500" />,
    title: "API-first operating model",
    description:
      "Banking, fintech, payment and partner services depend on APIs, tokens, secrets and integrations.",
  },
  {
    icon: <Shield className="w-5 h-5 text-red-500" />,
    title: "Continuous regulatory scrutiny",
    description:
      "Recurring examination, audit, payment-security and disclosure obligations across jurisdictions.",
  },
  {
    icon: <GitFork className="w-5 h-5 text-red-500" />,
    title: "Third-party dependency",
    description:
      "Cloud, SaaS, payment and data providers are now part of the resilience and security story.",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-red-500" />,
    title: "Board accountability",
    description:
      "Cyber risk must translate into material exposure, reliable controls, exceptions and decisions.",
  },
];

export const SectorSnapshotSection: React.FC = () => {
  return (
    <section className="w-full bg-white border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        {/* Header */}
        <div className="max-w-xl flex flex-col items-center text-center gap-3">
          <div className="inline-flex items-center gap-2">
            <div className="w-5 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest">
              SECTOR SNAPSHOT
            </span>
          </div>

          <h2 className="text-slate-900 text-2xl sm:text-3xl lg:text-4xl font-['Manrope'] font-bold leading-tight">
            Regulated finance runs on identity, APIs, and dependencies under constant scrutiny.
          </h2>
        </div>

        {/* 5 Cards Row Container */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-stone-200 rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 overflow-hidden shadow-xs">
          {SNAPSHOTS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 bg-white flex flex-col justify-start items-start gap-3.5 hover:bg-stone-50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center border border-red-100/80">
                {item.icon}
              </div>

              <div className="space-y-2">
                <h3 className="text-slate-900 text-sm font-bold font-['Hanken_Grotesk'] leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs font-normal font-['Manrope'] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
