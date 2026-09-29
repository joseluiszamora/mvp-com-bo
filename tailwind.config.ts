import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F26522",
        ember: "#E05A1A",
        ink: "#181818",
        canvas: "#EFEFEF",
        mist: "#F5F5F5",
        secondary: "#0F766E",
        accent: "#F59E0B",
        dark: "#111827",
        gray: "#6B7280",
        light: "#F8FAFC",
      },
      maxWidth: { studio: "1440px" },
      fontSize: {
        hero: [
          "clamp(2rem, 5vw, 4.2rem)",
          { lineHeight: "1.08", letterSpacing: "-0.03em" },
        ],
        editorial: [
          "clamp(1.8rem, 4vw, 3.2rem)",
          { lineHeight: "1.12", letterSpacing: "-0.02em" },
        ],
      },
      aspectRatio: { studio: "438 / 346", project: "329 / 246" },
      gridTemplateColumns: { studio: "26% 1fr 43%" },
      transitionTimingFunction: { roll: "cubic-bezier(0.25,0.1,0.25,1)" },
      keyframes: {
        "hero-in": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "hero-soft": { "0%": { opacity: "0", transform: "translateY(12px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "hero-stat": { "0%": { opacity: "0", transform: "translateY(14px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
      animation: {
        "hero-in": "hero-in 900ms cubic-bezier(0.16,1,0.3,1) both",
        "hero-soft": "hero-soft 1000ms cubic-bezier(0.16,1,0.3,1) both",
        "hero-stat": "hero-stat 750ms cubic-bezier(0.16,1,0.3,1) both",
      },
      backgroundImage: {
        "hero-fallback":
          "repeating-linear-gradient(121deg, transparent 0px, rgba(255,255,255,0.24) 5px, rgba(255,255,255,0.02) 18px, rgba(100,40,10,0.09) 35px, transparent 45px), radial-gradient(ellipse at 85% 10%, #ff5f03 0%, #ff925a 18%, transparent 55%), linear-gradient(125deg, #efefef 30%, #f4d1bf 100%)",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
