"use client";

import React from "react";
import { Search, ChevronDown } from "lucide-react";

interface SearchFilterBarProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  difficulty: string;
  setDifficulty: (val: string) => void;
  sortBy: string;
  setSortBy: (val: string) => void;
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
}

export const SearchFilterBarSection: React.FC<SearchFilterBarProps> = ({
  searchQuery,
  setSearchQuery,
  difficulty,
  setDifficulty,
  sortBy,
  setSortBy,
  selectedTag,
  setSelectedTag,
}) => {
  const quickTags = [
    { label: "Verified Code [14]", id: "verified" },
    { label: "MITRE Att&ck [8]", id: "mitre" },
    { label: "Erratas [2]", id: "erratas" },
  ];

  return (
    <section className="w-full bg-[#F7F5F0] border-b border-cyan-950/10 py-10 sm:py-12 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Controls Row */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
          {/* Search Box */}
          <div className="flex-1 relative flex items-center bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-cyan-950/10 focus-within:outline-red-500 transition-all px-4 py-3 gap-3">
            <Search className="w-4 h-4 text-gray-500 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword, CVE ID, git commit hash, author team, or source artifact..."
              className="w-full bg-transparent text-slate-900 placeholder:text-gray-500 text-sm font-normal font-['Manrope'] focus:outline-none"
            />
          </div>

          {/* Difficulty Dropdown */}
          <div className="w-full md:w-52 relative">
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full appearance-none px-4 py-3 bg-white text-slate-900 text-sm font-normal font-['Manrope'] rounded-lg outline outline-1 outline-offset-[-1px] outline-cyan-950/10 focus:outline-none focus:outline-red-500 pr-9 cursor-pointer"
            >
              <option value="All">Difficulty: All</option>
              <option value="Intermediate">Difficulty: Intermediate</option>
              <option value="Advanced">Difficulty: Advanced</option>
              <option value="Systems/Kernel">Difficulty: Systems/Kernel</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Sort Dropdown */}
          <div className="w-full md:w-48 relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full appearance-none px-4 py-3 bg-white text-slate-900 text-sm font-normal font-['Manrope'] rounded-lg outline outline-1 outline-offset-[-1px] outline-cyan-950/10 focus:outline-none focus:outline-red-500 pr-9 cursor-pointer"
            >
              <option value="Newest">Sort: Newest</option>
              <option value="Most Cited">Sort: Most Cited</option>
              <option value="Highest Rigor">Sort: Highest Rigor</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Bottom Filter Badges Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
          <div className="flex flex-wrap items-center gap-2">
            {quickTags.map((tag) => {
              const isActive = selectedTag === tag.id;
              return (
                <button
                  key={tag.id}
                  onClick={() => setSelectedTag(isActive ? "all" : tag.id)}
                  className={`px-3 py-1.5 text-xs rounded-[100px] transition-all cursor-pointer ${
                    isActive || (selectedTag === "all" && tag.id === "verified")
                      ? "bg-red-500 text-white font-bold font-['JetBrains_Mono'] shadow-xs"
                      : "bg-stone-200 text-gray-500 font-normal font-['JetBrains_Mono'] hover:bg-stone-300/80 outline outline-1 outline-offset-[-1px] outline-cyan-950/10"
                  }`}
                >
                  {tag.label}
                </button>
              );
            })}
          </div>

          <div className="text-xs font-['JetBrains_Mono'] text-gray-500">
            <span>Showing </span>
            <span className="font-bold text-slate-900">34</span>
            <span> published technical entries</span>
          </div>
        </div>
      </div>
    </section>
  );
};
