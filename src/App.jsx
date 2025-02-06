// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import './reset.scss';
import SideNav from './common/nav/SideNav';
import { Main } from './pages/main';
import styled from 'styled-components';
import { Header } from './common/header/Header';
import Footer from './common/footer/Footer';
import { BottomNav } from './common/header/BottomNav';
import { SideNavMobile } from './common/nav/SideNavMobile';

const AppContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #584b00;
  color: #fff;
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <AppContainer>
          <Header />
          <BottomNav />
          <SideNavMobile />
          <Content>
            <Routes>
              <Route
                path='/'
                element={<Main />}
              />
            </Routes>
          </Content>
        </AppContainer>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
