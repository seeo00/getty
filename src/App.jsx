// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import { Animation, Auth, Documentary, Drama, Main, Movie, Reality } from './pages';
import AuthLayout from './common/layout/AuthLayout';
import Layout from './common/layout/Layout';
import Highlight from './pages/category/highlight';

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
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Auth />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
