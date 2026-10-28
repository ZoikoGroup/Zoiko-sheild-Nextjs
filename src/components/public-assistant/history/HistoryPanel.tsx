"use client";

import { useState } from "react";
import { Download, MessageSquare, Trash2 } from "lucide-react";
import { useAssistant } from "../state/AssistantContext";
import type { SavedChat } from "../state/history";
import { Button, FlowHeading } from "../shared/ui";
import { copy } from "../copy/en-US";

function asText(chat: SavedChat): string {
  const lines = chat.turns.map((t) => {
    if (t.role === "user") return `You:\n${t.text ?? ""}`;
    const blocks = t.answer?.blocks.map((b) => (b.type === "paragraph" ? b.text : b.items.map((i) => `- ${i}`).join("\n"))) ?? [];
    const sources = t.answer?.citations.map((c) => `  Source: ${c.title} (${window.location.origin}${c.url})`) ?? [];
    return [`Assistant:`, ...blocks, ...sources].join("\n");
  });
  return `ZoikoShield assistant conversation — ${new Date(chat.updatedAt).toLocaleString()}\n\n${lines.join("\n\n")}\n`;
}

function download(chat: SavedChat) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([asText(chat)], { type: "text/plain" }));
  a.download = `zoikoshield-chat-${new Date(chat.updatedAt).toISOString().slice(0, 10)}.txt`;
  a.click();
  URL.revokeObjectURL(a.href);
}

const dateFormat = new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" });

export function HistoryPanel() {
  const { state, savedChats, openChat, deleteChat, clearChats, route } = useAssistant();
  const [confirming, setConfirming] = useState(false);
  const privacy = route("privacy_notice");
  const iconBtn = "rounded-md p-1.5 text-zoiko-dark/50 dark:text-gray-400 hover:bg-zoiko-beige dark:hover:bg-white/10 hover:text-zoiko-dark dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-zoiko-primary";

  return (
    <div className="space-y-4 p-4">
      <FlowHeading title={copy.history.title} intro={copy.history.intro} />

      {savedChats.length === 0 ? (
        <p className="rounded-xl bg-zoiko-beige/60 dark:bg-white/5 p-4 text-sm text-zoiko-dark/70 dark:text-gray-300">{copy.history.empty}</p>
      ) : (
        <ul className="divide-y divide-zoiko-border dark:divide-white/10 rounded-xl border border-zoiko-border dark:border-white/10">
          {savedChats.map((chat) => {
            const current = chat.id === state.chatId;
            return (
              <li key={chat.id} className="flex items-start gap-1 px-2 py-2">
                <button
                  type="button"
                  onClick={() => void openChat(chat.id)}
                  className="flex min-w-0 flex-1 items-start gap-2 rounded-lg px-1.5 py-1 text-left hover:bg-zoiko-beige/60 dark:hover:bg-white/10 focus:outline-none focus-visible:bg-zoiko-beige dark:focus-visible:bg-white/10"
                >
                  <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-zoiko-primary dark:text-[#ff8a8d]" aria-hidden />
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium">{chat.title}</span>
                    <span className="block text-xs text-zoiko-dark/60 dark:text-gray-400">
                      {dateFormat.format(chat.updatedAt)} · {copy.history.messages(chat.turns.length)}
                      {current && <span className="ml-1 font-medium text-zoiko-primary dark:text-[#ff8a8d]">· {copy.history.current}</span>}
                    </span>
                  </span>
                </button>
                <button type="button" className={iconBtn} onClick={() => download(chat)} aria-label={copy.history.downloadLabel(chat.title)} title={copy.history.download}>
                  <Download className="h-4 w-4" aria-hidden />
                </button>
                <button type="button" className={iconBtn} onClick={() => deleteChat(chat.id)} aria-label={copy.history.deleteLabel(chat.title)} title={copy.history.delete}>
                  <Trash2 className="h-4 w-4" aria-hidden />
                </button>
              </li>
            );
          })}
        </ul>
      )}

      <div className="flex flex-wrap items-center justify-between gap-2">
        {savedChats.length > 0 && (
          <Button variant="secondary" onClick={() => setConfirming(true)}>
            <Trash2 className="h-4 w-4" aria-hidden />
            {copy.history.clearAll}
          </Button>
        )}
        {privacy && (
          <a href={privacy.url} className="text-sm font-medium text-zoiko-primary dark:text-[#ff8a8d] underline">
            {copy.history.privacy}
          </a>
        )}
      </div>

      {confirming && (
        <div role="alertdialog" aria-labelledby="zs-clear-title" aria-describedby="zs-clear-body" className="rounded-xl border border-zoiko-border dark:border-white/10 bg-zoiko-beige/70 dark:bg-white/5 p-3">
          <p id="zs-clear-title" className="text-sm font-semibold">
            {copy.history.clearConfirmTitle}
          </p>
          <p id="zs-clear-body" className="mt-1 text-sm text-zoiko-dark/70 dark:text-gray-300">
            {copy.history.clearConfirmBody}
          </p>
          <div className="mt-3 flex gap-2">
            <Button variant="secondary" autoFocus onClick={() => setConfirming(false)}>
              {copy.history.cancel}
            </Button>
            <Button
              onClick={() => {
                clearChats();
                setConfirming(false);
              }}
            >
              {copy.history.confirm}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
