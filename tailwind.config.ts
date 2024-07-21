import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'custom-radial': 'radial-gradient(circle, hsla(212, 29%, 36%, 1) 0%, hsla(219, 37%, 17%, 1) 100%)',  
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
        fadeOut: {
          '0%': { opacity: '100%' },
          '100%': { opacity: '0%' },
        },
      },
      animation: { 
        fadeIn: 'fadeIn 0.35s ease-in-out forwards',
        fadeOut: 'fadeOut 0.35s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
