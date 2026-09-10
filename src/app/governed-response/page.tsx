import {
  GovernedResponseSection,
  AuthorityAtAGlanceSection,
  ActionContractSection,
  ApprovalSection,
  SigningAttestationSection,
  ExecutionSection,
  RollbackRecoverySection,
  HistorySection,
  ConnectedGovernanceSection,
  ProofAndTrustFAQSection,
  CtaSection,
} from "@/components/governed-response";

export default function GovernedResponsePage() {
  return (
    <main>
      <GovernedResponseSection />
      <AuthorityAtAGlanceSection />
      <ActionContractSection />
      <ApprovalSection />
      <SigningAttestationSection />
      <ExecutionSection />
      <RollbackRecoverySection />
      <HistorySection />
      <ConnectedGovernanceSection />
      <ProofAndTrustFAQSection />
      <CtaSection />
    </main>
  );
}
