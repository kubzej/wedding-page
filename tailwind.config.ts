import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        isabelline: {
          DEFAULT: "#edede9",
          100: "#34342a",
          200: "#676754",
          300: "#989881",
          400: "#c2c2b5",
          500: "#edede9",
          600: "#f0f0ed",
          700: "#f4f4f2",
          800: "#f8f8f6",
          900: "#fbfbfb",
        },
        timberwolf: {
          DEFAULT: "#d6ccc2",
          100: "#312921",
          200: "#625241",
          300: "#937a62",
          400: "#b6a391",
          500: "#d6ccc2",
          600: "#ded6ce",
          700: "#e7e0da",
          800: "#efebe7",
          900: "#f7f5f3",
        },
        linen: {
          DEFAULT: "#f5ebe0",
          100: "#473017",
          200: "#8e5f2e",
          300: "#c78f52",
          400: "#debd99",
          500: "#f5ebe0",
          600: "#f7efe6",
          700: "#f9f3ed",
          800: "#fbf7f3",
          900: "#fdfbf9",
        },
        champagne_pink: {
          DEFAULT: "#e3d5ca",
          100: "#38291e",
          200: "#70523b",
          300: "#a87b59",
          400: "#c5a891",
          500: "#e3d5ca",
          600: "#e8ddd4",
          700: "#eee6df",
          800: "#f4eeea",
          900: "#f9f7f4",
        },
        pale_dogwood: {
          DEFAULT: "#d5bdaf",
          100: "#33241b",
          200: "#664735",
          300: "#986b50",
          400: "#ba937c",
          500: "#d5bdaf",
          600: "#ddcabf",
          700: "#e6d7cf",
          800: "#eee4df",
          900: "#f7f2ef",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
