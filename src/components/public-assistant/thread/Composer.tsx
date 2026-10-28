"use client";

import { useRef, useState } from "react";
import { Mic, SendHorizontal, Square } from "lucide-react";
import { COMPOSER_COUNTER_FROM, COMPOSER_MAX, codePointLength } from "@/lib/public-assistant/contract";
import { useAssistant } from "../state/AssistantContext";
import { useDictation } from "../shared/speech";
import { copy } from "../copy/en-US";

export function Composer() {
  const { submit, state } = useAssistant();
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
    <form
      className="border-t border-zoiko-border dark:border-white/10 bg-white dark:bg-[#111d28] p-3"
      onSubmit={(e) => {
        e.preventDefault();
        send();
      }}
    >
      <div className="flex items-end gap-2">
        <label htmlFor="zs-composer" className="sr-only">
          {copy.composer.label}
        </label>
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
          className="max-h-32 min-h-[42px] flex-1 resize-none rounded-xl border border-zoiko-border dark:border-white/10 bg-zoiko-beige/40 dark:bg-white/5 px-3 py-2.5 text-sm focus:border-zoiko-primary focus:bg-white dark:focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-zoiko-primary/20 aria-[invalid=true]:border-red-600"
        />
        {dictation.supported && (
          <button
            type="button"
            onClick={toggleMic}
            aria-label={dictation.listening ? copy.composer.micStop : copy.composer.micStart}
            aria-pressed={dictation.listening}
            title={dictation.listening ? copy.composer.micStop : copy.composer.micStart}
            className={`rounded-xl border p-2.5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-zoiko-primary focus-visible:ring-offset-1 ${
              dictation.listening ? "animate-pulse border-zoiko-primary bg-zoiko-primary/10 text-zoiko-primary dark:text-[#ff8a8d]" : "border-zoiko-border dark:border-white/10 text-zoiko-dark/70 dark:text-gray-300 hover:bg-zoiko-beige dark:hover:bg-white/10"
            }`}
          >
            {dictation.listening ? <Square className="h-5 w-5" aria-hidden /> : <Mic className="h-5 w-5" aria-hidden />}
          </button>
        )}
        <button
          type="submit"
          disabled={!value.trim() || tooLong || busy}
          aria-label={copy.composer.send}
          className="rounded-xl bg-zoiko-primary p-2.5 text-white transition hover:bg-[#8f181c] disabled:bg-zoiko-primary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-zoiko-primary focus-visible:ring-offset-1"
        >
          <SendHorizontal className="h-5 w-5" aria-hidden />
        </button>
      </div>
      <p
        id="zs-composer-hint"
        aria-live="polite"
        className={`mt-1 text-right text-[11px] ${tooLong || dictation.error ? "text-red-700 dark:text-red-300" : dictation.listening ? "text-zoiko-primary dark:text-[#ff8a8d]" : "text-zoiko-dark/50 dark:text-gray-400"} ${hintVisible ? "" : "sr-only"}`}
      >
        {hint}
      </p>
    </form>
  );
}
