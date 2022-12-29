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
        color: ${(props) => props.theme['slate-50']};
        -webkit-font-smoothing: antialiased;
    }

    body, textarea, input, button {
       
    }
`
