"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState, type ReactNode } from "react";
import type { Answer, ConfigBody, RouteLink, StatusBody } from "@/lib/public-assistant/contract";
import { AssistantApiError, get, post, postWithSession, streamEvents } from "../api/client";
import { initialState, reducer, type Action, type AssistantState, type AssistantTurn, type View } from "./machine";
import { clearHistory, deleteChat as removeSaved, fromSaved, loadHistory, saveChat, type SavedChat } from "./history";
import { copy } from "../copy/en-US";

export type Theme = "light" | "dark";
const THEME_KEY = "zs-assistant-theme";

function initialTheme(): Theme {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // storage blocked: fall back to the system preference
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

interface AssistantApi {
  state: AssistantState;
  dispatch: (action: Action) => void;
  config: ConfigBody | null;
  status: StatusBody | null;
  navigate: (view: View) => void;
  route: (key: string) => RouteLink | undefined;
  /** Composer submit: the server answers with AI when it's on, otherwise with guided static help. */
  submit: (text: string) => void;
  stop: (turnId: string) => void;
  retry: (turnId: string) => void;
  /** Saves the current chat to history, then starts a fresh one. */
  newChat: () => Promise<void>;
  refreshStatus: () => void;
  savedChats: SavedChat[];
  openChat: (id: string) => Promise<void>;
  deleteChat: (id: string) => void;
  clearChats: () => void;
  theme: Theme;
  toggleTheme: () => void;
}

const Ctx = createContext<AssistantApi | null>(null);

export function useAssistant(): AssistantApi {
  const value = useContext(Ctx);
  if (!value) throw new Error("useAssistant outside AssistantProvider");
  return value;
}

const uid = () => (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`);

export function AssistantProvider({ children, config, status: initialStatus }: { children: ReactNode; config: ConfigBody | null; status: StatusBody | null }) {
  const [state, dispatch] = useReducer(reducer, initialState, (s) => ({ ...s, chatId: uid() }));
  const [status, setStatus] = useState(initialStatus);
  const [savedChats, setSavedChats] = useState<SavedChat[]>(() => loadHistory());
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // not remembered, still applied
    }
  }, [theme]);

  // Keep the current chat in local history once it has a finished answer.
  const busy = state.thread.some((t) => t.role === "assistant" && (t.status === "pending" || t.status === "streaming"));
  useEffect(() => {
    if (busy || state.thread.length === 0) return;
    setSavedChats(saveChat(state.chatId, state.thread));
  }, [busy, state.thread, state.chatId]);
  const streams = useRef(new Map<string, AbortController>());
  const marketRef = useRef(state.market);
  marketRef.current = state.market;

  useEffect(() => setStatus(initialStatus), [initialStatus]);

  const refreshStatus = useCallback(() => {
    get<StatusBody>("status").then(setStatus, () => undefined);
  }, []);

  const route = useCallback((key: string) => config?.routes.find((r) => r.route_key === key), [config]);
  const navigate = useCallback((view: View) => dispatch({ type: "navigate", view }), []);

  const run = useCallback(
    async (turn: AssistantTurn) => {
      const controller = new AbortController();
      streams.current.set(turn.id, controller);
      try {
        const res = await postWithSession<{ message_id: string | null; answer?: Answer }>(
          "messages",
          { client_message_id: turn.clientMessageId, content: turn.question, locale: navigator.language, market: marketRef.current },
          controller.signal,
        );
        if (res.answer) {
          dispatch({ type: "turn", id: turn.id, patch: { status: "done", answer: res.answer } });
          return;
        }
        dispatch({ type: "turn", id: turn.id, patch: { messageId: res.message_id!, status: "pending" } });
        let settled = false;
        await streamEvents(
          res.message_id!,
          (event) => {
            if (event.type === "progress") dispatch({ type: "turn", id: turn.id, patch: { progress: event.data.message } });
            else if (event.type === "delta") dispatch({ type: "delta", id: turn.id, blockIndex: event.data.block_index ?? 0, text: event.data.text ?? "" });
            else if (event.type === "final") {
              settled = true;
              dispatch({ type: "turn", id: turn.id, patch: { status: "done", answer: event.data.answer, draft: [] } });
            } else if (event.type === "error") {
              settled = true;
              const stopped = event.data.error_code === "CANCELLED";
              dispatch({ type: "turn", id: turn.id, patch: { status: stopped ? "stopped" : "error", error: event.data.message, draft: [], answer: event.data.answer } });
            }
          },
          controller.signal,
        );
        if (!settled) dispatch({ type: "turn", id: turn.id, patch: { status: "error", error: copy.thread.interrupted, draft: [] } });
      } catch (error) {
        if ((error as Error).name === "AbortError") return;
        const message = error instanceof AssistantApiError ? error.body.user_safe_message : copy.thread.interrupted;
        dispatch({ type: "turn", id: turn.id, patch: { status: "error", error: message, draft: [] } });
        if (error instanceof AssistantApiError && error.status === 503) refreshStatus();
      } finally {
        streams.current.delete(turn.id);
      }
    },
    [refreshStatus],
  );

  const submit = useCallback(
    (text: string) => {
      const question = text.trim();
      if (!question) return;
      const assistant: AssistantTurn = { id: uid(), role: "assistant", question, clientMessageId: uid(), status: "pending", draft: [] };
      dispatch({ type: "ask", user: { id: uid(), role: "user", text: question }, assistant });
      void run(assistant);
    },
    [run],
  );

  const stop = useCallback(
    (turnId: string) => {
      streams.current.get(turnId)?.abort();
      const turn = state.thread.find((t) => t.id === turnId);
      if (turn?.role === "assistant" && turn.messageId) void post(`messages/${turn.messageId}/cancel`).catch(() => undefined);
      dispatch({ type: "turn", id: turnId, patch: { status: "stopped", draft: [] } });
    },
    [state.thread],
  );

  // Closing the panel ends any answer still in flight, so nothing streams into a closed panel (WF12 AT326).
  useEffect(() => {
    if (state.open) return;
    for (const t of state.thread) if (t.role === "assistant" && (t.status === "pending" || t.status === "streaming")) stop(t.id);
  }, [state.open, state.thread, stop]);

  const retry = useCallback(
    (turnId: string) => {
      const turn = state.thread.find((t) => t.id === turnId);
      if (turn?.role !== "assistant") return;
      // A fresh client id: the previous attempt may have been answered as an error.
      const next: AssistantTurn = { ...turn, clientMessageId: uid(), messageId: undefined, status: "pending", draft: [], answer: undefined, error: undefined };
      dispatch({ type: "turn", id: turnId, patch: next });
      void run(next);
    },
    [run, state.thread],
  );

  const newChat = useCallback(async () => {
    for (const controller of streams.current.values()) controller.abort();
    streams.current.clear();
    // Bumps the server epoch so late stream events for the old thread are rejected.
    if (state.thread.length) await postWithSession("sessions/clear").catch(() => undefined);
    dispatch({ type: "reset_thread", chatId: uid() });
  }, [state.thread.length]);

  const openChat = useCallback(
    async (id: string) => {
      const chat = loadHistory().find((c) => c.id === id);
      if (!chat) return;
      for (const controller of streams.current.values()) controller.abort();
      streams.current.clear();
      if (state.thread.length) await postWithSession("sessions/clear").catch(() => undefined);
      dispatch({ type: "load_chat", chatId: chat.id, thread: fromSaved(chat.turns) });
    },
    [state.thread.length],
  );

  const deleteChat = useCallback((id: string) => setSavedChats(removeSaved(id)), []);
  const clearChats = useCallback(() => {
    clearHistory();
    setSavedChats([]);
  }, []);

  const value = useMemo<AssistantApi>(
    () => ({ state, dispatch, config, status, navigate, route, submit, stop, retry, newChat, refreshStatus, savedChats, openChat, deleteChat, clearChats, theme, toggleTheme }),
    [state, config, status, navigate, route, submit, stop, retry, newChat, refreshStatus, savedChats, openChat, deleteChat, clearChats, theme, toggleTheme],
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
