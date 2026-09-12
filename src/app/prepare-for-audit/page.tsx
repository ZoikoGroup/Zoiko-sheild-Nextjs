import React from "react";

import { HeroSection } from "@/components/prepare-for-audit/HeroSection";
import { ScopeSection } from "@/components/prepare-for-audit/ScopeSection";
import { ControlsSection } from "@/components/prepare-for-audit/ControlsSection";
import { EvidenceInventorySection } from "@/components/prepare-for-audit/EvidenceInventorySection";
import { GapsSection } from "@/components/prepare-for-audit/GapsSection";
import { WorkspaceSection } from "@/components/prepare-for-audit/WorkspaceSection";
import { PackagesSection } from "@/components/prepare-for-audit/PackagesSection";
import { IndependenceSection } from "@/components/prepare-for-audit/IndependenceSection";
import { NextStepsSection } from "@/components/prepare-for-audit/NextStepsSection";
import { FAQSection } from "@/components/prepare-for-audit/FAQSection";
import { GetStartedSection } from "@/components/prepare-for-audit/GetStartedSection";

export default function PrepareForAuditPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zoiko-beige text-zoiko-dark relative overflow-x-hidden">

      <main className="flex-grow w-full">
        <HeroSection />

        <ScopeSection />

        <ControlsSection />

        <EvidenceInventorySection />

        <GapsSection />

        <WorkspaceSection />

        <PackagesSection />

        <IndependenceSection />

        <NextStepsSection />

        <FAQSection />

        <GetStartedSection />

      </main>

    </div>
  );
}
