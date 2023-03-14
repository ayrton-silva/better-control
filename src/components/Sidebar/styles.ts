import { styled } from '@/pages/styles'

export const AsideContainer = styled('aside', {
  width: 215,
  height: '100vh',
  position: 'sticky',
  top: 0,
  zIndex: 10,
  background: '$grey-600',
  padding: '2rem 1.5rem',
})

export const LogoContainer = styled('div', {
  maxWidth: 125,
  marginLeft: '1rem',
})

export const NavbarContainer = styled('nav', {
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  '&::after': {
    content: '',
    width: '100%',
    height: 1,
    background: '$grey-400',
    margin: '0.5rem auto 0',
  },
})
