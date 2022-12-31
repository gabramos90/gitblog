import { Avatar } from '../../components/Avatar'
import { Post } from '../../components/Post'
import { SearchBar } from './components/SearchBar'
import { HomeContainer, PostWrapper } from './styles'

export function Home() {
  return (
    <HomeContainer>
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
