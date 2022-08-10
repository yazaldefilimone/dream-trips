import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --highlight: #e20e8d;
    --background:#030518;
    --white: #eeee;
    --container: 100rem;
    --small:1.5rem;
    --medium:3rem;
    --large: 5rem;
  }
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  html {
    font-size: 65.5%;
  }
  html,
  body,
  #__next{
    height: 100%;
    background: var(--background);
    color: var(--white);
  }
  p{
    font-size: 2rem;
    line-height: var(--medium);
  }
  a {
    color: var(--highlight);
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
