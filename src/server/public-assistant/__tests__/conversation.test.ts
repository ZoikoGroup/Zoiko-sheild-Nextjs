import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { call, parseSse, session } from "./helpers";
import { setFlagOverride } from "../flags";
import { setProviderOverride, type ModelProvider } from "../ai/provider";
import { corpus } from "../content/corpus";

let n = 0;
const cid = () => `test-msg-${Date.now()}-${n++}`;

beforeEach(() => setFlagOverride("assistant_ai_answers", true));
afterEach(() => {
  setFlagOverride("assistant_ai_answers", undefined);
  setProviderOverride(undefined);
});

async function ask(cookie: string, content: string) {
  const posted = await call("POST", "messages", { cookie, body: { client_message_id: cid(), content, market: "global" } });
  if (posted.status !== 202) return { posted, events: [] as any[] };
  const stream = await call("GET", `messages/${posted.body.message_id}/events`, { cookie });
  return { posted, events: parseSse(stream.text) };
}

describe("Phase C answers", () => {
  it("AI off: the chat still answers, synchronously and without the model", async () => {
    setFlagOverride("assistant_ai_answers", false);
    let called = false;
    setProviderOverride({ name: "spy", generate: async () => ((called = true), "{}") });
    const cookie = await session();
    const hi = await call("POST", "messages", { cookie, body: { client_message_id: cid(), content: "Hi" } });
    expect(hi.status).toBe(200);
    expect(hi.body.answer.outcome).toBe("ANSWERED");
    expect(hi.body.answer.blocks[0].text).toMatch(/ZoikoShield Assistant/);
    const q = await call("POST", "messages", { cookie, body: { client_message_id: cid(), content: `hello, ${corpus.help_articles[0]!.title}` } });
    expect(q.body.answer.citations.length).toBeGreaterThan(0);
    expect(called).toBe(false);
  });

  it.each([
    ["Hello", /ZoikoShield Assistant/],
    ["Who are you?", /not a person/],
    ["what can you do", /Here's what I can help with/],
    ["thanks!", /welcome/],
    ["What's the weather in Paris?", /outside what I can help with/],
  ])("conversational turn %s gets a fixed reply with no model call", async (content, expected) => {
    let called = false;
    setProviderOverride({ name: "spy", generate: async () => ((called = true), "{}") });
    const cookie = await session();
    const res = await call("POST", "messages", { cookie, body: { client_message_id: cid(), content } });
    expect(res.status).toBe(200);
    expect(JSON.stringify(res.body.answer.blocks)).toMatch(expected);
    expect(res.body.answer.citations).toEqual([]);
    expect(called).toBe(false);
  });

  it("needs a session", async () => {
    expect((await call("POST", "messages", { body: { client_message_id: cid(), content: "hi" } })).status).toBe(401);
  });

  it("AT015 answers from published sources with citations, streaming validated blocks", async () => {
    const cookie = await session();
    const article = corpus.help_articles[0]!;
    const { posted, events } = await ask(cookie, `Tell me about ${article.title}`);
    expect(posted.status).toBe(202);
    const types = events.map((e) => e.type);
    expect(types[0]).toBe("acknowledged");
    expect(types.at(-1)).toBe("final");
    expect(events.map((e) => e.seq)).toEqual([...events.keys()].map((i) => i + 1));
    const answer = events.at(-1).data.answer;
    expect(["ANSWERED", "LIMITED"]).toContain(answer.outcome);
    expect(answer.citations.length).toBeGreaterThan(0);
  });

  it("AT290 the model provider never sees personal data from the question", async () => {
    let seen = "";
    setProviderOverride({ name: "spy", generate: async (input) => ((seen = input.question), "{}") });
    const cookie = await session();
    await ask(cookie, `${corpus.help_articles[0]!.title}? Reply to jane.doe@acme.com or +44 20 7946 0958`);
    expect(seen).toContain("ZoikoShield");
    expect(seen).not.toMatch(/jane\.doe@acme\.com|7946/);
    expect(seen).toMatch(/\[redacted email\]/);
  });

  it("never cites connector sources while connector claims are off", async () => {
    const cookie = await session();
    const connector = corpus.connectors[0]!;
    const { events } = await ask(cookie, `Does ZoikoShield integrate with ${connector.name}?`);
    const cited = events.at(-1).data.answer.citations.map((c: { source_id: string }) => c.source_id);
    expect(cited.some((id: string) => corpus.connectors.some((c) => c.id === id))).toBe(false);
  });

  it("abstains when nothing relevant is published", async () => {
    const cookie = await session();
    const { events } = await ask(cookie, "flibbertigibbet quuxwobble zzqqxx");
    expect(events.at(-1).data.answer.outcome).toBe("ABSTAINED");
  });

  it("secrets are rejected synchronously and never reach the model", async () => {
    let called = false;
    setProviderOverride({ name: "spy", generate: async () => ((called = true), "{}") });
    const cookie = await session();
    const res = await call("POST", "messages", { cookie, body: { client_message_id: cid(), content: "my api_key=sk_live_abcdefghijklmnop1234" } });
    expect(res.status).toBe(200);
    expect(res.body.answer.outcome).toBe("REJECTED");
    expect(called).toBe(false);
  });

  it("incident language routes to a human channel with no intake", async () => {
    const cookie = await session();
    const res = await call("POST", "messages", { cookie, body: { client_message_id: cid(), content: "we have been breached right now" } });
    expect(res.body.answer.outcome).toBe("LIMITED");
    expect(res.body.answer.route.url).toMatch(/^\//);
  });

  it("a model that invents citations or claims is abstained, not shown", async () => {
    const evil: ModelProvider = {
      name: "evil",
      generate: async (input) => JSON.stringify({ blocks: [{ type: "paragraph", text: "We are FedRAMP certified and cost $5 per user." }], citations: [input.sources[0]!.source_id] }),
    };
    setProviderOverride(evil);
    const cookie = await session();
    const { events } = await ask(cookie, `What is ${corpus.help_articles[1]!.title}?`);
    const answer = events.at(-1).data.answer;
    expect(answer.outcome).toBe("ABSTAINED");
    expect(JSON.stringify(answer)).not.toContain("FedRAMP");
  });

  it("is idempotent on client_message_id", async () => {
    const cookie = await session();
    const body = { client_message_id: cid(), content: `What is ${corpus.help_articles[2]!.title}?` };
    const a = await call("POST", "messages", { cookie, body });
    const b = await call("POST", "messages", { cookie, body });
    expect(a.body.message_id).toBe(b.body.message_id);
  });

  it("rejects stale events after the conversation is cleared", async () => {
    const cookie = await session();
    const posted = await call("POST", "messages", { cookie, body: { client_message_id: cid(), content: `What is ${corpus.help_articles[3]!.title}?` } });
    await call("POST", "sessions/clear", { cookie });
    expect((await call("GET", `messages/${posted.body.message_id}/events`, { cookie })).status).toBe(409);
  });

  it("another session can't read or cancel my message", async () => {
    const mine = await session();
    const theirs = await session();
    const posted = await call("POST", "messages", { cookie: mine, body: { client_message_id: cid(), content: `What is ${corpus.help_articles[4]!.title}?` } });
    expect((await call("GET", `messages/${posted.body.message_id}/events`, { cookie: theirs })).status).toBe(404);
    expect((await call("POST", `messages/${posted.body.message_id}/cancel`, { cookie: theirs })).status).toBe(404);
  });

  it("cancel ends the stream with CANCELLED", async () => {
    setProviderOverride({
      name: "slow",
      generate: (_input, signal) => new Promise((_, reject) => signal.addEventListener("abort", () => reject(new DOMException("Aborted", "AbortError")))),
    });
    const cookie = await session();
    const posted = await call("POST", "messages", { cookie, body: { client_message_id: cid(), content: `What is ${corpus.help_articles[5]!.title}?` } });
    await call("POST", `messages/${posted.body.message_id}/cancel`, { cookie });
    const events = parseSse((await call("GET", `messages/${posted.body.message_id}/events`, { cookie })).text);
    expect(events.at(-1)).toMatchObject({ type: "error", data: { error_code: "CANCELLED" } });
  });

  it("enforces the 2,000 code point limit", async () => {
    const cookie = await session();
    const ok = await call("POST", "messages", { cookie, body: { client_message_id: cid(), content: "😀".repeat(2000) } });
    expect(ok.status).not.toBe(400);
    const tooLong = await call("POST", "messages", { cookie, body: { client_message_id: cid(), content: "😀".repeat(2001) } });
    expect(tooLong.status).toBe(400);
  });
});
