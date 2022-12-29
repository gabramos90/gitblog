import { HeaderConatiner } from './styles'
import logoGit from '../../assets/git-logo.svg'

export function Header() {
  return (
    <HeaderConatiner>
      <img src={logoGit} alt="" />
    </HeaderConatiner>
  )
}
