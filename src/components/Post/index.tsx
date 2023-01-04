import { useNavigate } from 'react-router-dom'
import { IssuesProps } from '../../pages/Home'
import { relativeDateFormatter } from '../../utils/formatter'
import { PostContainer } from './styles'

interface Props {
  issue: IssuesProps
}

export function Post({ issue }: Props) {
  const formattedDate = relativeDateFormatter(issue.created_at)

  const navigate = useNavigate()

  function handleSelectIssue() {
    navigate(`/issue/${issue.number}`, {
      state: issue,
    })
  }

  return (
    <PostContainer onClick={handleSelectIssue}>
      <div>
        <h3>{issue.title}</h3>
        <span>{formattedDate}</span>
      </div>
      {issue.body <= '' ? <p>Esse post está vazio</p> : <p>{issue.body}</p>}
    </PostContainer>
  )
}
