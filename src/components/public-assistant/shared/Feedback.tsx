"use client";

import { useState } from "react";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { FEEDBACK_REASONS, type FeedbackRating, type FeedbackTarget } from "@/lib/public-assistant/contract";
import { postWithSession } from "../api/client";
import { copy } from "../copy/en-US";

/** Unified feedback: rating plus an optional reason code. No free text in v1. */
export function Feedback({ targetType, targetId }: { targetType: FeedbackTarget; targetId: string }) {
  const [rating, setRating] = useState<FeedbackRating | null>(null);
  const [phase, setPhase] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [last, setLast] = useState<{ r: FeedbackRating; reason?: string } | null>(null);

  // "Thanks" only once the server has it; a failure says so and offers a retry (WF11 AT270).
  const send = (r: FeedbackRating, reason?: string) => {
    setRating(r);
    setLast({ r, reason });
    setPhase("sending");
    postWithSession("feedback", { target_type: targetType, target_id: targetId, rating: r, reason_code: reason }).then(
      () => setPhase("done"),
      () => setPhase("error"),
    );
  };

  if (phase === "done") return <p className="text-xs text-zoiko-dark/60 dark:text-gray-400" role="status">{copy.thread.thanks}</p>;
  if (phase === "sending") return <p className="text-xs text-zoiko-dark/60 dark:text-gray-400" role="status">{copy.thread.feedbackSending}</p>;
  if (phase === "error") {
    return (
      <p className="text-xs text-red-700 dark:text-red-300" role="alert">
        {copy.thread.feedbackFailed}{" "}
        <button type="button" onClick={() => last && send(last.r, last.reason)} className="font-medium underline">
          {copy.thread.feedbackRetry}
        </button>
      </p>
    );
  }

  if (rating === "not_helpful") {
    return (
      <fieldset className="text-xs">
        <legend className="mb-1 text-zoiko-dark/70 dark:text-gray-300">{copy.thread.whyNot}</legend>
        <div className="flex flex-wrap gap-1.5">
          {FEEDBACK_REASONS.map((r) => (
            <button key={r.id} type="button" onClick={() => send("not_helpful", r.id)} className="rounded-full border border-zoiko-border dark:border-white/10 px-2.5 py-1 hover:bg-zoiko-beige dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-zoiko-primary">
              {r.label}
            </button>
          ))}
        </div>
      </fieldset>
    );
  }

  const btn = "rounded-md p-1.5 text-zoiko-dark/50 dark:text-gray-400 hover:bg-zoiko-beige dark:hover:bg-white/10 hover:text-zoiko-dark dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-zoiko-primary";
  return (
    <div className="flex items-center gap-1">
      <button type="button" className={btn} onClick={() => send("helpful")} aria-label={copy.thread.helpful}>
        <ThumbsUp className="h-4 w-4" aria-hidden />
      </button>
      <button type="button" className={btn} onClick={() => setRating("not_helpful")} aria-label={copy.thread.notHelpful}>
        <ThumbsDown className="h-4 w-4" aria-hidden />
      </button>
    </div>
  );
}
