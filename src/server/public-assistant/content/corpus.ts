// Seed content corpus for the public-website assistant.
// Every statement below is paraphrased from text already published on this site
// (src/app/**/page.tsx and the components they render). canonical_url points at the
// page each fact came from. Do not add prices, certifications, SLAs, uptime figures or
// connector support that a page does not state.

import type { Corpus, Plan, SourceMeta } from "./types";

const EFFECTIVE_FROM = "2026-10-27T00:00:00Z";
const REVIEW_AT = "2027-01-27T00:00:00Z";
const VERIFIED_AT = "2026-10-27";

type CommonMeta = Pick<
  SourceMeta,
  "status" | "classification" | "market" | "locale" | "reviewer" | "revision" | "effective_from" | "review_at"
>;

const common = (): CommonMeta => ({
  status: "PUBLISHED",
  classification: "PUBLIC",
  market: ["global"],
  locale: ["en-US"],
  reviewer: "pending-review",
  revision: 1,
  effective_from: EFFECTIVE_FROM,
  review_at: REVIEW_AT,
});

/** Joins paragraphs / bullet lines into the plain-text body format. */
const p = (...parts: string[]): string => parts.join("\n\n");

type PlanFeature = Plan["features"][number];

const FEATURE_KEYS = [
  "read_correlate",
  "write_back",
  "dual_party_approval",
  "standard_connectors",
  "searchable_index_90d",
  "extended_retention",
  "custom_siem_integrations",
  "isolated_tenancy",
  "named_architect",
];

/** Platform tiers (pricing page): only the tier's own block is stated as included, plus page-wide inclusions. */
const platformFeatures = (own: string): PlanFeature[] => [
  ...["read_correlate", "write_back", "dual_party_approval"].map(
    (k): PlanFeature => ({ feature_key: k, value: k === own ? "included" : "not_verified" })
  ),
  { feature_key: "standard_connectors", value: "included", note: "Pricing page: standard out-of-the-box connectors are included inside platform tiers." },
  { feature_key: "searchable_index_90d", value: "included", note: "Pricing page: standard plans include 90 days of live searchable query index." },
  { feature_key: "extended_retention", value: "not_verified", note: "Scoped separately as part of evidence retention." },
  { feature_key: "custom_siem_integrations", value: "not_verified", note: "Evaluation required." },
  { feature_key: "isolated_tenancy", value: "not_verified", note: "Custom architecture." },
  { feature_key: "named_architect", value: "not_verified", note: "Support tier is selected separately." },
];

/** Service paths: the comparison page says pricing and included capabilities are contract-specific. */
const serviceFeatures = (): PlanFeature[] =>
  FEATURE_KEYS.map((k): PlanFeature => ({ feature_key: k, value: "not_verified", note: "Included capabilities are contract-specific." }));

