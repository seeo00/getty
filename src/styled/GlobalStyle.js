// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { color } from './common';

const GlobalStyle = createGlobalStyle`

  ${reset}
  /* other styles */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  html {
    font-family: "Noto Sans KR", "Noto Sans", sans-serif;
}
  
  body {
      background-color: ${color.gray[800]}; 
      font-size: 16px;
      line-height: 1.5;
      font-family: "Noto Sans", "Noto Sans KR", sans-serif;
      color: ${color.gray[10]}; 
      overflow-x: hidden;
  }

  a {
      text-decoration: none;
      color:${color.gray[80]}; 
  }

  li { list-style:none }
  img { vertical-align: top; }

  button {
  font-size: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  border: 0 none;
  background: none;
  outline: none;
  cursor: pointer;
  color: inherit;
}

input, textarea, button {
  font-family: inherit; /* 부모 요소의 폰트 패밀리를 상속 */
  font-size: inherit; /* 부모 요소의 폰트 크기를 상속 */
}

`;

export const respondTo = (breakpoint) => {
  const sizes = {
    mobile: 600,
    tablet: 1024,
    laptop: 1279,
  };

  switch (breakpoint) {
    case 'mobile':
      return `@media (max-width: ${sizes.mobile}px)`;
    case 'tablet':
      return `@media (min-width: ${sizes.mobile + 1}px) and (max-width: ${sizes.tablet}px)`;
    case 'tabletMore':
      return `@media (min-width: ${sizes.mobile + 1}px)`;
    case 'laptop':
      return `@media (min-width: ${sizes.laptop + 1}px)`;
    case 'desktop':
      return `@media (min-width: ${sizes.tablet + 1}px)`;
    default:
      return '';
  }
};

export default GlobalStyle;
