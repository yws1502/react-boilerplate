/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'flow-right': 'flow-right 2.5s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
      },
      keyframes: {
        'flow-right': {
          '0%': { transform: 'translateX(-10%)', opacity: '0.3' },
          '50%': { transform: 'translateX(10%)', opacity: '0.7' },
          '100%': { transform: 'translateX(-10%)', opacity: '0.3' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
};
