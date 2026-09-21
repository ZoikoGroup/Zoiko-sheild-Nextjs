"use client";

import React, { useState } from "react";
import { Search, ChevronDown, Link2, RotateCcw, Check } from "lucide-react";

interface FilterSearchBarProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  changeType: string;
  setChangeType: (val: string) => void;
  impactFilter: string;
  setImpactFilter: (val: string) => void;
  productArea: string;
  setProductArea: (val: string) => void;
  rolloutStatus: string;
  setRolloutStatus: (val: string) => void;
  onClearFilters: () => void;
}

export const FilterSearchBarSection: React.FC<FilterSearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  changeType,
  setChangeType,
  impactFilter,
  setImpactFilter,
  productArea,
  setProductArea,
  rolloutStatus,
  setRolloutStatus,
  onClearFilters,
}) => {
  const [copiedUrl, setCopiedUrl] = useState(false);

  const handleCopyShareableUrl = () => {
    const params = new URLSearchParams();
    if (impactFilter !== "All") params.set("impact", impactFilter.toLowerCase().replace(/\s+/g, "_"));
    if (changeType !== "All") params.set("type", changeType.toLowerCase().replace(/\s+/g, "_"));
    if (productArea !== "All") params.set("area", productArea.toLowerCase().replace(/\s+/g, "_"));
    if (searchQuery) params.set("q", searchQuery);

    const shareUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/changelog?${params.toString()}`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2500);
    }
  };

  return (
    <section className="w-full bg-[#F7F5F0] border-b border-cyan-950/10 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Controls Row */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
          {/* Search Box */}
          <div className="w-full lg:max-w-xs relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
           </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword or version..."
              className="w-full pl-9 pr-4 py-2.5 bg-white text-slate-900 placeholder:text-gray-400 text-xs rounded-md border border-cyan-950/10 focus:outline-none focus:ring-1 focus:ring-red-500 shadow-xs"
            />
          </div>

          {/* Dropdown Filters */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {/* Change Type */}
            <div className="relative">
              <select
                value={changeType}
                onChange={(e) => setChangeType(e.target.value)}
                className="w-full appearance-none px-2 py-2.5 bg-white text-slate-800 text-xs rounded-md border border-cyan-950/10 focus:outline-none focus:ring-1 focus:ring-red-500 pr-4 cursor-pointer shadow-xs"
              >
                <option value="All">Change Type: All</option>
                <option value="API Change">API Change</option>
                <option value="Release">Release</option>
                <option value="Improvement">Improvement</option>
                <option value="Fix">Fix</option>
                <option value="Security">Security</option>
                <option value="Webhook Change">Webhook Change</option>
                <option value="Deprecation">Deprecation</option>
                <option value="Retirement">Retirement</option>
                <option value="Docs-Only">Docs-Only</option>
              </select>
            </div>

            {/* Impact */}
            <div className="relative">
              <select
                value={impactFilter}
                onChange={(e) => setImpactFilter(e.target.value)}
                className="w-full appearance-none px-3 py-2.5 bg-white text-slate-800 text-xs rounded-md border border-cyan-950/10 focus:outline-none focus:ring-1 focus:ring-red-500 pr-8 cursor-pointer shadow-xs"
              >
                <option value="All">Impact: All</option>
                <option value="Action Required">Impact: Action Required</option>
                <option value="Review recommended">Impact: Review recommended</option>
                <option value="No action">Impact: No action</option>
              </select>
            </div>

            {/* Product Area */}
            <div className="relative">
              <select
                value={productArea}
                onChange={(e) => setProductArea(e.target.value)}
                className="w-full appearance-none px-3 py-2.5 bg-white text-slate-800 text-xs rounded-md border border-cyan-950/10 focus:outline-none focus:ring-1 focus:ring-red-500 pr-8 cursor-pointer shadow-xs"
              >
                <option value="All">Product Area: All</option>
                <option value="Identity & Auth">Identity & Auth</option>
                <option value="Endpoint Security">Endpoint Security</option>
                <option value="Device Posture">Device Posture</option>
                <option value="Privileged Access">Privileged Access</option>
                <option value="Entity Resolution">Entity Resolution</option>
                <option value="Evidence Ledger">Evidence Ledger</option>
              </select>
            </div>

            {/* Rollout Status */}
            <div className="relative">
              <select
                value={rolloutStatus}
                onChange={(e) => setRolloutStatus(e.target.value)}
                className="w-full appearance-none px-3 py-2.5 bg-white text-slate-800 text-xs rounded-md border border-cyan-950/10 focus:outline-none focus:ring-1 focus:ring-red-500 pr-8 cursor-pointer shadow-xs"
              >
                <option value="All">Rollout Status: All</option>
                <option value="Generally Available">Generally Available</option>
                <option value="Beta Rollout">Beta Rollout</option>
                <option value="Active Migration">Active Migration</option>
                <option value="Retired">Retired</option>
              </select>
            </div>
          </div>

          {/* Clear Filters Button */}
          <button
            onClick={onClearFilters}
            className="px-4 py-2.5 bg-white hover:bg-stone-50 border border-cyan-950/10 rounded-md text-red-500 hover:text-red-600 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs shrink-0"
          >
            <span>Clear Filters</span>
          </button>
        </div>

        {/* Shareable Filter URL Row */}
        <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
          <button
            onClick={handleCopyShareableUrl}
            className="flex items-center gap-1.5 hover:text-slate-800 transition-colors cursor-pointer"
            title="Click to copy shareable URL"
          >
            
            <span className="truncate">
              Shareable filter URL: /changelog?impact={impactFilter.toLowerCase().replace(/\s+/g, "_")}&amp;type={changeType.toLowerCase().replace(/\s+/g, "_")}
            </span>
          </button>
         
        </div>
      </div>
    </section>
  );
};
