"use client";

import { useState } from "react";
import { BookOpen, ChevronRight, Compass, Search } from "lucide-react";
import { HELP_QUERY_MAX, codePointLength, type AnswerBlock, type RouteLink } from "@/lib/public-assistant/contract";
import { get, post } from "../../api/client";
import { useAssistant } from "../../state/AssistantContext";
import { useLoad } from "../../shared/useLoad";
import { Blocks, Button, ErrorNote, FlowHeading, Loading, RouteButton } from "../../shared/ui";

type Item = { id: string; kind: "article" | "guide" | "source"; title: string; summary?: string; url?: string };
type Sub = { name: "home" } | { name: "results"; query: string } | { name: "article"; id: string } | { name: "guide"; id: string };

interface HomeBody {
  topics: { topic_id: string; label: string; description: string; items: Item[] }[];
}
interface SearchBody {
  results: Item[];
  next_cursor: string | null;
  no_results: boolean;
  fallback: RouteLink[];
  incident: RouteLink | null;
}
interface ArticleBody {
  article: { id: string; title: string; url: string; blocks: AnswerBlock[]; related: { id: string; title: string }[] };
}
interface GuideBody {
  guide_id: string;
  title: string;
  url: string;
  step: { step_id: string; prompt: string; blocks: AnswerBlock[]; choices: { choice_id: string; label: string }[] } | null;
  outcome: { route: RouteLink | null; fallback: RouteLink[] } | null;
}

export function HelpFlow({ initialQuery }: { initialQuery?: string }) {
  const [stack, setStack] = useState<Sub[]>(initialQuery ? [{ name: "results", query: initialQuery.slice(0, HELP_QUERY_MAX) }] : [{ name: "home" }]);
  const sub: Sub = stack[stack.length - 1] ?? { name: "home" };
  const push = (s: Sub) => setStack((st) => [...st, s]);
  const open = (item: Item) => {
    if (item.kind === "guide") push({ name: "guide", id: item.id });
    else if (item.kind === "article") push({ name: "article", id: item.id });
    else if (item.url) window.location.assign(item.url);
  };

  return (
    <div className="p-4">
      <SearchBox key={sub.name === "results" ? sub.query : "box"} initial={sub.name === "results" ? sub.query : ""} onSearch={(q) => push({ name: "results", query: q })} />
      {stack.length > 1 && (
        <button type="button" onClick={() => setStack((st) => st.slice(0, -1))} className="mb-3 text-xs font-medium text-zoiko-primary dark:text-[#ff8a8d] hover:underline">
          ← Back
        </button>
      )}
      {sub.name === "home" && <Home onOpen={open} />}
      {sub.name === "results" && <Results key={`${stack.length}:${sub.query}`} query={sub.query} onOpen={open} />}
      {sub.name === "article" && <Article key={sub.id} id={sub.id} onOpen={(id) => push({ name: "article", id })} />}
      {sub.name === "guide" && <GuideRunner key={sub.id} id={sub.id} />}
    </div>
  );
}

function SearchBox({ initial, onSearch }: { initial: string; onSearch: (q: string) => void }) {
  const [q, setQ] = useState(initial);
  const tooLong = codePointLength(q) > HELP_QUERY_MAX;
  return (
    <form
      role="search"
      className="mb-4 flex gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (q.trim() && !tooLong) onSearch(q.trim());
      }}
    >
      <label htmlFor="zs-help-search" className="sr-only">
        Search help
      </label>
      <input
        id="zs-help-search"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search help topics…"
        aria-invalid={tooLong}
        className="min-w-0 flex-1 rounded-lg border border-zoiko-border dark:border-white/10 px-3 py-2 text-sm focus:border-zoiko-primary focus:outline-none focus:ring-2 focus:ring-zoiko-primary/20"
      />
      <Button type="submit" aria-label="Search" disabled={!q.trim() || tooLong}>
        <Search className="h-4 w-4" aria-hidden />
      </Button>
    </form>
  );
}

