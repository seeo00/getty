// style.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { respondTo } from '../../styled/GlobalStyle';

export const NavContainer = styled.nav`
    width: 218px; /* 조금 더 유동적인 너비 */
    height: 100vh;
    background-color: #1e1e1e;
    color: #aaa;
    display: flex;
    flex-direction: column;
    padding: 20px;
    &.on {
        left: 0;
    }

    ${respondTo('mobile')} {
        position: absolute;
        margin-top: 60px;
        display: block;
    }
    ${respondTo('tablet')} {
        display: none;
    }
    ${respondTo('desktop')} {
        display: none;
    }

    a {
        display: flex;
        align-items: center;
        padding: 10px 0;
        color: white;
        text-decoration: none;
        gap: 10px;
        justify-content: flex-start;
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

export const Divider = styled.div`
    background-color: #aaa;
    height: 1px;
    width: 216px;
    margin: 50px auto;

    ${respondTo('mobile')} {
        margin: 50px -20px;
    }
`;
