const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      fontSize: {
        tiny: '0.75rem',
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('peer-0', '.peer + &');
    }),
  ],
};
