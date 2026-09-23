import {
  ContactSupport,
  PreFlightDiagnostics,
  TenantValidationFromLiveTelemetry,
  SelectPrimaryOperationalScope,
  EstablishClearOperationalUrgencyParameters,
  ProvideExactSymptomsAndObservedTimelines,
  EnvironmentAndActiveVersionConfigurations,
  SecureEvidentiaryPayloadSubmission,
  SelectQualifiedEntitlementChannels,
  VerifyTelemetryDataPackageBeforeDispatch,
  SecureCryptographicRequestConfirmation,
  TenantActiveCollisionCheck,
  SpecialistEmergencyLanesAndLegalChannels,
  VerifiableSLALimitsForActiveWorkspace,
  StandardOperationalAssistanceProcedures,
} from "@/components/contact-support";

export default function ContactSupportPage() {
  return (
    <main>
      <ContactSupport />
      <PreFlightDiagnostics />
      <TenantValidationFromLiveTelemetry />
      <SelectPrimaryOperationalScope />
      <EstablishClearOperationalUrgencyParameters />
      <ProvideExactSymptomsAndObservedTimelines />
      <EnvironmentAndActiveVersionConfigurations />
      <SecureEvidentiaryPayloadSubmission />
      <SelectQualifiedEntitlementChannels />
      <VerifyTelemetryDataPackageBeforeDispatch />
      <SecureCryptographicRequestConfirmation />
      <TenantActiveCollisionCheck />
      <SpecialistEmergencyLanesAndLegalChannels />
      <VerifiableSLALimitsForActiveWorkspace />
      <StandardOperationalAssistanceProcedures />
    </main>
  );
}
