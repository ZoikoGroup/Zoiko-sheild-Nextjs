"use client";

import React from "react";


interface KeyTopic {
  title: string;
  desc: string;
  anchor: string;
}

const TOPICS: KeyTopic[] = [
  {
    title: "Accounts",
    desc: "Credentials & admin roles.",
    anchor: "clause-2",
  },
  {
    title: "Data & Privacy",
    desc: "DPA & security processing.",
    anchor: "clause-5",
  },
  {
    title: "Security",
    desc: "Tenant & EDR configurations.",
    anchor: "clause-4",
  },
  {
    title: "Fees & Billing",
    desc: "Order Forms & renewals.",
    anchor: "clause-3",
  },
  {
    title: "Acceptable Use",
    desc: "Prohibited testing & behavior.",
    anchor: "clause-4",
  },
  {
    title: "IP & Licensing",
    desc: "Zoiko proprietary rights.",
    anchor: "clause-6",
  },
  {
    title: "Suspension",
    desc: "Cure periods & egress lifecycle.",
    anchor: "clause-9",
  },
  {
    title: "Liability Limit",
    desc: "Authoritative caps & exclusions.",
    anchor: "clause-10",
  },
  {
    title: "Governing Law",
    desc: "Disputes, arbitration & venue.",
    anchor: "clause-12",
  },
  {
    title: "Changes",
    desc: "Re-acceptance & notice paths.",
    anchor: "clause-13",
  },
];

export const KeyTopicsNavigatorSection: React.FC = () => {
  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-[#F5F2EB] border-b border-cyan-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B26] font-sans">
          Key Topics Navigator
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4">
          {TOPICS.map((topic, idx) => {
            return (
              <button
                key={idx}
                onClick={() => scrollToAnchor(topic.anchor)}
                className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md hover:border-[#A91D22]/40 text-left transition-all group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  
                  <h3 className="text-sm font-extrabold text-[#0B1B26] font-sans group-hover:text-[#A91D22] transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-normal mt-0.5 line-clamp-1">
                    {topic.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
