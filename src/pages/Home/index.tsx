import { Avatar } from '../../components/Avatar'
import { Post } from '../../components/Post'
import { SearchBar } from './components/SearchBar'
import { SearchUser } from '../../components/SearchUser'
import { HomeContainer, PostWrapper } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <SearchUser />
      <Avatar />
      <SearchBar />
      <PostWrapper>
        <Post />
        <Post />
        <Post />
      </PostWrapper>
    </HomeContainer>
  )
}
