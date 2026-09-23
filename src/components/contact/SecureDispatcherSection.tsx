"use client";

import React from "react";
import { Eyebrow, scrollToSection } from "./shared";

interface Route {
  title: string;
  badge: string;
  badgeClass: string;
  description: string;
  target: string;
}

const ROUTES: Route[] = [
  {
    title: "Sales & Evaluation",
    badge: "Active Route",
    badgeClass: "bg-gray-200 text-teal-700",
    description:
      "Request platform walkthroughs, custom architectural pricing, and enterprise licensing details.",
    target: "evaluate",
  },
  {
    title: "Architecture QA",
    badge: "Active Route",
    badgeClass: "bg-gray-200 text-teal-700",
    description:
      "Consult on zero-trust device posture integration, API permission scoping, and cryptography models.",
    target: "architecture-vetting",
  },
  {
    title: "Customer Support",
    badge: "Enterprise SLA",
    badgeClass: "bg-gray-200 text-teal-700",
    description: "Secure portal access, diagnostic verification tools, and technical case escalations.",
    target: "customer-support",
  },
  {
    title: "Vulnerability Intake",
    badge: "Encrypted",
    badgeClass: "bg-blue-100 text-slate-500",
    description: "Submit vulnerability details matching strict PGP and safe-disclosure policy boundaries.",
    target: "vulnerability-disclosure",
  },
  {
    title: "Privacy & Data Rights",
    badge: "DPA / GDPR",
    badgeClass: "bg-amber-100 text-amber-700",
    description:
      "Access/Know, Deletion, and correction requests processed strictly by our privacy authority.",
    target: "privacy-rights",
  },
  {
    title: "Legal & Procurement",
    badge: "Governance",
    badgeClass: "bg-stone-200 text-gray-500",
    description: "Contract terms, formal legal service address limits, and vendor compliance profiles.",
    target: "legal-procurement",
  },
  {
    title: "Partnerships",
    badge: "Join Program",
    badgeClass: "bg-gray-200 text-teal-700",
    description:
      "Technology, MSSP/MDR integration alignment, and strategic cloud platform collaboration.",
    target: "partnerships",
  },
  {
    title: "Media & Analyst",
    badge: "Verified Press",
    badgeClass: "bg-stone-200 text-gray-500",
    description: "Briefing coordination, security conference speaking requests, and brand media files.",
    target: "media-analyst",
  },
  {
    title: "Careers",
    badge: "External Link",
    badgeClass: "bg-red-50 text-rose-800",
    description:
      "Access the official Zoiko Talent Portal. Standard support mailboxes cannot process job applications.",
    target: "careers",
  },
];

export const SecureDispatcherSection: React.FC = () => {
  return (
    <section
      id="secure-dispatcher"
      className="w-full bg-[#F0EDE6] py-16 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-28 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="space-y-4">
          <Eyebrow>SECURE DISPATCHER</Eyebrow>
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-hanken leading-tight">
            Select Your Primary Intent
          </h2>
          <p className="text-gray-500 text-base font-medium font-manrope">
            Choose a path to adapt the operational portal panel directly to your required compliance and SLA
            parameters.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ROUTES.map((route) => (
            <button
              key={route.title}
              type="button"
              onClick={() => scrollToSection(route.target)}
              className="group text-left p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 hover:outline-red-500/40 hover:shadow-[0_10px_30px_rgba(169,29,34,0.06)] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-red-500 transition-all duration-200 flex flex-col gap-4 cursor-pointer"
            >
              <div className="w-full flex items-center justify-between gap-3">
                <h3 className="text-slate-900 text-lg font-extrabold font-hanken group-hover:text-red-600 transition-colors">
                  {route.title}
                </h3>
                <span
                  className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-bold font-jetbrains ${route.badgeClass}`}
                >
                  {route.badge}
                </span>
              </div>
              <p className="text-gray-500 text-sm font-normal font-manrope leading-relaxed">
                {route.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
