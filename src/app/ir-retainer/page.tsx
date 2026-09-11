import {
  IncidentResponseRetainerSection,
  WhatARetainerMeans,
  AnnualRelationshipSection,
  ActivationModelSection,
  EvidenceAndInvestigationSection,
  LegalPrivacyNotificationAndPrSection,
  CoverageTargetsAndMetricsSection,
  AuthorityAndRolesTableSection,
  GetStartedSection,
} from "@/components/ir-retainer";

export default function IrRetainerPage() {
  return (
    <main>
      <IncidentResponseRetainerSection />
      <WhatARetainerMeans />
      <AnnualRelationshipSection />
      <ActivationModelSection />
      <EvidenceAndInvestigationSection />
      <LegalPrivacyNotificationAndPrSection />
      <CoverageTargetsAndMetricsSection />
      <AuthorityAndRolesTableSection />
      <GetStartedSection />
    </main>
  );
}
