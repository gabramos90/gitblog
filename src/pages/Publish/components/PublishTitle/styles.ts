import styled from 'styled-components'

export const PublishTitleContainer = styled.header`
  gap: 2rem;
  padding: 2rem;
  margin-top: -5.5rem;

  border-radius: 10px;
  position: absolute;
  width: 864px;

  background-color: ${(props) => props.theme['slate-600']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  nav {
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      font-size: 0.75rem;
      text-decoration: none;

      color: ${(props) => props.theme['blue-500']};
    }
  }

  h1 {
    margin-top: 1.25rem;
  }

  .titleDescriptions {
    display: flex;
    gap: 2rem;
    align-items: center;

    margin-top: 0.5rem;

    div {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      color: ${(props) => props.theme['slate-300']};
    }
  }
`
