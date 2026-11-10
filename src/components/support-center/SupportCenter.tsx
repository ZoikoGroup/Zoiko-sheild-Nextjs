"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AlertCircle, ArrowRight } from "lucide-react";
import { knowledgeCards } from "./CurrentKnowledgeAndVerifiedChanges";
import { supportDomainCards } from "./SupportDomains";

type SearchResult = {
  title: string;
  meta: string;
  sectionId: string;
};

// Everything searchable on this page, built from the same data the sections render
const SEARCH_INDEX: (SearchResult & { haystack: string })[] = [
  ...knowledgeCards.map((card) => ({
    title: card.title,
    meta: `Article · ${card.category} · ${card.badge}`,
    sectionId: "support-knowledge",
    haystack: `${card.title} ${card.category} ${card.badge}`.toLowerCase(),
  })),
  ...supportDomainCards.map((card) => ({
    title: card.title,
    meta: `Support domain · ${card.count}`,
    sectionId: "support-domains",
    haystack: `${card.title} ${card.count}`.toLowerCase(),
  })),
];

const searchSupport = (query: string): SearchResult[] => {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  return SEARCH_INDEX.filter((item) => terms.every((t) => item.haystack.includes(t)));
};

export default function SupportCenter() {
  const [query, setQuery] = useState("");
  // null = no search run yet
  const [results, setResults] = useState<SearchResult[] | null>(null);
  const [searchedFor, setSearchedFor] = useState("");
  const [hint, setHint] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) {
      setHint("Enter a keyword, e.g. Okta, CrowdStrike, API.");
      setResults(null);
      return;
    }
    setHint(null);
    setSearchedFor(q);
    setResults(searchSupport(q));
  };

  const goToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative w-full bg-[#F6F4EE] flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-16 overflow-hidden">
      {/* Background blur/shadow element positioned outside on the right */}
      <div className="absolute -right-32 md:-right-20 lg:-right-10 top-1/2 -translate-y-1/2 pointer-events-none z-0">
        <Image
          src="/images/blur.png"
          alt=""
          width={900}
          height={900}
          className="w-[500px] md:w-[700px] lg:w-[950px] opacity-80 object-contain"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Text, Search Input, and CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start justify-center">
          {/* Top Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] tracking-[0.2em] font-mono text-[#C8382C] uppercase font-semibold">
              — SUPPORT CENTER
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-[42px] lg:text-[44px] font-bold text-[#111A1E] leading-[1.1] tracking-tight mb-4">
            Get to the answer — or the right support team — faster.
          </h1>

          {/* Description Paragraph */}
          <p className="text-[#4A555B] text-base sm:text-lg leading-relaxed mb-6 font-normal">
            Search our directly verified documentation pipeline or execute
            read-only local diagnostics. Standard support channels remain active
            for verified administrative entities.
          </p>

          {/* Search Box */}
          <form
            role="search"
            onSubmit={handleSearch}
            className={`w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-[#111A1E15] p-2 flex items-center ${
              results || hint ? "mb-3" : "mb-6"
            }`}
          >
            <div className="pl-3 pr-2 text-[#7A858B]" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <label htmlFor="support-search" className="sr-only">
              Search support
            </label>
            <input
              id="support-search"
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (hint) setHint(null);
              }}
              placeholder="Search errors, feature setups, EDR integrations, API schemas, credential diagnostics..."
              className="w-full bg-transparent text-xs sm:text-sm text-[#111A1E] placeholder-[#7A858B] focus:outline-none px-2 py-2"
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-[#C8382C] text-white text-xs sm:text-sm font-medium tracking-wide shadow-sm hover:bg-[#b53026] transition-colors whitespace-nowrap"
            >
              Search Support
            </button>
          </form>

          {hint && (
            <p className="w-full max-w-2xl text-xs text-[#C8382C] mb-6 px-1">{hint}</p>
          )}

          {results && (
            <div
              role="region"
              aria-live="polite"
              aria-label="Support search results"
              className="w-full max-w-2xl bg-white rounded-2xl border border-[#111A1E15] shadow-sm mb-6 overflow-hidden"
            >
              <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-[#111A1E10]">
                <span className="text-xs text-[#4A555B]">
                  {results.length} result{results.length === 1 ? "" : "s"} for{" "}
                  <span className="font-semibold text-[#111A1E]">&ldquo;{searchedFor}&rdquo;</span>
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setResults(null);
                    setQuery("");
                  }}
                  className="text-xs font-semibold text-[#7A858B] hover:text-[#111A1E] transition-colors"
                >
                  Clear
                </button>
              </div>

              {results.length > 0 ? (
                <ul className="max-h-72 overflow-y-auto divide-y divide-[#111A1E10]">
                  {results.map((r) => (
                    <li key={`${r.sectionId}-${r.title}`}>
                      <button
                        type="button"
                        onClick={() => goToSection(r.sectionId)}
                        className="w-full text-left px-4 py-3 flex items-center justify-between gap-3 hover:bg-[#F6F4EE] transition-colors group"
                      >
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-[#111A1E] group-hover:text-[#C8382C] transition-colors">
                            {r.title}
                          </span>
                          <span className="block text-[11px] font-mono text-[#7A858B] mt-0.5">
                            {r.meta}
                          </span>
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#C8382C] shrink-0" />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="px-4 py-4 text-xs sm:text-sm text-[#4A555B]">
                  No matching articles or support domains. Try a different keyword, or{" "}
                  <Link href="/contact-support" className="font-semibold text-[#C8382C] underline">
                    contact support
                  </Link>
                  .
                </p>
              )}
            </div>
          )}

          {/* Buttons Container */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Link
              href="/contact-support"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C8382C] text-white text-sm font-medium tracking-wide shadow-sm hover:bg-[#b53026] transition-colors"
            >
              Contact Support
            </Link>

            <Link
              href="/system-status"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-transparent border border-[#111A1E30] text-[#111A1E] text-sm font-medium tracking-wide hover:bg-[#111A1E08] transition-colors"
            >
              View System Status
            </Link>
          </div>

          {/* Safeguard Notice */}
          <div className="flex items-center gap-2">
            <AlertCircle className="text-[#B45309] h-3 w-3"/>
            <span className="text-[10px] tracking-[0.15em] font-mono text-[#C8382C] uppercase font-semibold">
              Safeguard: Never share API keys, OAuth secrets, or active session
              tokens.
            </span>
          </div>
        </div>

        {/* Right Column: Large Feature Image Card */}
        <div className="lg:col-span-5">
          <div className="relative w-ful overflow-hidden">
            <div className="relative w-full aspect-[5/4] overflow-hidden">
              <Image
                src="/images/support/1.png"
                alt="Support Center Team & Diagnostics Preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
