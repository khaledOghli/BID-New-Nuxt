// install : "@nuxtjs/tailwindcss": "^6.12.0",
// "@tailwindcss/aspect-ratio": "^0.4.2",
// "@tailwindcss/forms": "^0.5.7",
// "@tailwindcss/typography": "^0.5.13",
// "tailwindcss": "^3.4.3",
// "tailwind-variants": "^0.2.1"
module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './server/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      colors: {
        light: {
          0: '#FFFFFF',
          50: '#F7F7F7',
          100: '#F7F7F7',
          200: '#F2F2F2',
          300: '#EDEDED',
          400: '#E8E8E8',
          500: '#E3E3E3',
          600: '#DEDEDE',
          700: '#D9D9D9',
          800: '#D4D4D4',
          900: '#CFCFCF',
        },
        primary: {
          100: '#F64E60',
          200: '#a50a2e',
        },
        secondary: {
          100: '#fdbb57',
          200: '#ee9c47',
        },
        aqua: '#39c0ed',
        violet: '#b294fd',
        base: {
          100: '#2A303C',
        },
      },
      textColor: {
        skin: {},
      },
      backgroundColor: {
        skin: {},
      },
      fontFamily: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
