import { AvatarContainer } from './styles'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { api } from '../../lib/axios'
import { useState, useEffect } from 'react'
import { UserData } from '../SearchUser'
import { useLocation } from 'react-router-dom'

interface DataProps {
  avatar_url: string
  name: string
  name_urt: string
  html_url: string
  bio: string
  login: string
  company: string
}

interface LocationType {
  state: UserData
}

export function Avatar() {
  const { state } = useLocation() as unknown as LocationType

  const [user, setUSer] = useState<DataProps>([])
  const [followers, setFollowers] = useState('')



  const userAPI = '/rafaballerini'
  const userAPIFollowers = '/rafaballerini/followers'

  async function getData() {
    const response = await api.get(userAPI)
    const userData = await response.data

    setUSer(userData)
  }

  async function getFollowers() {
    const response = await api.get(userAPIFollowers)
    const userFollowers = await response.data

    setFollowers(userFollowers)
  }

  useEffect(() => {
    getData()
    getFollowers()
  }, [])

  return (
    <AvatarContainer>
      <img src={user.avatar_url} alt="" />
      <div>
        <div className="avatarName">
          <h1>{user.name}</h1>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            github
            <i className="fa-sharp fa-solid fa-up-right-from-square"></i>
          </a>
        </div>
        {user.bio <= '' ? (
          <p>Esse usuário não possui descrição</p>
        ) : (
          <p>{user.bio}</p>
        )}
        <div className="avatarInfo">
          <span>
            <i className="fa-brands fa-github fa-lg"></i>
            {user.login}
          </span>
          <span>
            <i className="fa-solid fa-building fa-lg"></i>
            {user.company}
          </span>
          <span>
            <i className="fa-solid fa-user fa-lg"></i>
            {followers.length} seguidores
          </span>
        </div>
      </div>
    </AvatarContainer>
  )
}
