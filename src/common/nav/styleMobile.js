import styled from 'styled-components';
import { color } from '../../styled/common';

export const NavContainer = styled.nav`
  position: fixed;
  overflow-y: auto;
  color: ${color.gray[70]};
  top: 70px;
  left: -100%;
  width: 232px;
  height: calc(100vh - 70px);
  background-color: ${color.gray[800]};
  display: flex;
  flex-direction: column;
  z-index: 2000;
  transition: left 0.3s;

  &.on {
    left: 0;
  }

  a {
    display: flex;
    align-items: center;
    padding: 16px 0;
    gap: 10px;
    justify-content: flex-start;
    &:hover {
      color: ${color.white};
    }
    &.active {
      /* color: ${color.primary[300]}; */
      color: ${color.white};
    }
  }

  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HighlightWrap = styled.ul`
  padding: 0px 16px 32px 16px;
`;

export const GenreWrap = styled.ul`
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
  z-index: 1900;
`;