export const corpus: Corpus = {
  // ---------------------------------------------------------------------------
  // Help
  // ---------------------------------------------------------------------------
  help_topics: [
    { topic_id: "product", label: "Product", description: "What ZoikoShield is, how it works and its main capability areas." },
    { topic_id: "pricing", label: "Pricing", description: "How commercial scope is structured and how quotes are produced." },
    { topic_id: "integrations", label: "Integrations", description: "Connectors, the integration catalog and requesting new integrations." },
    { topic_id: "trust-security", label: "Trust & security", description: "Security practices, privacy, responsible AI and vulnerability disclosure." },
    { topic_id: "support", label: "Support", description: "Getting help, contacting support and checking service status." },
    { topic_id: "getting-started", label: "Getting started", description: "Starting paths, demos and developer documentation." },
    { topic_id: "glossary", label: "Security glossary", description: "Plain-language definitions of security and compliance terms used across ZoikoShield." },
  ],

  help_articles: [
    {
      ...common(), id: "help-what-is-zoikoshield", kind: "HELP_ARTICLE",
      topic_id: "product",
      title: "What is ZoikoShield?",
      canonical_url: "/platform-overview", claim_type: "general", owner: "product",
      summary:
        "ZoikoShield is a horizontal platform for security, assurance and evidence that works as an operating layer over the tools you already run.",
      body: p(
        "ZoikoShield describes itself as a horizontal platform for security, assurance and evidence. It connects threat defense, governed response, control assurance and evidence across the tools an organization already runs.",
        "It is positioned as an operating layer over your existing security estate, not a replacement for it. Inbound sources include identity and access providers, endpoint and workload telemetry, cloud and infrastructure platforms, ticketing and workflow systems, and control and assurance repositories.",
        "Outcomes include evidence with lineage and verification, correlated detection and investigation, governed response under approval, control assurance and exceptions, and executive decision support.",
        "The integration catalog, not the overview, holds which specific tools are currently supported. Proof such as the Trust Center, documentation and System Status is reachable without booking a demo."
      ),
      keywords: ["what is zoikoshield", "platform", "overview", "operating layer", "security estate", "assurance"],
    },
    {
      ...common(), id: "help-how-zoikoshield-works", kind: "HELP_ARTICLE",
      topic_id: "product",
      title: "How ZoikoShield works: connect, correlate, govern, preserve, verify",
      canonical_url: "/how-zoikoshield-works", claim_type: "general", owner: "product",
      summary:
        "ZoikoShield follows a five-step operating sequence: connect approved systems, correlate source-backed context, govern decision rights, preserve evidence lineage and verify with scoped proof.",
      body: p(
        "The site describes one governed operating sequence in five steps:",
        "- Connect: link approved systems with explicit permissions. A source is connected only when its permission, direction, operating mode, health and accountable owner are explicit.\n- Correlate: relate source-backed signals into a reviewable record with cited sources and a visible confidence boundary, not opaque certainty.\n- Govern: apply decision rights, review and approval boundaries before action. AI remains bounded, cited and overridable.\n- Preserve: keep tamper-evident lineage and a reviewable version history for evidence.\n- Verify: expose scoped, independent proof paths that state subject, scope, method, status and limitations.",
        "Verification is scoped proof, not a guarantee of compliance or security outcomes."
      ),
      keywords: ["how it works", "connect", "correlate", "govern", "preserve", "verify", "operating model"],
    },
    {
      ...common(), id: "help-detection-and-response", kind: "HELP_ARTICLE",
      topic_id: "product",
      title: "Detection, investigation and governed response",
      canonical_url: "/detection-and-response", claim_type: "general", owner: "product",
      summary:
        "Detection & Response covers correlated detection, investigation, cases and governed response, with human authority kept explicit at each step.",
      body: p(
        "ZoikoShield Detection & Response covers correlated detection, investigation, cases and governed response. The page frames it as an inspectable path from source signal to governed action, without turning uncertainty into an autonomous decision.",
        "Key points the page makes:",
        "- A correlated relationship is not automatically causality, compromise, attacker intent or authorized response.\n- Investigations keep observations distinct from interpretation; automation and AI may assist, but consequential conclusions retain human authority.\n- Every consequential action inherits the decision-right model, including approval, execution scope, rollback and attestation.\n- There is no autonomous response claim. Response actions are graded on five levels, from R0 (advisory) through R1 (review required), R2 (approval required) and R3 (pre-authorized, delegated) to R4 (emergency overlay), and behavior at each level is described as conditional.",
        "Related areas such as Security Analytics and Case Management are described as conditional, with availability depending on readiness gates."
      ),
      keywords: ["detection", "response", "investigation", "correlation", "cases", "governed response", "R0-R4"],
    },
    {
      ...common(), id: "help-compliance-and-evidence", kind: "HELP_ARTICLE",
      topic_id: "product",
      title: "Compliance control plane and evidence ledger",
      canonical_url: "/compliance-control-plane", claim_type: "general", owner: "product",
      summary:
        "The Compliance Control Plane organizes controls, mappings, tests, assessments, exceptions and an audit workspace; the Evidence Ledger preserves tamper-evident evidence with lineage.",
      body: p(
        "The Compliance Control Plane organizes governed controls, mappings, tests, assessments, exceptions, linked evidence and an audit workspace, while exposing the basis and limitations of every displayed state and preserving human authority over consequential decisions.",
        "The Evidence Ledger keeps a governed record of evidence identity, authority, scope, lineage, state, integrity context and history. ZoikoShield uses the term tamper-evident, which the site says means detectable change within a declared method and scope, not immutable or blockchain-based.",
        "Important boundaries stated on these pages:",
        "- Framework and regulatory references describe supported program alignment and do not imply certification, regulator approval or guaranteed compliance.\n- Evidence verification does not automatically set control status.\n- Audit workspace completion does not imply auditor acceptance or endorsement."
      ),
      keywords: ["compliance", "controls", "evidence ledger", "audit workspace", "framework mapping", "tamper-evident"],
    },
    {
      ...common(), id: "help-starting-paths", kind: "HELP_ARTICLE",
      topic_id: "getting-started",
      title: "Managed Defense or Continuous Assurance: two independent starting paths",
      canonical_url: "/compare-starting-paths", claim_type: "general", owner: "solutions",
      summary:
        "Managed Defense (security operations) and Continuous Assurance (control and evidence assurance) are independent peer paths; neither is ranked or a prerequisite for the other.",
      body: p(
        "ZoikoShield offers two independent starting paths. Neither is ranked, recommended by default or presented as a prerequisite for the other.",
        "- Managed Defense is a security-operations path focused on detection, investigation and governed response. It works with signals, cases, investigations and response decisions, and named owners keep the decision rights over response actions, which the site grades on five levels from R0 (advisory) to R4 (emergency overlay).\n- Continuous Assurance is an assurance path focused on ongoing control and evidence assurance and audit-readiness support. It works with controls, tests, evidence, exceptions and mappings, and control owners evaluate evidence.",
        "Organizations may need both when the operating jobs and accountable owners differ; the paths can run in parallel without becoming a forced bundle, and scope and terms remain separate.",
        "Availability, coverage, service levels, included capabilities and commercial terms vary by approved service scope and contract. Neither service guarantees compliance."
      ),
      keywords: ["managed defense", "continuous assurance", "starting path", "compare", "which service"],
    },
    {
      ...common(), id: "help-how-pricing-works", kind: "HELP_ARTICLE",
      topic_id: "pricing",
      title: "How ZoikoShield pricing works",
      canonical_url: "/how-pricing-works", claim_type: "commercial", owner: "commercial",
      summary:
        "ZoikoShield does not publish list prices. Pricing is quoted after an integration architect validates your scope across three commercial domains.",
      body: p(
        "ZoikoShield does not publish list prices on its website. Deployment scopes are structured into three commercial domains:",
        "- Base Platform: core tenant infrastructure, continuous control correlation, compliance engine and direct read telemetry, formatted as annual subscriptions.\n- Scoped Protection Units: scale with protected asset thresholds (EDR-managed hosts and active identity directory nodes), using defined brackets.\n- Onboarding & SLA tiers: determined by deployment model, custom compliance mapping requirements and the support tier selected.",
        "Commercial tiers also reflect the level of write authority you enable: read & correlate only, write-back remediation, or dual-party approval policies.",
        "The site's scope estimator deliberately produces a non-price complexity draft. Actual pricing depends on approved tenant boundaries and is confirmed in a quote from the commercial team."
      ),
      keywords: ["pricing", "cost", "quote", "price", "subscription", "how much"],
    },
    {
      ...common(), id: "help-pricing-scope-drivers", kind: "HELP_ARTICLE",
      topic_id: "pricing",
      title: "What affects your quote and what to prepare",
      canonical_url: "/how-pricing-works", claim_type: "commercial", owner: "commercial",
      summary:
        "Quotes are driven by protected coverage, active capabilities, evidence data volume, integrations, assurance level and service model.",
      body: p(
        "The pricing page lists six drivers that shape a quote, and the data worth preparing for each:",
        "- Protected coverage: total endpoints (EDR) plus active directory users.\n- Active capabilities: remediation requirements and audit scope.\n- Evidence data volume: retention periods and your target compliance timeline.\n- Integration ecosystem: for example identity tenant count and device-management profiles.\n- Assurance level: tenant partition isolation requirements.\n- Service model: onboarding complexity and support tier selection.",
        "Protected assets are counted deterministically from active EDR sensors and active identity profiles, with a non-overlapping base so the same physical asset matched to an identity is not counted twice. Service accounts and locked external guests are excluded.",
        "Scope expansion, enabling remediation, or moving to an isolated tenant can change your scope. Exact terms are confirmed in your proposal."
      ),
      keywords: ["quote", "scope", "pricing drivers", "assets", "endpoints", "retention", "prepare"],
    },
    {
      ...common(), id: "help-integrations-overview", kind: "HELP_ARTICLE",
      topic_id: "integrations",
      title: "Integrations and the integration catalog",
      canonical_url: "/integration-catalog", claim_type: "connector", owner: "product",
      summary:
        "The integration catalog lists connectors with status labels; ZoikoShield connects to your existing stack without rip-and-replace, at a scope you control.",
      body: p(
        "The Integration Catalog is the registry of cloud, endpoint, identity and security connectors that ZoikoShield uses to ingest data, map telemetry to framework controls and generate evidence. Each listed integration carries a status label such as Available, Partner-assisted, Beta or Planned.",
        "The integrations pages emphasize governed, least-privilege connections:",
        "- You authorize only the systems and modes your use case needs; there is no mandatory onboarding of everything you own.\n- Each connection should disclose its mode, direction, permission scope, data handling and health expectation before you authorize it.\n- A connector that can technically write is not permission to act; response authority and approvals are governed separately.",
        "Availability for your contract, region and tenant is confirmed with the team during evaluation."
      ),
      keywords: ["integrations", "connectors", "catalog", "supported tools", "least privilege", "stack"],
    },
    {
      ...common(), id: "help-request-integration", kind: "HELP_ARTICLE",
      topic_id: "integrations",
      title: "Requesting an integration that is not listed",
      canonical_url: "/request-an-integration", claim_type: "connector", owner: "product",
      summary:
        "Use the Request an Integration form to record demand for a connector; submitting a request does not create a roadmap commitment.",
      body: p(
        "If the system you need is not in the catalog, you can submit a request through the Request an Integration page. Share the product or platform, the workflow you want to support and, where useful, the target API authentication model, data scopes and rate limits.",
        "Things the page makes clear:",
        "- Submitting a request records demand; it does not guarantee the connector will be built and creates no roadmap commitment or timeline.\n- Requests are reviewed in batches and prioritized by demand, technical fit and compliance alignment. Existing-customer requests receive priority feasibility review.\n- Technology vendors can choose the Technology Partner Proposal request type.\n- Never enter passwords, client credentials, API tokens or other secrets on the public request form."
      ),
      keywords: ["request integration", "new connector", "missing integration", "roadmap", "partner proposal"],
    },
    {
      ...common(), id: "help-microsoft-ecosystem", kind: "HELP_ARTICLE",
      topic_id: "integrations",
      title: "ZoikoShield and the Microsoft ecosystem (Microsoft 365 and Azure)",
      canonical_url: "/microsoft-ecosystem", claim_type: "connector", owner: "product",
      summary:
        "ZoikoShield connects read-only to Microsoft Entra ID, Defender for Endpoint, Intune, Purview, Azure Resource Manager and Sentinel, working alongside them rather than replacing them.",
      body: p(
        "The Microsoft ecosystem page states that ZoikoShield integrates with these Microsoft products:",
        "- Microsoft Entra ID (P1/P2): identity risk, Conditional Access and sign-in context\n- Microsoft Defender for Endpoint and Defender XDR: alert telemetry and incident states\n- Microsoft Intune: device enrollment, posture and patch compliance\n- Microsoft Purview: audit events and data activity logs\n- Azure Resource Manager subscriptions: cloud configuration and activity logs\n- Microsoft Sentinel: correlated with alert telemetry without changing its rules\n- Microsoft Graph: service health, permission grants and application lifecycle logs",
        "ZoikoShield works alongside Defender and Sentinel rather than replacing them. It connects through an Entra ID App Registration with read-only permissions such as AuditLog.Read.All and Directory.Read.All, and it cannot change configuration, block sign-ins or quarantine devices.",
        "Licensing matters: common controls map with standard E3 licenses, advanced risk events need Entra ID P2, and advanced compliance mapping recommends Purview Audit Premium (E5). If permissions are revoked, the integration moves to a suspended state and earlier evidence stays sealed.",
        "Actual availability depends on your tenant's license level and permissions, and is confirmed with the team during evaluation."
      ),
      keywords: ["microsoft", "microsoft 365", "m365", "office 365", "o365", "azure", "entra", "entra id", "azure ad", "defender", "intune", "purview", "sentinel", "e3", "e5"],
    },
    {
      ...common(), id: "help-get-support", kind: "HELP_ARTICLE",
      topic_id: "support",
      title: "How to get support",
      canonical_url: "/support-center", claim_type: "general", owner: "support",
      summary:
        "The Support Center offers searchable documentation, goal-based support routes and a path to contact support; specialist lanes exist for vulnerabilities, privacy and suspected compromise.",
      body: p(
        "The Support Center is the starting point for help. You can search documentation, pick a goal-directed route (for example set up ZoikoShield, fix sign-in or access, troubleshoot an integration, use APIs and webhooks, manage the evidence ledger, manage your account or plan, or check service health) and contact an expert.",
        "To open a case, use Contact Support. Describe the affected environment, the impact and a clear timeline of symptoms. Support channels and response targets depend on your service contract.",
        "Security safeguard: never paste API keys, OAuth secrets, session tokens, passwords or unredacted logs into a support request.",
        "Separate lanes exist for vulnerability disclosure, privacy and data rights requests, and legal or regulatory notices."
      ),
      keywords: ["support", "help", "contact support", "open a case", "ticket", "troubleshoot"],
    },
    {
      ...common(), id: "help-report-vulnerability", kind: "HELP_ARTICLE",
      topic_id: "trust-security",
      title: "How to report a security vulnerability",
      canonical_url: "/vulnerability-disclosure", claim_type: "security", owner: "trust",
      summary:
        "Report vulnerabilities through the Vulnerability Disclosure page, which explains scope, testing rules, safe harbor and what to include.",
      body: p(
        "Security researchers can report findings through the Vulnerability Disclosure page. The policy covers good-faith testing and coordinated disclosure, and offers safe harbor for research that follows the policy.",
        "To stay within the policy: minimize impact to production, stop once a proof of concept is established, avoid extracting user data, PII or secrets, and give Zoiko reasonable time to remediate before public disclosure. Social engineering, phishing and extortion are prohibited, and the policy does not authorize access to third-party assets or tenant-hosted data.",
        "A good report includes a clear target, observed versus inferred impact, reproducible steps, minimal evidence and environment context. Anonymous reports are accepted.",
        "The page states targets of acknowledgement within 24 hours and triage within 48 hours. Recognition is discretionary, with no automatic payment commitments. Active incidents, outages and privacy requests have their own channels."
      ),
      keywords: ["vulnerability", "security report", "bug bounty", "safe harbor", "disclosure", "security.txt"],
    },
    {
      ...common(), id: "help-system-status", kind: "HELP_ARTICLE",
      topic_id: "support",
      title: "Checking system status",
      canonical_url: "/system-status", claim_type: "general", owner: "support",
      summary:
        "The System Status page shows current status by functional domain, active incidents, maintenance and incident history, with subscription options.",
      body: p(
        "The System Status page shows current status by functional domain, such as the event processing pipeline, detection, identity and endpoint, cloud and integrations, APIs and developer services, and governance and evidence.",
        "It also lists active incidents with timelines, upcoming maintenance windows, recent incident history and post-incident reviews. You can subscribe to state changes by email, webhook or RSS.",
        "Integration checks may show as unknown or stale when a third-party provider cannot be reached; the page avoids showing green when status cannot be confirmed.",
        "Global status does not guarantee your local environment's availability. If status looks healthy but your tenant is affected, open a support case."
      ),
      keywords: ["status", "outage", "down", "incident history", "maintenance", "service health"],
    },
    {
      ...common(), id: "help-book-a-demo", kind: "HELP_ARTICLE",
      topic_id: "getting-started",
      title: "Booking a demo",
      canonical_url: "/book-a-demo", claim_type: "general", owner: "web",
      summary:
        "A demo is a scheduled, consultative walkthrough with ZoikoShield specialists using illustrative, synthetic example data.",
      body: p(
        "You can request a demo from the Book a Demo page. It is a scheduled consultative meeting with security specialists rather than an automated instant trial.",
        "The walkthrough follows a connected workflow covering detection, investigation, governed AI assistance, controlled response and security evidence. You can choose a focus, such as security operations or governance and assurance, or cover the full platform.",
        "Demos may use synthetic, illustrative data rather than live customer data, so there is no risk to your production environment. The team can also discuss access governance, human oversight, audit evidence and integration needs.",
        "Product availability and deployment options are confirmed during evaluation."
      ),
      keywords: ["demo", "book a demo", "walkthrough", "evaluation", "trial", "talk to sales"],
    },
    {
      ...common(), id: "help-developer-docs", kind: "HELP_ARTICLE",
      topic_id: "getting-started",
      title: "Developer documentation",
      canonical_url: "/developers-documentation", claim_type: "general", owner: "product",
      summary:
        "Developer documentation covers setup guides, platform concepts, integration patterns, API reference, webhooks, troubleshooting and release notes.",
      body: p(
        "The developer documentation hub covers setup guides, platform concepts, integration patterns, security guidance, troubleshooting, the API reference, webhooks and release information.",
        "Suggested first steps from the docs page: review the Getting Started guide, and confirm your client credentials and read-only permission boundaries before running the first safe test synchronization.",
        "The page also notes:",
        "- There is no default write access; changing host trust states or directory sessions requires separately configured approval keys.\n- Deprecations and migration steps are published in versioned release notes.\n- Support tickets should include correlation IDs, tenant names and error timestamps, never API secrets, private keys or passwords."
      ),
      keywords: ["developers", "documentation", "api", "webhooks", "sdk", "getting started", "release notes"],
    },
    {
      ...common(), id: "help-responsible-ai", kind: "HELP_ARTICLE",
      topic_id: "trust-security",
      title: "How ZoikoShield approaches AI and human oversight",
      canonical_url: "/responsible-ai", claim_type: "general", owner: "trust",
      summary:
        "AI in ZoikoShield is described as bounded, cited and overridable, with explicit decision rights and no implied full autonomy for consequential actions.",
      body: p(
        "ZoikoShield's Responsible AI page sets out how AI features are governed:",
        "- Every AI function names its intended purpose, user, scope and current state.\n- Outputs show their source context, or say clearly when they are inferential, incomplete or unsupported.\n- Decision rights are explicit, and consequential actions are never implied to be fully autonomous.\n- Known limitations, staleness and uncertainty stay visible.\n- Material model, provider, policy or data changes trigger re-review and a versioned disclosure.",
        "Across the site, AI is described as bounded, cited and overridable. A suggestion is not an approval: reviewers accept, reject or escalate within their own authority.",
        "Safety, privacy and security concerns about AI route to governed review, and reporters do not need a commercial relationship."
      ),
      keywords: ["ai", "responsible ai", "human oversight", "automation", "decision rights", "model"],
    },

    // Glossary: definitions paraphrased from /security-compliance-glossary. Product-specific
    // statements on that page (sync status, remediation modes, connector examples) are left out.
    {
      ...common(), id: "help-glossary-audit-trail", kind: "HELP_ARTICLE",
      topic_id: "glossary",
      title: "What is an Audit Trail?",
      canonical_url: "/security-compliance-glossary", claim_type: "general", owner: "web",
      summary:
        "An audit trail is a chronological, cryptographically protected record of system activity that lets events be reconstructed.",
      body: p(
        "The glossary defines an audit trail as a chronological, cryptographic ledger of system activities. Because the record is ordered in time, it allows events to be reconstructed after the fact.",
        "Reconstructing events in this way is used to verify security posture and source-declared evidence.",
        "The glossary lists the term under Evidence & Auditability and references NIST SP 800-53. Its definitions are educational and for operational mapping context, not legal advice."
      ),
      keywords: ["audit trail", "audit log", "activity log", "event history", "audit record"],
    },
    {
      ...common(), id: "help-glossary-role-elevation", kind: "HELP_ARTICLE",
      topic_id: "glossary",
      title: "What is Role Elevation (PIM, Privileged Identity Management)?",
      canonical_url: "/security-compliance-glossary", claim_type: "general", owner: "web",
      summary:
        "Role elevation is temporarily granting administrative or privileged access rights to a user session based on explicit security approvals.",
      body: p(
        "The glossary defines role elevation as the process of temporarily granting administrative or privileged access rights to a user session. The elevation is based on explicit security approvals rather than standing access.",
        "It is commonly known as PIM (Privileged Identity Management). A closely related term is PAM (Privileged Access Management).",
        "It is listed under Identity & Access. The glossary's definitions are educational and for operational mapping context, not legal advice."
      ),
      keywords: ["role elevation", "PIM", "privileged identity management", "PAM", "privileged access management", "just-in-time access", "admin access"],
    },
    {
      ...common(), id: "help-glossary-continuous-assurance", kind: "HELP_ARTICLE",
      topic_id: "glossary",
      title: "What is Continuous Assurance (CA)?",
      canonical_url: "/security-compliance-glossary", claim_type: "general", owner: "web",
      summary:
        "Continuous assurance is the ongoing assessment and cryptographic auditing of controls, showing steady-state compliance rather than relying on periodic reviews.",
      body: p(
        "The glossary defines continuous assurance as the continuous assessment and cryptographic auditing of controls. Its purpose is to demonstrate steady-state compliance over time, rather than relying on isolated, periodic reviews.",
        "The glossary lists the term under Evidence & Auditability and references NIST SP 800-137.",
        "This is a general definition of the term. The glossary's definitions are educational and for operational mapping context, not legal advice."
      ),
      keywords: ["continuous assurance", "CA", "continuous monitoring", "continuous compliance", "control monitoring", "ongoing assessment"],
    },
    {
      ...common(), id: "help-glossary-zero-trust-architecture", kind: "HELP_ARTICLE",
      topic_id: "glossary",
      title: "What is Zero Trust Architecture (ZTA)?",
      canonical_url: "/security-compliance-glossary", claim_type: "general", owner: "web",
      summary:
        "Zero Trust Architecture is a security approach focused on protecting resources, where trust is never granted implicitly and must be evaluated continuously.",
      body: p(
        "The glossary describes Zero Trust Architecture as a cybersecurity paradigm focused on resource protection, built on the premise that trust is never granted implicitly and must be evaluated continuously.",
        "A second wording on the page describes it as an enterprise architectural design based on never trusting implicitly, in which continuous, explicit session validation is required.",
        "The glossary lists the term under Identity & Access and references NIST SP 800-207 and CIS Controls v8. It notes that definitions can differ between frameworks. Its definitions are educational, not legal advice."
      ),
      keywords: ["zero trust architecture", "ZTA", "zero trust", "never trust always verify", "zero-trust security"],
    },
    {
      ...common(), id: "help-glossary-non-repudiation", kind: "HELP_ARTICLE",
      topic_id: "glossary",
      title: "What is Non-Repudiation?",
      canonical_url: "/security-compliance-glossary", claim_type: "general", owner: "web",
      summary:
        "Non-repudiation is the assurance that a sender gets proof of delivery and a recipient gets proof of the sender's identity.",
      body: p(
        "The glossary defines non-repudiation as an assurance that works in both directions: the sender of data is given proof that it was delivered, and the recipient is given proof of the sender's identity.",
        "The glossary lists the term under Data Protection & Cryptography and references ISO/IEC 27001. Its definitions are educational and for operational mapping context, not legal advice."
      ),
      keywords: ["non-repudiation", "nonrepudiation", "NR", "proof of origin", "proof of delivery", "digital signature"],
    },
    {
      ...common(), id: "help-glossary-cryptographic-agility", kind: "HELP_ARTICLE",
      topic_id: "glossary",
      title: "What is Cryptographic Agility?",
      canonical_url: "/security-compliance-glossary", claim_type: "general", owner: "web",
      summary:
        "Cryptographic agility is a system's capacity to quickly adopt alternative cryptographic primitives and key management models without a systemic redesign.",
      body: p(
        "The glossary defines cryptographic agility as the capacity of an information system to rapidly adopt alternative cryptographic primitives and key management models.",
        "The key point is that the change can happen without a systemic redesign of the information system.",
        "The glossary lists the term under Data Protection & Cryptography and associates it with NIST post-quantum work. Its definitions are educational and for operational mapping context, not legal advice."
      ),
      keywords: ["cryptographic agility", "crypto agility", "crypto-agility", "algorithm agility", "post-quantum readiness"],
    },
    {
      ...common(), id: "help-glossary-endpoint-posture-assessment", kind: "HELP_ARTICLE",
      topic_id: "glossary",
      title: "What is Endpoint Posture Assessment (EPA)?",
      canonical_url: "/security-compliance-glossary", claim_type: "general", owner: "web",
      summary:
        "Endpoint posture is the status and compliance state of a remote endpoint host compared with the enterprise's target configuration baseline policies.",
      body: p(
        "The glossary describes endpoint posture as the status and cryptographic compliance state of a remote endpoint host, measured against the enterprise's target configuration baseline policies. Endpoint posture assessment is the comparison of a host's actual state with that baseline.",
        "The glossary lists the term under Endpoint & Device and references RFC 5209 and CIS Standards. Its definitions are educational and for operational mapping context, not legal advice."
      ),
      keywords: ["endpoint posture assessment", "EPA", "endpoint posture", "device posture", "device compliance", "host compliance"],
    },
    {
      ...common(), id: "help-glossary-adversary-emulation", kind: "HELP_ARTICLE",
      topic_id: "glossary",
      title: "What is Adversary Emulation?",
      canonical_url: "/security-compliance-glossary", claim_type: "general", owner: "web",
      summary:
        "Adversary emulation is a threat-informed testing method in which authorized operators mimic the tactics, techniques and procedures (TTPs) of real-world attackers.",
      body: p(
        "The glossary defines adversary emulation as a threat-informed testing method. Authorized operators mimic the tactics, techniques and procedures (TTPs) used by real-world cyber adversaries.",
        "The glossary lists the term under Threat & Detection and references MITRE ATT&CK v14. Its definitions are educational and for operational mapping context, not legal advice."
      ),
      keywords: ["adversary emulation", "TTPs", "tactics techniques and procedures", "MITRE ATT&CK", "red teaming", "attack simulation"],
    },
    {
      ...common(), id: "help-glossary-principle-of-least-privilege", kind: "HELP_ARTICLE",
      topic_id: "glossary",
      title: "What is the Principle of Least Privilege?",
      canonical_url: "/security-compliance-glossary", claim_type: "general", owner: "web",
      summary:
        "The principle of least privilege restricts users, service accounts and processes to only the access rights strictly necessary for their specific business task.",
      body: p(
        "The glossary defines the principle of least privilege as restricting users, service accounts and processes to only those access rights that are strictly necessary to carry out their explicit business task.",
        "The glossary lists the term under Identity & Access and references ISO/IEC 27001. Its definitions are educational and for operational mapping context, not legal advice."
      ),
      keywords: ["principle of least privilege", "least privilege", "PoLP", "minimal access", "need to know", "least-privilege access"],
    },
    {
      ...common(), id: "help-glossary-systemic-risk", kind: "HELP_ARTICLE",
      topic_id: "glossary",
      title: "What is Systemic Risk?",
      canonical_url: "/security-compliance-glossary", claim_type: "general", owner: "web",
      summary:
        "Systemic risk is the potential for failures in shared software, network or structural infrastructure to trigger cascading outages across entire sectors.",
      body: p(
        "The glossary defines systemic risk as the potential for failures in shared software, network or structural infrastructure to trigger cascading outages across entire sectors.",
        "The glossary lists the term under governance, risk and compliance (GRC) and references COBIT 2019. Its definitions are educational and for operational mapping context, not legal advice."
      ),
      keywords: ["systemic risk", "cascading failure", "concentration risk", "shared infrastructure risk", "sector-wide outage"],
    },
    {
      ...common(), id: "help-glossary-responsible-ai-alignment", kind: "HELP_ARTICLE",
      topic_id: "glossary",
      title: "What is Responsible AI Alignment?",
      canonical_url: "/security-compliance-glossary", claim_type: "general", owner: "web",
      summary:
        "Responsible AI alignment is the governance framework that ensures machine learning models act in strict compliance with human intent, safety guidelines and data regulations.",
      body: p(
        "The glossary defines responsible AI alignment as the governance framework that ensures machine learning system models act in strict compliance with human intent, safety guidelines and data regulations.",
        "The glossary lists the term under Responsible AI and references the NIST AI RMF. Its definitions are educational and for operational mapping context, not legal advice."
      ),
      keywords: ["responsible ai alignment", "AI alignment", "responsible AI", "AI governance", "NIST AI RMF", "AI safety"],
    },
    {
      ...common(), id: "help-glossary-multi-factor-authentication", kind: "HELP_ARTICLE",
      topic_id: "glossary",
      title: "What is MFA (Multi-Factor Authentication)?",
      canonical_url: "/security-compliance-glossary", claim_type: "general", owner: "web",
      summary:
        "Multi-factor authentication requires a user to provide two or more verification factors to gain access to a resource, asset or application.",
      body: p(
        "The glossary quotes the authoritative wording for multi-factor authentication (MFA): an authentication method that requires the user to provide two or more verification factors to gain access to a resource, asset or application, conforming to verified authentication assurance levels (AAL). The citation given is NIST SP 800-63B, Section 4.2.",
        "In plain English, the glossary explains that MFA in practice is about validating that the person trying to log in actually possesses the cryptographic key or device registered to their account.",
        "The glossary's definitions are educational and for operational mapping context, not legal advice."
      ),
      keywords: ["multi-factor authentication", "MFA", "two-factor authentication", "2FA", "authentication assurance level", "AAL"],
    },
  ],

  // ---------------------------------------------------------------------------
  // Guides
  // ---------------------------------------------------------------------------
  guides: [
    {
      ...common(), id: "guide-which-support-route", kind: "GUIDE",
      topic_id: "support",
      title: "Which support route do I need?",
      canonical_url: "/support-center", claim_type: "general", owner: "support",
      summary: "A short decision guide that points you to the right ZoikoShield channel for your situation.",
      body: "Answer a few questions to find the right channel. Urgent security matters use dedicated lanes, not sales or general support forms.",
      keywords: ["support route", "who to contact", "help", "incident", "vulnerability"],
      start_step: "need",
      steps: [
        {
          step_id: "need",
          prompt: "What do you need help with?",
          choices: [
            { choice_id: "active-incident", label: "A suspected compromise or active security incident", route_key: "incident" },
            { choice_id: "vulnerability", label: "I found a security vulnerability in ZoikoShield", route_key: "vulnerability_disclosure" },
            { choice_id: "availability", label: "ZoikoShield seems slow or unavailable", next: "status-check" },
            { choice_id: "privacy", label: "A privacy or data rights request", route_key: "privacy_request" },
            { choice_id: "product-help", label: "Help using the product", next: "customer" },
            { choice_id: "buying", label: "Evaluating or buying ZoikoShield", next: "commercial" },
          ],
        },
        {
          step_id: "status-check",
          prompt: "Have you checked the System Status page?",
          body: "Global status does not guarantee your local environment's availability. If status looks healthy but your tenant is affected, open a support case.",
          choices: [
            { choice_id: "not-yet", label: "Not yet", route_key: "system_status" },
            { choice_id: "status-ok-still-broken", label: "Yes, and my tenant is still affected", route_key: "support" },
          ],
        },
        {
          step_id: "customer",
          prompt: "Are you an existing customer with access to ZoikoShield?",
          choices: [
            { choice_id: "existing", label: "Yes, I'm an existing customer", route_key: "support" },
            { choice_id: "developer", label: "I'm a developer looking for API or webhook docs", route_key: "developers" },
            { choice_id: "not-customer", label: "No", route_key: "contact" },
          ],
        },
        {
          step_id: "commercial",
          prompt: "What would help most right now?",
          choices: [
            { choice_id: "see-it", label: "See the product in a walkthrough", route_key: "demo" },
            { choice_id: "pricing", label: "Understand how pricing works", route_key: "pricing" },
            { choice_id: "security-review", label: "Review security, privacy and assurance materials", route_key: "trust_center" },
            { choice_id: "other", label: "Something else", route_key: "contact" },
          ],
        },
      ],
    },
    {
      ...common(), id: "guide-choosing-starting-path", kind: "GUIDE",
      topic_id: "getting-started",
      title: "Choosing a starting path",
      canonical_url: "/compare-starting-paths", claim_type: "general", owner: "solutions",
      summary:
        "Helps you find which service page has the most relevant detail. It explains; it does not rank the services or determine fit.",
      body: "Managed Defense and Continuous Assurance are independent peer paths. Your answer points to the most relevant page; it is not a recommendation or a fit assessment.",
      keywords: ["starting path", "managed defense", "continuous assurance", "which service"],
      start_step: "job",
      steps: [
        {
          step_id: "job",
          prompt: "Which job are you trying to solve?",
          choices: [
            { choice_id: "detect", label: "Extend detection, triage or investigation", next: "security-ops" },
            { choice_id: "govern-response", label: "Govern response decisions", next: "security-ops" },
            { choice_id: "audit", label: "Improve audit readiness or monitor control effectiveness", next: "assurance" },
            { choice_id: "both", label: "Both operational defense and assurance", route_key: "compare_paths" },
            { choice_id: "active-incident", label: "We have an active incident", route_key: "incident" },
            { choice_id: "unsure", label: "Not sure yet", route_key: "compare_paths" },
          ],
        },
        {
          step_id: "security-ops",
          prompt: "Managed Defense covers detection, investigation and governed response. What next?",
          body: "Named owners retain response decision rights. Coverage, hours, regions and response actions are defined by the approved service scope and contract.",
          choices: [
            { choice_id: "md-explore", label: "Read about Managed Defense", route_key: "managed_defense" },
            { choice_id: "md-demo", label: "Book a walkthrough", route_key: "demo" },
            { choice_id: "md-compare", label: "Compare both paths side by side", route_key: "compare_paths" },
          ],
        },
        {
          step_id: "assurance",
          prompt: "Continuous Assurance covers ongoing control and evidence assurance. What next?",
          body: "Continuous Assurance supports audit readiness; it does not promise certification, regulator approval or audit acceptance.",
          choices: [
            { choice_id: "ca-explore", label: "Read about Continuous Assurance", route_key: "continuous_assurance" },
            { choice_id: "ca-demo", label: "Book a walkthrough", route_key: "demo" },
            { choice_id: "ca-compare", label: "Compare both paths side by side", route_key: "compare_paths" },
          ],
        },
      ],
    },
    {
      ...common(), id: "guide-integration-check", kind: "GUIDE",
      topic_id: "integrations",
      title: "Does ZoikoShield connect to my tool?",
      canonical_url: "/integration-catalog", claim_type: "connector", owner: "product",
      summary: "A short guide for checking the integration catalog or requesting a connector.",
      body: "Start with the integration catalog. If your tool is not listed, record the need through the integration request route; a request is not a roadmap commitment.",
      keywords: ["integration", "connector", "supported tools", "request integration"],
      start_step: "listed",
      steps: [
        {
          step_id: "listed",
          prompt: "Is your tool listed in the integration catalog?",
          choices: [
            { choice_id: "yes", label: "Yes", next: "status" },
            { choice_id: "no", label: "No", route_key: "integration_request" },
            { choice_id: "not-checked", label: "I haven't checked", route_key: "integrations" },
          ],
        },
        {
          step_id: "status",
          prompt: "What status label does it show?",
          body: "Availability for your contract, region and tenant is confirmed with the team before implementation.",
          choices: [
            { choice_id: "available", label: "Available or Partner-assisted", route_key: "demo" },
            { choice_id: "beta-planned", label: "Beta, Planned or Requestable", route_key: "integration_request" },
            { choice_id: "build", label: "I want to build against the API", route_key: "developers" },
          ],
        },
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // Trust
  // ---------------------------------------------------------------------------
  trust_topics: [
    { topic_id: "security-practices", title: "Security practices", summary: "Access, infrastructure, secure development and data protection practices." },
    { topic_id: "privacy", title: "Privacy & data protection", summary: "How personal and customer data is handled, accessed and governed." },
    { topic_id: "responsible-ai", title: "Responsible AI", summary: "Training restrictions, human oversight and AI decision rights." },
    { topic_id: "assurance-materials", title: "Assurance materials", summary: "Evidence library artifacts and what ZoikoShield does and does not certify." },
    { topic_id: "vulnerability-disclosure", title: "Vulnerability disclosure", summary: "How researchers report issues and the safe-harbor terms." },
    { topic_id: "operational-resilience", title: "Operational resilience", summary: "Backups, restore validation and how availability is communicated." },
  ],

  trust_claims: [
    {
      ...common(), id: "trust-encryption-transit-rest", kind: "TRUST_CLAIM",
      topic_id: "security-practices",
      title: "Encryption in transit and at rest",
      canonical_url: "/security-trust-center", claim_type: "security", owner: "trust",
      summary: "Tenant data is protected in transit and at rest using standard industry algorithms.",
      body: "The Security Practices page states that all tenant data is protected during transit and at rest using standard industry algorithms, and that custom-designed, non-standard encryption is prohibited. It also notes that specific cryptographic parameters are set out in enterprise contracts rather than on the public page.",
      statement: "Tenant data is protected in transit and at rest using standard industry encryption algorithms; custom, non-standard encryption is not used.",
      policy: "ALLOW",
      keywords: ["encryption", "at rest", "in transit", "cryptography"],
    },
    {
      ...common(), id: "trust-tenant-partitioning", kind: "TRUST_CLAIM",
      topic_id: "security-practices",
      title: "Tenant data partitioning",
      canonical_url: "/security-trust-center", claim_type: "security", owner: "trust",
      summary: "Tenant data spaces are partitioned logically and cryptographically.",
      body: "The Security Practices page states that tenant data spaces are partitioned cryptographically and logically to prevent side-channel data access across customer segments.",
      statement: "Tenant data spaces are partitioned logically and cryptographically to prevent data access across customer segments.",
      policy: "ALLOW",
      keywords: ["tenant isolation", "multi-tenant", "partitioning", "segregation"],
    },
    {
      ...common(), id: "trust-environment-separation", kind: "TRUST_CLAIM",
      topic_id: "security-practices",
      title: "Environment separation and access elevation",
      canonical_url: "/security-trust-center", claim_type: "security", owner: "trust",
      summary: "Development, testing, staging and production are isolated, and administrative roles use just-in-time elevation.",
      body: "The Security Practices page states that development, testing, staging and production environments are strictly isolated and that live customer data does not enter testing zones. Administrative roles are elevated just in time with explicit reasons, remaining active only for limited, audited windows.",
      statement: "Development, testing, staging and production environments are isolated, no live customer data enters testing, and administrative access uses time-limited, audited just-in-time elevation.",
      policy: "ALLOW",
      keywords: ["environment separation", "just-in-time", "privileged access", "admin access"],
    },
    {
      ...common(), id: "trust-secure-development", kind: "TRUST_CLAIM",
      topic_id: "security-practices",
      title: "Secure development lifecycle",
      canonical_url: "/security-trust-center", claim_type: "security", owner: "trust",
      summary: "Threat modeling, managed secrets and dependency scanning are part of the build lifecycle.",
      body: "The Security Practices page describes threat modeling before code is drafted, a ban on hardcoded credentials with secrets kept in managed key repositories with rotation, and external libraries traced, scanned and pinned in the build pipeline. It also states that SBOM digests are compiled for core builds.",
      statement: "ZoikoShield's build lifecycle includes threat modeling, managed secrets with rotation, and scanned, pinned dependencies.",
      policy: "ALLOW",
      keywords: ["secure development", "sdlc", "threat modeling", "secrets", "dependencies", "sbom"],
    },
    {
      ...common(), id: "trust-read-only-and-approval", kind: "TRUST_CLAIM",
      topic_id: "security-practices",
      title: "Read-only operation and approval before action",
      canonical_url: "/trust-center", claim_type: "security", owner: "trust",
      summary: "ZoikoShield can run read-only; write permissions are requested only for active containment rules.",
      body: "The Trust Center FAQ states that ZoikoShield can be configured in a completely read-only posture to compile assurance reports, and that write permissions are requested only for active containment rules. The pricing page adds that write access is needed only if you select dual-party containment rules, and the privacy notice states that remediation or containment actions triggered by the policy model require human sign-off before execution.",
      statement: "ZoikoShield can operate in a read-only mode; write access is needed only if you enable containment rules, and containment actions require human sign-off before execution.",
      policy: "ALLOW",
      keywords: ["read-only", "write access", "containment", "approval", "human sign-off", "dual approval"],
    },
    {
      ...common(), id: "trust-least-privilege-connectors", kind: "TRUST_CLAIM",
      topic_id: "security-practices",
      title: "Least-privilege connector credentials",
      canonical_url: "/privacy-data-protection", claim_type: "security", owner: "trust",
      summary: "API integrations use isolated credentials bound to specific read or write scopes, not global admin tokens.",
      body: "The Privacy & Data Protection page states that API integrations operate using isolated credentials bound strictly to specified read or write scopes, and that global admin tokens are not used for any connector.",
      statement: "Integrations use isolated credentials scoped to specific read or write permissions; global admin tokens are not used for connectors.",
      policy: "ALLOW",
      keywords: ["least privilege", "credentials", "connector permissions", "api scopes"],
    },
    {
      ...common(), id: "trust-support-break-glass", kind: "TRUST_CLAIM",
      topic_id: "privacy",
      title: "Support access to your tenant",
      canonical_url: "/privacy-data-protection", claim_type: "privacy", owner: "trust",
      summary: "Emergency support access is offline by default and requires approval from your organization owner.",
      body: "The Privacy & Data Protection page states that emergency support access is offline by default. If requested, it requires an approval from the customer's own organization owner before a strictly audited, time-limited session is opened.",
      statement: "Support personnel access is off by default; emergency access requires approval from your organization owner and is audited and time-limited.",
      policy: "ALLOW",
      keywords: ["support access", "break glass", "vendor access", "privacy"],
    },
    {
      ...common(), id: "trust-no-training-customer-data", kind: "TRUST_CLAIM",
      topic_id: "responsible-ai",
      title: "Customer data and model training",
      canonical_url: "/trust-center", claim_type: "privacy", owner: "trust",
      summary: "ZoikoShield states it does not use customer telemetry to train foundation models.",
      body: "The Trust Center states that client telemetry, incident descriptions and directory contexts are not used to train foundation models. The Privacy & Data Protection page notes that this restriction is enforced through upstream model contracts and lists it as valid for built-in models, and the Responsible AI page says training handling is stated per feature.",
      statement: "ZoikoShield states that customer telemetry, incident descriptions and directory context are not used to train foundation models.",
      policy: "QUALIFY",
      qualifier: "The site scopes this to built-in model integrations under upstream contracts; confirm training and data-use terms for a specific AI feature with the trust team.",
      keywords: ["ai training", "model training", "customer data", "llm"],
    },
    {
      ...common(), id: "trust-no-compliance-guarantee", kind: "TRUST_CLAIM",
      topic_id: "assurance-materials",
      title: "ZoikoShield does not certify your compliance",
      canonical_url: "/how-pricing-works", claim_type: "certification", owner: "trust",
      summary: "Using ZoikoShield is not a SOC 2 audit, a HIPAA compliance guarantee or a regulatory certification.",
      body: "The pricing page's compliance notice states that using ZoikoShield does not constitute a certified SOC 2 audit, a HIPAA compliance guarantee or a regulatory certification, and that independent third-party auditor evaluation remains necessary. The Framework Coverage and Compliance Control Plane pages likewise state that framework references do not imply certification, regulator approval or guaranteed compliance.",
      statement: "ZoikoShield does not certify customers or guarantee compliance; framework references describe supported alignment, and independent auditor evaluation is still required.",
      policy: "ALLOW",
      keywords: ["certification", "compliance guarantee", "soc 2", "hipaa", "audit", "framework"],
    },
    {
      ...common(), id: "trust-soc2-report", kind: "TRUST_CLAIM",
      topic_id: "assurance-materials",
      title: "SOC 2 Type II evidence report",
      canonical_url: "/trust-center", claim_type: "certification", owner: "trust",
      summary: "The Trust Center evidence library lists a SOC 2 Type II evidence report available under NDA.",
      body: "The Trust Center evidence library lists a SOC 2 Type II Evidence Report attributed to an external CPA firm, with access marked as NDA required. The library states that restricted artifacts require active NDA review, and the Trust Center FAQ notes archived materials can be provided after NDA confirmation.",
      statement: "The Trust Center lists a SOC 2 Type II evidence report that is available under NDA.",
      policy: "QUALIFY",
      qualifier: "Listed in the Trust Center evidence library only; the report's scope, period and current status must be confirmed through an NDA-gated request to the trust team.",
      restricted_material_available: true,
      keywords: ["soc 2", "soc2", "type ii", "audit report", "attestation"],
    },
    {
      ...common(), id: "trust-iso27001-materials", kind: "TRUST_CLAIM",
      topic_id: "assurance-materials",
      title: "ISO 27001 materials",
      canonical_url: "/trust-center", claim_type: "certification", owner: "trust",
      summary: "The Trust Center evidence library lists an ISO 27001 ISMS item.",
      body: "The Trust Center evidence library lists an \"ISO 27001 ISMS Posture Proof\" item. The page does not set out the certificate scope or certifying body details in prose.",
      statement: "The Trust Center evidence library lists ISO 27001 ISMS materials.",
      policy: "QUALIFY",
      qualifier: "Only listed as an evidence-library item; confirm certification status and scope with the trust team before relying on it.",
      restricted_material_available: true,
      keywords: ["iso 27001", "isms", "certification"],
    },
    {
      ...common(), id: "trust-pentest-summary", kind: "TRUST_CLAIM",
      topic_id: "assurance-materials",
      title: "Penetration test summary",
      canonical_url: "/security-trust-center", claim_type: "security", owner: "trust",
      summary: "A penetration test summary is available to customers under NDA; a security overview is public.",
      body: "The Security Practices page lists a publicly accessible Security Overview (design, security principles and shared responsibility) and a customer-only Penetration Test Summary covering test scopes, remediation reports and methodology, available under NDA. Raw telemetry dumps are not distributed.",
      statement: "A penetration test summary is available to customers under NDA, and a security overview is publicly available.",
      policy: "QUALIFY",
      qualifier: "Customer-only material under NDA; request it through the Trust Center security review route.",
      restricted_material_available: true,
      keywords: ["penetration test", "pentest", "security overview", "nda"],
    },
    {
      ...common(), id: "trust-vdp-safe-harbor", kind: "TRUST_CLAIM",
      topic_id: "vulnerability-disclosure",
      title: "Safe harbor for good-faith research",
      canonical_url: "/vulnerability-disclosure", claim_type: "security", owner: "trust",
      summary: "Good-faith research reported in line with the policy is treated as authorized.",
      body: "The Vulnerability Disclosure page states that good-faith research reported in compliance with the policy is considered authorized, and that Zoiko will not take legal action regarding testing that stays within the policy's rules. The policy does not authorize access to third-party assets or tenant-hosted data.",
      statement: "ZoikoShield offers safe harbor for good-faith vulnerability research that follows its disclosure policy.",
      policy: "ALLOW",
      keywords: ["safe harbor", "vulnerability disclosure", "researcher", "bug bounty"],
    },
    {
      ...common(), id: "trust-availability-communication", kind: "TRUST_CLAIM",
      topic_id: "operational-resilience",
      title: "Backups and availability communication",
      canonical_url: "/security-trust-center", claim_type: "security", owner: "trust",
      summary: "Production data regions keep standby replicas with routine restore validation; no SLA percentages or RTO guarantees are published.",
      body: "The Security Practices page states that production data regions maintain automated standby replicas, that backups are periodically evaluated against recovery plans, and that routine restore simulations run on isolated networks. It also states that ZoikoShield does not publish artificial SLA percentages or RTO guarantees; operational status is communicated through the System Status page.",
      statement: "Backups use standby replicas with routine restore validation; ZoikoShield does not publish uptime percentages or recovery-time guarantees, and communicates status via the System Status page.",
      policy: "ALLOW",
      keywords: ["backups", "disaster recovery", "uptime", "sla", "availability", "resilience"],
    },
  ],

  // ---------------------------------------------------------------------------
  // Plans (no published prices; all quote-based)
  // ---------------------------------------------------------------------------
  feature_defs: [
    { feature_key: "read_correlate", label: "Read & correlate monitoring" },
    { feature_key: "write_back", label: "Write-back containment actions" },
    { feature_key: "dual_party_approval", label: "Dual-party approval policies" },
    { feature_key: "standard_connectors", label: "Standard out-of-the-box connectors" },
    { feature_key: "searchable_index_90d", label: "90-day live searchable index" },
    { feature_key: "extended_retention", label: "Extended retention (1–7 years)" },
    { feature_key: "custom_siem_integrations", label: "Custom API / SIEM integrations" },
    { feature_key: "isolated_tenancy", label: "Isolated tenancy / Private Link" },
    { feature_key: "named_architect", label: "Named architect support tier" },
  ],

  plans: [
    {
      ...common(), id: "plan-read-correlate", kind: "PLAN",
      plan_id: "read-correlate",
      name: "Read & Correlate Only",
      title: "Read & Correlate Only",
      tagline: "Standard engine: continuous, non-remediating monitoring and correlation.",
      audience: "Teams that want continuous monitoring and compliance evidence without granting write access.",
      canonical_url: "/how-pricing-works", claim_type: "commercial", owner: "commercial",
      summary: "The standard engine block: continuous monitoring of directory states and host health with diagnostic, non-remediating telemetry.",
      body: "The pricing page describes the Standard Engine block as continuous monitoring of directory states and host health, compiling diagnostic, non-remediating telemetry. ZoikoShield can run fully read-only to generate continuous compliance evidence. Pricing is quote-based and depends on validated scope.",
      price: { decision: "quote_required" },
      features: platformFeatures("read_correlate"),
      keywords: ["read only", "standard engine", "monitoring"],
    },
    {
      ...common(), id: "plan-write-back", kind: "PLAN",
      plan_id: "write-back",
      name: "Write-Back Remediation",
      title: "Write-Back Remediation",
      tagline: "Active containment rules with native write actions.",
      audience: "Teams that want ZoikoShield to initiate containment actions in connected tools during posture mismatches.",
      canonical_url: "/how-pricing-works", claim_type: "commercial", owner: "commercial",
      summary: "The write-back block enables native write actions such as host isolation or session revocation during posture mismatch conditions.",
      body: "The pricing page describes the Write-Back Remediation block as enabling native write actions from ZoikoShield, such as initiating host isolation or revoking active sessions during posture mismatch conditions. Moving from passive monitoring to active containment is listed as a factor that can change your scope. Pricing is quote-based.",
      price: { decision: "quote_required" },
      features: platformFeatures("write_back"),
      keywords: ["write-back", "containment", "remediation"],
    },
    {
      ...common(), id: "plan-enterprise-governed", kind: "PLAN",
      plan_id: "enterprise-governed",
      name: "Enterprise Governed (Dual-Party Approval)",
      title: "Enterprise Governed (Dual-Party Approval)",
      tagline: "Multi-signature controls for critical containment and role elevation.",
      audience: "Enterprises that require two authorized leads to approve critical actions before they run.",
      canonical_url: "/how-pricing-works", claim_type: "commercial", owner: "commercial",
      summary: "The enterprise governed block enforces dual-party approval: critical containment or role elevation needs approval from two authorized leads.",
      body: "The pricing page describes the Enterprise Governed block as enforcing multi-signature controls: any critical containment or role elevation must be approved by two authorized enterprise leads before it runs. Commercial tiers reflect the level of write authority and dual-approval checks in your tenant. Pricing is quote-based.",
      price: { decision: "quote_required" },
      features: platformFeatures("dual_party_approval"),
      keywords: ["dual-party approval", "enterprise", "multi-signature", "governed"],
    },
    {
      ...common(), id: "plan-managed-defense", kind: "PLAN",
      plan_id: "managed-defense",
      name: "Managed Defense",
      title: "Managed Defense",
      tagline: "Security-operations path: detection, investigation and governed response.",
      audience: "Organizations that want to extend monitoring, detection, investigation and governed response within a defined engagement.",
      canonical_url: "/compare-starting-paths", claim_type: "commercial", owner: "commercial",
      summary: "A security-operations service path. Pricing and included capabilities are contract-specific.",
      body: "Managed Defense is one of two independent starting paths. Coverage, hours, regions, staffing, included sources, response targets and actions vary by approved service scope. The comparison page states that pricing and included capabilities are contract-specific and are confirmed through commercial qualification.",
      price: { decision: "quote_required" },
      features: serviceFeatures(),
      keywords: ["managed defense", "service", "soc", "managed detection"],
    },
    {
      ...common(), id: "plan-continuous-assurance", kind: "PLAN",
      plan_id: "continuous-assurance",
      name: "Continuous Assurance",
      title: "Continuous Assurance",
      tagline: "Assurance path: ongoing control and evidence assurance and audit readiness.",
      audience: "Assurance or control program owners who need ongoing control and evidence assurance.",
      canonical_url: "/compare-starting-paths", claim_type: "commercial", owner: "commercial",
      summary: "An assurance service path. Pricing and included capabilities are contract-specific.",
      body: "Continuous Assurance is one of two independent starting paths. Control scope, cadence, framework coverage, evidence sources, review model and outputs are engagement-specific. The comparison page states that pricing and included capabilities are contract-specific, and that the service does not promise certification, regulator approval or audit acceptance.",
      price: { decision: "quote_required" },
      features: serviceFeatures(),
      keywords: ["continuous assurance", "audit readiness", "compliance service"],
    },
  ],

  // Sizing bands mirror the pricing page's scope estimator; they never imply a price.
  asset_bands: [
    { band_id: "under-500", label: "Under 500 protected units" },
    { band_id: "500-2500", label: "500 – 2,500 protected units" },
    { band_id: "2500-10000", label: "2,500 – 10,000 protected units" },
    { band_id: "10000-plus", label: "10,000+ protected units" },
    { band_id: "not-sure", label: "Not sure" },
  ],

  ingestion_bands: [
    { band_id: "retention-90d", label: "90-day active telemetry" },
    { band_id: "retention-1y", label: "1-year active index" },
    { band_id: "retention-7y", label: "7-year archive" },
    { band_id: "not-sure", label: "Not sure" },
  ],

  fit_rules: [
    {
      asset_band: "under-500",
      guidance: "Plan tiers differ by the write authority you need, not by size. Discuss whether read-only or containment is right; the commercial team confirms scope units and the quote.",
      plan_ids: ["read-correlate", "write-back", "enterprise-governed"],
    },
    {
      asset_band: "500-2500",
      guidance: "Size sets your scoped protection units; the tier depends on whether you need read-only, write-back or dual-party approval. An integration architect validates scope before a quote.",
      plan_ids: ["read-correlate", "write-back", "enterprise-governed"],
    },
    {
      asset_band: "2500-10000",
      guidance: "Size sets your scoped protection units; the tier depends on the write authority and approval controls you need. An integration architect validates scope before a quote.",
      plan_ids: ["read-correlate", "write-back", "enterprise-governed"],
    },
    {
      asset_band: "10000-plus",
      guidance: "Larger estates are scoped with a custom ceiling. Discuss the governance tier you need; the commercial team confirms scope and pricing.",
      plan_ids: ["read-correlate", "write-back", "enterprise-governed"],
    },
    {
      asset_band: "not-sure",
      guidance: "Start by counting active EDR sensors and active identity profiles. Discuss the platform tiers with the team, who will confirm scope.",
      plan_ids: ["read-correlate", "write-back", "enterprise-governed"],
    },
    {
      ingestion_band: "retention-90d",
      guidance: "The pricing page describes a 90-day live searchable index for standard plans. Confirm retention needs with the team.",
      plan_ids: ["read-correlate", "write-back", "enterprise-governed"],
    },
    {
      ingestion_band: "retention-1y",
      guidance: "Extended retention is scoped separately on storage-optimized nodes. Raise it early; the team will confirm how it affects scope.",
      plan_ids: ["read-correlate", "write-back", "enterprise-governed"],
    },
    {
      ingestion_band: "retention-7y",
      guidance: "Long retention requires dedicated archive scoping. Discuss it with the team, who will confirm scope.",
      plan_ids: ["read-correlate", "write-back", "enterprise-governed"],
    },
    {
      ingestion_band: "not-sure",
      guidance: "Retention goals can be decided during scoping. The team will confirm what fits your evidence requirements.",
      plan_ids: ["read-correlate", "write-back", "enterprise-governed"],
    },
  ],

  // ---------------------------------------------------------------------------
  // Discovery
  // ---------------------------------------------------------------------------
  discovery: {
    ruleset_version: "2026-10-27.1",
    disclaimer:
      "These suggestions are a starting point for a conversation, not an assessment of your environment, a recommendation of one service over another, or a statement of fit.",
    priorities: [
      { id: "detect-investigate", label: "Extend detection, triage and investigation" },
      { id: "govern-response", label: "Govern response decisions and actions" },
      { id: "audit-readiness", label: "Improve audit readiness" },
      { id: "prove-controls", label: "Monitor control effectiveness and evidence" },
      { id: "incident-preparedness", label: "Prepare for incidents" },
      { id: "executive-risk", label: "Support executive and board risk decisions" },
    ],
    roles: [
      { id: "security-lead", label: "Security leader or SOC manager" },
      { id: "compliance-lead", label: "Compliance, risk or assurance lead" },
      { id: "it-admin", label: "IT or identity administrator" },
      { id: "executive", label: "Executive or board stakeholder" },
    ],
    environments: [
      { id: "microsoft", label: "Mostly Microsoft (Entra ID, Defender, Intune)" },
      { id: "multi-cloud", label: "Multi-cloud (AWS, Google Cloud and others)" },
      { id: "endpoint-identity", label: "Mixed endpoint and identity tools" },
      { id: "not-sure", label: "Not sure" },
    ],
    rules: [
      { priority: "detect-investigate", capability_ids: ["detection-response", "case-management", "managed-defense"] },
      { priority: "detect-investigate", role: "executive", capability_ids: ["managed-defense", "detection-response", "risk-intelligence"] },
      { priority: "govern-response", capability_ids: ["governed-response", "detection-response", "case-management"] },
      { priority: "govern-response", role: "security-lead", capability_ids: ["governed-response", "managed-defense", "detection-response"] },
      { priority: "audit-readiness", capability_ids: ["compliance-control-plane", "evidence-ledger", "continuous-assurance"] },
      { priority: "audit-readiness", role: "executive", capability_ids: ["continuous-assurance", "compliance-control-plane", "vciso-advisory"] },
      { priority: "prove-controls", capability_ids: ["continuous-assurance", "evidence-ledger", "compliance-control-plane"] },
      { priority: "prove-controls", environment: "microsoft", capability_ids: ["evidence-ledger", "compliance-control-plane", "continuous-assurance"] },
      { priority: "incident-preparedness", capability_ids: ["incident-readiness", "governed-response", "vciso-advisory"] },
      { priority: "incident-preparedness", role: "security-lead", capability_ids: ["incident-readiness", "managed-defense", "governed-response"] },
      { priority: "executive-risk", capability_ids: ["risk-intelligence", "vciso-advisory", "evidence-ledger"] },
      { priority: "executive-risk", role: "compliance-lead", capability_ids: ["risk-intelligence", "compliance-control-plane", "evidence-ledger"] },
    ],
  },

  capabilities: [
    {
      ...common(), id: "cap-detection-response", kind: "CAPABILITY",
      capability_id: "detection-response",
      name: "Detection & Response",
      canonical_url: "/detection-and-response", claim_type: "general", owner: "product",
      title: "Detection & Response",
      summary: "Correlated detection, investigation, cases and governed response, with human authority explicit at each step.",
      body: "Explore an inspectable path from source signal to governed action. Correlation provides relationship and context, not proof of cause. Automation and AI may assist, but consequential conclusions retain human authority. No autonomous response is claimed.",
      priorities: ["detect-investigate", "govern-response"],
      roles: ["security-lead", "it-admin"],
      environments: ["microsoft", "multi-cloud", "endpoint-identity", "not-sure"],
      keywords: ["detection", "investigation", "response"],
    },
    {
      ...common(), id: "cap-case-management", kind: "CAPABILITY",
      capability_id: "case-management",
      name: "Case Management",
      canonical_url: "/case-management", claim_type: "general", owner: "product",
      title: "Case Management",
      summary: "A governed destination for investigation context, evidence references, decision history and attributable communications.",
      body: "A case organizes context and history; it does not by itself establish compromise, causality or permission to act. The site describes Case Management as a conditional destination whose availability depends on readiness gates.",
      priorities: ["detect-investigate", "govern-response"],
      roles: ["security-lead"],
      environments: ["not-sure"],
      keywords: ["cases", "investigation", "case management"],
    },
    {
      ...common(), id: "cap-governed-response", kind: "CAPABILITY",
      capability_id: "governed-response",
      name: "Governed Response",
      canonical_url: "/governed-response", claim_type: "general", owner: "product",
      title: "Governed Response",
      summary: "Governs consequential response actions through explicit authority, scope, approval, evidence, attestation and rollback boundaries.",
      body: "Authority policy defines who may recommend, review, approve, execute, stop and recover. Approval is a governed decision with expiry and rationale, not a button click. Reversibility and residual effects are declared per action.",
      priorities: ["govern-response", "incident-preparedness"],
      roles: ["security-lead", "it-admin"],
      environments: ["microsoft", "multi-cloud", "endpoint-identity", "not-sure"],
      keywords: ["response", "approval", "decision rights", "rollback"],
    },
    {
      ...common(), id: "cap-compliance-control-plane", kind: "CAPABILITY",
      capability_id: "compliance-control-plane",
      name: "Compliance Control Plane",
      canonical_url: "/compliance-control-plane", claim_type: "general", owner: "product",
      title: "Compliance Control Plane",
      summary: "Organizes governed controls, mappings, tests, assessments, exceptions, linked evidence and an audit workspace.",
      body: "Every displayed state shows its basis and limitations. Framework references describe supported alignment and do not imply certification, regulator approval or guaranteed compliance. Audit workspace completion does not imply auditor acceptance.",
      priorities: ["audit-readiness", "prove-controls"],
      roles: ["compliance-lead", "executive"],
      environments: ["microsoft", "multi-cloud", "endpoint-identity", "not-sure"],
      keywords: ["compliance", "controls", "audit workspace", "framework mapping"],
    },
    {
      ...common(), id: "cap-evidence-ledger", kind: "CAPABILITY",
      capability_id: "evidence-ledger",
      name: "Evidence Ledger & Verification",
      canonical_url: "/evidence-ledger-verification", claim_type: "general", owner: "product",
      title: "Evidence Ledger & Verification",
      summary: "Tamper-evident evidence records with lineage, completeness states, evidence packages and scoped verification paths.",
      body: "The ledger records evidence identity, authority, scope, lineage, state and history. Tamper-evident means detectable change within a declared method and scope. Verification checks declared integrity inputs; it does not establish compliance or certification.",
      priorities: ["audit-readiness", "prove-controls", "executive-risk"],
      roles: ["compliance-lead", "security-lead"],
      environments: ["microsoft", "multi-cloud", "endpoint-identity", "not-sure"],
      keywords: ["evidence", "ledger", "verification", "lineage"],
    },
    {
      ...common(), id: "cap-risk-intelligence", kind: "CAPABILITY",
      capability_id: "risk-intelligence",
      name: "Risk Intelligence",
      canonical_url: "/risk-intelligence", claim_type: "general", owner: "product",
      title: "Risk Intelligence",
      summary: "Governed risk views that disclose definition, source lineage, scope, assumptions, freshness and owner.",
      body: "Risk views organize evidence and decision context; accountable people decide. The page states that no risk score, scale, threshold or benchmark is published because none is defined by an approved method.",
      priorities: ["executive-risk"],
      roles: ["executive", "compliance-lead"],
      environments: ["not-sure"],
      keywords: ["risk", "board reporting", "executive", "decision support"],
    },
    {
      ...common(), id: "cap-managed-defense", kind: "CAPABILITY",
      capability_id: "managed-defense",
      name: "Managed Defense",
      canonical_url: "/managed-defense", claim_type: "general", owner: "solutions",
      title: "Managed Defense",
      summary: "A service that extends monitoring, detection, investigation and governed response through a defined scope that preserves customer authority.",
      body: "Sources are customer-approved and validated before entering coverage. Response actions are approval-required by default unless the contract says otherwise, and approval is never inferred from silence. Hours and coverage are a qualification question, not a page claim.",
      priorities: ["detect-investigate", "govern-response", "incident-preparedness"],
      roles: ["security-lead", "executive", "it-admin"],
      environments: ["microsoft", "multi-cloud", "endpoint-identity", "not-sure"],
      keywords: ["managed defense", "managed service", "soc", "mdr"],
    },
    {
      ...common(), id: "cap-continuous-assurance", kind: "CAPABILITY",
      capability_id: "continuous-assurance",
      name: "Continuous Assurance",
      canonical_url: "/continuous-assurance", claim_type: "general", owner: "solutions",
      title: "Continuous Assurance",
      summary: "An assurance-led starting path connecting governed evidence, control context, review and accountable follow-through.",
      body: "Scope, cadence, framework coverage, evidence sources, review model and outputs are engagement-specific. Participation does not set a control to compliant, effective or certified, and the service does not imply certification or guaranteed compliance.",
      priorities: ["audit-readiness", "prove-controls"],
      roles: ["compliance-lead", "executive"],
      environments: ["microsoft", "multi-cloud", "endpoint-identity", "not-sure"],
      keywords: ["continuous assurance", "audit readiness", "controls"],
    },
    {
      ...common(), id: "cap-incident-readiness", kind: "CAPABILITY",
      capability_id: "incident-readiness",
      name: "Incident Readiness",
      canonical_url: "/incident-readiness-service", claim_type: "general", owner: "solutions",
      title: "Incident Readiness",
      summary: "Preparation, activation and response governance with explicit authority, evidence, communications and limitations.",
      body: "Incident Readiness establishes the preparation baseline and activation routes before an incident. It is distinct from an Incident Response Retainer, which is contracted separately, and it does not promise recovery timeframes or decide legal notification duties.",
      priorities: ["incident-preparedness"],
      roles: ["security-lead", "executive"],
      environments: ["not-sure"],
      keywords: ["incident readiness", "preparedness", "tabletop", "ir"],
    },
    {
      ...common(), id: "cap-vciso-advisory", kind: "CAPABILITY",
      capability_id: "vciso-advisory",
      name: "vCISO Advisory",
      canonical_url: "/vciso-advisory", claim_type: "general", owner: "solutions",
      title: "vCISO Advisory",
      summary: "Advisory support for security strategy, governance, risk, board reporting and readiness planning.",
      body: "Advisory covers strategy and roadmap discovery, governance and policy review, evidence-linked summaries for executives and the board, and readiness planning. It is not IR operations or testing, and decisions stay with your authorized decider.",
      priorities: ["executive-risk", "audit-readiness", "incident-preparedness"],
      roles: ["executive", "security-lead"],
      environments: ["not-sure"],
      keywords: ["vciso", "advisory", "strategy", "board"],
    },
  ],

  // ---------------------------------------------------------------------------
  // Connectors (only those the integration pages name)
  // ---------------------------------------------------------------------------
  connector_categories: [
    { id: "endpoint-identity", label: "Endpoint & identity" },
    { id: "microsoft", label: "Microsoft ecosystem" },
    { id: "cloud-platforms", label: "Cloud platforms" },
    { id: "siem-observability", label: "SIEM & observability" },
    { id: "collaboration-tickets", label: "Collaboration & tickets" },
    { id: "developer-api", label: "Developer & API" },
  ],

  connectors: [
    {
      ...common(), id: "conn-crowdstrike-falcon", kind: "CONNECTOR",
      connector_id: "crowdstrike-falcon",
      name: "CrowdStrike Falcon",
      category: "endpoint-identity",
      title: "CrowdStrike Falcon connector",
      canonical_url: "/integration-catalog", claim_type: "connector", owner: "product",
      summary: "Listed as Available in the integration catalog: telemetry from active endpoint sensors.",
      body: "The integration catalog lists CrowdStrike Falcon as Available, acquiring telemetry from active endpoint sensors. The connector detail describes API client credentials restricted to least-privilege read scopes.",
      availability: [{ market: "global", status: "AVAILABLE", verified_at: VERIFIED_AT }],
      deployment_topics: ["API client credentials with least-privilege read scopes", "Which sensors and hosts are in scope", "Availability for your contract and region"],
      keywords: ["crowdstrike", "falcon", "edr"],
    },
    {
      ...common(), id: "conn-okta", kind: "CONNECTOR",
      connector_id: "okta",
      name: "Okta",
      category: "endpoint-identity",
      title: "Okta connector",
      canonical_url: "/integration-catalog", claim_type: "connector", owner: "product",
      summary: "Listed as Available in the integration catalog: identity events, auth trails and MFA enrollment state.",
      body: "The integration catalog lists Okta Directory as Available, mapping identity events, authentication trails and MFA enrollment state to compliance criteria.",
      availability: [{ market: "global", status: "AVAILABLE", verified_at: VERIFIED_AT }],
      deployment_topics: ["Directory group scope to include", "Read vs. write permissions", "Availability for your contract and region"],
      keywords: ["okta", "identity", "sso", "mfa"],
    },
    {
      ...common(), id: "conn-microsoft-sentinel", kind: "CONNECTOR",
      connector_id: "microsoft-sentinel",
      name: "Microsoft Sentinel",
      category: "siem-observability",
      title: "Microsoft Sentinel connector",
      canonical_url: "/integration-catalog", claim_type: "connector", owner: "product",
      summary: "Listed as Available in the integration catalog: security alerts and mapped control evidence.",
      body: "The integration catalog lists Microsoft Sentinel as Available under SIEM & Observability, syncing security alerts and mapped control evidence. The Microsoft ecosystem page states ZoikoShield works alongside Sentinel rather than replacing it.",
      availability: [{ market: "global", status: "AVAILABLE", verified_at: VERIFIED_AT }],
      deployment_topics: ["Workspace scope and permissions", "Microsoft licensing prerequisites", "Availability for your contract and region"],
      keywords: ["sentinel", "siem", "microsoft"],
    },
    {
      ...common(), id: "conn-aws", kind: "CONNECTOR",
      connector_id: "aws",
      name: "Amazon Web Services",
      category: "cloud-platforms",
      title: "Amazon Web Services connector",
      canonical_url: "/integration-catalog", claim_type: "connector", owner: "product",
      summary: "Listed as Available in the integration catalog: CloudTrail audit trails, configuration compliance and evidence.",
      body: "The integration catalog lists Amazon Web Services as Available, ingesting CloudTrail API audit trails, configuration compliance and evidence. The cloud integrations page describes a least-privilege, read-only default and scoping by organization unit, account or region.",
      availability: [{ market: "global", status: "AVAILABLE", verified_at: VERIFIED_AT }],
      deployment_topics: ["Accounts, organization units and regions in scope", "Read-only role permissions", "Availability for your contract and region"],
      keywords: ["aws", "amazon", "cloudtrail", "security hub"],
    },
    {
      ...common(), id: "conn-google-cloud", kind: "CONNECTOR",
      connector_id: "google-cloud",
      name: "Google Cloud Platform",
      category: "cloud-platforms",
      title: "Google Cloud Platform connector",
      canonical_url: "/integration-catalog", claim_type: "connector", owner: "product",
      summary: "Listed as Partner-assisted in the integration catalog: audit trail mapping and configuration drift detection.",
      body: "The integration catalog lists Google Cloud Platform with a Partner-assisted label, covering audit trail mapping and configuration drift detection for GKE and IAM. The catalog describes Partner-assisted paths as production-ready, delivered with partner involvement.",
      availability: [{ market: "global", status: "AVAILABLE", verified_at: VERIFIED_AT }],
      deployment_topics: ["Partner-assisted delivery arrangements", "Folders and projects in scope", "Availability for your contract and region"],
      keywords: ["gcp", "google cloud", "gke"],
    },
    {
      ...common(), id: "conn-slack", kind: "CONNECTOR",
      connector_id: "slack",
      name: "Slack Enterprise",
      category: "collaboration-tickets",
      title: "Slack Enterprise connector",
      canonical_url: "/integration-catalog", claim_type: "connector", owner: "product",
      summary: "Listed as Available in the integration catalog: notification trails and interactive approvals for analysts.",
      body: "The integration catalog lists Slack Enterprise as Available, delivering notification trails and interactive approvals to analysts.",
      availability: [{ market: "global", status: "AVAILABLE", verified_at: VERIFIED_AT }],
      deployment_topics: ["Channels and audiences for notifications", "How approvals map to your decision rights"],
      keywords: ["slack", "notifications", "approvals"],
    },
    {
      ...common(), id: "conn-jira", kind: "CONNECTOR",
      connector_id: "jira-cloud",
      name: "Jira Software Cloud",
      category: "collaboration-tickets",
      title: "Jira Software Cloud connector",
      canonical_url: "/integration-catalog", claim_type: "connector", owner: "product",
      summary: "Listed as Beta in the integration catalog: incident ticket creation and evidence capture.",
      body: "The integration catalog lists Jira Software Cloud as Beta, for incident ticket creation, analyst assignments and evidence capture.",
      availability: [{ market: "global", status: "BETA", verified_at: VERIFIED_AT }],
      deployment_topics: ["Beta terms and limitations", "Projects and workflows in scope"],
      keywords: ["jira", "ticketing", "itsm"],
    },
    {
      ...common(), id: "conn-github-enterprise", kind: "CONNECTOR",
      connector_id: "github-enterprise",
      name: "GitHub Enterprise",
      category: "developer-api",
      title: "GitHub Enterprise connector",
      canonical_url: "/integration-catalog", claim_type: "connector", owner: "product",
      summary: "Listed as Planned in the integration catalog.",
      body: "The integration catalog lists GitHub Enterprise as Planned, describing continuous mapping of pull requests, security alerts and pipeline sign-offs. Planned does not indicate a delivery date.",
      availability: [{ market: "global", status: "PLANNED", verified_at: VERIFIED_AT }],
      deployment_topics: ["Register interest through the integration request route", "No delivery date is committed"],
      keywords: ["github", "devops", "pipeline"],
    },
    {
      ...common(), id: "conn-microsoft-defender", kind: "CONNECTOR",
      connector_id: "microsoft-defender",
      name: "Microsoft Defender for Endpoint",
      category: "microsoft",
      title: "Microsoft Defender for Endpoint connector",
      canonical_url: "/endpoint-identity-integrations", claim_type: "connector", owner: "product",
      summary: "Named as a supported endpoint source; the page notes production validation is ongoing.",
      body: "The Endpoint & Identity integrations page names Microsoft Defender among supported providers and notes that production validation is ongoing. The Microsoft ecosystem page states architecture and availability are validated against your tenant, licensing and security requirements before implementation.",
      availability: [{ market: "global", status: "BETA", verified_at: VERIFIED_AT }],
      deployment_topics: ["Microsoft licensing prerequisites", "Read-only permission scope", "Validation against your tenant before implementation"],
      keywords: ["defender", "microsoft defender", "edr"],
    },
    {
      ...common(), id: "conn-microsoft-entra-id", kind: "CONNECTOR",
      connector_id: "microsoft-entra-id",
      name: "Microsoft Entra ID",
      category: "microsoft",
      title: "Microsoft Entra ID connector",
      canonical_url: "/endpoint-identity-integrations", claim_type: "connector", owner: "product",
      summary: "Named as a supported identity source; the page notes production validation is ongoing.",
      body: "The Endpoint & Identity integrations page names Microsoft Entra ID among supported providers and notes that production validation is ongoing. The Microsoft ecosystem page says advanced risk events require Entra ID P2 and authentication uses Entra ID app registrations.",
      availability: [{ market: "global", status: "BETA", verified_at: VERIFIED_AT }],
      deployment_topics: ["Entra ID licensing tier (P1/P2)", "App registration and read permissions", "Validation against your tenant before implementation"],
      keywords: ["entra", "azure ad", "identity", "microsoft"],
    },
    {
      ...common(), id: "conn-microsoft-intune", kind: "CONNECTOR",
      connector_id: "microsoft-intune",
      name: "Microsoft Intune",
      category: "microsoft",
      title: "Microsoft Intune connector",
      canonical_url: "/endpoint-identity-integrations", claim_type: "connector", owner: "product",
      summary: "Named as a supported device-management source; the page notes production validation is ongoing.",
      body: "The Endpoint & Identity integrations page names Microsoft Intune among supported providers and notes that production validation is ongoing. The Microsoft ecosystem page describes ingesting device posture and compliance status from Intune.",
      availability: [{ market: "global", status: "BETA", verified_at: VERIFIED_AT }],
      deployment_topics: ["Device groups in scope", "Read-only permission scope", "Validation against your tenant before implementation"],
      keywords: ["intune", "mdm", "device management", "microsoft"],
    },
    {
      ...common(), id: "conn-microsoft-purview", kind: "CONNECTOR",
      connector_id: "microsoft-purview",
      name: "Microsoft Purview",
      category: "microsoft",
      title: "Microsoft Purview connector",
      canonical_url: "/microsoft-ecosystem", claim_type: "connector", owner: "product",
      summary: "Named on the Microsoft ecosystem page; availability is validated against your tenant and licensing.",
      body: "The Microsoft ecosystem page names Microsoft Purview among the Microsoft products ZoikoShield connects to, and recommends Purview Audit Premium for advanced compliance mapping. Architecture and availability are validated against your tenant, licensing and security requirements before implementation.",
      availability: [{ market: "global", status: "BETA", verified_at: VERIFIED_AT }],
      deployment_topics: ["Purview audit licensing", "Validation against your tenant before implementation"],
      keywords: ["purview", "audit", "microsoft"],
    },
    {
      ...common(), id: "conn-jamf-pro", kind: "CONNECTOR",
      connector_id: "jamf-pro",
      name: "Jamf Pro",
      category: "endpoint-identity",
      title: "Jamf Pro connector",
      canonical_url: "/endpoint-identity-integrations", claim_type: "connector", owner: "product",
      summary: "Named as a supported device-management source; the page notes production validation is ongoing.",
      body: "The Endpoint & Identity integrations page names Jamf Pro among supported providers and notes that production validation is ongoing.",
      availability: [{ market: "global", status: "BETA", verified_at: VERIFIED_AT }],
      deployment_topics: ["Device inventory in scope", "API permissions", "Availability for your contract and region"],
      keywords: ["jamf", "mdm", "apple", "device management"],
    },
  ],

  // ---------------------------------------------------------------------------
  // Onboarding
  // ---------------------------------------------------------------------------
  personas: [
    { id: "security-lead", label: "Security leader" },
    { id: "it-admin", label: "IT or identity administrator" },
    { id: "executive", label: "Executive" },
    { id: "developer", label: "Developer" },
  ],

  onboarding_questions: [
    {
      question_id: "q-first-goal",
      prompt: "What do you want to do first?",
      personas: ["security-lead", "it-admin", "executive", "developer"],
      options: [
        { option_id: "understand-paths", label: "Understand which starting path fits", topic_ids: ["onb-choose-starting-path"] },
        { option_id: "connect-tools", label: "Connect our existing tools", topic_ids: ["onb-connect-sources", "onb-approvals-and-write-access"] },
        { option_id: "security-review", label: "Run a security and privacy review", topic_ids: ["onb-security-review"] },
        { option_id: "pricing", label: "Prepare for a pricing conversation", topic_ids: ["onb-prepare-scoping"] },
      ],
    },
    {
      question_id: "q-write-access",
      prompt: "Do you expect ZoikoShield to take containment actions in your tools?",
      personas: ["security-lead", "it-admin"],
      options: [
        { option_id: "read-only", label: "No, read-only for now", topic_ids: ["onb-connect-sources"] },
        { option_id: "with-approval", label: "Yes, with approvals", topic_ids: ["onb-approvals-and-write-access"] },
        { option_id: "unsure", label: "Not sure yet", topic_ids: ["onb-approvals-and-write-access", "onb-choose-starting-path"] },
      ],
    },
    {
      question_id: "q-build",
      prompt: "Will you be building against the API or webhooks?",
      personas: ["developer", "it-admin"],
      options: [
        { option_id: "yes", label: "Yes", topic_ids: ["onb-developer-setup"] },
        { option_id: "no", label: "No", topic_ids: ["onb-connect-sources"] },
      ],
    },
    {
      question_id: "q-exec-focus",
      prompt: "What matters most for your decision?",
      personas: ["executive", "security-lead"],
      options: [
        { option_id: "trust", label: "Security, privacy and assurance evidence", topic_ids: ["onb-security-review"] },
        { option_id: "cost", label: "Scope and commercial terms", topic_ids: ["onb-prepare-scoping"] },
        { option_id: "operating-model", label: "Operating model and ownership", topic_ids: ["onb-choose-starting-path"] },
      ],
    },
  ],

  onboarding_topics: [
    {
      ...common(), id: "onb-choose-starting-path", kind: "ONBOARDING",
      topic_id: "onb-choose-starting-path",
      title: "Choose a starting path",
      canonical_url: "/compare-starting-paths", claim_type: "general", owner: "solutions",
      summary: "Decide whether Managed Defense, Continuous Assurance or both match the job you need to solve.",
      body: "Managed Defense and Continuous Assurance are independent peer paths. Prepare the owners, scope and access each path needs before the conversation.",
      steps: [
        { step_id: "define-job", title: "Name the operating job", detail: "Decide whether you mainly need detection, investigation and governed response, or ongoing control and evidence assurance." },
        { step_id: "name-owners", title: "Identify accountable owners", detail: "A security operations owner for Managed Defense; an assurance or control program owner for Continuous Assurance." },
        { step_id: "scope-access", title: "Outline scope and access", detail: "List the systems, sources, controls and frameworks in scope, plus telemetry or evidence access and escalation contacts." },
      ],
      keywords: ["starting path", "managed defense", "continuous assurance"],
    },
    {
      ...common(), id: "onb-connect-sources", kind: "ONBOARDING",
      topic_id: "onb-connect-sources",
      title: "Connect your first sources",
      canonical_url: "/developers-documentation", claim_type: "general", owner: "product",
      summary: "Start with read-only permission boundaries and a safe test synchronization.",
      body: "The developer documentation recommends reviewing the Getting Started guide and confirming client credentials and read-only permission boundaries before the first safe test synchronization.",
      steps: [
        { step_id: "check-catalog", title: "Check the integration catalog", detail: "Confirm each tool's status label and confirm availability for your contract and region with the team." },
        { step_id: "least-privilege", title: "Prepare least-privilege credentials", detail: "Create credentials scoped to the read permissions needed. Never share secrets in support tickets or public forms." },
        { step_id: "test-sync", title: "Run a safe test synchronization", detail: "Follow the Getting Started guide to validate the connection before relying on it." },
      ],
      keywords: ["connect", "setup", "credentials", "first sync"],
    },
    {
      ...common(), id: "onb-approvals-and-write-access", kind: "ONBOARDING",
      topic_id: "onb-approvals-and-write-access",
      title: "Decide on write access and approvals",
      canonical_url: "/how-pricing-works", claim_type: "general", owner: "product",
      summary: "ZoikoShield can run read-only; write-back and dual-party approval are separate choices.",
      body: "Write access is needed only if you choose containment rules. Dual-party approval requires two authorized leads to approve critical containment or role elevation.",
      steps: [
        { step_id: "choose-mode", title: "Choose read-only or write-back", detail: "Decide whether ZoikoShield should only monitor and correlate, or also initiate containment actions." },
        { step_id: "name-approvers", title: "Name your approvers", detail: "If you enable containment, identify who holds approval authority, including out of hours." },
        { step_id: "confirm-scope", title: "Confirm with the team", detail: "Enabling remediation can change commercial scope; confirm during scoping." },
      ],
      keywords: ["write access", "approval", "dual-party", "containment"],
    },
    {
      ...common(), id: "onb-prepare-scoping", kind: "ONBOARDING",
      topic_id: "onb-prepare-scoping",
      title: "Prepare for a pricing conversation",
      canonical_url: "/how-pricing-works", claim_type: "commercial", owner: "commercial",
      summary: "Gather the data an integration architect needs to scope a quote.",
      body: "Quotes are based on validated scope. Having counts and requirements ready shortens scoping.",
      steps: [
        { step_id: "count-assets", title: "Count protected assets", detail: "Gather active EDR sensor counts and active identity profiles, excluding service accounts and locked guests." },
        { step_id: "list-integrations", title: "List integrations", detail: "Note your identity, endpoint and device-management tools, and any custom or SIEM integrations." },
        { step_id: "retention-deployment", title: "Note retention and deployment needs", detail: "Record evidence retention goals, tenant isolation requirements and the support tier you want." },
        { step_id: "submit-scope", title: "Talk to an integration architect", detail: "Submit your scope for validation; pricing is confirmed in a quote." },
      ],
      keywords: ["pricing", "scoping", "quote", "prepare"],
    },
    {
      ...common(), id: "onb-security-review", kind: "ONBOARDING",
      topic_id: "onb-security-review",
      title: "Run a security and privacy review",
      canonical_url: "/trust-center", claim_type: "general", owner: "trust",
      summary: "Use the Trust Center for security practices, privacy, responsible AI and restricted assurance materials.",
      body: "The Trust Center brings together security practices, privacy, responsible AI, data protection and vulnerability disclosure. Restricted artifacts require NDA review.",
      steps: [
        { step_id: "read-public", title: "Read the public materials", detail: "Review Security Practices, Privacy & Data Protection, Responsible AI and the Privacy Notice." },
        { step_id: "request-restricted", title: "Request restricted artifacts", detail: "Use the Trust Center's security review request for NDA-gated materials." },
        { step_id: "privacy-docs", title: "Ask for privacy documents", detail: "The privacy pages describe a DPA and subprocessor information available on request." },
      ],
      keywords: ["security review", "trust center", "due diligence", "nda"],
    },
    {
      ...common(), id: "onb-developer-setup", kind: "ONBOARDING",
      topic_id: "onb-developer-setup",
      title: "Developer setup",
      canonical_url: "/developers-documentation", claim_type: "general", owner: "product",
      summary: "Find the API reference, webhooks catalog and release notes.",
      body: "Developer guidelines and the API reference are public. Write actions require separately configured approval keys.",
      steps: [
        { step_id: "getting-started", title: "Read Getting Started", detail: "Confirm client credentials and read-only permission boundaries." },
        { step_id: "api-webhooks", title: "Explore the API and webhooks", detail: "Use the API Reference and Webhooks Catalog for endpoints, payload schemas and signature verification." },
        { step_id: "release-notes", title: "Follow release notes", detail: "Deprecations and migration steps are published in versioned release notes." },
      ],
      keywords: ["developer", "api", "webhooks", "setup"],
    },
  ],

  // ---------------------------------------------------------------------------
  // Routes and markets
  // ---------------------------------------------------------------------------
  routes: [
    { route_key: "demo", label: "Book a demo", url: "/book-a-demo", market: "global", owner: "web", review_at: REVIEW_AT, status: "PUBLISHED" },
    { route_key: "pricing", label: "How pricing works", url: "/how-pricing-works", market: "global", owner: "commercial", review_at: REVIEW_AT, status: "PUBLISHED" },
    { route_key: "support", label: "Contact support", url: "/contact-support", market: "global", owner: "support", review_at: REVIEW_AT, status: "PUBLISHED" },
    { route_key: "support_center", label: "Support Center", url: "/support-center", market: "global", owner: "support", review_at: REVIEW_AT, status: "PUBLISHED" },
    { route_key: "contact", label: "Contact ZoikoShield", url: "/contact", market: "global", owner: "web", review_at: REVIEW_AT, status: "PUBLISHED" },
    { route_key: "privacy_notice", label: "Privacy Notice", url: "/privacy-notice", market: "global", owner: "trust", review_at: REVIEW_AT, status: "PUBLISHED" },
    { route_key: "privacy_request", label: "Privacy rights request", url: "/privacy-notice", market: "global", owner: "trust", review_at: REVIEW_AT, status: "PUBLISHED" },
    { route_key: "privacy_data_protection", label: "Privacy & Data Protection", url: "/privacy-data-protection", market: "global", owner: "trust", review_at: REVIEW_AT, status: "PUBLISHED" },
    { route_key: "trust_center", label: "Trust Center", url: "/trust-center", market: "global", owner: "trust", review_at: REVIEW_AT, status: "PUBLISHED" },
    { route_key: "security_practices", label: "Security Practices", url: "/security-trust-center", market: "global", owner: "trust", review_at: REVIEW_AT, status: "PUBLISHED" },
    { route_key: "responsible_ai", label: "Responsible AI", url: "/responsible-ai", market: "global", owner: "trust", review_at: REVIEW_AT, status: "PUBLISHED" },
    { route_key: "vulnerability_disclosure", label: "Report a vulnerability", url: "/vulnerability-disclosure", market: "global", owner: "trust", review_at: REVIEW_AT, status: "PUBLISHED" },
    { route_key: "incident", label: "Get incident help now", url: "/contact-support", market: "global", owner: "support", review_at: REVIEW_AT, status: "PUBLISHED" },
    { route_key: "system_status", label: "System Status", url: "/system-status", market: "global", owner: "support", review_at: REVIEW_AT, status: "PUBLISHED" },
    { route_key: "integrations", label: "Integration catalog", url: "/integration-catalog", market: "global", owner: "product", review_at: REVIEW_AT, status: "PUBLISHED" },
    { route_key: "integration_request", label: "Request an integration", url: "/request-an-integration", market: "global", owner: "product", review_at: REVIEW_AT, status: "PUBLISHED" },
    { route_key: "developers", label: "Developer documentation", url: "/developers-documentation", market: "global", owner: "product", review_at: REVIEW_AT, status: "PUBLISHED" },
    { route_key: "sign_in", label: "Sign in", url: "/sign-in", market: "global", owner: "web", review_at: REVIEW_AT, status: "PUBLISHED" },
    { route_key: "compare_paths", label: "Compare starting paths", url: "/compare-starting-paths", market: "global", owner: "solutions", review_at: REVIEW_AT, status: "PUBLISHED" },
    { route_key: "managed_defense", label: "Managed Defense", url: "/managed-defense", market: "global", owner: "solutions", review_at: REVIEW_AT, status: "PUBLISHED" },
    { route_key: "continuous_assurance", label: "Continuous Assurance", url: "/continuous-assurance", market: "global", owner: "solutions", review_at: REVIEW_AT, status: "PUBLISHED" },
  ],

  markets: [
    { id: "global", label: "Global / not sure" },
    { id: "US", label: "United States" },
    { id: "EU", label: "European Union" },
    { id: "UK", label: "United Kingdom" },
  ],
};
