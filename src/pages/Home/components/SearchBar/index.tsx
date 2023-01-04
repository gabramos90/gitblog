import { useFormContext } from 'react-hook-form'
import { SearchBarContainer } from './styles'

interface Props {
  issuesCounter: number
}

export function SearchBar({ issuesCounter }: Props) {
  const { register } = useFormContext()

  return (
    <SearchBarContainer>
      <div className="form">
        <div>
          <label htmlFor="">
            <strong>Publicações</strong>
          </label>
          <span>{issuesCounter} publicações</span>
        </div>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </div>
    </SearchBarContainer>
  )
}
