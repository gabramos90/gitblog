import styled from 'styled-components'

export const PostContainer = styled.section`
  max-width: 416px;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  flex: 1;

  padding: 2rem;
  border-radius: 10px;
  border: 1px solid transparent;

  background-color: ${(props) => props.theme['slate-600']};
  cursor: pointer;

  &:hover {
    border: 1px solid ${(props) => props.theme['slate-400']};
    transition: all 0.2s;

    filter: brightness(1.2);
  }

  div {
    display: flex;
    justify-content: space-between;

    h3 {
      max-width: 16rem;
      color: ${(props) => props.theme['slate-50']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['slate-200']};
    }
  }

  p {
    color: ${(props) => props.theme['slate-200']};

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

    margin-top: 1.25rem;
  }
`
