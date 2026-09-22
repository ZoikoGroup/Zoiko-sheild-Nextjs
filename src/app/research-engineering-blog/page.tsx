"use client";

import React, { useState } from "react";
import {
  HeroSection,
  FeaturedInvestigationsSection,
  SearchFilterBarSection,
  TypeTopicPillsSection,
  LatestPublicationsSection,
  CuratedStudyRunsSection,
  OpenSourceArtifactsSection,
  PublicationProtocolsSection,
  SubscribeRegistrySection,
  PublishingTeamsSection,
  RelatedLiteratureSection,
  ResearchCtaBannerSection,
} from "@/components/research-engineering-blog";
import { DemoModal } from "@/components/ui/DemoModal";

export default function ResearchEngineeringBlogPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [selectedTag, setSelectedTag] = useState("all");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedTopic, setSelectedTopic] = useState("");

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
        onExplore={() => scrollToSection("featured-investigations")}
        onSubscribe={() => scrollToSection("subscribe-registry")}
      />

      {/* 2. Featured Investigations (Peer-Reviewed Analysis & Core Systems Work) */}
      <div id="featured-investigations">
        <FeaturedInvestigationsSection
          onSelectInvestigation={(_id) => setIsDemoOpen(true)}
        />
      </div>

      {/* 3. Search & Filter Bar */}
      <SearchFilterBarSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        sortBy={sortBy}
        setSortBy={setSortBy}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />

      {/* 4. Type & Topic Pills */}
      <TypeTopicPillsSection
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />

      {/* 5. Latest Publications */}
      <LatestPublicationsSection onOpenPaper={(_id) => setIsDemoOpen(true)} />

      {/* 6. Curated Study Runs (Deep-Dive Systems Curations) */}
      <CuratedStudyRunsSection onSelectSeries={(_title) => setIsDemoOpen(true)} />

      {/* 7. Open Source & Verifiable Code Tooling */}
      <OpenSourceArtifactsSection />

      {/* 8. Publication Protocols & Editorial Standards */}
      <PublicationProtocolsSection />

      {/* 9. Subscribe to the Publication Registry */}
      <SubscribeRegistrySection />

      {/* 10. Publishing Core Teams */}
      <PublishingTeamsSection />

      {/* 11. Related Platforms & Literature */}
      <RelatedLiteratureSection />

      {/* 12. Research CTA Banner */}
      <ResearchCtaBannerSection
        onRequestDemo={() => setIsDemoOpen(true)}
        onTalkToArchitect={() => setIsDemoOpen(true)}
      />

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </main>
  );
}
