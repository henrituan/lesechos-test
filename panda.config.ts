import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],
  exclude: [],
  conditions: {
    extend: {
      dark: "@media (prefers-color-scheme: dark)",
    },
  },
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          bg: {
            DEFAULT: {
              value: { base: "white", _dark: "#191919" },
            },
            neutral: {
              value: { base: "#f4f4f4", _dark: "#212121" },
            },
          },
          text: {
            DEFAULT: {
              value: { base: "#212121", _dark: "white" },
            },
          },
        },
        fontSizes: {
          title: {
            lg: {
              value: "30px",
            },
            md: {
              value: "22px",
            },
          },
          text: {
            md: {
              value: "16px",
            },
          },
        },
      },
    },
  },
  outdir: "styled-system",
});
