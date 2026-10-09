/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: 'var(--color-bg-primary)',
          light: 'var(--color-bg-secondary)',
          lighter: 'var(--color-bg-tertiary)',
        },
        slate: {
          light: 'var(--color-text-primary)',
          DEFAULT: 'var(--color-text-secondary)',
        },
        cyan: {
          DEFAULT: 'var(--color-accent)',
          light: 'var(--color-accent-transparent)',
        },
        purple: {
          DEFAULT: 'var(--color-accent-alt)',
          light: 'var(--color-accent-alt-transparent)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
