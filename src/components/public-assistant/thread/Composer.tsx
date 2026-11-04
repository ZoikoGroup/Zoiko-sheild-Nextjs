"use client";

import { useRef, useState } from "react";
import { Mic, Paperclip, Send, Shield, Square } from "lucide-react";
import { COMPOSER_COUNTER_FROM, COMPOSER_MAX, codePointLength } from "@/lib/public-assistant/contract";
import { useAssistant } from "../state/AssistantContext";
import { useDictation } from "../shared/speech";
import { copy } from "../copy/en-US";

export function Composer() {
  const { submit, state, route } = useAssistant();
  const privacy = route("privacy_notice");
  const [value, setValue] = useState("");
  // Text already in the box when dictation started; speech is appended after it.
  const base = useRef("");
  const dictation = useDictation((transcript) => setValue(base.current ? `${base.current} ${transcript}` : transcript));
  const max = COMPOSER_MAX;
  const length = codePointLength(value);
  const tooLong = length > max;
  const busy = state.thread.some((t) => t.role === "assistant" && (t.status === "pending" || t.status === "streaming"));
  const showCounter = length >= COMPOSER_COUNTER_FROM;

  const send = () => {
    if (!value.trim() || tooLong || busy) return;
    if (dictation.listening) dictation.stop();
    submit(value);
    setValue("");
  };

  const toggleMic = () => {
    if (dictation.listening) return dictation.stop();
    base.current = value.trim();
    dictation.start();
  };

  const hint = tooLong
    ? copy.composer.tooLong(max)
    : dictation.listening
      ? copy.composer.listening
      : dictation.error === "denied"
        ? copy.composer.micDenied
        : dictation.error === "failed"
          ? copy.composer.micError
          : showCounter
            ? copy.composer.counter(length, max)
            : "";
  const hintVisible = tooLong || dictation.listening || !!dictation.error || showCounter;

  return (
    <div className="p-3 sm:p-4 bg-transparent shrink-0">
      <form
        className="relative flex items-center gap-2 rounded-full border border-gray-200/90 dark:border-white/10 bg-white dark:bg-[#162231] shadow-md px-3.5 py-1.5 transition-all focus-within:border-zoiko-primary/60 focus-within:ring-2 focus-within:ring-zoiko-primary/10"
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
      >
        <label htmlFor="zs-composer" className="sr-only">
          {copy.composer.label}
        </label>

        {/* Paperclip attachment icon button matching design */}
        <button
          type="button"
          onClick={() => alert("Attachments are not supported in guest mode.")}
          className="rounded-full p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition focus:outline-none"
          title="Attach file"
          aria-label="Attach file"
        >
          <Paperclip className="h-4 w-4" aria-hidden />
        </button>

        {/* Text input */}
        <textarea
          id="zs-composer"
          rows={1}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
              e.preventDefault();
              send();
            }
          }}
          placeholder={dictation.listening ? copy.composer.listening : copy.composer.placeholder}
          aria-invalid={tooLong}
          aria-describedby="zs-composer-hint"
          className="flex-1 resize-none bg-transparent py-1.5 text-xs sm:text-sm text-gray-800 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none max-h-24 min-h-[36px]"
        />

        {/* Voice dictation button */}
        {dictation.supported && (
          <button
            type="button"
            onClick={toggleMic}
            aria-label={dictation.listening ? copy.composer.micStop : copy.composer.micStart}
            aria-pressed={dictation.listening}
            title={dictation.listening ? copy.composer.micStop : copy.composer.micStart}
            className={`rounded-full p-2 transition focus:outline-none ${
              dictation.listening
                ? "animate-pulse bg-red-100 dark:bg-red-950/60 text-[#c5221f]"
                : "text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            }`}
          >
            {dictation.listening ? <Square className="h-4 w-4" aria-hidden /> : <Mic className="h-4 w-4" aria-hidden />}
          </button>
        )}

        {/* Circular red send button with paper plane icon */}
        <button
          type="submit"
          disabled={!value.trim() || tooLong || busy}
          aria-label={copy.composer.send}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c5221f] text-white shadow-sm transition hover:bg-[#a51b18] hover:scale-105 active:scale-95 disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-zoiko-primary shrink-0"
        >
          <Send className="h-4 w-4" aria-hidden />
        </button>
      </form>

      {/* Error / counter hint */}
      {hintVisible && (
        <p
          id="zs-composer-hint"
          aria-live="polite"
          className={`mt-1 text-right text-[11px] ${
            tooLong || dictation.error ? "text-red-600 dark:text-red-400" : "text-gray-400"
          }`}
        >
          {hint}
        </p>
      )}

      {/* ── Footer Disclaimer matching the design mockup ─────────── */}
      <div className="mt-2.5 flex items-center justify-center gap-1.5 text-center text-[10.5px] text-gray-400 dark:text-gray-500 leading-tight px-2">
        <Shield className="h-3.5 w-3.5 shrink-0 text-gray-400/80" aria-hidden />
        <p>
          The Zoiko Shield AI Assistant provides general information about our products and services.
          It does not have access to your organization&apos;s data or any customer environments.
          {privacy && (
            <>
              {" "}
              <a href={privacy.url} className="underline hover:text-gray-600 dark:hover:text-gray-300">
                Privacy notice
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
