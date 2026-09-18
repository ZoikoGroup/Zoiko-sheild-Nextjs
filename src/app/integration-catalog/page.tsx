"use client";

import React, { useState } from "react";
import {
  HeroSection,
  ValueStripSection,
  FilterSearchBarSection,
  SystemTiersSection,
  IntegrationsGridSection,
  FeaturedConnectorDetailSection,
  CryptographicLineageSection,
  AssuranceFlowExamplesSection,
  PlatformOperationsSection,
  CustomIntegrationRequestSection,
  EnterpriseStackCtaSection,
  IntegrationCatalogFaqSection,
} from "@/components/integration-catalog";
import { DemoModal } from "@/components/ui/DemoModal";

export default function IntegrationCatalogPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTier, setSelectedTier] = useState("all");

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedTier("all");
  };

  return (
    <main className="w-full min-h-screen bg-[#F5F2EB] text-slate-900 antialiased selection:bg-red-500 selection:text-white">
      <HeroSection onOpenDemo={() => setIsDemoOpen(true)} />
      <ValueStripSection />
      <FilterSearchBarSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onReset={handleResetFilters}
      />
      <SystemTiersSection
        selectedTier={selectedTier}
        setSelectedTier={setSelectedTier}
      />
      <IntegrationsGridSection />
      <FeaturedConnectorDetailSection />
      <CryptographicLineageSection />
      <AssuranceFlowExamplesSection />
      <PlatformOperationsSection />
      <CustomIntegrationRequestSection />
      <EnterpriseStackCtaSection onOpenDemo={() => setIsDemoOpen(true)} />
      <IntegrationCatalogFaqSection />

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </main>
  );
}
