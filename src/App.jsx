// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import { Main } from './pages';
import Auth from './pages/auth';
import AuthLayout from './common/layout/AuthLayout';
import Layout from './common/layout/Layout';
import Highlight from './pages/category/highlight';
import Drama from './pages/category/genre/Drama';
import Movie from './pages/category/genre/movie';
import Reality from './pages/category/genre/reality';
import Animation from './pages/category/genre/animation';
import Documentary from './pages/category/genre/documentary';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/category/highlight" element={<Highlight />} />
            <Route path="/category/genre/drama" element={<Drama />} />
            <Route path="/category/genre/movie" element={<Movie />} />
            <Route path="/category/genre/reality" element={<Reality />} />
            <Route path="/category/genre/animation" element={<Animation />} />
            <Route path="/category/genre/documentary" element={<Documentary />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
          {/* <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Auth />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
