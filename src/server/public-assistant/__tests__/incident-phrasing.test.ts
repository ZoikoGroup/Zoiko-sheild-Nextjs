import { describe, expect, it } from "vitest";
import { classify } from "../safety/classifier";

describe("incident phrasing", () => {
  it.each([
    "We are under ransomware attack right now",
    "we're under attack",
    "We are currently facing a ransomware attack",
    "I am dealing with a breach at my company",
  ])("treats %j as an incident", (q) => {
    expect(classify(q).kind).toBe("incident");
  });

  it.each(["How does ZoikoShield detect ransomware?", "What is a ransomware attack?", "How does pricing work?"])("keeps %j answerable", (q) => {
    expect(classify(q).kind).not.toBe("incident");
  });
});
