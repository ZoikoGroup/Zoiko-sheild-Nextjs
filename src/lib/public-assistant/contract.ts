// Public Assistant wire contract, shared by the widget and the route handler.
// Keep this file free of server-only imports: it ships to the browser.

export const API_BASE = "/api/public/chat/v1";
export const API_VERSION = "1.0.0";
export const CSRF_HEADER = "x-zs-assistant";
export const SESSION_COOKIE = "zs_pa_sid";

export const COMPOSER_MAX = 2000;
export const COMPOSER_COUNTER_FROM = 1800;
export const HELP_QUERY_MAX = 200;

/** Length in Unicode code points, which is what the 2,000 limit counts. */
export function codePointLength(value: string): number {
  return Array.from(value).length;
}

export const FLAG_KEYS = [
  "assistant_launcher",
  "assistant_ai_answers",
  "assistant_lead_submit",
  "assistant_support_submit",
  "assistant_trust_gated",
  "assistant_public_pricing",
  "assistant_connector_claims",
  "assistant_privacy_write",
  "assistant_kill",
] as const;
export type FlagKey = (typeof FLAG_KEYS)[number];
export type Flags = Record<FlagKey, boolean>;

export type Outcome = "ANSWERED" | "LIMITED" | "ABSTAINED" | "PENDING" | "REJECTED" | "ERROR";

export interface ErrorBody {
  error_code: string;
  user_safe_message: string;
  field_errors?: Record<string, string>;
  retry_after?: number;
  correlation_id: string;
}

export interface Option {
  id: string;
  label: string;
}

export interface RouteLink {
  route_key: string;
  label: string;
  url: string;
}

export interface Citation {
  source_id: string;
  title: string;
  url: string;
  summary: string;
}

export type AnswerBlock = { type: "paragraph"; text: string } | { type: "bullets"; items: string[] };

export interface FollowUp {
  intent_key: string;
  label: string;
}

export interface Answer {
  outcome: Outcome;
  blocks: AnswerBlock[];
  citations: Citation[];
  follow_ups: FollowUp[];
  route?: RouteLink;
}

export type StreamEventType = "acknowledged" | "progress" | "delta" | "final" | "safety_limited" | "error";

export interface StreamEvent {
  seq: number;
  type: StreamEventType;
  epoch: number;
  data: { text?: string; block_index?: number; answer?: Answer; error_code?: string; message?: string };
}

export type StatusState = "enabled" | "degraded" | "disabled";

export interface StatusBody {
  state: StatusState;
  mode: "ai" | "static";
  fallback_links: RouteLink[];
}

export interface ConfigBody {
  display_name: string;
  clearance: "public";
  flags: Flags;
  routes: RouteLink[];
  markets: Option[];
  intake: Record<IntakeKind, boolean>;
  policy_versions: { notice: string | null; answer_policy: string };
}

export type FeedbackTarget = "message" | "flow" | "discovery";
export type FeedbackRating = "helpful" | "not_helpful";
export const FEEDBACK_REASONS: Option[] = [
  { id: "incorrect", label: "Incorrect or outdated" },
  { id: "unclear", label: "Hard to understand" },
  { id: "not_relevant", label: "Didn't answer my question" },
  { id: "missing_source", label: "Needed a source" },
  { id: "other", label: "Something else" },
];

// ---------------------------------------------------------------------------
// Intake (Phase D)

export type IntakeKind = "DEMO" | "SUPPORT" | "QUOTE" | "TRUST_ACCESS" | "TECH_EVAL" | "ONBOARDING" | "PRIVACY";

/** Option lists the server resolves from approved content when it issues a submission key. */
export type OptionSource =
  | "markets"
  | "plans"
  | "asset_bands"
  | "ingestion_bands"
  | "trust_topics"
  | "connector_categories"
  | "environments"
  | "personas"
  | "capabilities"
  | "support_categories"
  | "privacy_request_types";

export interface FieldSpec {
  name: string;
  label: string;
  type: "text" | "email" | "textarea" | "select";
  required: boolean;
  min?: number;
  max: number;
  options_from?: OptionSource;
  /** Free text runs through the server-side secret/PII gate. */
  free_text?: boolean;
  hint?: string;
}

export interface IntakeSpec {
  kind: IntakeKind;
  path: string;
  flag: FlagKey;
  title: string;
  intro: string;
  reference_prefix: string;
  fields: FieldSpec[];
  /** What the receipt means; never "booked" or "ticket created". */
  receipt_note: string;
}

const email: FieldSpec = { name: "work_email", label: "Work email", type: "email", required: true, max: 254 };
const name = (required: boolean): FieldSpec => ({ name: "contact_name", label: "Your name", type: "text", required, min: 1, max: 120 });
const org = (required: boolean): FieldSpec => ({ name: "organization", label: "Organization", type: "text", required, min: 1, max: 160 });
const market: FieldSpec = { name: "market", label: "Market", type: "select", required: true, max: 40, options_from: "markets" };
const notes = (max: number, label = "Anything we should know?", required = false): FieldSpec => ({
  name: "message",
  label,
  type: "textarea",
  required,
  max,
  free_text: true,
  hint: "Please don't include passwords, keys, or personal data about others.",
});

