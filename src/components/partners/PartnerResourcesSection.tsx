"use client";

import React from "react";
import Link from "next/link";

const resources = [
  {
    title: "Technical Documentation",
    description:
      "Public API routing schemas, SDK endpoints, and container posture verification guides.",
    linkText: "Browse Docs",
    href: "/developers-documentation",
  },
  {
    title: "Integration Support",
    description:
      "Request development sandbox access, validation runs, and telemetry diagnostics help.",
    linkText: "Submit Ticket",
    href: "/contact",
  },
  {
    title: "Program Guidelines",
    description:
      "Standard legal agreements, change governance, and code-of-conduct models.",
    linkText: "Read Guidelines",
    href: "/terms-of-service",
  },
];

export default function PartnerResourcesSection() {
  return (
    <section className="w-full bg-white py-20 px-6 sm:px-8 lg:px-12 border-b border-[#123B4C]/10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="font-mono text-xs sm:text-[13px] font-medium tracking-[0.115em] text-[#C44242] uppercase">
              PARTNER TOOLKIT
            </span>
          </div>

          <h2 className="font-hanken font-extrabold text-3xl sm:text-4xl text-[#0A2029]">
            Self-Service Resources
          </h2>

          <p className="font-manrope text-base text-[#5E6670] leading-relaxed">
            Authorized partners can access continuous delivery assets, training
            modules, and API update pipelines.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((res, idx) => (
            <div
              key={idx}
              className="bg-[#F7F5F0] rounded-xl p-6 border border-[#123B4C]/10 flex flex-col justify-between space-y-6 shadow-sm hover:border-[#123B4C]/25 transition-all duration-200"
            >
              <div className="space-y-3">
                <h3 className="font-hanken font-extrabold text-lg text-[#0A2029]">
                  {res.title}
                </h3>
                <p className="font-manrope text-sm text-[#5E6670] leading-relaxed">
                  {res.description}
                </p>
              </div>

              <div>
                <Link
                  href={res.href}
                  className="font-manrope font-bold text-sm text-[#C44242] underline underline-offset-4 hover:text-[#b03939] transition-colors"
                >
                  {res.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
