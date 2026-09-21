"use client";

import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
  Calendar,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

interface ChronologicalFeedProps {
  onOpenPlaybook?: (releaseId: string) => void;
  onOpenEntryDetails?: (releaseId: string) => void;
  onSelectProductArea?: (area: string) => void;
  activeProductArea?: string;
}

export const ChronologicalFeedSection: React.FC<ChronologicalFeedProps> = ({
  onOpenPlaybook,
  onOpenEntryDetails,
  onSelectProductArea,
  activeProductArea = "All",
}) => {
  const [selectedMonth, setSelectedMonth] = useState("May 2026");

  const releases = [
    {
      id: "REL-2026-089",
      date: "2026-05-18",
      version: "v2.14.0",
      isUpdated: true,
      changeType: "API change",
      impact: "Action required",
      impactLevel: "critical", // red
      area: "Identity & Auth",
      title: "v2.14.0 OAuth2 Client Credentials & Webhook Signature Migration",
      summary:
        "Enforces SHA-256 signatures on all outgoing Zoiko Shield webhooks and transitions endpoint registration directories to OAuth2 clients.",
      actionCallout:
        "Action Required: Update webhook receivers to validate SHA-256 headers before the August 1, 2026 deprecation deadline.",
    },
    {
      id: "REL-2026-088",
      date: "2026-05-15",
      version: "v2.13.8",
      isUpdated: false,
      changeType: "Improvement",
      impact: "No action",
      impactLevel: "info", // green/teal
      area: "Endpoint Security",
      title: "Endpoint Host Telemetry Packet Optimizations",
      summary:
        "Optimizes CPU footprint of the local agent when processing high-velocity telemetry streams from CrowdStrike Falcon sensor registries.",
      actionCallout:
        "Automatic update: Applies seamlessly via agent stream.",
    },
    {
      id: "REL-2026-087",
      date: "2026-05-10",
      version: "v2.13.0-beta.2",
      isUpdated: false,
      changeType: "Release",
      impact: "Review recommended",
      impactLevel: "warning", // amber
      area: "Device Posture",
      title: "Beta Rollout: Jamf Pro Device Posture Sync",
      summary:
        "Introducing real-time Jamf Pro directory sync to correlate local sensor health metrics with MDM compliance statuses.",
      actionCallout:
        "Review recommended: Evaluate group scopes in the integration registry.",
    },
  ];

  const productAreas = [
    { name: "Endpoint Security", count: 1 },
    { name: "Identity & Auth", count: 3 },
    { name: "Device Posture", count: 5 },
    { name: "Privileged Access", count: 7 },
    { name: "Entity Resolution", count: 9 },
    { name: "Evidence Ledger", count: 11 },
  ];

  const archives = [
    { label: "May 2026 (Active)", value: "May 2026" },
    { label: "April 2026", value: "April 2026" },
    { label: "March 2026", value: "March 2026" },
    { label: "2025 Release History (v2.12.x)", value: "2025 History" },
  ];

  const filteredReleases =
    activeProductArea && activeProductArea !== "All"
      ? releases.filter((r) => r.area === activeProductArea)
      : releases;

  return (
    <section
      id="chronological-feed"
      className="w-full bg-[#F0EDE6] py-12 px-4 sm:px-6 lg:px-8 border-b border-cyan-950/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Feed Column (8 cols on lg) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="text-red-500 text-xs font-bold font-mono uppercase tracking-wider">
                  CHRONOLOGICAL FEED
                </span>
              </div>
              <h2 className="text-slate-900 text-2xl sm:text-3xl font-extrabold font-sans">
                Latest Operational Ledger
              </h2>
              <p className="text-gray-500 text-sm font-normal">
                Displaying newest verified changes. Dates and versions are illustrative.
              </p>
            </div>

            {/* Releases List */}
            <div className="space-y-6">
              {filteredReleases.map((entry) => (
                <div
                  key={entry.id}
                  className="p-6 bg-white rounded-xl border border-cyan-950/10 hover:border-cyan-950/20 shadow-xs hover:shadow-md transition-all flex flex-col gap-4"
                >
                  {/* Top Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <span className="text-gray-500 font-bold">{entry.date}</span>
                      <span className="text-cyan-950/20">|</span>
                      <span className="text-red-500 font-bold">{entry.id}</span>
                      {entry.isUpdated && (
                        <span className="px-1.5 py-0.5 bg-blue-100 text-slate-600 rounded text-[10px] font-bold">
                          UPDATED
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-blue-50 text-slate-700 text-xs font-bold font-mono rounded-full border border-blue-200/60">
                        {entry.changeType}
                      </span>

                      {entry.impactLevel === "critical" && (
                        <span className="px-2.5 py-1 bg-red-50 text-rose-800 text-xs font-bold font-mono rounded-full border border-rose-200/70">
                          {entry.impact}
                        </span>
                      )}
                      {entry.impactLevel === "info" && (
                        <span className="px-2.5 py-1 bg-emerald-50 text-teal-800 text-xs font-bold font-mono rounded-full border border-teal-200/70">
                          {entry.impact}
                        </span>
                      )}
                      {entry.impactLevel === "warning" && (
                        <span className="px-2.5 py-1 bg-amber-50 text-amber-800 text-xs font-bold font-mono rounded-full border border-amber-200/70">
                          {entry.impact}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Body */}
                  <div className="space-y-2">
                    <h3 className="text-slate-900 text-lg sm:text-xl font-extrabold font-sans leading-snug">
                      {entry.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {entry.summary}
                    </p>
                  </div>

                  {/* Action Callout Box */}
                  <div
                    className={`p-3.5 rounded-lg text-xs font-medium leading-relaxed ${
                      entry.impactLevel === "critical"
                        ? "bg-red-50/90 text-rose-900 border border-rose-200/60 font-semibold"
                        : "bg-stone-100 text-slate-800 border border-stone-200"
                    }`}
                  >
                    {entry.actionCallout}
                  </div>

                  {/* Bottom Tags & Link */}
                  <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-stone-200 text-slate-800 text-xs font-mono rounded">
                        {entry.version}
                      </span>
                      <span className="px-2 py-0.5 bg-stone-200 text-gray-700 text-xs font-medium rounded">
                        {entry.area}
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        onOpenEntryDetails
                          ? onOpenEntryDetails(entry.id)
                          : document
                              .getElementById("canonical-blueprint")
                              ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="text-red-500 hover:text-red-600 text-xs font-bold font-sans flex items-center gap-1 cursor-pointer group"
                    >
                      <span>Read Full Entry details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Active Action Required Box */}
            <div className="p-5 bg-red-50 rounded-xl border border-rose-800/20 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-rose-800">
                <AlertTriangle className="w-5 h-5 text-rose-800 shrink-0" />
                <h3 className="text-rose-800 text-base font-extrabold font-sans">
                  Active Action Required (1)
                </h3>
              </div>

              <div className="p-4 bg-white rounded-lg border border-rose-200/60 space-y-2.5">
                <div className="text-gray-500 text-[11px] font-bold font-mono">
                  AFFECTED SURFACE: Webhook Delivery
                </div>
                <div className="text-slate-900 text-sm font-extrabold font-sans">
                  SHA-256 Signature Verification
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-gray-500">Deadline:</span>
                  <span className="text-rose-800 font-bold font-mono">
                    August 1, 2026
                  </span>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Legacy MD5 signature schemes are deprecated and will be rejected
                  past this boundary.
                </p>
                <button
                  onClick={() => onOpenPlaybook && onOpenPlaybook("REL-2026-089")}
                  className="w-full mt-1 px-3 py-2 bg-rose-800 hover:bg-rose-900 text-white text-xs font-bold rounded-md transition-colors text-center cursor-pointer"
                >
                  View Migration Playbook
                </button>
              </div>
            </div>

            {/* Filter by Product Area */}
            <div className="p-5 bg-white rounded-xl border border-cyan-950/10 shadow-xs space-y-3">
              <h3 className="text-slate-900 text-base font-extrabold font-sans">
                Filter by Product Area
              </h3>

              <div className="space-y-1">
                {productAreas.map((area) => {
                  const isSelected = activeProductArea === area.name;
                  return (
                    <button
                      key={area.name}
                      onClick={() =>
                        onSelectProductArea &&
                        onSelectProductArea(isSelected ? "All" : area.name)
                      }
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-red-50 text-red-600 font-bold"
                          : "text-gray-600 hover:bg-stone-100 hover:text-slate-900"
                      }`}
                    >
                      <span>{area.name}</span>
                      <span className="font-mono text-[11px] text-gray-400">
                        {area.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Historical Archive */}
            <div className="p-5 bg-white rounded-xl border border-cyan-950/10 shadow-xs space-y-3">
              <h3 className="text-slate-900 text-base font-extrabold font-sans">
                Historical Archive
              </h3>

              <div className="space-y-1">
                {archives.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => setSelectedMonth(item.value)}
                    className={`w-full text-left px-2.5 py-1.5 rounded-md text-sm transition-colors cursor-pointer ${
                      selectedMonth === item.value
                        ? "text-red-500 font-semibold bg-red-50/50"
                        : "text-gray-600 hover:text-slate-900 hover:bg-stone-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
