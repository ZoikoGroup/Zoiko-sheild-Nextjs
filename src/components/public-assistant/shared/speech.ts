"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { Answer } from "@/lib/public-assistant/contract";

// Voice in (SpeechRecognition) and voice out (speechSynthesis), both browser APIs.
// Buttons hide themselves where the browser lacks support.

// ---- voice input -------------------------------------------------------------

interface RecognitionResult {
  isFinal: boolean;
  0: { transcript: string };
}
interface Recognition {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  onresult: ((e: { results: ArrayLike<RecognitionResult> }) => void) | null;
  onerror: ((e: { error: string }) => void) | null;
  onend: (() => void) | null;
  start(): void;
  stop(): void;
  abort(): void;
}
type RecognitionCtor = new () => Recognition;

function recognitionCtor(): RecognitionCtor | undefined {
  if (typeof window === "undefined") return undefined;
  const w = window as unknown as { SpeechRecognition?: RecognitionCtor; webkitSpeechRecognition?: RecognitionCtor };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition;
}

export type DictationError = "denied" | "failed" | null;

/** Streams what the visitor says into `onText`; stops on its own after a pause. */
export function useDictation(onText: (transcript: string) => void) {
  const [supported, setSupported] = useState(false);
  const [listening, setListening] = useState(false);
  const [error, setError] = useState<DictationError>(null);
  const rec = useRef<Recognition | null>(null);
  const onTextRef = useRef(onText);
  onTextRef.current = onText;

  useEffect(() => {
    setSupported(!!recognitionCtor());
    return () => rec.current?.abort();
  }, []);

  const start = useCallback(() => {
    const Ctor = recognitionCtor();
    if (!Ctor) return;
    rec.current?.abort();
    const r = new Ctor();
    r.lang = navigator.language || "en-US";
    r.interimResults = true;
    r.continuous = false;
    r.onresult = (e) => onTextRef.current(Array.from(e.results, (res) => res[0].transcript).join(""));
    r.onerror = (e) => {
      // "no-speech" and "aborted" are normal endings, not failures.
      if (e.error === "not-allowed" || e.error === "service-not-allowed") setError("denied");
      else if (e.error !== "no-speech" && e.error !== "aborted") setError("failed");
    };
    r.onend = () => setListening(false);
    rec.current = r;
    setError(null);
    try {
      r.start();
      setListening(true);
    } catch {
      setError("failed");
    }
  }, []);

  const stop = useCallback(() => rec.current?.stop(), []);

  return { supported, listening, error, start, stop };
}

// ---- voice output --------------------------------------------------------------

let speakingId: string | null = null;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());
const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

export function stopSpeaking() {
  if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
  speakingId = null;
  emit();
}

/** What the speaker reads: the answer, then each source's title and summary. */
export function answerToSpeech(answer: Answer): string {
  const body = answer.blocks.map((b) => (b.type === "paragraph" ? b.text : b.items.join(". "))).join(" ");
  const sources = answer.citations.map((c) => `${c.title}. ${c.summary}`).join(" ");
  return sources ? `${body} ${sources}` : body;
}

/** One answer speaks at a time; starting another stops the first. */
export function useSpeaker() {
  const current = useSyncExternalStore(subscribe, () => speakingId, () => null);
  const [supported, setSupported] = useState(false);
  useEffect(() => setSupported(typeof window !== "undefined" && "speechSynthesis" in window), []);

  const speak = useCallback((id: string, text: string) => {
    stopSpeaking();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = navigator.language || "en-US";
    const done = () => {
      if (speakingId === id) {
        speakingId = null;
        emit();
      }
    };
    utterance.onend = done;
    utterance.onerror = done;
    speakingId = id;
    emit();
    window.speechSynthesis.speak(utterance);
  }, []);

  return { supported, speakingId: current, speak, stop: stopSpeaking };
}
