import { createGlobalStyle } from 'styled-components';
import NunitoRegularWoff2 from './fonts/nunito-v9-latin-regular.woff2';
import NunitoRegularWoff from './fonts/nunito-v9-latin-regular.woff';
import NunitoItalicWoff2 from './fonts/nunito-v9-latin-italic.woff2';
import NunitoItalicWoff from './fonts/nunito-v9-latin-italic.woff';
import NunitoBoldWoff2 from './fonts/nunito-v9-latin-700.woff2';
import NunitoBoldWoff from './fonts/nunito-v9-latin-700.woff';
import NunitoBoldItalicWoff2 from './fonts/nunito-v9-latin-700italic.woff2';
import NunitoBoldItalicWoff from './fonts/nunito-v9-latin-700italic.woff';

const GlobalStyle = createGlobalStyle`
  /* nunito-regular - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    src: local('Nunito Regular'), local('Nunito-Regular'),
         url('${NunitoRegularWoff2}') format('woff2'),
         url('${NunitoRegularWoff}') format('woff');
  }
  /* nunito-italic - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: italic;
    font-weight: 400;
    src: local('Nunito Italic'), local('Nunito-Italic'),
         url('${NunitoItalicWoff2}') format('woff2'),
         url('${NunitoItalicWoff}') format('woff');
  }
  /* nunito-700 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    src: local('Nunito Bold'), local('Nunito-Bold'),
         url('${NunitoBoldWoff2}') format('woff2'),
         url('${NunitoBoldWoff}') format('woff');
  }
  /* nunito-700italic - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: italic;
    font-weight: 700;
    src: local('Nunito Bold Italic'), local('Nunito-BoldItalic'),
         url('${NunitoBoldItalicWoff2}') format('woff2'),
         url('${NunitoBoldItalicWoff}') format('woff');
  }

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
  }

  input {
    height: 48px;
  }

  textarea {
    resize: none;
  }

  input, textarea {
    border-radius: 4px;
    border: 1px solid ${props => props.theme.neutral200};
    background: #fff;
    padding: 16px;
  }
`;

export default GlobalStyle;
