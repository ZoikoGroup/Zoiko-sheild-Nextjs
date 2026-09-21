"use client";

import React from "react";
import { Search, ChevronDown, RotateCcw } from "lucide-react";

interface FilterSearchBarSectionProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: string;
  setSelectedCategory: (c: string) => void;
  onReset: () => void;
}

export const FilterSearchBarSection: React.FC<FilterSearchBarSectionProps> = ({
  searchQuery,
  setSearchQuery,
  onReset,
}) => {
  return (
    <section className="w-full bg-white py-5 border-b border-cyan-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="flex-1 max-w-xl h-11 px-4 bg-stone-100 rounded-lg border border-cyan-950/10 flex items-center gap-3">
            <Search className="w-4 h-4 text-gray-500 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search integrations, vendors, products, or use cases..."
              className="w-full bg-transparent text-sm text-slate-900 placeholder:text-gray-500 focus:outline-none"
            />
          </div>

          {/* Filters & Counter */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="h-11 px-3.5 rounded-lg border border-cyan-950/10 flex items-center gap-1.5 text-sm font-semibold text-cyan-950 bg-white">
              <span>Category</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </div>

            <div className="h-11 px-3.5 rounded-lg border border-cyan-950/10 flex items-center gap-1.5 text-sm font-semibold text-cyan-950 bg-white">
              <span>Use case</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </div>

            <div className="h-11 px-3.5 rounded-lg border border-cyan-950/10 flex items-center gap-1.5 text-sm font-semibold text-cyan-950 bg-white">
              <span>Availability</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </div>

            <div className="h-11 px-3.5 rounded-lg border border-cyan-950/10 flex items-center gap-1.5 text-sm font-semibold text-cyan-950 bg-white">
              <span>Deployment</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </div>

            <div className="h-11 px-3.5 rounded-lg border border-cyan-950/10 flex items-center gap-1.5 text-sm font-semibold text-cyan-950 bg-white">
              <span>Auth</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </div>

            <div className="h-11 px-3.5 rounded-lg border border-cyan-950/10 flex items-center gap-1.5 text-sm font-semibold text-cyan-950 bg-white">
              <span>Sort: Popular</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </div>

            <button
              onClick={onReset}
              className="h-11 px-3.5 text-sm font-semibold text-red-500 hover:text-red-600 transition-colors flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>

            <div className="h-10 px-4 bg-stone-100 rounded-lg border border-cyan-950/10 flex items-center justify-center font-mono text-xs font-bold text-slate-900 ml-auto lg:ml-2">
              42 CONNECTORS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterSearchBarSection;
