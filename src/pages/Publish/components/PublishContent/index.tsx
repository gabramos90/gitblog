/* eslint-disable react/no-children-prop */
import { PublishContentContainer } from './styles'
import ReactMarkdown from 'react-markdown'

interface Props {
  content: string
}

export function PublishContent({ content }: Props) {
  return (
    <PublishContentContainer>
      <ReactMarkdown children={content} />
    </PublishContentContainer>
  )
}
