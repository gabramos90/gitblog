import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;

    }

    body {
        background: ${(props) => props.theme['slate-800']};
        color: ${(props) => props.theme['slate-200']};
        -webkit-font-smoothing: antialiased;
    }

    body, textarea, input, button {
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    h1, h2 {
        color: ${(props) => props.theme['slate-50']};
    }

    h1 {
        font-size: 1.5rem;
    }

    h2 {
        font-size: 1.125rem;
    }

    h3 {
        font-size: 1.25rem;
    }
`
