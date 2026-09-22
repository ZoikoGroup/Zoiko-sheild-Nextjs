"use client";

import React, { useState, useMemo } from "react";
import { X, ChevronDown, CircleX } from "lucide-react";

interface TermsDirectoryProps {
  searchQuery: string;
  selectedLetter: string;
  selectedCategory: string;
  selectedFramework: string;
  onResetFilters: () => void;
  onSelectTerm?: (term: string) => void;
}

interface TermItem {
  id: string;
  title: string;
  acronym?: string;
  badge: string;
  badgeType: "teal" | "slate" | "amber" | "rose";
  definition: string;
  category: string;
  framework: string;
  letter: string;
  lastSync: string;
  remediation: string;
}

export const TermsDirectorySection: React.FC<TermsDirectoryProps> = ({
  searchQuery,
  selectedLetter,
  selectedCategory,
  selectedFramework,
  onResetFilters,
  onSelectTerm,
}) => {
  const [sortBy, setSortBy] = useState("Most Visited");
  const [activeFilterSources, setActiveFilterSources] = useState(true);
  const [activeFilterTopic, setActiveFilterTopic] = useState(true);
  const [activeFilterFramework, setActiveFilterFramework] = useState(true);
  const [activeFilterStatus, setActiveFilterStatus] = useState(true);

  const allTerms: TermItem[] = [
    {
      id: "term-1",
      title: "Audit Trail",
      acronym: "AT",
      badge: "NIST SP 800-53",
      badgeType: "teal",
      definition:
        "A chronological cryptographic ledger of system activities, enabling reconstruction of events to verify security posture and source-declared evidence.",
      category: "Evidence & Auditability",
      framework: "NIST Ecosystem",
      letter: "A",
      lastSync: "Last Sync: 10m ago",
      remediation: "Remediation: Read/Write",
    },
    {
      id: "term-2",
      title: "Role Elevation",
      acronym: "PIM",
      badge: "CyberArk / Entra",
      badgeType: "slate",
      definition:
        "The process of temporarily granting administrative or privileged access rights to a user session based on explicit security approvals.",
      category: "Identity & Access",
      framework: "Zoiko Product",
      letter: "R",
      lastSync: "Last Sync: Telemetry Active",
      remediation: "Remediation: Safe / Read-Only",
    },
    {
      id: "term-3",
      title: "Continuous Assurance",
      acronym: "CA",
      badge: "NIST SP 800-137",
      badgeType: "teal",
      definition:
        "The continuous assessment and cryptographic auditing of controls, proving steady state compliance over isolated, periodic reviews.",
      category: "Evidence & Auditability",
      framework: "NIST Ecosystem",
      letter: "C",
      lastSync: "Last Sync: 5m ago",
      remediation: "Remediation: Automated Read",
    },
    {
      id: "term-4",
      title: "Zero Trust Architecture",
      acronym: "ZTA",
      badge: "NIST SP 800-207",
      badgeType: "slate",
      definition:
        "A cybersecurity paradigm focused on resource protection and the premise that trust is never granted implicitly but must be evaluated continuously.",
      category: "Identity & Access",
      framework: "NIST Ecosystem",
      letter: "Z",
      lastSync: "Last Sync: 1h ago",
      remediation: "Remediation: Identity Intercept",
    },
    {
      id: "term-5",
      title: "Non-Repudiation",
      acronym: "NR",
      badge: "ISO/IEC 27001",
      badgeType: "teal",
      definition:
        "The assurance that the sender of data is provided with proof of delivery and the recipient is provided with proof of the sender's identity.",
      category: "Data Protection & Cryptography",
      framework: "ISO/IEC Registry",
      letter: "N",
      lastSync: "Last Sync: 12m ago",
      remediation: "Remediation: Cryptographic Proof",
    },
    {
      id: "term-6",
      title: "Cryptographic Agility",
      acronym: "CA-PQ",
      badge: "NIST Post-Quantum",
      badgeType: "amber",
      definition:
        "The capacity for an information system to rapidly adopt alternative cryptographic primitives and key management models without systemic redesign.",
      category: "Data Protection & Cryptography",
      framework: "NIST Ecosystem",
      letter: "C",
      lastSync: "Last Sync: 1d ago",
      remediation: "Remediation: Algorithm Swap",
    },
    {
      id: "term-7",
      title: "Endpoint Posture Assessment",
      acronym: "EPA",
      badge: "RFC 5209",
      badgeType: "amber",
      definition:
        "The status and cryptographic compliance state of a remote endpoint host compared to target enterprise configuration baseline policies.",
      category: "Endpoint & Device",
      framework: "CIS Standards",
      letter: "E",
      lastSync: "Last Sync: Live Telemetry",
      remediation: "Remediation: Host Agent Sweep",
    },
    {
      id: "term-8",
      title: "Adversary Emulation",
      acronym: "ATT&CK",
      badge: "MITRE ATT&CK v14",
      badgeType: "rose",
      definition:
        "A threat-informed testing method where authorized operators mimic the tactics, techniques, and procedures (TTPs) of real-world cyber adversaries.",
      category: "Threat & Detection",
      framework: "MITRE ATT&CK",
      letter: "A",
      lastSync: "Last Sync: 2h ago",
      remediation: "Remediation: TTP Surface Match",
    },
  ];

  const filteredTerms = useMemo(() => {
    return allTerms.filter((term) => {
      // Search query matching
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = term.title.toLowerCase().includes(q);
        const matchesDef = term.definition.toLowerCase().includes(q);
        const matchesBadge = term.badge.toLowerCase().includes(q);
        const matchesCat = term.category.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDef && !matchesBadge && !matchesCat) {
          return false;
        }
      }

      // Alphabetical letter matching
      if (selectedLetter && term.letter.toUpperCase() !== selectedLetter.toUpperCase()) {
        return false;
      }

      // Category matching
      if (selectedCategory && term.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }

      // Framework matching
      if (selectedFramework && term.framework.toLowerCase() !== selectedFramework.toLowerCase()) {
        return false;
      }

      return true;
    });
  }, [allTerms, searchQuery, selectedLetter, selectedCategory, selectedFramework]);

  const hasActiveFilter =
    Boolean(searchQuery) ||
    Boolean(selectedLetter) ||
    Boolean(selectedCategory) ||
    Boolean(selectedFramework);

  return (
    <section
      id="terms-directory"
      className="w-full bg-stone-100 border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="text-slate-900 text-2xl font-extrabold font-['Hanken_Grotesk']">
            Showing {filteredTerms.length > 0 ? filteredTerms.length : allTerms.length}{" "}
            Security &amp; Compliance Terms
          </h2>

          <div className="flex items-center gap-3">
            <span className="text-gray-500 text-sm font-normal font-['Manrope']">
              Sort by:
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none px-3.5 py-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-cyan-950/10 text-slate-900 text-sm font-semibold font-['Manrope'] pr-8 cursor-pointer focus:outline-red-500"
              >
                <option value="Most Visited">Most Visited</option>
                <option value="Alphabetical">Alphabetical (A–Z)</option>
                <option value="Recently Updated">Recently Updated</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-900 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Filter Pills Row */}
        <div className="flex flex-wrap items-center gap-3">
          {activeFilterSources && (
            <button
              type="button"
              onClick={() => setActiveFilterSources(false)}
              className="px-3.5 py-2 bg-white rounded-[100px] outline outline-1 outline-offset-[-1px] outline-red-500 text-red-500 text-xs font-semibold font-['Manrope'] flex items-center gap-2 hover:bg-red-50 transition-colors"
            >
              <span>All Sources</span>
              <CircleX className="w-3 h-3" />
            </button>
          )}

          {activeFilterTopic && (
            <button
              type="button"
              onClick={() => setActiveFilterTopic(false)}
              className="px-3.5 py-2 bg-white rounded-[100px] outline outline-1 outline-offset-[-1px] outline-red-500 text-red-500 text-xs font-semibold font-['Manrope'] flex items-center gap-2 hover:bg-red-50 transition-colors"
            >
              <span>
                Topic: {selectedCategory ? selectedCategory : "Identity"}
              </span>
              <X className="w-3 h-3" />
            </button>
          )}

          {activeFilterFramework && (
            <button
              type="button"
              onClick={() => setActiveFilterFramework(false)}
              className="px-3.5 py-2 bg-white rounded-[100px] outline outline-1 outline-offset-[-1px] outline-red-500 text-red-500 text-xs font-semibold font-['Manrope'] flex items-center gap-2 hover:bg-red-50 transition-colors"
            >
              <span>
                Framework: {selectedFramework ? selectedFramework : "NIST"}
              </span>
              <X className="w-3 h-3" />
            </button>
          )}

          {activeFilterStatus && (
            <button
              type="button"
              onClick={() => setActiveFilterStatus(false)}
              className="px-3.5 py-2 bg-white rounded-[100px] outline outline-1 outline-offset-[-1px] outline-red-500 text-red-500 text-xs font-semibold font-['Manrope'] flex items-center gap-2 hover:bg-red-50 transition-colors"
            >
              <span>Status: Active</span>
              <X className="w-3 h-3" />
            </button>
          )}

          {(hasActiveFilter ||
            !activeFilterSources ||
            !activeFilterTopic ||
            !activeFilterFramework ||
            !activeFilterStatus) && (
            <button
              type="button"
              onClick={() => {
                onResetFilters();
                setActiveFilterSources(true);
                setActiveFilterTopic(true);
                setActiveFilterFramework(true);
                setActiveFilterStatus(true);
              }}
              className="px-3 py-2 text-gray-500 hover:text-slate-900 text-xs font-semibold font-['Manrope'] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Term Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectTerm && onSelectTerm(item.title)}
                className="p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 hover:outline-cyan-950/25 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-4 cursor-pointer group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-slate-900 text-lg font-extrabold font-['Hanken_Grotesk'] group-hover:text-red-500 transition-colors">
                      {item.title}
                    </h3>
                    <div
                      className={`px-2 py-0.5 rounded-sm inline-flex items-center text-xs font-bold font-['JetBrains_Mono'] shrink-0 ${
                        item.badgeType === "teal"
                          ? "bg-gray-200 text-teal-700"
                          : item.badgeType === "amber"
                          ? "bg-amber-100 text-amber-700"
                          : item.badgeType === "rose"
                          ? "bg-red-50 text-rose-800"
                          : "bg-blue-100 text-slate-500"
                      }`}
                    >
                      {item.badge}
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm font-normal font-['Manrope'] leading-5">
                    {item.definition}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-stone-100">
                  <span className="text-slate-400 text-xs font-normal font-['JetBrains_Mono']">
                    {item.lastSync}
                  </span>
                  <div className="w-px h-3 bg-cyan-950/10" />
                  <span className="text-slate-400 text-xs font-normal font-['JetBrains_Mono']">
                    {item.remediation}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full p-12 bg-white rounded-xl text-center space-y-3">
              <p className="text-slate-900 font-bold font-['Hanken_Grotesk']">
                No matching terms found
              </p>
              <p className="text-gray-500 text-xs font-['Manrope']">
                Try adjusting your search query, alphabetical letter, or category filters.
              </p>
              <button
                type="button"
                onClick={onResetFilters}
                className="mt-2 px-4 py-2 bg-red-500 text-white text-xs font-bold font-['Manrope'] rounded-lg"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
