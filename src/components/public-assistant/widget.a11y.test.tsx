import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import type { ConfigBody, StatusBody } from "@/lib/public-assistant/contract";
import { copy } from "./copy/en-US";

// Widget-level behaviour (WF01, WF02, WF11, WF12) against a mocked API client.

vi.mock("next/navigation", () => ({ usePathname: () => "/" }));

// next/dynamic doesn't load in jsdom; React.lazy gives the same deferred render.
vi.mock("next/dynamic", async () => {
  const React = await import("react");
  return {
    default: (load: () => Promise<React.ComponentType<object>>) => {
      const Lazy = React.lazy(() => load().then((C) => ({ default: C })));
      return (props: object) => React.createElement(React.Suspense, { fallback: null }, React.createElement(Lazy, props));
    },
  };
});

const api = vi.hoisted(() => ({
  get: vi.fn(),
  post: vi.fn(),
  postWithSession: vi.fn(),
  streamEvents: vi.fn(),
}));
vi.mock("./api/client", async (importOriginal) => ({ ...(await importOriginal<object>()), ...api }));

import { PublicAssistantMount } from "./PublicAssistantMount";
import { Feedback } from "./shared/Feedback";

const CONFIG: ConfigBody = {
  display_name: "ZoikoShield Assistant",
  clearance: "public",
  flags: {
    assistant_launcher: true,
    assistant_ai_answers: false,
    assistant_lead_submit: false,
    assistant_support_submit: false,
    assistant_trust_gated: false,
    assistant_public_pricing: false,
    assistant_connector_claims: false,
    assistant_privacy_write: false,
    assistant_kill: false,
  },
  routes: [{ route_key: "contact", label: "Contact ZoikoShield", url: "/contact" }],
  markets: [],
  intake: { DEMO: false, SUPPORT: false, QUOTE: false, TRUST_ACCESS: false, TECH_EVAL: false, ONBOARDING: false, PRIVACY: false },
  policy_versions: { notice: null, answer_policy: "test" },
};
const ENABLED: StatusBody = { state: "enabled", mode: "static", fallback_links: [] };

let mobile = false;

function serve(config: ConfigBody | null, status: StatusBody) {
  api.get.mockImplementation((path: string) => {
    if (path === "config") return config ? Promise.resolve(config) : Promise.reject(new Error("down"));
    if (path === "status") return Promise.resolve(status);
    return Promise.resolve({});
  });
}

