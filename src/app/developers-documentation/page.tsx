import { Metadata } from "next";
import {
  DeveloperHero,
  IntegrationTrajectory,
  TelemetryBootstrapping,
  ComprehensiveCategoryMap,
  SourceToEvidenceModel,
  StructuredIntegrationPipeline,
  PrimaryReferenceHubs,
  DefensibleEvidenceGuarantees,
  ResolutionPaths,
  ArchitecturalDeploymentCTA,
  ArchitecturalFaqs,
} from "@/components/developers-documentation";

export const metadata: Metadata = {
  title: "Developers & Documentation | Zoiko Shield",
  description:
    "Find setup guides, platform concepts, integration patterns, security guidance, troubleshooting, API documentation, webhooks, and release information for implementing Zoiko Shield safely and reliably.",
};

export default function DevelopersDocumentationPage() {
  return (
    <main className="w-full">
      <DeveloperHero />
      <IntegrationTrajectory />
      <TelemetryBootstrapping />
      <ComprehensiveCategoryMap />
      <SourceToEvidenceModel />
      <StructuredIntegrationPipeline />
      <PrimaryReferenceHubs />
      <DefensibleEvidenceGuarantees />
      <ResolutionPaths />
      <ArchitecturalDeploymentCTA />
      <ArchitecturalFaqs />
    </main>
  );
}
