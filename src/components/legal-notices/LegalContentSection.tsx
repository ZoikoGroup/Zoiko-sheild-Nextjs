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

import { LEGAL_OUTLINE } from "./outline";

// Order must match LEGAL_OUTLINE so each Navigation Outline entry lands on its section.
const COMPONENTS: Record<(typeof LEGAL_OUTLINE)[number]["id"], React.ComponentType> = {
  "legal-entity": LegalEntitySection,
  copyright: CopyrightSection,
  trademarks: TrademarksSection,
  "third-party-rights": ThirdPartySection,
  "software-docs": SoftwareSection,
  "external-linking": ExternalLinksSection,
  jurisdiction: JurisdictionSection,
  "service-contact": LegalContactSection,
  "related-governance": RelatedLegalSection,
  "version-history": VersionSection,
  faq: FaqSection,
};

export default function LegalContentSection() {
  return (
    <section className="bg-[#f7f5f0] w-full">
      <div className="flex flex-col gap-8 lg:gap-16 mx-auto max-w-[1440px] px-4 py-8 lg:px-[80px] lg:py-[60px]">
        {LEGAL_OUTLINE.map(({ id }) => {
          const Component = COMPONENTS[id];
          return (
            <div key={id} id={id} className="scroll-mt-28 w-full">
              <Component />
            </div>
          );
        })}
      </div>
    </section>
  );
}
