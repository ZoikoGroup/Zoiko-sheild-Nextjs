"use client";

import React from "react";

interface KnowledgeCategoriesProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

export const KnowledgeCategoriesSection: React.FC<KnowledgeCategoriesProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const categories = [
    { title: "Security Foundations", count: "14 active terms", dotColor: "red" },
    { title: "Identity & Access", count: "16 active terms", dotColor: "gray" },
    { title: "Threat & Detection", count: "18 active terms", dotColor: "gray" },
    { title: "Vulnerability & Exposure", count: "20 active terms", dotColor: "red" },
    { title: "Cloud & Infrastructure", count: "22 active terms", dotColor: "gray" },
    { title: "Endpoint & Device", count: "24 active terms", dotColor: "gray" },
    {
      title: "Data Protection & Cryptography",
      count: "26 active terms",
      dotColor: "red",
    },
    {
      title: "Governance Risk & Compliance",
      count: "28 active terms",
      dotColor: "gray",
    },
    {
      title: "Evidence & Auditability",
      count: "30 active terms",
      dotColor: "gray",
    },
    {
      title: "Privacy & Data Governance",
      count: "32 active terms",
      dotColor: "red",
    },
    { title: "Responsible AI", count: "34 active terms", dotColor: "gray" },
    {
      title: "Incident Response & Resilience",
      count: "36 active terms",
      dotColor: "gray",
    },
  ];

  return (
    <section
      id="knowledge-categories"
      className="w-full bg-[#F0EDE6] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <div className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase">
            KNOWLEDGE CATEGORIES
          </div>
          <h2 className="text-slate-900 text-3xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Browse Glossary by Core Topic Area
          </h2>
        </div>

        {/* 12 Topic Cards Grid (4 cols on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => {
            const isSelected = selectedCategory === cat.title;

            return (
              <div
                key={idx}
                onClick={() =>
                  setSelectedCategory(isSelected ? "" : cat.title)
                }
                className={`p-5 rounded-xl transition-all cursor-pointer flex items-center gap-3 select-none ${
                  isSelected
                    ? "bg-slate-900 text-white shadow-md outline outline-2 outline-red-500"
                    : "bg-white hover:bg-stone-50 outline outline-1 outline-offset-[-1px] outline-cyan-950/10 hover:outline-cyan-950/25 shadow-xs"
                }`}
              >
                <div
                  className={`size-2 rounded-full shrink-0 ${
                    cat.dotColor === "red" ? "bg-red-500" : "bg-gray-500"
                  }`}
                />
                <div className="flex-1 flex flex-col items-start gap-1">
                  <h3
                    className={`text-base font-extrabold font-['Hanken_Grotesk'] leading-snug ${
                      isSelected ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {cat.title}
                  </h3>
                  <span
                    className={`text-xs font-normal font-['Manrope'] ${
                      isSelected ? "text-slate-300" : "text-gray-500"
                    }`}
                  >
                    {cat.count}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
