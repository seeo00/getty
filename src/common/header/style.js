import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';
import { color } from '../../styled/common';
import { Link } from 'react-router-dom';
import { Divider, Menu, MenuItem } from '@mui/material';

export const Logo = styled(Link)`
  display: block;
  width: ${(props) => (props.$auth ? '100px' : '78px')};
`;

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5000;
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

// 프로필 드롭다운
export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 8px;
  cursor: pointer;
  &:hover {
    border-radius: 8px;
    background-color: ${color.gray[700]};
  }
`;
export const ProfileImage = styled.img`
  width: ${(props) => props.width || '44px'};
  height: ${(props) => props.height || '44px'};
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  flex: 1;
`;
export const ProfileType = styled.div`
  font-size: 0.75rem;
  color: ${color.gray[70]};
`;

export const ProfileName = styled.div`
  font-size: 16px;
  font-weight: 600;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  max-width: 100%;
  color: white;
`;

export const StyledMenu = styled(Menu)`
  & .MuiPaper-root {
    border-radius: 0 !important;
    background-color: ${color.gray[800]} !important;
    color: ${color.gray[70]};
    top: 70px !important;

    ul {
      padding: 16px 20px;
      margin-top: 0;
      width: 240px;
      li {
        padding: 12px 8px;
        /* margin: 16px 28px; */
        background-color: transparent !important;
        &:hover {
          color: ${color.white};
          .MuiListItemIcon-root svg {
            stroke: #fff !important;
          }
        }
      }
    }
  }
  & .MuiTypography-root {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }
`;

// ✅ 리스트 아이템 스타일
export const StyledMenuItem = styled(MenuItem)`
  display: flex;
  justify-content: space-between !important;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
  }
`;

// ✅ 이용권 스타일드 컴포넌트
export const SubscriptionStatus = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  background-color: ${color.gray[600]};
  color: #fff;
  font-size: 0.625rem;
  padding: 2px 8px;
  border-radius: 12px;
  font-weight: 500;
  //min-width: 50px;
  text-align: center;
`;
