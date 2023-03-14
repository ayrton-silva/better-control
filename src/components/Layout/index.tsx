import { ReactNode } from 'react'
import { Sidebar } from '../Sidebar'
import { LayoutContainer } from './styles'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <Sidebar />
      <main>{children}</main>
    </LayoutContainer>
  )
}
