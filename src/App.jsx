import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Main from './pages/main';  // Main 컴포넌트 import 추가

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          {/* 연결 확인 div를 Main 컴포넌트로 교체 */}
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;