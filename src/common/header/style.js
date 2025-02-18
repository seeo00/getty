import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';
import { color } from '../../styled/common';
import { Link } from 'react-router-dom';

export const Logo = styled(Link)`
  display: block;
  width: ${(props) => (props.auth ? '100px' : '78px')};
`;

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1100;
  background-color: ${color.gray[800]};
  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LeftContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
  > button {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: -8px;
      left: -8px;
      right: -8px;
      bottom: -8px;
      background: transparent;
    }
  }
`;

export const RightContainer = styled.div`
  display: none;
  ${respondTo('tabletMore')} {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: ${({ $active }) => ($active ? 'clamp(200px, 40vw, 400px)' : '40px')};
  height: 40px;
  padding: 0 8px;
  background-color: ${({ $active }) => ($active ? '#000' : 'transparent')};
  border-radius: 4px;
  transition: width 0.3s ease, background-color 0.3s ease;
  position: relative;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: ${({ $active }) => ($active ? '12px' : '50%')};
  transform: ${({ $active }) => ($active ? 'translateX(0)' : 'translateX(-50%)')};
  transition: left 0.3s ease, transform 0.3s ease;
`;

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: white;
  padding-left: ${({ $active }) => ($active ? '40px' : '0')};
  width: ${({ $active }) => ($active ? '100%' : '0')};
  visibility: ${({ $active }) => ($active ? 'visible' : 'hidden')};
  transition: width 0.3s ease, padding-left 0.3s ease, visibility 0.3s ease;
  &::placeholder {
    color: #aaa;
  }
`;

export const ClearButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 10px;
`;

export const UserButton = styled.button`
  background-color: #007bff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${respondTo('mobile')} {
    display: none;
  }
`;

export const AuthHeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1100;
  .inner {
    display: flex;
    align-items: center;
  }
`;
