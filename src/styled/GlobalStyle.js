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
      color: inherit;
     // color:${color.gray[80]}; 

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
  font-family: inherit; 
  font-size: inherit; 
}

//전역 스와이퍼 스타일
.swiper-wrapper {
  width: 100%;
  margin: 0 auto;
}

.swiper-slide {
	overflow: hidden;
	border-radius: 12px;

}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
	/* border-radius: 16px; */
}
.swiper-pagination {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .swiper-pagination-bullet {
display: none;
  }
  .swiper-pagination-bullet-active {
    background: #000;
    opacity: 1;
    color: ${color.gray[70]};
  }



.blind,
caption,
legend {
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
}

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}

.two-line-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 원하는 줄 수 설정 */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* body.nav-open {
  overflow: hidden;
  
  .swiper-container {
    overflow: visible !important;
  }
} */

  body {
  overflow-y: scroll;
  scrollbar-gutter: stable;
}

body.nav-open {
  overflow: hidden;
  padding-right: var(--scrollbar-width);
}
`;

export const respondTo = (breakpoint) => {
  const sizes = {
    mobile: 600,
    tablet: 1279, // 기존 1024px → 1279px로 수정
    desktop: 1280, // 기존 laptop을 desktop으로 변경
  };

  switch (breakpoint) {
    case 'mobile':
      return `@media (max-width: ${sizes.mobile}px)`;
    case 'tablet':
      return `@media (min-width: ${sizes.mobile + 1}px) and (max-width: ${sizes.tablet}px)`;
    case 'tabletMore':
      return `@media (min-width: ${sizes.mobile + 1}px)`;
    case 'desktop':
      return `@media (min-width: ${sizes.desktop}px)`; // 기존 laptop을 desktop으로 변경
    default:
      return '';
  }
};

export default GlobalStyle;
