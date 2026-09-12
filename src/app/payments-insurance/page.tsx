import {
  PaymentsAndInsuranceHeroSection,
  OperatingScopeTableSection,
  OperatingChainsSection,
  StateSemanticsSection,
  FraudAndFinancialCrimeSection,
  HighAssuranceOperationsSection,
  EvidenceControlsAndReviewSection,
  RiskReportingAndAiSection,
  GetStartedSection,
} from "@/components/payments";

export default function PaymentsInsurancePage() {
  return (
    <main>
      <PaymentsAndInsuranceHeroSection />
      <OperatingScopeTableSection />
      <OperatingChainsSection />
      <StateSemanticsSection />
      <FraudAndFinancialCrimeSection />
      <HighAssuranceOperationsSection />
      <EvidenceControlsAndReviewSection />
      <RiskReportingAndAiSection />
      <GetStartedSection />
    </main>
  );
}
