import React from "react";
import type { Metadata } from "next";
import {
  ContactHeroSection,
  SecureDispatcherSection,
  EvaluateSection,
  ArchitectureVettingSection,
  CustomerSupportSection,
  VulnerabilityDisclosureSection,
  PrivacyRightsSection,
  LegalProcurementSection,
  PartnershipsSection,
  MediaAnalystSection,
  CareersSection,
  FallbackInquirySection,
  VerifiedLocationsSection,
  DispatchTransparencySection,
  ContactFaqSection,
} from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Zoiko Shield | Sales, Support, Security & Legal",
  description:
    "Reach the right Zoiko Shield team: sales evaluation, security architecture vetting, customer support, vulnerability disclosure, privacy requests, and legal compliance.",
};

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-stone-100 text-slate-900 antialiased selection:bg-red-500 selection:text-white">
      {/* Hero */}
      <ContactHeroSection />

      {/* Secure Dispatcher (intent routing grid) */}
      <SecureDispatcherSection />

      {/* 01. Evaluate Zoiko Shield */}
      <EvaluateSection />

      {/* 02. Architecture & Security Vetting */}
      <ArchitectureVettingSection />

      {/* 03. Existing Customer Support */}
      <CustomerSupportSection />

      {/* 04. Security Vulnerability Disclosure */}
      <VulnerabilityDisclosureSection />

      {/* 05. Privacy & Data Subject Rights */}
      <PrivacyRightsSection />

      {/* 06. Legal & Procurement Guidelines */}
      <LegalProcurementSection />

      {/* 07. Partnership Development */}
      <PartnershipsSection />

      {/* 08. Media & Analyst Engagement */}
      <MediaAnalystSection />

      {/* 09. Careers & Talent */}
      <CareersSection />

      {/* 10. Fallback General Inquiry */}
      <FallbackInquirySection />

      {/* 11. Verified Locations */}
      <VerifiedLocationsSection />

      {/* 12. Routing Workflow & Real-Time Monitoring */}
      <DispatchTransparencySection />

      {/* 13. Architecture & Routing FAQ */}
      <ContactFaqSection />
    </main>
  );
}
