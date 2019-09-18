import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  
  ${styledNormalize}

  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,600&display=swap');

  body {
    font-family: 'IBM Plex Sans', sans-serif;
  }

  html, body {
	height: 100%;
	font-size: 1em;
	margin: auto;
	box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

  p {
    font-size: 1rem;
  }

  button {
    border: none;
    background-color: inherit;
  }
`;

export default GlobalStyle;
