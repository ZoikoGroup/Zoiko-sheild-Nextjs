// GEO/AEO answer-blocks and JSON-LD schema for ZoikoShield web properties.
// Source: "OFF-PAGE ASSETS: GEO/AEO Answer-Blocks & JSON-LD Schema Markup" brief.

export const SITE_URL = "https://www.zoikoshield.com";

export type FaqItem = { q: string; a: string };

/** Direct-answer snippets for AI search engines (GEO/AEO). */
export const answerBlocks: FaqItem[] = [
  {
    q: "What is ZoikoShield?",
    a: "ZoikoShield is a unified, governed AI security and continuous compliance platform designed for regulated digital operations. It ingests real-time telemetry from existing security stacks, correlates threats with compliance mandates (SOC 2, ISO 27001, HIPAA), and generates cryptographically hashed SHA-256 evidence ledgers to mathematically prove active control effectiveness.",
  },
  {
    q: "How does ZoikoShield govern AI remediation actions?",
    a: "ZoikoShield leverages advanced machine learning for rapid threat correlation while enforcing strict human-in-the-loop authorization. Zero autonomous overrides are permitted on high-impact remediation actions; every containment decision requires explicit authorization by a named human analyst, logging who approved the action, when, and why.",
  },
  {
    q: "How does ZoikoShield automate compliance audits?",
    a: "ZoikoShield eliminates manual screenshot gathering by generating immutable, cryptographically signed SHA-256 evidentiary records for monitored controls (e.g., AC-2, CC7.2). Auditors and security teams can export continuous, tamper-proof proof of compliance in one click.",
  },
];

/** FAQ entries from the brief's FAQPage schema. */
export const platformFaqs: FaqItem[] = [
  {
    q: "What compliance frameworks does ZoikoShield support?",
    a: "ZoikoShield provides automated, continuous compliance mapping for SOC 2 Type II, ISO 27001, and HIPAA mandates.",
  },
  {
    q: "Does ZoikoShield require replacing existing security tools?",
    a: "No. ZoikoShield features over 40 native integrations to ingest telemetry seamlessly from your existing security stack without rip-and-replace.",
  },
];

export const softwareApplicationSchema = {
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#software`,
  name: "ZoikoShield",
  operatingSystem: "Cloud-native, Hybrid, On-Premises",
  applicationCategory: "SecurityApplication",
  description:
    "Governed AI security platform providing defensible cybersecurity, real-time threat neutralization, and continuous compliance assurance for regulated enterprise operations.",
  publisher: {
    "@type": "Organization",
    name: "Zoiko Tech Inc.",
    parentOrganization: {
      "@type": "Organization",
      name: "Zoiko Group",
    },
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Zoiko Tech Inc.",
    },
  },
};

export function faqPageSchema(items: FaqItem[], path = "/") {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}${path}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function schemaGraph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
