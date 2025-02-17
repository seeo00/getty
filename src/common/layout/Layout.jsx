import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import styled from 'styled-components';
import { BottomNav } from '../bottomnav/BottomNav';
import { Header } from '../header/Header';
import { useSelector } from 'react-redux';
import { respondTo } from '../../styled/GlobalStyle';

const ContentWrap = styled.div`
  width: 100%;
  padding-top: 70px;
  padding-bottom: 64px;

  ${respondTo('tabletMore')} {
    padding-bottom: 0px;
  }

  ${respondTo('desktop')} {
    padding-left: ${({ $isCollapsed }) => ($isCollapsed ? '104px' : '256px')};
  }
`;

const Layout = () => {
  const { isCollapsed } = useSelector((state) => state.mainR);

  return (
    <>
      <Header />
      <ContentWrap $isCollapsed={isCollapsed}>
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </ContentWrap>
      <BottomNav />
    </>
  );
};

export default Layout;
