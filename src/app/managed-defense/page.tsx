import {
  ManagedDefenseHeroSection,
  OperatingModelSelectorSection,
  ServiceScopeTableSection,
  HowOperationsWorkComponent,
  HumanAuthorityComponent,
  SharedResponsibilityComponent,
  PhrasesThisPageWillNotUseComponent,
  SeparateContractComponent,
  GetStarted,
} from "@/components/managed-defense";

export default function ManagedDefensePage() {
  return (
    <main>
      <ManagedDefenseHeroSection />
      <OperatingModelSelectorSection />
      <ServiceScopeTableSection />
      <HowOperationsWorkComponent />
      <HumanAuthorityComponent />
      <SharedResponsibilityComponent />
      <PhrasesThisPageWillNotUseComponent />
      <SeparateContractComponent />
      <GetStarted />
    </main>
  );
}
