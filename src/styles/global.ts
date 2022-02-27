import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    padding: 0 2rem;
  }

  body, input, button {
    font-family: 'Space Mono', monospace !important;
    font-size: 1.125rem;
  }
`;