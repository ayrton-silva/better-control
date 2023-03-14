import { AsideContainer, LogoContainer, NavbarContainer } from './styles'
import logoImg from '@/assets/logo.svg'
import Image from 'next/image'
import { MenuLink } from './MenuLink'
import { useRouter } from 'next/router'

export function Sidebar() {
  const router = useRouter()
  const currentUrl = router.route

  return (
    <AsideContainer>
      <LogoContainer>
        <Image src={logoImg} alt="Logo da aplicação" />
      </LogoContainer>
      <NavbarContainer>
        <MenuLink
          titleMenu="Dashboard"
          iconMenu="HouseSimple"
          hrefLink="/"
          currentUrl={currentUrl}
        />
        <MenuLink
          titleMenu="Casas"
          iconMenu="Bank"
          hrefLink="/houses"
          currentUrl={currentUrl}
        />
        <MenuLink
          titleMenu="Apostas"
          iconMenu="Ticket"
          hrefLink="/bets"
          currentUrl={currentUrl}
        />
        <MenuLink
          titleMenu="Transações"
          iconMenu="ArrowsLeftRight"
          hrefLink="/transactions"
          currentUrl={currentUrl}
        />
        <MenuLink
          titleMenu="Simuladores"
          iconMenu="MathOperations"
          hrefLink="/simulators"
          currentUrl={currentUrl}
        />
      </NavbarContainer>
    </AsideContainer>
  )
}
