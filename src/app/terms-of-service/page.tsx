"use client";

import React from "react";
import {
  HeroSection,
  AgreementTypesSection,
  KeyTopicsNavigatorSection,
  TermsContentSection,
  RelatedLegalResourcesSection,
} from "@/components/terms-of-service";

export default function TermsOfServicePage() {
  return (
    <main className="w-full min-h-screen bg-[#F5F2EB] text-slate-900 antialiased selection:bg-red-500 selection:text-white">
      <HeroSection />
      <AgreementTypesSection />
      <KeyTopicsNavigatorSection />
      <TermsContentSection />
      <RelatedLegalResourcesSection />
    </main>
  );
}
