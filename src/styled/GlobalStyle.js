// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';
import { color } from './common';

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
	
  body {
      background-color: ${color.gray[800]}; 
      font-size: 16px;
      line-height: 1.6;
      font-family: 'Noto Sans', sans-serif;
      color: ${color.white}; 
      margin: 0;
      padding: 0;
  }

  a {
      text-decoration: none;
      color:${color.gray[80]}; 
  }

  li { list-style: none; }

  img { vertical-align: top; }

`;

export const respondTo = (breakpoint) => {
  const sizes = {
    mobile: 768,
    tablet: 1024,
    desktop: 2550,
  };

  switch (breakpoint) {
    case 'mobile':
      return `@media (max-width: ${sizes.mobile}px)`;
    case 'tablet':
      return `@media (min-width: ${sizes.mobile + 1}px) and (max-width: ${sizes.tablet}px)`;
    case 'desktop':
      return `@media (min-width: ${sizes.tablet + 1}px) and (max-width: ${sizes.desktop}px)`;
    default:
      return '';
  }
};

export default GlobalStyle;
