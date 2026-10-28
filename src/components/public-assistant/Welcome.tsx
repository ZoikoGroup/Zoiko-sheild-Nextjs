"use client";

import { ChevronRight, Lock } from "lucide-react";
import { useAssistant } from "./state/AssistantContext";
import type { View } from "./state/machine";
import { copy } from "./copy/en-US";

export function useOpenJourney() {
  const { navigate } = useAssistant();
  return (key: string) => {
    if (key === "demo") navigate({ name: "intake", kind: "DEMO" });
    else navigate({ name: key } as View);
  };
}

export function Welcome() {
  const { route } = useAssistant();
  const open = useOpenJourney();
  const privacy = route("privacy_notice");
  const human = route("contact");

  return (
    <div className="space-y-5 p-4">
      <div>
        <p className="text-lg font-semibold">{copy.welcome.title}</p>
        <p className="mt-1 text-sm text-zoiko-dark/70 dark:text-gray-300">{copy.welcome.body}</p>
      </div>

      <ul className="grid grid-cols-2 gap-2">
        {copy.quickActions.map((a) => (
          <li key={a.view}>
            <button
              type="button"
              onClick={() => open(a.view)}
              className="flex h-full w-full flex-col items-start rounded-xl border border-zoiko-border dark:border-white/10 bg-zoiko-beige/60 dark:bg-white/5 p-3 text-left transition hover:border-zoiko-primary/40 hover:bg-zoiko-beige dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-zoiko-primary"
            >
              <span className="text-sm font-semibold">{a.label}</span>
              <span className="mt-0.5 text-xs text-zoiko-dark/60 dark:text-gray-400">{a.description}</span>
            </button>
          </li>
        ))}
      </ul>

      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-zoiko-dark/50 dark:text-gray-400">{copy.welcome.more}</p>
        <ul className="divide-y divide-zoiko-border dark:divide-white/10 rounded-xl border border-zoiko-border dark:border-white/10">
          {copy.moreTopics.map((t) => (
            <li key={t.view}>
              <button type="button" onClick={() => open(t.view)} className="flex w-full items-center justify-between px-3 py-2.5 text-sm hover:bg-zoiko-beige/60 dark:hover:bg-white/10 focus:outline-none focus-visible:bg-zoiko-beige dark:focus-visible:bg-white/10">
                {t.label}
                <ChevronRight className="h-4 w-4 text-zoiko-dark/40 dark:text-gray-500" aria-hidden />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-2 rounded-xl bg-zoiko-beige/70 dark:bg-white/5 p-3 text-xs text-zoiko-dark/70 dark:text-gray-300">
        <Lock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
        <p>
          {copy.welcome.safety}{" "}
          {privacy && (
            <a href={privacy.url} className="font-medium text-zoiko-primary dark:text-[#ff8a8d] underline">
              {copy.welcome.privacy}
            </a>
          )}
          {human && (
            <>
              {" · "}
              <a href={human.url} className="font-medium text-zoiko-primary dark:text-[#ff8a8d] underline">
                {copy.welcome.human}
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
