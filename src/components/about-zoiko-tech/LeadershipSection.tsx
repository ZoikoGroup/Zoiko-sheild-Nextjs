"use client";

import React from "react";
import { ShieldAlert, Users, Database } from "lucide-react";

interface LeadershipCard {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  note: string;
}

const LEADERSHIP: LeadershipCard[] = [
  {
    icon: <ShieldAlert className="w-7 h-7 text-slate-900" />,
    title: "Security Architecture",
    subtitle: "Stewardship & Core Platform Design",
    note: "[Official profile on request]",
  },
  {
    icon: <Users className="w-7 h-7 text-slate-900" />,
    title: "Ecosystem Stewardship",
    subtitle: "Enterprise Delivery & Partner Success",
    note: "[Official profile on request]",
  },
  {
    icon: <Database className="w-7 h-7 text-slate-900" />,
    title: "AI & Data Governance",
    subtitle: "Auditability & Responsible Operations",
    note: "[Official profile on request]",
  },
];

export const LeadershipSection: React.FC = () => {
  return (
    <section
      id="leadership-section"
      className="w-full bg-[#F0EDE6] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <div className="w-6 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-wider">
              ACCOUNTABILITY &amp; STEWARDSHIP
            </span>
          </div>

          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Our Leadership &amp; Governance
          </h2>

          <p className="text-gray-500 text-base font-medium font-['Manrope'] leading-6">
            Zoiko Tech&apos;s product and security design parameters are stewarded by experienced security architects. Vetted executive biographical profiles are maintained inside official registry data.
          </p>
        </div>

        {/* 3 Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEADERSHIP.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 hover:outline-cyan-950/25 shadow-xs hover:shadow-md transition-all flex flex-col justify-center items-start gap-4"
            >
              <div className="w-16 h-16 bg-stone-200 rounded-full outline outline-1 outline-offset-[-1px] outline-cyan-950/10 flex items-center justify-center">
                {item.icon}
              </div>

              <div className="space-y-1">
                <h3 className="text-slate-900 text-lg font-extrabold font-['Hanken_Grotesk']">
                  {item.title}
                </h3>
                <div className="text-gray-500 text-xs sm:text-sm font-normal font-['Manrope']">
                  {item.subtitle}
                </div>
              </div>

              <div className="text-red-500 text-xs font-normal font-['JetBrains_Mono'] pt-1">
                {item.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
