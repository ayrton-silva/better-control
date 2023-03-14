import {
  HouseSimple,
  Bank,
  Ticket,
  ArrowsLeftRight,
  MathOperations,
} from 'phosphor-react'
import Link from 'next/link'
import { LinkWrapper } from './styles'

type MenuLinkProps = {
  titleMenu: string
  iconMenu: string
  hrefLink: string
  currentUrl: string
}

export function MenuLink({
  iconMenu,
  titleMenu,
  hrefLink,
  currentUrl,
}: MenuLinkProps) {
  const isActive = currentUrl === hrefLink
  const iconWeight = isActive ? 'bold' : 'regular'

  let iconJsx = null

  switch (iconMenu) {
    case 'HouseSimple':
      iconJsx = <HouseSimple size={16} weight={iconWeight} />
      break
    case 'Bank':
      iconJsx = <Bank size={16} weight={iconWeight} />
      break
    case 'Ticket':
      iconJsx = <Ticket size={16} weight={iconWeight} />
      break
    case 'ArrowsLeftRight':
      iconJsx = <ArrowsLeftRight size={16} weight={iconWeight} />
      break
    case 'MathOperations':
      iconJsx = <MathOperations size={16} weight={iconWeight} />
      break
    default:
      iconJsx = null
  }

  return (
    <LinkWrapper isActive={isActive}>
      <Link href={hrefLink}>
        {iconJsx}
        <span>{titleMenu}</span>
      </Link>
    </LinkWrapper>
  )
}
