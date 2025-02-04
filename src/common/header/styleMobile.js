import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';

export const MobileHeaderContainer = styled.header`
    display: none;
    ${respondTo('mobile')} {
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 72px;
        background-color: #1e1e1e;
        color: white;
        align-items: center;
        justify-content: center;
        box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
    }
`;

export const MobileNav = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`;

export const MobileNavButton = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
`;

export const MobileUserButton = styled.button`
    background-color: #007bff;
    border: none;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;
