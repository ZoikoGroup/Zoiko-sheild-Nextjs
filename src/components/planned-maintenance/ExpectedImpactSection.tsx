"use client";

import React from "react";

interface ImpactModel {
  badge: string;
  badgeBg: string;
  badgeText: string;
  title: string;
  description: string;
}

const impactModels: ImpactModel[] = [
  {
    badge: "ZERO LATENCY",
    badgeBg: "bg-[#E4F0EC]",
    badgeText: "text-[#1F7A6C]",
    title: "No Expected Customer Impact",
    description:
      "Secondary clustering active. Edge tunnels run on backup routes natively.",
  },
  {
    badge: "PERFORMANCE DEGRADATION",
    badgeBg: "bg-[#FEF3C7]",
    badgeText: "text-[#B45309]",
    title: "Degraded Performance",
    description:
      "Queries may take up to 2.5s longer than baseline values. Read-only systems stable.",
  },
  {
    badge: "EXPECTED WRITE PAUSE",
    badgeBg: "bg-[#FEF3C7]",
    badgeText: "text-[#B45309]",
    title: "Intermittent Disruption",
    description:
      "Telemetry writes may drop and queue on client side for up to 90 seconds.",
  },
  {
    badge: "ADMIN PANEL IMPACT",
    badgeBg: "bg-[#FBEFEF]",
    badgeText: "text-[#A43737]",
    title: "Partial Unavailability",
    description:
      "Access to configuration dashboards may drop. Core verification logic is unaffected.",
  },
  {
    badge: "MAX CRITICAL STATE",
    badgeBg: "bg-[#FBEFEF]",
    badgeText: "text-[#A43737]",
    title: "Full Unavailability",
    description:
      "Full gateway maintenance. Only deployed in extreme emergencies.",
  },
  {
    badge: "TOKEN ROTATION REQUIRED",
    badgeBg: "bg-[#DDEAF9]",
    badgeText: "text-[#4E668A]",
    title: "Post-Maintenance Action",
    description:
      "Authentication sessions remain active, but clients must re-verify local tokens.",
  },
];

export default function ExpectedImpactSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 sm:py-20 lg:py-24 border-b border-[#123B4C]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#C44242]" />
            <span className="font-jetbrains text-xs sm:text-sm font-bold tracking-[0.0833em] text-[#C44242] uppercase">
              SYSTEM CONSTRAINTS &amp; WORKAROUNDS
            </span>
          </div>
          <h2 className="font-hanken font-extrabold text-3xl sm:text-4xl text-[#0A2029] tracking-tight">
            Expected Impact Models
          </h2>
          <p className="font-manrope text-base text-[#5E6670] leading-relaxed">
            Defensible impact definitions modeled directly from operational
            thresholds. We do not invent safety claims: standard retries apply.
          </p>
        </div>

        {/* 6 Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {impactModels.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#123B4C]/10 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span
                  className={`self-start inline-flex items-center px-2.5 py-1 rounded text-[11px] font-jetbrains font-bold uppercase tracking-wider ${item.badgeBg} ${item.badgeText}`}
                >
                  {item.badge}
                </span>
                <h3 className="font-hanken font-extrabold text-lg sm:text-xl text-[#0A2029]">
                  {item.title}
                </h3>
              </div>
              <p className="font-manrope text-xs sm:text-sm text-[#5E6670] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
