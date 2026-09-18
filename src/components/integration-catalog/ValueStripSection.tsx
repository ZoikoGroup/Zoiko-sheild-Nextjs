"use client";

import React from "react";

export const ValueStripSection: React.FC = () => {
  const items = [
    {
      label: "Deployment",
      desc: "Multi-cloud, hybrid, and air-gapped support",
    },
    {
      label: "Identity",
      desc: "Governed credential storage & Key Vault escrow",
    },
    {
      label: "Governance",
      desc: "Granular authorization rights per connection",
    },
    {
      label: "Evidence",
      desc: "Cryptographic hash lineage preserved continuously",
    },
    {
      label: "Control",
      desc: "Zero rip-and-replace of your active security stack",
    },
  ];

  return (
    <section className="w-full bg-[#F0EDE6] py-8 border-b border-cyan-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-xs font-bold text-red-500 font-mono uppercase tracking-wider block">
                {item.label}
              </span>
              <p className="text-xs text-gray-600 font-medium leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueStripSection;
