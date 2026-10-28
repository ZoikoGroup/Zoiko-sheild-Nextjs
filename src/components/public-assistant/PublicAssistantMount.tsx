"use client";

import React from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const Launcher = dynamic(() => import("./Launcher").then((m) => m.Launcher), { ssr: false });

// Public marketing routes only (plan D2). The demo console under /dashboard
// and anything not listed here never gets the launcher.
const EXACT = new Set(["/"]);
const PREFIXES = [
  "/support-center",
  "/contact-support",
  "/contact",
  "/trust-center",
  "/security-trust-center",
  "/privacy-data-protection",
  "/responsible-ai",
  "/how-pricing-works",
  "/compare-starting-paths",
  "/platform-overview",
  "/how-zoikoshield-works",
  "/integration-catalog",
  "/integrations",
  "/cloud-platform-integrations",
  "/endpoint-identity-integrations",
  "/microsoft-ecosystem",
  "/developers-documentation",
  "/sign-in",
];

export function isAssistantRoute(pathname: string): boolean {
  return EXACT.has(pathname) || PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export function PublicAssistantMount() {
  const pathname = usePathname();
  if (!pathname || !isAssistantRoute(pathname)) return null;
  return <Launcher />;
}
