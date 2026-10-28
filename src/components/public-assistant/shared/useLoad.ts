"use client";

import { useCallback, useEffect, useState } from "react";

/** Load-on-change with loading/error/retry; stale responses are ignored. */
export function useLoad<T>(load: (signal: AbortSignal) => Promise<T>, deps: unknown[]) {
  const [state, setState] = useState<{ data?: T; error?: unknown; loading: boolean }>({ loading: true });
  const [attempt, setAttempt] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const run = useCallback(load, deps);

  useEffect(() => {
    const controller = new AbortController();
    setState((s) => ({ data: s.data, loading: true }));
    run(controller.signal).then(
      (data) => !controller.signal.aborted && setState({ data, loading: false }),
      (error) => !controller.signal.aborted && setState({ error, loading: false }),
    );
    return () => controller.abort();
  }, [run, attempt]);

  return { ...state, retry: () => setAttempt((n) => n + 1) };
}
