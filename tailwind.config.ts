import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        zoiko: {
          dark: "#0B1B26",
          beige: "#F5F2EB",
          card: "#FFFFFF",
          "card-hover": "#F9F8F6",
          border: "rgba(11, 27, 38, 0.08)",
          primary: "#A91D22",
          "primary-glow": "rgba(169, 29, 34, 0.15)",
          cyan: "#3A86C8",
          emerald: "#2E7D32",
          amber: "#D97706",
          purple: "#6B21A8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
        manrope: ["var(--font-manrope)", "sans-serif"],
        hanken: ["var(--font-hanken-grotesk)", "sans-serif"],
        jetbrains: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shield-glow": "shieldGlow 3s ease-in-out infinite alternate",
        "scan-line": "scanLine 2.5s linear infinite",
        // Public assistant: launcher hover, and the "searching" indicator while an answer is prepared.
        "zs-tilt": "zsTilt 0.6s ease-in-out",
        "zs-ring": "zsRing 1.2s ease-out infinite",
        "zs-scan": "zsScan 1.6s ease-in-out infinite",
        "zs-shimmer": "zsShimmer 2s linear infinite",
      },
      keyframes: {
        shieldGlow: {
          "0%": { boxShadow: "0 0 15px rgba(255, 42, 95, 0.2), inset 0 0 15px rgba(0, 240, 255, 0.1)" },
          "100%": { boxShadow: "0 0 35px rgba(255, 42, 95, 0.6), inset 0 0 25px rgba(0, 240, 255, 0.3)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        zsTilt: {
          "0%, 100%": { transform: "rotate(0deg) scale(1)" },
          "30%": { transform: "rotate(-10deg) scale(1.1)" },
          "60%": { transform: "rotate(8deg) scale(1.1)" },
        },
        zsRing: {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "100%": { transform: "scale(1.45)", opacity: "0" },
        },
        zsScan: {
          "0%": { transform: "translateY(-120%)", opacity: "0" },
          "15%, 85%": { opacity: "1" },
          "100%": { transform: "translateY(120%)", opacity: "0" },
        },
        zsShimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
