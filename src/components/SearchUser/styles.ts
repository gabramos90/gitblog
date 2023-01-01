import styled from 'styled-components'

export const SearchUserContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;

  position: absolute;

  top: -11%;
  left: 38%;

  input {
    border: 1px solid ${(props) => props.theme['slate-500']};
    background-color: ${(props) => props.theme['slate-800']};
    color: ${(props) => props.theme['slate-200']};

    padding: 5px;
    border-radius: 5px;
  }

  button {
    padding: 5px;
    border-radius: 5px;

    background-color: ${(props) => props.theme['blue-500']};
    color: ${(props) => props.theme['slate-800']};

    cursor: pointer;
  }
`
