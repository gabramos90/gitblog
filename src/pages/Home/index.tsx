import { Avatar } from '../../components/Avatar'
import { Post } from '../../components/Post'
import { SearchBar } from './components/SearchBar'
import { SearchUser } from '../../components/SearchUser'
import { HomeContainer, PostWrapper } from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import { useState } from 'react'

/* import * as z from 'zod'

const schema = z.object({
  user: z.string().min(1, { message: 'Informe o nome do usuário' }),
})

export type userLog = z.infer<typeof schema>

export type ConfirmUserSearch = userLog
 */
export interface UserProps {
  userLogin: string
}

export function Home() {
  const methods = useForm()
  const [userLog, setuserLog] = useState({ user: 'rafaballerini' })

  function onSubmit(userLogin: UserProps) {
    setuserLog(userLogin)
  }

  console.log(userLog.user)

  return (
    <HomeContainer>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <SearchUser />
          <Avatar userLog={userLog} />
          <SearchBar />
          <PostWrapper>
            <Post />
            <Post />
            <Post />
          </PostWrapper>
        </form>
      </FormProvider>
    </HomeContainer>
  )
}
