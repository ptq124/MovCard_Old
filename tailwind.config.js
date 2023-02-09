/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        twinkle: 'twinkle 4s infinite',
        twinkle2: 'twinkle2 4s infinite',
      },
      keyframes: {
        twinkle: {
          '0%': { background: 'transparent' },
          '30%': { background: 'rgba(255, 255, 255, 0.6)' },
          '50%': {
            background: '#FFFFFF',
            'box-shadow': '0px 4px 4px 31px rgba(99, 123, 248, 0.25)',
            filter: 'blur(14.5px)',
          },
          '80%': { background: 'rgba(255, 255, 255, 0.6)' },
          '100%': { background: 'transparent' },
        },
        twinkle2: {
          '0%': {
            background: '#FFFFFF',
            'box-shadow': '0px 4px 4px 31px rgba(99, 123, 248, 0.25)',
            filter: 'blur(14.5px)',
          },
          '25%': { background: 'rgba(255, 255, 255, 0.6)' },
          '50%': { background: 'transparent' },
          '75%': { background: 'rgba(255, 255, 255, 0.6)' },
          '100%': {
            background: '#FFFFFF',
            'box-shadow': '0px 4px 4px 31px rgba(99, 123, 248, 0.25)',
            filter: 'blur(14.5px)',
          },
        },
        twinkle3: {
          '0%': { background: 'transparent' },
          '50%': { background: 'rgba(255, 255, 255, 0.6)' },
          '100%': { background: 'transparent' },
        },
      },
    },
  },
  plugins: [],
}
