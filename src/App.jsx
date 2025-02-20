

// App.js
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import GlobalStyle from './styled/GlobalStyle';
import { Animation, Auth, Documentary, Drama, Latest, Main, More, Movie, Original, Popular, Reality } from './pages';
import AuthLayout from './common/layout/AuthLayout';
import Layout from './common/layout/Layout';
import MyPage from './pages/mypage';
import Subscription from './pages/mypage/Subscription';
import Profile from './pages/mypage/profile';
import Detail from './pages/detail';
// import Drama from './pages/category/genre';

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />

            {/* <Route path="/category/highlight" element={<Highlight />} /> */}
            <Route path="/category/popular" element={<Popular />} />
            <Route path="/category/latest" element={<Latest />} />
            <Route path="/category/original" element={<Original />} />
            <Route path="/category/drama" element={<Drama />} />
						{/* <Route path=":detail/:detailID" element={<Detail />} />
						</Route> */}
            <Route path="/category/movie" element={<Movie />} />
            <Route path="/category/reality" element={<Reality />} />
            <Route path="/category/animation" element={<Animation />} />
            <Route path="/category/documentary" element={<Documentary />} />
            <Route path="/more" element={<More />} />

            {/* <Route index element={<Main />} /> */}

            <Route path="mypage" element={<MyPage />} />
            <Route path="/mypage/subscription" element={<Subscription />} />
            <Route path="/mypage/profile" element={<Profile />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Auth />} />
          </Route>
					<Route path="/category/:drama/:detail/:detailID" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
