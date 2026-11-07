import {
  SecurityBlackFridayHero,
  SecurityPricing,
  SecurityProcess,
  DefensibleSecuritySection,
  NewsletterSection,
} from "@/components/black-friday";

export default function BlackFridayPage() {
  return (
    <main>
      <SecurityBlackFridayHero />
      <SecurityPricing />
      <SecurityProcess />
      <DefensibleSecuritySection />
      <NewsletterSection />
    </main>
  );
}
