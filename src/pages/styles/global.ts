import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$grey-900',
    color: '$white',
  },

  'body, input, textarea, button': {
    fontFamily: 'Inter',
    fontWeight: 400,
  },

  a: {
    textDecoration: 'none',
    color: 'inherit',

    '&:visited': {
      textDecoration: 'none',
    },
  },
})
