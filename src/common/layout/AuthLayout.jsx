import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import AuthHeader from '../header/AuthHeader';
import { respondTo } from '../../styled/GlobalStyle';

const StyledAuthWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledAuthMain = styled.main`
  flex: 1;
  padding-top: 70px;

  ${respondTo('tabletMore')} {
    padding: 0;
  }
`;

const AuthLayout = () => {
  return (
    <StyledAuthWrap>
      <AuthHeader />
      <StyledAuthMain>
        <Outlet />
      </StyledAuthMain>
    </StyledAuthWrap>
  );
};

export default AuthLayout;
