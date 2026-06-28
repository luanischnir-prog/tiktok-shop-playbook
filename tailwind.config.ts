import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        affiliates: "#534AB7",
        ads: "#993C1D",
        metrics: "#0F6E56",
        content: "#993556",
        operations: "#854F0B",
      },
    },
  },
  plugins: [],
  safelist: [
    { pattern: /border-l-\[#(534AB7|993C1D|0F6E56|993556|854F0B)\]/ },
    { pattern: /bg-\[#(534AB7|993C1D|0F6E56|993556|854F0B)\]/ },
    { pattern: /text-\[#(534AB7|993C1D|0F6E56|993556|854F0B)\]/ },
  ],
};

export default config;
