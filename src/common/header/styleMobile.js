import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';
import { color } from '../../styled/common';

// 모바일에서 아래에 생기는 BottomNav
export const BottomNavContainer = styled.header`
  display: none;
  ${respondTo('mobile')} {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 72px;
    background-color: ${color.gray[800]};
    color: ${color.white};
    align-items: center;
    justify-content: center;
    z-index: 202;
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const BottomNavSpace = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const BottomNavButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

export const BottomNavUserButton = styled.button`
  background-color: ${color.primary[300]};
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
