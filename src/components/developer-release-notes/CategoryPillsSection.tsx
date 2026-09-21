"use client";

import React from "react";

interface CategoryPillsProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CATEGORIES = [
  "All Changes",
  "Release",
  "Improvement",
  "Fix",
  "Security",
  "API Change",
  "Webhook Change",
  "Deprecation",
  "Retirement",
  "Docs-Only",
];

export const CategoryPillsSection: React.FC<CategoryPillsProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <section className="w-full bg-[#F0EDE6] border-b border-cyan-950/10 py-3 px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-none">
      <div className="max-w-7xl mx-auto flex items-center gap-1.5 min-w-max">
        {CATEGORIES.map((cat) => {
          const isActive =
            selectedCategory === cat ||
            (cat === "All Changes" && (!selectedCategory || selectedCategory === "All"));

          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat === "All Changes" ? "All" : cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer select-none ${
                isActive
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-transparent text-gray-600 hover:text-slate-900 hover:bg-stone-300/70"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </section>
  );
};
