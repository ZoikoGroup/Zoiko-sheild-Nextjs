// Content-as-code schema (plan D5). Every item that can be cited or shown carries
// governance metadata; the eligibility filter reads only these fields.

export type SourceStatus = "DRAFT" | "REVIEW" | "PUBLISHED" | "WITHDRAWN" | "EXPIRED";
export type Classification = "PUBLIC" | "RESTRICTED" | "TENANT" | "INTERNAL";
export type SourceKind =
  | "HELP_ARTICLE"
  | "GUIDE"
  | "TRUST_CLAIM"
  | "PLAN"
  | "CONNECTOR"
  | "CAPABILITY"
  | "ONBOARDING"
  | "PAGE";
/** Restricted claim classes need a matching source of the same class before an answer may assert them. */
export type ClaimType = "general" | "commercial" | "certification" | "security" | "connector" | "privacy";

export interface SourceMeta {
  id: string;
  kind: SourceKind;
  title: string;
  /** Site-relative path ("/trust-center") that the citation links to. */
  canonical_url: string;
  status: SourceStatus;
  classification: Classification;
  claim_type: ClaimType;
  /** "global" matches every market. */
  market: string[];
  locale: string[];
  owner: string;
  reviewer: string;
  revision: number;
  effective_from: string;
  expires_at?: string;
  review_at?: string;
  withdrawn_at?: string;
  /** One or two sentences, shown on citation cards and search results. */
  summary: string;
  /** Plain text. Blank lines separate paragraphs; lines starting with "- " are bullets. */
  body: string;
  keywords?: string[];
}

export interface HelpTopic {
  topic_id: string;
  label: string;
  description: string;
}

export interface HelpArticle extends SourceMeta {
  kind: "HELP_ARTICLE";
  topic_id: string;
}

export interface GuideChoice {
  choice_id: string;
  label: string;
  /** Next step in the same guide. Omit together with route_key for a terminal choice. */
  next?: string;
  /** Route registry key to offer as the outcome. */
  route_key?: string;
}

export interface GuideStep {
  step_id: string;
  prompt: string;
  body?: string;
  choices: GuideChoice[];
}

export interface Guide extends SourceMeta {
  kind: "GUIDE";
  topic_id: string;
  start_step: string;
  steps: GuideStep[];
}

export type ClaimPolicy = "ALLOW" | "QUALIFY" | "ABSTAIN";

export interface TrustTopic {
  topic_id: string;
  title: string;
  summary: string;
}

export interface TrustClaim extends SourceMeta {
  kind: "TRUST_CLAIM";
  topic_id: string;
  statement: string;
  policy: ClaimPolicy;
  /** Required when policy is QUALIFY. */
  qualifier?: string;
  /** True when more detail exists only as restricted material (access request, human review). */
  restricted_material_available?: boolean;
}

export type FeatureValue = "included" | "not_included" | "add_on" | "not_verified";

export interface FeatureDef {
  feature_key: string;
  label: string;
}

export interface Plan extends SourceMeta {
  kind: "PLAN";
  plan_id: string;
  name: string;
  tagline: string;
  audience: string;
  price: { decision: "quote_required" | "published"; display?: string };
  features: { feature_key: string; value: FeatureValue; note?: string }[];
}

export interface Band {
  band_id: string;
  label: string;
}

export interface FitRule {
  asset_band?: string;
  ingestion_band?: string;
  guidance: string;
  plan_ids: string[];
}

export interface Capability extends SourceMeta {
  kind: "CAPABILITY";
  capability_id: string;
  name: string;
  priorities: string[];
  roles: string[];
  environments: string[];
}

export interface Option {
  id: string;
  label: string;
}

export interface DiscoveryRule {
  priority: string;
  role?: string;
  environment?: string;
  /** Ordered; the matcher returns at most three. */
  capability_ids: string[];
}

export type AvailabilityStatus = "AVAILABLE" | "BETA" | "PLANNED";

export interface Connector extends SourceMeta {
  kind: "CONNECTOR";
  connector_id: string;
  name: string;
  category: string;
  availability: { market: string; status: AvailabilityStatus; verified_at: string }[];
  deployment_topics: string[];
}

export interface OnboardingQuestion {
  question_id: string;
  prompt: string;
  personas: string[];
  options: { option_id: string; label: string; topic_ids: string[] }[];
}

export interface OnboardingTopic extends SourceMeta {
  kind: "ONBOARDING";
  topic_id: string;
  steps: { step_id: string; title: string; detail: string }[];
}

export interface RouteEntry {
  route_key: string;
  label: string;
  /** Site-relative path or an approved https URL. */
  url: string;
  market: string;
  owner: string;
  review_at: string;
  status: SourceStatus;
}

export interface Corpus {
  help_topics: HelpTopic[];
  help_articles: HelpArticle[];
  guides: Guide[];
  trust_topics: TrustTopic[];
  trust_claims: TrustClaim[];
  feature_defs: FeatureDef[];
  plans: Plan[];
  asset_bands: Band[];
  ingestion_bands: Band[];
  fit_rules: FitRule[];
  discovery: {
    ruleset_version: string;
    disclaimer: string;
    priorities: Option[];
    roles: Option[];
    environments: Option[];
    rules: DiscoveryRule[];
  };
  capabilities: Capability[];
  connector_categories: Option[];
  connectors: Connector[];
  personas: Option[];
  onboarding_questions: OnboardingQuestion[];
  onboarding_topics: OnboardingTopic[];
  routes: RouteEntry[];
  markets: Option[];
}
