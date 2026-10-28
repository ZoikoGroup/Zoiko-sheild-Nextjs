// Secret and PII detection for anything a visitor types (WF12). Detection runs
// on normalized text so homoglyph/zero-width tricks don't slip past.

export function normalize(text: string): string {
  return text
    .normalize("NFKC")
    .replace(/[\u200B-\u200D\u2060\uFEFF\u00AD]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const SECRET_PATTERNS: [string, RegExp][] = [
  ["private_key", /-----BEGIN (?:[A-Z]+ )?PRIVATE KEY-----/],
  ["aws_access_key", /\b(?:AKIA|ASIA)[0-9A-Z]{16}\b/],
  ["github_token", /\bgh[pousr]_[A-Za-z0-9]{30,}\b/],
  ["slack_token", /\bxox[abprs]-[A-Za-z0-9-]{10,}\b/],
  ["google_api_key", /\bAIza[0-9A-Za-z_-]{35}\b/],
  ["stripe_key", /\b[sr]k_(?:live|test)_[0-9A-Za-z]{16,}\b/],
  ["jwt", /\beyJ[A-Za-z0-9_-]{8,}\.eyJ[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\b/],
  ["bearer_token", /\bbearer\s+[A-Za-z0-9._~+/-]{20,}=*/i],
  ["credential_url", /\b[a-z][a-z0-9+.-]*:\/\/[^\s:/@]+:[^\s@/]+@/i],
  ["password_assignment", /\b(?:password|passwd|pwd|passphrase)\s*(?:[:=]|is)\s*\S{4,}/i],
  ["key_assignment", /\b(?:api[ _-]?key|secret[ _-]?key|client[ _-]?secret|access[ _-]?token|auth[ _-]?token)\s*(?:[:=]|is)\s*\S{8,}/i],
];

const PII_PATTERNS: [string, RegExp][] = [
  ["email", /\b[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[a-z]{2,}\b/gi],
  ["us_ssn", /\b\d{3}-\d{2}-\d{4}\b/g],
  ["iban", /\b[A-Z]{2}\d{2}(?: ?[A-Z0-9]{4}){3,7}\b/g],
  ["phone", /(?<!\w)\+?\d[\d ().-]{8,}\d(?!\w)/g],
];

function luhn(digits: string): boolean {
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    let d = Number(digits[digits.length - 1 - i]);
    if (i % 2 === 1) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    sum += d;
  }
  return sum % 10 === 0;
}

function hasCardNumber(text: string): boolean {
  for (const match of text.match(/\b(?:\d[ -]?){13,19}\b/g) || []) {
    const digits = match.replace(/\D/g, "");
    if (digits.length >= 13 && digits.length <= 19 && luhn(digits)) return true;
  }
  return false;
}

function honeytokens(): string[] {
  return (process.env.PUBLIC_ASSISTANT_HONEYTOKENS || "").split(",").map((t) => t.trim()).filter((t) => t.length >= 8);
}

/** Kinds of secret found; empty when clean. Never returns the matched text. */
export function detectSecrets(text: string): string[] {
  const n = normalize(text);
  const found = SECRET_PATTERNS.filter(([, re]) => re.test(n)).map(([kind]) => kind);
  if (hasCardNumber(n)) found.push("payment_card");
  if (honeytokens().some((t) => n.includes(t))) found.push("honeytoken");
  return found;
}

/** Replace secrets and PII with typed placeholders, e.g. for the support summary. */
export function redact(text: string): string {
  let out = normalize(text);
  for (const [kind, re] of SECRET_PATTERNS) out = out.replace(new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g"), `[redacted ${kind.replace(/_/g, " ")}]`);
  out = out.replace(/\b(?:\d[ -]?){13,19}\b/g, (m) => (luhn(m.replace(/\D/g, "")) ? "[redacted payment card]" : m));
  for (const [kind, re] of PII_PATTERNS) out = out.replace(re, `[redacted ${kind.replace(/_/g, " ")}]`);
  return out;
}
