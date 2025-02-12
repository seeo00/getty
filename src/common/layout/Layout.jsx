import { Outlet } from 'react-router-dom';

// import Footer from '../footer/Footer';
import styled from 'styled-components';
// import { BottomNav } from '../header/BottomNav';
import SideNavMobile from '../nav/SideNavMobile';
// import { Header } from '../header/Header';

const AppContainer = styled.div`
  display: flex;
`;

const Content = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #584b00;
  color: #fff;
`;

const Layout = () => {
  return (
    <AppContainer className="wrap">
      {/* <Header /> */}
      {/* <BottomNav /> */}
      <SideNavMobile />
      <Content className="main">
        {/* 라우터 페이지들어오기  */}
        <Outlet />
      </Content>
      {/* <Footer /> */}
    </AppContainer>
  );
};

export default Layout;
