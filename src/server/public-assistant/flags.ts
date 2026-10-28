import { FLAG_KEYS, type FlagKey, type Flags } from "@/lib/public-assistant/contract";

// Defaults from plan D8. Override per flag with PUBLIC_ASSISTANT_FLAG_<KEY>=on|off,
// or several at once with PUBLIC_ASSISTANT_FLAGS=key=on,key=off.
const DEFAULTS: Flags = {
  assistant_launcher: true,
  assistant_ai_answers: false,
  assistant_lead_submit: false,
  assistant_support_submit: false,
  assistant_trust_gated: false,
  assistant_public_pricing: false,
  assistant_connector_claims: false,
  assistant_privacy_write: false,
  assistant_kill: false,
};

const overrides = new Map<FlagKey, boolean>();

function parse(raw: string | undefined): boolean | undefined {
  const v = raw?.trim().toLowerCase();
  if (v === "on" || v === "true" || v === "1") return true;
  if (v === "off" || v === "false" || v === "0") return false;
  return undefined;
}

/** PUBLIC_ASSISTANT_FLAGS="assistant_launcher=on,assistant_ai_answers=on" */
function fromList(key: FlagKey): boolean | undefined {
  for (const pair of (process.env.PUBLIC_ASSISTANT_FLAGS || "").split(",")) {
    const [name, value] = pair.split("=");
    if (name?.trim() === key) return parse(value);
  }
  return undefined;
}

/** A per-flag variable wins over the PUBLIC_ASSISTANT_FLAGS list. */
function fromEnv(key: FlagKey): boolean | undefined {
  return parse(process.env[`PUBLIC_ASSISTANT_FLAG_${key.toUpperCase()}`]) ?? fromList(key);
}

export function getFlags(): Flags {
  const flags = {} as Flags;
  for (const key of FLAG_KEYS) flags[key] = overrides.get(key) ?? fromEnv(key) ?? DEFAULTS[key];
  // The kill switch forces static mode: no AI, no writes. Static help keeps working.
  if (flags.assistant_kill) {
    for (const key of FLAG_KEYS) if (key !== "assistant_launcher" && key !== "assistant_kill") flags[key] = false;
  }
  return flags;
}

export function isOn(key: FlagKey): boolean {
  return getFlags()[key];
}

/** Test hook. */
export function setFlagOverride(key: FlagKey, value: boolean | undefined) {
  if (value === undefined) overrides.delete(key);
  else overrides.set(key, value);
}
