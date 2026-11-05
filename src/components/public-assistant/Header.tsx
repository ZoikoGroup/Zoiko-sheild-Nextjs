"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, History, Minus, MoreVertical, Moon, Plus, Search, Sun, X } from "lucide-react";
import { ShieldMark } from "./shared/ShieldMark";
import { useAssistant } from "./state/AssistantContext";
import { copy } from "./copy/en-US";

const iconBtn =
  "active:scale-90 h-8 w-8 rounded-lg border border-gray-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5 flex items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-white dark:hover:bg-white/10 shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-zoiko-primary";

export function Header() {
  const { state, dispatch, navigate, config, newChat, theme, toggleTheme } = useAssistant();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("mousedown", onDown);
    };
  }, [menuOpen]);

  const item =
    "flex w-full items-center gap-2.5 px-3 py-2 text-left text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 focus:outline-none focus-visible:bg-gray-100 dark:focus-visible:bg-white/10";
  const run = (fn: () => void) => () => {
    setMenuOpen(false);
    fn();
  };
  const atRoot =
    state.view.name === "welcome" ||
    (state.view.name === "chat" && state.history.length === 0);
  const name = config?.display_name || copy.displayNameFallback;

  return (
    <div className="relative z-30 flex items-center justify-between gap-3 px-4 py-3 bg-white/95 dark:bg-[#101b27]/95 border-b border-gray-100 dark:border-white/5 backdrop-blur-sm shrink-0">
      <div className="flex items-center gap-3 min-w-0">
        {/* Back button on sub-views */}
        {!atRoot && (
          <button
            type="button"
            className={iconBtn}
            onClick={() => dispatch({ type: "back" })}
            aria-label={copy.header.back}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
          </button>
        )}

        {/* Red squircle avatar with circuit shield */}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#c5221f] to-[#7f1311] shadow-sm p-2 text-white">
          <ShieldMark className="h-6 w-6 text-white" />
        </div>

        {/* Name, Status, Subtitle */}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h2
              id="zs-assistant-title"
              tabIndex={-1}
              className="truncate text-sm sm:text-base font-bold text-gray-900 dark:text-white leading-tight outline-none"
            >
              <button
                type="button"
                onClick={() => dispatch({ type: "home" })}
                className="hover:underline focus:outline-none focus-visible:underline"
                aria-label={`${name} — ${copy.header.home}`}
              >
                {name}
              </button>
            </h2>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 shrink-0">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden />
              Online
            </span>
          </div>
          <p className="truncate text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Your cybersecurity partner for a safer tomorrow.
          </p>
        </div>
      </div>

      {/* Top right icon buttons */}
      <div className="flex items-center gap-1.5 shrink-0">
        <button
          type="button"
          className={iconBtn}
          onClick={() => navigate({ name: "help", query: "" })}
          aria-label="Search help"
          title="Search help"
        >
          <Search className="h-3.5 w-3.5" aria-hidden />
        </button>
        <div
          className="relative"
          ref={menuRef}
          onKeyDown={(e) => {
            if (e.key === "Escape" && menuOpen) {
              e.stopPropagation();
              setMenuOpen(false);
            }
          }}
        >
          <button
            type="button"
            className={iconBtn}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="More options"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            title="More options"
          >
            <MoreVertical className="h-3.5 w-3.5" aria-hidden />
          </button>
          {menuOpen && (
            <div
              role="menu"
              className="motion-safe:animate-zs-pop origin-top-right absolute right-0 top-full mt-2 w-44 overflow-hidden rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#101b27] py-1 shadow-xl z-10"
            >
              <button type="button" role="menuitem" className={item} onClick={run(() => void newChat())}>
                <Plus className="h-3.5 w-3.5" aria-hidden /> {copy.header.newChat}
              </button>
              <button type="button" role="menuitem" className={item} onClick={run(() => navigate({ name: "history" }))}>
                <History className="h-3.5 w-3.5" aria-hidden /> {copy.header.history}
              </button>
              <button type="button" role="menuitem" className={item} onClick={run(toggleTheme)}>
                {theme === "dark" ? <Sun className="h-3.5 w-3.5" aria-hidden /> : <Moon className="h-3.5 w-3.5" aria-hidden />}
                {theme === "dark" ? copy.header.lightMode : copy.header.darkMode}
              </button>
            </div>
          )}
        </div>
        <button
          type="button"
          className={iconBtn}
          onClick={() => dispatch({ type: "close" })}
          aria-label="Minimize"
          title="Minimize"
        >
          <Minus className="h-3.5 w-3.5" aria-hidden />
        </button>
        <button
          type="button"
          className={`${iconBtn} md:hidden`}
          onClick={() => dispatch({ type: "close" })}
          aria-label={copy.header.close}
          title={copy.header.close}
        >
          <X className="h-3.5 w-3.5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
