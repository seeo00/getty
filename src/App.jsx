// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import './reset.scss';
// import Main from './pages/main/index.jsx';
// import Auth from './pages/auth';
// import MyPage from './pages/mypage';
import { Main } from './pages';
import Auth from './pages/auth';
import AuthLayout from './common/layout/AuthLayout';
import Layout from './common/layout/Layout';
import Detail from './pages/detail';
import Drama from './pages/category/genre';
// import styled from 'styled-components';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Auth />} />
          </Route>
          {/* <Route path="/category/genre" element={<Drama />} />
          <Route path="/category/genre/:detailID" element={<Detail />} /> */}
          <Route path="/category/genre" element={<Drama />}>
            <Route path=":detailType/:detailID" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
