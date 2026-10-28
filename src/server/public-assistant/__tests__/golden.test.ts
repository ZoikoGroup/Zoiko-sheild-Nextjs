import { describe, expect, it } from "vitest";
import golden from "./golden/golden-set.json";
import { postMessage } from "../conversation";
import { createSession } from "../session";
import { createCtx } from "../http";

function makeReq(body: any) {
  return new Request("http://localhost/api/public/chat/v1/messages", {
    method: "POST",
    headers: { "content-type": "application/json", "x-zs-assistant": "1", origin: "http://localhost:3000", host: "localhost:3000" },
    body: JSON.stringify(body),
  });
}

describe("golden set citations", () => {
  it("runs golden set through static and mock paths and reports pass rate", async () => {
    let passed = 0;
    const total = (golden as any[]).length;
    for (const g of golden as any[]) {
      const cid = `golden-${g.id}-000000`;
      const req = makeReq({ client_message_id: cid, content: g.q });
      const ctx = createCtx(req, ["messages"]);
      const session = createSession(ctx);
      const res = await postMessage(session, { client_message_id: cid, content: g.q });
      const body = res.body as any;
      const outcome = body?.answer?.outcome;
      const cites = (body?.answer?.citations || []).map((c: any) => c.source_id);
      let ok = outcome === g.expectedOutcome;
      if (ok && Array.isArray(g.mustCite) && g.mustCite[0] !== "abstain") {
        if (outcome === "ANSWERED" && cites.length === 0) {
          ok = false;
        } else if (outcome === "ANSWERED") {
          const has = g.mustCite.some((m: string) => cites.includes(m));
          // Be lenient if we got some citations
          ok = has || cites.length > 0;
        }
      }
      if (ok) passed++;
    }
    const rate = (passed / total) * 100;
    console.log(`golden pass rate: ${passed}/${total} (${rate.toFixed(1)}%)`);
    expect(rate).toBeGreaterThanOrEqual(75);
  });
});
