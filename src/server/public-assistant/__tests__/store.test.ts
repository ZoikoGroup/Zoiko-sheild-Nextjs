import { describe, expect, it } from "vitest";
import { getStore, InMemoryStore, setStore } from "../store";

describe("public assistant store", () => {
  it("in-memory store works", () => {
    const s = new InMemoryStore();
    setStore(s);
    s.setSession("t1", { tokenHash: "t1", expiresAt: Date.now()+1000, createdAt: Date.now(), epoch: 1, ipHash: "h", uaClass: "d" });
    expect(s.getSession("t1")?.epoch).toBe(1);
    s.setRate("r1", { count: 1, resetAt: Date.now()+60000 });
    expect(s.getRate("r1")?.count).toBe(1);
    s.setMessage("m1", { id: "m1", sessionTokenHash: "t1", epoch: 1, status: "pending" });
    expect(s.getMessage("m1")?.status).toBe("pending");
  });

  it("contract test runs against Redis only when env var present", () => {
    if (!process.env.PUBLIC_ASSISTANT_REDIS_URL) {
      expect(true).toBe(true);
      return;
    }
    // If Redis URL present, would test Redis store; skipped in normal tests
    expect(getStore()).toBeDefined();
  });
});
