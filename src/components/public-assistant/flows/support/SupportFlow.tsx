"use client";

import { useState } from "react";
import { AlertTriangle, ChevronRight } from "lucide-react";
import { useAssistant } from "../../state/AssistantContext";
import { Button, FlowHeading, RouteButton } from "../../shared/ui";

type Choice = "incident" | "account" | "question" | "status";

const CHOICES: { id: Choice; label: string }[] = [
  { id: "incident", label: "We have an active security incident" },
  { id: "account", label: "I need help with my account or the product" },
  { id: "question", label: "I have a general question" },
  { id: "status", label: "I want to check service status" },
];

/** WF04 route chooser. The incident route never collects intake: it sends people to a human channel now. */
export function SupportFlow() {
  const { route, navigate, config } = useAssistant();
  const [choice, setChoice] = useState<Choice | null>(null);
  const incident = route("incident") ?? route("contact");
  const support = route("support");
  const status = route("system_status");

  return (
    <div className="space-y-4 p-4">
      <FlowHeading title="Get support" intro="Tell us what's going on and we'll point you to the fastest route." />
      <ul className="divide-y divide-zoiko-border dark:divide-white/10 rounded-xl border border-zoiko-border dark:border-white/10">
        {CHOICES.map((c) => (
          <li key={c.id}>
            <button
              type="button"
              aria-pressed={choice === c.id}
              onClick={() => setChoice(c.id)}
              className="flex w-full items-center justify-between px-3 py-2.5 text-left text-sm hover:bg-zoiko-beige/60 dark:hover:bg-white/10 aria-pressed:bg-zoiko-beige dark:aria-pressed:bg-white/10 aria-pressed:font-medium focus:outline-none focus-visible:bg-zoiko-beige dark:focus-visible:bg-white/10"
            >
              {c.label}
              <ChevronRight className="h-4 w-4 text-zoiko-dark/30 dark:text-gray-500" aria-hidden />
            </button>
          </li>
        ))}
      </ul>

      <div aria-live="polite">
        {choice === "incident" && (
          <div className="space-y-2 rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/40 p-3 text-sm text-red-900 dark:text-red-200">
            <p className="flex items-center gap-2 font-semibold">
              <AlertTriangle className="h-4 w-4" aria-hidden />
              Contact our team directly now
            </p>
            <p>Don't wait on chat for an active incident. Existing customers should use their support console; everyone else, use the contact route below.</p>
            {incident && <RouteButton link={incident} />}
          </div>
        )}
        {choice === "account" && (
          <div className="space-y-2 text-sm">
            <p>Our support team can help. This chat can't see or change your account.</p>
            <div className="flex flex-wrap gap-2">
              {config?.intake.SUPPORT && <Button onClick={() => navigate({ name: "intake", kind: "SUPPORT" })}>Send a support request</Button>}
              {support && <RouteButton link={support} />}
            </div>
          </div>
        )}
        {choice === "question" && (
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" onClick={() => navigate({ name: "help" })}>
              Browse help topics
            </Button>
            {config?.intake.SUPPORT && <Button onClick={() => navigate({ name: "intake", kind: "SUPPORT" })}>Ask our team</Button>}
            {!config?.intake.SUPPORT && route("contact") && <RouteButton link={route("contact")!} />}
          </div>
        )}
        {choice === "status" && status && <RouteButton link={status} />}
      </div>
    </div>
  );
}
