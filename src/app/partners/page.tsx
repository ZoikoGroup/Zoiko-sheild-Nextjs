"use client";

import React from "react";
import {
  PartnersHero,
  PathSelectorSection,
  WhyPartnerSection,
  ModelsRegistrySection,
  TrustPrinciplesSection,
  TechStandardsSection,
  ServicesStandardsSection,
  EnablementSection,
  LifecycleSection,
  EcosystemRegistrySection,
  ApplicationFormSection,
  PartnerResourcesSection,
  BuyerPanelSection,
  PartnerCtaBandSection,
  PartnerFaqSection,
} from "@/components/partners";

export default function PartnersPage() {
  return (
    <div className="w-full min-h-screen bg-[#F7F5F0]">
      <PartnersHero />
      <PathSelectorSection />
      <WhyPartnerSection />
      <ModelsRegistrySection />
      <TrustPrinciplesSection />
      <TechStandardsSection />
      <ServicesStandardsSection />
      <EnablementSection />
      <LifecycleSection />
      <EcosystemRegistrySection />
      <ApplicationFormSection />
      <PartnerResourcesSection />
      <BuyerPanelSection />
      <PartnerCtaBandSection />
      <PartnerFaqSection />
    </div>
  );
}
