/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C3639', // Deep charcoal
          light: '#3F4E4F',   // Muted sage
        },
        accent: {
          DEFAULT: '#A27B5C', // Warm brown
          light: '#DCD7C9',   // Cream
        }
      },
      keyframes: {
        scroll: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      animation: {
        scroll: 'scroll 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};