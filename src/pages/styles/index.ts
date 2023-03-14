import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  css,
} = createStitches({
  theme: {
    colors: {
      'grey-100': '#C4C4CC',
      'grey-400': '#505059',
      'grey-600': '#323238',
      'grey-900': '#29292E',
      'green-300': '#1FDE92',
      white: '#ffffff',
    },
  },
})
