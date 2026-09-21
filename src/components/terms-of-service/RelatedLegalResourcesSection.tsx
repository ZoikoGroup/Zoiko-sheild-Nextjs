"use client";

import React from "react";
import Link from "next/link";

interface LegalResource {
  title: string;
  desc: string;
  href: string;
}

const RESOURCES: LegalResource[] = [
  {
    title: "Privacy Notice",
    desc: "Details our global telemetry and profile processing boundaries.",
    href: "/privacy-notice",
  },
  {
    title: "Cookie Notice",
    desc: "Describes active session cookies required for portal stability.",
    href: "/cookie-notice",
  },
  {
    title: "Trust Center",
    desc: "Real-time certifications, SOC2 reports, and compliance matrices.",
    href: "/about",
  },
  {
    title: "Accessibility Policy",
    desc: "Our ongoing adherence to WCAG design guidelines across portals.",
    href: "/accessibility-statement",
  },
];

export const RelatedLegalResourcesSection: React.FC = () => {
  return (
    <section className="py-14 md:py-18 bg-[#F0EDE6] border-t border-cyan-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B26] font-sans">
          Related Legal &amp; Compliance Resources
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {RESOURCES.map((res, idx) => (
            <Link
              key={idx}
              href={res.href}
              className="p-5 bg-white rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#A91D22]/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-extrabold text-[#0B1B26] font-sans group-hover:text-[#A91D22] transition-colors">
                    {res.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {res.desc}
                </p>
              </div>

             
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
