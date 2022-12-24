import {
  extendTheme,
  ThemeOverride,
  withDefaultColorScheme,
} from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const overrides: ThemeOverride = {
  colors: {
    gray: {
      '50': '#E1E1E6',
      '100': '#C4C4CC',
      '200': '#8D8D99',
      '300': '#7C7C8A',
      '400': '#505059',
      '500': '#323238',
      '600': '#29292E',
      '700': '#202024',
      '800': '#121214',
      '900': '#09090A',
    },
    teal: {
      '50': '#E5FFF7',
      '100': '#B8FFEA',
      '200': '#8AFFDC',
      '300': '#5CFFCF',
      '400': '#2EFFC1',
      '500': '#00FFB3',
      '600': '#00CC90',
      '700': '#00996C',
      '800': '#006648',
      '900': '#003324',
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
}

export const theme = extendTheme(overrides)
