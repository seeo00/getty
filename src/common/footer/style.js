import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';

export const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: black;
    color: gray;
    margin-left: 273px;
    padding: 20px 20px 20px 160px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ${respondTo('mobile')} {
        display: none;
    }
`;

export const TapContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 15px;
`;

export const Tab = styled.a`
    color: gray;
    text-decoration: none;
    padding-right: 24px;
    font-size: 16px;

    &:hover {
        color: white;
    }
`;

export const FooterText = styled.div`
    font-size: 12px;
    text-align: left;
    line-height: 1.5;
    color: #989899;
`;
