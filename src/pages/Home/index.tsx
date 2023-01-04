/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar } from '../../components/Avatar'
import { Post } from '../../components/Post'
import { SearchBar } from './components/SearchBar'
import { HomeContainer, PostWrapper } from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'

const username = import.meta.env.VITE_GITHUB_USERNAME
const reponame = import.meta.env.VITE_GITHUB_REPONAME

export interface IssuesProps {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export const issuesFormValidationSchema = z.object({
  query: z.string(),
})

export type IssueValidattion = z.infer<typeof issuesFormValidationSchema>

type IssuesFormData = IssueValidattion

export function Home() {
  const [texto, setTexto] = useState('')
  const methods = useForm<IssuesFormData>()
  const [issues, setIssues] = useState<IssuesProps[]>([])

  function onSubmit(data: IssuesFormData) {
    return setTexto(data.query)
  }

  async function getIssuesData() {
    /* const response = await api.get(`/repos/${username}/${reponame}/issues`) */
    const response = await api.get(
      `search/issues?q=${texto}%20repo:${username}/${reponame}`,
    )
    const issuesData = await response.data.items

    setIssues(issuesData)
    console.log(issuesData)
  }

  useEffect(() => {
    getIssuesData()
  }, [texto])

  const issuesCounter = issues.length

  return (
    <HomeContainer>
      <Avatar />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <SearchBar issuesCounter={issuesCounter} />
        </form>
      </FormProvider>
      <PostWrapper>
        {issues.map((issue) => (
          <Post key={issue.number} issue={issue} />
        ))}
      </PostWrapper>
    </HomeContainer>
  )
}
