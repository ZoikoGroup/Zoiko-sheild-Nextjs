"use client";

import React from "react";
import LegalEntitySection from "./LegalEntitySection";
import CopyrightSection from "./CopyrightSection";
import TrademarksSection from "./TrademarksSection";
import ThirdPartySection from "./ThirdPartySection";
import SoftwareSection from "./SoftwareSection";
import ExternalLinksSection from "./ExternalLinksSection";
import JurisdictionSection from "./JurisdictionSection";
import LegalContactSection from "./LegalContactSection";
import RelatedLegalSection from "./RelatedLegalSection";
import VersionSection from "./VersionSection";
import FaqSection from "./FaqSection";

export default function LegalContentSection() {
  return (
    <section className="bg-[#f7f5f0] w-full">
      <div className="flex flex-col gap-8 lg:gap-16 mx-auto max-w-[1440px] px-4 py-8 lg:px-[80px] lg:py-[60px]">
        <LegalEntitySection />
        <CopyrightSection />
        <TrademarksSection />
        <ThirdPartySection />
        <SoftwareSection />
        <ExternalLinksSection />
        <JurisdictionSection />
        <LegalContactSection />
        <RelatedLegalSection />
        <VersionSection />
        <FaqSection />
      </div>
    </section>
  );
}
