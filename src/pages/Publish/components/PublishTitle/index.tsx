import { PublishTitleContainer } from './styles'
import { relativeDateFormatter } from '../../../../utils/formatter'
import { LocationType } from '../..'
import { Link } from 'react-router-dom'

export function PublishTitle({ state }: LocationType) {
  const formattedDate = relativeDateFormatter(state.created_at)

  return (
    <PublishTitleContainer>
      <nav>
        <Link to={'/'}>
          <i className="fa-solid fa-chevron-left"></i>
          <span>VOLTAR</span>
        </Link>
        <a href={state.html_url}>
          <span>VER NO GITHUB</span>
          <i className="fa-solid fa-arrow-up-right-from-square "></i>
        </a>
      </nav>
      <h1>{state.title}</h1>
      <div>
        <div className="titleDescriptions">
          <div>
            <i className="fa-brands fa-github fa-lg"></i>
            <span>{state.user.login}</span>
          </div>
          <div>
            <i className="fa-solid fa-calendar fa-lg"></i>
            <span>{formattedDate}</span>
          </div>
          <div>
            <i className="fa-solid fa-comment fa-lg"></i>
            <span>{state.comments} comentários</span>
          </div>
        </div>
      </div>
    </PublishTitleContainer>
  )
}
