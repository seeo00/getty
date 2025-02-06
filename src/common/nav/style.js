// style.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { respondTo } from '../../styled/GlobalStyle';
import { color } from '../../styled/common';

//데스크톱
export const NavContainer = styled.nav`
  width: ${(props) => (props.isCollapsed ? '80px' : '273px')};
  height: 100vh;
  background-color: ${color.gray[800]};
  color: ${color.gray[70]};
  display: flex; /* display: none 제거 */
  flex-direction: column;
  padding: 20px;
  margin-top: 60px;
  z-index: 1000;

  ${respondTo('mobile')} {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    padding: 10px 0;
    color: white;
    text-decoration: none;
    gap: ${(props) => (props.isCollapsed ? '0' : '10px')};
    justify-content: ${(props) => (props.isCollapsed ? 'center' : 'flex-start')};
  }

  a:hover {
    background-color: ${color.white};
    color: ${color.primary[300]};
    border-radius: 8px;
  }
`;

export const NavLink = styled(Link)`
  color: ${color.gray[70]};
  text-decoration: none;
  margin: 10px 0 0 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    color: ${color.primary[300]};
  }
`;

export const IconWrapper = styled.span`
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

// Divider 컴포넌트 수정: 아이콘 위치에 맞춰 좌측 여백 설정
export const Divider = styled.div`
  background-color: ${color.gray[70]};
  height: 1px;
  width: ${(props) => (props.isCollapsed ? '50px' : '216px')};
  margin: 50px auto;

  ${respondTo('mobile')} {
    margin: 50px -20px;
  }
`;
