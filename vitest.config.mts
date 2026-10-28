import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
    // Every test request comes from one "IP"; real limits are covered by their own test.
    env: {
      PUBLIC_ASSISTANT_RATE_READ_PER_MIN: "100000",
      PUBLIC_ASSISTANT_RATE_WRITE_PER_MIN: "100000",
      PUBLIC_ASSISTANT_RATE_MESSAGE_PER_MIN: "100000",
      PUBLIC_ASSISTANT_RATE_SUBMIT_PER_MIN: "100000",
      // Tests never call a real model or inherit local flags from .env.local.
      PUBLIC_ASSISTANT_MODEL_PROVIDER: "mock",
      PUBLIC_ASSISTANT_FLAGS: "",
    },
  },
});
