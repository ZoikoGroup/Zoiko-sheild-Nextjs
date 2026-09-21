import {
  HeroSection,
  DomainStatusSection,
  GovernanceSection,
  SecureByDesignSection,
  IdentityAccessSection,
  DataProtectionSection,
  InfrastructureSection,
  EndpointSecuritySection,
  TelemetrySection,
  VulnerabilitiesSection,
  IncidentActionSection,
  ResilienceSection,
  SupplyChainSection,
  PersonnelSection,
  ResponsibilitySection,
  EvidenceLedgerSection,
  FaqSection,
} from "@/components/security-trust-center";

export default function SecurityTrustCenterPage() {
  return (
    <main>
      <HeroSection />
      <DomainStatusSection />
      <GovernanceSection />
      <SecureByDesignSection />
      <IdentityAccessSection />
      <DataProtectionSection />
      <InfrastructureSection />
      <EndpointSecuritySection />
      <TelemetrySection />
      <VulnerabilitiesSection />
      <IncidentActionSection />
      <ResilienceSection />
      <SupplyChainSection />
      <PersonnelSection />
      <ResponsibilitySection />
      <EvidenceLedgerSection />
      <FaqSection />
    </main>
  );
}