function ItemButton({ item, onOpen }: { item: Item; onOpen: (i: Item) => void }) {
  const Icon = item.kind === "guide" ? Compass : BookOpen;
  return (
    <button type="button" onClick={() => onOpen(item)} className="flex w-full items-start gap-2 px-3 py-2.5 text-left text-sm hover:bg-zoiko-beige/60 dark:hover:bg-white/10 focus:outline-none focus-visible:bg-zoiko-beige dark:focus-visible:bg-white/10">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-zoiko-primary dark:text-[#ff8a8d]" aria-hidden />
      <span className="flex-1">
        <span className="block font-medium">{item.title}</span>
        {item.summary && <span className="mt-0.5 block text-xs text-zoiko-dark/60 dark:text-gray-400">{item.summary}</span>}
      </span>
      <ChevronRight className="mt-0.5 h-4 w-4 text-zoiko-dark/30 dark:text-gray-500" aria-hidden />
    </button>
  );
}

/** Every help request carries the visitor's market so eligibility is applied server-side (WF10 AT227, AT236). */
function useMarket() {
  return useAssistant().state.market;
}

function Home({ onOpen }: { onOpen: (i: Item) => void }) {
  const market = useMarket();
  const { data, error, loading, retry } = useLoad((signal) => get<HomeBody>(`help/home?market=${encodeURIComponent(market)}`, signal), [market]);
  if (loading && !data) return <Loading />;
  if (error) return <ErrorNote error={error} onRetry={retry} />;
  return (
    <div className="space-y-4">
      <FlowHeading title="Help center" />
      {data!.topics.map((t) => (
        <section key={t.topic_id} aria-labelledby={`zs-topic-${t.topic_id}`}>
          <h4 id={`zs-topic-${t.topic_id}`} className="text-sm font-semibold">
            {t.label}
          </h4>
          <p className="mb-1.5 text-xs text-zoiko-dark/60 dark:text-gray-400">{t.description}</p>
          <ul className="divide-y divide-zoiko-border dark:divide-white/10 rounded-xl border border-zoiko-border dark:border-white/10">
            {t.items.map((i) => (
              <li key={i.id}>
                <ItemButton item={i} onOpen={onOpen} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function Results({ query, onOpen }: { query: string; onOpen: (i: Item) => void }) {
  const [pages, setPages] = useState<SearchBody[]>([]);
  const market = useMarket();
  const { data, error, loading, retry } = useLoad((signal) => post<SearchBody>("help/search", { query, market }, signal), [query, market]);
  const [more, setMore] = useState<{ loading: boolean; error?: unknown }>({ loading: false });
  if (loading && !data) return <Loading label="Searching…" />;
  if (error) return <ErrorNote error={error} onRetry={retry} />;
  const all = [data!, ...pages];
  const results = all.flatMap((p) => p.results);
  const next = all[all.length - 1]?.next_cursor;

  const loadMore = () => {
    setMore({ loading: true });
    post<SearchBody>("help/search", { query, market, cursor: next }).then(
      (p) => {
        setPages((ps) => [...ps, p]);
        setMore({ loading: false });
      },
      (e) => setMore({ loading: false, error: e }),
    );
  };

  return (
    <div>
      {data!.incident && (
        <div className="mb-3 space-y-2 rounded-xl border border-red-300 bg-red-50 p-3 text-sm dark:border-red-400/40 dark:bg-red-500/10" role="alert">
          <p className="font-semibold">Dealing with an active security incident?</p>
          <p>Contact our team directly now rather than searching help articles. Until you reach someone, follow your own incident response plan.</p>
          <RouteButton link={data!.incident} />
        </div>
      )}
      <p className="mb-2 text-sm" role="status">
        {data!.no_results ? (
          <>No results for “{query}”.</>
        ) : (
          <>
            Results for “{query}”
          </>
        )}
      </p>
      {data!.no_results ? (
        <div className="space-y-3 rounded-xl bg-zoiko-beige/70 dark:bg-white/5 p-3 text-sm">
          <p>Try different words, or ask our team directly.</p>
          <div className="flex flex-wrap gap-2">
            {data!.fallback.map((r) => (
              <RouteButton key={r.route_key} link={r} />
            ))}
          </div>
        </div>
      ) : (
        <>
          <ul className="divide-y divide-zoiko-border dark:divide-white/10 rounded-xl border border-zoiko-border dark:border-white/10">
            {results.map((i) => (
              <li key={i.id}>
                <ItemButton item={i} onOpen={onOpen} />
              </li>
            ))}
          </ul>
          {more.error ? <div className="mt-2"><ErrorNote error={more.error} onRetry={loadMore} /></div> : null}
          {next && (
            <Button variant="secondary" className="mt-3 w-full" onClick={loadMore} disabled={more.loading}>
              {more.loading ? "Loading…" : "Show more results"}
            </Button>
          )}
        </>
      )}
    </div>
  );
}

function Article({ id, onOpen }: { id: string; onOpen: (id: string) => void }) {
  const market = useMarket();
  const { data, error, loading, retry } = useLoad((signal) => get<ArticleBody>(`help/articles/${encodeURIComponent(id)}?market=${encodeURIComponent(market)}`, signal), [id, market]);
  if (loading && !data) return <Loading />;
  if (error) return <ErrorNote error={error} onRetry={retry} />;
  const a = data!.article;
  return (
    <article className="space-y-3">
      <h3 className="text-base font-semibold">{a.title}</h3>
      <Blocks blocks={a.blocks} />
      <a href={a.url} className="inline-block text-sm font-medium text-zoiko-primary dark:text-[#ff8a8d] underline">
        Read the full page
      </a>
      {a.related.length > 0 && (
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-zoiko-dark/50 dark:text-gray-400">Related</p>
          <ul className="space-y-1">
            {a.related.map((r) => (
              <li key={r.id}>
                <button type="button" onClick={() => onOpen(r.id)} className="text-left text-sm text-zoiko-primary dark:text-[#ff8a8d] hover:underline">
                  {r.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

function GuideRunner({ id }: { id: string }) {
  const { route } = useAssistant();
  const market = useMarket();
  const [history, setHistory] = useState<GuideBody[]>([]);
  const [busy, setBusy] = useState(false);
  const [failure, setFailure] = useState<unknown>(null);
  const start = useLoad((signal) => post<GuideBody>(`help/guides/${encodeURIComponent(id)}/steps`, { market }, signal), [id, market]);
  if (start.loading && !start.data) return <Loading />;
  if (start.error) return <ErrorNote error={start.error} onRetry={start.retry} />;
  const current = history[history.length - 1] ?? start.data!;

  const choose = (choice: string) => {
    if (!current.step) return;
    setBusy(true);
    setFailure(null);
    post<GuideBody>(`help/guides/${encodeURIComponent(id)}/steps`, { step_id: current.step.step_id, choice, market }).then(
      (next) => {
        setHistory((h) => [...h, next]);
        setBusy(false);
      },
      (e) => {
        setFailure(e);
        setBusy(false);
      },
    );
  };

  return (
    <div className="space-y-3">
      <FlowHeading title={current.title} />
      {current.step && (
        <fieldset disabled={busy} className="space-y-2">
          <legend className="text-sm font-medium">{current.step.prompt}</legend>
          {current.step.blocks.length > 0 && <Blocks blocks={current.step.blocks} />}
          <div className="flex flex-col gap-1.5">
            {current.step.choices.map((c) => (
              <Button key={c.choice_id} variant="secondary" className="justify-start text-left" onClick={() => choose(c.choice_id)}>
                {c.label}
              </Button>
            ))}
          </div>
        </fieldset>
      )}
      {current.outcome && (
        <div className="space-y-2 rounded-xl bg-zoiko-beige/70 dark:bg-white/5 p-3 text-sm">
          <p>Here's where to go next:</p>
          <div className="flex flex-wrap gap-2">
            {(current.outcome.route ? [current.outcome.route] : current.outcome.fallback.length ? current.outcome.fallback : [route("support")].filter((r): r is RouteLink => !!r)).map((r) => (
              <RouteButton key={r.route_key} link={r} />
            ))}
          </div>
        </div>
      )}
      {failure ? <ErrorNote error={failure} /> : null}
      {history.length > 0 && (
        <Button variant="ghost" onClick={() => setHistory((h) => h.slice(0, -1))}>
          ← Previous step
        </Button>
      )}
    </div>
  );
}
