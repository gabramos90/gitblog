import { useFormContext } from 'react-hook-form'
import { SearchUserContainer } from './styles'

export function SearchUser() {
  /*    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmUserSearch>({
    resolver: zodResolver(schema),
  }) */

  const { register } = useFormContext()

  return (
    <SearchUserContainer>
      <input type="text" placeholder="Buscar usuário" {...register('user')} />
      <button type="submit">Buscar</button>
    </SearchUserContainer>
  )
}
