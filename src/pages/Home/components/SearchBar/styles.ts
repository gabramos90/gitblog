import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  padding-top: 13rem;
  display: flex;

  .form {
    display: flex;
    flex-direction: column;
    flex: 1;

    div {
      display: flex;
      justify-content: space-between;
      flex: 1;

      margin-bottom: 0.75rem;

      label {
        font-size: 1.115rem;
      }

      span {
        color: ${(props) => props.theme['slate-300']};
        font-size: 0.845rem;
      }
    }

    input {
      padding: 0.75rem;

      border: 1px solid ${(props) => props.theme['slate-500']};
      border-radius: 6px;

      background-color: ${(props) => props.theme['slate-900']};
      color: ${(props) => props.theme['slate-200']};
      flex: 1;
    }
  }
`
