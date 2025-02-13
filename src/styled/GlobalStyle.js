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

//전역 스와이퍼 스타일
.swiper {
  width: 100%;
  overflow: hidden;
  margin: 72px 0 90px 0 ;
  position: relative;
  min-width: 1240px;
  max-width: 3840px;
  min-width: 390px;
  min-height: 226px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
	background-color: ${color.gray[50]};
  display: flex;
  justify-content: center;
  align-items: center;
	overflow: hidden;
	border-radius: 16px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
	border-radius: 16px;
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

	//현재 버튼 안나타나서 수정 필요
	.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${color.gray[70]};
  font-size: 20px; /* 세로 높이(폰트 크기) 20px */
  line-height: 20px;
  padding: 0;
}
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background: rgba(0, 0, 0, 0.6);
  }
  /* 버튼 위치를 좌우로 조정(예시) */
	.swiper-button-prev {
  left: 30px;
}
.swiper-button-next {
  right: 30px;
}
.swiper-button-prev::after,
.swiper-button-next::after {
  font-family: 'Noto Sans KR', sans-serif; /* 기본 폰트 사용 */
  font-weight: bold;
}
.swiper-button-prev::after {
  content: '<';
}
.swiper-button-next::after {
  content: '>';
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
