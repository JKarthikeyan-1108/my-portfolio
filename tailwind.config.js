/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a192f',
          light: '#112240',
          lighter: '#233554',
        },
        slate: {
          light: '#ccd6f6',
          DEFAULT: '#8892b0',
        },
        cyan: {
          DEFAULT: '#64ffda',
          light: 'rgba(100, 255, 218, 0.1)',
        },
        purple: {
          DEFAULT: '#8b5cf6',
          light: 'rgba(139, 92, 246, 0.1)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'glow-pattern': 'radial-gradient(circle at 15% 50%, rgba(100, 255, 218, 0.05), transparent 25%), radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.05), transparent 25%)',
      }
    },
  },
  plugins: [],
}
