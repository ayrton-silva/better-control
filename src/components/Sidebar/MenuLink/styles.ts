import { styled } from '@/pages/styles'

export const LinkWrapper = styled('div', {
  color: '$grey-100',
  position: 'relative',
  paddingLeft: '1rem',

  '&::before': {
    content: '',
    borderRadius: '0px 5px 5px 0px',
    background: '$green-300',
    width: 11,
    height: 22,
    position: 'absolute',
    left: '-1.5rem',
    top: '50%',
    transform: 'translate(-100%, -50%)',
    transition: 'transform .3s ease',
  },

  variants: {
    isActive: {
      true: {
        color: '$green-300',

        '&::before': {
          transform: 'translate(0, -50%)',
        },
      },
    },
  },

  a: {
    display: 'flex',
    alignItems: 'center',
  },

  svg: {
    marginRight: '1rem',
  },

  span: {
    fontSize: '0.875rem',
    fontWeight: 600,
  },
})
