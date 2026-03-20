/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f0fdf4',
          500: '#10b981',
          600: '#059669',
          900: '#065f46',
        },
      },
      animation: {
        'typewriter': 'typewriter 4s steps(40) infinite',
        'blink': 'blink 1s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.4)',
        'primary-500/20': '0 0 20px rgba(59, 130, 246, 0.2)',
        'primary-500/40': '0 0 40px rgba(59, 130, 246, 0.4)',
      },
      shadows: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.4)',
        'primary-500/20': '0 0 20px rgba(59, 130, 246, 0.2)',
        'primary-500/40': '0 0 40px rgba(59, 130, 246, 0.4)',
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
          '100%': { width: '0%' },
        },
        blink: {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: 'currentColor' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 5px currentColor' },
          '100%': { textShadow: '0 0 20px currentColor, 0 0 30px currentColor' },
        },
      },
    },
  },
  plugins: [],
}

