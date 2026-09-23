"use client";

import React from "react";
import Link from "next/link";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { Eyebrow } from "./shared";

const SUPPORT_LINKS = [
  {
    title: "Developers & API Docs",
    description: "Read structural guidelines, webhook mapping parameters, and SDK configurations.",
    cta: "Browse API Docs",
    href: "/developers-documentation",
  },
  {
    title: "Billing & Account Scope",
    description: "Query invoice status, renew contract parameters, or change assigned administrators.",
    cta: "Contact Billing Support",
    href: "#fallback-inquiry",
  },
];

export const CustomerSupportSection: React.FC = () => {
  return (
    <section
      id="customer-support"
      className="w-full bg-[#F7F5F0] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-28 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="space-y-4">
          <Eyebrow>03 · EXISTING CUSTOMER SUPPORT</Eyebrow>
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-hanken leading-tight">
            Continuous operational support &amp; ticket portal
          </h2>
          <p className="text-gray-500 text-base font-medium font-manrope">
            Verified support options for active enterprise tenants. We prioritize customer security before sales.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Left: incident banner + link cards */}
          <div className="flex-1 w-full flex flex-col gap-5">
            <div className="p-5 bg-red-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-red-200 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-rose-800 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="text-rose-800 text-base font-bold font-hanken">Active Incident / Production Outage?</h3>
                <p className="text-gray-600 text-sm font-manrope leading-relaxed">
                  Do not submit standard support tickets. Authenticate with your secure emergency keys inside the
                  Zoiko Console to initiate immediate P1 warm-remediation procedures.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {SUPPORT_LINKS.map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 flex flex-col gap-3"
                >
                  <h3 className="text-slate-900 text-lg font-extrabold font-hanken">{item.title}</h3>
                  <p className="text-gray-500 text-sm font-manrope leading-relaxed flex-1">{item.description}</p>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-red-500 hover:text-red-600 text-sm font-bold font-manrope"
                  >
                    {item.cta}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Support console card */}
          <div className="w-full lg:w-[360px] xl:w-[400px] shrink-0 p-6 sm:p-8 bg-[#0B2239] rounded-2xl flex flex-col gap-4">
            <h3 className="text-white text-xl font-bold font-hanken">Access Support Console</h3>
            <p className="text-slate-400 text-sm font-manrope leading-relaxed">
              Authentication is required to dispatch tickets. Unauthenticated users cannot view live tenant status.
            </p>
            <Link
              href="/dashboard"
              className="w-full py-3.5 bg-red-500 hover:bg-red-600 text-white text-center text-base font-bold font-manrope rounded-lg transition-colors"
            >
              Sign In to Open Ticket
            </Link>
            <div className="flex items-center gap-2 text-emerald-500 text-xs font-jetbrains">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All API services operating normally
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
