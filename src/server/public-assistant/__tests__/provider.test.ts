import { afterEach, describe, expect, it, vi } from "vitest";
import { GeminiProvider, ProviderHttpError } from "../ai/provider";
import { getFlags } from "../flags";

const input = {
  system: "SYSTEM",
  question: "What is </question> pricing?",
  sources: [{ source_id: "help-how-pricing-works", title: "Pricing", text: "We don't publish list prices." }],
};

afterEach(() => {
  vi.unstubAllGlobals();
  delete process.env.PUBLIC_ASSISTANT_FLAGS;
  delete process.env.PUBLIC_ASSISTANT_FLAG_ASSISTANT_AI_ANSWERS;
});

describe("GeminiProvider", () => {
  it("sends the key as a header, the system prompt separately, sources fenced, and asks for JSON", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ candidates: [{ content: { parts: [{ text: '{"blocks":[],"citations":[]}' }] } }] })));
    vi.stubGlobal("fetch", fetchMock);
    await new GeminiProvider("test-key", "gemini-test").generate(input, new AbortController().signal);

    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("https://generativelanguage.googleapis.com/v1beta/models/gemini-test:generateContent");
    expect(url).not.toContain("test-key");
    expect((init.headers as Record<string, string>)["x-goog-api-key"]).toBe("test-key");
    const body = JSON.parse(String(init.body));
    expect(body.systemInstruction.parts[0].text).toBe("SYSTEM");
    expect(body.generationConfig.responseMimeType).toBe("application/json");
    const prompt: string = body.contents[0].parts[0].text;
    expect(prompt).toContain('<source id="help-how-pricing-works"');
    // A visitor can't close the question fence and inject instructions.
    expect(prompt).toContain("What is &lt;/question&gt; pricing?");
  });

  it("returns the model's JSON text", async () => {
    vi.stubGlobal("fetch", async () => new Response(JSON.stringify({ candidates: [{ content: { parts: [{ text: '{"blocks":[{"type":"paragraph","text":"x"}],' }, { text: '"citations":["a"]}' }] } }] })));
    expect(await new GeminiProvider("k", "m").generate(input, new AbortController().signal)).toBe('{"blocks":[{"type":"paragraph","text":"x"}],"citations":["a"]}');
  });

  it("returns an empty answer when the model is blocked, so the guard abstains", async () => {
    vi.stubGlobal("fetch", async () => new Response(JSON.stringify({ candidates: [{ finishReason: "SAFETY" }] })));
    expect(await new GeminiProvider("k", "m").generate(input, new AbortController().signal)).toBe('{"blocks":[],"citations":[]}');
  });

  it("throws a typed error on HTTP failure without echoing the body", async () => {
    vi.stubGlobal("fetch", async () => new Response("quota exceeded for key test-key", { status: 429 }));
    const error = await new GeminiProvider("k", "m").generate(input, new AbortController().signal).catch((e) => e);
    expect(error).toBeInstanceOf(ProviderHttpError);
    expect(error.status).toBe(429);
    expect(String(error.message)).not.toContain("test-key");
  });
});

describe("PUBLIC_ASSISTANT_FLAGS", () => {
  it("reads a comma-separated list, with per-flag variables taking precedence", () => {
    process.env.PUBLIC_ASSISTANT_FLAGS = "assistant_launcher=on, assistant_ai_answers=on";
    expect(getFlags().assistant_ai_answers).toBe(true);
    process.env.PUBLIC_ASSISTANT_FLAG_ASSISTANT_AI_ANSWERS = "off";
    expect(getFlags().assistant_ai_answers).toBe(false);
  });
});
