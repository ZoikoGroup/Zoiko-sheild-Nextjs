"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const PILLS = [
  "MFA coverage",
  "Privileged access paths",
  "Dormant / stale privilege",
  "JIT access",
  "Access review freshness",
];

export const IdentityAccessSection: React.FC = () => {
  return (
    <section className="w-full bg-stone-100 border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column */}
        <div className="flex-1 max-w-[620px] flex flex-col justify-start items-start gap-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3">
            <div className="w-6 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest">
              IDENTITY &amp; PRIVILEGED ACCESS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Protect the identities that can move money, change controls, or reach sensitive systems.
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 text-base font-normal font-['Manrope'] leading-relaxed">
            Unify workforce, privileged, service-account and administrative access signals with control evidence and accountable ownership.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            {PILLS.map((pill) => (
              <div
                key={pill}
                className="px-3.5 py-1.5 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-cyan-950/15 text-slate-900 text-xs font-semibold font-['Manrope'] shadow-2xs"
              >
                {pill}
              </div>
            ))}
          </div>

          {/* Link */}
          <div className="pt-2">
            <Link
              href="/endpoint-identity-integrations"
              className="inline-flex items-center gap-1.5 text-slate-900 hover:text-red-500 text-sm font-bold font-['Manrope'] border-b-2 border-red-500 pb-1 transition-colors"
            >
              <span>View Identity &amp; Access Controls →</span>
            </Link>
          </div>
        </div>

        {/* Right Column Graphic */}
        <div className="w-full lg:w-[540px] shrink-0 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[540px] aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-cyan-950/10 bg-slate-950 group">
            <Image
              src="/images/financial-services-fintech/Gradient.png"
              alt="Cloud Security and Identity Posture Dashboard"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
