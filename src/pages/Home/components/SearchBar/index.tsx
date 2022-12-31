import { SearchBarContainer } from './styles'

export function SearchBar() {
  return (
    <SearchBarContainer>
      <form action="">
        <div>
          <label htmlFor="">
            <strong>Publicações</strong>
          </label>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
    </SearchBarContainer>
  )
}
