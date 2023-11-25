import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css");
  * {
    box-sizing: border-box;
  }
  
  html,
  body {
    max-width: 43rem;

    font-size: 10px;
  }
`;

export default GlobalStyle;
