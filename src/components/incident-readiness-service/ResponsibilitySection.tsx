"use client";

import React from "react";

export default function ResponsibilitySection() {
  const tableData = [
    {
      area: "Readiness scope",
      customer: "Defines business context",
      zoikoShield: "Structures and records",
      shared: "Approved together",
    },
    {
      area: "Contacts / authority",
      customer: "Provides current contacts",
      zoikoShield: "Verifies and preserves",
      shared: "Authority-gated",
    },
    {
      area: "Activation information",
      customer: "Supplies incident facts",
      zoikoShield: "Qualifies the request",
      shared: "Shared validation",
    },
    {
      area: "Technical response",
      customer: "Owns systems and access",
      zoikoShield: "Operates only in route",
      shared: "Governed authority",
    },
    {
      area: "Communications",
      customer: "Owns legal duties",
      zoikoShield: "Supports approved plan",
      shared: "Reviewed release",
    },
    {
      area: "Recovery",
      customer: "Owns business restoration",
      zoikoShield: "Records governed actions",
      shared: "Validated closure",
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C44242]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
              RESPONSIBILITY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
            Clear ownership. Shared authority.
          </h2>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-[18px] overflow-hidden shadow-xl border border-[#123B4C1F]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#123B4C]">
                <tr className="border-b border-white/10 text-white text-xs sm:text-sm font-bold">
                  <th className="py-5 px-6 font-semibold">
                    Responsibility area
                  </th>
                  <th className="py-5 px-6 font-semibold">Customer</th>
                  <th className="py-5 px-6 font-semibold">ZoikoShield</th>
                  <th className="py-5 px-6 font-semibold">
                    Shared / authority-gated
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-xs sm:text-sm text-[#5B6670]">
                {tableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#0A2029]">
                      {row.area}
                    </td>
                    <td className="py-4 px-6">{row.customer}</td>
                    <td className="py-4 px-6">{row.zoikoShield}</td>
                    <td className="py-4 px-6">{row.shared}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
