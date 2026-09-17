import React from "react";
import { ChevronDown, Search } from "lucide-react";

export default function FrameworkDirectory() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#111827] px-6 py-12 md:px-12 font-sans antialiased flex justify-center">
      {/* Top header & title section */}
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3">
              FRAMEWORK DIRECTORY
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
              Find an approved relationship record.
            </h1>
            <p className="text-[#4B5563] text-sm md:text-base max-w-2xl leading-normal">
              Results sort deterministically by approved name, then exact
              edition. Status refers to ZoikoShield&apos;s public relationship
              record—not customer compliance.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto text-sm text-[#374151]">
            <span className="text-[#4B5563]">Sort:</span>
            <button className="flex items-center gap-1.5 font-medium text-[#111827] hover:opacity-80 transition-opacity">
              <span>Approved name A-Z</span>
              <ChevronDown className="w-4 h-4 text-[#4B5563]" />
            </button>
          </div>
        </div>

        {/* Filters bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mb-10">
          {/* Search input */}
          <div className="relative sm:col-span-2 lg:col-span-1">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-[#9CA3AF]">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search approved references..."
              className="w-full bg-white border border-[#E5E7EB] rounded-lg pl-9 pr-4 py-2.5 text-sm text-[#111827] placeholder-[#9CA3AF] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#9CA3AF]"
            />
          </div>

          {/* Filter Dropdown 1 */}
          <div className="relative">
            <button className="w-full bg-white border border-[#E5E7EB] rounded-lg px-3.5 py-2.5 text-sm text-[#374151] flex items-center justify-between shadow-sm hover:bg-[#F9FAFB] transition-colors">
              <span className="truncate">Reference type</span>
              <ChevronDown className="w-4 h-4 text-[#6B7280] shrink-0" />
            </button>
          </div>

          {/* Filter Dropdown 2 */}
          <div className="relative">
            <button className="w-full bg-white border border-[#E5E7EB] rounded-lg px-3.5 py-2.5 text-sm text-[#374151] flex items-center justify-between shadow-sm hover:bg-[#F9FAFB] transition-colors">
              <span className="truncate">Relationship type</span>
              <ChevronDown className="w-4 h-4 text-[#6B7280] shrink-0" />
            </button>
          </div>

          {/* Filter Dropdown 3 */}
          <div className="relative">
            <button className="w-full bg-white border border-[#E5E7EB] rounded-lg px-3.5 py-2.5 text-sm text-[#374151] flex items-center justify-between shadow-sm hover:bg-[#F9FAFB] transition-colors">
              <span className="truncate">Product / service scope</span>
              <ChevronDown className="w-4 h-4 text-[#6B7280] shrink-0" />
            </button>
          </div>

          {/* Filter Dropdown 4 */}
          <div className="relative">
            <button className="w-full bg-white border border-[#E5E7EB] rounded-lg px-3.5 py-2.5 text-sm text-[#374151] flex items-center justify-between shadow-sm hover:bg-[#F9FAFB] transition-colors">
              <span className="truncate">Status</span>
              <ChevronDown className="w-4 h-4 text-[#6B7280] shrink-0" />
            </button>
          </div>

          {/* Filter Dropdown 5 */}
          <div className="relative">
            <button className="w-full bg-white border border-[#E5E7EB] rounded-lg px-3.5 py-2.5 text-sm text-[#374151] flex items-center justify-between shadow-sm hover:bg-[#F9FAFB] transition-colors">
              <span className="truncate">Edition family</span>
              <ChevronDown className="w-4 h-4 text-[#6B7280] shrink-0" />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#F3F4F6] flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                  Approved name
                </p>
                <p className="text-base font-semibold text-[#111827]">
                  Controlled placeholder A
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                  Authority
                </p>
                <p className="text-sm font-medium text-[#111827]">
                  Authority pending approval
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                  Edition / version
                </p>
                <p className="text-sm font-medium text-[#111827]">
                  Exact edition pending
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                  Relationship
                </p>
                <p className="text-sm font-medium text-[#111827]">
                  Mapped-to · conditional
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                  Scope summary
                </p>
                <p className="text-sm font-medium text-[#111827]">
                  Defined product scope pending
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                  Status
                </p>
                <p className="text-sm font-medium text-[#111827]">
                  Under review
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                  Owner / review date
                </p>
                <p className="text-sm font-medium text-[#111827]">
                  Owner: Content governance · Review: pending
                </p>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#F3F4F6]">
              <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                Limitations / rights
              </p>
              <p className="text-sm font-medium text-[#111827]">
                Limitations and rights review required
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#F3F4F6] flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                  Approved name
                </p>
                <p className="text-base font-semibold text-[#111827]">
                  Controlled placeholder B
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                  Authority
                </p>
                <p className="text-sm font-medium text-[#111827]">
                  Publisher pending approval
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                  Edition / version
                </p>
                <p className="text-sm font-medium text-[#111827]">
                  Exact version pending
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                  Relationship
                </p>
                <p className="text-sm font-medium text-[#111827]">
                  Service support · conditional
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                  Scope summary
                </p>
                <p className="text-sm font-medium text-[#111827]">
                  Defined service scope pending
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                  Status
                </p>
                <p className="text-sm font-medium text-[#111827]">
                  Rights restricted
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                  Owner / review date
                </p>
                <p className="text-sm font-medium text-[#111827]">
                  Owner: Legal review · Review: stale
                </p>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#F3F4F6]">
              <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                Limitations / rights
              </p>
              <p className="text-sm font-medium text-[#111827]">
                No download; excerpt rights unconfirmed
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#F3F4F6] flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                  Approved name
                </p>
                <p className="text-base font-semibold text-[#111827]">
                  No approved record
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                  Authority
                </p>
                <p className="text-sm font-medium text-[#111827]">—</p>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                  Edition / version
                </p>
                <p className="text-sm font-medium text-[#111827]">—</p>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                  Relationship
                </p>
                <p className="text-sm font-medium text-[#111827]">—</p>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                  Scope summary
                </p>
                <p className="text-sm font-medium text-[#111827]">—</p>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                  Status
                </p>
                <p className="text-sm font-medium text-[#111827]">No results</p>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                  Owner / review date
                </p>
                <p className="text-sm font-medium text-[#111827]">—</p>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#F3F4F6]">
              <p className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-1">
                Limitations / rights
              </p>
              <p className="text-sm font-medium text-[#111827]">
                Reset filters to return to the full directory
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
