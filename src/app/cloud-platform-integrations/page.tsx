import {
  HeroSection,
  CoverageStrip,
  WhyMatters,
  IntegrationMatrix,
  AwsSection,
  AzureSection,
  GcpSection,
  KubernetesSection,
  ServerlessSection,
  ResourceGraph,
  EvidenceSection,
  PermissionsSection,
  SetupSection,
  CoverageHealthSection,
  TrustSection,
  ConversionSection,
  FaqSection,
} from "@/components/cloud-platform-integrations";

export default function CloudPlatformIntegrationsPage() {
  return (
    <main>
      <HeroSection />
      <CoverageStrip />
      <WhyMatters />
      <IntegrationMatrix />
      <AwsSection />
      <AzureSection />
      <GcpSection />
      <KubernetesSection />
      <ServerlessSection />
      <ResourceGraph />
      <EvidenceSection />
      <PermissionsSection />
      <SetupSection />
      <CoverageHealthSection />
      <TrustSection />
      <ConversionSection />
      <FaqSection />
    </main>
  );
}
