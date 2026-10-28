import type { Answer, AnswerBlock, IntakeKind } from "@/lib/public-assistant/contract";

// One typed state registry for the widget (GAP-12): panel + current view
// (journey) + the chat thread. Per-journey step state lives in each flow.

export type View =
  | { name: "welcome" }
  | { name: "chat" }
  | { name: "help"; query?: string }
  | { name: "discovery" }
  | { name: "commercial" }
  | { name: "trust" }
  | { name: "integrations" }
  | { name: "onboarding" }
  | { name: "support" }
  | { name: "intake"; kind: IntakeKind }
  | { name: "history" };

export type TurnStatus = "pending" | "streaming" | "done" | "stopped" | "error";

export interface UserTurn {
  id: string;
  role: "user";
  text: string;
}

export interface AssistantTurn {
  id: string;
  role: "assistant";
  /** The question this answers, kept only in the tab so Retry can resend it. */
  question: string;
  clientMessageId: string;
  messageId?: string;
  status: TurnStatus;
  progress?: string;
  draft: string[];
  answer?: Answer;
  error?: string;
}

export type Turn = UserTurn | AssistantTurn;

export interface AssistantState {
  open: boolean;
  view: View;
  history: View[];
  thread: Turn[];
  /** Identifies the current chat in local history. */
  chatId: string;
  market: string;
}

export const initialState: AssistantState = {
  open: false,
  view: { name: "welcome" },
  history: [],
  thread: [],
  chatId: "",
  market: "global",
};

export type Action =
  | { type: "open" }
  | { type: "close" }
  | { type: "navigate"; view: View }
  | { type: "back" }
  | { type: "home" }
  | { type: "set_market"; market: string }
  | { type: "ask"; user: UserTurn; assistant: AssistantTurn }
  | { type: "turn"; id: string; patch: Partial<AssistantTurn> }
  | { type: "delta"; id: string; blockIndex: number; text: string }
  | { type: "reset_thread"; chatId: string }
  | { type: "load_chat"; chatId: string; thread: Turn[] };

function patchTurn(thread: Turn[], id: string, fn: (t: AssistantTurn) => AssistantTurn): Turn[] {
  return thread.map((t) => (t.id === id && t.role === "assistant" ? fn(t) : t));
}

export function reducer(state: AssistantState, action: Action): AssistantState {
  switch (action.type) {
    case "open":
      return { ...state, open: true };
    case "close":
      return { ...state, open: false };
    case "navigate":
      if (state.view.name === action.view.name && action.view.name !== "intake" && action.view.name !== "help") return state;
      return { ...state, view: action.view, history: [...state.history, state.view].slice(-10) };
    case "back": {
      const history = [...state.history];
      const view = history.pop() ?? { name: "welcome" };
      return { ...state, view, history };
    }
    case "home":
      return { ...state, view: state.thread.length ? { name: "chat" } : { name: "welcome" }, history: [] };
    case "set_market":
      return { ...state, market: action.market };
    case "ask":
      return { ...state, view: { name: "chat" }, history: state.view.name === "chat" ? state.history : [...state.history, state.view], thread: [...state.thread, action.user, action.assistant] };
    case "turn":
      return { ...state, thread: patchTurn(state.thread, action.id, (t) => ({ ...t, ...action.patch })) };
    case "delta":
      return {
        ...state,
        thread: patchTurn(state.thread, action.id, (t) => {
          const draft = [...t.draft];
          draft[action.blockIndex] = (draft[action.blockIndex] ?? "") + action.text;
          return { ...t, status: "streaming", draft };
        }),
      };
    case "reset_thread":
      return { ...state, thread: [], chatId: action.chatId, view: { name: "welcome" }, history: [] };
    case "load_chat":
      return { ...state, thread: action.thread, chatId: action.chatId, view: { name: "chat" }, history: [] };
  }
}

/** Plain-text transcript for export and the support summary opt-in. */
export function transcriptOf(thread: Turn[]): { role: "user" | "assistant"; text: string }[] {
  return thread.flatMap((t): { role: "user" | "assistant"; text: string }[] => {
    if (t.role === "user") return [{ role: "user", text: t.text }];
    if (!t.answer) return [];
    const text = t.answer.blocks.map((b: AnswerBlock) => (b.type === "paragraph" ? b.text : b.items.map((i) => `- ${i}`).join("\n"))).join("\n\n");
    return text ? [{ role: "assistant" as const, text }] : [];
  });
}
