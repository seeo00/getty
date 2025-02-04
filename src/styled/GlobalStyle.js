// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset Styles */
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  /* Global Styles */
  body {
      background-color: #000; /* 바디 배경을 검정색으로 설정 */
      font-size: 16px;
      line-height: 1.6;
      font-family: 'Noto Sans KR', sans-serif;
      color: #fff; /* 텍스트 색상을 흰색으로 설정 */
      margin: 0;
      padding: 0;
  }

  a {
      text-decoration: none;
      color: #989899; /* 링크 색상 흰색 */
  }

  li { list-style: none; }

  img { vertical-align: top; }

  /* 기타 글로벌 스타일 */
  /* ... */
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
