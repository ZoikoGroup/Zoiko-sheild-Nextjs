import {
  EvidenceLedgerVerification,
  EvidenceAnatomy,
  TraceRelationship,
  CompletenessSection,
  TamperEvidentIntegrity,
  EvidencePackages,
  VerificationSection,
  PublicVerifierGate,
  HistorySection,
  RelationshipsSection,
  FaqSection,
  InspectProofSection,
} from "@/components/evidance-ledger-verification";

export default function EvidanceledgerVerificationPage() {
  return (
    <main>
      <EvidenceLedgerVerification />
      <EvidenceAnatomy />
      <TraceRelationship />
      <CompletenessSection />
      <TamperEvidentIntegrity />
      <EvidencePackages />
      <VerificationSection />
      <PublicVerifierGate />
      <HistorySection />
      <RelationshipsSection />
      <FaqSection />
      <InspectProofSection />
    </main>
  );
}
