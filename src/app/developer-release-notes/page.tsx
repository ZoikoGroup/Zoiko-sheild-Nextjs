"use client";

import React, { useState } from "react";
import {
  HeroSection,
  UpdateChannelsSection,
  FilterSearchBarSection,
  CategoryPillsSection,
  ChronologicalFeedSection,
  MetadataBlueprintSection,
  DeprecationTimelineSection,
  EnterpriseGovernanceSection,
  ChangelogFaqSection,
} from "@/components/developer-release-notes";
import { DemoModal } from "@/components/ui/DemoModal";

export default function DeveloperReleaseNotesPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [changeType, setChangeType] = useState("All");
  const [impactFilter, setImpactFilter] = useState("All");
  const [productArea, setProductArea] = useState("All");
  const [rolloutStatus, setRolloutStatus] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleClearFilters = () => {
    setSearchQuery("");
    setChangeType("All");
    setImpactFilter("All");
    setProductArea("All");
    setRolloutStatus("All");
    setSelectedCategory("All");
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setChangeType("All");
    } else {
      setChangeType(category);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="w-full min-h-screen bg-stone-100 text-slate-900 antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Hero Section */}
      <HeroSection
        onBrowseLatest={() => scrollToSection("chronological-feed")}
        onSubscribe={() => scrollToSection("update-channels")}
      />

      {/* 2. Configure Update Channels */}
      <UpdateChannelsSection />

      {/* 3. Search and Dropdown Filter Bar */}
      <FilterSearchBarSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        changeType={changeType}
        setChangeType={(type) => {
          setChangeType(type);
          setSelectedCategory(type);
        }}
        impactFilter={impactFilter}
        setImpactFilter={setImpactFilter}
        productArea={productArea}
        setProductArea={setProductArea}
        rolloutStatus={rolloutStatus}
        setRolloutStatus={setRolloutStatus}
        onClearFilters={handleClearFilters}
      />

      {/* 4. Category Pills Horizontal Bar */}
      <CategoryPillsSection
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />

      {/* 5. Chronological Feed + Sidebar */}
      <ChronologicalFeedSection
        activeProductArea={productArea}
        onSelectProductArea={(area) => setProductArea(area)}
        onOpenPlaybook={() => scrollToSection("canonical-blueprint")}
        onOpenEntryDetails={() => scrollToSection("canonical-blueprint")}
      />

      {/* 6. Canonical Entry Metadata Blueprint */}
      <MetadataBlueprintSection />

      {/* 7. Active Deprecation & Retirement Paths */}
      <DeprecationTimelineSection />

      {/* 8. Enterprise Change-Management Protocols (Dark Governed Infrastructure) */}
      <EnterpriseGovernanceSection />

      {/* 9. Changelog FAQ */}
      <ChangelogFaqSection />

      {/* Interactive Demo Modal */}
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </main>
  );
}
