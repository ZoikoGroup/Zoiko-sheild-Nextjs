"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const ApiSecuritySection: React.FC = () => {
  return (
    <section className="w-full bg-white border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column */}
        <div className="flex-1 max-w-[620px] flex flex-col justify-start items-start gap-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3">
            <div className="w-6 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest">
              API, APPLICATION &amp; PAYMENT-SURFACE SECURITY
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Secure the digital channels and APIs your customers and partners depend on.
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 text-base font-normal font-['Manrope'] leading-relaxed">
            Service, owner, auth method, exposure and sensitivity — with findings, remediation, test history, and ownership attached to every entry.
          </p>

          {/* Callout Notice */}
          <div className="w-full p-4 bg-stone-100 rounded-r-lg border-l-[3px] border-red-500 flex flex-col justify-start items-start">
            <p className="text-gray-600 text-xs sm:text-sm font-normal font-['Manrope'] leading-relaxed">
              Fraud-adjacent signals may surface identity, API, or session anomalies for investigation. ZoikoShield does not claim autonomous transaction-fraud adjudication.
            </p>
          </div>

          {/* Link */}
          <div className="pt-2">
            <Link
              href="/security-analytics"
              className="inline-flex items-center gap-1.5 text-slate-900 hover:text-red-500 text-sm font-bold font-['Manrope'] border-b-2 border-red-500 pb-1 transition-colors"
            >
              <span>View Application / API Security →</span>
            </Link>
          </div>
        </div>

        {/* Right Column Image Graphic */}
        <div className="w-full lg:w-[500px] shrink-0 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px] aspect-[444/355] rounded-2xl overflow-hidden shadow-xl border border-cyan-950/10 bg-slate-950 group">
            <Image
              src="/images/financial-services-fintech/image 97.png"
              alt="Security engineers analyzing application telemetry and APIs"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
