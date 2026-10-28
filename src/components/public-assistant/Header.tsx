"use client";

import { ArrowLeft, History, Moon, SquarePen, Sun, X } from "lucide-react";
import { ShieldMark } from "./shared/ShieldMark";
import { useAssistant } from "./state/AssistantContext";
import { copy } from "./copy/en-US";

const iconButton = "rounded-lg p-2 text-white/80 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70";

export function Header() {
  const { state, dispatch, navigate, config, status, newChat, theme, toggleTheme } = useAssistant();
  const atRoot = state.view.name === "welcome" || (state.view.name === "chat" && state.history.length === 0);
  const name = config?.display_name || copy.displayNameFallback;
  const dark = theme === "dark";

  return (
    <div className="flex items-start gap-1 bg-zoiko-dark px-2 py-3 text-white dark:bg-[#0a141c]">
      {!atRoot ? (
        <button type="button" className={iconButton} onClick={() => dispatch({ type: "back" })} aria-label={copy.header.back}>
          <ArrowLeft className="h-5 w-5" aria-hidden />
        </button>
      ) : (
        <span className="p-2" aria-hidden>
          <ShieldMark className="h-5 w-5 text-[#ff6b6f]" />
        </span>
      )}
      <div className="min-w-0 flex-1 pt-0.5">
        <h2 id="zs-assistant-title" tabIndex={-1} className="truncate text-base font-semibold outline-none">
          <button type="button" onClick={() => dispatch({ type: "home" })} className="hover:underline focus:outline-none focus-visible:underline" aria-label={`${name} — ${copy.header.home}`}>
            {name}
          </button>
        </h2>
        <p className="text-xs leading-snug text-white/70">{status?.mode === "ai" ? copy.header.aiDisclosure : copy.header.staticDisclosure}</p>
      </div>
      <button type="button" className={iconButton} onClick={() => void newChat()} aria-label={copy.header.newChat} title={copy.header.newChat}>
        <SquarePen className="h-5 w-5" aria-hidden />
      </button>
      <button
        type="button"
        className={iconButton}
        onClick={() => navigate({ name: "history" })}
        aria-label={copy.header.history}
        aria-current={state.view.name === "history" ? "page" : undefined}
        title={copy.header.history}
      >
        <History className="h-5 w-5" aria-hidden />
      </button>
      <button
        type="button"
        className={iconButton}
        onClick={toggleTheme}
        aria-label={copy.header.darkMode}
        aria-pressed={dark}
        title={dark ? copy.header.lightMode : copy.header.darkMode}
      >
        {dark ? <Sun className="h-5 w-5" aria-hidden /> : <Moon className="h-5 w-5" aria-hidden />}
      </button>
      <button type="button" className={iconButton} onClick={() => dispatch({ type: "close" })} aria-label={copy.header.close} title={copy.header.close}>
        <X className="h-5 w-5" aria-hidden />
      </button>
    </div>
  );
}
