import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        panel: "#0d0d0f",
        line: "rgba(255,255,255,0.08)",
        ivory: "#f5efe9",
        ember: "#ff6a1a",
        sand: "#d7d0c8"
      },
      boxShadow: {
        panel: "0 20px 80px rgba(0,0,0,0.28)",
        glow: "0 0 120px rgba(255,106,26,0.22)"
      },
      borderRadius: {
        xl2: "1.75rem"
      },
      backgroundImage: {
        grid: "radial-gradient(circle at top, rgba(255,255,255,0.09), transparent 55%)"
      },
      fontFamily: {
        sans: ["Inter", "Satoshi", "General Sans", "Neue Montreal", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        hero: "-0.06em"
      }
    }
  },
  plugins: []
};

export default config;
