import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import styled from 'styled-components';
import { BottomNav } from '../bottomnav/BottomNav';
import SideNavMobile from '../nav/SideNavMobile';
import { Header } from '../header/Header';
import { color } from '../../styled/common';

const AppContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  background: ${color.gray[800]};
  color: #fff;
`;

const Layout = () => {
  return (
    <AppContainer className="wrap">
      <Header className="Header" />
      <BottomNav className="BottomNav" />
      <SideNavMobile />
      <Content className="main">
        {/* 라우터 페이지들어오기  */}
        <Outlet />
      </Content>
      <Footer />
    </AppContainer>
  );
};

export default Layout;
