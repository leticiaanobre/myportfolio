// tailwind.config.js
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customPurple: {
          DEFAULT: '#BC3CD8',
          dark: '#8A2AB9',  
          light: '#D8A4E5',  
        },
        button: {
          DEFAULT: '#4A9FFF',
          dark: '#417AFF',  
          light: '#262AFD',  
        },
      },
    },
  },
  plugins: [],
};

export default config;
