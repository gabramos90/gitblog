import styled from 'styled-components'

export const AvatarContainer = styled.section`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  margin-top: -5rem;

  border-radius: 10px;
  position: absolute;
  width: 864px;

  background-color: ${(props) => props.theme['slate-600']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    width: 148px;
    height: 148px;

    border-radius: 10px;
  }

  div {
    flex: 1;
    p {
      margin-top: 8px;
    }

    div {
      margin-top: 24px;
    }
  }

  .avatarName {
    display: flex;

    justify-content: space-between;

    a {
      display: flex;
      gap: 0.3rem;
      text-align: center;

      text-transform: uppercase;
      text-decoration: none;
      color: ${(props) => props.theme['blue-500']};
    }
  }

  .avatarInfo {
    display: flex;
    align-items: center;
    gap: 2rem;

    span {
      i {
        margin-right: 0.5rem;

        color: ${(props) => props.theme['slate-400']};
      }
    }
  }
`
