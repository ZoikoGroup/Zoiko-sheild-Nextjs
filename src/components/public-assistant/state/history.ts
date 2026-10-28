import type { Answer } from "@/lib/public-assistant/contract";
import type { Turn } from "./machine";

// Previous chats, kept only in this browser (localStorage). Nothing here is sent
// to the server; clearing site data or "Clear all" removes it.

export interface SavedTurn {
  role: "user" | "assistant";
  text?: string;
  question?: string;
  answer?: Answer;
}

export interface SavedChat {
  id: string;
  title: string;
  updatedAt: number;
  turns: SavedTurn[];
}

const KEY = "zs-assistant-history";
const MAX_CHATS = 20;
const GREETING = /^(?:hi+|hello+|hey+|hiya|yo|good (?:morning|afternoon|evening)|thanks?(?: you)?|ok(?:ay)?)[\s!.,?]*$/i;

export function loadHistory(): SavedChat[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) || "[]");
    return Array.isArray(parsed) ? parsed.filter((c) => c && typeof c.id === "string" && Array.isArray(c.turns)) : [];
  } catch {
    return [];
  }
}

function write(chats: SavedChat[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(chats.slice(0, MAX_CHATS)));
  } catch {
    // Storage full or blocked: history just isn't kept.
  }
}

/** Only finished turns are kept: in-flight drafts and errors aren't worth restoring. */
export function toSaved(thread: Turn[]): SavedTurn[] {
  return thread.flatMap((t): SavedTurn[] => {
    if (t.role === "user") return [{ role: "user", text: t.text }];
    return t.status === "done" && t.answer ? [{ role: "assistant", question: t.question, answer: t.answer }] : [];
  });
}

export function fromSaved(turns: SavedTurn[]): Turn[] {
  return turns.map((t, i): Turn => {
    const id = `saved-${i}-${Math.random().toString(16).slice(2)}`;
    return t.role === "user"
      ? { id, role: "user", text: t.text ?? "" }
      : { id, role: "assistant", question: t.question ?? "", clientMessageId: id, status: "done", draft: [], answer: t.answer };
  });
}

export function saveChat(id: string, thread: Turn[]): SavedChat[] {
  const turns = toSaved(thread);
  const chats = loadHistory().filter((c) => c.id !== id);
  if (!turns.some((t) => t.role === "assistant")) {
    write(chats);
    return chats;
  }
  // Title from the first real question; a lone "hi" makes a useless title.
  const userTexts = turns.filter((t) => t.role === "user").map((t) => t.text ?? "");
  const firstQuestion = userTexts.find((t) => !GREETING.test(t.trim())) ?? userTexts[0] ?? "Conversation";
  const title = firstQuestion.length > 60 ? `${firstQuestion.slice(0, 57)}…` : firstQuestion;
  const next = [{ id, title, updatedAt: Date.now(), turns }, ...chats];
  write(next);
  return next.slice(0, MAX_CHATS);
}

export function deleteChat(id: string): SavedChat[] {
  const next = loadHistory().filter((c) => c.id !== id);
  write(next);
  return next;
}

export function clearHistory() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // nothing to clear
  }
}