export const INTAKE: Record<IntakeKind, IntakeSpec> = {
  DEMO: {
    kind: "DEMO",
    path: "demo-requests",
    flag: "assistant_lead_submit",
    title: "Request a demo",
    intro: "Tell us a little about your team and a specialist will follow up to arrange a time.",
    reference_prefix: "DEMO",
    fields: [email, name(true), org(true), market, { name: "interest", label: "Main interest", type: "select", required: false, max: 80, options_from: "capabilities" }, notes(500)],
    receipt_note: "Your request has been received. Our team will contact you to arrange a time; nothing is scheduled yet.",
  },
  SUPPORT: {
    kind: "SUPPORT",
    path: "support/requests",
    flag: "assistant_support_submit",
    title: "Contact support",
    intro: "Describe what you need help with. For an active security incident, use the incident route instead.",
    reference_prefix: "SUP",
    fields: [email, name(false), org(false), { name: "category", label: "Topic", type: "select", required: true, max: 40, options_from: "support_categories" }, notes(500, "What do you need help with?", true)],
    receipt_note: "Your request has been received and queued for our support team. Keep the reference for follow-up.",
  },
  QUOTE: {
    kind: "QUOTE",
    path: "commercial/inquiries",
    flag: "assistant_lead_submit",
    title: "Request a quote",
    intro: "Share your rough size and our commercial team will prepare pricing. We never quote prices in chat.",
    reference_prefix: "QUO",
    fields: [
      email,
      name(true),
      org(true),
      market,
      { name: "plan_id", label: "Plan of interest", type: "select", required: false, max: 80, options_from: "plans" },
      { name: "asset_band", label: "Approximate assets", type: "select", required: false, max: 40, options_from: "asset_bands" },
      { name: "ingestion_band", label: "Approximate data volume", type: "select", required: false, max: 40, options_from: "ingestion_bands" },
      notes(240),
    ],
    receipt_note: "Your inquiry has been received. A commercial specialist will follow up; no price or plan is committed until then.",
  },
  TRUST_ACCESS: {
    kind: "TRUST_ACCESS",
    path: "trust/access-requests",
    flag: "assistant_trust_gated",
    title: "Request trust documentation",
    intro: "Some security material is shared only after review. A person checks every request.",
    reference_prefix: "TRU",
    fields: [email, name(true), org(true), { name: "topic_id", label: "Topic", type: "select", required: true, max: 80, options_from: "trust_topics" }, notes(240, "Purpose of the request", true)],
    receipt_note: "Your request has been received for human review. Access is not granted until the review is complete.",
  },
  TECH_EVAL: {
    kind: "TECH_EVAL",
    path: "technical-reviews",
    flag: "assistant_lead_submit",
    title: "Request a technical evaluation",
    intro: "Tell us about your environment and a solutions engineer will confirm fit and connector support.",
    reference_prefix: "TEC",
    fields: [
      email,
      name(true),
      org(true),
      market,
      { name: "category", label: "Integration area", type: "select", required: false, max: 80, options_from: "connector_categories" },
      { name: "environment", label: "Main environment", type: "select", required: false, max: 80, options_from: "environments" },
      notes(240),
    ],
    receipt_note: "Your evaluation request has been received. Connector support is confirmed by a solutions engineer, not by this receipt.",
  },
  ONBOARDING: {
    kind: "ONBOARDING",
    path: "onboarding/requests",
    flag: "assistant_lead_submit",
    title: "Talk to onboarding",
    intro: "Ask our onboarding team to walk you through your checklist.",
    reference_prefix: "ONB",
    fields: [email, name(true), org(true), { name: "persona", label: "Your role", type: "select", required: false, max: 80, options_from: "personas" }, notes(500)],
    receipt_note: "Your request has been received. The onboarding team will contact you.",
  },
  PRIVACY: {
    kind: "PRIVACY",
    path: "privacy/requests",
    flag: "assistant_privacy_write",
    title: "Privacy request",
    intro: "Submit a request about your personal data. We will verify your identity before acting on it.",
    reference_prefix: "PRI",
    fields: [email, name(true), { name: "request_type", label: "Request type", type: "select", required: true, max: 40, options_from: "privacy_request_types" }, notes(500)],
    receipt_note: "Your request is pending identity confirmation. We will email you to confirm before processing.",
  },
};

export const INTAKE_KINDS = Object.keys(INTAKE) as IntakeKind[];

export interface ResolvedForm {
  kind: IntakeKind;
  fields: (FieldSpec & { options?: Option[] })[];
}

export interface SubmissionKeyBody {
  idempotency_key: string;
  expires_at: string;
  notice_version: string;
  notice_url: string;
  form: ResolvedForm;
}

export interface Receipt {
  status: "ACCEPTED" | "PENDING_CONFIRMATION";
  public_reference: string;
  submission_id: string;
}

const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]{2,}$/;

/**
 * Field-level validation shared by client and server. The server re-runs it with
 * resolved options, so a value the client invents is rejected there.
 */
export function validateFields(
  fields: (FieldSpec & { options?: Option[] })[],
  values: Record<string, unknown>,
): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const field of fields) {
    const raw = values[field.name];
    const value = typeof raw === "string" ? raw.trim() : "";
    if (raw !== undefined && typeof raw !== "string") {
      errors[field.name] = `${field.label} is invalid.`;
      continue;
    }
    if (!value) {
      if (field.required) errors[field.name] = `${field.label} is required.`;
      continue;
    }
    const length = codePointLength(value);
    if (length > field.max) errors[field.name] = `${field.label} must be ${field.max} characters or fewer.`;
    else if (field.min && length < field.min) errors[field.name] = `${field.label} is too short.`;
    else if (field.type === "email" && !EMAIL_RE.test(value)) errors[field.name] = "Enter a valid work email address.";
    else if (field.type === "select" && field.options && !field.options.some((o) => o.id === value)) {
      errors[field.name] = `Choose a ${field.label.toLowerCase()} from the list.`;
    }
  }
  return errors;
}
