"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface TrustCard {
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const HUBS: TrustCard[] = [
  {
    title: "Security Practices",
    description:
      "Detailed architecture patterns covering keys storage and transport encryption.",
    linkText: "Access Security Docs",
    href: "/compliance-control-plane",
  },
  {
    title: "Privacy & Data Protection",
    description:
      "Strict zero-retention bounds on active customer EDR payload content.",
    linkText: "Read Privacy Notice",
    href: "/privacy-notice",
  },
  {
    title: "System Status",
    description:
      "Real-time metrics tracking operational uptime across all regional clusters.",
    linkText: "View Live Status",
    href: "/dashboard",
  },
];

export const TrustGatewaySection: React.FC = () => {
  return (
    <section className="w-full bg-[#F0EDE6] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <div className="w-6 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-wider">
              TRUST GATEWAY
            </span>
          </div>

          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Compliance, Privacy, and System Status
          </h2>

          <p className="text-gray-500 text-base font-normal font-['Manrope'] leading-relaxed">
            Security is verified through action. Access our designated resource hubs to verify system integrity and review cryptographic practices.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HUBS.map((hub, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 hover:outline-cyan-950/25 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-5 h-full"
            >
              <div className="space-y-3">
                <h3 className="text-slate-900 text-lg font-extrabold font-['Hanken_Grotesk']">
                  {hub.title}
                </h3>
                <p className="text-gray-500 text-sm font-normal font-['Manrope'] leading-relaxed">
                  {hub.description}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-100">
                <Link
                  href={hub.href}
                  className="inline-flex items-center gap-1 text-red-500 hover:text-red-600 text-sm font-semibold font-['Manrope'] transition-colors group"
                >
                  <span>{hub.linkText}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
