import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import styled from 'styled-components';
import { BottomNav } from '../bottomnav/BottomNav';
import { Header } from '../header/Header';
import { useSelector } from 'react-redux';
import { respondTo } from '../../styled/GlobalStyle';

const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 70px;

  .main {
    width: 100%;
    flex: 1;
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
        <Footer className="footer" />
      </ContentWrap>

      <BottomNav />
    </>
  );
};

export default Layout;
