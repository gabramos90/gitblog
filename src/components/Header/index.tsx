import { HeaderContainer } from './styles'
import logoGit from '../../assets/git-logo.svg'
import backgroundEffectLeft from '../../assets/backgroundEffectLeft.svg'
import backgroundEffectRight from '../../assets/backgroundEffectRight.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={backgroundEffectLeft} alt="" />
      <img src={logoGit} alt="" />
      <img src={backgroundEffectRight} alt="" />
    </HeaderContainer>
  )
}