beforeEach(() => {
  mobile = false;
  // Load config/status immediately instead of waiting for the browser to go idle.
  (window as { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback = (cb) => (cb(), 1);
  window.matchMedia = ((query: string) => ({ matches: mobile, media: query, addEventListener() {}, removeEventListener() {} })) as unknown as typeof window.matchMedia;
  Element.prototype.scrollTo = () => {};
  Element.prototype.scrollIntoView = () => {};
  serve(CONFIG, ENABLED);
  api.post.mockResolvedValue({});
  api.postWithSession.mockResolvedValue({});
  api.streamEvents.mockResolvedValue(undefined);
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

async function openPanel() {
  const user = userEvent.setup();
  render(<PublicAssistantMount />);
  const launcher = await screen.findByRole("button", { name: copy.launcher.open });
  await user.click(launcher);
  const dialog = await screen.findByRole("dialog");
  return { user, launcher, dialog };
}

describe("WF01 launcher and panel", () => {
  it("renders no launcher when the service is disabled", async () => {
    serve(CONFIG, { ...ENABLED, state: "disabled" });
    const { container } = render(<PublicAssistantMount />);
    await waitFor(() => expect(api.get).toHaveBeenCalledWith("status"));
    expect(container).toBeEmptyDOMElement();
  });

  it("renders no launcher when config can't be loaded", async () => {
    serve(null, ENABLED);
    const { container } = render(<PublicAssistantMount />);
    await waitFor(() => expect(api.get).toHaveBeenCalledWith("config"));
    expect(container).toBeEmptyDOMElement();
  });

  it("AT001 launcher is present and focusable; the panel doesn't auto-open or start a session", async () => {
    render(<PublicAssistantMount />);
    const launcher = await screen.findByRole("button", { name: copy.launcher.open });
    launcher.focus();
    expect(launcher).toHaveFocus();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(api.postWithSession).not.toHaveBeenCalled();
  });

  it("AT004 opens as a non-modal dialog on desktop; Escape closes it and focus returns to the launcher", async () => {
    const { user, launcher, dialog } = await openPanel();
    expect(dialog).not.toHaveAttribute("aria-modal", "true");
    expect(launcher).toHaveAttribute("aria-expanded", "true");
    await user.keyboard("{Escape}");
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
    await waitFor(() => expect(screen.getByRole("button", { name: copy.launcher.open })).toHaveFocus());
  });

  it("AT005 is modal on mobile", async () => {
    mobile = true;
    const { dialog } = await openPanel();
    expect(dialog).toHaveAttribute("aria-modal", "true");
  });
});

describe("WF02 conversation", () => {
  it("AT015 a sent message gets one answer in a role=log thread", async () => {
    api.postWithSession.mockImplementation((path: string) =>
      path === "messages"
        ? Promise.resolve({ message_id: null, answer: { outcome: "ANSWERED", blocks: [{ type: "paragraph", text: "Hello from ZoikoShield." }], citations: [], follow_ups: [] } })
        : Promise.resolve({}),
    );
    const { user } = await openPanel();
    await user.type(screen.getByLabelText(copy.composer.label), "Hi");
    await user.click(screen.getByRole("button", { name: copy.composer.send }));
    const log = await screen.findByRole("log");
    expect(await screen.findByText("Hello from ZoikoShield.")).toBeInTheDocument();
    expect(log).toContainElement(screen.getByText("Hello from ZoikoShield."));
    expect(api.postWithSession.mock.calls.filter(([p]) => p === "messages")).toHaveLength(1);
  });

  it("AT006 composer shows a counter from 1,800 and blocks sending past 2,000 code points", async () => {
    await openPanel();
    const box = screen.getByLabelText(copy.composer.label);
    const send = screen.getByRole("button", { name: copy.composer.send });
    expect(send).toBeDisabled(); // empty
    fireEvent.change(box, { target: { value: "a".repeat(1800) } });
    expect(screen.getByText(copy.composer.counter(1800, 2000))).toBeInTheDocument();
    expect(send).toBeEnabled();
    fireEvent.change(box, { target: { value: "😀".repeat(2001) } }); // code points, not UTF-16 units
    expect(box).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByText(copy.composer.tooLong(2000))).toBeInTheDocument();
    expect(send).toBeDisabled();
  });
});

describe("WF12 recovery", () => {
  it("AT326 closing the panel cancels an answer still in flight", async () => {
    api.postWithSession.mockImplementation((path: string) => (path === "messages" ? Promise.resolve({ message_id: "m-1" }) : Promise.resolve({})));
    // The stream stays open until it's aborted.
    api.streamEvents.mockImplementation((_id: string, _on: unknown, signal: AbortSignal) => new Promise((_, reject) => signal.addEventListener("abort", () => reject(new DOMException("Aborted", "AbortError")))));
    const { user } = await openPanel();
    await user.type(screen.getByLabelText(copy.composer.label), "What is ZoikoShield?");
    await user.click(screen.getByRole("button", { name: copy.composer.send }));
    await waitFor(() => expect(api.streamEvents).toHaveBeenCalled());
    // Send is disabled while busy, so focus has left it; press Escape on the dialog itself.
    fireEvent.keyDown(screen.getByRole("dialog"), { key: "Escape" });
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
    await waitFor(() => expect(api.post).toHaveBeenCalledWith("messages/m-1/cancel"));
  });
});

describe("WF11 feedback", () => {
  it("AT270 says thanks only after the server accepts it, and offers a retry when it fails", async () => {
    const user = userEvent.setup();
    api.postWithSession.mockRejectedValueOnce(new Error("down")).mockResolvedValueOnce({});
    render(<Feedback targetType="message" targetId="m-1" />);
    await user.click(screen.getByRole("button", { name: copy.thread.helpful }));
    expect(await screen.findByRole("alert")).toHaveTextContent(copy.thread.feedbackFailed);
    expect(screen.queryByText(copy.thread.thanks)).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: copy.thread.feedbackRetry }));
    expect(await screen.findByText(copy.thread.thanks)).toBeInTheDocument();
  });
});

describe("accessibility scan", () => {
  it("welcome view has no serious or critical axe violations", async () => {
    await openPanel();
    const results = await act(() => axe(document.body));
    const severe = results.violations.filter((v) => v.impact === "serious" || v.impact === "critical");
    expect(severe.map((v) => `${v.id}: ${v.help}`)).toEqual([]);
  });
});
