import { useForm } from 'react-hook-form'
import { SearchUserContainer } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import * as z from 'zod'
import { useState } from 'react'

const schema = z.object({
  user: z.string().min(1, { message: 'Informe o nome do usuário' }),
})

export type UserData = z.infer<typeof schema>

type ConfirmUserSearch = UserData

export function SearchUser() {
  const { data, setData } = useState()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmUserSearch>({
    resolver: zodResolver(schema),
  })

  function onSubmit(data: ConfirmUserSearch) {
    console.log(data)
  }

  /* 
  const navigate = useNavigate()

  function onSubmit(data: ConfirmUserSearch) {
    setData(data)

    navigate('Avatar', {
      state: data,
    })
  } */

  return (
    <SearchUserContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Buscar usuário" {...register('user')} />
        <button type="submit">Buscar</button>
        {errors.user?.message && <p>{errors.user?.message}</p>}
      </form>
    </SearchUserContainer>
  )
}
