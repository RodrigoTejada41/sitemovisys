/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        movisys: {
          navy: '#06131d',
          ink: '#0b1c27',
          cyan: '#4dd5f5',
          muted: '#5d6d75',
          surface: '#f3f5f3',
        },
      },
      boxShadow: {
        'client-card': '0 18px 50px rgba(6, 19, 29, 0.08)',
      },
    },
  },
  plugins: [],
};
