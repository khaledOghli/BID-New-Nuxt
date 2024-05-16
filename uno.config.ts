import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'
import presetWind from '@unocss/preset-wind'

export default defineConfig({
  theme: {
    colors: {
      primary: {
        default: '#fd5362',
        50: '#fbeff0',
        100: '#febac0',
        200: '#fe98a1',
        300: '#fe8791',
        400: '#fd6472',
        500: '#fd5362',
        600: '#fd3e4f',
        700: '#fc2134',
        800: '#ca424e',
        900: '#98323b',
      },
      secondary: {
        default: '#fdbb57',
        50: '#fff7e9',
        100: '#feddab',
        200: '#fed69a',
        300: '#fecf89',
        400: '#fdc268',
        500: '#fdbb57',
        600: '#fdb446',
        700: '#fca725',
        800: '#fc9903',
        900: '#da8503',
      },
      blue: {
        50: '#E1F0FF',
        100: '#9ec4fe',
        200: '#8ab8fd',
        300: '#77acfd',
        400: '#5094fc',
        500: '#3d88fc',
        600: '#2a7bfc',
        700: '#1d6dfc',
        800: '#0f5ffc',
        900: '#0048fc',
      },
    },
    // breakpoints: {
    //   'sm': '640px',
    //   'md': '768px',
    //   'lg': '1024px',
    //   'xl': '1280px',
    //   '2xl': '1536px',
    // },
  },
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
    [
      'icon-btn',
      'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetScrollbar({
      // config
    }),
    presetWind(),
  ],
  // layers: {
  //   'components': -1,
  //   'default': -3,
  //   'utilities': -2,
  //   'my-layer': 3,
  //   'primevue': 4,
  // },

  transformers: [transformerDirectives(), transformerVariantGroup()],
})
