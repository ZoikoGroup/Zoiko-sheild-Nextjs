"use client";

import React from "react";
import TocSidebar from "./TocSidebar";
import AtAGlanceSection from "./AtAGlanceSection";
import ScopeSection from "./ScopeSection";
import RolesSection from "./RolesSection";
import PersonalDataSection from "./PersonalDataSection";
import LegalBasisSection from "./LegalBasisSection";
import TelemetrySection from "./TelemetrySection";
import AiSection from "./AiSection";
import SharingSection from "./SharingSection";
import TransfersSection from "./TransfersSection";
import RetentionSection from "./RetentionSection";
import SecuritySection from "./SecuritySection";
import RightsSection from "./RightsSection";
import UsStatesSection from "./UsStatesSection";
import CookiesSection from "./CookiesSection";
import ChildrenSection from "./ChildrenSection";
import ContactsSection from "./ContactsSection";
import UpdatesSection from "./UpdatesSection";
import DpoSection from "./DpoSection";
import EnterpriseResourcesSection from "./EnterpriseResourcesSection";

// Each section gets a stable anchor so the table of contents (and links from
// other pages, e.g. /privacy-notice#privacy-rights-desk) can jump to it.
const SECTIONS: { id: string; Component: React.ComponentType }[] = [
  { id: "at-a-glance", Component: AtAGlanceSection },
  { id: "scope", Component: ScopeSection },
  { id: "privacy-roles", Component: RolesSection },
  { id: "personal-data", Component: PersonalDataSection },
  { id: "legal-basis", Component: LegalBasisSection },
  { id: "telemetry", Component: TelemetrySection },
  { id: "ai-processing", Component: AiSection },
  { id: "sharing", Component: SharingSection },
  { id: "transfers", Component: TransfersSection },
  { id: "retention", Component: RetentionSection },
  { id: "security", Component: SecuritySection },
  { id: "privacy-rights-desk", Component: RightsSection },
  { id: "us-states", Component: UsStatesSection },
  { id: "cookies", Component: CookiesSection },
  { id: "children", Component: ChildrenSection },
  { id: "contacts", Component: ContactsSection },
  { id: "updates", Component: UpdatesSection },
  { id: "dpo", Component: DpoSection },
  { id: "enterprise-resources", Component: EnterpriseResourcesSection },
];

export default function MainContentSection() {
  return (
    <section className="bg-[#f7f5f0] w-full">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mx-auto max-w-[1440px] px-4 py-8 lg:px-[108px] lg:py-10">
        <TocSidebar />
        <div className="flex flex-col gap-8 lg:gap-[60px] items-start w-full lg:flex-1 lg:min-w-0">
          {SECTIONS.map(({ id, Component }) => (
            <div key={id} id={id} className="scroll-mt-28 w-full">
              <Component />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
