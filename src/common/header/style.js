import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';
import { color } from '../../styled/common';

export const HeaderContainer = styled.header`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${color.gray[800]};
  color: white;
  width: 100%;
  height: 72px;
  z-index: 1000;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoButton = styled.button`
  font-size: 14px;
  font-weight: 400;
  margin-left: 30px;
  background: none;
  border: none;
  color: ${color.white};
  cursor: pointer;
  padding: 0;
`;

// active prop에 따라 배경색과 너비가 변경되도록 설정
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: ${({ active }) => (active ? '300px' : '44px')};
  height: 44px;
  padding: 5px 10px;
  background-color: ${({ active }) => (active ? color.gray[400] : 'transparent')};
  margin-right: 30px;
  transition: width 0.3s ease, background-color 0.3s ease;

  ${respondTo('mobile')} {
    display: none;
  }
`;

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: white;
  padding: 13px;
  width: 100%;
  &::placeholder {
    color: ${color.footertext};
  }
`;

// 버튼으로 검색 아이콘과 X 표시를 전환
export const SearchToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
`;

export const UserButton = styled.button`
  background-color: #007bff;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${respondTo('mobile')} {
    display: none;
  }
`;
