// style.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { respondTo } from '../../styled/GlobalStyle';

export const NavContainer = styled.nav`
    width: ${(props) => (props.isCollapsed ? '80px' : '273px')};
    height: 100vh;
    background-color: #1e1e1e;
    color: #aaa;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-top: 60px;
    /* transition: width 0.3s ease-in-out; */
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
        background-color: #fff;
        color: #00f;
        border-radius: 8px;
    }
`;

export const NavLink = styled(Link)`
    color: #aaa;
    text-decoration: none;
    margin: 10px 0 0 0;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    font-weight: 500;

    &:hover {
        color: #00f;
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
    background-color: #aaa;
    height: 1px;
    width: 216px;
    margin: 50px auto;

    ${respondTo('mobile')} {
        margin: 50px -20px;
    }
`;
