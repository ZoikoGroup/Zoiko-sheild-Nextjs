"use client";

import React, { useState } from "react";
import {
  HeroSection,
  QuickPathsSection,
  DiscoveryFiltersSection,
  FeaturedGuidesSection,
  FrameworkLibrarySection,
  SpotlightDeepDiveSection,
  CrosswalkExplorerSection,
  LearningPathsSection,
  ChecklistResourcesSection,
  GovernanceCtaSection,
  GuidesFaqSection,
} from "@/components/guides-framework";
import { DemoModal } from "@/components/ui/DemoModal";

export default function GuidesFrameworkPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleDownload = (_id: string) => {
    setIsDemoOpen(true);
  };

  const handleSelectFramework = (_id: string) => {
    const el = document.getElementById("crosswalk-explorer");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#F5F2EB] text-slate-900 antialiased selection:bg-red-500 selection:text-white">
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchSubmit={() => {
          const el = document.getElementById("framework-library");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
      />
      <QuickPathsSection />
      <DiscoveryFiltersSection
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <FeaturedGuidesSection onOpenDemo={() => setIsDemoOpen(true)} />
      <FrameworkLibrarySection onSelectFramework={handleSelectFramework} />
      <SpotlightDeepDiveSection />
      <CrosswalkExplorerSection />
      <LearningPathsSection />
      <ChecklistResourcesSection onDownload={handleDownload} />
      <GovernanceCtaSection onOpenDemo={() => setIsDemoOpen(true)} />
      <GuidesFaqSection />

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </main>
  );
}
