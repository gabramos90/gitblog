/* eslint-disable react-hooks/exhaustive-deps */
import { IssuesProps } from '../Home'
import { PublishTitle } from './components/PublishTitle'
import { PublishWrapper } from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import { PublishContent } from './components/PublishContent'

export interface LocationType {
  state: IssuesProps
}

export function Publish() {
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])
  return (
    <PublishWrapper>
      <PublishTitle state={state} />
      <div className="postContent">
        <PublishContent content={state.body} />
      </div>
    </PublishWrapper>
  )
}
