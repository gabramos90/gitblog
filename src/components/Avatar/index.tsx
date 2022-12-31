import { AvatarContainer } from './styles'
import avatarPicture from '../../assets/avatar.png'
import '@fortawesome/fontawesome-free/css/all.min.css'

export function Avatar() {
  return (
    <AvatarContainer>
      <img src={avatarPicture} alt="" />
      <div>
        <div className="avatarName">
          <h1>Cameron Williamson</h1>
          <a href="#">
            github
            <i className="fa-sharp fa-solid fa-up-right-from-square"></i>
          </a>
        </div>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div className="avatarInfo">
          <span>
            <i className="fa-brands fa-github fa-lg"></i>cameronwll
          </span>
          <span>
            <i className="fa-solid fa-building fa-lg"></i>Rocketseat
          </span>
          <span>
            <i className="fa-solid fa-user fa-lg"></i>32 seguidores
          </span>
        </div>
      </div>
    </AvatarContainer>
  )
}
