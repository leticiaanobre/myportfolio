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
      animation: {
        'bounce-slow': 'bounce 4s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'scroll': 'scroll 40s linear infinite',
        'scroll-reverse': 'scroll-reverse 40s linear infinite',
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(0)', 
          },
          '50%': {
            transform: 'translateY(-20px)', 
          },
        },
        'fadeIn': {
          '0%': { opacity: "0", transform: 'translateY(10px)' },
          '100%': { opacity: "1", transform: 'translateY(0)' },
        },
        'scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'scroll-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
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
