import {
  HeroSection,
  GettingStartedSection,
  DeliveryContractSection,
  EventCatalogSection,
  EventDetailSection,
  EndpointConfigSection,
  VerificationSection,
  SimulationSection,
  DeliveryLogsSection,
  RetryRecoverySection,
  ReliabilityPillarsSection,
  VersioningSection,
  RbacSection,
  CommonErrorsSection,
  CtaSection,
  FaqSection,
} from "@/components/developers-webhooks";

export default function DevelopersWebhooksPage() {
  return (
    <main>
      <HeroSection />
      <GettingStartedSection />
      <DeliveryContractSection />
      <EventCatalogSection />
      <EventDetailSection />
      <EndpointConfigSection />
      <VerificationSection />
      <SimulationSection />
      <DeliveryLogsSection />
      <RetryRecoverySection />
      <ReliabilityPillarsSection />
      <VersioningSection />
      <RbacSection />
      <CommonErrorsSection />
      <CtaSection />
      <FaqSection />
    </main>
  );
}
