// App.js
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import GlobalStyle from './styled/GlobalStyle';
import {
  Animation,
  Auth,
  Detail,
  Documentary,
  Drama,
  Latest,
  Main,
  More,
  Movie,
  MyPage,
  Original,
  Popular,
  Profile,
  Reality,
  Search,
  Subscription,
} from './pages';
import SimpleLayout from './common/layout/SimpleLayout';
import Layout from './common/layout/Layout';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/category/popular" element={<Popular />} />
            <Route path="/category/latest" element={<Latest />} />
            <Route path="/category/original" element={<Original />} />
            <Route path="/category/drama" element={<Drama />} />
            <Route path="/category/movie" element={<Movie />} />
            <Route path="/category/reality" element={<Reality />} />
            <Route path="/category/animation" element={<Animation />} />
            <Route path="/category/documentary" element={<Documentary />} />
            <Route path="/more" element={<More />} />
            <Route path="/search" element={<Search />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/category/:category/:detailID" element={<Detail />} />
          </Route>
          <Route element={<SimpleLayout />}>
            <Route path="/auth" element={<Auth />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="mypage/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
