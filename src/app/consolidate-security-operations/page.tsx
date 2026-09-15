import React from "react";

import {
  CaseWorkflowSync,
  ConnectTools,
  ConsolidateOps,
  EvidenceCoverage,
  FragmentationMap,
  GovernedModelCTA,
  GovernResponse,
  NormalizeCorrelate,
  OperatingModel,
  TriageInvestigate,
  TrustFAQ,
} from "@/components/consolidate-security-operations";

export default function Page() {
  return (
    <main>
      <ConsolidateOps />
      <FragmentationMap />
      <ConnectTools />
      <NormalizeCorrelate />
      <TriageInvestigate />
      <CaseWorkflowSync />
      <GovernResponse />
      <EvidenceCoverage />
      <OperatingModel />
      <TrustFAQ />
      <GovernedModelCTA />
    </main>
  );
}