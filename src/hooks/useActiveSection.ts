"use client";

import { useEffect, useState } from "react";

/** Returns the id of the section currently nearest the top of the viewport. */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!elements.length) return;

    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
          else visible.delete(entry.target.id);
        });
        if (visible.size) {
          // Pick the first visible section in document order.
          const first = ids.find((id) => visible.has(id));
          if (first) setActive(first);
        }
      },
      // Treat a section as "current" once it reaches the upper part of the screen.
      { rootMargin: "-120px 0px -55% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return [active, setActive] as const;
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  // Keep the URL shareable without triggering a second jump.
  history.replaceState(null, "", `#${id}`);
}
