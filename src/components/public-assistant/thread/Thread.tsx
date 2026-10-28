"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { ArrowDown, FileText, RotateCcw, Square, Volume2, VolumeX } from "lucide-react";
import { useAssistant } from "../state/AssistantContext";
import type { AssistantTurn as Turn } from "../state/machine";
import { Blocks, RouteButton } from "../shared/ui";
import { Feedback } from "../shared/Feedback";
import { ShieldMark } from "../shared/ShieldMark";
import { answerToSpeech, useSpeaker } from "../shared/speech";
import { useOpenJourney } from "../Welcome";
import { copy } from "../copy/en-US";

export function Thread({ scrollRoot }: { scrollRoot: RefObject<HTMLDivElement | null> }) {
  const { state } = useAssistant();
  const [pinned, setPinned] = useState(true);
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = scrollRoot.current;
    if (!root) return;
    const onScroll = () => setPinned(root.scrollHeight - root.scrollTop - root.clientHeight < 80);
    root.addEventListener("scroll", onScroll);
    return () => root.removeEventListener("scroll", onScroll);
  }, [scrollRoot]);

  useEffect(() => {
    if (pinned) end.current?.scrollIntoView({ block: "end" });
  }, [state.thread, pinned]);

  return (
    <div className="relative p-4">
      <div role="log" aria-live="polite" aria-relevant="additions" aria-label="Conversation" className="space-y-4">
        {state.thread.map((t) =>
          t.role === "user" ? (
            <div key={t.id} className="flex justify-end">
              <p className="max-w-[85%] whitespace-pre-wrap break-words rounded-2xl rounded-br-sm bg-zoiko-dark dark:bg-[#1b2b39] px-3.5 py-2 text-sm text-white">
                <span className="sr-only">{copy.thread.you}: </span>
                {t.text}
              </p>
            </div>
          ) : (
            <AssistantTurn key={t.id} turn={t} />
          ),
        )}
      </div>
      <div ref={end} />
      {!pinned && (
        <button
          type="button"
          onClick={() => end.current?.scrollIntoView({ behavior: "smooth", block: "end" })}
          className="sticky bottom-2 left-full mt-2 flex items-center gap-1 rounded-full bg-zoiko-dark dark:bg-[#1b2b39] px-3 py-1.5 text-xs text-white shadow-md"
        >
          <ArrowDown className="h-3.5 w-3.5" aria-hidden />
          {copy.thread.jump}
        </button>
      )}
    </div>
  );
}

