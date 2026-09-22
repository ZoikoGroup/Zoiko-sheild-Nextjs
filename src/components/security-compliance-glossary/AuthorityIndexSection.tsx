"use client";

import React from "react";

interface AuthorityIndexProps {
  selectedFramework: string;
  setSelectedFramework: (fw: string) => void;
}

export const AuthorityIndexSection: React.FC<AuthorityIndexProps> = ({
  selectedFramework,
  setSelectedFramework,
}) => {
  const frameworks = [
    {
      badge: "NIST SP 800 & CSF",
      badgeBg: "bg-amber-100 text-slate-900",
      title: "NIST Ecosystem",
      count: "128 terms",
    },
    {
      badge: "ISO/IEC 27000 Series",
      badgeBg: "bg-gray-200 text-slate-900",
      title: "ISO/IEC Registry",
      count: "94 terms",
    },
    {
      badge: "CIS Critical Controls",
      badgeBg: "bg-blue-100 text-slate-900",
      title: "CIS Standards",
      count: "51 terms",
    },
    {
      badge: "Ecosystem Mapping",
      badgeBg: "bg-red-50 text-slate-900",
      title: "MITRE ATT&CK",
      count: "76 terms",
    },
    {
      badge: "Shield Operational Terms",
      badgeBg: "bg-stone-200 text-slate-900",
      title: "Zoiko Product",
      count: "34 terms",
    },
  ];

  return (
    <section className="w-full bg-stone-100 border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <div className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase">
            AUTHORITY INDEX
          </div>
          <h2 className="text-slate-900 text-3xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Browse by Framework and Source
          </h2>
        </div>

        {/* 5 Framework Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {frameworks.map((item, idx) => {
            const isSelected = selectedFramework === item.title;

            return (
              <div
                key={idx}
                onClick={() =>
                  setSelectedFramework(isSelected ? "" : item.title)
                }
                className={`p-6 rounded-xl transition-all cursor-pointer flex flex-col justify-start items-start gap-4 select-none ${
                  isSelected
                    ? "bg-slate-900 text-white shadow-md outline outline-2 outline-red-500"
                    : "bg-white hover:bg-stone-50 outline outline-1 outline-offset-[-1px] outline-cyan-950/10 hover:outline-cyan-950/25 shadow-xs"
                }`}
              >
                <div
                  className={`px-2.5 py-1 rounded-sm text-xs font-bold font-['JetBrains_Mono'] ${item.badgeBg}`}
                >
                  {item.badge}
                </div>

                <div className="space-y-1">
                  <h3
                    className={`text-lg font-extrabold font-['Hanken_Grotesk'] ${
                      isSelected ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <div
                    className={`text-xs font-normal font-['Manrope'] ${
                      isSelected ? "text-slate-300" : "text-gray-500"
                    }`}
                  >
                    {item.count}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
