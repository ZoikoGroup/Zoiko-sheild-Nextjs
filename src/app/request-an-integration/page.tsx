import { Metadata } from "next";
import {
  RequestHero,
  SearchDirectory,
  RequestClassification,
  TargetPlatformDetails,
  TopologyScope,
  TechnicalArchitecture,
  ScaleAndInfrastructure,
  QualificationContext,
  VerifiedIdentity,
  ConsentAndLegalVerification,
  RequestConfirmationBanner,
  PipelineTransparency,
  PartnerEscalationPaths,
  ArchitecturalConstraintsFaq,
} from "@/components/request-an-integration";

export const metadata: Metadata = {
  title: "Request an Integration | Zoiko Shield",
  description:
    "Share the product, platform, or security system you need Zoiko Shield to work with. We'll use your request to evaluate demand, technical fit, and the right next step.",
};

export default function RequestAnIntegrationPage() {
  return (
    <main className="w-full">
      <RequestHero />
      <SearchDirectory />
      <RequestClassification />
      <TargetPlatformDetails />
      <TopologyScope />
      <TechnicalArchitecture />
      <ScaleAndInfrastructure />
      <QualificationContext />
      <VerifiedIdentity />
      <ConsentAndLegalVerification />
      <RequestConfirmationBanner />
      <PipelineTransparency />
      <PartnerEscalationPaths />
      <ArchitecturalConstraintsFaq />
    </main>
  );
}
