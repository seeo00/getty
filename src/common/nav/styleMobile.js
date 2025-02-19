import styled from 'styled-components';
import { color } from '../../styled/common';

// 태블릿, 모바일
export const NavContainer = styled.nav`
  position: fixed;
  overflow-y: auto;
  top: 70px;
  left: -100%;
  width: 232px;
  height: calc(100vh - 70px);
  background-color: ${color.gray[800]};
  display: flex;
  flex-direction: column;
  z-index: 200;

  &.on {
    left: 0;
  }

  a {
    color: ${color.gray[70]};
    display: flex;
    align-items: center;
    padding: 16px 0;
    gap: 10px;
    justify-content: flex-start;
    //transition: color 0.3s;
    &:hover {
      color: ${color.white};
    }
  }
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  /* Chrome, Safari, Opera에서 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HighlightWrap = styled.div`
  padding: 0px 16px 32px 16px;
`;

export const GenreWrap = styled.div`
  position: relative;
  padding: 32px 16px 0px 16px;
  ::before {
    background-color: ${color.gray[500]};
    content: '';
    height: 1px;
    left: 16px;
    position: absolute;
    right: 16px;
    top: 0;
  }
`;

export const DimOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 199;
`;
