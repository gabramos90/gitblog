import { PublishTitleContainer } from './styles'

export function PublishTitle() {
  return (
    <PublishTitleContainer>
      <nav>
        <a href="#">
          <i className="fa-solid fa-chevron-left"></i>
          <span>VOLTAR</span>
        </a>
        <a href="#">
          <span>VER NO GITHUB</span>
          <i className="fa-solid fa-arrow-up-right-from-square "></i>
        </a>
      </nav>
      <h1>JavaScript data types and data structures</h1>
      <div>
        <div className="titleDescriptions">
          <div>
            <i className="fa-brands fa-github fa-lg"></i>
            <span>cameronwll</span>
          </div>
          <div>
            <i className="fa-solid fa-calendar fa-lg"></i>
            <span>Há 1 dia</span>
          </div>
          <div>
            <i className="fa-solid fa-comment fa-lg"></i>
            <span>5 comentários</span>
          </div>
        </div>
      </div>
    </PublishTitleContainer>
  )
}
