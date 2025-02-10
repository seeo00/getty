import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../header/Header';

const HeaderStyled = styled.header`
  width: 100%;
  height: 74px;
  background-color: #999;
`;

const StyledAuthWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledAuthMain = styled.main`
  flex: 1;
`;

const AuthLayout = () => {
  return (
    <StyledAuthWrap>
      <HeaderStyled>헤더</HeaderStyled>
      <StyledAuthMain>
        {/* 라우터 페이지들어오기  */}
        <Outlet />
      </StyledAuthMain>
    </StyledAuthWrap>
  );
};

export default AuthLayout;
