import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  // tsconfig keeps JSX as "preserve" for Next; tests need the automatic runtime (no React import per file).
  esbuild: { jsx: "automatic" },
  test: {
    environment: "jsdom",
    include: ["src/components/public-assistant/**/*.test.tsx"],
    globals: true,
    setupFiles: ["./src/components/public-assistant/test-setup.ts"],
    env: {
      PUBLIC_ASSISTANT_RATE_READ_PER_MIN: "100000",
      PUBLIC_ASSISTANT_RATE_WRITE_PER_MIN: "100000",
      PUBLIC_ASSISTANT_RATE_MESSAGE_PER_MIN: "100000",
      PUBLIC_ASSISTANT_RATE_SUBMIT_PER_MIN: "100000",
      PUBLIC_ASSISTANT_MODEL_PROVIDER: "mock",
      PUBLIC_ASSISTANT_FLAGS: "",
    },
  },
});
