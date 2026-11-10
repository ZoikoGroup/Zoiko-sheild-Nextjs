import type { Metadata } from "next";
import {
  SecurityBlackFridayHero,
  SecurityPricing,
  SecurityProcess,
  DefensibleSecuritySection,
  NewsletterSection,
} from "@/components/black-friday";

export const metadata: Metadata = {
  title: "Black Friday Sale 2026: Save 20% | Zoiko Shield",
  description:
    "Save 20% on your first year of an eligible Zoiko Shield annual subscription this Black Friday. Explore cybersecurity and compliance solutions.",
};

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
