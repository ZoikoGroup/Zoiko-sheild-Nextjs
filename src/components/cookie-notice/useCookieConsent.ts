"use client";

import { useCallback, useEffect, useState } from "react";

export type ConsentChoices = {
  analytics: boolean;
  support: boolean;
};

export type StoredConsent = ConsentChoices & {
  version: string;
  updatedAt: string;
};

const STORAGE_KEY = "zs-cookie-consent";
const CHANGE_EVENT = "zs-cookie-consent-change";
export const POLICY_VERSION = "v2.4";

export const DEFAULT_CHOICES: ConsentChoices = { analytics: false, support: false };

function readConsent(): StoredConsent | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredConsent>;
    if (typeof parsed.analytics !== "boolean" || typeof parsed.support !== "boolean") return null;
    return parsed as StoredConsent;
  } catch {
    return null;
  }
}

/**
 * Shared consent state for the Cookie Notice page. The banner preview and the
 * preference center both read and write through this hook, and stay in sync via
 * a window event. Persistence is best-effort (localStorage may be unavailable).
 */
export function useCookieConsent() {
  const [consent, setConsent] = useState<StoredConsent | null>(null);

  useEffect(() => {
    setConsent(readConsent());
    const sync = () => setConsent(readConsent());
    window.addEventListener(CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const save = useCallback((choices: ConsentChoices) => {
    const next: StoredConsent = {
      ...choices,
      version: POLICY_VERSION,
      updatedAt: new Date().toISOString(),
    };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Storage blocked — keep the in-memory state so the UI still responds.
    }
    setConsent(next);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  return { consent, save };
}

export function describeConsent(c: StoredConsent | null): string {
  if (!c) return "No choice recorded yet";
  if (c.analytics && c.support) return "Accepted all optional";
  if (!c.analytics && !c.support) return "Essential only";
  return "Granular choice saved";
}
