import {
  SupportCenter,
  ActiveIntegrationDomainStatus,
  GoalDirectedSupport,
  SupportDomains,
  SelfGuidedDiagnosticPipeline,
  CurrentKnowledgeAndVerifiedChanges,
  VerifiedSupportEntitlementProfile,
  SecureEscalationForm,
  IntegrationApisAndWebhookTraces,
  StrictRegulatoryAndSecurityRouting,
  TransparentLifecyclePipeline,
  ArchitecturalFaqs,
} from "@/components/support-center";

export default function SupportCenterPage() {
  return (
    <main>
      <SupportCenter />
      <ActiveIntegrationDomainStatus />
      <GoalDirectedSupport />
      <SupportDomains />
      <SelfGuidedDiagnosticPipeline />
      <CurrentKnowledgeAndVerifiedChanges />
      <VerifiedSupportEntitlementProfile />
      <SecureEscalationForm />
      <IntegrationApisAndWebhookTraces />
      <StrictRegulatoryAndSecurityRouting />
      <TransparentLifecyclePipeline />
      <ArchitecturalFaqs />
    </main>
  );
}
