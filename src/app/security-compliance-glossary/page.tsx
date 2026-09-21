"use client";

import React, { useState } from "react";
import {
  HeroSection,
  TrendingTerminologySection,
  AlphabeticalBrowserSection,
  KnowledgeCategoriesSection,
  AuthorityIndexSection,
  AcronymAliasRegistrySection,
  TermsDirectorySection,
  GlossaryShowcaseSection,
  SourceIntegrityPanelSection,
  RelatedResourcesSection,
  ComplianceAuditTrailSection,
  GovernedSubmissionsSection,
  GlossaryFaqSection,
} from "@/components/security-compliance-glossary";
import { DemoModal } from "@/components/ui/DemoModal";

export default function SecurityComplianceGlossaryPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFramework, setSelectedFramework] = useState("");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedLetter("");
    setSelectedCategory("");
    setSelectedFramework("");
  };

  return (
    <main className="w-full min-h-screen bg-stone-100 text-slate-900 antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Hero Section */}
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={() => scrollToSection("terms-directory")}
        onBrowseAZ={() => scrollToSection("alphabetical-browser")}
        onBrowseTopics={() => scrollToSection("knowledge-categories")}
      />

      {/* 2. Trending Terminology (High-Intent Industry Terms) */}
      <TrendingTerminologySection
        onSelectTerm={(term) => {
          setSearchQuery(term);
          scrollToSection("terms-directory");
        }}
      />

      {/* 3. Alphabetical Browser */}
      <AlphabeticalBrowserSection
        selectedLetter={selectedLetter}
        setSelectedLetter={(letter) => {
          setSelectedLetter(letter);
          scrollToSection("terms-directory");
        }}
      />

      {/* 4. Knowledge Categories (Browse Glossary by Core Topic Area) */}
      <KnowledgeCategoriesSection
        selectedCategory={selectedCategory}
        setSelectedCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToSection("terms-directory");
        }}
      />

      {/* 5. Authority Index (Browse by Framework and Source) */}
      <AuthorityIndexSection
        selectedFramework={selectedFramework}
        setSelectedFramework={(fw) => {
          setSelectedFramework(fw);
          scrollToSection("terms-directory");
        }}
      />

      {/* 6. Acronym & Alias Registry */}
      <AcronymAliasRegistrySection />

      {/* 7. Terms Directory with Filter Pills */}
      <TermsDirectorySection
        searchQuery={searchQuery}
        selectedLetter={selectedLetter}
        selectedCategory={selectedCategory}
        selectedFramework={selectedFramework}
        onResetFilters={handleResetFilters}
        onSelectTerm={() => setIsDemoOpen(true)}
      />

      {/* 8. Glossary Showcase: Deep-Dive Sample Term Detail View */}
      <GlossaryShowcaseSection />

      {/* 9. Metadata Ledger: Source Integrity & Version Panel */}
      <SourceIntegrityPanelSection />

      {/* 10. Continue Learning: Related Resources & Research */}
      <RelatedResourcesSection />

      {/* 11. Compliance Audit Trail: Term Evolution & Status Timeline */}
      <ComplianceAuditTrailSection />

      {/* 12. Governed Submissions: Suggest a Term or Correction */}
      <GovernedSubmissionsSection />

      {/* 13. Detailed Glossary Architecture FAQs */}
      <GlossaryFaqSection />

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </main>
  );
}
