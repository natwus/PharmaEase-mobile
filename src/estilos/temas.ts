import { extendTheme } from 'native-base'

export const TEMAS = extendTheme({
  colors: {
    gray: {
      300: '#8D8D99'
    },
    red: {
      500: '#DF0101',
      800: '#E452'
    },
    white: '#eee',
    black: '#333'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24
  }
})