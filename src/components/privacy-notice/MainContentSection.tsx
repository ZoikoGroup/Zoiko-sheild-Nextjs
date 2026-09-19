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

export default function MainContentSection() {
  return (
    <section className="bg-[#f7f5f0] w-full">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mx-auto max-w-[1440px] px-4 py-8 lg:px-[108px] lg:py-10">
        <TocSidebar />
        <div className="flex flex-col gap-8 lg:gap-[60px] items-start w-full lg:flex-1 lg:min-w-0">
          <AtAGlanceSection />
          <ScopeSection />
          <RolesSection />
          <PersonalDataSection />
          <LegalBasisSection />
          <TelemetrySection />
          <AiSection />
          <SharingSection />
          <TransfersSection />
          <RetentionSection />
          <SecuritySection />
          <RightsSection />
          <UsStatesSection />
          <CookiesSection />
          <ChildrenSection />
          <ContactsSection />
          <UpdatesSection />
          <DpoSection />
          <EnterpriseResourcesSection />
        </div>
      </div>
    </section>
  );
}
