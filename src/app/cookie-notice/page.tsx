import {
  HeroSection,
  BannerPreviewSection,
  QuickSummarySection,
  TechnologyCategoriesSection,
  PreferenceCenterSection,
  TechnologyRegistrySection,
  ThirdPartyProvidersSection,
  BrowserGpcSection,
  WorkflowsSection,
  VersionHistorySection,
  FaqSection,
} from "@/components/cookie-notice";

export default function CookieNoticePage() {
  return (
    <main>
      <HeroSection />
      <BannerPreviewSection />
      <QuickSummarySection />
      <TechnologyCategoriesSection />
      <PreferenceCenterSection />
      <TechnologyRegistrySection />
      <ThirdPartyProvidersSection />
      <BrowserGpcSection />
      <WorkflowsSection />
      <VersionHistorySection />
      <FaqSection />
    </main>
  );
}
