"use client";

import React from "react";
import Link from "next/link";
import { Shield, FileText, CheckCircle2, Activity, Plug, Sparkles, Cpu } from "lucide-react";

export const ProofTrustSection: React.FC = () => {
  const routes = [
    { title: "Evidence", href: "/evidence-ledger-verification", icon: FileText },
    { title: "Trust", href: "/about", icon: Shield },
    { title: "Docs", href: "/about", icon: FileText },
    { title: "System Status", href: "/dashboard", icon: Activity },
    { title: "Integrations - when current", href: "/integrations", icon: Plug },
    { title: "Responsible AI - when approved", href: "/responsible-ai", icon: Cpu },
  ];

  return (
    <section id="proof" className="w-full bg-[#F0EDE6] py-16 lg:py-20 border-b border-zoiko-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-[#C53B3B]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#C53B3B] font-mono">
              Trust and proof · #proof
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151B28] tracking-tight">
            Proof routes stay direct and ungated.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl leading-relaxed font-sans">
            Authoritative destinations carry the claim. This page does not reproduce certification, encryption, residency, uptime, retention or assurance claims.
          </p>
        </div>

        {/* 6 Route Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {routes.map((route, idx) => {
            const IconComp = route.icon;
            return (
              <Link key={idx} href={route.href}>
                <div className="p-4 bg-white rounded-xl border border-cyan-950/10 shadow-sm flex items-center gap-3 hover:border-cyan-950/30 transition-all h-full">
                  <IconComp className="w-4 h-4 text-slate-800 shrink-0" />
                  <span className="text-xs font-bold text-[#151B28] font-sans">
                    {route.title}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Public-Safe States Footer Monospace Box */}
        <div className="p-4 bg-stone-300/50 rounded-xl border border-stone-300 font-mono text-xs text-gray-600 leading-relaxed">
          <strong className="text-gray-900 font-bold block mb-1">PUBLIC-SAFE STATES:</strong>
          <span>
            case source unavailable · evidence restricted/missing · communication unavailable · conflicting history · owner unavailable without silent reassignment · external sync delayed/failed · Governed Response unavailable · route-manifest failure · no-JavaScript operation
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProofTrustSection;