function AssistantTurn({ turn }: { turn: Turn }) {
  const { stop, retry, submit } = useAssistant();
  const openJourney = useOpenJourney();
  const busy = turn.status === "pending" || turn.status === "streaming";
  const answer = turn.answer;

  return (
    <div className="max-w-[92%] space-y-2">
      <span className="sr-only">{copy.thread.assistant}: </span>
      {busy && (
        <div className="rounded-2xl rounded-bl-sm bg-zoiko-beige/80 dark:bg-white/5 px-3.5 py-2.5">
          {turn.draft.length ? (
            <div className="space-y-2 text-sm leading-relaxed">
              {turn.draft.map((d, i) => (
                <p key={i} className="whitespace-pre-wrap">{d}</p>
              ))}
            </div>
          ) : (
            <Searching text={turn.progress ?? copy.thread.thinking} />
          )}
          <button type="button" onClick={() => stop(turn.id)} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-zoiko-dark/70 dark:text-gray-300 hover:text-zoiko-dark dark:hover:text-white">
            <Square className="h-3 w-3" aria-hidden />
            {copy.thread.stop}
          </button>
        </div>
      )}

      {!busy && answer && answer.blocks.length > 0 && (
        <div className="rounded-2xl rounded-bl-sm bg-zoiko-beige/80 dark:bg-white/5 px-3.5 py-2.5">
          <Blocks blocks={answer.blocks} />
          {answer.outcome === "LIMITED" && answer.citations.length > 0 && <p className="mt-2 text-xs text-amber-800 dark:text-amber-300">{copy.thread.limited}</p>}
        </div>
      )}

      {!busy && (turn.status === "error" || turn.status === "stopped") && (
        <div className="rounded-2xl rounded-bl-sm border border-zoiko-border dark:border-white/10 px-3.5 py-2.5 text-sm">
          <p className="text-zoiko-dark/80 dark:text-gray-200">{turn.status === "stopped" ? copy.thread.stopped : turn.error}</p>
          <button type="button" onClick={() => retry(turn.id)} className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-zoiko-primary dark:text-[#ff8a8d]">
            <RotateCcw className="h-3 w-3" aria-hidden />
            {copy.thread.retry}
          </button>
        </div>
      )}

      {answer && answer.citations.length > 0 && (
        <div>
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-zoiko-dark/50 dark:text-gray-400">{copy.thread.sources}</p>
          <ul className="space-y-1.5">
            {answer.citations.map((c) => (
              <li key={c.source_id}>
                <a href={c.url} className="flex gap-2 rounded-lg border border-zoiko-border dark:border-white/10 bg-white dark:bg-[#111d28] p-2 text-xs hover:border-zoiko-primary/40">
                  <FileText className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zoiko-primary dark:text-[#ff8a8d]" aria-hidden />
                  <span>
                    <span className="block font-medium text-zoiko-dark dark:text-gray-100">{c.title}</span>
                    <span className="line-clamp-2 text-zoiko-dark/60 dark:text-gray-400">{c.summary}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {answer?.route && <RouteButton link={answer.route} />}

      {answer && answer.follow_ups.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {answer.follow_ups.map((f) => (
            <button
              key={f.intent_key}
              type="button"
              onClick={() => (f.intent_key.startsWith("ask:") ? submit(f.label) : openJourney(f.intent_key.replace(/^flow:/, "")))}
              className="rounded-full border border-zoiko-primary/30 dark:border-[#ff8a8d]/40 px-3 py-1 text-xs font-medium text-zoiko-primary dark:text-[#ff8a8d] hover:bg-zoiko-primary/5 dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-zoiko-primary"
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      {turn.status === "done" && answer && answer.blocks.length > 0 && (
        <div className="flex flex-wrap items-center gap-1">
          <SpeakButton id={turn.id} text={answerToSpeech(answer)} />
          {turn.messageId && answer.citations.length > 0 && <Feedback targetType="message" targetId={turn.messageId} />}
        </div>
      )}
    </div>
  );
}

function SpeakButton({ id, text }: { id: string; text: string }) {
  const speaker = useSpeaker();
  if (!speaker.supported) return null;
  const speaking = speaker.speakingId === id;
  return (
    <button
      type="button"
      onClick={() => (speaking ? speaker.stop() : speaker.speak(id, text))}
      aria-label={speaking ? copy.thread.stopSpeaking : copy.thread.speak}
      aria-pressed={speaking}
      title={speaking ? copy.thread.stopSpeaking : copy.thread.speak}
      className={`rounded-md p-1.5 hover:bg-zoiko-beige dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-zoiko-primary ${speaking ? "text-zoiko-primary dark:text-[#ff8a8d]" : "text-zoiko-dark/50 dark:text-gray-400 hover:text-zoiko-dark dark:hover:text-white"}`}
    >
      {speaking ? <VolumeX className="h-4 w-4" aria-hidden /> : <Volume2 className="h-4 w-4" aria-hidden />}
    </button>
  );
}

/** Shown while an answer is prepared: a beam sweeps over the shield and the status text shimmers. */
function Searching({ text }: { text: string }) {
  return (
    <p className="flex items-center gap-2.5 text-sm" role="status">
      <span className="relative inline-flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden" aria-hidden>
        <ShieldMark className="h-5 w-5 text-zoiko-primary dark:text-[#ff8a8d] motion-safe:animate-pulse" />
        <span className="absolute inset-x-0 top-0 h-full motion-safe:animate-zs-scan motion-reduce:hidden">
          <span className="block h-2 w-full bg-gradient-to-b from-transparent via-white/90 to-transparent dark:via-white/60" />
        </span>
      </span>
      <span className="bg-[linear-gradient(90deg,rgba(11,27,38,0.55)_0%,rgba(11,27,38,0.55)_40%,rgba(169,29,34,1)_50%,rgba(11,27,38,0.55)_60%,rgba(11,27,38,0.55)_100%)] bg-[length:200%_100%] bg-clip-text text-transparent motion-safe:animate-zs-shimmer motion-reduce:text-zoiko-dark/60 dark:bg-[linear-gradient(90deg,rgba(156,163,175,1)_0%,rgba(156,163,175,1)_40%,rgba(255,255,255,1)_50%,rgba(156,163,175,1)_60%,rgba(156,163,175,1)_100%)] dark:motion-reduce:text-gray-400">
        {text}
      </span>
    </p>
  );
}
