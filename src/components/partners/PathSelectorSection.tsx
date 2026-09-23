"use client";

import React from "react";

interface PathCardProps {
  number: string;
  title: string;
  description: string;
  status?: string;
}

const paths: PathCardProps[] = [
  {
    number: "PATH 01",
    title: "Technology & Integration",
    description:
      "Build direct cryptographic connector pipelines to Zoiko Shield's telemetry core.",
    status: "Active",
  },
  {
    number: "PATH 02",
    title: "MSSP, MDR & Managed Security",
    description:
      "Operate under customer-delegated permissions with explicit auditability trails.",
    status: "Active",
  },
  {
    number: "PATH 03",
    title: "System Integration & Consulting",
    description:
      "Design, configure, and validate enterprise-wide trust architectures.",
    status: "Active",
  },
  {
    number: "PATH 04",
    title: "Channel & Reseller",
    description:
      "Govern commercial transactions under rigorous compliance boundaries.",
    status: "Active",
  },
  {
    number: "PATH 05",
    title: "Cloud & Platform Ecosystem",
    description:
      "Deploy co-engineered solutions verified on host hypervisors.",
    status: "Active",
  },
  {
    number: "PATH 06",
    title: "Compliance & Risk Advisory",
    description:
      "Validate evidence ledger artifacts against strict security standards.",
    status: "Active",
  },
];

export default function PathSelectorSection() {
  return (
    <section className="w-full bg-[#F0EDE6] py-20 px-6 sm:px-8 lg:px-12 border-b border-[#123B4C]/10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="font-mono text-xs sm:text-[13px] font-medium tracking-[0.115em] text-[#C44242] uppercase">
              PARTNERSHIP ENGAGEMENT
            </span>
          </div>

          <h2 className="font-hanken font-extrabold text-3xl sm:text-4xl text-[#0A2029]">
            Select Your Operational Path
          </h2>

          <p className="font-manrope text-base text-[#5E6670] leading-relaxed">
            Select the path that matches your technical delivery capabilities.
            Each path is mapped to specific automated checks.
          </p>
        </div>

        {/* Path Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {paths.map((p) => (
            <div
              key={p.number}
              className="bg-white rounded-xl p-6 border border-[#123B4C]/10 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md hover:border-[#123B4C]/25 transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Badge Row */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#C44242]">
                    {p.number}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#E4F0EC] text-[#1F7A6C] font-mono text-[11px] font-bold">
                    {p.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-hanken font-extrabold text-lg text-[#0A2029] leading-snug">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="font-manrope text-sm leading-relaxed text-[#5E6670]">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
