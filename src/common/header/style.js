import styled from 'styled-components';
import { respondTo } from '../../styled/GlobalStyle';

export const HeaderContainer = styled.header`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #1e1e1e;
    color: white;
    width: 100%;
    height: 60px;
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
    color: #fff;
    cursor: pointer;
    padding: 0;
`;

export const SearchBar = styled.div`
    display: flex;
    align-items: center;
    width: 449px;
    height: 45px;
    background: #000;
    padding: 5px 10px;
    border-radius: 24px;
    margin-right: 20px;

    ${respondTo('mobile')} {
        display: none;
    }
`;

export const SearchInput = styled.input`
    background: transparent;
    border: none;
    outline: none;
    color: white;
    padding: 5px;
    width: 200px;

    &::placeholder {
        color: #989899;
    }
`;

export const UserButton = styled.button`
    background-color: #007bff;
    border: none;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    ${respondTo('mobile')} {
        display: none;
    }
`;
